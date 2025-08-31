#!/usr/bin/env bash
set -euo pipefail

# Args: [session_name] [tail_lines]
NAME="${1:-warboy}"
TAIL="${2:-40}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"

# Ports we care about (name -> port)
declare -A PORTS=(
  ["game-server"]=8787
  ["chat-server"]=8790
  ["auth-api"]=8789
  ["admin-api"]=8788
  ["towns-web"]=5173
  ["game-web"]=5175
  ["admin-web"]=5177
)

# Known panes / labels we set in launch.sh
PANES=(packages-watch game-server chat-server auth-api admin-api towns-bot game-web admin-web towns-web)

line () { printf '%s\n' "--------------------------------------------------------------------------------"; }

echo "ROOT_DIR=$ROOT_DIR"
echo "tmux session: $NAME"
line

# --- tmux session / panes ---
if tmux has-session -t "$NAME" 2>/dev/null; then
  echo "tmux: session '$NAME' exists"
  echo
  tmux list-panes -t "$NAME" -a \
    -F "#{session_name}:#{window_index}.#{pane_index}  title='#{pane_title}'  active=#{pane_active}  cmd='#{pane_current_command}'  path=#{pane_current_path}" \
    | sed 's/^/  /'
else
  echo "tmux: session '$NAME' NOT FOUND"
fi

line

# --- ports ---
echo "LISTENING PORTS:"
for label in "${!PORTS[@]}"; do
  port="${PORTS[$label]}"
  if pids=$(lsof -iTCP:"$port" -sTCP:LISTEN -n -P -t 2>/dev/null | tr '\n' ' '); then
    if [ -n "${pids// /}" ]; then
      echo "  ✅ $label :$port  (pids: $pids)"
    else
      echo "  ❌ $label :$port  (not listening)"
    fi
  else
    echo "  ❌ $label :$port  (not listening)"
  fi
done

line

# --- last statuses from logs ---
echo "LOG STATUS (tail $TAIL lines each if present):"
for label in "${PANES[@]}"; do
  f="$LOG_DIR/${label}.latest.log"
  if [ -f "$f" ]; then
    echo "➜ $label  ($f)"
    grep -E '\[BEGIN|\[END' "$f" | tail -n 2 | sed 's/^/  /' || true
  else
    echo "➜ $label  (no log)"
  fi
done

line

# --- recent errors (quick scan) ---
echo "RECENT ERRORS/WARNINGS (scan last $TAIL lines):"
for label in "${PANES[@]}"; do
  f="$LOG_DIR/${label}.latest.log"
  if [ -f "$f" ]; then
    errs=$(tail -n "$TAIL" "$f" | grep -E -i 'error|EADDRINUSE|ECONN|ERR_|Traceback|Unhandled|Exception|cannot find module|not listening' || true)
    if [ -n "$errs" ]; then
      echo "● $label:"
      echo "$errs" | sed 's/^/  /'
      echo
    fi
  fi
done

echo "Done."

