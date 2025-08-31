#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

PORTS=("8787" "8790" "5173" "5175")

echo "▶ Killing anything on ${PORTS[*]}..."
for p in "${PORTS[@]}"; do
  lsof -ti :"$p" | xargs -r kill -9 || true
done

echo "▶ Cleaning old dist outputs..."
rm -rf apps/game-server/dist || true
rm -rf apps/game-web/dist || true
find packages -maxdepth 2 -name dist -type d -exec rm -rf {} +

echo "▶ Building shared packages (adjust as needed)…"
# Build overlays/world/chat etc. in the right order for your repo
npm run -w @warboy/overlays build || true
npm run -w @warboy/world build || true
npm run -w @warboy/chat build || true
npm run -w game-server build

echo "▶ Starting servers…"
# game-server
node apps/game-server/dist/index.js &
PID_SERVER=$!

# game-web (vite dev)
( cd apps/game-web && npm run dev -- --host 0.0.0.0 --port 5175 --strictPort ) &
PID_WEB=$!

# optional: chat-server (if/when you add it)
if [ -d "apps/chat-server" ]; then
  echo "▶ Starting chat-server…"
  ( cd apps/chat-server && npm run dev ) &
  PID_CHAT=$!
else
  PID_CHAT=""
fi

cleanup() {
  echo "▶ Stopping…"
  [ -n "$PID_CHAT" ] && kill "$PID_CHAT" 2>/dev/null || true
  kill "$PID_WEB" 2>/dev/null || true
  kill "$PID_SERVER" 2>/dev/null || true
}
trap cleanup EXIT

echo "▶ All set. PIDs: server=$PID_SERVER web=$PID_WEB ${PID_CHAT:+chat=$PID_CHAT}"
wait

