import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { nanoid } from 'nanoid';
import { applyTilePatches } from '@warboy/overlays';
import type { OverlayEvent } from '@warboy/overlays';
import { getChunkPatches, getChunkVersion, appendOverlay } from './world/overlays.js';

// network protocol
import type { C2S, S2C } from '@warboy/net';

// chat protocol + server-side chat handler
import type { C2S as ChatC2S } from '@warboy/chat';
import { handleChatMessage } from './chat/handler.js';
import { recent } from './chat/store.js';

// --- INLINE WORLDGEN (temporary) ---
const CHUNK_SIZE = 32;
function genChunk(seed: number, cx: number, cy: number) {
  const w = CHUNK_SIZE, h = CHUNK_SIZE, tiles = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const v = (Math.sin((cx * w + x + seed) * 0.01) + Math.cos((cy * h + y - seed) * 0.013)) * 0.5 + 0.5;
    tiles[y * w + x] = v < 0.35 ? 0 : v > 0.75 ? 2 : 1; // 0 water, 1 grass, 2 rock
  }
  return { cx, cy, w, h, tiles };
}
// --- END INLINE WORLDGEN ---

// --- INLINE BASE64 (server only) ---
function u8ToB64(u8: Uint8Array): string {
  return Buffer.from(u8).toString('base64');
}
// --- END INLINE BASE64 ---

type Player = {
  id: string; name: string;
  x: number; y: number;       // existing UI coords (0..100)
  tx: number; ty: number;     // NEW: world tile coords (unbounded)
  sock: WebSocket; lastSeq: number;
};

const players = new Map<string, Player>();
const WORLD_SEED = 0xC0FFEE;

// lightweight admin HTTP for overlays + chat history
const httpServer = createServer((req, res) => {
  if (req.method === 'GET' && req.url?.startsWith('/chat/recent')) {
    const u = new URL(req.url, 'http://localhost');
    const room = String(u.searchParams.get('room') || 'global');
    const after = u.searchParams.get('after') ? Number(u.searchParams.get('after')) : undefined;
    const limit = u.searchParams.get('limit') ? Number(u.searchParams.get('limit')) : 50;

    recent(room, isNaN(limit) ? 50 : limit, isNaN(after as any) ? undefined : after)
      .then((msgs) => {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ room, messages: msgs }));
      })
      .catch(() => { res.writeHead(500); res.end('error'); });
    return;
  }

  if (req.method === 'POST' && req.url === '/overlay/place') {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      try {
        const { tx, ty, tile, by } = JSON.parse(body ?? '{}');
        const ev: OverlayEvent = {
          t: 'place',
          id: String(Date.now()) + ':' + Math.random().toString(36).slice(2),
          kind: 'tile',
          tx: Number(tx), ty: Number(ty),
          data: { tile: Number(tile) },
          by: String(by || 'admin'),
          at: Date.now(),
        };
        appendOverlay(ev);
        res.writeHead(204); res.end();
      } catch {
        res.writeHead(400); res.end('bad json');
      }
    });
    return;
  }

  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('warboy game-server alive\n');
});

const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (sock) => {
  let me: Player | null = null;

  const sendToRoom = (room: string, frame: unknown) => {
    // TODO: proper room routing; for now broadcast to all
    const payload = JSON.stringify(frame);
    for (const p of players.values()) {
      if (p.sock.readyState === WebSocket.OPEN) p.sock.send(payload);
    }
  };

  // will be assigned after 'hello'
  let onChat: (raw: any) => void = () => {};

  sock.on('message', (buf) => {
    let msg: C2S | ChatC2S;
    try { msg = JSON.parse(buf.toString()); } catch { return; }

    // 1) hello – create player and then wire chat handler using that identity
    if (msg.t === 'hello') {
      const id = nanoid(8);
      const name = sanitize((msg as any).name);

      me = {
        id,
        name,
        x: rand(10, 90), y: rand(10, 90),
        tx: 0, ty: 0,
        sock, lastSeq: 0,
      };
      players.set(id, me);

      onChat = handleChatMessage({
        playerId: id,
        playerName: name,
        defaultRoom: () => 'global',
        sendToRoom,
      });

      const welcome = { t: 'welcome', id, zoneId: 'zone-0', time: Date.now() } as S2C;
      sock.send(JSON.stringify(welcome));

      // send recent chat (as normal chat/recv frames so client needs no new handler)
      recent('global', 30).then((msgs) => {
        for (const m of msgs) {
          if (sock.readyState === WebSocket.OPEN) {
            sock.send(JSON.stringify({ t: 'chat/recv', msg: m }));
          }
        }
      }).catch(() => { /* ignore */ });

      return;
    }

    // Must be authed after hello
    if (!me) return;

    // 2) chat – handle at top level (not inside intent)
    if (isChatMessage(msg)) { onChat(msg); return; }

    // 3) chunk request
    if (msg.t === 'chunkReq') {
      const { cx, cy } = msg;
      const ch = genChunk(WORLD_SEED, cx | 0, cy | 0);
      const ps = getChunkPatches(ch.cx, ch.cy);
      const resolvedTiles = ps.length ? applyTilePatches(ch.tiles, ch.w, ch.h, ps) : ch.tiles;

      const payload: S2C = {
        t: 'chunkData',
        cx: ch.cx, cy: ch.cy, w: ch.w, h: ch.h,
        tilesB64: u8ToB64(resolvedTiles),
        // temporary: include overlay version so clients can see freshness
        // @ts-ignore extend your type later
        version: getChunkVersion(ch.cx, ch.cy),
      } as S2C;

      sock.send(JSON.stringify(payload));
      return;
    }

    // 4) movement intent
    if (msg.t === 'intent') {
      if (msg.seq <= me.lastSeq) return;
      me.lastSeq = msg.seq;

      // existing UI coords
      me.x = clamp(me.x + msg.dx * 1.5, 0, 100);
      me.y = clamp(me.y + msg.dy * 1.5, 0, 100);

      // NEW world coords
      me.tx += msg.dx * 2;
      me.ty += msg.dy * 2;
      return;
    }
  });

  sock.on('close', () => { if (me) players.delete(me.id); });
});

// broadcast snapshots at 10 Hz
setInterval(() => {
  const snapshot = {
    t: 'snapshot',
    time: Date.now(),
    players: [...players.values()].map(p => ({
      id: p.id, name: p.name,
      x: p.x, y: p.y,
      tx: p.tx, ty: p.ty, // NEW
    })),
  };
  const payload = JSON.stringify(snapshot);
  for (const p of players.values()) {
    if (p.sock.readyState === WebSocket.OPEN) p.sock.send(payload);
  }
}, 100);

const PORT = Number(process.env.PORT || 8787);
// bind to all interfaces so LAN clients connect
httpServer.listen(PORT, '0.0.0.0', () => console.log(`game-server :${PORT}`));

function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }
function rand(lo: number, hi: number) { return lo + Math.random() * (hi - lo); }
function sanitize(n: string) { return (n || 'warboy').slice(0, 16); }

function isChatMessage(f: any): f is ChatC2S {
  return f && typeof f.t === 'string' && f.t.startsWith('chat/');
}

