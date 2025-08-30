# Project Bundle

Generated: 2025-08-15T04:20:57Z

_This is a compact, AI‑friendly snapshot of the project._
_Text files with known extensions include content; others are stubs._
_Files >999 lines are truncated to the first/last 333/333 lines._
_Use the Table of Contents to jump to any path._
_Git URLs appear when the repo/remote is detected._

## Table of Contents
- [.github/workflows/ci.yml](#github-workflows-ci-yml)
- [BETA.md](#beta-md)
- [apps/admin-api/package.json](#apps-admin-api-package-json)
- [apps/admin-api/src/index.js](#apps-admin-api-src-index-js)
- [apps/admin-api/src/index.ts](#apps-admin-api-src-index-ts)
- [apps/admin-api/tsconfig.json](#apps-admin-api-tsconfig-json)
- [apps/admin-web/index.html](#apps-admin-web-index-html)
- [apps/admin-web/package.json](#apps-admin-web-package-json)
- [apps/admin-web/src/App.js](#apps-admin-web-src-app-js)
- [apps/admin-web/src/App.tsx](#apps-admin-web-src-app-tsx)
- [apps/admin-web/src/main.js](#apps-admin-web-src-main-js)
- [apps/admin-web/src/main.tsx](#apps-admin-web-src-main-tsx)
- [apps/admin-web/tsconfig.json](#apps-admin-web-tsconfig-json)
- [apps/admin-web/vite.config.js](#apps-admin-web-vite-config-js)
- [apps/admin-web/vite.config.ts](#apps-admin-web-vite-config-ts)
- [apps/auth-api/src/routes/login.js](#apps-auth-api-src-routes-login-js)
- [apps/auth-api/src/routes/login.ts](#apps-auth-api-src-routes-login-ts)
- [apps/auth-api/src/routes/nonce.js](#apps-auth-api-src-routes-nonce-js)
- [apps/auth-api/src/routes/nonce.ts](#apps-auth-api-src-routes-nonce-ts)
- [apps/auth-api/src/routes/siwe.js](#apps-auth-api-src-routes-siwe-js)
- [apps/auth-api/src/routes/siwe.ts](#apps-auth-api-src-routes-siwe-ts)
- [apps/auth-api/src/server.js](#apps-auth-api-src-server-js)
- [apps/auth-api/src/server.ts](#apps-auth-api-src-server-ts)
- [apps/auth-api/src/services/jwt.js](#apps-auth-api-src-services-jwt-js)
- [apps/auth-api/src/services/jwt.ts](#apps-auth-api-src-services-jwt-ts)
- [apps/auth-api/src/services/signer.js](#apps-auth-api-src-services-signer-js)
- [apps/auth-api/src/services/signer.ts](#apps-auth-api-src-services-signer-ts)
- [apps/auth-api/src/store/nonces.js](#apps-auth-api-src-store-nonces-js)
- [apps/auth-api/src/store/nonces.ts](#apps-auth-api-src-store-nonces-ts)
- [apps/game-server/package.json](#apps-game-server-package-json)
- [apps/game-server/src/auth/jwtVerify.js](#apps-game-server-src-auth-jwtverify-js)
- [apps/game-server/src/auth/jwtVerify.ts](#apps-game-server-src-auth-jwtverify-ts)
- [apps/game-server/src/chat/handler.js](#apps-game-server-src-chat-handler-js)
- [apps/game-server/src/chat/handler.ts](#apps-game-server-src-chat-handler-ts)
- [apps/game-server/src/index.js](#apps-game-server-src-index-js)
- [apps/game-server/src/index.ts](#apps-game-server-src-index-ts)
- [apps/game-server/src/index.ts.bak](#apps-game-server-src-index-ts-bak)
- [apps/game-server/src/net/protocol.js](#apps-game-server-src-net-protocol-js)
- [apps/game-server/src/net/protocol.ts](#apps-game-server-src-net-protocol-ts)
- [apps/game-server/src/net/wsServer.js](#apps-game-server-src-net-wsserver-js)
- [apps/game-server/src/net/wsServer.ts](#apps-game-server-src-net-wsserver-ts)
- [apps/game-server/src/persistence/db.js](#apps-game-server-src-persistence-db-js)
- [apps/game-server/src/persistence/db.ts](#apps-game-server-src-persistence-db-ts)
- [apps/game-server/src/persistence/repos/buildings.js](#apps-game-server-src-persistence-repos-buildings-js)
- [apps/game-server/src/persistence/repos/buildings.ts](#apps-game-server-src-persistence-repos-buildings-ts)
- [apps/game-server/src/persistence/repos/users.js](#apps-game-server-src-persistence-repos-users-js)
- [apps/game-server/src/persistence/repos/users.ts](#apps-game-server-src-persistence-repos-users-ts)
- [apps/game-server/src/persistence/repos/warboys.js](#apps-game-server-src-persistence-repos-warboys-js)
- [apps/game-server/src/persistence/repos/warboys.ts](#apps-game-server-src-persistence-repos-warboys-ts)
- [apps/game-server/src/persistence/repos/zones.js](#apps-game-server-src-persistence-repos-zones-js)
- [apps/game-server/src/persistence/repos/zones.ts](#apps-game-server-src-persistence-repos-zones-ts)
- [apps/game-server/src/telemetry/metrics.js](#apps-game-server-src-telemetry-metrics-js)
- [apps/game-server/src/telemetry/metrics.ts](#apps-game-server-src-telemetry-metrics-ts)
- [apps/game-server/src/world/chunks.js](#apps-game-server-src-world-chunks-js)
- [apps/game-server/src/world/chunks.ts](#apps-game-server-src-world-chunks-ts)
- [apps/game-server/src/world/entities/Building.js](#apps-game-server-src-world-entities-building-js)
- [apps/game-server/src/world/entities/Building.ts](#apps-game-server-src-world-entities-building-ts)
- [apps/game-server/src/world/entities/Player.js](#apps-game-server-src-world-entities-player-js)
- [apps/game-server/src/world/entities/Player.ts](#apps-game-server-src-world-entities-player-ts)
- [apps/game-server/src/world/entities/Warboy.js](#apps-game-server-src-world-entities-warboy-js)
- [apps/game-server/src/world/entities/Warboy.ts](#apps-game-server-src-world-entities-warboy-ts)
- [apps/game-server/src/world/gen.js](#apps-game-server-src-world-gen-js)
- [apps/game-server/src/world/gen.ts](#apps-game-server-src-world-gen-ts)
- [apps/game-server/src/world/overlays.js](#apps-game-server-src-world-overlays-js)
- [apps/game-server/src/world/overlays.ts](#apps-game-server-src-world-overlays-ts)
- [apps/game-server/src/world/storage.js](#apps-game-server-src-world-storage-js)
- [apps/game-server/src/world/storage.ts](#apps-game-server-src-world-storage-ts)
- [apps/game-server/src/world/systems/battle.js](#apps-game-server-src-world-systems-battle-js)
- [apps/game-server/src/world/systems/battle.ts](#apps-game-server-src-world-systems-battle-ts)
- [apps/game-server/src/world/systems/building.js](#apps-game-server-src-world-systems-building-js)
- [apps/game-server/src/world/systems/building.ts](#apps-game-server-src-world-systems-building-ts)
- [apps/game-server/src/world/systems/capture.js](#apps-game-server-src-world-systems-capture-js)
- [apps/game-server/src/world/systems/capture.ts](#apps-game-server-src-world-systems-capture-ts)
- [apps/game-server/src/world/systems/encounters.js](#apps-game-server-src-world-systems-encounters-js)
- [apps/game-server/src/world/systems/encounters.ts](#apps-game-server-src-world-systems-encounters-ts)
- [apps/game-server/src/world/systems/movement.js](#apps-game-server-src-world-systems-movement-js)
- [apps/game-server/src/world/systems/movement.ts](#apps-game-server-src-world-systems-movement-ts)
- [apps/game-server/src/world/zones/Zone.js](#apps-game-server-src-world-zones-zone-js)
- [apps/game-server/src/world/zones/Zone.ts](#apps-game-server-src-world-zones-zone-ts)
- [apps/game-server/src/world/zones/ZoneManager.js](#apps-game-server-src-world-zones-zonemanager-js)
- [apps/game-server/src/world/zones/ZoneManager.ts](#apps-game-server-src-world-zones-zonemanager-ts)
- [apps/game-server/tsconfig.json](#apps-game-server-tsconfig-json)
- [apps/game-server/tsconfig.tsbuildinfo](#apps-game-server-tsconfig-tsbuildinfo)
- [apps/game-web/index.html](#apps-game-web-index-html)
- [apps/game-web/package.json](#apps-game-web-package-json)
- [apps/game-web/public/tiles/grass.png](#apps-game-web-public-tiles-grass-png)
- [apps/game-web/public/tiles/rock.png](#apps-game-web-public-tiles-rock-png)
- [apps/game-web/public/tiles/water.png](#apps-game-web-public-tiles-water-png)
- [apps/game-web/src/app/App.d.ts](#apps-game-web-src-app-app-d-ts)
- [apps/game-web/src/app/App.tsx](#apps-game-web-src-app-app-tsx)
- [apps/game-web/src/app/chat/useChat.d.ts](#apps-game-web-src-app-chat-usechat-d-ts)
- [apps/game-web/src/app/chat/useChat.js](#apps-game-web-src-app-chat-usechat-js)
- [apps/game-web/src/app/chat/useChat.ts](#apps-game-web-src-app-chat-usechat-ts)
- [apps/game-web/src/app/game/assets/sprites/Alex_16x16.png](#apps-game-web-src-app-game-assets-sprites-alex-16x16-png)
- [apps/game-web/src/app/game/net/wsClient.d.ts](#apps-game-web-src-app-game-net-wsclient-d-ts)
- [apps/game-web/src/app/game/net/wsClient.js](#apps-game-web-src-app-game-net-wsclient-js)
- [apps/game-web/src/app/game/net/wsClient.ts](#apps-game-web-src-app-game-net-wsclient-ts)
- [apps/game-web/src/app/game/sprites/anim.d.ts](#apps-game-web-src-app-game-sprites-anim-d-ts)
- [apps/game-web/src/app/game/sprites/anim.js](#apps-game-web-src-app-game-sprites-anim-js)
- [apps/game-web/src/app/game/sprites/anim.ts](#apps-game-web-src-app-game-sprites-anim-ts)
- [apps/game-web/src/app/game/sprites/loader.d.ts](#apps-game-web-src-app-game-sprites-loader-d-ts)
- [apps/game-web/src/app/game/sprites/loader.js](#apps-game-web-src-app-game-sprites-loader-js)
- [apps/game-web/src/app/game/sprites/loader.ts](#apps-game-web-src-app-game-sprites-loader-ts)
- [apps/game-web/src/app/game/sprites/spriteSheet.d.ts](#apps-game-web-src-app-game-sprites-spritesheet-d-ts)
- [apps/game-web/src/app/game/sprites/spriteSheet.js](#apps-game-web-src-app-game-sprites-spritesheet-js)
- [apps/game-web/src/app/game/sprites/spriteSheet.ts](#apps-game-web-src-app-game-sprites-spritesheet-ts)
- [apps/game-web/src/app/game/state/chunks.d.ts](#apps-game-web-src-app-game-state-chunks-d-ts)
- [apps/game-web/src/app/game/state/chunks.js](#apps-game-web-src-app-game-state-chunks-js)
- [apps/game-web/src/app/game/state/chunks.ts](#apps-game-web-src-app-game-state-chunks-ts)
- [apps/game-web/src/app/game/world/aoi.d.ts](#apps-game-web-src-app-game-world-aoi-d-ts)
- [apps/game-web/src/app/game/world/aoi.js](#apps-game-web-src-app-game-world-aoi-js)
- [apps/game-web/src/app/game/world/aoi.ts](#apps-game-web-src-app-game-world-aoi-ts)
- [apps/game-web/src/app/game/world/cache.d.ts](#apps-game-web-src-app-game-world-cache-d-ts)
- [apps/game-web/src/app/game/world/cache.js](#apps-game-web-src-app-game-world-cache-js)
- [apps/game-web/src/app/game/world/cache.ts](#apps-game-web-src-app-game-world-cache-ts)
- [apps/game-web/src/app/game/world/decode.d.ts](#apps-game-web-src-app-game-world-decode-d-ts)
- [apps/game-web/src/app/game/world/decode.js](#apps-game-web-src-app-game-world-decode-js)
- [apps/game-web/src/app/game/world/decode.ts](#apps-game-web-src-app-game-world-decode-ts)
- [apps/game-web/src/app/game/world/draw.d.ts](#apps-game-web-src-app-game-world-draw-d-ts)
- [apps/game-web/src/app/game/world/draw.js](#apps-game-web-src-app-game-world-draw-js)
- [apps/game-web/src/app/game/world/draw.ts](#apps-game-web-src-app-game-world-draw-ts)
- [apps/game-web/src/app/game/world/requests.d.ts](#apps-game-web-src-app-game-world-requests-d-ts)
- [apps/game-web/src/app/game/world/requests.js](#apps-game-web-src-app-game-world-requests-js)
- [apps/game-web/src/app/game/world/requests.ts](#apps-game-web-src-app-game-world-requests-ts)
- [apps/game-web/src/app/routes/Login.d.ts](#apps-game-web-src-app-routes-login-d-ts)
- [apps/game-web/src/app/routes/Login.js](#apps-game-web-src-app-routes-login-js)
- [apps/game-web/src/app/routes/Login.tsx](#apps-game-web-src-app-routes-login-tsx)
- [apps/game-web/src/app/routes/Play.d.ts](#apps-game-web-src-app-routes-play-d-ts)
- [apps/game-web/src/app/routes/Play.js](#apps-game-web-src-app-routes-play-js)
- [apps/game-web/src/app/routes/Play.tsx](#apps-game-web-src-app-routes-play-tsx)
- [apps/game-web/src/app/ui/chat/chatHUD.ts](#apps-game-web-src-app-ui-chat-chathud-ts)
- [apps/game-web/src/app/ui/core.ts](#apps-game-web-src-app-ui-core-ts)
- [apps/game-web/src/app/ui/input/textCapture.ts](#apps-game-web-src-app-ui-input-textcapture-ts)
- [apps/game-web/src/app/ui/manager.ts](#apps-game-web-src-app-ui-manager-ts)
- [apps/game-web/src/app/ui/widgets.ts](#apps-game-web-src-app-ui-widgets-ts)
- [apps/game-web/src/index.d.ts](#apps-game-web-src-index-d-ts)
- [apps/game-web/src/index.js](#apps-game-web-src-index-js)
- [apps/game-web/src/index.tsx](#apps-game-web-src-index-tsx)
- [apps/game-web/src/vite-env.d.ts](#apps-game-web-src-vite-env-d-ts)
- [apps/game-web/tsconfig.json](#apps-game-web-tsconfig-json)
- [apps/game-web/tsconfig.tsbuildinfo](#apps-game-web-tsconfig-tsbuildinfo)
- [apps/game-web/vite.config.js](#apps-game-web-vite-config-js)
- [apps/game-web/vite.config.ts](#apps-game-web-vite-config-ts)
- [apps/towns-bot/src/auth/jwt.js](#apps-towns-bot-src-auth-jwt-js)
- [apps/towns-bot/src/auth/jwt.ts](#apps-towns-bot-src-auth-jwt-ts)
- [apps/towns-bot/src/bot.js](#apps-towns-bot-src-bot-js)
- [apps/towns-bot/src/bot.ts](#apps-towns-bot-src-bot-ts)
- [apps/towns-bot/src/handlers/whoami.js](#apps-towns-bot-src-handlers-whoami-js)
- [apps/towns-bot/src/handlers/whoami.ts](#apps-towns-bot-src-handlers-whoami-ts)
- [apps/towns-bot/src/handlers/zoneEvents.js](#apps-towns-bot-src-handlers-zoneevents-js)
- [apps/towns-bot/src/handlers/zoneEvents.ts](#apps-towns-bot-src-handlers-zoneevents-ts)
- [infra/db/schema.sql](#infra-db-schema-sql)
- [infra/db/seed.sql](#infra-db-seed-sql)
- [infra/docker/Dockerfile](#infra-docker-dockerfile)
- [infra/k8s/deployment.yaml](#infra-k8s-deployment-yaml)
- [package-lock.json](#package-lock-json)
- [package.json](#package-json)
- [packages/assets/src/atlas.js](#packages-assets-src-atlas-js)
- [packages/assets/src/atlas.ts](#packages-assets-src-atlas-ts)
- [packages/assets/src/licensing.md](#packages-assets-src-licensing-md)
- [packages/assets/src/tiles.js](#packages-assets-src-tiles-js)
- [packages/assets/src/tiles.ts](#packages-assets-src-tiles-ts)
- [packages/chat/package.json](#packages-chat-package-json)
- [packages/chat/src/client.js](#packages-chat-src-client-js)
- [packages/chat/src/client.ts](#packages-chat-src-client-ts)
- [packages/chat/src/index.js](#packages-chat-src-index-js)
- [packages/chat/src/index.ts](#packages-chat-src-index-ts)
- [packages/chat/src/types.js](#packages-chat-src-types-js)
- [packages/chat/src/types.ts](#packages-chat-src-types-ts)
- [packages/chat/tsconfig.json](#packages-chat-tsconfig-json)
- [packages/chat/tsconfig.tsbuildinfo](#packages-chat-tsconfig-tsbuildinfo)
- [packages/core/src/battle/engine.js](#packages-core-src-battle-engine-js)
- [packages/core/src/battle/engine.ts](#packages-core-src-battle-engine-ts)
- [packages/core/src/capture/engine.js](#packages-core-src-capture-engine-js)
- [packages/core/src/capture/engine.ts](#packages-core-src-capture-engine-ts)
- [packages/core/src/economy/convert.js](#packages-core-src-economy-convert-js)
- [packages/core/src/economy/convert.ts](#packages-core-src-economy-convert-ts)
- [packages/core/src/index.js](#packages-core-src-index-js)
- [packages/core/src/index.ts](#packages-core-src-index-ts)
- [packages/core/src/rng.js](#packages-core-src-rng-js)
- [packages/core/src/rng.ts](#packages-core-src-rng-ts)
- [packages/core/src/types.js](#packages-core-src-types-js)
- [packages/core/src/types.ts](#packages-core-src-types-ts)
- [packages/core/src/validation/schemas.js](#packages-core-src-validation-schemas-js)
- [packages/core/src/validation/schemas.ts](#packages-core-src-validation-schemas-ts)
- [packages/core/src/worldgen.js](#packages-core-src-worldgen-js)
- [packages/core/src/worldgen.ts](#packages-core-src-worldgen-ts)
- [packages/net/src/encode.js](#packages-net-src-encode-js)
- [packages/net/src/encode.ts](#packages-net-src-encode-ts)
- [packages/net/src/messages.js](#packages-net-src-messages-js)
- [packages/net/src/messages.ts](#packages-net-src-messages-ts)
- [packages/net/src/rate.js](#packages-net-src-rate-js)
- [packages/net/src/rate.ts](#packages-net-src-rate-ts)
- [packages/net/src/schema.js](#packages-net-src-schema-js)
- [packages/net/src/schema.ts](#packages-net-src-schema-ts)
- [packages/overlays/package.json](#packages-overlays-package-json)
- [packages/overlays/src/apply.js](#packages-overlays-src-apply-js)
- [packages/overlays/src/apply.ts](#packages-overlays-src-apply-ts)
- [packages/overlays/src/index.js](#packages-overlays-src-index-js)
- [packages/overlays/src/index.ts](#packages-overlays-src-index-ts)
- [packages/overlays/src/types.js](#packages-overlays-src-types-js)
- [packages/overlays/src/types.ts](#packages-overlays-src-types-ts)
- [packages/overlays/tsconfig.json](#packages-overlays-tsconfig-json)
- [packages/overlays/tsconfig.tsbuildinfo](#packages-overlays-tsconfig-tsbuildinfo)
- [packages/trolls/package.json](#packages-trolls-package-json)
- [packages/trolls/src/README.md](#packages-trolls-src-readme-md)
- [packages/trolls/src/index.js](#packages-trolls-src-index-js)
- [packages/trolls/src/index.ts](#packages-trolls-src-index-ts)
- [packages/trolls/src/schema.js](#packages-trolls-src-schema-js)
- [packages/trolls/src/schema.ts](#packages-trolls-src-schema-ts)
- [packages/trolls/src/types.js](#packages-trolls-src-types-js)
- [packages/trolls/src/types.ts](#packages-trolls-src-types-ts)
- [packages/trolls/tsconfig.json](#packages-trolls-tsconfig-json)
- [packages/world/package.json](#packages-world-package-json)
- [packages/world/src/aoi.js](#packages-world-src-aoi-js)
- [packages/world/src/aoi.ts](#packages-world-src-aoi-ts)
- [packages/world/src/codec.js](#packages-world-src-codec-js)
- [packages/world/src/codec.ts](#packages-world-src-codec-ts)
- [packages/world/src/const.js](#packages-world-src-const-js)
- [packages/world/src/const.ts](#packages-world-src-const-ts)
- [packages/world/src/index.js](#packages-world-src-index-js)
- [packages/world/src/index.ts](#packages-world-src-index-ts)
- [packages/world/src/types.js](#packages-world-src-types-js)
- [packages/world/src/types.ts](#packages-world-src-types-ts)
- [packages/world/tsconfig.json](#packages-world-tsconfig-json)
- [packages/world/tsconfig.tsbuildinfo](#packages-world-tsconfig-tsbuildinfo)
- [tsconfig.json](#tsconfig-json)
- [tsconfig.tsbuildinfo](#tsconfig-tsbuildinfo)
- [turbo.json](#turbo-json)
- [workflow-tools/project_bundle.sh](#workflow-tools-project-bundle-sh)


### .github/workflows/ci.yml

<a id="github-workflows-ci-yml"></a>
===== FILE START =====
Path: .github/workflows/ci.yml
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: yaml   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```yaml
```
===== FILE END =====


### apps/admin-api/package.json

<a id="apps-admin-api-package-json"></a>
===== FILE START =====
Path: apps/admin-api/package.json
URL: (not in git / no remote detected)
Bytes: 62  Lines: 1  Modified: 2025-08-10T23:51:58Z
SHA256: b9d5b2ba77b101785fddcc6fe5b1d28ab42bdb05d71d0d6d2642cc055ffd9c00   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{"name":"@warboy/admin-api","version":"0.0.0","private":true}
```
===== FILE END =====


### apps/admin-api/src/index.js

<a id="apps-admin-api-src-index-js"></a>
===== FILE START =====
Path: apps/admin-api/src/index.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/admin-api/src/index.ts

<a id="apps-admin-api-src-index-ts"></a>
===== FILE START =====
Path: apps/admin-api/src/index.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/admin-api/tsconfig.json

<a id="apps-admin-api-tsconfig-json"></a>
===== FILE START =====
Path: apps/admin-api/tsconfig.json
URL: (not in git / no remote detected)
Bytes: 2  Lines: 0  Modified: 2025-08-11T23:03:28Z
SHA256: 44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{}```
===== FILE END =====


### apps/admin-web/index.html

<a id="apps-admin-web-index-html"></a>
===== FILE START =====
Path: apps/admin-web/index.html
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: html   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```html
```
===== FILE END =====


### apps/admin-web/package.json

<a id="apps-admin-web-package-json"></a>
===== FILE START =====
Path: apps/admin-web/package.json
URL: (not in git / no remote detected)
Bytes: 62  Lines: 1  Modified: 2025-08-10T23:51:58Z
SHA256: d581d462b7a7d754e70c2b5bafe55ed1a438df318e6a3fcf22799bfbfe56b079   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{"name":"@warboy/admin-web","version":"0.0.0","private":true}
```
===== FILE END =====


### apps/admin-web/src/App.js

<a id="apps-admin-web-src-app-js"></a>
===== FILE START =====
Path: apps/admin-web/src/App.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/admin-web/src/App.tsx

<a id="apps-admin-web-src-app-tsx"></a>
===== FILE START =====
Path: apps/admin-web/src/App.tsx
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: tsx   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```tsx
```
===== FILE END =====


### apps/admin-web/src/main.js

<a id="apps-admin-web-src-main-js"></a>
===== FILE START =====
Path: apps/admin-web/src/main.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/admin-web/src/main.tsx

<a id="apps-admin-web-src-main-tsx"></a>
===== FILE START =====
Path: apps/admin-web/src/main.tsx
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: tsx   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```tsx
```
===== FILE END =====


### apps/admin-web/tsconfig.json

<a id="apps-admin-web-tsconfig-json"></a>
===== FILE START =====
Path: apps/admin-web/tsconfig.json
URL: (not in git / no remote detected)
Bytes: 2  Lines: 0  Modified: 2025-08-11T23:03:28Z
SHA256: 44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{}```
===== FILE END =====


### apps/admin-web/vite.config.js

<a id="apps-admin-web-vite-config-js"></a>
===== FILE START =====
Path: apps/admin-web/vite.config.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/admin-web/vite.config.ts

<a id="apps-admin-web-vite-config-ts"></a>
===== FILE START =====
Path: apps/admin-web/vite.config.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/auth-api/src/routes/login.js

<a id="apps-auth-api-src-routes-login-js"></a>
===== FILE START =====
Path: apps/auth-api/src/routes/login.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/auth-api/src/routes/login.ts

<a id="apps-auth-api-src-routes-login-ts"></a>
===== FILE START =====
Path: apps/auth-api/src/routes/login.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/auth-api/src/routes/nonce.js

<a id="apps-auth-api-src-routes-nonce-js"></a>
===== FILE START =====
Path: apps/auth-api/src/routes/nonce.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/auth-api/src/routes/nonce.ts

<a id="apps-auth-api-src-routes-nonce-ts"></a>
===== FILE START =====
Path: apps/auth-api/src/routes/nonce.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/auth-api/src/routes/siwe.js

<a id="apps-auth-api-src-routes-siwe-js"></a>
===== FILE START =====
Path: apps/auth-api/src/routes/siwe.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/auth-api/src/routes/siwe.ts

<a id="apps-auth-api-src-routes-siwe-ts"></a>
===== FILE START =====
Path: apps/auth-api/src/routes/siwe.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/auth-api/src/server.js

<a id="apps-auth-api-src-server-js"></a>
===== FILE START =====
Path: apps/auth-api/src/server.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/auth-api/src/server.ts

<a id="apps-auth-api-src-server-ts"></a>
===== FILE START =====
Path: apps/auth-api/src/server.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/auth-api/src/services/jwt.js

<a id="apps-auth-api-src-services-jwt-js"></a>
===== FILE START =====
Path: apps/auth-api/src/services/jwt.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/auth-api/src/services/jwt.ts

<a id="apps-auth-api-src-services-jwt-ts"></a>
===== FILE START =====
Path: apps/auth-api/src/services/jwt.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/auth-api/src/services/signer.js

<a id="apps-auth-api-src-services-signer-js"></a>
===== FILE START =====
Path: apps/auth-api/src/services/signer.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/auth-api/src/services/signer.ts

<a id="apps-auth-api-src-services-signer-ts"></a>
===== FILE START =====
Path: apps/auth-api/src/services/signer.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/auth-api/src/store/nonces.js

<a id="apps-auth-api-src-store-nonces-js"></a>
===== FILE START =====
Path: apps/auth-api/src/store/nonces.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/auth-api/src/store/nonces.ts

<a id="apps-auth-api-src-store-nonces-ts"></a>
===== FILE START =====
Path: apps/auth-api/src/store/nonces.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/package.json

<a id="apps-game-server-package-json"></a>
===== FILE START =====
Path: apps/game-server/package.json
URL: (not in git / no remote detected)
Bytes: 470  Lines: 20  Modified: 2025-08-11T22:39:41Z
SHA256: 84eaef3127162b92abb4cb300b71fa7eeef268bd8571e1d3574fb55000872a79   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "game-server",
  "type": "module",
  "scripts": {
    "dev": "tsx src/index.ts",
    "start": "node dist/index.js",
    "build": "tsc -p tsconfig.json"
  },
  "dependencies": {
    "nanoid": "^5.1.5",
    "ws": "^8.18.3",
    "@warboy/chat": "file:../../packages/chat",
    "@warboy/world": "file:../../packages/world",
    "@warboy/overlays": "file:../../packages/overlays"
  },
  "devDependencies": {
    "@types/ws": "^8.18.1",
    "tsx": "^4.20.3"
  }
}
```
===== FILE END =====


### apps/game-server/src/auth/jwtVerify.js

<a id="apps-game-server-src-auth-jwtverify-js"></a>
===== FILE START =====
Path: apps/game-server/src/auth/jwtVerify.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/auth/jwtVerify.ts

<a id="apps-game-server-src-auth-jwtverify-ts"></a>
===== FILE START =====
Path: apps/game-server/src/auth/jwtVerify.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/chat/handler.js

<a id="apps-game-server-src-chat-handler-js"></a>
===== FILE START =====
Path: apps/game-server/src/chat/handler.js
URL: (not in git / no remote detected)
Bytes: 770  Lines: 29  Modified: 2025-08-11T21:04:16Z
SHA256: a517c85f28c25d4fb24f19b41adcc71ae398529268953cafa329832dc9fc0635   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { nanoid } from "nanoid";
export function handleChatIncoming(ctx) {
    return (raw) => {
        const f = raw;
        if (f?.t !== "chat/send")
            return;
        const room = sanitizeRoom(f.room) ?? ctx.defaultRoom();
        const msg = {
            id: nanoid(10),
            room,
            from: { id: ctx.playerId, name: ctx.playerName },
            text: String(f.text ?? "").slice(0, 500),
            ts: Date.now(),
        };
        const out = { t: "chat/recv", msg };
        ctx.sendToRoom(room, out);
    };
}
function sanitizeRoom(r) {
    if (!r)
        return null;
    if (r === "global")
        return r;
    if (r.startsWith("zone:"))
        return r;
    if (r.startsWith("party:"))
        return r;
    return null;
}
```
===== FILE END =====


### apps/game-server/src/chat/handler.ts

<a id="apps-game-server-src-chat-handler-ts"></a>
===== FILE START =====
Path: apps/game-server/src/chat/handler.ts
URL: (not in git / no remote detected)
Bytes: 959  Lines: 34  Modified: 2025-08-11T20:42:50Z
SHA256: c6406ffc4788096b8b0be4f1f5b0cd27bb8e6ea30a253c4ef303fafca6719d7f   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { nanoid } from "nanoid";
import type { C2S_ChatSend, S2C_ChatRecv, ChatMsg } from "@warboy/chat";

export function handleChatIncoming(ctx: {
  playerId: string;
  playerName: string;
  defaultRoom: () => string;           // e.g. returns "zone:abc" or "global"
  sendToRoom: (room: string, frame: any) => void;
}) {
  return (raw: any) => {
    const f = raw as C2S_ChatSend;
    if (f?.t !== "chat/send") return;

    const room = sanitizeRoom(f.room) ?? ctx.defaultRoom();
    const msg: ChatMsg = {
      id: nanoid(10),
      room,
      from: { id: ctx.playerId, name: ctx.playerName },
      text: String(f.text ?? "").slice(0, 500),
      ts: Date.now(),
    };
    const out: S2C_ChatRecv = { t: "chat/recv", msg };
    ctx.sendToRoom(room, out);
  };
}

function sanitizeRoom(r?: string) {
  if (!r) return null;
  if (r === "global") return r;
  if (r.startsWith("zone:")) return r;
  if (r.startsWith("party:")) return r;
  return null;
}

```
===== FILE END =====


### apps/game-server/src/index.js

<a id="apps-game-server-src-index-js"></a>
===== FILE START =====
Path: apps/game-server/src/index.js
URL: (not in git / no remote detected)
Bytes: 5090  Lines: 138  Modified: 2025-08-11T21:04:16Z
SHA256: 8fb810bc36ed32da9b1fa46958d2f288675bec81c62b21002c5181223b6d07bb   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { nanoid } from 'nanoid';
import { applyTilePatches } from '@warboy/overlays';
import { getChunkPatches, getChunkVersion, appendOverlay } from './world/overlays';
// --- INLINE WORLDGEN (temporary) ---
const CHUNK_SIZE = 32;
function genChunk(seed, cx, cy) {
    const w = CHUNK_SIZE, h = CHUNK_SIZE, tiles = new Uint8Array(w * h);
    for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++) {
            const v = (Math.sin((cx * w + x + seed) * 0.01) + Math.cos((cy * h + y - seed) * 0.013)) * 0.5 + 0.5;
            tiles[y * w + x] = v < 0.35 ? 0 : v > 0.75 ? 2 : 1; // 0 water, 1 grass, 2 rock
        }
    return { cx, cy, w, h, tiles };
}
// --- END INLINE WORLDGEN ---
// --- INLINE BASE64 (server only) ---
function u8ToB64(u8) {
    return Buffer.from(u8).toString('base64');
}
const players = new Map();
const WORLD_SEED = 0xC0FFEE;
// WITH this:
const httpServer = createServer((req, res) => {
    if (req.method === 'POST' && req.url === '/overlay/place') {
        let body = '';
        req.on('data', (c) => (body += c));
        req.on('end', () => {
            try {
                // debug: see what we actually received
                // console.log('overlay/place raw:', body);
                const { tx, ty, tile, by } = JSON.parse(body ?? '{}');
                const ev = {
                    t: 'place',
                    id: String(Date.now()) + ':' + Math.random().toString(36).slice(2),
                    kind: 'tile',
                    tx: Number(tx), ty: Number(ty),
                    data: { tile: Number(tile) },
                    by: String(by || 'admin'),
                    at: Date.now(),
                };
                appendOverlay(ev);
                res.writeHead(204);
                res.end();
            }
            catch (e) {
                // console.error('overlay/place parse error:', e);
                res.writeHead(400);
                res.end('bad json');
            }
        });
        return;
    }
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('warboy game-server alive\n');
});
const wss = new WebSocketServer({ server: httpServer });
wss.on('connection', (sock) => {
    let me = null;
    sock.on('message', (buf) => {
        let msg;
        try {
            msg = JSON.parse(buf.toString());
        }
        catch {
            return;
        }
        if (msg.t === 'hello') {
            const id = nanoid(8);
            me = {
                id,
                name: sanitize(msg.name),
                x: rand(10, 90), y: rand(10, 90),
                tx: 0, ty: 0, // NEW
                sock, lastSeq: 0
            };
            players.set(id, me);
            const welcome = { t: 'welcome', id, zoneId: 'zone-0', time: Date.now() };
            sock.send(JSON.stringify(welcome));
            return;
        }
        if (!me)
            return;
        if (msg.t === 'chunkReq') {
            const { cx, cy } = msg;
            const ch = genChunk(WORLD_SEED, cx | 0, cy | 0);
            const ps = getChunkPatches(ch.cx, ch.cy);
            const resolvedTiles = ps.length ? applyTilePatches(ch.tiles, ch.w, ch.h, ps) : ch.tiles;
            const payload = {
                t: 'chunkData',
                cx: ch.cx, cy: ch.cy, w: ch.w, h: ch.h,
                tilesB64: u8ToB64(resolvedTiles),
                // temporary: include overlay version so clients can see freshness
                // @ts-ignore extend your type later
                version: getChunkVersion(ch.cx, ch.cy)
            };
            sock.send(JSON.stringify(payload));
            return;
        }
        if (msg.t === 'intent') {
            if (msg.seq <= me.lastSeq)
                return;
            me.lastSeq = msg.seq;
            // existing UI coords (leave as-is)
            me.x = clamp(me.x + msg.dx * 1.5, 0, 100);
            me.y = clamp(me.y + msg.dy * 1.5, 0, 100);
            // NEW: unbounded world tiles (pick a step you like)
            me.tx += msg.dx * 2;
            me.ty += msg.dy * 2;
        }
    });
    sock.on('close', () => { if (me)
        players.delete(me.id); });
});
// broadcast snapshots at 10 Hz
setInterval(() => {
    const snapshot = {
        t: 'snapshot',
        time: Date.now(),
        players: [...players.values()].map(p => ({
            id: p.id, name: p.name,
            x: p.x, y: p.y,
            tx: p.tx, ty: p.ty // NEW
        }))
    };
    const payload = JSON.stringify(snapshot);
    for (const p of players.values()) {
        if (p.sock.readyState === WebSocket.OPEN)
            p.sock.send(payload);
    }
}, 100);
const PORT = Number(process.env.PORT || 8787);
// bind to all interfaces so LAN clients connect
httpServer.listen(PORT, '0.0.0.0', () => console.log(`game-server :${PORT}`));
function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
function rand(lo, hi) { return lo + Math.random() * (hi - lo); }
function sanitize(n) { return (n || 'warboy').slice(0, 16); }
```
===== FILE END =====


### apps/game-server/src/index.ts

<a id="apps-game-server-src-index-ts"></a>
===== FILE START =====
Path: apps/game-server/src/index.ts
URL: (not in git / no remote detected)
Bytes: 5157  Lines: 179  Modified: 2025-08-12T04:08:20Z
SHA256: c155ac04c9f195e2f80afd9d2bec7353edc4e095293cb7495dbace50b2c155ba   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { nanoid } from 'nanoid';
import { applyTilePatches } from '@warboy/overlays';
import type { OverlayEvent } from '@warboy/overlays';
import { getChunkPatches, getChunkVersion, appendOverlay } from './world/overlays';


import type { C2S, S2C } from '../../../packages/net/src/messages';

// --- INLINE WORLDGEN (temporary) ---
const CHUNK_SIZE = 32;
function genChunk(seed:number, cx:number, cy:number){
  const w=CHUNK_SIZE,h=CHUNK_SIZE,tiles=new Uint8Array(w*h);
  for(let y=0;y<h;y++)for(let x=0;x<w;x++){
    const v=(Math.sin((cx*w+x+seed)*0.01)+Math.cos((cy*h+y-seed)*0.013))*0.5+0.5;
    tiles[y*w+x] = v<0.35?0 : v>0.75?2 : 1; // 0 water, 1 grass, 2 rock
  }
  return {cx,cy,w,h,tiles};
}
// --- END INLINE WORLDGEN ---

// --- INLINE BASE64 (server only) ---
function u8ToB64(u8: Uint8Array): string {
  return Buffer.from(u8).toString('base64');
}
// --- END INLINE BASE64 ---


type Player = {
  id: string; name: string;
  x: number; y: number;       // existing UI coords (0..100)
  tx: number; ty: number;     // NEW: world tile coords (unbounded)
  sock: WebSocket; lastSeq: number;
};

const players = new Map<string, Player>();
const WORLD_SEED = 0xC0FFEE;

// WITH this:
const httpServer = createServer((req, res) => {
  if (req.method === 'POST' && req.url === '/overlay/place') {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      try {
        // debug: see what we actually received
        // console.log('overlay/place raw:', body);
        const { tx, ty, tile, by } = JSON.parse(body ?? '{}');
        const ev: OverlayEvent = {
          t: 'place',
          id: String(Date.now()) + ':' + Math.random().toString(36).slice(2),
          kind: 'tile',
          tx: Number(tx), ty: Number(ty),
          data: { tile: Number(tile) },
          by: String(by || 'admin'),
          at: Date.now(),
        };
        appendOverlay(ev);
        res.writeHead(204);
        res.end();
      } catch (e) {
        // console.error('overlay/place parse error:', e);
        res.writeHead(400);
        res.end('bad json');
      }
    });
    return;
  }

  res.writeHead(200, { 'content-type': 'text/plain' });
  res.end('warboy game-server alive\n');
});



const wss = new WebSocketServer({ server: httpServer });

wss.on('connection', (sock) => {
  let me: Player | null = null;

  sock.on('message', (buf) => {
    let msg: C2S;
    try { msg = JSON.parse(buf.toString()); } catch { return; }

   if (msg.t === 'hello') {
  const id = nanoid(8);
  me = {
    id,
    name: sanitize(msg.name),
    x: rand(10, 90), y: rand(10, 90),
    tx: 0, ty: 0,                 // NEW
    sock, lastSeq: 0
  };
  players.set(id, me);
  const welcome = { t: 'welcome', id, zoneId: 'zone-0', time: Date.now() } as S2C;
  sock.send(JSON.stringify(welcome));
  return;
}

    if (!me) return;

   if (msg.t === 'chunkReq') {
  const { cx, cy } = msg;
  const ch = genChunk(WORLD_SEED, cx | 0, cy | 0);
  const ps = getChunkPatches(ch.cx, ch.cy);
  const resolvedTiles = ps.length ? applyTilePatches(ch.tiles, ch.w, ch.h, ps) : ch.tiles;

  const payload: S2C = {
    t: 'chunkData',
    cx: ch.cx, cy: ch.cy, w: ch.w, h: ch.h,
    tilesB64: u8ToB64(resolvedTiles),
    // temporary: include overlay version so clients can see freshness
    // @ts-ignore extend your type later
    version: getChunkVersion(ch.cx, ch.cy)
  } as S2C;
  sock.send(JSON.stringify(payload));
  return;
}


    if (msg.t === 'intent') {
  if (msg.seq <= me.lastSeq) return;
  me.lastSeq = msg.seq;

  // existing UI coords (leave as-is)
  me.x = clamp(me.x + msg.dx * 1.5, 0, 100);
  me.y = clamp(me.y + msg.dy * 1.5, 0, 100);

  // NEW: unbounded world tiles (pick a step you like)
  me.tx += msg.dx * 2;
  me.ty += msg.dy * 2;
}
// handle chat
if (msg.t === 'chat') {
  const text = (msg.text ?? '').toString().slice(0, 400);
  if (!text) return;

  const from = { id: me.id, name: me.name };
  const out = JSON.stringify({ t: 'chat', text, from }); // (type it later in your messages.ts)

  for (const p of players.values()) {
    if (p.sock.readyState === WebSocket.OPEN) p.sock.send(out);
  }
  return;
}


  });

  sock.on('close', () => { if (me) players.delete(me.id); });
});

// broadcast snapshots at 10 Hz
setInterval(() => {
  const snapshot = {
    t: 'snapshot',
    time: Date.now(),
    players: [...players.values()].map(p => ({
      id: p.id, name: p.name,
      x: p.x, y: p.y,
      tx: p.tx, ty: p.ty         // NEW
    }))
  };
  const payload = JSON.stringify(snapshot);
  for (const p of players.values()) {
    if (p.sock.readyState === WebSocket.OPEN) p.sock.send(payload);
  }
}, 100);


const PORT = Number(process.env.PORT || 8787);
// bind to all interfaces so LAN clients connect
httpServer.listen(PORT, '0.0.0.0', () => console.log(`game-server :${PORT}`));

function clamp(v: number, lo: number, hi: number) { return Math.max(lo, Math.min(hi, v)); }
function rand(lo: number, hi: number) { return lo + Math.random() * (hi - lo); }
function sanitize(n: string) { return (n || 'warboy').slice(0, 16); }

```
===== FILE END =====


### apps/game-server/src/index.ts.bak

<a id="apps-game-server-src-index-ts-bak"></a>
===== FILE START =====
Path: apps/game-server/src/index.ts.bak
URL: (not in git / no remote detected)
Bytes: 2758  Lines: 85  Modified: 2025-08-10T00:47:09Z
SHA256: 213b3acab577e54c0f444132717e79155d5cdbca8dd249588b35df6328587f1b   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### apps/game-server/src/net/protocol.js

<a id="apps-game-server-src-net-protocol-js"></a>
===== FILE START =====
Path: apps/game-server/src/net/protocol.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/net/protocol.ts

<a id="apps-game-server-src-net-protocol-ts"></a>
===== FILE START =====
Path: apps/game-server/src/net/protocol.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/net/wsServer.js

<a id="apps-game-server-src-net-wsserver-js"></a>
===== FILE START =====
Path: apps/game-server/src/net/wsServer.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/net/wsServer.ts

<a id="apps-game-server-src-net-wsserver-ts"></a>
===== FILE START =====
Path: apps/game-server/src/net/wsServer.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/persistence/db.js

<a id="apps-game-server-src-persistence-db-js"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/db.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/persistence/db.ts

<a id="apps-game-server-src-persistence-db-ts"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/db.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/persistence/repos/buildings.js

<a id="apps-game-server-src-persistence-repos-buildings-js"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/repos/buildings.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/persistence/repos/buildings.ts

<a id="apps-game-server-src-persistence-repos-buildings-ts"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/repos/buildings.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/persistence/repos/users.js

<a id="apps-game-server-src-persistence-repos-users-js"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/repos/users.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/persistence/repos/users.ts

<a id="apps-game-server-src-persistence-repos-users-ts"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/repos/users.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/persistence/repos/warboys.js

<a id="apps-game-server-src-persistence-repos-warboys-js"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/repos/warboys.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/persistence/repos/warboys.ts

<a id="apps-game-server-src-persistence-repos-warboys-ts"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/repos/warboys.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/persistence/repos/zones.js

<a id="apps-game-server-src-persistence-repos-zones-js"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/repos/zones.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/persistence/repos/zones.ts

<a id="apps-game-server-src-persistence-repos-zones-ts"></a>
===== FILE START =====
Path: apps/game-server/src/persistence/repos/zones.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/telemetry/metrics.js

<a id="apps-game-server-src-telemetry-metrics-js"></a>
===== FILE START =====
Path: apps/game-server/src/telemetry/metrics.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/telemetry/metrics.ts

<a id="apps-game-server-src-telemetry-metrics-ts"></a>
===== FILE START =====
Path: apps/game-server/src/telemetry/metrics.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/chunks.js

<a id="apps-game-server-src-world-chunks-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/chunks.js
URL: (not in git / no remote detected)
Bytes: 485  Lines: 16  Modified: 2025-08-11T21:04:16Z
SHA256: ee1c440eb2edccd84e6fa4220f526f715124afea351e255b0e79408b00517089   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { u8ToB64 } from '@warboy/world';
import { genChunk } from './gen';
import { getSnapshot, putSnapshot } from './storage';
const SEED = 0xC0FFEE;
export function loadOrGenChunk(cx, cy) {
    const cached = getSnapshot(cx, cy);
    if (cached)
        return cached;
    const ch = genChunk(SEED, cx, cy);
    const snap = {
        cx: ch.cx, cy: ch.cy, version: ch.version, w: ch.w, h: ch.h,
        tilesB64: u8ToB64(ch.tiles),
    };
    putSnapshot(snap);
    return snap;
}
```
===== FILE END =====


### apps/game-server/src/world/chunks.ts

<a id="apps-game-server-src-world-chunks-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/chunks.ts
URL: (not in git / no remote detected)
Bytes: 554  Lines: 19  Modified: 2025-08-10T22:34:12Z
SHA256: 1b37c57d68ae32618fc8f821984657b23eecfc8f8a0a6341adee832b25c45bce   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { u8ToB64 } from '@warboy/world';
import type { ChunkSnapshot } from '@warboy/world';
import { genChunk } from './gen';
import { getSnapshot, putSnapshot } from './storage';

const SEED = 0xC0FFEE;

export function loadOrGenChunk(cx:number, cy:number): ChunkSnapshot {
  const cached = getSnapshot(cx, cy);
  if (cached) return cached;
  const ch = genChunk(SEED, cx, cy);
  const snap: ChunkSnapshot = {
    cx: ch.cx, cy: ch.cy, version: ch.version, w: ch.w, h: ch.h,
    tilesB64: u8ToB64(ch.tiles),
  };
  putSnapshot(snap);
  return snap;
}

```
===== FILE END =====


### apps/game-server/src/world/entities/Building.js

<a id="apps-game-server-src-world-entities-building-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/entities/Building.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/entities/Building.ts

<a id="apps-game-server-src-world-entities-building-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/entities/Building.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/entities/Player.js

<a id="apps-game-server-src-world-entities-player-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/entities/Player.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/entities/Player.ts

<a id="apps-game-server-src-world-entities-player-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/entities/Player.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/entities/Warboy.js

<a id="apps-game-server-src-world-entities-warboy-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/entities/Warboy.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/entities/Warboy.ts

<a id="apps-game-server-src-world-entities-warboy-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/entities/Warboy.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/gen.js

<a id="apps-game-server-src-world-gen-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/gen.js
URL: (not in git / no remote detected)
Bytes: 504  Lines: 11  Modified: 2025-08-11T21:04:16Z
SHA256: 5b64684560f28e7fe9545e4ea4fdf32130d48fee6e7815e80fbc74063cc51277   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { CHUNK_SIZE } from '@warboy/world';
export function genChunk(seed, cx, cy) {
    const w = CHUNK_SIZE, h = CHUNK_SIZE;
    const tiles = new Uint8Array(w * h);
    for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++) {
            const v = (Math.sin((cx * w + x + seed) * 0.01) + Math.cos((cy * h + y - seed) * 0.013)) * 0.5 + 0.5;
            tiles[y * w + x] = v < 0.35 ? 0 : v > 0.75 ? 2 : 1; // 0 water, 1 grass, 2 rock
        }
    return { cx, cy, w, h, tiles, version: 0 };
}
```
===== FILE END =====


### apps/game-server/src/world/gen.ts

<a id="apps-game-server-src-world-gen-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/gen.ts
URL: (not in git / no remote detected)
Bytes: 522  Lines: 13  Modified: 2025-08-10T22:33:58Z
SHA256: e447d49ee93b11a0508a401613589a3f3c05bc6a8a16d882283d13c336d8b033   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { CHUNK_SIZE } from '@warboy/world';
import type { TerrainChunk } from '@warboy/world';

export function genChunk(seed:number, cx:number, cy:number): TerrainChunk {
  const w = CHUNK_SIZE, h = CHUNK_SIZE;
  const tiles = new Uint8Array(w*h);
  for (let y=0; y<h; y++) for (let x=0; x<w; x++) {
    const v = (Math.sin((cx*w+x+seed)*0.01) + Math.cos((cy*h+y-seed)*0.013))*0.5 + 0.5;
    tiles[y*w+x] = v < 0.35 ? 0 : v > 0.75 ? 2 : 1; // 0 water, 1 grass, 2 rock
  }
  return { cx, cy, w, h, tiles, version: 0 };
}

```
===== FILE END =====


### apps/game-server/src/world/overlays.js

<a id="apps-game-server-src-world-overlays-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/overlays.js
URL: (not in git / no remote detected)
Bytes: 1348  Lines: 41  Modified: 2025-08-11T21:04:16Z
SHA256: 7c2ab2d1f18effa4a80175465ae0d1f650dde17fc31c64a3f7b28e7814bef9b4   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
//import { CHUNK_SIZE } from '@warboy/world';
import { CHUNK_SIZE } from '@warboy/world';
const logs = new Map(); // per-chunk append-only
const patches = new Map(); // per-chunk latest tile writes
const key = (cx, cy) => `${cx}:${cy}`;
const mod = (n, m) => ((n % m) + m) % m;
export function appendOverlay(ev) {
    if (ev.t === 'place' && ev.kind === 'tile') {
        const cx = Math.floor(ev.tx / CHUNK_SIZE);
        const cy = Math.floor(ev.ty / CHUNK_SIZE);
        const lx = mod(ev.tx, CHUNK_SIZE);
        const ly = mod(ev.ty, CHUNK_SIZE);
        const k = key(cx, cy);
        // log
        let arr = logs.get(k);
        if (!arr) {
            arr = [];
            logs.set(k, arr);
        }
        arr.push(ev);
        // patch (overwrite last write for same cell)
        let ps = patches.get(k);
        if (!ps) {
            ps = [];
            patches.set(k, ps);
        }
        const idx = ps.findIndex(p => p.lx === lx && p.ly === ly);
        const patch = { lx, ly, tile: ev.data.tile | 0 };
        if (idx >= 0)
            ps[idx] = patch;
        else
            ps.push(patch);
    }
    // (remove/meta can be extended later)
}
export function getChunkPatches(cx, cy) {
    return patches.get(key(cx, cy)) ?? [];
}
export function getChunkVersion(cx, cy) {
    return logs.get(key(cx, cy))?.length ?? 0;
}
```
===== FILE END =====


### apps/game-server/src/world/overlays.ts

<a id="apps-game-server-src-world-overlays-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/overlays.ts
URL: (not in git / no remote detected)
Bytes: 1537  Lines: 42  Modified: 2025-08-11T00:38:13Z
SHA256: 89fb6eacf7066307876dd34973a0ec174c8ef5bb345c931386f749beb5d133a2   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
//import { CHUNK_SIZE } from '@warboy/world';
import { CHUNK_SIZE } from '@warboy/world';
//import type { OverlayEvent } from '@warboy/overlays';
//import type { TilePatch } from '@warboy/overlays';
import type { OverlayEvent } from '@warboy/overlays';
import type { TilePatch } from '@warboy/overlays';


const logs = new Map<string, OverlayEvent[]>();       // per-chunk append-only
const patches = new Map<string, TilePatch[]>();        // per-chunk latest tile writes

const key = (cx:number, cy:number) => `${cx}:${cy}`;
const mod = (n:number, m:number) => ((n % m) + m) % m;

export function appendOverlay(ev: OverlayEvent) {
  if (ev.t === 'place' && ev.kind === 'tile') {
    const cx = Math.floor(ev.tx / CHUNK_SIZE);
    const cy = Math.floor(ev.ty / CHUNK_SIZE);
    const lx = mod(ev.tx, CHUNK_SIZE);
    const ly = mod(ev.ty, CHUNK_SIZE);

    const k = key(cx, cy);
    // log
    let arr = logs.get(k); if (!arr) { arr = []; logs.set(k, arr); }
    arr.push(ev);
    // patch (overwrite last write for same cell)
    let ps = patches.get(k); if (!ps) { ps = []; patches.set(k, ps); }
    const idx = ps.findIndex(p => p.lx===lx && p.ly===ly);
    const patch = { lx, ly, tile: ev.data.tile|0 };
    if (idx >= 0) ps[idx] = patch; else ps.push(patch);
  }
  // (remove/meta can be extended later)
}

export function getChunkPatches(cx:number, cy:number): TilePatch[] {
  return patches.get(key(cx,cy)) ?? [];
}

export function getChunkVersion(cx:number, cy:number): number {
  return logs.get(key(cx,cy))?.length ?? 0;
}

```
===== FILE END =====


### apps/game-server/src/world/storage.js

<a id="apps-game-server-src-world-storage-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/storage.js
URL: (not in git / no remote detected)
Bytes: 212  Lines: 8  Modified: 2025-08-11T21:04:16Z
SHA256: 83f679619c55ab5f81e67616047654dae07155b9a72717d860f153b78848d001   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
const chunks = new Map();
const key = (cx, cy) => `${cx}:${cy}`;
export function getSnapshot(cx, cy) {
    return chunks.get(key(cx, cy));
}
export function putSnapshot(s) {
    chunks.set(key(s.cx, s.cy), s);
}
```
===== FILE END =====


### apps/game-server/src/world/storage.ts

<a id="apps-game-server-src-world-storage-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/storage.ts
URL: (not in git / no remote detected)
Bytes: 327  Lines: 12  Modified: 2025-08-10T22:34:05Z
SHA256: 00b429b29c8327603cb417c1ca67555c3a7529f6ca2a23a7b43b8514dec8374b   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { ChunkSnapshot } from '@warboy/world';

const chunks = new Map<string, ChunkSnapshot>();
const key = (cx:number, cy:number) => `${cx}:${cy}`;

export function getSnapshot(cx:number, cy:number) {
  return chunks.get(key(cx,cy));
}
export function putSnapshot(s: ChunkSnapshot) {
  chunks.set(key(s.cx,s.cy), s);
}

```
===== FILE END =====


### apps/game-server/src/world/systems/battle.js

<a id="apps-game-server-src-world-systems-battle-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/battle.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/systems/battle.ts

<a id="apps-game-server-src-world-systems-battle-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/battle.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/systems/building.js

<a id="apps-game-server-src-world-systems-building-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/building.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/systems/building.ts

<a id="apps-game-server-src-world-systems-building-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/building.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/systems/capture.js

<a id="apps-game-server-src-world-systems-capture-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/capture.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/systems/capture.ts

<a id="apps-game-server-src-world-systems-capture-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/capture.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/systems/encounters.js

<a id="apps-game-server-src-world-systems-encounters-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/encounters.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/systems/encounters.ts

<a id="apps-game-server-src-world-systems-encounters-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/encounters.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/systems/movement.js

<a id="apps-game-server-src-world-systems-movement-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/movement.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/systems/movement.ts

<a id="apps-game-server-src-world-systems-movement-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/systems/movement.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/zones/Zone.js

<a id="apps-game-server-src-world-zones-zone-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/zones/Zone.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/zones/Zone.ts

<a id="apps-game-server-src-world-zones-zone-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/zones/Zone.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/src/world/zones/ZoneManager.js

<a id="apps-game-server-src-world-zones-zonemanager-js"></a>
===== FILE START =====
Path: apps/game-server/src/world/zones/ZoneManager.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-server/src/world/zones/ZoneManager.ts

<a id="apps-game-server-src-world-zones-zonemanager-ts"></a>
===== FILE START =====
Path: apps/game-server/src/world/zones/ZoneManager.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-server/tsconfig.json

<a id="apps-game-server-tsconfig-json"></a>
===== FILE START =====
Path: apps/game-server/tsconfig.json
URL: (not in git / no remote detected)
Bytes: 320  Lines: 15  Modified: 2025-08-11T23:03:28Z
SHA256: 8cc8c7b83ef4fc729adf219397b29c9c5d81f2d1495e7fb5a0e1b92970491054   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": { "module": "ESNext",
    "rootDir": "src",
    "outDir": "dist",
    "composite": true
  },
  "include": ["src"],
  "references": [
    { "path": "../../packages/world" },
    { "path": "../../packages/overlays" },
    { "path": "../../packages/chat" }
  ]
}

```
===== FILE END =====


### apps/game-server/tsconfig.tsbuildinfo

<a id="apps-game-server-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: apps/game-server/tsconfig.tsbuildinfo
URL: (not in git / no remote detected)
Bytes: 38002  Lines: 0  Modified: 2025-08-11T22:25:00Z
SHA256: a6d8609856daf8fe3901658f735a9a3537b03da4cfeebabb5b00176276b85689   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### apps/game-web/index.html

<a id="apps-game-web-index-html"></a>
===== FILE START =====
Path: apps/game-web/index.html
URL: (not in git / no remote detected)
Bytes: 279  Lines: 12  Modified: 2025-08-09T23:44:04Z
SHA256: e58d36303b02c99d8c8f0635332458d0b0989c0b55ddcc39dc5e3e4f5a1afd38   Language: html   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```html
<!doctype html>
<html>
  <head>
    <meta charset="utf-8"/>
    <meta name="viewport" content="width=device-width,initial-scale=1"/>
    <title>Warboy</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/index.tsx"></script>
  </body>
</html>
```
===== FILE END =====


### apps/game-web/package.json

<a id="apps-game-web-package-json"></a>
===== FILE START =====
Path: apps/game-web/package.json
URL: (not in git / no remote detected)
Bytes: 532  Lines: 22  Modified: 2025-08-11T22:39:41Z
SHA256: 955d33c13195f1281c1446f1cbe951870bde22aeaf0f04bea0d8949e4fd9a433   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "game-web",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview -p 5173"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "@warboy/chat": "file:../../packages/chat",
    "@warboy/world": "file:../../packages/world",
    "@warboy/overlays": "file:../../packages/overlays"
  },
  "devDependencies": {
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^4.7.0",
    "vite": "^6.3.5"
  }
}
```
===== FILE END =====


### apps/game-web/public/tiles/grass.png

<a id="apps-game-web-public-tiles-grass-png"></a>
===== FILE START =====
Path: apps/game-web/public/tiles/grass.png
URL: (not in git / no remote detected)
Bytes: 244  Lines: 3  Modified: 2025-05-22T14:06:23Z
SHA256: 6675f22f997560f62b0fee5949a670132cdf89fc359caac46a6afd8a27ca7634   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### apps/game-web/public/tiles/rock.png

<a id="apps-game-web-public-tiles-rock-png"></a>
===== FILE START =====
Path: apps/game-web/public/tiles/rock.png
URL: (not in git / no remote detected)
Bytes: 3420  Lines: 12  Modified: 2025-05-22T14:06:19Z
SHA256: f3923790087f3a25a531a26dcf3536750293b349dd2af85d74b432b531426eb2   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### apps/game-web/public/tiles/water.png

<a id="apps-game-web-public-tiles-water-png"></a>
===== FILE START =====
Path: apps/game-web/public/tiles/water.png
URL: (not in git / no remote detected)
Bytes: 121  Lines: 2  Modified: 2025-05-22T14:06:23Z
SHA256: 2a46f8044aae6b14d294f2896dbf4a096412a252f235a955960496f5ac71b05a   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### apps/game-web/src/app/App.d.ts

<a id="apps-game-web-src-app-app-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/App.d.ts
URL: (not in git / no remote detected)
Bytes: 97  Lines: 3  Modified: 2025-08-11T22:17:17Z
SHA256: 2daed528d828c250a190ca9c466b2ad13b275a47b9ccf2cd5516aa5b8befe3c0   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import React from 'react';
export declare function App(): React.JSX.Element;
export default App;
```
===== FILE END =====


### apps/game-web/src/app/App.tsx

<a id="apps-game-web-src-app-app-tsx"></a>
===== FILE START =====
Path: apps/game-web/src/app/App.tsx
URL: (not in git / no remote detected)
Bytes: 19186  Lines: 452  Modified: 2025-08-15T04:01:21Z
SHA256: 64b4babfc88555df50beccc5fb25fdfb2325282b460a7a4bb36e74de2ff29c31   Language: tsx   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```tsx
// apps/game-web/src/app/App.tsx

// ──────────────────────────────────────────────────────────────────────────────
// UI SYSTEM (canvas HUD + input)
// Good module seam: keep UI primitives (manager, widgets, panels) in /ui/*
// ──────────────────────────────────────────────────────────────────────────────
import { UIManager } from './ui/manager';
import { ChatHud } from './ui/chat/chatHUD';
import { createTextCapture } from './ui/input/textCapture';

// ──────────────────────────────────────────────────────────────────────────────
// REACT + GAME BOOTSTRAP
// ──────────────────────────────────────────────────────────────────────────────
import React, { useEffect, useRef, useState } from 'react';

// ──────────────────────────────────────────────────────────────────────────────
// NETWORKING (WS client + message types)
// Good module seam: /game/net/*
// ──────────────────────────────────────────────────────────────────────────────
import { connectWS } from './game/net/wsClient';

// ──────────────────────────────────────────────────────────────────────────────
// WORLD DATA / CACHING / COORD MATH
// Good module seam: /game/world/* & @warboy/world
// ──────────────────────────────────────────────────────────────────────────────
import { ChunkCache } from './game/world/cache';
import { CHUNK_SIZE, worldToChunk, localInChunk, edgePrefetch, directionalAOI, aoiRect } from '@warboy/world';





// ──────────────────────────────────────────────────────────────────────────────
// SPRITES / ANIMATION
// Good module seam: /game/sprites/*
// ──────────────────────────────────────────────────────────────────────────────
import heroUrl from './game/assets/sprites/Alex_16x16.png';
import { loadImage } from './game/sprites/loader';
import { SpriteSheet } from './game/sprites/spriteSheet';
import { Animator } from './game/sprites/anim';

// shared, long‑lived chunk cache
const cache = new ChunkCache();

export function App() {
  const [status, setStatus] = useState('disconnected');
  const [id, setId] = useState<string | null>(null);
  const [players, setPlayers] = useState<any[]>([]);

  // canvas / draw loop refs
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const rafRef = useRef<number | null>(null);

  // network + game state refs
  const playersRef = useRef<any[]>([]);
  const idRef = useRef<string | null>(null);
  const wsRef = useRef<any>(null);
  const lastPosRef = useRef<{ tx: number; ty: number } | null>(null);

  // sprite state
  const heroSheetRef = useRef<SpriteSheet | null>(null);
  const heroAnimRef = useRef<Animator | null>(null);
  const heroRowRef = useRef(0);
  const lastDrawPosRef = useRef<{ tx: number; ty: number } | null>(null);

  // ui system
  const uiRef = useRef<UIManager | null>(null);
  const chatRef = useRef<ChatHud | null>(null);

  useEffect(() => { playersRef.current = players; }, [players]);
  useEffect(() => { idRef.current = id; }, [id]);

  // ────────────────────────────────────────────────────────────────────────────
  // ASSET PRELOAD (sprite sheet)
  // ────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    let alive = true;
    (async () => {
      const img = await loadImage(heroUrl);
      if (!alive) return;
      const cols = Math.floor(img.width / 16);
      heroSheetRef.current = new SpriteSheet(img, 16, 16, cols);
      heroAnimRef.current = new Animator({ frames: [0, 1, 2, 3], fps: 8, loop: true });
    })();
    return () => { alive = false; };
  }, []);

  // ────────────────────────────────────────────────────────────────────────────
  // NETWORK CONNECT (WS) — module seam: isolate in /game/net
  // ────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    setStatus('connecting');
    const name = `warboy-${Math.floor(Math.random() * 1000)}`;
    const url = import.meta.env?.VITE_WS_URL || `ws://${location.hostname}:8787`;

    const ws = connectWS({
      url,
      name,

      onChat: (m) => {
        chatRef.current?.addLine(`${m.from?.name ?? m.from?.id ?? 'anon'}: ${m.text}`);
      },

      onWelcome: (me) => {
        setId(me.id);
        setStatus('connected');
        chatRef.current?.addLine(`system: connected as ${me.id}`);

        const { cx, cy } = worldToChunk(0, 0, CHUNK_SIZE);

        // request a 3x3 AOI initially
        const req3x3 = () => {
          for (const { cx: x, cy: y } of aoiRect(cx, cy, 1, 1)) {
            ws.chunkReq?.(x, y);
          }
        };
        req3x3();

        // re-request center ring until at least center is cached
        let tries = 0;
        const iv = setInterval(() => {
          if (cache.has(cx, cy) || tries++ > 10) return clearInterval(iv);
          console.log('[retry] requesting chunks...');
          req3x3();
        }, 1000);
      },

      onSnapshot: (snap) => {
        // debug/telemetry: consider module seam in /telemetry
        console.log('[snapshot]', snap.players.map((p: any) => ({
          id: p.id, name: p.name, tx: p.tx, ty: p.ty, x: p.x, y: p.y
        })));
        setPlayers(snap.players);
      },

      onChunk: (msg) => {
        // WORLD MERGE / PATCH APPLY — keep this logic in /game/world
        console.log('[onChunk]', msg);
        if (msg?.t === 'chunkData') {
          cache.setFromSnap(msg);
        }
      },

      onClose: () => {
        setStatus('disconnected');
        chatRef.current?.addLine('system: disconnected');
      },
    });

    wsRef.current = ws;

    // NOTE: movement keys are handled here; UI keys go through UIManager below
   const onKeyDown = (e: KeyboardEvent) => {
   const uiHandled = uiRef.current?.handleKeyDown(e) ?? false;
   if (uiHandled) {
     e.preventDefault();
     return;
   }

   const k = e.key.toLowerCase();
   const dx = k === 'arrowright' || k === 'd' ? 1 : k === 'arrowleft' || k === 'a' ? -1 : 0;
   const dy = k === 'arrowdown' || k === 's' ? 1 : k === 'arrowup' || k === 'w' ? -1 : 0;

   if (dx || dy) {
     e.preventDefault();
     wsRef.current?.intent(dx, dy);
   }
   }; 
   window.addEventListener('keydown', onKeyDown);

   return () => {
     window.removeEventListener('keydown', onKeyDown);
     try { ws.close(); } catch {}
     wsRef.current = null;
   };
  }, []);

  // ────────────────────────────────────────────────────────────────────────────
  // AOI / PREFETCH SYSTEM — module seam: /game/systems/aoiPrefetch
  // ────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    let lastCenter: { cx: number; cy: number } | null = null;

    const tick = () => {
      const me = playersRef.current.find((p) => p.id === idRef.current);
      if (!me) return;

      const tx = me.tx ?? 0;
      const ty = me.ty ?? 0;
      const prev = lastPosRef.current;
      const dx = prev ? Math.sign(tx - prev.tx) : 0;
      const dy = prev ? Math.sign(ty - prev.ty) : 0;
      lastPosRef.current = { tx, ty };

      const { cx, cy } = worldToChunk(tx, ty, CHUNK_SIZE);
      const { lx, ly } = localInChunk(tx, ty, CHUNK_SIZE);

      let recompute = false;
      if (!lastCenter || cx !== lastCenter.cx || cy !== lastCenter.cy) {
        lastCenter = { cx, cy };
        recompute = true;
      } else {
        const near = edgePrefetch(lx, ly, dx, dy, 4, CHUNK_SIZE);
        recompute = near.west || near.east || near.north || near.south;
      }
      if (!recompute) return;

      const near = edgePrefetch(lx, ly, dx, dy, 4, CHUNK_SIZE);
      const needed = directionalAOI(cx, cy, near, 1);
      for (const { cx: x, cy: y } of needed) {
        if (!cache.has(x, y)) wsRef.current?.chunkReq?.(x, y);
      }
    };

    const handle = setInterval(tick, 150);
    return () => clearInterval(handle);
  }, []);

  // ────────────────────────────────────────────────────────────────────────────
  // CANVAS + RENDER LOOP — module seam: /game/render/*
  // split world render vs. UI overlay draw
  // ────────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    // --- UI setup ---
    // Good module seam: /ui (manager, panels)
    const ui = new UIManager();
    uiRef.current = ui;

 

    // mount hidden text capture onto the canvas container (parent DIV)
    const hostEl = (c.parentElement as HTMLElement) || document.body;
    const cap = createTextCapture();
    ui.attachTextCapture(cap, hostEl);

    const chat = new ChatHud(
      { x: 8, y: 8, w: Math.min(360, (c.clientWidth || 800) * 0.4), h: 180 },
      (text) => wsRef.current?.chat?.(text)
    );
    chatRef.current = chat;
    ui.add(chat);

    // --- input plumbing (pointer + wheel go to UI first) ---
    const toPoint = (e: PointerEvent | MouseEvent, target: HTMLCanvasElement) => {
      const rect = target.getBoundingClientRect();
      return { x: e.clientX - rect.left, y: e.clientY - rect.top };
    };

    const onPointerDown = (e: PointerEvent) => {
      const p = toPoint(e, c);
      ui.dispatch({ t: 'pointerDown', p, id: e.pointerId });
    };
    const onPointerMove = (e: PointerEvent) => {
      const p = toPoint(e, c);
      ui.dispatch({ t: 'pointerMove', p, id: e.pointerId });
    };
    const onPointerUp = (e: PointerEvent) => {
      const p = toPoint(e, c);
      ui.dispatch({ t: 'pointerUp', p, id: e.pointerId });
    };

    // non‑passive so preventDefault() works when UI consumes the scroll
    const onWheel = (e: WheelEvent) => {
      const handled = ui.dispatch({ t: 'wheel', dx: e.deltaX, dy: e.deltaY });
      if (handled) e.preventDefault();
    };

    // Route keyboard through UI manager fallback (printables/Enter/Backspace/IME)
    const onKeyDown = (e: KeyboardEvent) => {
      const handled = ui.handleKeyDown(e);
      if (handled) e.preventDefault();
    };

    c.addEventListener('pointerdown', onPointerDown);
    c.addEventListener('pointermove', onPointerMove);
    c.addEventListener('pointerup', onPointerUp);
    c.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('keydown', onKeyDown);

    // size / DPR
    const resize = () => {
      const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));
      const cssW = c.clientWidth || 800;
      const cssH = c.clientHeight || 450;
      c.width = Math.max(1, Math.floor(cssW * dpr));
      c.height = Math.max(1, Math.floor(cssH * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener('resize', resize);

    // render loop
    const draw = () => {
      const ctx2 = ctxRef.current;
      if (!ctx2) return;

      const cssW = c.clientWidth || 800;
      const cssH = c.clientHeight || 450;

      // clear & bg
      ctx2.clearRect(0, 0, cssW, cssH);
      ctx2.fillStyle = '#101010';
      ctx2.fillRect(0, 0, cssW, cssH);

      // WORLD RENDER — module seam: put into /game/render/world
      const curPlayers = playersRef.current;
      const meId = idRef.current;
      const me = curPlayers.find((p) => p.id === meId);
      const tx = me?.tx ?? 0;
      const ty = me?.ty ?? 0;
      const TILE_PIX = 8;
      const tileColor: Record<number, string> = {
        0: '#2050ff', // water
        1: '#2aa745', // grass
        2: '#999999', // rock
      };

      // draw chunks around player
      const center = worldToChunk(tx, ty, CHUNK_SIZE);
      for (let gy = -1; gy <= 1; gy++) {
        for (let gx = -1; gx <= 1; gx++) {
          const ccx = center.cx + gx;
          const ccy = center.cy + gy;
          const ch = cache.get?.(ccx, ccy) ?? cache.getChunk?.(ccx, ccy);
          if (!ch) continue;
          const w = ch.w ?? ch.width ?? CHUNK_SIZE;
          const h = ch.h ?? ch.height ?? CHUNK_SIZE;
          const tiles = (ch.tiles ?? ch.tilesU8);
          if (!tiles) continue;

          for (let y = 0; y < h; y++) {
            for (let x = 0; x < w; x++) {
              const t = tiles[y * w + x] | 0;
              ctx2.fillStyle = tileColor[t] ?? '#444';
              const wx = ccx * CHUNK_SIZE + x;
              const wy = ccy * CHUNK_SIZE + y;
              const sx = Math.floor(cssW / 2 + (wx - tx) * TILE_PIX);
              const sy = Math.floor(cssH / 2 + (wy - ty) * TILE_PIX);
              ctx2.fillRect(sx, sy, TILE_PIX, TILE_PIX);
            }
          }
          // optional chunk border (debug)
          ctx2.strokeStyle = '#222';
          const topLeftX = Math.floor(cssW / 2 + (ccx * CHUNK_SIZE - tx) * TILE_PIX);
          const topLeftY = Math.floor(cssH / 2 + (ccy * CHUNK_SIZE - ty) * TILE_PIX);
          ctx2.strokeRect(topLeftX, topLeftY, CHUNK_SIZE * TILE_PIX, CHUNK_SIZE * TILE_PIX);
        }
      }

      // OTHER PLAYERS — could be a separate layer/system
      const others = curPlayers.filter((p) => p.id !== meId);
      for (const p of others) {
        const ox = p.tx ?? 0;
        const oy = p.ty ?? 0;
        const sx = Math.floor(cssW / 2 + (ox - tx) * TILE_PIX);
        const sy = Math.floor(cssH / 2 + (oy - ty) * TILE_PIX);
        ctx2.fillStyle = '#ffd400';
        ctx2.fillRect(sx - 3, sy - 6, 6, 6);
        ctx2.strokeStyle = '#000';
        ctx2.strokeRect(sx - 3, sy - 6, 6, 6);
        ctx2.fillStyle = '#ffffff';
        ctx2.font = '10px system-ui';
        ctx2.textAlign = 'center';
        ctx2.fillText(p.name ?? p.id.slice(0, 4), sx, sy - 8);

        // UI ghost (minimap-ish)
        const sxUI = (p.x / 100) * cssW;
        const syUI = (p.y / 100) * cssH;
        ctx2.fillStyle = '#ff00ff';
        ctx2.fillRect(sxUI - 2, syUI - 2, 4, 4);
      }

      // DEBUG HUD — could move to /ui/panels/debugHud
      ctx2.fillStyle = '#fff';
      ctx2.font = '12px monospace';
      ctx2.textAlign = 'left';
      ctx2.fillText(`players:${curPlayers.length} me:${meId?.slice(0, 4) ?? '—'} tx:${tx} ty:${ty}`, 8, 16);

      // HERO SPRITE — module seam: /game/render/hero
      const sheet = heroSheetRef.current;
      const anim = heroAnimRef.current;
      if (sheet && anim) {
        const prev = lastDrawPosRef.current;
        const dx = prev ? Math.sign(tx - prev.tx) : 0;
        const dy = prev ? Math.sign(ty - prev.ty) : 0;
        lastDrawPosRef.current = { tx, ty };
        let row = heroRowRef.current;
        if (Math.abs(dx) > Math.abs(dy)) row = dx > 0 ? 1 : 3; // right/left
        else if (Math.abs(dy) > 0) row = dy < 0 ? 2 : 0; // up/down
        if (row !== heroRowRef.current) {
          heroRowRef.current = row;
          const base = row * sheet.columns;
          anim.set({ frames: [base + 0, base + 1, base + 2, base + 3], fps: 8, loop: true });
        }
        const scale = 8 / 16;
        const frame = anim.frameIndex();
        const drawX = Math.floor(cssW / 2 - (16 * scale) / 2);
        const drawY = Math.floor(cssH / 2 - (16 * scale) + 2);
        sheet.drawFrame(ctx2, frame, drawX, drawY, scale);
      }

      // UI OVERLAY — all canvas widgets (chat, etc)
      uiRef.current?.draw(ctx2);

      rafRef.current = requestAnimationFrame(draw);
    };

    rafRef.current = requestAnimationFrame(draw);

    // cleanup
    return () => {
      window.removeEventListener('resize', resize);
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);

      c.removeEventListener('pointerdown', onPointerDown);
      c.removeEventListener('pointermove', onPointerMove);
      c.removeEventListener('pointerup', onPointerUp);
      c.removeEventListener('wheel', onWheel);
      window.removeEventListener('keydown', onKeyDown);

      uiRef.current?.destroy();
      uiRef.current = null;
      chatRef.current = null;

      rafRef.current = null;
      ctxRef.current = null;
    };
  }, []);

  return (
    <div style={{ color: '#ddd', fontFamily: 'system-ui', padding: 8 }}>
      <div>status: {status} {id ? `| id: ${id}` : ''}</div>

      {/* Canvas host div — good mount point for hidden textCapture */}
      <div style={{ border: '1px solid #333', marginTop: 8, width: '100%', maxWidth: 960, aspectRatio: '16 / 9' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }}/>
      </div>

      <div style={{ marginTop: 8 }}>WASD / Arrow keys move your square.</div>
    </div>
  );
}

export default App;

```
===== FILE END =====


### apps/game-web/src/app/chat/useChat.d.ts

<a id="apps-game-web-src-app-chat-usechat-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/chat/useChat.d.ts
URL: (not in git / no remote detected)
Bytes: 383  Lines: 9  Modified: 2025-08-11T22:17:17Z
SHA256: 5e4bf4f4994d8d00734bf89083627be7ff2ff68f015da8795856ab110d96ba3b   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export declare function useChat(wsRef: React.MutableRefObject<any>, defaultRoom?: string): {
    open: boolean;
    setOpen: import("react").Dispatch<import("react").SetStateAction<boolean>>;
    unread: number;
    setUnread: import("react").Dispatch<import("react").SetStateAction<number>>;
    msgs: ChatMsg[];
    send: (text: string) => any;
    setRoom: (r: string) => any;
};
```
===== FILE END =====


### apps/game-web/src/app/chat/useChat.js

<a id="apps-game-web-src-app-chat-usechat-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/chat/useChat.js
URL: (not in git / no remote detected)
Bytes: 1416  Lines: 38  Modified: 2025-08-11T22:17:17Z
SHA256: 0cec0de2253fd43ef168607969e6e70bba274313c8f1e946bcf7d44ff57380dd   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { useEffect, useRef, useState } from "react";
import { ChatClient, isChatRecv } from "@warboy/chat";
export function useChat(wsRef, defaultRoom = "global") {
    const [open, setOpen] = useState(false);
    const [unread, setUnread] = useState(0);
    const [msgs, setMsgs] = useState([]);
    const clientRef = useRef(null);
    useEffect(() => {
        if (!wsRef.current)
            return;
        const client = new ChatClient({
            defaultRoom,
            send: (data) => wsRef.current.send?.(data) ?? wsRef.current.chat?.(data),
        });
        clientRef.current = client;
        const off = client.onMessage((m) => {
            setMsgs((p) => [...p, m].slice(-200));
            if (!open)
                setUnread((u) => Math.min(99, u + 1));
        });
        // tap into raw WS frames (depends on your wsClient; adapt if needed)
        const prev = wsRef.current.onAnyMessage;
        wsRef.current.onAnyMessage = (frame) => {
            if (isChatRecv(frame))
                client.handleIncoming(frame);
            prev?.(frame);
        };
        return () => { off(); if (wsRef.current)
            wsRef.current.onAnyMessage = prev; };
    }, [wsRef, defaultRoom, open]);
    return {
        open, setOpen,
        unread, setUnread,
        msgs,
        send: (text) => clientRef.current?.send(text),
        setRoom: (r) => clientRef.current?.setRoom(r),
    };
}
```
===== FILE END =====


### apps/game-web/src/app/chat/useChat.ts

<a id="apps-game-web-src-app-chat-usechat-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/chat/useChat.ts
URL: (not in git / no remote detected)
Bytes: 1344  Lines: 41  Modified: 2025-08-11T21:39:49Z
SHA256: 262862cd6af2ad0ffca2b7fd8eb3a7eb945fcbc872921c8dc037b1fe4f795947   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { useEffect, useRef, useState } from "react";
import { ChatClient, isChatRecv, ChatMsg } from "@warboy/chat";

export function useChat(wsRef: React.MutableRefObject<any>, defaultRoom = "global") {
  const [open, setOpen] = useState(false);
  const [unread, setUnread] = useState(0);
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const clientRef = useRef<ChatClient | null>(null);

  useEffect(() => {
    if (!wsRef.current) return;
    const client = new ChatClient({
      defaultRoom,
      send: (data:any) => wsRef.current.send?.(data) ?? wsRef.current.chat?.(data),
    });
    clientRef.current = client;

    const off = client.onMessage((m) => {
      setMsgs((p) => [...p, m].slice(-200));
      if (!open) setUnread((u) => Math.min(99, u + 1));
    });

    // tap into raw WS frames (depends on your wsClient; adapt if needed)
    const prev = wsRef.current.onAnyMessage;
    wsRef.current.onAnyMessage = (frame: any) => {
      if (isChatRecv(frame)) client.handleIncoming(frame);
      prev?.(frame);
    };

    return () => { off(); if (wsRef.current) wsRef.current.onAnyMessage = prev; };
  }, [wsRef, defaultRoom, open]);

  return {
    open, setOpen,
    unread, setUnread,
    msgs,
    send: (text: string) => clientRef.current?.send(text),
    setRoom: (r: string) => clientRef.current?.setRoom(r),
  };
}

```
===== FILE END =====


### apps/game-web/src/app/game/assets/sprites/Alex_16x16.png

<a id="apps-game-web-src-app-game-assets-sprites-alex-16x16-png"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/assets/sprites/Alex_16x16.png
URL: (not in git / no remote detected)
Bytes: 18938  Lines: 49  Modified: 2020-12-22T23:12:28Z
SHA256: 3db9c01ac6db47abfefe381d33f1c0a9bf22930b9b25187fc213a723333f0212   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### apps/game-web/src/app/game/net/wsClient.d.ts

<a id="apps-game-web-src-app-game-net-wsclient-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/net/wsClient.d.ts
URL: (not in git / no remote detected)
Bytes: 827  Lines: 38  Modified: 2025-08-11T22:17:17Z
SHA256: 86177cd2b1282c3a21a3844046c7f51e9d3b39ad4d8bc632c387e5f3b39e7dc5   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
type ServerWelcome = {
    t: 'welcome';
    id: string;
    zoneId: string;
    time: number;
};
type ServerSnapshot = {
    t: 'snapshot';
    time: number;
    players: Array<{
        id: string;
        x: number;
        y: number;
        name: string;
    }>;
};
type ServerChunkData = {
    t: 'chunkData';
    cx: number;
    cy: number;
    w: number;
    h: number;
    tilesB64: string;
};
export declare function connectWS(opts: {
    url: string;
    name: string;
    onWelcome?: (me: ServerWelcome) => void;
    onSnapshot?: (snap: ServerSnapshot) => void;
    onChunk?: (msg: ServerChunkData) => void;
    onClose?: () => void;
}): {
    intent(dx: -1 | 0 | 1, dy: -1 | 0 | 1): void;
    requestChunk(cx: number, cy: number): void;
    chunkReq(cx: number, cy: number): void;
    close(): void;
};
export {};
```
===== FILE END =====


### apps/game-web/src/app/game/net/wsClient.js

<a id="apps-game-web-src-app-game-net-wsclient-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/net/wsClient.js
URL: (not in git / no remote detected)
Bytes: 1172  Lines: 37  Modified: 2025-08-11T22:17:17Z
SHA256: 8f9063c58356b34dcbb2799e55b5203176fd155c08a090442f9aff9853ebc1cc   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export function connectWS(opts) {
    const ws = new WebSocket(opts.url);
    let seq = 0;
    ws.addEventListener('open', () => {
        const m = { t: 'hello', name: opts.name };
        ws.send(JSON.stringify(m));
    });
    ws.addEventListener('message', (ev) => {
        const msg = JSON.parse(ev.data);
        if (msg.t === 'welcome')
            opts.onWelcome?.(msg);
        else if (msg.t === 'snapshot')
            opts.onSnapshot?.(msg);
        else if (msg.t === 'chunkData')
            opts.onChunk?.(msg); // ← forwards chunk data
    });
    ws.addEventListener('close', () => opts.onClose?.());
    return {
        intent(dx, dy) {
            const m = { t: 'intent', seq: ++seq, dx, dy };
            if (ws.readyState === WebSocket.OPEN)
                ws.send(JSON.stringify(m));
        },
        requestChunk(cx, cy) {
            const m = { t: 'chunkReq', cx, cy };
            if (ws.readyState === WebSocket.OPEN)
                ws.send(JSON.stringify(m));
        },
        chunkReq(cx, cy) {
            this.requestChunk(cx, cy);
        },
        close() { try {
            ws.close();
        }
        catch { } }
    };
}
```
===== FILE END =====


### apps/game-web/src/app/game/net/wsClient.ts

<a id="apps-game-web-src-app-game-net-wsclient-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/net/wsClient.ts
URL: (not in git / no remote detected)
Bytes: 2288  Lines: 62  Modified: 2025-08-12T03:53:47Z
SHA256: 2358e8f3908a730a0780ab340f45e3f0376154881dd974a7e16bd11cad0a72e4   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/game/net/wsClient.ts
type ClientHello = { t: 'hello'; name: string };
type ClientIntent = { t: 'intent'; seq: number; dx: -1|0|1; dy: -1|0|1 };
type ClientChunkReq = { t:'chunkReq'; cx:number; cy:number };
type ClientChat = { t:'chat'; text:string };

type ServerWelcome = { t: 'welcome'; id: string; zoneId: string; time: number };
type ServerSnapshot = { t:'snapshot'; time:number; players:Array<{id:string;x:number;y:number;name:string}> };
type ServerChunkData = { t:'chunkData'; cx:number; cy:number; w:number; h:number; tilesB64:string };
type ServerChat = { t:'chat'; text:string; from?: { id:string; name?:string } };

type C2S = ClientHello | ClientIntent | ClientChunkReq | ClientChat;
type S2C = ServerWelcome | ServerSnapshot | ServerChunkData | ServerChat;

export function connectWS(opts: {
  url: string; name: string;
  onWelcome?: (me: ServerWelcome) => void;
  onSnapshot?: (snap: ServerSnapshot) => void;
  onChunk?: (msg: ServerChunkData) => void;
  onChat?: (msg: ServerChat) => void;
  onClose?: () => void;
}) {
  const ws = new WebSocket(opts.url);
  let seq = 0;

  ws.addEventListener('open', () => {
    const m: ClientHello = { t:'hello', name: opts.name };
    ws.send(JSON.stringify(m));
  });

  ws.addEventListener('message', (ev) => {
    let msg: S2C;
    try { msg = JSON.parse(ev.data); } catch { return; }
    if (!msg || typeof msg !== 'object') return;

    switch (msg.t) {
      case 'welcome':   opts.onWelcome?.(msg); break;
      case 'snapshot':  opts.onSnapshot?.(msg); break;
      case 'chunkData': opts.onChunk?.(msg); break;
      case 'chat':      opts.onChat?.(msg); break;
    }
  });

  ws.addEventListener('close', () => opts.onClose?.());

  return {
    intent(dx: -1|0|1, dy: -1|0|1) {
      const m: ClientIntent = { t:'intent', seq: ++seq, dx, dy };
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(m));
    },
    chunkReq(cx:number, cy:number) {
      const m: ClientChunkReq = { t:'chunkReq', cx, cy };
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(m));
    },
    chat(text:string) {
      const m: ClientChat = { t:'chat', text };
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(m));
    },
    close(){ try{ ws.close(); }catch{} }
  };
}

```
===== FILE END =====


### apps/game-web/src/app/game/sprites/anim.d.ts

<a id="apps-game-web-src-app-game-sprites-anim-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/anim.d.ts
URL: (not in git / no remote detected)
Bytes: 246  Lines: 12  Modified: 2025-08-11T22:17:17Z
SHA256: 7881b0262ed10ad636823626b7ae6a446a3285959caf230eae685d678fcb7347   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type Anim = {
    frames: number[];
    fps: number;
    loop?: boolean;
};
export declare class Animator {
    private t0;
    private _anim;
    constructor(anim: Anim);
    set(anim: Anim): void;
    frameIndex(now?: number): number;
}
```
===== FILE END =====


### apps/game-web/src/app/game/sprites/anim.js

<a id="apps-game-web-src-app-game-sprites-anim-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/anim.js
URL: (not in git / no remote detected)
Bytes: 520  Lines: 15  Modified: 2025-08-11T22:17:17Z
SHA256: bcb17551d18a9c31a539c4b364e0a0cce1aea7bef7c0ccbc2e106f1bf00d013b   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export class Animator {
    constructor(anim) {
        this.t0 = performance.now();
        this._anim = { ...anim, loop: anim.loop ?? true };
    }
    set(anim) {
        this._anim = { ...anim, loop: anim.loop ?? true };
        this.t0 = performance.now();
    }
    frameIndex(now = performance.now()) {
        const { frames, fps, loop } = this._anim;
        const i = Math.floor(((now - this.t0) / 1000) * fps);
        return loop ? frames[i % frames.length] : frames[Math.min(i, frames.length - 1)];
    }
}
```
===== FILE END =====


### apps/game-web/src/app/game/sprites/anim.ts

<a id="apps-game-web-src-app-game-sprites-anim-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/anim.ts
URL: (not in git / no remote detected)
Bytes: 585  Lines: 20  Modified: 2025-08-11T01:08:45Z
SHA256: 916b43c6c1333442b0201403fee3ea27fdb5f3ad0261bda3bfbde9463dc2943b   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type Anim = { frames: number[]; fps: number; loop?: boolean };

export class Animator {
  private t0 = performance.now();
  private _anim: Anim;

  constructor(anim: Anim) { this._anim = { ...anim, loop: anim.loop ?? true }; }

  set(anim: Anim) {
    this._anim = { ...anim, loop: anim.loop ?? true };
    this.t0 = performance.now();
  }

  frameIndex(now = performance.now()) {
    const { frames, fps, loop } = this._anim;
    const i = Math.floor(((now - this.t0) / 1000) * fps);
    return loop ? frames[i % frames.length] : frames[Math.min(i, frames.length - 1)];
  }
}

```
===== FILE END =====


### apps/game-web/src/app/game/sprites/loader.d.ts

<a id="apps-game-web-src-app-game-sprites-loader-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/loader.d.ts
URL: (not in git / no remote detected)
Bytes: 75  Lines: 1  Modified: 2025-08-11T22:17:17Z
SHA256: 082b87ae6c6534751cadfccfc0c3c38f44fe6aebd65202f9e93a5660583940ed   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export declare function loadImage(src: string): Promise<HTMLImageElement>;
```
===== FILE END =====


### apps/game-web/src/app/game/sprites/loader.js

<a id="apps-game-web-src-app-game-sprites-loader-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/loader.js
URL: (not in git / no remote detected)
Bytes: 252  Lines: 8  Modified: 2025-08-11T22:17:17Z
SHA256: 981021ad917ebc42224f7c4a27735b31d219ad7228acd88833ed779bd6fd13ad   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export function loadImage(src) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = reject;
        img.src = src; // Vite will turn imports into URLs
    });
}
```
===== FILE END =====


### apps/game-web/src/app/game/sprites/loader.ts

<a id="apps-game-web-src-app-game-sprites-loader-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/loader.ts
URL: (not in git / no remote detected)
Bytes: 259  Lines: 9  Modified: 2025-08-11T01:08:08Z
SHA256: 03689bd9f2dd98234e9913619bf58dd372e27079b02b1318656196711c7a4146   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src; // Vite will turn imports into URLs
  });
}

```
===== FILE END =====


### apps/game-web/src/app/game/sprites/spriteSheet.d.ts

<a id="apps-game-web-src-app-game-sprites-spritesheet-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/spriteSheet.d.ts
URL: (not in git / no remote detected)
Bytes: 330  Lines: 8  Modified: 2025-08-11T22:17:17Z
SHA256: e70788ead94e99c30e3b42a98cc1613f18a0363a2c9558f832f3744693c39906   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export declare class SpriteSheet {
    image: HTMLImageElement;
    frameW: number;
    frameH: number;
    columns: number;
    constructor(image: HTMLImageElement, frameW: number, frameH: number, columns: number);
    drawFrame(ctx: CanvasRenderingContext2D, frameIndex: number, dx: number, dy: number, scale?: number): void;
}
```
===== FILE END =====


### apps/game-web/src/app/game/sprites/spriteSheet.js

<a id="apps-game-web-src-app-game-sprites-spritesheet-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/spriteSheet.js
URL: (not in git / no remote detected)
Bytes: 512  Lines: 14  Modified: 2025-08-11T22:17:17Z
SHA256: ff35a4dc929e54d7fa4d0f75cc2476d5583ea4b4ed613b27224b222560c3feca   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export class SpriteSheet {
    constructor(image, frameW, frameH, columns) {
        this.image = image;
        this.frameW = frameW;
        this.frameH = frameH;
        this.columns = columns;
    }
    drawFrame(ctx, frameIndex, dx, dy, scale = 1) {
        const fw = this.frameW, fh = this.frameH;
        const sx = (frameIndex % this.columns) * fw;
        const sy = Math.floor(frameIndex / this.columns) * fh;
        ctx.drawImage(this.image, sx, sy, fw, fh, dx, dy, fw * scale, fh * scale);
    }
}
```
===== FILE END =====


### apps/game-web/src/app/game/sprites/spriteSheet.ts

<a id="apps-game-web-src-app-game-sprites-spritesheet-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/spriteSheet.ts
URL: (not in git / no remote detected)
Bytes: 527  Lines: 21  Modified: 2025-08-11T01:08:25Z
SHA256: 04549fb60791001fe17b2d639aa60f90989215e482ea4cb2d223d802a6992c76   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export class SpriteSheet {
  constructor(
    public image: HTMLImageElement,
    public frameW: number,
    public frameH: number,
    public columns: number
  ) {}

  drawFrame(
    ctx: CanvasRenderingContext2D,
    frameIndex: number,
    dx: number, dy: number,
    scale = 1
  ) {
    const fw = this.frameW, fh = this.frameH;
    const sx = (frameIndex % this.columns) * fw;
    const sy = Math.floor(frameIndex / this.columns) * fh;
    ctx.drawImage(this.image, sx, sy, fw, fh, dx, dy, fw * scale, fh * scale);
  }
}

```
===== FILE END =====


### apps/game-web/src/app/game/state/chunks.d.ts

<a id="apps-game-web-src-app-game-state-chunks-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/state/chunks.d.ts
URL: (not in git / no remote detected)
Bytes: 451  Lines: 16  Modified: 2025-08-11T22:17:17Z
SHA256: 2922191ec22ab772ff38daf4339fbf7a605e0c4af46ba4fdd0e13bcb489a01c4   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export declare const CHUNK_SIZE = 32;
type Chunk = {
    cx: number;
    cy: number;
    w: number;
    h: number;
    tiles: Uint8Array;
};
export declare function getChunk(cx: number, cy: number): Chunk | undefined;
export declare function setChunk(c: Chunk): void;
export declare function neededChunks(px: number, py: number, radius?: number): {
    cx: number;
    cy: number;
}[];
export declare function decodeChunk(msg: any): Chunk;
export {};
```
===== FILE END =====


### apps/game-web/src/app/game/state/chunks.js

<a id="apps-game-web-src-app-game-state-chunks-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/state/chunks.js
URL: (not in git / no remote detected)
Bytes: 970  Lines: 26  Modified: 2025-08-11T22:17:17Z
SHA256: e067ab20058e2eb20160743c9f7a18bcde04caa8e97877fcae48082ee2d0c4ac   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
function b64ToU8(b64) {
    if (typeof Buffer !== 'undefined')
        return new Uint8Array(Buffer.from(b64, 'base64'));
    const bin = atob(b64);
    const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++)
        u8[i] = bin.charCodeAt(i);
    return u8;
}
export const CHUNK_SIZE = 32;
const cache = new Map();
const key = (cx, cy) => `${cx},${cy}`;
export function getChunk(cx, cy) { return cache.get(key(cx, cy)); }
export function setChunk(c) { cache.set(key(c.cx, c.cy), c); }
export function neededChunks(px, py, radius = 2) {
    const ccx = Math.floor(px / CHUNK_SIZE);
    const ccy = Math.floor(py / CHUNK_SIZE);
    const list = [];
    for (let dy = -radius; dy <= radius; dy++)
        for (let dx = -radius; dx <= radius; dx++)
            list.push({ cx: ccx + dx, cy: ccy + dy });
    return list;
}
export function decodeChunk(msg) {
    return { cx: msg.cx, cy: msg.cy, w: msg.w, h: msg.h, tiles: b64ToU8(msg.tilesB64) };
}
```
===== FILE END =====


### apps/game-web/src/app/game/state/chunks.ts

<a id="apps-game-web-src-app-game-state-chunks-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/state/chunks.ts
URL: (not in git / no remote detected)
Bytes: 1102  Lines: 29  Modified: 2025-08-10T00:38:37Z
SHA256: d785190b82d63e1d224f2f8ca351a1348689b4f436f5a7da37ae0bdb53ceffba   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
function b64ToU8(b64: string): Uint8Array {
  if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(b64, 'base64'));
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}
export const CHUNK_SIZE = 32;
type Chunk = { cx:number; cy:number; w:number; h:number; tiles:Uint8Array };
const cache = new Map<string, Chunk>();
const key = (cx:number, cy:number) => `${cx},${cy}`;

export function getChunk(cx:number, cy:number){ return cache.get(key(cx,cy)); }
export function setChunk(c:Chunk){ cache.set(key(c.cx,c.cy), c); }

export function neededChunks(px:number, py:number, radius=2){
  const ccx = Math.floor(px/CHUNK_SIZE);
  const ccy = Math.floor(py/CHUNK_SIZE);
  const list: Array<{cx:number;cy:number}> = [];
  for(let dy=-radius; dy<=radius; dy++)
    for(let dx=-radius; dx<=radius; dx++)
      list.push({ cx: ccx+dx, cy: ccy+dy });
  return list;
}

export function decodeChunk(msg:any): Chunk {
  return { cx: msg.cx, cy: msg.cy, w: msg.w, h: msg.h, tiles: b64ToU8(msg.tilesB64) };
}

```
===== FILE END =====


### apps/game-web/src/app/game/world/aoi.d.ts

<a id="apps-game-web-src-app-game-world-aoi-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/aoi.d.ts
URL: (not in git / no remote detected)
Bytes: 111  Lines: 4  Modified: 2025-08-11T22:17:17Z
SHA256: c7b2fc4ed68018e4a0db986be3b417059c287dc26f8c9a6cacc1c02184cfbc31   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export declare const aoiCoords: (cx: number, cy: number, r?: number) => {
    cx: number;
    cy: number;
}[];
```
===== FILE END =====


### apps/game-web/src/app/game/world/aoi.js

<a id="apps-game-web-src-app-game-world-aoi-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/aoi.js
URL: (not in git / no remote detected)
Bytes: 215  Lines: 7  Modified: 2025-08-11T22:17:17Z
SHA256: b546a4cea124f31bf27c95be7028894dfe01682cb861c878a3b209ab1adcf517   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export const aoiCoords = (cx, cy, r = 1) => {
    const out = [];
    for (let y = cy - r; y <= cy + r; y++)
        for (let x = cx - r; x <= cx + r; x++)
            out.push({ cx: x, cy: y });
    return out;
};
```
===== FILE END =====


### apps/game-web/src/app/game/world/aoi.ts

<a id="apps-game-web-src-app-game-world-aoi-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/aoi.ts
URL: (not in git / no remote detected)
Bytes: 205  Lines: 6  Modified: 2025-08-10T22:34:47Z
SHA256: 0385b0e58dc5013a1927fc11459fd2782a4e17d3fb99f081cc1c115a5475c9f8   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export const aoiCoords = (cx:number, cy:number, r=1) => {
  const out:{cx:number;cy:number}[] = [];
  for (let y=cy-r; y<=cy+r; y++) for (let x=cx-r; x<=cx+r; x++) out.push({cx:x,cy:y});
  return out;
};

```
===== FILE END =====


### apps/game-web/src/app/game/world/cache.d.ts

<a id="apps-game-web-src-app-game-world-cache-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/cache.d.ts
URL: (not in git / no remote detected)
Bytes: 454  Lines: 21  Modified: 2025-08-11T22:17:17Z
SHA256: 03d6a2a0f994c3535efc7e4aac022c9f39c8c4e05d93429c18a770422e5165d2   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type ClientChunk = {
    cx: number;
    cy: number;
    version: number;
    w: number;
    h: number;
    tiles: Uint8Array;
};
export declare class ChunkCache {
    private map;
    get(cx: number, cy: number): ClientChunk | undefined;
    has(cx: number, cy: number): boolean;
    setFromSnap(s: {
        cx: number;
        cy: number;
        version: number;
        w: number;
        h: number;
        tilesB64: string;
    }): void;
}
```
===== FILE END =====


### apps/game-web/src/app/game/world/cache.js

<a id="apps-game-web-src-app-game-world-cache-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/cache.js
URL: (not in git / no remote detected)
Bytes: 429  Lines: 12  Modified: 2025-08-11T22:17:17Z
SHA256: b6ca1000f86790194fa3359ca7ad04198c197bbe42993cb67f2d4a7acaec66ad   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { decodeTiles } from './decode';
const key = (cx, cy) => `${cx}:${cy}`;
export class ChunkCache {
    constructor() {
        this.map = new Map();
    }
    get(cx, cy) { return this.map.get(key(cx, cy)); }
    has(cx, cy) { return this.map.has(key(cx, cy)); }
    setFromSnap(s) {
        this.map.set(key(s.cx, s.cy), { cx: s.cx, cy: s.cy, version: s.version, w: s.w, h: s.h, tiles: decodeTiles(s.tilesB64) });
    }
}
```
===== FILE END =====


### apps/game-web/src/app/game/world/cache.ts

<a id="apps-game-web-src-app-game-world-cache-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/cache.ts
URL: (not in git / no remote detected)
Bytes: 641  Lines: 15  Modified: 2025-08-10T22:34:41Z
SHA256: aba8eae9d51c73ab4583658e57e43e938f956a8d035a5f84f77c42fa241e969c   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { decodeTiles } from './decode';
type Key = string;
const key = (cx:number, cy:number) => `${cx}:${cy}`;

export type ClientChunk = { cx:number; cy:number; version:number; w:number; h:number; tiles: Uint8Array };

export class ChunkCache {
  private map = new Map<Key, ClientChunk>();
  get(cx:number, cy:number) { return this.map.get(key(cx,cy)); }
  has(cx:number, cy:number) { return this.map.has(key(cx,cy)); }
  setFromSnap(s: {cx:number;cy:number;version:number;w:number;h:number;tilesB64:string}) {
    this.map.set(key(s.cx,s.cy), { cx:s.cx, cy:s.cy, version:s.version, w:s.w, h:s.h, tiles: decodeTiles(s.tilesB64) });
  }
}

```
===== FILE END =====


### apps/game-web/src/app/game/world/decode.d.ts

<a id="apps-game-web-src-app-game-world-decode-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/decode.d.ts
URL: (not in git / no remote detected)
Bytes: 61  Lines: 1  Modified: 2025-08-11T22:17:17Z
SHA256: 4986dd79854fa48f7355e3eedbe927616ac525a749cfdc61af344d643a85c776   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export declare const decodeTiles: (tilesB64: string) => any;
```
===== FILE END =====


### apps/game-web/src/app/game/world/decode.js

<a id="apps-game-web-src-app-game-world-decode-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/decode.js
URL: (not in git / no remote detected)
Bytes: 101  Lines: 2  Modified: 2025-08-11T23:27:15Z
SHA256: a0d53c8bfcd1e13ae3581185abb37a12ce2e3aa7cac811c57065f486ee7d94b6   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { b64ToU8 } from '@warboy/world';
export const decodeTiles = (tilesB64) => b64ToU8(tilesB64);
```
===== FILE END =====


### apps/game-web/src/app/game/world/decode.ts

<a id="apps-game-web-src-app-game-world-decode-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/decode.ts
URL: (not in git / no remote detected)
Bytes: 110  Lines: 3  Modified: 2025-08-11T23:27:15Z
SHA256: 2e5fe62b72fec0fcb5a56ef22062fc34826b76f4d7e1922da9358e8deb497f04   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { b64ToU8 } from '@warboy/world';
export const decodeTiles = (tilesB64: string) => b64ToU8(tilesB64);

```
===== FILE END =====


### apps/game-web/src/app/game/world/draw.d.ts

<a id="apps-game-web-src-app-game-world-draw-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/draw.d.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-11T22:17:17Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-web/src/app/game/world/draw.js

<a id="apps-game-web-src-app-game-world-draw-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/draw.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T22:17:17Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-web/src/app/game/world/draw.ts

<a id="apps-game-web-src-app-game-world-draw-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/draw.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T22:32:38Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-web/src/app/game/world/requests.d.ts

<a id="apps-game-web-src-app-game-world-requests-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/requests.d.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-11T22:17:17Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-web/src/app/game/world/requests.js

<a id="apps-game-web-src-app-game-world-requests-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/requests.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T22:17:17Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-web/src/app/game/world/requests.ts

<a id="apps-game-web-src-app-game-world-requests-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/world/requests.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T22:32:38Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-web/src/app/routes/Login.d.ts

<a id="apps-game-web-src-app-routes-login-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/routes/Login.d.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-11T22:17:17Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-web/src/app/routes/Login.js

<a id="apps-game-web-src-app-routes-login-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/routes/Login.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T22:17:17Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-web/src/app/routes/Login.tsx

<a id="apps-game-web-src-app-routes-login-tsx"></a>
===== FILE START =====
Path: apps/game-web/src/app/routes/Login.tsx
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: tsx   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```tsx
```
===== FILE END =====


### apps/game-web/src/app/routes/Play.d.ts

<a id="apps-game-web-src-app-routes-play-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/routes/Play.d.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-11T22:17:17Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/game-web/src/app/routes/Play.js

<a id="apps-game-web-src-app-routes-play-js"></a>
===== FILE START =====
Path: apps/game-web/src/app/routes/Play.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T22:17:17Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/game-web/src/app/routes/Play.tsx

<a id="apps-game-web-src-app-routes-play-tsx"></a>
===== FILE START =====
Path: apps/game-web/src/app/routes/Play.tsx
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: tsx   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```tsx
```
===== FILE END =====


### apps/game-web/src/app/ui/chat/chatHUD.ts

<a id="apps-game-web-src-app-ui-chat-chathud-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/ui/chat/chatHUD.ts
URL: (not in git / no remote detected)
Bytes: 1522  Lines: 47  Modified: 2025-08-12T00:57:27Z
SHA256: c769d3b5adf993071afe5dcbc3a2a4394cd3e13b9951253e5162931495152677   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/ui/chat/chatHud.ts
import { UIElement, Rect } from '../core';
import { ScrollList, TextInput, Button } from '../widgets';

export class ChatHud implements UIElement {
  private list: ScrollList;
  private input: TextInput;
  private sendBtn: Button;
  private children: UIElement[];

  constructor(
    private outer: Rect,
    private sendFn: (text: string) => void
  ) {
    const listRect: Rect = { x: outer.x, y: outer.y, w: outer.w, h: outer.h - 28 };
    const inputRect: Rect = { x: outer.x, y: outer.y + outer.h - 24, w: outer.w - 70, h: 24 };
    const btnRect: Rect = { x: outer.x + outer.w - 66, y: outer.y + outer.h - 24, w: 66, h: 24 };

    this.list = new ScrollList(listRect, { title: 'Chat' });
    this.input = new TextInput(inputRect, (text) => this.send(text), 'say something…');
    this.sendBtn = new Button(btnRect, 'Send', () => this.sendFromBtn());

    this.children = [this.list, this.input, this.sendBtn];
  }

  bounds() { return this.outer; }

  draw(ctx: CanvasRenderingContext2D) {
    for (const c of this.children) c.draw(ctx);
  }

  event(ev: any) {
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].event?.(ev)) return true;
    }
    return false;
  }

  addLine(line: string) { this.list.push(line); }

  private send(text: string) { this.sendFn(text); }
  private sendFromBtn() {
    // synthetic Enter: handled in TextInput already, but allow click send
    // no-op here; you could store last value if you want
  }
}

```
===== FILE END =====


### apps/game-web/src/app/ui/core.ts

<a id="apps-game-web-src-app-ui-core-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/ui/core.ts
URL: (not in git / no remote detected)
Bytes: 1133  Lines: 36  Modified: 2025-08-12T00:50:28Z
SHA256: ffd239328aff560abdfa1cc464a34140fd68644c8a3acef63972b2c39dd1d5c0   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/ui/core.ts
export type Point = { x: number; y: number };
export type Rect = { x: number; y: number; w: number; h: number };

export function hit(r: Rect, p: Point) {
  return p.x >= r.x && p.x <= r.x + r.w && p.y >= r.y && p.y <= r.y + r.h;
}

export type UIEvent =
  | { t: 'pointerDown'; p: Point; id: number }
  | { t: 'pointerMove'; p: Point; id: number }
  | { t: 'pointerUp'; p: Point; id: number }
  | { t: 'wheel'; dx: number; dy: number }
  | { t: 'keydown'; key: string }
  | { t: 'text'; text: string };

export interface UIElement {
  bounds(): Rect;
  draw(ctx: CanvasRenderingContext2D): void;
  event?(ev: UIEvent): boolean;  // return true if handled
  wantsKeyboard?: boolean;       // can receive text input
  setFocus?(focused: boolean): void;
}

export function drawPanel(ctx: CanvasRenderingContext2D, r: Rect, title?: string) {
  ctx.fillStyle = '#0b0b0b';
  ctx.fillRect(r.x, r.y, r.w, r.h);
  ctx.strokeStyle = '#333';
  ctx.strokeRect(r.x, r.y, r.w, r.h);
  if (title) {
    ctx.fillStyle = '#ddd';
    ctx.font = '12px system-ui';
    ctx.fillText(title, r.x + 8, r.y + 16);
  }
}

```
===== FILE END =====


### apps/game-web/src/app/ui/input/textCapture.ts

<a id="apps-game-web-src-app-ui-input-textcapture-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/ui/input/textCapture.ts
URL: (not in git / no remote detected)
Bytes: 1887  Lines: 77  Modified: 2025-08-13T03:59:15Z
SHA256: e94f7622db0f97fd8ac63011154c596a88a560ac08b7a3a1d20268a57653f4dc   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/ui/input/textCapture.ts
// Hidden textarea to capture keyboard/IME text and forward as UI events.

import type { UIEvent } from '../core';

export type TextCapture = {
  mount: (host: HTMLElement, dispatch: (ev: UIEvent) => boolean) => void;
  focus: () => void;
  blur: () => void;
  destroy: () => void;
};

export function createTextCapture(): TextCapture {
  let ta: HTMLTextAreaElement | null = null;
  let dispatchRef: ((ev: UIEvent) => boolean) | null = null;

  function mount(host: HTMLElement, dispatch: (ev: UIEvent) => boolean) {
    if (ta) return;
    dispatchRef = dispatch;

    ta = document.createElement('textarea');
    ta.setAttribute('aria-hidden', 'true');
    ta.autocapitalize = 'none';
    ta.autocomplete = 'off';
    ta.autocorrect = 'off';
    ta.spellcheck = false;

    Object.assign(ta.style, {
      position: 'absolute',
      left: '0px',
      top: '0px',
      width: '1px',
      height: '1px',
      opacity: '0',
      pointerEvents: 'none',
      resize: 'none',
      border: '0',
      padding: '0',
      outline: 'none',
      background: 'transparent',
      color: 'transparent',
      zIndex: '0',
    });

    ta.addEventListener('beforeinput', (e: InputEvent) => {
      if (!dispatchRef) return;
      if (typeof e.data === 'string' && e.data.length > 0) {
        const handled = dispatchRef({ t: 'text', text: e.data });
        if (handled) e.preventDefault();
      }
    });

    host.style.position ||= 'relative';
    host.appendChild(ta);
  }

  function focus() {
    ta?.focus();
    if (ta) {
      ta.value = '';
      ta.setSelectionRange(ta.value.length, ta.value.length);
    }
  }

  function blur() {
    ta?.blur();
  }

  function destroy() {
    if (ta && ta.parentNode) ta.parentNode.removeChild(ta);
    ta = null;
    dispatchRef = null;
  }

  return { mount, focus, blur, destroy };
}

```
===== FILE END =====


### apps/game-web/src/app/ui/manager.ts

<a id="apps-game-web-src-app-ui-manager-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/ui/manager.ts
URL: (not in git / no remote detected)
Bytes: 3376  Lines: 113  Modified: 2025-08-13T03:59:48Z
SHA256: 0e083d67472d06e993ad2851bbef06c7b946cf267bee66b5355eb8d1897206ec   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/ui/manager.ts
import { UIElement, UIEvent } from './core';
import type { TextCapture } from './input/textCapture';

function isPrintableKey(e: KeyboardEvent): string | null {
  if (e.ctrlKey || e.metaKey || e.altKey) return null;
  if (e.key.length === 1) return e.key;
  return null;
}

export class UIManager {
  private elements: UIElement[] = [];
  private focusEl: UIElement | null = null;
  private pointerTarget: UIElement | null = null;
  private capture: TextCapture | null = null;

  /** Mount hidden text capture (for IME/mobile). Call once after creation. */
  attachTextCapture(capture: TextCapture, hostEl: HTMLElement) {
    this.capture = capture;
    capture.mount(hostEl, (ev) => this.dispatch(ev));
  }

  add(el: UIElement) { this.elements.push(el); return el; }
  remove(el: UIElement) {
    this.elements = this.elements.filter(e => e !== el);
    if (this.focusEl === el) this.setFocus(null);
    if (this.pointerTarget === el) this.pointerTarget = null;
  }
  clear() {
    this.elements.length = 0;
    this.setFocus(null);
    this.pointerTarget = null;
  }

  draw(ctx: CanvasRenderingContext2D) {
    for (const el of this.elements) el.draw(ctx);
  }

  private setFocus(el: UIElement | null) {
    if (this.focusEl && this.focusEl.setFocus) this.focusEl.setFocus(false);
    this.focusEl = el;
    if (this.focusEl && this.focusEl.setFocus) this.focusEl.setFocus(true);

    // Sync hidden textarea focus state
    if (this.capture) {
      if (this.focusEl?.wantsKeyboard) this.capture.focus();
      else this.capture.blur();
    }
  }

  /** Fallback for printable keys / special keys if beforeinput didn’t fire. */
  handleKeyDown(e: KeyboardEvent): boolean {
    if (this.focusEl?.event?.({ t: 'keydown', key: e.key })) return true;
    const ch = isPrintableKey(e);
    if (ch && this.focusEl?.event?.({ t: 'text', text: ch })) return true;
    return false;
  }

  dispatch(ev: UIEvent): boolean {
    switch (ev.t) {
      case 'pointerDown': {
        for (let i = this.elements.length - 1; i >= 0; i--) {
          const el = this.elements[i];
          if (el.event?.(ev)) {
            this.pointerTarget = el;
            if (el.wantsKeyboard) this.setFocus(el);
            else this.setFocus(null);
            return true;
          }
        }
        this.pointerTarget = null;
        this.setFocus(null);
        return false;
      }

      case 'pointerMove':
      case 'pointerUp': {
        if (this.pointerTarget?.event?.(ev)) {
          if (ev.t === 'pointerUp') this.pointerTarget = null;
          return true;
        }
        for (let i = this.elements.length - 1; i >= 0; i--) {
          const el = this.elements[i];
          if (el !== this.pointerTarget && el.event?.(ev)) return true;
        }
        if (ev.t === 'pointerUp') this.pointerTarget = null;
        return false;
      }

      case 'wheel': {
        for (let i = this.elements.length - 1; i >= 0; i--) {
          if (this.elements[i].event?.(ev)) return true;
        }
        return false;
      }

      case 'keydown':
      case 'text': {
        if (this.focusEl && this.focusEl.event?.(ev)) return true;
        return false;
      }
    }
  }

  destroy() {
    this.capture?.destroy();
    this.capture = null;
    this.elements.length = 0;
    this.focusEl = null;
    this.pointerTarget = null;
  }
}

```
===== FILE END =====


### apps/game-web/src/app/ui/widgets.ts

<a id="apps-game-web-src-app-ui-widgets-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/ui/widgets.ts
URL: (not in git / no remote detected)
Bytes: 3664  Lines: 118  Modified: 2025-08-12T00:53:07Z
SHA256: ec9ede97e34fe5e602a955bca91278eb73ff7d5558dad305879d05e066e59d2f   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/ui/widgets.ts
import { Rect, UIElement, UIEvent, drawPanel, hit } from './core';

export class ScrollList implements UIElement {
  private log: string[] = [];
  private scroll = 0; // px from bottom (0 = stick to latest)
  private lineHeight = 14;
  private padding = 8;
  private title?: string;

  constructor(private r: Rect, opts?: { title?: string }) {
    this.title = opts?.title;
  }
  bounds() { return this.r; }

  push(line: string) {
    this.log.push(line);
    if (this.scroll === 0) {
      // stick to bottom
    } else {
      // keep current view relative to bottom growth
    }
  }

  draw(ctx: CanvasRenderingContext2D) {
    drawPanel(ctx, this.r, this.title);
    const { x, y, w, h } = this.r;

    ctx.save();
    ctx.beginPath();
    ctx.rect(x+1, y+1+18, w-2, h-2-18);
    ctx.clip();

    const maxLines = Math.floor((h - 2 - 18 - this.padding*2) / this.lineHeight);
    const start = Math.max(0, this.log.length - maxLines - Math.floor(this.scroll/this.lineHeight));
    const end = Math.min(this.log.length, start + maxLines);
    ctx.fillStyle = '#ddd';
    ctx.font = '12px monospace';
    for (let i = start; i < end; i++) {
      const ly = y + 18 + this.padding + (i - start + 1) * this.lineHeight;
      ctx.fillText(this.log[i], x + this.padding, ly);
    }
    ctx.restore();
  }

  event(ev: UIEvent) {
    if (ev.t === 'wheel' && hit(this.r, { x: 0, y: 0 })) {
      this.scroll = Math.max(0, this.scroll + ev.dy);
      return true;
    }
    return false;
  }
}

export class TextInput implements UIElement {
  wantsKeyboard = true;
  private focus = false;
  private cursorBlink = 0;
  private value = '';
  constructor(private r: Rect, private onSubmit: (text: string) => void, private placeholder='') {}
  bounds() { return this.r; }
  setFocus(f: boolean) { this.focus = f; this.cursorBlink = 0; }

  draw(ctx: CanvasRenderingContext2D) {
    const { x, y, w, h } = this.r;
    ctx.fillStyle = this.focus ? '#151515' : '#111';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = this.focus ? '#49f' : '#333';
    ctx.strokeRect(x, y, w, h);
    ctx.font = '12px system-ui';
    ctx.fillStyle = this.value ? '#ddd' : '#666';
    const text = this.value || this.placeholder;
    ctx.fillText(text, x + 8, y + h/2 + 4);
    if (this.focus && Math.floor(this.cursorBlink / 30) % 2 === 0) {
      const tw = ctx.measureText(this.value).width;
      ctx.fillRect(x + 8 + tw + 2, y + h/2 - 8, 1, 16);
    }
    this.cursorBlink++;
  }

  event(ev: UIEvent) {
    if (ev.t === 'pointerDown') {
      return hit(this.r, ev.p);
    }
    if (!this.focus) return false;
    if (ev.t === 'keydown') {
      if (ev.key === 'Backspace') { this.value = this.value.slice(0, -1); return true; }
      if (ev.key === 'Enter') { const msg = this.value.trim(); if (msg) this.onSubmit(msg); this.value=''; return true; }
      return false;
    }
    if (ev.t === 'text') {
      this.value += ev.text;
      return true;
    }
    return false;
  }
}

export class Button implements UIElement {
  constructor(private r: Rect, private label: string, private onClick: () => void) {}
  bounds() { return this.r; }
  draw(ctx: CanvasRenderingContext2D) {
    const { x, y, w, h } = this.r;
    ctx.fillStyle = '#222';
    ctx.fillRect(x, y, w, h);
    ctx.strokeStyle = '#555';
    ctx.strokeRect(x, y, w, h);
    ctx.fillStyle = '#ddd';
    ctx.font = '12px system-ui';
    const tw = ctx.measureText(this.label).width;
    ctx.fillText(this.label, x + (w - tw)/2, y + h/2 + 4);
  }
  event(ev: UIEvent) {
    if (ev.t === 'pointerDown' && hit(this.r, ev.p)) { this.onClick(); return true; }
    return false;
  }
}

```
===== FILE END =====


### apps/game-web/src/index.d.ts

<a id="apps-game-web-src-index-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/index.d.ts
URL: (not in git / no remote detected)
Bytes: 11  Lines: 1  Modified: 2025-08-11T22:17:17Z
SHA256: 8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export {};
```
===== FILE END =====


### apps/game-web/src/index.js

<a id="apps-game-web-src-index-js"></a>
===== FILE START =====
Path: apps/game-web/src/index.js
URL: (not in git / no remote detected)
Bytes: 168  Lines: 4  Modified: 2025-08-11T22:17:17Z
SHA256: 8c53abe67524892870f49ce9bc751615a8e72388db8ed5f7aa56de26650f8c4b   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
createRoot(document.getElementById('root')).render(<App />);
```
===== FILE END =====


### apps/game-web/src/index.tsx

<a id="apps-game-web-src-index-tsx"></a>
===== FILE START =====
Path: apps/game-web/src/index.tsx
URL: (not in git / no remote detected)
Bytes: 169  Lines: 4  Modified: 2025-08-09T23:44:04Z
SHA256: df9e247adbc205df2e197160f68e7a0826a8cf0c5fdb74eed323f36a666ee3c1   Language: tsx   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```tsx
import React from 'react';
import { createRoot } from 'react-dom/client';
import { App } from './app/App';
createRoot(document.getElementById('root')!).render(<App />);
```
===== FILE END =====


### apps/game-web/src/vite-env.d.ts

<a id="apps-game-web-src-vite-env-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/vite-env.d.ts
URL: (not in git / no remote detected)
Bytes: 71  Lines: 5  Modified: 2025-08-11T11:15:54Z
SHA256: 425f8e173432a5d7ab4efd416e50a51c6624e68ae5d54f2889d6d43fafcc8eed   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
declare module '*.png' {
  const url: string;
  export default url;
}

```
===== FILE END =====


### apps/game-web/tsconfig.json

<a id="apps-game-web-tsconfig-json"></a>
===== FILE START =====
Path: apps/game-web/tsconfig.json
URL: (not in git / no remote detected)
Bytes: 347  Lines: 16  Modified: 2025-08-11T23:03:28Z
SHA256: c4259d7d2ac4efc6967d99c16f5004b21ad8afc04bd065bda8b61de03cd40d70   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "jsx": "react-jsx",
    "rootDir": "src",
    "outDir": "dist",
    "composite": true,
    "module": "ESNext"
  },
  "include": ["src"],
  "references": [
    { "path": "../../packages/world" },
    { "path": "../../packages/overlays" },
    { "path": "../../packages/chat" }
  ]
}
```
===== FILE END =====


### apps/game-web/tsconfig.tsbuildinfo

<a id="apps-game-web-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: apps/game-web/tsconfig.tsbuildinfo
URL: (not in git / no remote detected)
Bytes: 35948  Lines: 0  Modified: 2025-08-11T22:25:00Z
SHA256: 7f69f02c63d8149df954dd6b29db824178859127d7356f0293b8f682e698d728   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### apps/game-web/vite.config.js

<a id="apps-game-web-vite-config-js"></a>
===== FILE START =====
Path: apps/game-web/vite.config.js
URL: (not in git / no remote detected)
Bytes: 257  Lines: 11  Modified: 2025-08-12T00:01:49Z
SHA256: c6addbdf18c954e4b82a75e179a902a68dcef57fcd9d490849595e85403b7253   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
export default defineConfig({
    plugins: [react()],
    server: { host: true, port: 5173 },
    resolve: {
        alias: {
        },
    },
});
```
===== FILE END =====


### apps/game-web/vite.config.ts

<a id="apps-game-web-vite-config-ts"></a>
===== FILE START =====
Path: apps/game-web/vite.config.ts
URL: (not in git / no remote detected)
Bytes: 242  Lines: 12  Modified: 2025-08-12T00:01:49Z
SHA256: 4d14d53bc6eec5f970f0c06f6d00a4fa55d49f39cb686d060524507dd1c830e9   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
  server: { host: true, port: 5173 },
  resolve: {
    alias: {
    },
  },
});
```
===== FILE END =====


### apps/towns-bot/src/auth/jwt.js

<a id="apps-towns-bot-src-auth-jwt-js"></a>
===== FILE START =====
Path: apps/towns-bot/src/auth/jwt.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/towns-bot/src/auth/jwt.ts

<a id="apps-towns-bot-src-auth-jwt-ts"></a>
===== FILE START =====
Path: apps/towns-bot/src/auth/jwt.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/towns-bot/src/bot.js

<a id="apps-towns-bot-src-bot-js"></a>
===== FILE START =====
Path: apps/towns-bot/src/bot.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/towns-bot/src/bot.ts

<a id="apps-towns-bot-src-bot-ts"></a>
===== FILE START =====
Path: apps/towns-bot/src/bot.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/towns-bot/src/handlers/whoami.js

<a id="apps-towns-bot-src-handlers-whoami-js"></a>
===== FILE START =====
Path: apps/towns-bot/src/handlers/whoami.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/towns-bot/src/handlers/whoami.ts

<a id="apps-towns-bot-src-handlers-whoami-ts"></a>
===== FILE START =====
Path: apps/towns-bot/src/handlers/whoami.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### apps/towns-bot/src/handlers/zoneEvents.js

<a id="apps-towns-bot-src-handlers-zoneevents-js"></a>
===== FILE START =====
Path: apps/towns-bot/src/handlers/zoneEvents.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### apps/towns-bot/src/handlers/zoneEvents.ts

<a id="apps-towns-bot-src-handlers-zoneevents-ts"></a>
===== FILE START =====
Path: apps/towns-bot/src/handlers/zoneEvents.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### infra/db/schema.sql

<a id="infra-db-schema-sql"></a>
===== FILE START =====
Path: infra/db/schema.sql
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### infra/db/seed.sql

<a id="infra-db-seed-sql"></a>
===== FILE START =====
Path: infra/db/seed.sql
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### infra/docker/Dockerfile

<a id="infra-docker-dockerfile"></a>
===== FILE START =====
Path: infra/docker/Dockerfile
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: dockerfile   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```dockerfile
```
===== FILE END =====


### infra/k8s/deployment.yaml

<a id="infra-k8s-deployment-yaml"></a>
===== FILE START =====
Path: infra/k8s/deployment.yaml
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: yaml   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```yaml
```
===== FILE END =====


### package-lock.json

<a id="package-lock-json"></a>
===== FILE START =====
Path: package-lock.json
URL: (not in git / no remote detected)
Bytes: 73986  Lines: 2237  Modified: 2025-08-11T23:44:57Z
SHA256: 906a769fdd72cfdae1906a9243ae2ad501bdc3ebc4e3f4ba18eb036dec6385fa   Language: json   Role: source
Summary: Truncated preview; file exceeds 999 lines.

-----8<----- CONTENT -----8<-----
```json
{
  "name": "warboy",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "warboy",
      "workspaces": [
        "apps/*",
        "packages/*"
      ],
      "dependencies": {
        "react": "^19.1.1",
        "react-dom": "^19.1.1"
      },
      "devDependencies": {
        "@types/react": "^19.1.9",
        "@types/react-dom": "^19.1.7",
        "@vitejs/plugin-react": "^4.7.0",
        "concurrently": "^9.2.0",
        "typescript": "^5.9.2",
        "vite": "^6.3.5"
      }
    },
    "apps/admin-api": {
      "name": "@warboy/admin-api",
      "version": "0.0.0"
    },
    "apps/admin-web": {
      "name": "@warboy/admin-web",
      "version": "0.0.0"
    },
    "apps/game-server": {
      "dependencies": {
        "@warboy/chat": "file:../../packages/chat",
        "@warboy/overlays": "file:../../packages/overlays",
        "@warboy/world": "file:../../packages/world",
        "nanoid": "^5.1.5",
        "ws": "^8.18.3"
      },
      "devDependencies": {
        "@types/ws": "^8.18.1",
        "tsx": "^4.20.3"
      }
    },
    "apps/game-server/node_modules/nanoid": {
      "version": "5.1.5",
      "funding": [
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "bin": {
        "nanoid": "bin/nanoid.js"
      },
      "engines": {
        "node": "^18 || >=20"
      }
    },
    "apps/game-web": {
      "dependencies": {
        "@warboy/chat": "file:../../packages/chat",
        "@warboy/overlays": "file:../../packages/overlays",
        "@warboy/world": "file:../../packages/world",
        "react": "^19.1.1",
        "react-dom": "^19.1.1"
      },
      "devDependencies": {
        "@types/react": "^19.1.9",
        "@types/react-dom": "^19.1.7",
        "@vitejs/plugin-react": "^4.7.0",
        "vite": "^6.3.5"
      }
    },
    "node_modules/@ampproject/remapping": {
      "version": "2.3.0",
      "resolved": "https://registry.npmjs.org/@ampproject/remapping/-/remapping-2.3.0.tgz",
      "integrity": "sha512-30iZtAPgz+LTIYoeivqYo853f02jBYSd5uGnGpkFV0M3xOt9aN73erkgYAmZU43x4VfqcnLxW9Kpg3R5LC4YYw==",
      "dev": true,
      "license": "Apache-2.0",
      "dependencies": {
        "@jridgewell/gen-mapping": "^0.3.5",
        "@jridgewell/trace-mapping": "^0.3.24"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/code-frame": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/code-frame/-/code-frame-7.27.1.tgz",
      "integrity": "sha512-cjQ7ZlQ0Mv3b47hABuTevyTuYN4i+loJKGeV9flcCgIK37cCXRh+L1bd3iBHlynerhQ7BhCkn2BPbQUL+rGqFg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-validator-identifier": "^7.27.1",
        "js-tokens": "^4.0.0",
        "picocolors": "^1.1.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/compat-data": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/compat-data/-/compat-data-7.28.0.tgz",
      "integrity": "sha512-60X7qkglvrap8mn1lh2ebxXdZYtUcpd7gsmy9kLaBJ4i/WdY8PqTSdxyA8qraikqKQK5C1KRBKXqznrVapyNaw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/core": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.0.tgz",
      "integrity": "sha512-UlLAnTPrFdNGoFtbSXwcGFQBtQZJCNjaN6hQNP3UPvuNXT1i82N26KL3dZeIpNalWywr9IuQuncaAfUaS1g6sQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.0",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.27.3",
        "@babel/helpers": "^7.27.6",
        "@babel/parser": "^7.28.0",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.0",
        "@babel/types": "^7.28.0",
        "convert-source-map": "^2.0.0",
        "debug": "^4.1.0",
        "gensync": "^1.0.0-beta.2",
        "json5": "^2.2.3",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "funding": {
        "type": "opencollective",
        "url": "https://opencollective.com/babel"
      }
    },
    "node_modules/@babel/generator": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.0.tgz",
      "integrity": "sha512-lJjzvrbEeWrhB4P3QBsH7tey117PjLZnDbLiQEKjQ/fNJTjuq4HSqgFA+UNSwZT8D7dxxbnuSBMsa1lrWzKlQg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.0",
        "@babel/types": "^7.28.0",
        "@jridgewell/gen-mapping": "^0.3.12",
        "@jridgewell/trace-mapping": "^0.3.28",
        "jsesc": "^3.0.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-compilation-targets": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/helper-compilation-targets/-/helper-compilation-targets-7.27.2.tgz",
      "integrity": "sha512-2+1thGUUWWjLTYTHZWK1n8Yga0ijBz1XAhUXcKy81rd5g6yh7hGqMp45v7cadSbEHc9G3OTv45SyneRN3ps4DQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/compat-data": "^7.27.2",
        "@babel/helper-validator-option": "^7.27.1",
        "browserslist": "^4.24.0",
        "lru-cache": "^5.1.1",
        "semver": "^6.3.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-globals": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/helper-globals/-/helper-globals-7.28.0.tgz",
      "integrity": "sha512-+W6cISkXFa1jXsDEdYA8HeevQT/FULhxzR99pxphltZcVaugps53THCeiWA8SguxxpSp3gKPiuYfSWopkLQ4hw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-imports": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-imports/-/helper-module-imports-7.27.1.tgz",
      "integrity": "sha512-0gSFWUPNXNopqtIPQvlD5WgXYI5GY2kP2cCvoT8kczjbfcfuIljTbcWrulD1CIPIX2gt1wghbDy08yE1p+/r3w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/traverse": "^7.27.1",
        "@babel/types": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-module-transforms": {
      "version": "7.27.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.27.3.tgz",
      "integrity": "sha512-dSOvYwvyLsWBeIRyOeHXp5vPj5l1I011r52FM1+r1jCERv+aFXYk4whgQccYEGYxK2H3ZAIA8nuPkQ0HaUo3qg==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.27.3"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0"
      }
    },
    "node_modules/@babel/helper-plugin-utils": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-plugin-utils/-/helper-plugin-utils-7.27.1.tgz",
      "integrity": "sha512-1gn1Up5YXka3YYAHGKpbideQ5Yjf1tDa9qYcgysz+cNCXukyLl6DjPXhD3VRwSb8c0J9tA4b2+rHEZtc6R0tlw==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-string-parser": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-string-parser/-/helper-string-parser-7.27.1.tgz",
      "integrity": "sha512-qMlSxKbpRlAridDExk92nSobyDdpPijUq2DW6oDnUqd0iOGxmQjyqhMIihI9+zv4LPyZdRje2cavWPbCbWm3eA==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-identifier": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-identifier/-/helper-validator-identifier-7.27.1.tgz",
      "integrity": "sha512-D2hP9eA+Sqx1kBZgzxZh0y1trbuU+JoDkiEwqhQ36nodYqJwyEIhPSdMNd7lOm/4io72luTPWH20Yda0xOuUow==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helper-validator-option": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/helper-validator-option/-/helper-validator-option-7.27.1.tgz",
      "integrity": "sha512-YvjJow9FxbhFFKDSuFnVCe2WxXk1zWc22fFePVNEaWJEu8IrZVlda6N0uHwzZrUM1il7NC9Mlp4MaJYbYd9JSg==",
      "dev": true,
      "license": "MIT",
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/helpers": {
      "version": "7.28.2",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.2.tgz",
      "integrity": "sha512-/V9771t+EgXz62aCcyofnQhGM8DQACbRhvzKFsXKC9QM+5MadF8ZmIm0crDMaz3+o0h0zXfJnd4EhbYbxsrcFw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/template": "^7.27.2",
        "@babel/types": "^7.28.2"
      },
      "engines": {
        "node": ">=6.9.0"
      }
    },
    "node_modules/@babel/parser": {
      "version": "7.28.0",
      "resolved": "https://registry.npmjs.org/@babel/parser/-/parser-7.28.0.tgz",
      "integrity": "sha512-jVZGvOxOuNSsuQuLRTh13nU0AogFlw32w/MT+LV6D3sP5WdbW61E77RnkbaO2dUvmPAYrBDJXGn5gGS6tH4j8g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/types": "^7.28.0"
      },
      "bin": {
        "parser": "bin/babel-parser.js"
      },
      "engines": {
        "node": ">=6.0.0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-self": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-self/-/plugin-transform-react-jsx-self-7.27.1.tgz",
      "integrity": "sha512-6UzkCs+ejGdZ5mFFC/OCUrv028ab2fp1znZmCZjAOBKiBK2jXD1O+BPSfX8X2qjJ75fZBMSnQn3Rq2mrBJK2mw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/plugin-transform-react-jsx-source": {
      "version": "7.27.1",
      "resolved": "https://registry.npmjs.org/@babel/plugin-transform-react-jsx-source/-/plugin-transform-react-jsx-source-7.27.1.tgz",
      "integrity": "sha512-zbwoTsBruTeKB9hSq73ha66iFeJHuaFkUbwvqElnygoNbj/jHRsSeokowZFN3CZ64IvEqcmmkVe89OPXc7ldAw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-plugin-utils": "^7.27.1"
      },
      "engines": {
        "node": ">=6.9.0"
      },
      "peerDependencies": {
        "@babel/core": "^7.0.0-0"
      }
    },
    "node_modules/@babel/template": {
      "version": "7.27.2",
      "resolved": "https://registry.npmjs.org/@babel/template/-/template-7.27.2.tgz",
      "integrity": "sha512-LPDZ85aEJyYSd18/DkjNh4/y1ntkE5KwUHWTiqgRxruuZL2F1yuHligVHLvcHY2vMHXttKFpJn6LwfI7cw7ODw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/code-frame": "^7.27.1",
        "@babel/parser": "^7.27.2",

…
# [omitted middle: 1571 lines]
…

      "license": "BSD-3-Clause",
      "engines": {
        "node": ">=0.10.0"
      }
    },
    "node_modules/string-width": {
      "version": "4.2.3",
      "resolved": "https://registry.npmjs.org/string-width/-/string-width-4.2.3.tgz",
      "integrity": "sha512-wKyQRQpjJ0sIp62ErSZdGsjMJWsap5oRNihHhu6G7JVO/9jIB6UyevL+tXuOqrng8j/cxKTWyWUwvSTriiZz/g==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "emoji-regex": "^8.0.0",
        "is-fullwidth-code-point": "^3.0.0",
        "strip-ansi": "^6.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/strip-ansi": {
      "version": "6.0.1",
      "resolved": "https://registry.npmjs.org/strip-ansi/-/strip-ansi-6.0.1.tgz",
      "integrity": "sha512-Y38VPSHcqkFrCpFnQ9vuSXmquuv5oXOKpGeT6aGrr3o3Gc9AlVa6JBfUSOCnbxGGZF+/0ooI7KrPuUSztUdU5A==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-regex": "^5.0.1"
      },
      "engines": {
        "node": ">=8"
      }
    },
    "node_modules/supports-color": {
      "version": "8.1.1",
      "resolved": "https://registry.npmjs.org/supports-color/-/supports-color-8.1.1.tgz",
      "integrity": "sha512-MpUEN2OodtUzxvKQl72cUF7RQ5EiHsGvSsVG0ia9c5RbWGL2CI4C7EpPS8UTBIplnlzZiNuV56w+FuNxy3ty2Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "has-flag": "^4.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/supports-color?sponsor=1"
      }
    },
    "node_modules/tinyglobby": {
      "version": "0.2.14",
      "resolved": "https://registry.npmjs.org/tinyglobby/-/tinyglobby-0.2.14.tgz",
      "integrity": "sha512-tX5e7OM1HnYr2+a2C/4V0htOcSQcoSTH9KgJnVvNm5zm/cyEWKJ7j7YutsH9CxMdtOkkLFy2AHrMci9IM8IPZQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "fdir": "^6.4.4",
        "picomatch": "^4.0.2"
      },
      "engines": {
        "node": ">=12.0.0"
      },
      "funding": {
        "url": "https://github.com/sponsors/SuperchupuDev"
      }
    },
    "node_modules/tree-kill": {
      "version": "1.2.2",
      "resolved": "https://registry.npmjs.org/tree-kill/-/tree-kill-1.2.2.tgz",
      "integrity": "sha512-L0Orpi8qGpRG//Nd+H90vFB+3iHnue1zSSGmNOOCh1GLJ7rUKVwV2HvijphGQS2UmhUZewS9VgvxYIdgr+fG1A==",
      "dev": true,
      "license": "MIT",
      "bin": {
        "tree-kill": "cli.js"
      }
    },
    "node_modules/tslib": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/tslib/-/tslib-2.8.1.tgz",
      "integrity": "sha512-oJFu94HQb+KVduSUQL7wnpmqnfmLsOA/nAh6b6EH0wCEoK0/mPeXU6c3wKDV83MkOuHPRHtSXKKU99IBazS/2w==",
      "dev": true,
      "license": "0BSD"
    },
    "node_modules/tsx": {
      "version": "4.20.3",
      "resolved": "https://registry.npmjs.org/tsx/-/tsx-4.20.3.tgz",
      "integrity": "sha512-qjbnuR9Tr+FJOMBqJCW5ehvIo/buZq7vH7qD7JziU98h6l3qGy0a/yPFjwO+y0/T7GFpNgNAvEcPPVfyT8rrPQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "~0.25.0",
        "get-tsconfig": "^4.7.5"
      },
      "bin": {
        "tsx": "dist/cli.mjs"
      },
      "engines": {
        "node": ">=18.0.0"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      }
    },
    "node_modules/typescript": {
      "version": "5.9.2",
      "resolved": "https://registry.npmjs.org/typescript/-/typescript-5.9.2.tgz",
      "integrity": "sha512-CWBzXQrc/qOkhidw1OzBTQuYRbfyxDXJMVJ1XNwUHGROVmuaeiEm3OslpZ1RV96d7SKKjZKrSJu3+t/xlw3R9A==",
      "dev": true,
      "license": "Apache-2.0",
      "bin": {
        "tsc": "bin/tsc",
        "tsserver": "bin/tsserver"
      },
      "engines": {
        "node": ">=14.17"
      }
    },
    "node_modules/undici-types": {
      "version": "7.10.0",
      "resolved": "https://registry.npmjs.org/undici-types/-/undici-types-7.10.0.tgz",
      "integrity": "sha512-t5Fy/nfn+14LuOc2KNYg75vZqClpAiqscVvMygNnlsHBFpSXdJaYtXMcdNLpl/Qvc3P2cB3s6lOV51nqsFq4ag==",
      "dev": true,
      "license": "MIT"
    },
    "node_modules/update-browserslist-db": {
      "version": "1.1.3",
      "resolved": "https://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.1.3.tgz",
      "integrity": "sha512-UxhIZQ+QInVdunkDAaiazvvT/+fXL5Osr0JZlJulepYu6Jd7qJtDZjlur0emRlT71EN3ScPoE7gvsuIKKNavKw==",
      "dev": true,
      "funding": [
        {
          "type": "opencollective",
          "url": "https://opencollective.com/browserslist"
        },
        {
          "type": "tidelift",
          "url": "https://tidelift.com/funding/github/npm/browserslist"
        },
        {
          "type": "github",
          "url": "https://github.com/sponsors/ai"
        }
      ],
      "license": "MIT",
      "dependencies": {
        "escalade": "^3.2.0",
        "picocolors": "^1.1.1"
      },
      "bin": {
        "update-browserslist-db": "cli.js"
      },
      "peerDependencies": {
        "browserslist": ">= 4.21.0"
      }
    },
    "node_modules/vite": {
      "version": "6.3.5",
      "resolved": "https://registry.npmjs.org/vite/-/vite-6.3.5.tgz",
      "integrity": "sha512-cZn6NDFE7wdTpINgs++ZJ4N49W2vRp8LCKrn3Ob1kYNtOo21vfDoaV5GzBfLU4MovSAB8uNRm4jgzVQZ+mBzPQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "esbuild": "^0.25.0",
        "fdir": "^6.4.4",
        "picomatch": "^4.0.2",
        "postcss": "^8.5.3",
        "rollup": "^4.34.9",
        "tinyglobby": "^0.2.13"
      },
      "bin": {
        "vite": "bin/vite.js"
      },
      "engines": {
        "node": "^18.0.0 || ^20.0.0 || >=22.0.0"
      },
      "funding": {
        "url": "https://github.com/vitejs/vite?sponsor=1"
      },
      "optionalDependencies": {
        "fsevents": "~2.3.3"
      },
      "peerDependencies": {
        "@types/node": "^18.0.0 || ^20.0.0 || >=22.0.0",
        "jiti": ">=1.21.0",
        "less": "*",
        "lightningcss": "^1.21.0",
        "sass": "*",
        "sass-embedded": "*",
        "stylus": "*",
        "sugarss": "*",
        "terser": "^5.16.0",
        "tsx": "^4.8.1",
        "yaml": "^2.4.2"
      },
      "peerDependenciesMeta": {
        "@types/node": {
          "optional": true
        },
        "jiti": {
          "optional": true
        },
        "less": {
          "optional": true
        },
        "lightningcss": {
          "optional": true
        },
        "sass": {
          "optional": true
        },
        "sass-embedded": {
          "optional": true
        },
        "stylus": {
          "optional": true
        },
        "sugarss": {
          "optional": true
        },
        "terser": {
          "optional": true
        },
        "tsx": {
          "optional": true
        },
        "yaml": {
          "optional": true
        }
      }
    },
    "node_modules/wrap-ansi": {
      "version": "7.0.0",
      "resolved": "https://registry.npmjs.org/wrap-ansi/-/wrap-ansi-7.0.0.tgz",
      "integrity": "sha512-YVGIj2kamLSTxw6NsZjoBxfSwsn0ycdesmc4p+Q21c5zPuZ1pl+NfxVdxPtdHvmNVOQ6XSYG4AUtyt/Fi7D16Q==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "ansi-styles": "^4.0.0",
        "string-width": "^4.1.0",
        "strip-ansi": "^6.0.0"
      },
      "engines": {
        "node": ">=10"
      },
      "funding": {
        "url": "https://github.com/chalk/wrap-ansi?sponsor=1"
      }
    },
    "node_modules/ws": {
      "version": "8.18.3",
      "resolved": "https://registry.npmjs.org/ws/-/ws-8.18.3.tgz",
      "integrity": "sha512-PEIGCY5tSlUt50cqyMXfCzX+oOPqN0vuGqWzbcJ2xvnkzkq46oOpz7dQaTDBdfICb4N14+GARUDw2XV2N4tvzg==",
      "license": "MIT",
      "engines": {
        "node": ">=10.0.0"
      },
      "peerDependencies": {
        "bufferutil": "^4.0.1",
        "utf-8-validate": ">=5.0.2"
      },
      "peerDependenciesMeta": {
        "bufferutil": {
          "optional": true
        },
        "utf-8-validate": {
          "optional": true
        }
      }
    },
    "node_modules/y18n": {
      "version": "5.0.8",
      "resolved": "https://registry.npmjs.org/y18n/-/y18n-5.0.8.tgz",
      "integrity": "sha512-0pfFzegeDWJHJIAmTLRP2DwHjdF5s7jo9tuztdQxAhINCdvS+3nGINqPd00AphqJR/0LhANUS6/+7SCb98YOfA==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=10"
      }
    },
    "node_modules/yallist": {
      "version": "3.1.1",
      "resolved": "https://registry.npmjs.org/yallist/-/yallist-3.1.1.tgz",
      "integrity": "sha512-a4UGQaWPH59mOXUYnAG2ewncQS4i4F43Tv3JoAM+s2VDAmS9NsK8GpDMLrCHPksFT7h3K6TOoUNn2pb7RoXx4g==",
      "dev": true,
      "license": "ISC"
    },
    "node_modules/yargs": {
      "version": "17.7.2",
      "resolved": "https://registry.npmjs.org/yargs/-/yargs-17.7.2.tgz",
      "integrity": "sha512-7dSzzRQ++CKnNI/krKnYRV7JKKPUXMEh61soaHKg9mrWEhzFWhFnxPxGl+69cD1Ou63C13NUPCnmIcrvqCuM6w==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "cliui": "^8.0.1",
        "escalade": "^3.1.1",
        "get-caller-file": "^2.0.5",
        "require-directory": "^2.1.1",
        "string-width": "^4.2.3",
        "y18n": "^5.0.5",
        "yargs-parser": "^21.1.1"
      },
      "engines": {
        "node": ">=12"
      }
    },
    "node_modules/yargs-parser": {
      "version": "21.1.1",
      "resolved": "https://registry.npmjs.org/yargs-parser/-/yargs-parser-21.1.1.tgz",
      "integrity": "sha512-tVpsJW7DdjecAiFpbIB1e3qxIQsE6NoPc5/eTdrbbIC4h0LVsWhnoa3g+m2HclBIujHzsxZ4VJVA+GUuc2/LBw==",
      "dev": true,
      "license": "ISC",
      "engines": {
        "node": ">=12"
      }
    },
    "packages/chat": {
      "name": "@warboy/chat",
      "version": "0.0.0"
    },
    "packages/overlays": {
      "name": "@warboy/overlays",
      "version": "0.0.0"
    },
    "packages/trolls": {
      "name": "@warboy/trolls",
      "version": "0.0.0"
    },
    "packages/world": {
      "name": "@warboy/world",
      "version": "0.0.0"
    }
  }
}
```
===== FILE END =====


### package.json

<a id="package-json"></a>
===== FILE START =====
Path: package.json
URL: (not in git / no remote detected)
Bytes: 592  Lines: 24  Modified: 2025-08-09T23:47:03Z
SHA256: 85868392182e0f9c516879158af5bb8b107af59868b01b9e27ffe8ca94e39fe4   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "warboy",
  "private": true,
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev:server": "npm --workspace apps/game-server run dev",
    "dev:web": "npm --workspace apps/game-web run dev",
    "dev": "concurrently -k \"npm run dev:server\" \"npm run dev:web\""
  },
  "devDependencies": {
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^4.7.0",
    "concurrently": "^9.2.0",
    "typescript": "^5.9.2",
    "vite": "^6.3.5"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  }
}```
===== FILE END =====


### packages/assets/src/atlas.js

<a id="packages-assets-src-atlas-js"></a>
===== FILE START =====
Path: packages/assets/src/atlas.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/assets/src/atlas.ts

<a id="packages-assets-src-atlas-ts"></a>
===== FILE START =====
Path: packages/assets/src/atlas.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/assets/src/licensing.md

<a id="packages-assets-src-licensing-md"></a>
===== FILE START =====
Path: packages/assets/src/licensing.md
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
```
===== FILE END =====


### packages/assets/src/tiles.js

<a id="packages-assets-src-tiles-js"></a>
===== FILE START =====
Path: packages/assets/src/tiles.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/assets/src/tiles.ts

<a id="packages-assets-src-tiles-ts"></a>
===== FILE START =====
Path: packages/assets/src/tiles.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/chat/package.json

<a id="packages-chat-package-json"></a>
===== FILE START =====
Path: packages/chat/package.json
URL: (not in git / no remote detected)
Bytes: 263  Lines: 10  Modified: 2025-08-11T22:33:37Z
SHA256: e02692ad307af5748a3d103eb467ca4b2a61a172a78ec8fa2bf107541a2aeaa3   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/chat",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "exports": { ".": "./dist/index.js", "./package.json": "./package.json" },
  "types": "./dist/index.d.ts",
  "files": ["dist", "src"],
  "scripts": { "build": "tsc -b" }
}
```
===== FILE END =====


### packages/chat/src/client.js

<a id="packages-chat-src-client-js"></a>
===== FILE START =====
Path: packages/chat/src/client.js
URL: (not in git / no remote detected)
Bytes: 623  Lines: 19  Modified: 2025-08-11T21:04:16Z
SHA256: 1938528fc81cf477b41e66429cd4acdc37c946eecf24ab49e284e3f4e46fed5a   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export class ChatClient {
    constructor(opts) {
        this.listeners = new Set();
        this.sendRaw = opts.send;
        this.room = opts.defaultRoom ?? "global";
    }
    setRoom(room) { this.room = room; }
    onMessage(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
    handleIncoming(frame) {
        if (frame?.t === "chat/recv" && frame.msg) {
            for (const l of this.listeners)
                l(frame.msg);
        }
    }
    send(text, room = this.room) {
        const payload = { t: "chat/send", room, text: text.slice(0, 500) };
        this.sendRaw(payload);
    }
}
```
===== FILE END =====


### packages/chat/src/client.ts

<a id="packages-chat-src-client-ts"></a>
===== FILE START =====
Path: packages/chat/src/client.ts
URL: (not in git / no remote detected)
Bytes: 833  Lines: 30  Modified: 2025-08-11T20:39:51Z
SHA256: 9fdfc7d435fa6381f37b72c6a1e31cce3801bc64cdbb5f538639cbf4fa948be9   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { ChatMsg, C2S_ChatSend } from "./types.js";

type Listener = (m: ChatMsg) => void;

export class ChatClient {
  private sendRaw: (data: any) => void;
  private listeners = new Set<Listener>();
  private room: string;

  constructor(opts: { send: (data: any) => void; defaultRoom?: string }) {
    this.sendRaw = opts.send;
    this.room = opts.defaultRoom ?? "global";
  }

  setRoom(room: string) { this.room = room; }

  onMessage(fn: Listener) { this.listeners.add(fn); return () => this.listeners.delete(fn); }

  handleIncoming(frame: any) {
    if (frame?.t === "chat/recv" && frame.msg) {
      for (const l of this.listeners) l(frame.msg);
    }
  }

  send(text: string, room = this.room) {
    const payload: C2S_ChatSend = { t: "chat/send", room, text: text.slice(0, 500) };
    this.sendRaw(payload);
  }
}

```
===== FILE END =====


### packages/chat/src/index.js

<a id="packages-chat-src-index-js"></a>
===== FILE START =====
Path: packages/chat/src/index.js
URL: (not in git / no remote detected)
Bytes: 57  Lines: 2  Modified: 2025-08-11T21:04:16Z
SHA256: fc0e51d8adfcc0fac62bc6323169bab64e1f99bbfa5e9350ea94efb0c296edac   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export * from "./types.js";
export * from "./client.js";
```
===== FILE END =====


### packages/chat/src/index.ts

<a id="packages-chat-src-index-ts"></a>
===== FILE START =====
Path: packages/chat/src/index.ts
URL: (not in git / no remote detected)
Bytes: 58  Lines: 3  Modified: 2025-08-11T20:40:39Z
SHA256: 690a0109cbfbfb031b11fb9d13e3d2edffec52fc970233d52af77b33c076e622   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export * from "./types.js";
export * from "./client.js";

```
===== FILE END =====


### packages/chat/src/types.js

<a id="packages-chat-src-types-js"></a>
===== FILE START =====
Path: packages/chat/src/types.js
URL: (not in git / no remote detected)
Bytes: 114  Lines: 3  Modified: 2025-08-11T21:04:16Z
SHA256: 9b09efc4bac1b8f541f5fb3930b7bf2b513cee15b749982e5db3fbeadafc0f42   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export function isChatRecv(f) {
    return f && f.t === "chat/recv" && f.msg && typeof f.msg.text === "string";
}
```
===== FILE END =====


### packages/chat/src/types.ts

<a id="packages-chat-src-types-ts"></a>
===== FILE START =====
Path: packages/chat/src/types.ts
URL: (not in git / no remote detected)
Bytes: 505  Lines: 16  Modified: 2025-08-11T20:39:15Z
SHA256: 473deed0c5ffb528405b7031fbcc775d1b4202ea223a810a6d1f0b431fa00887   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type ChatMsg = {
  id: string;
  room: string; // "global" | "zone:Z" | "party:P" etc.
  from: { id: string; name: string };
  text: string;
  ts: number; // epoch ms
};

export type C2S_ChatSend = { t: "chat/send"; room: string; text: string };
export type S2C_ChatRecv = { t: "chat/recv"; msg: ChatMsg };
export type ChatFrame = C2S_ChatSend | S2C_ChatRecv;

export function isChatRecv(f: any): f is S2C_ChatRecv {
  return f && f.t === "chat/recv" && f.msg && typeof f.msg.text === "string";
}

```
===== FILE END =====


### packages/chat/tsconfig.json

<a id="packages-chat-tsconfig-json"></a>
===== FILE START =====
Path: packages/chat/tsconfig.json
URL: (not in git / no remote detected)
Bytes: 239  Lines: 12  Modified: 2025-08-11T23:03:28Z
SHA256: d13650541362ec3b87abe0a2940c10778535c395b62bbaab8642aa2d9aa64aa7   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "composite": true,
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true
  },
  "include": ["src"]
}
```
===== FILE END =====


### packages/chat/tsconfig.tsbuildinfo

<a id="packages-chat-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: packages/chat/tsconfig.tsbuildinfo
URL: (not in git / no remote detected)
Bytes: 30308  Lines: 0  Modified: 2025-08-11T23:03:32Z
SHA256: 9ae75fbfc08f72fdb323c370a4dd863938984f85648ea088160d21033e68b547   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### packages/core/src/battle/engine.js

<a id="packages-core-src-battle-engine-js"></a>
===== FILE START =====
Path: packages/core/src/battle/engine.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/core/src/battle/engine.ts

<a id="packages-core-src-battle-engine-ts"></a>
===== FILE START =====
Path: packages/core/src/battle/engine.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/core/src/capture/engine.js

<a id="packages-core-src-capture-engine-js"></a>
===== FILE START =====
Path: packages/core/src/capture/engine.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/core/src/capture/engine.ts

<a id="packages-core-src-capture-engine-ts"></a>
===== FILE START =====
Path: packages/core/src/capture/engine.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/core/src/economy/convert.js

<a id="packages-core-src-economy-convert-js"></a>
===== FILE START =====
Path: packages/core/src/economy/convert.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/core/src/economy/convert.ts

<a id="packages-core-src-economy-convert-ts"></a>
===== FILE START =====
Path: packages/core/src/economy/convert.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/core/src/index.js

<a id="packages-core-src-index-js"></a>
===== FILE START =====
Path: packages/core/src/index.js
URL: (not in git / no remote detected)
Bytes: 76  Lines: 3  Modified: 2025-08-11T21:04:16Z
SHA256: e3263f461ef70cbe9af6eab7224680beca11e885c8616ca8b4f9763823322b93   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export * from './rng';
export * from './types';
export * from './worldgen';
```
===== FILE END =====


### packages/core/src/index.ts

<a id="packages-core-src-index-ts"></a>
===== FILE START =====
Path: packages/core/src/index.ts
URL: (not in git / no remote detected)
Bytes: 76  Lines: 3  Modified: 2025-08-10T00:42:28Z
SHA256: e3263f461ef70cbe9af6eab7224680beca11e885c8616ca8b4f9763823322b93   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export * from './rng';
export * from './types';
export * from './worldgen';
```
===== FILE END =====


### packages/core/src/rng.js

<a id="packages-core-src-rng-js"></a>
===== FILE START =====
Path: packages/core/src/rng.js
URL: (not in git / no remote detected)
Bytes: 1136  Lines: 33  Modified: 2025-08-11T21:04:16Z
SHA256: 16ed00ec0eae416f580ab23c9c13b79b6201d392c7372af236079e28f32864de   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
// Mulberry32 PRNG from a 32-bit seed
export function mulberry32(seed) {
    let t = seed >>> 0;
    return function () {
        t += 0x6D2B79F5;
        let r = Math.imul(t ^ (t >>> 15), 1 | t);
        r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
        return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
    };
}
// 2D hash -> 32-bit seed
export function hash2(seed, x, y) {
    let h = seed >>> 0;
    h = Math.imul(h ^ (x | 0), 0x9E3779B1);
    h = Math.imul(h ^ (y | 0), 0x85EBCA77);
    h ^= h >>> 13;
    h = Math.imul(h, 0xC2B2AE35);
    h ^= h >>> 16;
    return h >>> 0;
}
// Value noise (cheap) at integer grid points, bilinear interp
export function valueNoise2D(seed, x, y) {
    const x0 = Math.floor(x), y0 = Math.floor(y);
    const x1 = x0 + 1, y1 = y0 + 1;
    const sx = x - x0, sy = y - y0;
    const r00 = mulberry32(hash2(seed, x0, y0))();
    const r10 = mulberry32(hash2(seed, x1, y0))();
    const r01 = mulberry32(hash2(seed, x0, y1))();
    const r11 = mulberry32(hash2(seed, x1, y1))();
    const ix0 = r00 + (r10 - r00) * sx;
    const ix1 = r01 + (r11 - r01) * sx;
    return ix0 + (ix1 - ix0) * sy; // 0..1
}
```
===== FILE END =====


### packages/core/src/rng.ts

<a id="packages-core-src-rng-ts"></a>
===== FILE START =====
Path: packages/core/src/rng.ts
URL: (not in git / no remote detected)
Bytes: 1136  Lines: 36  Modified: 2025-08-10T00:28:16Z
SHA256: fc551d9fa5fd080a72cd414d8a710d07b7a3d67565549c06107d92307fff84d7   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// Mulberry32 PRNG from a 32-bit seed
export function mulberry32(seed: number) {
  let t = seed >>> 0;
  return function() {
    t += 0x6D2B79F5;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

// 2D hash -> 32-bit seed
export function hash2(seed: number, x: number, y: number) {
  let h = seed >>> 0;
  h = Math.imul(h ^ (x | 0), 0x9E3779B1);
  h = Math.imul(h ^ (y | 0), 0x85EBCA77);
  h ^= h >>> 13; h = Math.imul(h, 0xC2B2AE35); h ^= h >>> 16;
  return h >>> 0;
}

// Value noise (cheap) at integer grid points, bilinear interp
export function valueNoise2D(seed: number, x: number, y: number) {
  const x0 = Math.floor(x), y0 = Math.floor(y);
  const x1 = x0 + 1, y1 = y0 + 1;
  const sx = x - x0, sy = y - y0;

  const r00 = mulberry32(hash2(seed, x0, y0))();
  const r10 = mulberry32(hash2(seed, x1, y0))();
  const r01 = mulberry32(hash2(seed, x0, y1))();
  const r11 = mulberry32(hash2(seed, x1, y1))();

  const ix0 = r00 + (r10 - r00) * sx;
  const ix1 = r01 + (r11 - r01) * sx;
  return ix0 + (ix1 - ix0) * sy; // 0..1
}

```
===== FILE END =====


### packages/core/src/types.js

<a id="packages-core-src-types-js"></a>
===== FILE START =====
Path: packages/core/src/types.js
URL: (not in git / no remote detected)
Bytes: 11  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export {};
```
===== FILE END =====


### packages/core/src/types.ts

<a id="packages-core-src-types-ts"></a>
===== FILE START =====
Path: packages/core/src/types.ts
URL: (not in git / no remote detected)
Bytes: 178  Lines: 6  Modified: 2025-08-10T00:28:36Z
SHA256: 5207b4dad9f787396e3c5d12a8917643f69d531e62cb28a92e8af96d238ec523   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type Tile = 0 | 1 | 2; // 0=water,1=grass,2=rock (example)
export interface Chunk {
  cx: number; cy: number; w: number; h: number;
  tiles: Uint8Array; // w*h of Tile
}

```
===== FILE END =====


### packages/core/src/validation/schemas.js

<a id="packages-core-src-validation-schemas-js"></a>
===== FILE START =====
Path: packages/core/src/validation/schemas.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/core/src/validation/schemas.ts

<a id="packages-core-src-validation-schemas-ts"></a>
===== FILE START =====
Path: packages/core/src/validation/schemas.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/core/src/worldgen.js

<a id="packages-core-src-worldgen-js"></a>
===== FILE START =====
Path: packages/core/src/worldgen.js
URL: (not in git / no remote detected)
Bytes: 823  Lines: 23  Modified: 2025-08-11T21:04:16Z
SHA256: 0a59f2bb094600955036e302881a80ce2f9b00a728926c061dc180aa69241b31   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import { valueNoise2D } from './rng';
export const CHUNK_SIZE = 32;
export function genChunk(worldSeed, cx, cy) {
    const w = CHUNK_SIZE, h = CHUNK_SIZE;
    const tiles = new Uint8Array(w * h);
    const scale = 0.07;
    for (let ty = 0; ty < h; ty++) {
        for (let tx = 0; tx < w; tx++) {
            const wx = (cx * w + tx) * scale;
            const wy = (cy * h + ty) * scale;
            const n1 = valueNoise2D(worldSeed, wx, wy);
            const n2 = valueNoise2D(worldSeed ^ 0xA5A5A5A5, wx * 2, wy * 2) * 0.3;
            const n = (n1 * 0.7) + n2;
            let tile = 1; // grass
            if (n < 0.35)
                tile = 0; // water
            else if (n > 0.75)
                tile = 2; // rock
            tiles[ty * w + tx] = tile;
        }
    }
    return { cx, cy, w, h, tiles };
}
```
===== FILE END =====


### packages/core/src/worldgen.ts

<a id="packages-core-src-worldgen-ts"></a>
===== FILE START =====
Path: packages/core/src/worldgen.ts
URL: (not in git / no remote detected)
Bytes: 820  Lines: 27  Modified: 2025-08-10T00:39:31Z
SHA256: fed39365c5811be03dc017a180738e64190e9d8c11e821e7f2a7d5045abf2187   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { valueNoise2D } from './rng';
import type { Chunk, Tile } from './types';

export const CHUNK_SIZE = 32;

export function genChunk(worldSeed: number, cx: number, cy: number): Chunk {
  const w = CHUNK_SIZE, h = CHUNK_SIZE;
  const tiles = new Uint8Array(w * h);
  const scale = 0.07;

  for (let ty = 0; ty < h; ty++) {
    for (let tx = 0; tx < w; tx++) {
      const wx = (cx * w + tx) * scale;
      const wy = (cy * h + ty) * scale;
      const n1 = valueNoise2D(worldSeed, wx, wy);
      const n2 = valueNoise2D(worldSeed ^ 0xA5A5A5A5, wx * 2, wy * 2) * 0.3;
      const n = (n1 * 0.7) + n2;

      let tile: Tile = 1;           // grass
      if (n < 0.35) tile = 0;       // water
      else if (n > 0.75) tile = 2;  // rock

      tiles[ty * w + tx] = tile;
    }
  }
  return { cx, cy, w, h, tiles };
}
```
===== FILE END =====


### packages/net/src/encode.js

<a id="packages-net-src-encode-js"></a>
===== FILE START =====
Path: packages/net/src/encode.js
URL: (not in git / no remote detected)
Bytes: 531  Lines: 17  Modified: 2025-08-11T21:04:16Z
SHA256: 1580ef94af7839b0679ff78ab498254be2128dd7890d4b54dab369b4f8d0dd1a   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export function u8ToB64(u8) {
    if (typeof Buffer !== 'undefined')
        return Buffer.from(u8).toString('base64');
    let s = '';
    for (let i = 0; i < u8.length; i++)
        s += String.fromCharCode(u8[i]);
    return btoa(s);
}
export function b64ToU8(b64) {
    if (typeof Buffer !== 'undefined')
        return new Uint8Array(Buffer.from(b64, 'base64'));
    const bin = atob(b64);
    const u8 = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++)
        u8[i] = bin.charCodeAt(i);
    return u8;
}
```
===== FILE END =====


### packages/net/src/encode.ts

<a id="packages-net-src-encode-ts"></a>
===== FILE START =====
Path: packages/net/src/encode.ts
URL: (not in git / no remote detected)
Bytes: 521  Lines: 14  Modified: 2025-08-10T00:31:10Z
SHA256: f18a9f06c4fdb04702e63d5c6308e484bee776bf96796a3e1f37fc35dfc2d45b   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export function u8ToB64(u8: Uint8Array): string {
  if (typeof Buffer !== 'undefined') return Buffer.from(u8).toString('base64');
  let s = ''; for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]);
  return btoa(s);
}

export function b64ToU8(b64: string): Uint8Array {
  if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(b64, 'base64'));
  const bin = atob(b64);
  const u8 = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) u8[i] = bin.charCodeAt(i);
  return u8;
}

```
===== FILE END =====


### packages/net/src/messages.js

<a id="packages-net-src-messages-js"></a>
===== FILE START =====
Path: packages/net/src/messages.js
URL: (not in git / no remote detected)
Bytes: 11  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export {};
```
===== FILE END =====


### packages/net/src/messages.ts

<a id="packages-net-src-messages-ts"></a>
===== FILE START =====
Path: packages/net/src/messages.ts
URL: (not in git / no remote detected)
Bytes: 730  Lines: 20  Modified: 2025-08-10T00:40:54Z
SHA256: ba67c4044148b928fa7e637df1fcbf89f1b4db3cb140c2a22f4d6710b33d060a   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// Client → Server
export type ClientHello = { t: 'hello'; name: string };
export type ClientIntent = { t: 'intent'; seq: number; dx: -1|0|1; dy: -1|0|1 };
export type ClientChunkReq = { t: 'chunkReq'; cx: number; cy: number };
export type C2S = ClientHello | ClientIntent | ClientChunkReq;

// Server → Client
export type ServerWelcome = { t: 'welcome'; id: string; zoneId: string; time: number };
export type ServerSnapshot = {
  t: 'snapshot';
  time: number;
  players: Array<{ id: string; x: number; y: number; name: string }>;
};
export type ServerChunkData = {
  t: 'chunkData';
  cx: number; cy: number; w: number; h: number;
  tilesB64: string;
};
export type S2C = ServerWelcome | ServerSnapshot | ServerChunkData;

```
===== FILE END =====


### packages/net/src/rate.js

<a id="packages-net-src-rate-js"></a>
===== FILE START =====
Path: packages/net/src/rate.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/net/src/rate.ts

<a id="packages-net-src-rate-ts"></a>
===== FILE START =====
Path: packages/net/src/rate.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/net/src/schema.js

<a id="packages-net-src-schema-js"></a>
===== FILE START =====
Path: packages/net/src/schema.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/net/src/schema.ts

<a id="packages-net-src-schema-ts"></a>
===== FILE START =====
Path: packages/net/src/schema.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/overlays/package.json

<a id="packages-overlays-package-json"></a>
===== FILE START =====
Path: packages/overlays/package.json
URL: (not in git / no remote detected)
Bytes: 267  Lines: 10  Modified: 2025-08-11T22:33:37Z
SHA256: 0bdd7ca1a547aaf3c7ffa2a5dca2e05da7de72d5d57c166cf9ae6767327a129f   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/overlays",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "exports": { ".": "./dist/index.js", "./package.json": "./package.json" },
  "types": "./dist/index.d.ts",
  "files": ["dist", "src"],
  "scripts": { "build": "tsc -b" }
}
```
===== FILE END =====


### packages/overlays/src/apply.js

<a id="packages-overlays-src-apply-js"></a>
===== FILE START =====
Path: packages/overlays/src/apply.js
URL: (not in git / no remote detected)
Bytes: 248  Lines: 8  Modified: 2025-08-11T21:04:16Z
SHA256: 976505eee687ba99e008b32c1034cc3ee62d6bb7666e7f12d72e9ecfbfc35712   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export function applyTilePatches(base, w, h, patches) {
    const out = base.slice();
    for (const p of patches) {
        if (p.lx >= 0 && p.lx < w && p.ly >= 0 && p.ly < h)
            out[p.ly * w + p.lx] = p.tile | 0;
    }
    return out;
}
```
===== FILE END =====


### packages/overlays/src/apply.ts

<a id="packages-overlays-src-apply-ts"></a>
===== FILE START =====
Path: packages/overlays/src/apply.ts
URL: (not in git / no remote detected)
Bytes: 315  Lines: 9  Modified: 2025-08-11T00:12:28Z
SHA256: a8681e9fca02a6967e8734fc27fc1e7d94973d911b1d8ae36afbbae9a202b4f4   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type TilePatch = { lx:number; ly:number; tile:number };
export function applyTilePatches(base: Uint8Array, w:number, h:number, patches: TilePatch[]) {
  const out = base.slice();
  for (const p of patches) {
    if (p.lx>=0 && p.lx<w && p.ly>=0 && p.ly<h) out[p.ly*w + p.lx] = p.tile|0;
  }
  return out;
}

```
===== FILE END =====


### packages/overlays/src/index.js

<a id="packages-overlays-src-index-js"></a>
===== FILE START =====
Path: packages/overlays/src/index.js
URL: (not in git / no remote detected)
Bytes: 50  Lines: 2  Modified: 2025-08-11T21:04:16Z
SHA256: bbbc1be93951e71c610e45185d1ca18c5de72b9740ab469f6428059a5ba1e730   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export * from './types';
export * from './apply';
```
===== FILE END =====


### packages/overlays/src/index.ts

<a id="packages-overlays-src-index-ts"></a>
===== FILE START =====
Path: packages/overlays/src/index.ts
URL: (not in git / no remote detected)
Bytes: 51  Lines: 3  Modified: 2025-08-11T00:13:06Z
SHA256: 7e8d9052aaee54f9b24366875dc6cc79d7e7d42b428e9757329dd6bf05a9f813   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export * from './types';
export * from './apply';

```
===== FILE END =====


### packages/overlays/src/types.js

<a id="packages-overlays-src-types-js"></a>
===== FILE START =====
Path: packages/overlays/src/types.js
URL: (not in git / no remote detected)
Bytes: 11  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 8e609bb71c20b858c77f0e9f90bb1319db8477b13f9f965f1a1e18524bf50881   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
export {};
```
===== FILE END =====


### packages/overlays/src/types.ts

<a id="packages-overlays-src-types-ts"></a>
===== FILE START =====
Path: packages/overlays/src/types.ts
URL: (not in git / no remote detected)
Bytes: 313  Lines: 5  Modified: 2025-08-11T00:11:49Z
SHA256: 19f19dacbf1d01e5ab9b133906c72a4ca8bc09fcf2fb47323c33413e77f89785   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type OverlayEvent =
  | { t:'place'; id:string; kind:'tile'; tx:number; ty:number; data:{ tile:number }; by:string; at:number }
  | { t:'remove'; id:string; tx:number; ty:number; by:string; at:number }
  | { t:'meta'; id:string; tx:number; ty:number; patch:Record<string,unknown>; by:string; at:number };

```
===== FILE END =====


### packages/overlays/tsconfig.json

<a id="packages-overlays-tsconfig-json"></a>
===== FILE START =====
Path: packages/overlays/tsconfig.json
URL: (not in git / no remote detected)
Bytes: 239  Lines: 12  Modified: 2025-08-11T23:03:28Z
SHA256: d13650541362ec3b87abe0a2940c10778535c395b62bbaab8642aa2d9aa64aa7   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "composite": true,
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true
  },
  "include": ["src"]
}
```
===== FILE END =====


### packages/overlays/tsconfig.tsbuildinfo

<a id="packages-overlays-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: packages/overlays/tsconfig.tsbuildinfo
URL: (not in git / no remote detected)
Bytes: 30294  Lines: 0  Modified: 2025-08-11T23:03:32Z
SHA256: ece566e3f8f50d8446d4b60fb511c6f55e6912820789b0e8c72094aad7850eab   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### packages/trolls/package.json

<a id="packages-trolls-package-json"></a>
===== FILE START =====
Path: packages/trolls/package.json
URL: (not in git / no remote detected)
Bytes: 59  Lines: 1  Modified: 2025-08-10T23:51:58Z
SHA256: 61fd51cc4c49f02c4c44d1af487f5b2e12665965ca4d361abbd76fb961302477   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{"name":"@warboy/trolls","version":"0.0.0","private":true}
```
===== FILE END =====


### packages/trolls/src/README.md

<a id="packages-trolls-src-readme-md"></a>
===== FILE START =====
Path: packages/trolls/src/README.md
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
```
===== FILE END =====


### packages/trolls/src/index.js

<a id="packages-trolls-src-index-js"></a>
===== FILE START =====
Path: packages/trolls/src/index.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/trolls/src/index.ts

<a id="packages-trolls-src-index-ts"></a>
===== FILE START =====
Path: packages/trolls/src/index.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/trolls/src/schema.js

<a id="packages-trolls-src-schema-js"></a>
===== FILE START =====
Path: packages/trolls/src/schema.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/trolls/src/schema.ts

<a id="packages-trolls-src-schema-ts"></a>
===== FILE START =====
Path: packages/trolls/src/schema.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/trolls/src/types.js

<a id="packages-trolls-src-types-js"></a>
===== FILE START =====
Path: packages/trolls/src/types.js
URL: (not in git / no remote detected)
Bytes: 14  Lines: 1  Modified: 2025-08-11T21:04:16Z
SHA256: 77f5eec38c5ef075e11892244ccf9e249d82937e07401398df98319568775a17   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
```
===== FILE END =====


### packages/trolls/src/types.ts

<a id="packages-trolls-src-types-ts"></a>
===== FILE START =====
Path: packages/trolls/src/types.ts
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====


### packages/trolls/tsconfig.json

<a id="packages-trolls-tsconfig-json"></a>
===== FILE START =====
Path: packages/trolls/tsconfig.json
URL: (not in git / no remote detected)
Bytes: 2  Lines: 0  Modified: 2025-08-11T23:03:28Z
SHA256: 44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{}```
===== FILE END =====


### packages/world/package.json

<a id="packages-world-package-json"></a>
===== FILE START =====
Path: packages/world/package.json
URL: (not in git / no remote detected)
Bytes: 382  Lines: 19  Modified: 2025-08-11T23:36:29Z
SHA256: fb3cdd73a2c7f71db2af9022e5e79e5c1d8b20e35d6686f552b387e49713fb9d   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/world",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "dist/index.js",
  "module": "dist/index.js",
  "types": "dist/index.d.ts",
  "exports": {
    ".": {
      "import": "./dist/index.js",
      "types": "./dist/index.d.ts"
    },
    "./package.json": "./package.json"
  },
  "files": ["dist"],
  "scripts": { "build": "tsc -b" }
}

```
===== FILE END =====


### packages/world/src/aoi.js

<a id="packages-world-src-aoi-js"></a>
===== FILE START =====
Path: packages/world/src/aoi.js
URL: (not in git / no remote detected)
Bytes: 2289  Lines: 69  Modified: 2025-08-11T22:17:17Z
SHA256: b8e93066e3134d0af1b3f55822403c52b27e69f1e5376fda91d347835228c83e   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aoiRect = exports.localInChunk = exports.worldToChunk = void 0;
exports.edgePrefetch = edgePrefetch;
exports.directionalAOI = directionalAOI;
// packages/world/src/aoi.ts
var const_1 = require("./const");
var worldToChunk = function (tx, ty, size) {
    if (size === void 0) { size = const_1.CHUNK_SIZE; }
    return ({
        cx: Math.floor(tx / size),
        cy: Math.floor(ty / size),
    });
};
exports.worldToChunk = worldToChunk;
var localInChunk = function (tx, ty, size) {
    if (size === void 0) { size = const_1.CHUNK_SIZE; }
    return ({
        lx: ((tx % size) + size) % size,
        ly: ((ty % size) + size) % size,
    });
};
exports.localInChunk = localInChunk;
var aoiRect = function (cx, cy, rx, ry) {
    var out = [];
    for (var y = cy - ry; y <= cy + ry; y++)
        for (var x = cx - rx; x <= cx + rx; x++)
            out.push({ cx: x, cy: y });
    return out;
};
exports.aoiRect = aoiRect;
/**
 * Decide which edges are “near” within a margin (in tiles).
 * Optionally gate by travel direction: only expand toward where you’re going.
 */
function edgePrefetch(lx, ly, dirX, dirY, marginTiles, size) {
    if (size === void 0) { size = const_1.CHUNK_SIZE; }
    var nearWest = lx <= marginTiles;
    var nearEast = lx >= size - 1 - marginTiles;
    var nearNorth = ly <= marginTiles;
    var nearSouth = ly >= size - 1 - marginTiles;
    return {
        west: nearWest && dirX < 0,
        east: nearEast && dirX > 0,
        north: nearNorth && dirY < 0,
        south: nearSouth && dirY > 0,
    };
}
/**
 * Compute needed chunk coords: base radius (e.g. 1 = 3x3),
 * plus directional expansion by 1 extra ring for any “near-edge” sides.
 */
function directionalAOI(cx, cy, expand, baseRadius) {
    if (baseRadius === void 0) { baseRadius = 1; }
    var rxW = baseRadius, rxE = baseRadius, ryN = baseRadius, ryS = baseRadius;
    if (expand.west)
        rxW += 1;
    if (expand.east)
        rxE += 1;
    if (expand.north)
        ryN += 1;
    if (expand.south)
        ryS += 1;
    var out = [];
    for (var y = cy - ryN; y <= cy + ryS; y++)
        for (var x = cx - rxW; x <= cx + rxE; x++)
            out.push({ cx: x, cy: y });
    return out;
}
```
===== FILE END =====


### packages/world/src/aoi.ts

<a id="packages-world-src-aoi-ts"></a>
===== FILE START =====
Path: packages/world/src/aoi.ts
URL: (not in git / no remote detected)
Bytes: 2008  Lines: 72  Modified: 2025-08-10T23:31:17Z
SHA256: 33d757ac40b6877ff87e974a917ca3522766872b5e9e455f23a58452cda411a0   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/world/src/aoi.ts
import { CHUNK_SIZE } from './const';

export type ChunkCoord = { cx: number; cy: number };

export const worldToChunk = (tx: number, ty: number, size = CHUNK_SIZE) => ({
  cx: Math.floor(tx / size),
  cy: Math.floor(ty / size),
});

export const localInChunk = (tx: number, ty: number, size = CHUNK_SIZE) => ({
  lx: ((tx % size) + size) % size,
  ly: ((ty % size) + size) % size,
});

export const aoiRect = (
  cx: number, cy: number,
  rx: number, ry: number
): ChunkCoord[] => {
  const out: ChunkCoord[] = [];
  for (let y = cy - ry; y <= cy + ry; y++)
    for (let x = cx - rx; x <= cx + rx; x++)
      out.push({ cx: x, cy: y });
  return out;
};

/**
 * Decide which edges are “near” within a margin (in tiles).
 * Optionally gate by travel direction: only expand toward where you’re going.
 */
export function edgePrefetch(
  lx: number, ly: number,
  dirX: -1 | 0 | 1,
  dirY: -1 | 0 | 1,
  marginTiles: number,
  size = CHUNK_SIZE
) {
  const nearWest  = lx <= marginTiles;
  const nearEast  = lx >= size - 1 - marginTiles;
  const nearNorth = ly <= marginTiles;
  const nearSouth = ly >= size - 1 - marginTiles;

  return {
    west:  nearWest  && dirX < 0,
    east:  nearEast  && dirX > 0,
    north: nearNorth && dirY < 0,
    south: nearSouth && dirY > 0,
  };
}

/**
 * Compute needed chunk coords: base radius (e.g. 1 = 3x3),
 * plus directional expansion by 1 extra ring for any “near-edge” sides.
 */
export function directionalAOI(
  cx: number, cy: number,
  expand: { west?: boolean; east?: boolean; north?: boolean; south?: boolean },
  baseRadius = 1
): ChunkCoord[] {
  let rxW = baseRadius, rxE = baseRadius, ryN = baseRadius, ryS = baseRadius;
  if (expand.west)  rxW += 1;
  if (expand.east)  rxE += 1;
  if (expand.north) ryN += 1;
  if (expand.south) ryS += 1;

  const out: ChunkCoord[] = [];
  for (let y = cy - ryN; y <= cy + ryS; y++)
    for (let x = cx - rxW; x <= cx + rxE; x++)
      out.push({ cx: x, cy: y });
  return out;
}

```
===== FILE END =====


### packages/world/src/codec.js

<a id="packages-world-src-codec-js"></a>
===== FILE START =====
Path: packages/world/src/codec.js
URL: (not in git / no remote detected)
Bytes: 647  Lines: 21  Modified: 2025-08-11T22:17:17Z
SHA256: ad179d310338d72bd1242a5347270c0c8c02eeebb7a09a99d3f95a21e26cc201   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.u8ToB64 = u8ToB64;
exports.b64ToU8 = b64ToU8;
function u8ToB64(u8) {
    if (typeof Buffer !== 'undefined')
        return Buffer.from(u8).toString('base64');
    var s = '';
    for (var i = 0; i < u8.length; i++)
        s += String.fromCharCode(u8[i]);
    return btoa(s);
}
function b64ToU8(b64) {
    if (typeof Buffer !== 'undefined')
        return new Uint8Array(Buffer.from(b64, 'base64'));
    var bin = atob(b64);
    var out = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i++)
        out[i] = bin.charCodeAt(i);
    return out;
}
```
===== FILE END =====


### packages/world/src/codec.ts

<a id="packages-world-src-codec-ts"></a>
===== FILE START =====
Path: packages/world/src/codec.ts
URL: (not in git / no remote detected)
Bytes: 521  Lines: 12  Modified: 2025-08-10T22:33:17Z
SHA256: e38ebc4798e9835834b27a20b8a3718500ba6ffde3acdd4ad62290c58237cc49   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export function u8ToB64(u8: Uint8Array): string {
  if (typeof Buffer !== 'undefined') return Buffer.from(u8).toString('base64');
  let s = ''; for (let i = 0; i < u8.length; i++) s += String.fromCharCode(u8[i]);
  return btoa(s);
}
export function b64ToU8(b64: string): Uint8Array {
  if (typeof Buffer !== 'undefined') return new Uint8Array(Buffer.from(b64, 'base64'));
  const bin = atob(b64); const out = new Uint8Array(bin.length);
  for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
  return out;
}

```
===== FILE END =====


### packages/world/src/const.js

<a id="packages-world-src-const-js"></a>
===== FILE START =====
Path: packages/world/src/const.js
URL: (not in git / no remote detected)
Bytes: 238  Lines: 10  Modified: 2025-08-11T22:17:17Z
SHA256: 56231af1b47ad95856858eeb7cad18bc40ed7c0f8d52f16b8d4b6cc21546aaa7   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TILE = exports.CHUNK_SIZE = void 0;
// packages/world/src/const.ts
exports.CHUNK_SIZE = 32;
exports.TILE = {
    Water: 0,
    Grass: 1,
    Rock: 2,
};
```
===== FILE END =====


### packages/world/src/const.ts

<a id="packages-world-src-const-ts"></a>
===== FILE START =====
Path: packages/world/src/const.ts
URL: (not in git / no remote detected)
Bytes: 237  Lines: 11  Modified: 2025-08-10T22:57:17Z
SHA256: 5ec4f44655ba4b9d93983a2f2da4917e2c1e82c3794523c259a85d6b26a45ea0   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/world/src/const.ts
export const CHUNK_SIZE = 32 as const;

export const TILE = {
  Water: 0,
  Grass: 1,
  Rock: 2,
} as const;

export type TileId = typeof TILE[keyof typeof TILE]; // ← ensure this exists and is exported

```
===== FILE END =====


### packages/world/src/index.js

<a id="packages-world-src-index-js"></a>
===== FILE START =====
Path: packages/world/src/index.js
URL: (not in git / no remote detected)
Bytes: 886  Lines: 19  Modified: 2025-08-11T22:17:17Z
SHA256: a8e6c2123dc23cbe04d81c3ce3d575feaf3f03d09a81497c8f51d3b0dea37b05   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
__exportStar(require("./const"), exports);
__exportStar(require("./types"), exports);
__exportStar(require("./codec"), exports);
```
===== FILE END =====


### packages/world/src/index.ts

<a id="packages-world-src-index-ts"></a>
===== FILE START =====
Path: packages/world/src/index.ts
URL: (not in git / no remote detected)
Bytes: 268  Lines: 13  Modified: 2025-08-12T00:23:57Z
SHA256: 9ca42f7b62f06f433748902217bab58c54ecdc132a86819fbd5115f201d964bc   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export * from './const.js';
export * from './types.js';
export * from './codec.js';

// Re-export only the runtime symbols from AOI to avoid type name collisions
export {
  worldToChunk,
  localInChunk,
  edgePrefetch,
  directionalAOI,
  aoiRect,
} from './aoi.js';

```
===== FILE END =====


### packages/world/src/types.js

<a id="packages-world-src-types-js"></a>
===== FILE START =====
Path: packages/world/src/types.js
URL: (not in git / no remote detected)
Bytes: 77  Lines: 2  Modified: 2025-08-11T22:17:17Z
SHA256: d43aa81f5bc89faa359e0f97c814ba25155591ff078fbb9bfd40f8c7c9683230   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
```
===== FILE END =====


### packages/world/src/types.ts

<a id="packages-world-src-types-ts"></a>
===== FILE START =====
Path: packages/world/src/types.ts
URL: (not in git / no remote detected)
Bytes: 581  Lines: 19  Modified: 2025-08-10T23:10:09Z
SHA256: 011e67e60a110579f5110f245939056716429eaad439e7e38659e94fcd5fca69   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/world/src/types.ts
import type { TileId } from './const';

export type ChunkCoord = { cx: number; cy: number };

export type TerrainChunk = {
  cx: number; cy: number;
  w: number; h: number;          // = CHUNK_SIZE
  tiles: Uint8Array;              // length w*h, TileId values
  version: number;                // monotonically increasing
};

export type ChunkSnapshot = {
  cx: number; cy: number; version: number;
  w: number; h: number;           // echo dimensions for clients
  tilesB64: string;               // base64 of raw tiles
};

export type { TileId };
```
===== FILE END =====


### packages/world/tsconfig.json

<a id="packages-world-tsconfig-json"></a>
===== FILE START =====
Path: packages/world/tsconfig.json
URL: (not in git / no remote detected)
Bytes: 204  Lines: 11  Modified: 2025-08-11T23:03:28Z
SHA256: 2280fd6f45a5f5d1c6a2a1a4b7f7b2f782dc1735d9879fed6a6d9dc231dd35e1   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "module": "ESNext",
    "composite": true,
    "rootDir": "src",
    "outDir": "dist",
    "declaration": true
  },
  "include": ["src"]
}
```
===== FILE END =====


### packages/world/tsconfig.tsbuildinfo

<a id="packages-world-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: packages/world/tsconfig.tsbuildinfo
URL: (not in git / no remote detected)
Bytes: 30680  Lines: 0  Modified: 2025-08-12T00:24:20Z
SHA256: bfe2b484cebd3c5431f0fa34ed6545c8cbf69ee87ff772a8714d73f16fb83b39   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### tsconfig.json

<a id="tsconfig-json"></a>
===== FILE START =====
Path: tsconfig.json
URL: (not in git / no remote detected)
Bytes: 554  Lines: 24  Modified: 2025-08-11T23:03:28Z
SHA256: 1a29ea0d0b6b4fa65917d505a7b318b2eb8008853395d53a17c36976c11abdf6   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "files": [],
  "compilerOptions": {
    "target": "ES2021",
    "lib": ["ES2021", "DOM"],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "composite": true,
    "declaration": true
  },
  "references": [
    { "path": "packages/world" },
    { "path": "packages/overlays" },
    { "path": "packages/chat" },
    { "path": "apps/game-server" },
    { "path": "apps/game-web" }
  ]
}

```
===== FILE END =====


### tsconfig.tsbuildinfo

<a id="tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: tsconfig.tsbuildinfo
URL: (not in git / no remote detected)
Bytes: 187  Lines: 0  Modified: 2025-08-11T23:32:22Z
SHA256: 1a43d42519c171cfe2765d62015ccadc1bfd748613b8db28a60d74276825b784   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====


### turbo.json

<a id="turbo-json"></a>
===== FILE START =====
Path: turbo.json
URL: (not in git / no remote detected)
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
```
===== FILE END =====


### workflow-tools/project_bundle.sh

<a id="workflow-tools-project-bundle-sh"></a>
===== FILE START =====
Path: workflow-tools/project_bundle.sh
URL: (not in git / no remote detected)
Bytes: 7870  Lines: 269  Modified: 2025-08-15T04:20:49Z
SHA256: e30878fbdd3ed49a0ee55785873ef6520b338d4f85569318b76de8fdd0b4a596   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

OUT="${OUT:-PROJECT_BUNDLE.md}"
MAX_LINES=999
HEAD_TAKE=333
TAIL_TAKE=333

# Resolve absolute path of OUT to avoid self-inclusion during emit
OUT_ABS="$(readlink -f "$OUT" 2>/dev/null || realpath "$OUT" 2>/dev/null || echo "$PWD/$OUT")"

# =========================
#   CONFIG: WHITELIST
# =========================
# Base whitelist of textual extensions (lowercase, no dots).
# Add more via env: ALLOW_EXT="svelte,astro,hbs" ./project_bundle.sh
BASE_ALLOW_EXT=(
  # Core web / Node / React
  js mjs cjs ts tsx jsx
  json jsonc ndjson
  html htm css scss less
  yml yaml toml ini cfg conf env properties
  md markdown rst txt log lock

  # Python
  py pyi
  # Rust
  rs
  # Java / Kotlin / Gradle
  java kt kts gradle
  # JVM ecosystem
  xml pro

  # Other common text
  sh bash zsh fish
  csv tsv
  gql graphql proto
)

# Special filename whitelist (no extension needed)
BASE_ALLOW_NAMES=(
  # Rust
  Cargo.toml Cargo.lock
  # Python
  requirements.txt requirements-dev.txt pyproject.toml Pipfile Pipfile.lock poetry.lock setup.py setup.cfg
  # Node/JS/TS
  package.json package-lock.json yarn.lock pnpm-lock.yaml bun.lockb tsconfig.json jsconfig.json .npmrc .nvmrc
  .eslintrc .eslintrc.json .eslintignore .prettierrc .prettierrc.json .prettierrc.yml .prettierrc.yaml .prettierignore
  # Java/Kotlin/Gradle
  settings.gradle build.gradle gradle.properties settings.gradle.kts build.gradle.kts
  # Misc
  Dockerfile Containerfile Makefile .env .env.local .env.sample .editorconfig .gitignore .gitattributes
  LICENSE LICENSE.md README README.md
)

# =========================
#   HELPERS
# =========================
slug() {
  echo "$1" | tr '[:upper:]' '[:lower:]' \
    | sed 's/[^a-z0-9]/-/g; s/-\{2,\}/-/g; s/^-//; s/-$//'
}

# Merge BASE + env extras, dedupe
IFS=',' read -r -a EXTRA_EXT_ARR <<< "${ALLOW_EXT:-}"
ALLOW_EXT=("${BASE_ALLOW_EXT[@]}")
for e in "${EXTRA_EXT_ARR[@]}"; do
  e="$(echo "$e" | tr '[:upper:]' '[:lower:]' | sed 's/^\.//')"
  [[ -n "$e" ]] && ALLOW_EXT+=("$e")
done
ALLOW_EXT=($(printf "%s\n" "${ALLOW_EXT[@]}" | awk '!seen[$0]++'))
ALLOW_NAMES=("${BASE_ALLOW_NAMES[@]}")

detect_lang() {
  local f="$1" base ext
  base="$(basename "$f")"
  ext="$(echo "${f##*.}" | tr '[:upper:]' '[:lower:]')"
  shopt -s nocasematch
  case "$base" in
    Dockerfile|Containerfile) echo "dockerfile"; shopt -u nocasematch; return;;
    Makefile) echo "makefile"; shopt -u nocasematch; return;;
    .env|.env.*) echo "dotenv"; shopt -u nocasematch; return;;
    LICENSE|README|README.md) echo "md"; shopt -u nocasematch; return;;
    Cargo.toml) echo "toml"; shopt -u nocasematch; return;;
    Cargo.lock|*.lock) echo ""; shopt -u nocasematch; return;;
  esac
  case "$ext" in
    sh|bash|zsh|fish) echo "bash" ;;
    py|pyi) echo "python" ;;
    js|mjs|cjs) echo "javascript" ;;
    ts) echo "typescript" ;;
    jsx) echo "jsx" ;;
    tsx) echo "tsx" ;;
    json|jsonc|ndjson) echo "json" ;;
    yml|yaml) echo "yaml" ;;
    toml) echo "toml" ;;
    ini|cfg|conf|env|properties) echo "ini" ;;
    rs) echo "rust" ;;
    go) echo "go" ;;
    java) echo "java" ;;
    kt|kts) echo "kotlin" ;;
    html|htm) echo "html" ;;
    css|scss|less) echo "css" ;;
    md|markdown|rst) echo "md" ;;
    csv) echo "csv" ;;
    tsv) echo "tsv" ;;
    xml) echo "xml" ;;
    gql|graphql) echo "graphql" ;;
    proto) echo "proto" ;;
    gradle) echo "gradle" ;;
    *) echo "" ;;
  esac
  shopt -u nocasematch
}

is_allowed_textual() {
  local f="$1" base ext
  base="$(basename "$f")"
  for n in "${ALLOW_NAMES[@]}"; do
    [[ "$base" == "$n" ]] && return 0
  done
  if [[ "$f" == *.* ]]; then
    ext="$(echo "${f##*.}" | tr '[:upper:]' '[:lower:]')"
    for e in "${ALLOW_EXT[@]}"; do
      [[ "$ext" == "$e" ]] && return 0
    done
  fi
  return 1
}

git_url_prefix=""
git_commit=""
init_git_context() {
  if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    git_commit="$(git rev-parse HEAD 2>/dev/null || true)"
    remote="$(git remote get-url origin 2>/dev/null || true)"
    if [[ -n "${git_commit}" && -n "${remote}" ]]; then
      if [[ "$remote" =~ ^git@([^:]+):(.+)\.git$ ]]; then
        host="${BASH_REMATCH[1]}"; path="${BASH_REMATCH[2]}"
        git_url_prefix="https://${host}/${path}/blob/${git_commit}/"
      elif [[ "$remote" =~ ^https?:// ]]; then
        remote="${remote%.git}"
        git_url_prefix="${remote}/blob/${git_commit}/"
      fi
    fi
  fi
}
file_git_url() { [[ -n "$git_url_prefix" ]] && echo "${git_url_prefix}$1" || echo ""; }

emit_header() {
  {
    echo "# Project Bundle"
    echo
    echo "Generated: $(date -u +"%Y-%m-%dT%H:%M:%SZ")"
    echo
    echo "_This is a compact, AI‑friendly snapshot of the project._"
    echo "_Text files with known extensions include content; others are stubs._"
    echo "_Files >${MAX_LINES} lines are truncated to the first/last ${HEAD_TAKE}/${TAIL_TAKE} lines._"
    echo "_Use the Table of Contents to jump to any path._"
    echo "_Git URLs appear when the repo/remote is detected._"
    echo
    echo "## Table of Contents"
  } > "$OUT"
}

gather_files() {
  mapfile -t FILES < <(
    find . \
      \( -name .git -o -name node_modules -o -name bower_components \
         -o -name dist -o -name build -o -name out -o -name .output \
         -o -name .next -o -name .nuxt -o -name target -o -name coverage \
         -o -name .venv -o -name venv -o -name __pycache__ -o -name .cache \
         -o -name .tox -o -name .gradle -o -name .idea -o -name .vscode \
         -o -name .turbo -o -name .pnpm \) -prune -o \
      -type f -print \
    | sed 's|^\./||' \
    | LC_ALL=C sort
  )
}

emit_toc() {
  for f in "${FILES[@]}"; do
    echo "- [$f](#$(slug "$f"))" >> "$OUT"
  done
  echo >> "$OUT"
}

emit_file_section() {
  local f="$1"
  local bytes mtime sha lines lang url anchor allowed f_abs
  # Skip OUT itself (extra guard)
  f_abs="$(readlink -f "$f" 2>/dev/null || realpath "$f" 2>/dev/null || echo "$PWD/$f")"
  [[ "$f_abs" == "$OUT_ABS" ]] && return 0

  bytes=$(wc -c < "$f" | tr -d ' ')
  mtime=$(date -u -r "$f" +"%Y-%m-%dT%H:%M:%SZ")
  sha=$(sha256sum "$f" | awk '{print $1}')
  lines=$(wc -l < "$f" | tr -d ' ' || echo 0)
  lang="$(detect_lang "$f")"
  url="$(file_git_url "$f")"
  anchor="$(slug "$f")"
  is_allowed_textual "$f" && allowed=1 || allowed=0

  {
    echo
    echo "### $f"
    echo
    echo "<a id=\"$anchor\"></a>"
    echo "===== FILE START ====="
    echo "Path: $f"
    [[ -n "$url" ]] && echo "URL: $url" || echo "URL: (not in git / no remote detected)"
    echo "Bytes: $bytes  Lines: $lines  Modified: $mtime"
    echo "SHA256: $sha   Language: ${lang:-plain}   Role: source"

    if [[ "$allowed" -eq 0 ]]; then
      echo "Summary: Non-whitelisted type; metadata only."
    elif (( lines > MAX_LINES )); then
      echo "Summary: Truncated preview; file exceeds $MAX_LINES lines."
    else
      echo "Summary: "
    fi

    echo
    echo "-----8<----- CONTENT -----8<-----"
    if [[ -n "$lang" ]]; then
      echo '```'"$lang"
    else
      echo '```'
    fi

    if [[ "$allowed" -eq 0 ]]; then
      : # stub: empty content
    else
      if (( lines > MAX_LINES )); then
        head -n "$HEAD_TAKE" -- "$f"
        echo
        echo "…"
        echo "# [omitted middle: $((lines - HEAD_TAKE - TAIL_TAKE)) lines]"
        echo "…"
        echo
        tail -n "$TAIL_TAKE" -- "$f"
      else
        cat -- "$f"
      fi
    fi

    echo '```'
    echo "===== FILE END ====="
    echo
  } >> "$OUT"
}

# =========================
#   MAIN
# =========================
init_git_context
emit_header
gather_files
emit_toc

for f in "${FILES[@]}"; do
  # extra OUT guard at loop level
  f_abs="$(readlink -f "$f" 2>/dev/null || realpath "$f" 2>/dev/null || echo "$PWD/$f")"
  [[ "$f_abs" == "$OUT_ABS" ]] && continue
  emit_file_section "$f"
done

echo "✅ Project bundle saved to $OUT"

```
===== FILE END =====

