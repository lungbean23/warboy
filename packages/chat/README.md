# @warboy/chat

Lightweight browser client for the Warboy chat protocol.

- **send** → `{ t: "chat/send", room?: string, text: string }`
- **recv** ← `{ t: "chat/recv", msg: ChatMsg }`
- **history** ← `{ t: "chat/history", room: string, messages: ChatMsg[] }`

This package stays UI-focused and server-agnostic. The game can “drive”
the chat (open/close, send text), but chat networking & storage live
outside the rendering loop.

## Install / Build

From repo root:

```bash
npm -C packages/chat run build
(Or with workspaces: npm run -w packages/chat build)

API (client)
ts
Copy code
export type ChatMsg = {
  id: string;
  room: string;
  from: { id: string; name?: string };
  text: string;
  ts: number;
};

export function connectChat(opts: {
  url: string;               // ws://host:port (e.g. ws://localhost:8790)
  name: string;              // nickname sent in "hello"
  room?: string;             // default "global"
  onOpen?: () => void;
  onRecv?: (m: ChatMsg) => void;
  onHistory?: (room: string, msgs: ChatMsg[]) => void;
  onClose?: () => void;
}): {
  readonly ready: boolean;
  send(text: string, room?: string): void;
  close(): void;
  socket: WebSocket;
}
Usage (React)
tsx
Copy code
import { useEffect, useRef, useState } from "react";
import { connectChat, ChatMsg } from "@warboy/chat";

export function ChatOverlay() {
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const conn = useRef<ReturnType<typeof connectChat>>();

  useEffect(() => {
    const c = connectChat({
      url: import.meta.env.VITE_CHAT_WS_URL || `ws://${location.hostname}:8790`,
      name: "player-" + Math.floor(Math.random()*1000),
      room: "global",
      onHistory: (_r, hist) => setMsgs(hist.slice(-200)),
      onRecv: (m) => setMsgs((prev) => [...prev, m].slice(-200)),
    });
    conn.current = c;
    return () => c.close();
  }, []);

  return (
    <div>
      {/* … render msgs … */}
      <button disabled={!conn.current?.ready} onClick={() => conn.current?.send("hello")}>
        Send
      </button>
    </div>
  );
}
Env
VITE_CHAT_WS_URL – defaults to ws://<host>:8790 (local dev).

Roadmap
Server storage adapters (file NDJSON → later DB/datalake or Towns).

Reconnect/backoff on client.

pgsql
Copy code

---

# New: apps/chat-server (standalone, file-backed)

_Create these files:_

**apps/chat-server/package.json**
```json
{
  "name": "@warboy/chat-server",
  "private": true,
  "version": "0.1.0",
  "type": "commonjs",
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "nanoid": "^5.0.0",
    "ws": "^8.16.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0"
  }
}
