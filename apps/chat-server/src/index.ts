import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { nanoid } from "nanoid";
import { cfg } from "./config";
import { FileStore } from "./store/file";
import type { ChatMsg, Wire } from "./types";
import { log, warn } from "./logger";
import { join } from "path";

const store = new FileStore(cfg.dataDir);

type Client = {
  id: string;
  name: string;
  room: string;
  ws: WebSocket;
  isAlive: boolean;
  rl: { tokens: number; last: number };
};

const rooms = new Map<string, Set<Client>>();
const clients = new WeakMap<WebSocket, Client>();

const now = () => Date.now();

function joinRoom(c: Client, room: string) {
  if (c.room) rooms.get(c.room)?.delete(c);
  c.room = room;
  if (!rooms.has(room)) rooms.set(room, new Set());
  rooms.get(room)!.add(c);
}

function broadcast(room: string, payload: unknown) {
  const set = rooms.get(room);
  if (!set) return;
  for (const c of set) {
    if (c.ws.readyState === WebSocket.OPEN) {
      c.ws.send(JSON.stringify(payload));
    }
  }
}

function allowSend(c: Client) {
  // simple token bucket: refill by window
  const t = now();
  const elapsed = t - c.rl.last;
  if (elapsed >= cfg.rate.windowMs) {
    const windows = Math.floor(elapsed / cfg.rate.windowMs);
    c.rl.tokens = Math.min(cfg.rate.count, c.rl.tokens + windows * cfg.rate.count);
    c.rl.last = t - (elapsed % cfg.rate.windowMs);
  }
  if (c.rl.tokens > 0) {
    c.rl.tokens -= 1;
    return true;
  }
  return false;
}

const http = createServer((req, res) => {
  if (!req.url) { res.statusCode = 404; return res.end(); }
  if (req.url.startsWith("/healthz")) return res.end("ok");
  if (req.url.startsWith("/metrics")) {
    const roomsCount = rooms.size;
    let clientsCount = 0;
    for (const s of rooms.values()) clientsCount += s.size;
    res.setHeader("content-type","text/plain; charset=utf-8");
    res.end(
      `rooms ${roomsCount}\nclients ${clientsCount}\n` +
      `data_dir ${join(cfg.dataDir,"")}\n`
    );
    return;
  }
  res.statusCode = 404;
  res.end("not found");
});

const wss = new WebSocketServer({ server: http });

wss.on("connection", (ws) => {
  const c: Client = {
    id: nanoid(),
    name: "anon",
    room: "global",
    ws,
    isAlive: true,
    rl: { tokens: cfg.rate.count, last: now() }
  };
  clients.set(ws, c);
  joinRoom(c, c.room);

  // initial history
  ws.send(JSON.stringify({ t: "chat/history", room: c.room, messages: store.history(c.room, cfg.historyLimit) }));

  ws.on("pong", () => (c.isAlive = true));

  ws.on("message", (buf) => {
    let msg: Wire | undefined;
    try {
      msg = JSON.parse(String(buf));
    } catch {
      return;
    }

    if (msg.t === "hello") {
      if (msg.name) c.name = String(msg.name).slice(0, 64);
      if (msg.room && msg.room !== c.room) {
        joinRoom(c, String(msg.room).slice(0, 64));
      }
      ws.send(JSON.stringify({ t: "chat/history", room: c.room, messages: store.history(c.room, cfg.historyLimit) }));
      return;
    }

    if (msg.t === "chat/send") {
      if (!allowSend(c)) return; // over limit
      const text = String(msg.text ?? "").slice(0, 2000);
      if (!text.trim()) return;
      const room = msg.room ? String(msg.room).slice(0, 64) : c.room;
      const chatMsg: ChatMsg = {
        id: nanoid(),
        room,
        from: { id: c.id, name: c.name },
        text,
        ts: Date.now()
      };
      store.append(room, chatMsg);
      broadcast(room, { t: "chat/recv", msg: chatMsg });
      return;
    }
  });

  ws.on("close", () => {
    rooms.get(c.room)?.delete(c);
  });
});

const iv = setInterval(() => {
  for (const s of rooms.values()) {
    for (const c of s) {
      if (!c.isAlive) {
        warn("stale client, terminating", c.id);
        try { c.ws.terminate(); } catch {}
        s.delete(c);
        continue;
      }
      c.isAlive = false;
      try { c.ws.ping(); } catch {}
    }
  }
}, cfg.pingIntervalMs).unref();

http.listen(cfg.port, () => {
  log(`chat-server :${cfg.port}`);
});

process.on("SIGINT", () => { clearInterval(iv); http.close(() => process.exit(0)); });
process.on("SIGTERM", () => { clearInterval(iv); http.close(() => process.exit(0)); });
