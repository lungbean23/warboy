#!/usr/bin/env bash
set -euo pipefail

# Usage: nice_display.sh [session_name]
NAME="${1:-warboy}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"

HUD_SESSION="${NAME}-hud"     # tmux session to create for the display
HUD_WINDOW="logs"             # window name
HUD_MIN_PANE_H="${HUD_MIN_PANE_H:-3}"  # minimum split height when stacking

# Known labels (should match launch.sh)
APP_LABELS=(packages-watch game-server chat-server auth-api admin-api towns-bot game-web admin-web towns-web)

# Require a running base session just to ensure dev logs exist
if ! tmux has-session -t "$NAME" 2>/dev/null; then
  echo "ERROR: tmux session '$NAME' not found. Start with: workflow-tools/dev-all/dev-all.sh launch --name $NAME" >&2
  exit 1
fi

mkdir -p "$LOG_DIR"

# Collect targets: only include labels that have logs
LABELS_TO_SHOW=()
FILES_TO_SHOW=()
for label in "${APP_LABELS[@]}"; do
  latest="$LOG_DIR/${label}.latest.log"
  if [ -f "$latest" ]; then
    LABELS_TO_SHOW+=("$label"); FILES_TO_SHOW+=("$latest"); continue
  fi
  # fallback to any timestamped log
  ts_first=$(ls -1t "$LOG_DIR/${label}."*.log 2>/dev/null | grep -v '\.latest\.log$' | head -n1 || true)
  if [ -n "$ts_first" ]; then
    LABELS_TO_SHOW+=("$label"); FILES_TO_SHOW+=("$ts_first")
  fi
done

if [ "${#LABELS_TO_SHOW[@]}" -eq 0 ]; then
  echo "No logs found in $LOG_DIR. Run dev-all up first." >&2
  exit 1
fi

# Kill any stale HUD session
tmux has-session -t "$HUD_SESSION" 2>/dev/null && tmux kill-session -t "$HUD_SESSION" || true

# Create HUD session/window
tmux new-session -d -s "$HUD_SESSION" -n "$HUD_WINDOW" "bash --noprofile --norc"
tmux set-option -t "$HUD_SESSION" mouse on 2>/dev/null || true
tmux set-option -t "$HUD_SESSION" history-limit 100000 2>/dev/null || true
tmux set-option -t "$HUD_SESSION" remain-on-exit on 2>/dev/null || true

# Pane 0
label0="${LABELS_TO_SHOW[0]}"
file0="${FILES_TO_SHOW[0]}"
tmux select-pane -t "$HUD_SESSION:$HUD_WINDOW.0" -T "$label0" 2>/dev/null || true
tmux send-keys  -t "$HUD_SESSION:$HUD_WINDOW.0" "clear; echo '== $label0 =='; tail -n 200 -F '$file0'" C-m

# Add the rest as vertical splits (1×Y stack)
for ((i=1;i<${#LABELS_TO_SHOW[@]};i++)); do
  lbl="${LABELS_TO_SHOW[$i]}"
  f="${FILES_TO_SHOW[$i]}"
  tmux split-window -v -t "$HUD_SESSION:$HUD_WINDOW" -l "$HUD_MIN_PANE_H" "bash --noprofile --norc"
  tmux select-pane -t "$HUD_SESSION:$HUD_WINDOW.$i" -T "$lbl" 2>/dev/null || true
  tmux send-keys  -t "$HUD_SESSION:$HUD_WINDOW.$i" "clear; echo '== $lbl =='; tail -n 200 -F '$f'" C-m
done

# Make it a clean vertical stack (tmux quirk: 'even-horizontal' = top/bottom)
tmux select-layout -t "$HUD_SESSION:$HUD_WINDOW" even-horizontal
tmux setw -t "$HUD_SESSION:$HUD_WINDOW" pane-border-status top 2>/dev/null || true
tmux setw -t "$HUD_SESSION:$HUD_WINDOW" pane-border-format '#{pane_title}' 2>/dev/null || true

# Small legend
tmux display-message -t "$HUD_SESSION" "🖱️ Scroll panes with mouse; q to detach (prefix+d to detach if using tmux prefix)."

# Attach
exec tmux attach -t "$HUD_SESSION"

