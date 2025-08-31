#!/usr/bin/env bash
set -euo pipefail

# Simple orchestrator over helpers/{prep,build,launch,stop}.sh
# Usage:
#   dev-all.sh up        # stop (fresh), prep, build, launch, HUD
#   dev-all.sh restart   # alias of up
#   dev-all.sh prep|build|launch|status|hud|stop|help
#
# Options:
#   --name <session>     # tmux session name (default: warboy)

NAME="warboy"
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../.." && pwd)"

cmd="${1:-up}"
shift || true

# Parse simple flags
while [[ $# -gt 0 ]]; do
  case "$1" in
    --name|-n) NAME="$2"; shift 2 ;;
    *) echo "Unknown arg: $1"; exit 1 ;;
  esac
done

SESSION_TAG="${NAME}-$(date +%Y%m%d-%H%M%S)"

prep()   { bash "$SCRIPT_DIR/helpers/prep.sh"   "$NAME"; }
build()  { bash "$SCRIPT_DIR/helpers/build.sh"  "$NAME"; }
launch() { bash "$SCRIPT_DIR/helpers/launch.sh" "$NAME" "$SESSION_TAG"; }
stop()   { bash "$SCRIPT_DIR/helpers/stop.sh"   "$NAME"; }
status() { bash "$SCRIPT_DIR/helpers/healthcheck.sh" "$NAME" 80; }
hud()    { HUD_MODE="${HUD_MODE:-web}" bash "$SCRIPT_DIR/helpers/hud.sh" "$NAME"; }  # <-- semicolon fix

case "$cmd" in
  up|restart)
    echo "===== BEGIN ${SESSION_TAG} ====="
    stop || true
    prep
    build
    # Start tmux session but keep this shell free
    NO_ATTACH=1 bash "$SCRIPT_DIR/helpers/launch.sh" "$NAME" "$SESSION_TAG"
    # Launch the HUD (defaults to web)
    HUD_MODE="${HUD_MODE:-web}" bash "$SCRIPT_DIR/helpers/hud.sh" "$NAME"
    ;;
  prep)    prep ;;
  build)   build ;;
  launch)  launch ;;
  status)  status ;;
  hud)     hud ;;
  stop)    stop ;;
  help|-h|--help)
    sed -n '2,30p' "$0" | sed 's/^# \{0,1\}//'
    ;;
  *)
    echo "Unknown command: $cmd"; exit 1 ;;
esac

