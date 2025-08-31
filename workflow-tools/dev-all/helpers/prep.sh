# workflow-tools/dev-all/helpers/prep.sh
#!/usr/bin/env bash
set -euo pipefail

NAME="${1:-warboy}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
[ -f "$ROOT_DIR/.env" ] && set -a && . "$ROOT_DIR/.env" && set +a
cd "$ROOT_DIR"

# Ports used by apps (just for freeing; apps control their own)
PORTS=(8787 8790 8789 8788 5173 5175 5177)

echo "▶ [$NAME] Freeing ports…"
for p in "${PORTS[@]}"; do lsof -ti :"$p" | xargs -r kill -9 || true; done
pkill -f "tsx.*watch" 2>/dev/null || true
pkill -f "vite.*dev" 2>/dev/null || true
pkill -f "node .*apps/(game-server|chat-server|auth-api|admin-api|towns-bot)" 2>/dev/null || true
pkill -f "tsc -b -w" 2>/dev/null || true

echo "▶ [$NAME] Cleaning minimal dists…"
rm -rf apps/game-server/dist || true
find packages -maxdepth 2 -name dist -type d -exec rm -rf {} + || true

echo "▶ [$NAME] Installing workspace deps…"
npm i -W >/dev/null
echo "✔ prep done"

