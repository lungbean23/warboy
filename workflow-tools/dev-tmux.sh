#!/usr/bin/env bash
set -euo pipefail

NAME=warboy
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

# Kill old session & free ports
tmux has-session -t "$NAME" 2>/dev/null && tmux kill-session -t "$NAME" || true
PORTS=(8787 8790 5173 5175)
echo "▶ Killing anything on ${PORTS[*]}..."
for p in "${PORTS[@]}"; do lsof -ti :"$p" | xargs -r kill -9 || true; done

# Clean & build
echo "▶ Cleaning dists…"
rm -rf apps/game-server/dist apps/game-web/dist || true
find packages -maxdepth 2 -name dist -type d -exec rm -rf {} +

echo "▶ Building shared packages…"
npm run -w @warboy/overlays build || true
npm run -w @warboy/world    build || true
npm run -w @warboy/chat     build || true
npm run -w @warboy/net      build || true
npm run -w game-server      build

# New tmux session
tmux new-session -d -s "$NAME" -n dev

# Pane 0: game-server
tmux send-keys -t "$NAME":0.0 "cd $ROOT_DIR; node apps/game-server/dist/index.js" C-m

# Pane 1: game-web (vite)
tmux split-window -h -t "$NAME":0
tmux send-keys -t "$NAME":0.1 "cd $ROOT_DIR/apps/game-web; npm run dev -- --host 0.0.0.0 --port 5175 --strictPort" C-m

# Pane 2: chat-server (tsx watch)
tmux split-window -v -t "$NAME":0.0
tmux send-keys -t "$NAME":0.2 "cd $ROOT_DIR/apps/chat-server; npm run dev" C-m

# Pane 3: utils shell
tmux split-window -v -t "$NAME":0.1
tmux send-keys -t "$NAME":0.3 "cd $ROOT_DIR; echo 'utils pane ready (curl/wscat here)'; bash" C-m

tmux select-layout -t "$NAME":0 tiled
tmux select-pane -t "$NAME":0.3 -T 'utils' 2>/dev/null || true
tmux attach -t "$NAME"
