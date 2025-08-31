#!/usr/bin/env bash
set -euo pipefail

NAME="${1:-warboy}"

SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
[ -f "$ROOT_DIR/.env" ] && set -a && . "$ROOT_DIR/.env" && set +a
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"


# HUD mode: "logs" (tmux panes), "attach" (attach tmux), or "web" (browser SSE)
HUD_MODE="${HUD_MODE:-web}"

# --- Preconditions ---
if ! tmux has-session -t "$NAME" 2>/dev/null; then
  echo "ERROR: tmux session '$NAME' not found. Run: workflow-tools/dev-all/dev-all.sh launch --name $NAME" >&2
  exit 1
fi

# Find windows created by launch.sh (for attach mode)
mapfile -t WIN_NAMES   < <(tmux list-windows -t "$NAME" -F '#{window_name}')
mapfile -t SERVER_WINS < <(printf "%s\n" "${WIN_NAMES[@]}" | grep -E '^servers(-[0-9]+)?$' || true)
mapfile -t WEB_WINS    < <(printf "%s\n" "${WIN_NAMES[@]}" | grep -E '^web(-[0-9]+)?$' || true)

WANTED_WINS=()
if [ "${#SERVER_WINS[@]}" -gt 0 ]; then WANTED_WINS+=("${SERVER_WINS[@]}"); fi
if [ "${#WEB_WINS[@]}"    -gt 0 ]; then WANTED_WINS+=("${WEB_WINS[@]}"); fi

have_gui_env() {
  [ -n "${DISPLAY:-}" ] || [ -n "${WAYLAND_DISPLAY:-}" ] || [ "${XDG_SESSION_TYPE:-}" = "wayland" ]
}

launch_new_terminal() {
  local term="$1"
  local cmd="$2"
  case "$term" in
    gnome-terminal)                   nohup gnome-terminal --maximize -- bash -lc "$cmd" >/dev/null 2>&1 & ;;
    mate-terminal|xfce4-terminal)     nohup "$term" --maximize -- bash -lc "$cmd" >/dev/null 2>&1 & ;;
    konsole|kitty|alacritty|xterm)    nohup "$term" -e bash -lc "$cmd" >/dev/null 2>&1 & ;;
    wezterm)                           nohup wezterm start -- bash -lc "$cmd" >/dev/null 2>&1 & ;;
    ptyxis)                            nohup ptyxis --standalone -- bash -lc "$cmd" >/dev/null 2>&1 \
                                         || nohup ptyxis --standalone >/dev/null 2>&1 & ;;
    *) return 1 ;;
  esac
}

spawn_attach_windows() {
  # Prefer explicit $TERMINAL
  if [ -n "${TERMINAL:-}" ] && command -v "$TERMINAL" >/dev/null 2>&1; then
    for w in "${WANTED_WINS[@]}"; do
      launch_new_terminal "$TERMINAL" "tmux attach -t '$NAME' \\; select-window -t '$w'"
    done
    return 0
  fi
  local terms=(ptyxis gnome-terminal mate-terminal xfce4-terminal konsole kitty alacritty wezterm xterm)
  for t in "${terms[@]}"; do
    if command -v "$t" >/dev/null 2>&1; then
      for w in "${WANTED_WINS[@]}"; do
        launch_new_terminal "$t" "tmux attach -t '$NAME' \\; select-window -t '$w'"
      done
      return 0
    fi
  done
  return 1
}

# List of app labels we know (matches launch.sh)
APP_LABELS=(packages-watch game-server chat-server auth-api admin-api towns-bot game-web admin-web towns-web)

