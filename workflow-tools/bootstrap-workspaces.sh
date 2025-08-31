#!/usr/bin/env bash
set -euo pipefail
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

echo "▶ Point game-server deps to local packages via link:"
npm pkg set -w game-server dependencies.@warboy/chat="link:../../packages/chat"
npm pkg set -w game-server dependencies.@warboy/net="link:../../packages/net"
npm pkg set -w game-server dependencies.@warboy/overlays="link:../../packages/overlays"
npm pkg set -w game-server dependencies.@warboy/world="link:../../packages/world"

echo "▶ Install to create symlinks…"
npm i

echo "▶ Build internal libs (order matters a bit)…"
npm run -w @warboy/overlays build || true
npm run -w @warboy/world    build || true
npm run -w @warboy/chat     build || true
npm run -w @warboy/net      build || true

echo "▶ (Defensive) Add TS path aliases at root…"
node -e 'const f="tsconfig.json";const fs=require("fs");const j=JSON.parse(fs.readFileSync(f));j.compilerOptions=j.compilerOptions||{};j.compilerOptions.baseUrl=j.compilerOptions.baseUrl||".";j.compilerOptions.paths=Object.assign({"@warboy/*":["packages/*/src","packages/*/dist"]},j.compilerOptions.paths||{});fs.writeFileSync(f,JSON.stringify(j,null,2));console.log("updated",f)'

echo "✅ bootstrap complete."
