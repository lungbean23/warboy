# workflow-tools/dev-all/helpers/build.sh
#!/usr/bin/env bash
set -euo pipefail

NAME="${1:-warboy}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
[ -f "$ROOT_DIR/.env" ] && set -a && . "$ROOT_DIR/.env" && set +a
cd "$ROOT_DIR"

# Order matters if there are deps between packages
PKG_DIRS=(packages/chat packages/net packages/overlays packages/world)

# Ensure each package has a tsconfig that emits declarations to dist/
ensure_pkg_tsconfig () {
  local dir="$1"
  if [ ! -f "$dir/tsconfig.json" ]; then
    cat > "$dir/tsconfig.json" <<'JSON'
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true,
    "composite": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "target": "ES2022",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"]
}
JSON
  fi
}

echo "▶ [$NAME] Ensuring package tsconfig.json files…"
for d in "${PKG_DIRS[@]}"; do ensure_pkg_tsconfig "$d"; done

echo "▶ [$NAME] Building shared packages once (warm-up)…"
TS_NODE_PROJECT="" npx tsc -b "${PKG_DIRS[@]}"

echo "✔ build done"

