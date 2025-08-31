#!/usr/bin/env bash
set -euo pipefail

# Args: [session_name] [session_tag]
NAME="${1:-warboy}"
SESSION_TAG="${2:-${NAME}-$(date +%Y%m%d-%H%M%S)}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
[ -f "$ROOT_DIR/.env" ] && set -a && . "$ROOT_DIR/.env" && set +a
cd "$ROOT_DIR"
LOG_KEEP="${LOG_KEEP:-2}"
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"
mkdir -p "$LOG_DIR"

# Keep Vite/tsx resolving symlinked workspaces as source-of-truth
ENV_PREFIX='env NODE_OPTIONS="--preserve-symlinks"'

# Watch these with tsc -b -w (in order)
PKG_DIRS=(packages/chat packages/net packages/overlays packages/world)

# Apps (label -> directory)
declare -A APPS=(
  ["game-server"]="apps/game-server"
  ["chat-server"]="apps/chat-server"
  ["auth-api"]="apps/auth-api"
  ["admin-api"]="apps/admin-api"
  ["towns-bot"]="apps/towns-bot"
  ["game-web"]="apps/game-web"
  ["admin-web"]="apps/admin-web"
  ["towns-web"]="apps/towns-web"
)

# --- Validate LOG_KEEP (must be an integer >=1) ---
if ! [[ "$LOG_KEEP" =~ ^[0-9]+$ ]] || (( LOG_KEEP < 1 )); then
  echo "WARN: LOG_KEEP='$LOG_KEEP' is invalid; defaulting to 2" >&2
  LOG_KEEP=2
fi

# prune logs for a label down to $LOG_KEEP newest (ignoring *.latest.log)
prune_logs () {
  local label="$1"
  local keep="${2:-$LOG_KEEP}"
  local -a files files_to_delete
  mapfile -t files < <(ls -1t "$LOG_DIR/${label}."*.log 2>/dev/null | grep -v '\.latest\.log$' || true)
  local count="${#files[@]}"
  if (( count > keep )); then
    files_to_delete=("${files[@]:keep}")
    rm -f "${files_to_delete[@]}" || true
  fi
}

# Prune all known labels once on startup
prune_all_logs () {
  local k
  local all_labels=("packages-watch")
  for k in "${!APPS[@]}"; do all_labels+=("$k"); done
  for k in "${all_labels[@]}"; do prune_logs "$k" "$LOG_KEEP"; done
}

run_pane () {
  local target="$1"; shift
  local label="$1"; shift
  local cmd="$*"
  local log_file="$LOG_DIR/${label}.${SESSION_TAG}.log"

  prune_logs "$label" "$LOG_KEEP"
  ln -sfn "$log_file" "$LOG_DIR/${label}.latest.log"

  tmux send-keys -t "$target" "bash -lc ' \
    mkdir -p \"$LOG_DIR\"; \
    echo \"[BEGIN ${SESSION_TAG}] [$label]\" | tee -a \"$log_file\"; \
    set -o pipefail; \
    { $ENV_PREFIX ${cmd}; } 2>&1 | tee -a \"$log_file\"; \
    ec=\${PIPESTATUS[0]}; \
    echo \"[END ${SESSION_TAG}] [$label] exit=\$ec\" | tee -a \"$log_file\"; \
    exit \$ec \
  '" C-m
}

can_run_app () {
  local dir="$1"
  [ -f "$dir/package.json" ] || return 1
  node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('$dir/package.json','utf8'));process.exit(p.scripts&&(p.scripts.dev||p.scripts.start)?0:1)"
}

# helpers/launch.sh

run_label_in_pane () {
  local pane="$1" label="$2"
  local dir="${APPS[$label]}"   # expand now, in the outer shell

  if [ "$label" = "game-server" ]; then
    run_pane "$pane" "$label" "PORT=8787 npm -C \"$dir\" run dev || npm -C \"$dir\" start"
  else
    run_pane "$pane" "$label" "npm -C \"$dir\" run dev || npm -C \"$dir\" start"
  fi
}



spawn_group () {
  local base_name="$1"; shift
  local labels=("$@")
  local runnable=() l
  local chunk_size=4  # one window per 4 apps

  for l in "${labels[@]}"; do
    can_run_app "${APPS[$l]}" && runnable+=("$l")
  done
  [ ${#runnable[@]} -eq 0 ] && { echo "(skip '$base_name' – nothing runnable)"; return 0; }

  local idx=1
  local start=0
  local end
  while (( start < ${#runnable[@]} )); do
    end=$(( start + chunk_size ))
    (( end > ${#runnable[@]} )) && end=${#runnable[@]}
    local chunk=( "${runnable[@]:start:end-start}" )

    local win_title="$base_name-$idx"
    local win_id
    win_id=$(tmux new-window -t "$NAME" -n "$win_title" -P -F '#{window_id}' "bash --noprofile --norc")

    # First pane
    run_label_in_pane "$win_id.0" "${chunk[0]}"
    tmux select-pane -t "$win_id.0" -T "${chunk[0]}" 2>/dev/null || true

    # Strict 1×Y: add remaining as vertical splits
    local i
    for ((i=1;i<${#chunk[@]};i++)); do
      local pane_id
      pane_id=$(tmux split-window -v -t "$win_id" -P -F '#{pane_id}' "bash --noprofile --norc")
      run_label_in_pane "$pane_id" "${chunk[$i]}"
      tmux select-pane -t "$pane_id" -T "${chunk[$i]}" 2>/dev/null || true
    done

    # Layout = vertical stack; show pane titles on top border
    tmux select-layout -t "$win_id" even-horizontal
    tmux setw -t "$win_id" pane-border-status top 2>/dev/null || true
    tmux setw -t "$win_id" pane-border-format '#{pane_title}' 2>/dev/null || true

    idx=$((idx+1))
    start=$end
  done
}

# If session already exists, just attach (don’t spawn duplicates)
if tmux has-session -t "$NAME" 2>/dev/null; then
  if [ -z "${NO_ATTACH:-}" ]; then
    echo "tmux: attaching existing session '$NAME'"
    tmux attach -t "$NAME"
  else
    echo "tmux: session '$NAME' already running (NO_ATTACH set; not attaching)"
  fi
  exit 0
fi

# --- tmux layout ---
tmux new-session -d -s "$NAME" -n build "bash --noprofile --norc"
tmux set-option -t "$NAME" mouse on 2>/dev/null || true
tmux set-option -t "$NAME" history-limit 100000 2>/dev/null || true
tmux set-option -t "$NAME" remain-on-exit on 2>/dev/null || true

prune_all_logs

# Window 0: build/watch
run_pane "$NAME:0.0" "packages-watch" "npx tsc -b -w ${PKG_DIRS[*]}"
tmux select-pane -t "$NAME:0.0" -T 'packages-watch' 2>/dev/null || true

# Create these windows ONLY if they have runnable apps
spawn_group "servers" game-server chat-server auth-api admin-api towns-bot
spawn_group "web"     game-web   admin-web   towns-web

tmux select-window -t "$NAME":0

if [ -z "${NO_ATTACH:-}" ]; then
  tmux attach -t "$NAME"
else
  echo "tmux: session '$NAME' started (NO_ATTACH set; not attaching)"
fi

