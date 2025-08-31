#!/usr/bin/env bash
set -euo pipefail
NAME="${1:-warboy}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$ROOT_DIR"

# Keep these in sync with web_hud.sh
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"
PORT="${PORT:-5599}"
PID_FILE="$LOG_DIR/.web_hud.pid"

echo "▶ Stopping tmux session '$NAME' (if any)…"
tmux has-session -t "$NAME" 2>/dev/null && tmux kill-session -t "$NAME" || true

echo "▶ Freeing ports…"
PORTS=(8787 8790 8789 8788 5173 5175 5177 "$PORT")
for p in "${PORTS[@]}"; do lsof -ti :"$p" | xargs -r kill -9 || true; done
# workflow-tools/dev-all/helpers/stop.sh
# ...
echo "▶ Killing common watchers…"
pkill -f "tsx.*watch" 2>/dev/null || true
pkill -f "vite.*dev" 2>/dev/null || true
pkill -f "tsc -b -w" 2>/dev/null || true

# Kill Web HUD (PID file + fallback)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"
PID_FILE="$LOG_DIR/.web_hud.pid"
if [ -f "$PID_FILE" ]; then
  kill "$(cat "$PID_FILE")" 2>/dev/null || true
  rm -f "$PID_FILE"
fi
pkill -f "helpers/display/web_hud.js" 2>/dev/null || true

echo "✔ stopped"