spawn_log_windows() {
  mkdir -p "$LOG_DIR"
  # Prefer explicit $TERMINAL
  local term_to_use=""
  if [ -n "${TERMINAL:-}" ] && command -v "$TERMINAL" >/dev/null 2>&1; then
    term_to_use="$TERMINAL"
  else
    local terms=(ptyxis gnome-terminal mate-terminal xfce4-terminal konsole kitty alacritty wezterm xterm)
    for t in "${terms[@]}"; do
      if command -v "$t" >/dev/null 2>&1; then term_to_use="$t"; break; fi
    done
  fi
  [ -z "$term_to_use" ] && return 1

  for label in "${APP_LABELS[@]}"; do
    # tail only if there’s either a latest symlink or any timestamped log
    local latest="$LOG_DIR/${label}.latest.log"
    local any_ts
    any_ts=$(ls -1 "$LOG_DIR/${label}."*.log 2>/dev/null | head -n 1 || true)

    if [ -f "$latest" ] || [ -n "$any_ts" ]; then
      # show latest if present, else first ts log; keep window title helpful
      local target="${latest}"
      [ ! -f "$latest" ] && target="$any_ts"
      launch_new_terminal "$term_to_use" "printf '\\033]0;${label}\\007'; clear; echo '== ${label} =='; tail -n 200 -F '$target'"
    fi
  done
  return 0
}

# --- Main ---
if ! have_gui_env; then
  echo "ERROR: No GUI environment detected to pop the HUD." >&2
  exit 1
fi

case "$HUD_MODE" in
  attach)
    if [ "${#WANTED_WINS[@]}" -eq 0 ]; then
      echo "ERROR: No 'servers-*' or 'web-*' windows to attach to. Try HUD_MODE=logs." >&2
      exit 1
    fi
    if spawn_attach_windows; then
      echo "HUD (attach) opened (windows: ${WANTED_WINS[*]})"
      exit 0
    fi
    ;;
  web)
    HUD_SCRIPT="$SCRIPT_DIR/display/web_hud.sh"
    if [ ! -x "$HUD_SCRIPT" ]; then
      echo "HUD script not found or not executable: $HUD_SCRIPT" >&2
      exit 1
    fi
    # Run the web HUD (starts node server and opens browser)
    bash "$HUD_SCRIPT" "$NAME"
    echo "Web HUD requested. If the browser didn't open, visit: http://localhost:${PORT:-5599}/"
    exit 0
    ;;
  logs|*)
  # pick a terminal
  term_to_use=""
  if [ -n "${TERMINAL:-}" ] && command -v "$TERMINAL" >/dev/null 2>&1; then
    term_to_use="$TERMINAL"
  else
    for t in ptyxis gnome-terminal mate-terminal xfce4-terminal konsole kitty alacritty wezterm xterm; do
      if command -v "$t" >/dev/null 2>&1; then term_to_use="$t"; break; fi
    done
  fi
  [ -z "$term_to_use" ] && { echo "No GUI terminal found for HUD." >&2; exit 1; }

  HUD_SCRIPT="$SCRIPT_DIR/display/nice_display.sh"
  if [ ! -x "$HUD_SCRIPT" ]; then
    echo "HUD script not found or not executable: $HUD_SCRIPT" >&2
    exit 1
  fi

  # open a single GUI terminal that runs the HUD script
  case "$term_to_use" in
    gnome-terminal)                   nohup gnome-terminal --maximize -- bash -lc "exec '$HUD_SCRIPT' '$NAME'" >/dev/null 2>&1 & ;;
    mate-terminal|xfce4-terminal)     nohup "$term_to_use" --maximize -- bash -lc "exec '$HUD_SCRIPT' '$NAME'" >/dev/null 2>&1 & ;;
    konsole|kitty|alacritty|xterm)    nohup "$term_to_use" -e bash -lc "exec '$HUD_SCRIPT' '$NAME'" >/dev/null 2>&1 & ;;
    wezterm)                           nohup wezterm start -- bash -lc "exec '$HUD_SCRIPT' '$NAME'" >/dev/null 2>&1 & ;;
    ptyxis)                            nohup ptyxis --standalone -- bash -lc "exec '$HUD_SCRIPT' '$NAME'" >/dev/null 2>&1 \
                                         || nohup ptyxis --standalone >/dev/null 2>&1 & ;;
  esac

  echo "Web HUD requested. If the browser didn't open, visit: http://localhost:${PORT:-5599}/"
    exit 0
  ;;
esac

echo "ERROR: Could not find a GUI terminal to launch HUD (tried: ptyxis, gnome-terminal, mate-terminal, xfce4-terminal, konsole, kitty, alacritty, wezterm, xterm)." >&2
echo "Hint: install one (e.g., dnf install gnome-terminal) or export TERMINAL to a supported terminal (e.g., TERMINAL=ptyxis)." >&2
exit 1

