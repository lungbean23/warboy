# @warboy/chat-server

Minimal WS chat server with file-backed storage.

## Protocol

- client → `{ "t":"hello", "name":string, "room"?:string }`
- client → `{ "t":"chat/send", "text":string, "room"?:string }`
- server ← `{ "t":"chat/history", "room":string, "messages":ChatMsg[] }`
- server ← `{ "t":"chat/recv", "msg":ChatMsg }`

Health: `GET /healthz` → `200 ok`
Metrics: `GET /metrics` → basic counters (text)

## Dev

```bash
cp .env.example .env
npm i
npm run dev
npm run build
npm start

Env

CHAT_PORT (default 8790)

CHAT_DATA_DIR (default ./data/chat)

CHAT_HISTORY_LIMIT (default 200)

CHAT_PING_INTERVAL_MS (default 15000)

CHAT_RATE_LIMIT_COUNT (default 10 in window)

CHAT_RATE_LIMIT_WINDOW_MS (default 10000)
