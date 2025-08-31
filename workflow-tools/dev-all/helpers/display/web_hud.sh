#!/usr/bin/env bash
set -euo pipefail
NAME="${1:-warboy}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../../.." && pwd)"
[ -f "$ROOT_DIR/.env" ] && set -a && . "$ROOT_DIR/.env" && set +a
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"

HUD_PORT="${HUD_PORT:-5599}"            # ← HUD-only port; won’t collide with app PORTs
PID_FILE="$LOG_DIR/.web_hud.pid"
OUT_LOG="$LOG_DIR/.web_hud.out.log"
ERR_LOG="$LOG_DIR/.web_hud.err.log"

mkdir -p "$LOG_DIR"
chmod +x "$SCRIPT_DIR/web_hud.js" || true

# Export only what the child needs
export REPO_DIR="$ROOT_DIR"
export LOG_DIR

# Stop any previous instance
if [ -f "$PID_FILE" ]; then
  if kill -0 "$(cat "$PID_FILE")" 2>/dev/null; then kill "$(cat "$PID_FILE")" || true; fi
  rm -f "$PID_FILE"
fi
command -v lsof >/dev/null 2>&1 && lsof -ti :"$HUD_PORT" | xargs -r kill -9 || true
pkill -f "$SCRIPT_DIR/web_hud.js" 2>/dev/null || true

: > "$OUT_LOG" || true
: > "$ERR_LOG" || true

# Start exactly one instance with HUD_PORT in its env
nohup env HUD_PORT="$HUD_PORT" node "$SCRIPT_DIR/web_hud.js" >>"$OUT_LOG" 2>>"$ERR_LOG" &
echo $! > "$PID_FILE"

URL="http://localhost:${HUD_PORT}/"
echo "Web HUD starting on ${URL} (logs: ${LOG_DIR})"

# Try to open browser
if command -v xdg-open >/dev/null 2>&1; then xdg-open "$URL" >/dev/null 2>&1 || true
elif command -v gio >/dev/null 2>&1; then gio open "$URL" >/dev/null 2>&1 || true
fi

