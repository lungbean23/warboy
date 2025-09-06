# Project Bundle

Generated: 2025-09-06T16:45:51Z

_This is a compact, AI-friendly snapshot of the project._
_Text files with known extensions include content; others are stubs._
_Files >999 lines are truncated to the first/last 333/333 lines._
_Use the Table of Contents to jump to any path._
_Git URLs appear when the repo/remote is detected._

## Table of Contents
- [.env.example](#env-example)
- [.gitattributes](#gitattributes)
- [.github/workflows/ci.yml](#github-workflows-ci-yml)
- [.gitignore](#gitignore)
- [.npmrc](#npmrc)
- [BETA.md](#beta-md)
- [PROJECT_BUNDLE.md](#project-bundle-md)
- [README.md](#readme-md)
- [apps/admin-api/package.json](#apps-admin-api-package-json)
- [apps/admin-api/src/index.js](#apps-admin-api-src-index-js)
- [apps/admin-api/src/index.ts](#apps-admin-api-src-index-ts)
- [apps/admin-api/tsconfig.json](#apps-admin-api-tsconfig-json)
- [apps/admin-web/.env.local](#apps-admin-web-env-local)
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
- [apps/chat-server/.env](#apps-chat-server-env)
- [apps/chat-server/.env.example](#apps-chat-server-env-example)
- [apps/chat-server/.gitignore](#apps-chat-server-gitignore)
- [apps/chat-server/README.md](#apps-chat-server-readme-md)
- [apps/chat-server/data/chat/dev.ndjson](#apps-chat-server-data-chat-dev-ndjson)
- [apps/chat-server/data/chat/global.ndjson](#apps-chat-server-data-chat-global-ndjson)
- [apps/chat-server/package.json](#apps-chat-server-package-json)
- [apps/chat-server/src/config.ts](#apps-chat-server-src-config-ts)
- [apps/chat-server/src/index.ts](#apps-chat-server-src-index-ts)
- [apps/chat-server/src/logger.ts](#apps-chat-server-src-logger-ts)
- [apps/chat-server/src/store/file.ts](#apps-chat-server-src-store-file-ts)
- [apps/chat-server/src/store/memory.ts](#apps-chat-server-src-store-memory-ts)
- [apps/chat-server/src/types.ts](#apps-chat-server-src-types-ts)
- [apps/chat-server/tsconfig.json](#apps-chat-server-tsconfig-json)
- [apps/data-api/README.md](#apps-data-api-readme-md)
- [apps/data-api/package.json](#apps-data-api-package-json)
- [apps/data-api/src/config.ts](#apps-data-api-src-config-ts)
- [apps/data-api/src/domain/events/types.ts](#apps-data-api-src-domain-events-types-ts)
- [apps/data-api/src/domain/players/service.ts](#apps-data-api-src-domain-players-service-ts)
- [apps/data-api/src/domain/players/types.ts](#apps-data-api-src-domain-players-types-ts)
- [apps/data-api/src/domain/towns/service.ts](#apps-data-api-src-domain-towns-service-ts)
- [apps/data-api/src/domain/towns/types.ts](#apps-data-api-src-domain-towns-types-ts)
- [apps/data-api/src/domain/towns/validators.ts](#apps-data-api-src-domain-towns-validators-ts)
- [apps/data-api/src/domain/world/types.ts](#apps-data-api-src-domain-world-types-ts)
- [apps/data-api/src/domain/world/util.ts](#apps-data-api-src-domain-world-util-ts)
- [apps/data-api/src/index.ts](#apps-data-api-src-index-ts)
- [apps/data-api/src/routes/buildings.ts](#apps-data-api-src-routes-buildings-ts)
- [apps/data-api/src/routes/farms.ts](#apps-data-api-src-routes-farms-ts)
- [apps/data-api/src/routes/health.ts](#apps-data-api-src-routes-health-ts)
- [apps/data-api/src/routes/markets.ts](#apps-data-api-src-routes-markets-ts)
- [apps/data-api/src/routes/towns.ts](#apps-data-api-src-routes-towns-ts)
- [apps/data-api/src/server.ts](#apps-data-api-src-server-ts)
- [apps/data-api/src/store/index.ts](#apps-data-api-src-store-index-ts)
- [apps/data-api/src/store/memory.ts](#apps-data-api-src-store-memory-ts)
- [apps/data-api/src/ws/bus.ts](#apps-data-api-src-ws-bus-ts)
- [apps/data-api/tsconfig.json](#apps-data-api-tsconfig-json)
- [apps/game-server/package.json](#apps-game-server-package-json)
- [apps/game-server/src/auth/jwtVerify.js](#apps-game-server-src-auth-jwtverify-js)
- [apps/game-server/src/auth/jwtVerify.ts](#apps-game-server-src-auth-jwtverify-ts)
- [apps/game-server/src/chat/handler.js](#apps-game-server-src-chat-handler-js)
- [apps/game-server/src/chat/handler.ts](#apps-game-server-src-chat-handler-ts)
- [apps/game-server/src/chat/store.ts](#apps-game-server-src-chat-store-ts)
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
- [apps/game-web/.gitignore](#apps-game-web-gitignore)
- [apps/game-web/index.html](#apps-game-web-index-html)
- [apps/game-web/package.json](#apps-game-web-package-json)
- [apps/game-web/public/tiles/grass.png](#apps-game-web-public-tiles-grass-png)
- [apps/game-web/public/tiles/rock.png](#apps-game-web-public-tiles-rock-png)
- [apps/game-web/public/tiles/water.png](#apps-game-web-public-tiles-water-png)
- [apps/game-web/src/app/App.d.ts](#apps-game-web-src-app-app-d-ts)
- [apps/game-web/src/app/App.tsx](#apps-game-web-src-app-app-tsx)
- [apps/game-web/src/app/App.tsx.bak](#apps-game-web-src-app-app-tsx-bak)
- [apps/game-web/src/app/chat/ChatPanel.tsx](#apps-game-web-src-app-chat-chatpanel-tsx)
- [apps/game-web/src/app/chat/useChat.d.ts](#apps-game-web-src-app-chat-usechat-d-ts)
- [apps/game-web/src/app/chat/useChat.js](#apps-game-web-src-app-chat-usechat-js)
- [apps/game-web/src/app/chat/useChat.ts](#apps-game-web-src-app-chat-usechat-ts)
- [apps/game-web/src/app/chat/wireChat.ts](#apps-game-web-src-app-chat-wirechat-ts)
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
- [apps/game-web/src/app/ui/chat/emojiPad.ts](#apps-game-web-src-app-ui-chat-emojipad-ts)
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
- [packages/assets/src/atlas.ts](#packages-assets-src-atlas-ts)
- [packages/assets/src/licensing.md](#packages-assets-src-licensing-md)
- [packages/assets/src/tiles.ts](#packages-assets-src-tiles-ts)
- [packages/chat/README.md](#packages-chat-readme-md)
- [packages/chat/package.json](#packages-chat-package-json)
- [packages/chat/src/client.ts](#packages-chat-src-client-ts)
- [packages/chat/src/index.ts](#packages-chat-src-index-ts)
- [packages/chat/src/types.ts](#packages-chat-src-types-ts)
- [packages/chat/tsconfig.json](#packages-chat-tsconfig-json)
- [packages/chat/tsconfig.tsbuildinfo](#packages-chat-tsconfig-tsbuildinfo)
- [packages/core/src/battle/engine.ts](#packages-core-src-battle-engine-ts)
- [packages/core/src/capture/engine.ts](#packages-core-src-capture-engine-ts)
- [packages/core/src/economy/convert.ts](#packages-core-src-economy-convert-ts)
- [packages/core/src/index.ts](#packages-core-src-index-ts)
- [packages/core/src/rng.ts](#packages-core-src-rng-ts)
- [packages/core/src/types.ts](#packages-core-src-types-ts)
- [packages/core/src/validation/schemas.ts](#packages-core-src-validation-schemas-ts)
- [packages/core/src/worldgen.ts](#packages-core-src-worldgen-ts)
- [packages/net/package.json](#packages-net-package-json)
- [packages/net/src/encode.ts](#packages-net-src-encode-ts)
- [packages/net/src/index.ts](#packages-net-src-index-ts)
- [packages/net/src/messages.ts](#packages-net-src-messages-ts)
- [packages/net/src/rate.ts](#packages-net-src-rate-ts)
- [packages/net/src/schema.ts](#packages-net-src-schema-ts)
- [packages/net/tsconfig.json](#packages-net-tsconfig-json)
- [packages/net/tsconfig.tsbuildinfo](#packages-net-tsconfig-tsbuildinfo)
- [packages/overlays/.gitignore](#packages-overlays-gitignore)
- [packages/overlays/package.json](#packages-overlays-package-json)
- [packages/overlays/src/apply.ts](#packages-overlays-src-apply-ts)
- [packages/overlays/src/index.ts](#packages-overlays-src-index-ts)
- [packages/overlays/src/types.ts](#packages-overlays-src-types-ts)
- [packages/overlays/tsconfig.json](#packages-overlays-tsconfig-json)
- [packages/overlays/tsconfig.tsbuildinfo](#packages-overlays-tsconfig-tsbuildinfo)
- [packages/trolls/package.json](#packages-trolls-package-json)
- [packages/trolls/src/README.md](#packages-trolls-src-readme-md)
- [packages/trolls/src/index.ts](#packages-trolls-src-index-ts)
- [packages/trolls/src/schema.ts](#packages-trolls-src-schema-ts)
- [packages/trolls/src/types.ts](#packages-trolls-src-types-ts)
- [packages/trolls/tsconfig.json](#packages-trolls-tsconfig-json)
- [packages/warboys-data/package.json](#packages-warboys-data-package-json)
- [packages/warboys-data/scripts/after-build.mjs](#packages-warboys-data-scripts-after-build-mjs)
- [packages/warboys-data/scripts/validate.mjs](#packages-warboys-data-scripts-validate-mjs)
- [packages/warboys-data/src/index.ts](#packages-warboys-data-src-index-ts)
- [packages/warboys-data/src/schema/moves.schema.json](#packages-warboys-data-src-schema-moves-schema-json)
- [packages/warboys-data/src/schema/species.schema.ts](#packages-warboys-data-src-schema-species-schema-ts)
- [packages/warboys-data/src/species/WB-001_embercub.yaml](#packages-warboys-data-src-species-wb-001-embercub-yaml)
- [packages/warboys-data/src/species/WB-002_ferrugrim.yaml](#packages-warboys-data-src-species-wb-002-ferrugrim-yaml)
- [packages/warboys-data/src/species/WB-003_lumenfin.yaml](#packages-warboys-data-src-species-wb-003-lumenfin-yaml)
- [packages/warboys-data/src/types/index.ts](#packages-warboys-data-src-types-index-ts)
- [packages/warboys-data/tsconfig.json](#packages-warboys-data-tsconfig-json)
- [packages/warboys-data/tsconfig.tsbuildinfo](#packages-warboys-data-tsconfig-tsbuildinfo)
- [packages/world/package.json](#packages-world-package-json)
- [packages/world/src/aoi.ts](#packages-world-src-aoi-ts)
- [packages/world/src/codec.ts](#packages-world-src-codec-ts)
- [packages/world/src/const.ts](#packages-world-src-const-ts)
- [packages/world/src/index.ts](#packages-world-src-index-ts)
- [packages/world/src/types.ts](#packages-world-src-types-ts)
- [packages/world/tsconfig.json](#packages-world-tsconfig-json)
- [packages/world/tsconfig.tsbuildinfo](#packages-world-tsconfig-tsbuildinfo)
- [tsconfig.base.json](#tsconfig-base-json)
- [tsconfig.json](#tsconfig-json)
- [turbo.json](#turbo-json)
- [workflow-tools/backupr/README.md](#workflow-tools-backupr-readme-md)
- [workflow-tools/backupr/backup.sh](#workflow-tools-backupr-backup-sh)
- [workflow-tools/bootstrap-workspaces.sh](#workflow-tools-bootstrap-workspaces-sh)
- [workflow-tools/dev-all/bootstrap-fedora.sh](#workflow-tools-dev-all-bootstrap-fedora-sh)
- [workflow-tools/dev-all/dev-all.sh](#workflow-tools-dev-all-dev-all-sh)
- [workflow-tools/dev-all/helpers/build.sh](#workflow-tools-dev-all-helpers-build-sh)
- [workflow-tools/dev-all/helpers/display/nice_display.sh](#workflow-tools-dev-all-helpers-display-nice-display-sh)
- [workflow-tools/dev-all/helpers/display/web_hud.html](#workflow-tools-dev-all-helpers-display-web-hud-html)
- [workflow-tools/dev-all/helpers/display/web_hud.js](#workflow-tools-dev-all-helpers-display-web-hud-js)
- [workflow-tools/dev-all/helpers/display/web_hud.sh](#workflow-tools-dev-all-helpers-display-web-hud-sh)
- [workflow-tools/dev-all/helpers/healthcheck.sh](#workflow-tools-dev-all-helpers-healthcheck-sh)
- [workflow-tools/dev-all/helpers/hud.sh](#workflow-tools-dev-all-helpers-hud-sh)
- [workflow-tools/dev-all/helpers/launch.sh](#workflow-tools-dev-all-helpers-launch-sh)
- [workflow-tools/dev-all/helpers/prep.sh](#workflow-tools-dev-all-helpers-prep-sh)
- [workflow-tools/dev-all/helpers/stop.sh](#workflow-tools-dev-all-helpers-stop-sh)
- [workflow-tools/dev-all/helpers/verify-turbo.sh](#workflow-tools-dev-all-helpers-verify-turbo-sh)
- [workflow-tools/dev-all/logs/.web_hud.err.log](#workflow-tools-dev-all-logs-web-hud-err-log)
- [workflow-tools/dev-all/logs/.web_hud.out.log](#workflow-tools-dev-all-logs-web-hud-out-log)
- [workflow-tools/dev-all/logs/.web_hud.pid](#workflow-tools-dev-all-logs-web-hud-pid)
- [workflow-tools/dev-all/logs/admin-api.warboy-20250901-094629.log](#workflow-tools-dev-all-logs-admin-api-warboy-20250901-094629-log)
- [workflow-tools/dev-all/logs/admin-api.warboy-20250901-184121.log](#workflow-tools-dev-all-logs-admin-api-warboy-20250901-184121-log)
- [workflow-tools/dev-all/logs/admin-api.warboy-20250906-102058.log](#workflow-tools-dev-all-logs-admin-api-warboy-20250906-102058-log)
- [workflow-tools/dev-all/logs/admin-web.warboy-20250901-094629.log](#workflow-tools-dev-all-logs-admin-web-warboy-20250901-094629-log)
- [workflow-tools/dev-all/logs/admin-web.warboy-20250901-184121.log](#workflow-tools-dev-all-logs-admin-web-warboy-20250901-184121-log)
- [workflow-tools/dev-all/logs/admin-web.warboy-20250906-102058.log](#workflow-tools-dev-all-logs-admin-web-warboy-20250906-102058-log)
- [workflow-tools/dev-all/logs/chat-server.warboy-20250901-094629.log](#workflow-tools-dev-all-logs-chat-server-warboy-20250901-094629-log)
- [workflow-tools/dev-all/logs/chat-server.warboy-20250901-184121.log](#workflow-tools-dev-all-logs-chat-server-warboy-20250901-184121-log)
- [workflow-tools/dev-all/logs/chat-server.warboy-20250906-102058.log](#workflow-tools-dev-all-logs-chat-server-warboy-20250906-102058-log)
- [workflow-tools/dev-all/logs/game-server.warboy-20250901-094629.log](#workflow-tools-dev-all-logs-game-server-warboy-20250901-094629-log)
- [workflow-tools/dev-all/logs/game-server.warboy-20250901-184121.log](#workflow-tools-dev-all-logs-game-server-warboy-20250901-184121-log)
- [workflow-tools/dev-all/logs/game-server.warboy-20250906-102058.log](#workflow-tools-dev-all-logs-game-server-warboy-20250906-102058-log)
- [workflow-tools/dev-all/logs/game-web.warboy-20250901-094629.log](#workflow-tools-dev-all-logs-game-web-warboy-20250901-094629-log)
- [workflow-tools/dev-all/logs/game-web.warboy-20250901-184121.log](#workflow-tools-dev-all-logs-game-web-warboy-20250901-184121-log)
- [workflow-tools/dev-all/logs/game-web.warboy-20250906-102058.log](#workflow-tools-dev-all-logs-game-web-warboy-20250906-102058-log)
- [workflow-tools/dev-all/logs/packages-watch.warboy-20250901-094629.log](#workflow-tools-dev-all-logs-packages-watch-warboy-20250901-094629-log)
- [workflow-tools/dev-all/logs/packages-watch.warboy-20250901-184121.log](#workflow-tools-dev-all-logs-packages-watch-warboy-20250901-184121-log)
- [workflow-tools/dev-all/logs/packages-watch.warboy-20250906-102058.log](#workflow-tools-dev-all-logs-packages-watch-warboy-20250906-102058-log)
- [workflow-tools/dev-tmux.sh](#workflow-tools-dev-tmux-sh)
- [workflow-tools/devserver-wizard.sh](#workflow-tools-devserver-wizard-sh)
- [workflow-tools/git/gitready.sh](#workflow-tools-git-gitready-sh)
- [workflow-tools/proj_digestr/helpers/args.sh](#workflow-tools-proj-digestr-helpers-args-sh)
- [workflow-tools/proj_digestr/helpers/config.sh](#workflow-tools-proj-digestr-helpers-config-sh)
- [workflow-tools/proj_digestr/helpers/emit.sh](#workflow-tools-proj-digestr-helpers-emit-sh)
- [workflow-tools/proj_digestr/helpers/fs.sh](#workflow-tools-proj-digestr-helpers-fs-sh)
- [workflow-tools/proj_digestr/helpers/git.sh](#workflow-tools-proj-digestr-helpers-git-sh)
- [workflow-tools/proj_digestr/helpers/lang.sh](#workflow-tools-proj-digestr-helpers-lang-sh)
- [workflow-tools/proj_digestr/helpers/log.sh](#workflow-tools-proj-digestr-helpers-log-sh)
- [workflow-tools/proj_digestr/main.sh](#workflow-tools-proj-digestr-main-sh)
- [workflow-tools/proj_digestr/project_bundle.sh.bak](#workflow-tools-proj-digestr-project-bundle-sh-bak)
- [workflow-tools/rebuild-rerun.sh](#workflow-tools-rebuild-rerun-sh)
- [workflow-tools/warboyctl/VERSION](#workflow-tools-warboyctl-version)
- [workflow-tools/warboyctl/routines/deadends.sh](#workflow-tools-warboyctl-routines-deadends-sh)
- [workflow-tools/warboyctl/routines/doctor.sh](#workflow-tools-warboyctl-routines-doctor-sh)
- [workflow-tools/warboyctl/routines/orphans.sh](#workflow-tools-warboyctl-routines-orphans-sh)
- [workflow-tools/warboyctl/routines/route-link-check.sh](#workflow-tools-warboyctl-routines-route-link-check-sh)
- [workflow-tools/warboyctl/sensors/_lib.sh](#workflow-tools-warboyctl-sensors-lib-sh)
- [workflow-tools/warboyctl/sensors/envvars.sh](#workflow-tools-warboyctl-sensors-envvars-sh)
- [workflow-tools/warboyctl/sensors/lockfile.sh](#workflow-tools-warboyctl-sensors-lockfile-sh)
- [workflow-tools/warboyctl/sensors/ports.sh](#workflow-tools-warboyctl-sensors-ports-sh)
- [workflow-tools/warboyctl/sensors/tsconfig.sh](#workflow-tools-warboyctl-sensors-tsconfig-sh)
- [workflow-tools/warboyctl/warboyctl.sh](#workflow-tools-warboyctl-warboyctl-sh)

### .env.example

<a id="env-example"></a>
===== FILE START =====
Path: .env.example
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/.env.example
Bytes: 194  Lines: 12  Modified: 2025-08-31T23:32:07Z
SHA256: 43770687393d0ad805d6625866be7967d360be9de904359aa5e34420660af016   Language: dotenv   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```dotenv
```
===== FILE END =====

### .gitattributes

<a id="gitattributes"></a>
===== FILE START =====
Path: .gitattributes
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/.gitattributes
Bytes: 133  Lines: 9  Modified: 2025-08-30T13:53:41Z
SHA256: 833f9164c3d1f21b0467ccdd68cecbad9a6292b98b5608c8b9eb33d13c4f7556   Language: plain   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```
* text=auto eol=lf

# treat images/binaries correctly
*.png binary
*.jpg binary
*.jpeg binary
*.gif binary
*.ico binary
*.pdf binary
```
===== FILE END =====

### .github/workflows/ci.yml

<a id="github-workflows-ci-yml"></a>
===== FILE START =====
Path: .github/workflows/ci.yml
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/.github/workflows/ci.yml
Bytes: 609  Lines: 30  Modified: 2025-08-30T14:00:38Z
SHA256: 151bfe8558b39a33a5041b80ef1262f510fccebe06f58c5e38981eba49738236   Language: yaml   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```yaml
name: CI

on:
  push:
    branches: [ main ]
  pull_request:
  workflow_dispatch:

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: actions/setup-node@v4
        with:
          node-version: '18'   # matches your local 18.20.x
          cache: 'npm'

      - run: npm ci

      # Build each workspace you used locally
      - run: npm run -w @warboy/chat build
      - run: npm run -w @warboy/net build
      - run: npm run -w game-server build
      - run: npm run -w game-web build
```
===== FILE END =====

### .gitignore

<a id="gitignore"></a>
===== FILE START =====
Path: .gitignore
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/.gitignore
Bytes: 454  Lines: 33  Modified: 2025-09-01T01:06:42Z
SHA256: a47e79461671b0ebd4cfdb28e39c697c70e3cbaf85c7eb4d0be1f18fc1654f1f   Language: plain   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```
# node & build
node_modules/
dist/
*.tsbuildinfo
/data
# compiled artifacts accidentally living next to TS (we'll clean later)
apps/**/src/**/*.js
apps/**/src/**/*.d.ts
apps/**/src/**/*.js.map

# env & logs
.env
.env.*
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*

# editors / OS
.DS_Store
.vscode/
.idea/
workflow-tools/dev-all/logs/
*.latest.log
.web_hud.pid
.web_hud.out.log
.web_hud.err.log
**/dist/
tsconfig.tsbuildinfo


.turbo/

```
===== FILE END =====

### .npmrc

<a id="npmrc"></a>
===== FILE START =====
Path: .npmrc
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/.npmrc
Bytes: 31  Lines: 1  Modified: 2025-08-30T22:07:42Z
SHA256: db76d9463c8faee134cfe37df5d143ab426b65a9ba507251073dd7424c92af7b   Language: plain   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```
prefer-workspace-packages=true
```
===== FILE END =====

### BETA.md

<a id="beta-md"></a>
===== FILE START =====
Path: BETA.md
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/BETA.md
Bytes: 235447  Lines: 7538  Modified: 2025-08-15T04:21:02Z
SHA256: 6b6302a767843716bbad94d85e54d5d74f80f313416af1949ec2c664f894bf97   Language: md   Role: source
Summary: Truncated preview; file exceeds 999 lines.

-----8<----- CONTENT -----8<-----
```md
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

…
# [omitted middle: 6872 lines]
…

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

```
===== FILE END =====

### README.md

<a id="readme-md"></a>
===== FILE START =====
Path: README.md
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/README.md
Bytes: 2991  Lines: 123  Modified: 2025-09-06T15:44:48Z
SHA256: f66db8c54878a4b86747130b4c1b4af80d4cc9d6b5977ba902f5ecbcb57fc10a   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
# warboy

Monorepo for the Warboy project.

## Quick Start

```bash
git clone <this-repo>
cd warboy

# install system deps + npm workspaces (Fedora helper)
./workflow-tools/dev-all/bootstrap-fedora.sh

# install JS deps
npm i

# launch everything (tmux + servers + HUD)
npm run up
```

Once running:

- Game Web: http://localhost:5175/
- HUD Logs: http://localhost:5599/

Control:

```bash
npm run status
npm run stop
```

## Workspaces

- `apps/game-server`
- `apps/game-web`
- `apps/admin-api`
- `apps/admin-web`
- `apps/auth-api`
- `apps/towns-bot`
- Shared packages under `packages/*`

## Development

Run specific services during local dev:

```bash
npm run dev:server   # game-server
npm run dev:web      # game-web
npm run dev:data     # data API
```

Tmux helpers:

```bash
npm run dev:tmux     # dev pane layout
npm run dev:all      # alt entry if you need it
```

## Project Bundle (for ChatGPT accuracy)

This repo ships a **Project Bundle** generator (`workflow-tools/proj_digestr`).  
The bundle (`PROJECT_BUNDLE.md` at repo root) is an AI-friendly snapshot: text contents, Git links, and truncated previews for large files. **Keeping this file fresh improves answer quality on ChatGPT.com.**

Generate and verify:

```bash
# regenerate the bundle at repo root
npm run digestr

# show filesystem mtime (local TZ)
npm run digestr:when

# show the internal "Generated:" line (UTC ISO)
npm run digestr:genline

# check freshness relative to the latest Git commit
npm run digestr:check
```

Optional variants:

```bash
npm run digestr:fast   # stricter excludes, faster
npm run digestr:full   # larger previews
npm run digestr:no-git # skip git URL resolution
```

> Tip: If your shell profile prints noisy banners (e.g., toolchains) during scripts, you can harden the scripts to use a clean shell (`bash --noprofile --norc -lc '…'`).

## Backup Utilities

Lightweight snapshot helpers live in `workflow-tools/backupr`:

```bash
npm run backup        # interactive wizard
npm run backup:quick  # quick backup to $HOME/backups/warboy
npm run backup:dry    # dry-run
```

## Ports

- Game Web: `5175`
- HUD (logs): `5599`

If a port is stuck, `npm run up` will attempt to free common ports before launching.

## Troubleshooting

- **Everything builds but nothing opens**  
  Visit HUD directly: http://localhost:5599/ and check panes/logs.

- **Bundle looks stale**  
  Run `npm run digestr` and then `npm run digestr:check`. If still “STALE,” commit order or local clock skew may be the cause. Re-run after your next commit.

- **ESP-IDF or other toolchain banners appear during scripts**  
  Your shell profile is executing. Consider adjusting your profile to be non-interactive by default, or update the npm scripts to invoke `bash --noprofile --norc`.

## Conventions

- Use `npm run up` as the primary entrypoint.  
- Keep `PROJECT_BUNDLE.md` updated when making non-trivial changes.  
- Prefer workspace scripts (`npm --workspace <path> run <script>`) for targeted tasks.
```
===== FILE END =====

### apps/admin-api/package.json

<a id="apps-admin-api-package-json"></a>
===== FILE START =====
Path: apps/admin-api/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-api/package.json
Bytes: 244  Lines: 11  Modified: 2025-08-30T23:03:38Z
SHA256: ae0754c3392d79d8520307a2a432226310b641dbac33c45040165601824d1f98   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/admin-api",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js"
  },
  "dependencies": {}
}```
===== FILE END =====

### apps/admin-api/src/index.js

<a id="apps-admin-api-src-index-js"></a>
===== FILE START =====
Path: apps/admin-api/src/index.js
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-api/src/index.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-api/src/index.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-api/tsconfig.json
Bytes: 272  Lines: 14  Modified: 2025-08-30T23:03:38Z
SHA256: d0874e7d67871cd43d64a46d6e483438f335c0635ada991c1ecb45c43e6eba41   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": [
    "src/**/*.ts"
  ]
}```
===== FILE END =====

### apps/admin-web/.env.local

<a id="apps-admin-web-env-local"></a>
===== FILE START =====
Path: apps/admin-web/.env.local
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/.env.local
Bytes: 135  Lines: 6  Modified: 2025-08-28T23:12:45Z
SHA256: 23f133ec0090c7c45cba0298af21aff6a2c9288e6e1a31fa86f8ff3ccda92631   Language: dotenv   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```dotenv
# Generated by devserver-wizard.sh
VITE_HOST=127.0.0.1
VITE_PORT=5175
VITE_HMR_HOST=192.168.30.69
VITE_HMR_PROTO=ws
VITE_HMR_PORT=5175
```
===== FILE END =====

### apps/admin-web/index.html

<a id="apps-admin-web-index-html"></a>
===== FILE START =====
Path: apps/admin-web/index.html
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/index.html
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/package.json
Bytes: 244  Lines: 11  Modified: 2025-08-30T23:03:38Z
SHA256: 52c0c3cab8f7b846d891598e1abdbdb1e309832650872189038c18aad12a3a00   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/admin-web",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js"
  },
  "dependencies": {}
}```
===== FILE END =====

### apps/admin-web/src/App.js

<a id="apps-admin-web-src-app-js"></a>
===== FILE START =====
Path: apps/admin-web/src/App.js
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/src/App.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/src/App.tsx
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/src/main.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/src/main.tsx
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/tsconfig.json
Bytes: 272  Lines: 14  Modified: 2025-08-30T23:03:38Z
SHA256: d0874e7d67871cd43d64a46d6e483438f335c0635ada991c1ecb45c43e6eba41   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "compilerOptions": {
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": [
    "src/**/*.ts"
  ]
}```
===== FILE END =====

### apps/admin-web/vite.config.js

<a id="apps-admin-web-vite-config-js"></a>
===== FILE START =====
Path: apps/admin-web/vite.config.js
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/vite.config.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/admin-web/vite.config.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/routes/login.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/routes/login.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/routes/nonce.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/routes/nonce.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/routes/siwe.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/routes/siwe.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/server.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/server.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/services/jwt.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/services/jwt.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/services/signer.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/services/signer.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/store/nonces.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/auth-api/src/store/nonces.ts
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### apps/chat-server/.env

<a id="apps-chat-server-env"></a>
===== FILE START =====
Path: apps/chat-server/.env
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/.env
Bytes: 328  Lines: 15  Modified: 2025-08-30T19:45:13Z
SHA256: 83cb5f5c7be75ff07ad2fde9b42ee80d2bf09fbed475efb28ee254771f3cb8d9   Language: dotenv   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```dotenv
# WebSocket port
CHAT_PORT=8790

# Where to write NDJSON chat logs per room
CHAT_DATA_DIR=./data/chat

# How many history messages to send on join/hello
CHAT_HISTORY_LIMIT=200

# WebSocket ping interval (ms)
CHAT_PING_INTERVAL_MS=15000

# Simple rate limit for chat/send
CHAT_RATE_LIMIT_COUNT=10
CHAT_RATE_LIMIT_WINDOW_MS=10000
```
===== FILE END =====

### apps/chat-server/.env.example

<a id="apps-chat-server-env-example"></a>
===== FILE START =====
Path: apps/chat-server/.env.example
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/.env.example
Bytes: 328  Lines: 15  Modified: 2025-08-30T19:41:22Z
SHA256: 83cb5f5c7be75ff07ad2fde9b42ee80d2bf09fbed475efb28ee254771f3cb8d9   Language: dotenv   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```dotenv
```
===== FILE END =====

### apps/chat-server/.gitignore

<a id="apps-chat-server-gitignore"></a>
===== FILE START =====
Path: apps/chat-server/.gitignore
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/.gitignore
Bytes: 31  Lines: 4  Modified: 2025-08-30T19:41:08Z
SHA256: 1fa41a7ff9630c911f18c372a3553eb0d847e2cc47ac540b6304e03439841b41   Language: plain   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```
dist/
node_modules/
data/
.env
```
===== FILE END =====

### apps/chat-server/README.md

<a id="apps-chat-server-readme-md"></a>
===== FILE START =====
Path: apps/chat-server/README.md
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/README.md
Bytes: 736  Lines: 36  Modified: 2025-08-30T19:42:00Z
SHA256: a31de2e51267ec2aa499364f71f8b4727de1c6137512b7a98df5ec816d253a16   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
# @warboy/chat-server

Minimal WS chat server with file-backed storage.

## Protocol

- client → `{ "t":"hello", "name":string, "room"?:string }`
- client → `{ "t":"chat/send", "text":string, "room"?:string }`
- server ← `{ "t":"chat/history", "room":string, "messages":ChatMsg[] }`
- server ← `{ "t":"chat/recv", "msg":ChatMsg }`

Health: `GET /healthz` → `200 ok`
Metrics: `GET /metrics` → basic counters (text)

## Dev

```bash
cp .env.example .env
npm i
npm run dev
npm run build
npm start

Env

CHAT_PORT (default 8790)

CHAT_DATA_DIR (default ./data/chat)

CHAT_HISTORY_LIMIT (default 200)

CHAT_PING_INTERVAL_MS (default 15000)

CHAT_RATE_LIMIT_COUNT (default 10 in window)

CHAT_RATE_LIMIT_WINDOW_MS (default 10000)
```
===== FILE END =====

### apps/chat-server/data/chat/dev.ndjson

<a id="apps-chat-server-data-chat-dev-ndjson"></a>
===== FILE START =====
Path: apps/chat-server/data/chat/dev.ndjson
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/data/chat/dev.ndjson
Bytes: 137  Lines: 1  Modified: 2025-08-30T19:59:04Z
SHA256: a09268ab906ea2c03b1d321f941e6832279afcf4fb45ea4d28467bdaed07f066   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{"id":"IaPDGdeTe4Qov_-dFdTQj","room":"dev","from":{"id":"0rTLlcyXX4-DGJisEkCoJ","name":"anon"},"text":"to #dev room","ts":1756583944040}
```
===== FILE END =====

### apps/chat-server/data/chat/global.ndjson

<a id="apps-chat-server-data-chat-global-ndjson"></a>
===== FILE START =====
Path: apps/chat-server/data/chat/global.ndjson
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/data/chat/global.ndjson
Bytes: 1673  Lines: 12  Modified: 2025-08-30T20:00:18Z
SHA256: e28073f238bfdae5efaa71c182b32f97779fb81ae913963cd4dcb708c024d82c   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{"id":"khmiNE02kvNKf2wJ45H2t","room":"global","from":{"id":"0OjDL2Fsw28Z0jfkTGzxx","name":"anon"},"text":"hello from wscat","ts":1756583924148}
{"id":"pJ2zsMOSQpiToOKFArKdc","room":"global","from":{"id":"wXcJ-SNqGH5NfshDHz-hd","name":"node-e"},"text":"hello from node -e","ts":1756583995802}
{"id":"6dS5k3xNv36DCEL-sQSaF","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 1","ts":1756584018584}
{"id":"Nqw9fM-6qJ79eufcD846B","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 2","ts":1756584018585}
{"id":"RLfJK656qe_INQlH97Xlq","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 3","ts":1756584018585}
{"id":"TuDsi4E_pkXEgdF87L74m","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 4","ts":1756584018585}
{"id":"-cRrSLprGj7pqlunWJqC9","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 5","ts":1756584018585}
{"id":"arg50lMuIJSq_zuQyaOjR","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 6","ts":1756584018585}
{"id":"Ad9MMcBconAMJVYrcvqYl","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 7","ts":1756584018585}
{"id":"aRS1v2qISyrPaVCJwJBom","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 8","ts":1756584018585}
{"id":"pPe0l8O-k01fIkHKOZGUm","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 9","ts":1756584018585}
{"id":"gGkpKoAXuMMr4wgcWfoXd","room":"global","from":{"id":"ZtlRrc-ub1542UH_wnICy","name":"sprayer"},"text":"burst 10","ts":1756584018585}
```
===== FILE END =====

### apps/chat-server/package.json

<a id="apps-chat-server-package-json"></a>
===== FILE START =====
Path: apps/chat-server/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/package.json
Bytes: 490  Lines: 22  Modified: 2025-08-30T23:03:38Z
SHA256: 71a0d5d0a5acc5680a533137502329365ce702cd8d275af0114eb530bb6b9690   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/chat-server",
  "private": true,
  "version": "0.1.0",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "nanoid": "^5.0.7",
    "ws": "^8.18.0",
    "@warboy/chat": "0.0.0",
    "@warboy/net": "0.0.0",
    "@warboy/overlays": "0.0.0",
    "@warboy/world": "0.0.0"
  },
  "devDependencies": {
    "tsx": "^4.15.7",
    "typescript": "^5.6.3"
  }
}```
===== FILE END =====

### apps/chat-server/src/config.ts

<a id="apps-chat-server-src-config-ts"></a>
===== FILE START =====
Path: apps/chat-server/src/config.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/src/config.ts
Bytes: 434  Lines: 12  Modified: 2025-08-30T19:42:27Z
SHA256: 88f7c0936aa7693244e180fdcb54a51f0cf0d334f1b8c4c4b9d773e1a7cf2330   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { join } from "path";

export const cfg = {
port: Number(process.env.CHAT_PORT ?? 8790),
dataDir: process.env.CHAT_DATA_DIR ?? join(process.cwd(), "data", "chat"),
historyLimit: Number(process.env.CHAT_HISTORY_LIMIT ?? 200),
pingIntervalMs: Number(process.env.CHAT_PING_INTERVAL_MS ?? 15000),
rate: {
count: Number(process.env.CHAT_RATE_LIMIT_COUNT ?? 10),
windowMs: Number(process.env.CHAT_RATE_LIMIT_WINDOW_MS ?? 10000)
}
};
```
===== FILE END =====

### apps/chat-server/src/index.ts

<a id="apps-chat-server-src-index-ts"></a>
===== FILE START =====
Path: apps/chat-server/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/src/index.ts
Bytes: 4201  Lines: 156  Modified: 2025-08-30T19:51:43Z
SHA256: 9fd009e1a3395ec594ff16696c05125895e87067cd77ab7b48be23c172a2ffe6   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { createServer } from "http";
import { WebSocketServer, WebSocket } from "ws";
import { nanoid } from "nanoid";
import { cfg } from "./config";
import { FileStore } from "./store/file";
import type { ChatMsg, Wire } from "./types";
import { log, warn } from "./logger";
import { join } from "path";

const store = new FileStore(cfg.dataDir);

type Client = {
  id: string;
  name: string;
  room: string;
  ws: WebSocket;
  isAlive: boolean;
  rl: { tokens: number; last: number };
};

const rooms = new Map<string, Set<Client>>();
const clients = new WeakMap<WebSocket, Client>();

const now = () => Date.now();

function joinRoom(c: Client, room: string) {
  if (c.room) rooms.get(c.room)?.delete(c);
  c.room = room;
  if (!rooms.has(room)) rooms.set(room, new Set());
  rooms.get(room)!.add(c);
}

function broadcast(room: string, payload: unknown) {
  const set = rooms.get(room);
  if (!set) return;
  for (const c of set) {
    if (c.ws.readyState === WebSocket.OPEN) {
      c.ws.send(JSON.stringify(payload));
    }
  }
}

function allowSend(c: Client) {
  // simple token bucket: refill by window
  const t = now();
  const elapsed = t - c.rl.last;
  if (elapsed >= cfg.rate.windowMs) {
    const windows = Math.floor(elapsed / cfg.rate.windowMs);
    c.rl.tokens = Math.min(cfg.rate.count, c.rl.tokens + windows * cfg.rate.count);
    c.rl.last = t - (elapsed % cfg.rate.windowMs);
  }
  if (c.rl.tokens > 0) {
    c.rl.tokens -= 1;
    return true;
  }
  return false;
}

const http = createServer((req, res) => {
  if (!req.url) { res.statusCode = 404; return res.end(); }
  if (req.url.startsWith("/healthz")) return res.end("ok");
  if (req.url.startsWith("/metrics")) {
    const roomsCount = rooms.size;
    let clientsCount = 0;
    for (const s of rooms.values()) clientsCount += s.size;
    res.setHeader("content-type","text/plain; charset=utf-8");
    res.end(
      `rooms ${roomsCount}\nclients ${clientsCount}\n` +
      `data_dir ${join(cfg.dataDir,"")}\n`
    );
    return;
  }
  res.statusCode = 404;
  res.end("not found");
});

const wss = new WebSocketServer({ server: http });

wss.on("connection", (ws) => {
  const c: Client = {
    id: nanoid(),
    name: "anon",
    room: "global",
    ws,
    isAlive: true,
    rl: { tokens: cfg.rate.count, last: now() }
  };
  clients.set(ws, c);
  joinRoom(c, c.room);

  // initial history
  ws.send(JSON.stringify({ t: "chat/history", room: c.room, messages: store.history(c.room, cfg.historyLimit) }));

  ws.on("pong", () => (c.isAlive = true));

  ws.on("message", (buf) => {
    let msg: Wire | undefined;
    try {
      msg = JSON.parse(String(buf));
    } catch {
      return;
    }

    if (msg.t === "hello") {
      if (msg.name) c.name = String(msg.name).slice(0, 64);
      if (msg.room && msg.room !== c.room) {
        joinRoom(c, String(msg.room).slice(0, 64));
      }
      ws.send(JSON.stringify({ t: "chat/history", room: c.room, messages: store.history(c.room, cfg.historyLimit) }));
      return;
    }

    if (msg.t === "chat/send") {
      if (!allowSend(c)) return; // over limit
      const text = String(msg.text ?? "").slice(0, 2000);
      if (!text.trim()) return;
      const room = msg.room ? String(msg.room).slice(0, 64) : c.room;
      const chatMsg: ChatMsg = {
        id: nanoid(),
        room,
        from: { id: c.id, name: c.name },
        text,
        ts: Date.now()
      };
      store.append(room, chatMsg);
      broadcast(room, { t: "chat/recv", msg: chatMsg });
      return;
    }
  });

  ws.on("close", () => {
    rooms.get(c.room)?.delete(c);
  });
});

const iv = setInterval(() => {
  for (const s of rooms.values()) {
    for (const c of s) {
      if (!c.isAlive) {
        warn("stale client, terminating", c.id);
        try { c.ws.terminate(); } catch {}
        s.delete(c);
        continue;
      }
      c.isAlive = false;
      try { c.ws.ping(); } catch {}
    }
  }
}, cfg.pingIntervalMs).unref();

http.listen(cfg.port, () => {
  log(`chat-server :${cfg.port}`);
});

process.on("SIGINT", () => { clearInterval(iv); http.close(() => process.exit(0)); });
process.on("SIGTERM", () => { clearInterval(iv); http.close(() => process.exit(0)); });
```
===== FILE END =====

### apps/chat-server/src/logger.ts

<a id="apps-chat-server-src-logger-ts"></a>
===== FILE START =====
Path: apps/chat-server/src/logger.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/src/logger.ts
Bytes: 244  Lines: 4  Modified: 2025-08-30T19:42:41Z
SHA256: c978d51967d064f45e49afda39f2e792248eba85a3d2ebe7a882a41246fe9003   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
const stamp = () => new Date().toISOString();
export const log = (...a: any[]) => console.log(stamp(), ...a);
export const warn = (...a: any[]) => console.warn(stamp(), ...a);
export const error = (...a: any[]) => console.error(stamp(), ...a);
```
===== FILE END =====

### apps/chat-server/src/store/file.ts

<a id="apps-chat-server-src-store-file-ts"></a>
===== FILE START =====
Path: apps/chat-server/src/store/file.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/src/store/file.ts
Bytes: 1200  Lines: 38  Modified: 2025-08-30T19:51:16Z
SHA256: 599eea2b845a5952972234a94042a254db16cf93537b1e25715e218f26927f6b   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { existsSync, mkdirSync, readFileSync, appendFileSync } from "fs";
import { dirname, join } from "path";
import type { ChatMsg } from "../types";

export interface ChatStore {
  append(room: string, msg: ChatMsg): void;
  history(room: string, limit?: number): ChatMsg[];
}

function safeRoom(room: string) {
  return room.replace(/[^a-zA-Z0-9._-]/g, "_");
}

export class FileStore implements ChatStore {
  constructor(private root: string) {}
  private fileFor(room: string) {
    return join(this.root, `${safeRoom(room)}.ndjson`);
  }
  append(room: string, msg: ChatMsg) {
    const file = this.fileFor(room);
    const dir = dirname(file);
    if (!existsSync(dir)) mkdirSync(dir, { recursive: true });
    appendFileSync(file, JSON.stringify(msg) + "\n", "utf8");
  }
  history(room: string, limit = 200): ChatMsg[] {
    const file = this.fileFor(room);
    if (!existsSync(file)) return [];
    const raw = readFileSync(file, "utf8");
    if (!raw) return [];
    const lines = raw.split("\n").filter(Boolean);
    const tail = lines.slice(-limit);
    const out: ChatMsg[] = [];
    for (const l of tail) {
      try { out.push(JSON.parse(l)); } catch {}
    }
    return out;
  }
}
```
===== FILE END =====

### apps/chat-server/src/store/memory.ts

<a id="apps-chat-server-src-store-memory-ts"></a>
===== FILE START =====
Path: apps/chat-server/src/store/memory.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/src/store/memory.ts
Bytes: 446  Lines: 15  Modified: 2025-08-30T19:51:27Z
SHA256: 0b5b438d4073acd0744213544ab69e027685d2aa8a956cbb2c9c442e5708ad8a   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { ChatMsg } from "../types";
import type { ChatStore } from "./file";

export class MemoryStore implements ChatStore {
  private rooms = new Map<string, ChatMsg[]>();
  append(room: string, msg: ChatMsg) {
    const arr = this.rooms.get(room) ?? [];
    arr.push(msg);
    this.rooms.set(room, arr);
  }
  history(room: string, limit = 200): ChatMsg[] {
    const arr = this.rooms.get(room) ?? [];
    return arr.slice(-limit);
  }
}
```
===== FILE END =====

### apps/chat-server/src/types.ts

<a id="apps-chat-server-src-types-ts"></a>
===== FILE START =====
Path: apps/chat-server/src/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/src/types.ts
Bytes: 247  Lines: 11  Modified: 2025-08-30T19:51:02Z
SHA256: ad824a4674825a1f022492759d5a3845623e5111a5e1e51248530bf0b716c330   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type ChatMsg = {
  id: string;
  room: string;
  from: { id: string; name?: string };
  text: string;
  ts: number;
};

export type Wire =
  | { t: "hello"; name: string; room?: string }
  | { t: "chat/send"; text: string; room?: string };
```
===== FILE END =====

### apps/chat-server/tsconfig.json

<a id="apps-chat-server-tsconfig-json"></a>
===== FILE START =====
Path: apps/chat-server/tsconfig.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/chat-server/tsconfig.json
Bytes: 331  Lines: 16  Modified: 2025-08-30T23:03:38Z
SHA256: 3c7b8f1bcf6f2443acd85e199b497a8bb0a005fd38d5d5dc032c99f291fa6710   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "moduleResolution": "NodeNext"
  },
  "include": [
    "src"
  ]
}```
===== FILE END =====

### apps/data-api/README.md

<a id="apps-data-api-readme-md"></a>
===== FILE START =====
Path: apps/data-api/README.md
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/README.md
Bytes: 834  Lines: 32  Modified: 2025-09-01T06:48:24Z
SHA256: 5547023df1ad500ef1439d3a094d25c7ecfc894b03fef174b725c6bc89e5f716   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
# data-api

Domain brain for world/towns/markets. HTTP + WebSocket.

## Run (dev)
npm --workspace apps/data-api run dev

## Health
curl http://127.0.0.1:8801/health

## Create town
curl -X POST http://127.0.0.1:8801/towns -H 'content-type: application/json' -d '{
  "id":"t-omega",
  "name":"Omega",
  "owner":"p-alex",
  "origin":{"x":9909090009,"y":73924606234560}
}'

## Add a building
curl -X POST http://127.0.0.1:8801/towns/t-omega/buildings -H 'content-type: application/json' -d '{
  "id":"b-1","kind":"warehouse","at":{"x":9909090010,"y":73924606234580},"level":1
}'

## WS subscribe
# in another shell:
node -e "
  const WS=require('ws');
  const ws=new WS('ws://127.0.0.1:8801/ws');
  ws.on('open', ()=>ws.send(JSON.stringify({type:'sub', topic:'towns.t-omega'})));
  ws.on('message', m=>console.log('WS:', String(m)));
"

```
===== FILE END =====

### apps/data-api/package.json

<a id="apps-data-api-package-json"></a>
===== FILE START =====
Path: apps/data-api/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/package.json
Bytes: 660  Lines: 24  Modified: 2025-09-01T06:41:28Z
SHA256: 8ba967bb7168ceadbe42526b363a4ba8213e0177a7962378601296df3a0ed1ba   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/data-api",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/server.ts",
    "build": "tsc -p tsconfig.json",
    "typecheck": "tsc -p tsconfig.json --noEmit",
    "start": "node dist/server.js",
    "health": "node -e \"fetch('http://127.0.0.1:'+ (process.env.DATA_API_PORT||8801) +'/health').then(r=>r.text()).then(console.log).catch(e=>{console.error(e);process.exit(1)});\""
  },
  "dependencies": {
    "zod": "^3.23.8",
    "ws": "^8.17.0",
    "itty-router": "^4.2.2"
  },
  "devDependencies": {
    "tsx": "^4.20.5",
    "typescript": "^5.9.2",
    "@types/ws": "^8.5.10"
  }
}

```
===== FILE END =====

### apps/data-api/src/config.ts

<a id="apps-data-api-src-config-ts"></a>
===== FILE START =====
Path: apps/data-api/src/config.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/config.ts
Bytes: 165  Lines: 5  Modified: 2025-09-01T06:41:46Z
SHA256: 32f520ea42ba4d1b881771b9d4b54654972fd935b532f540bec12ced45ada865   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export const DATA_API_PORT = parseInt(process.env.DATA_API_PORT || "8801", 10);

// future flags
export const ENABLE_WS = (process.env.DATA_API_WS ?? "1") === "1";

```
===== FILE END =====

### apps/data-api/src/domain/events/types.ts

<a id="apps-data-api-src-domain-events-types-ts"></a>
===== FILE START =====
Path: apps/data-api/src/domain/events/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/domain/events/types.ts
Bytes: 0  Lines: 0  Modified: 2025-09-01T06:39:55Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### apps/data-api/src/domain/players/service.ts

<a id="apps-data-api-src-domain-players-service-ts"></a>
===== FILE START =====
Path: apps/data-api/src/domain/players/service.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/domain/players/service.ts
Bytes: 0  Lines: 0  Modified: 2025-09-01T06:39:55Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### apps/data-api/src/domain/players/types.ts

<a id="apps-data-api-src-domain-players-types-ts"></a>
===== FILE START =====
Path: apps/data-api/src/domain/players/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/domain/players/types.ts
Bytes: 0  Lines: 0  Modified: 2025-09-01T06:39:55Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### apps/data-api/src/domain/towns/service.ts

<a id="apps-data-api-src-domain-towns-service-ts"></a>
===== FILE START =====
Path: apps/data-api/src/domain/towns/service.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/domain/towns/service.ts
Bytes: 2151  Lines: 64  Modified: 2025-09-01T06:42:50Z
SHA256: c8680d2718b181c38f7d46de392bf3402207ccab187b17894804ca6c9e054fde   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Town, Building, Farm, PlayerId, TownId } from "./types";
import { regionFor } from "../world/util";
import type { Store } from "../../store";
import { createTownZ, createBuildingZ, createFarmZ } from "./validators";

export class TownService {
  constructor(private store: Store, private publish?: (topic: string, ev: any)=>void) {}

  listByRegion(rx: string) {
    const ids = this.store.byRegion.get(rx) ?? new Set();
    return [...ids].map(id => this.store.towns.get(id)).filter(Boolean) as Town[];
  }

  get(id: TownId) {
    return this.store.towns.get(id) as Town | undefined;
  }

  create(input: unknown) {
    const args = createTownZ.parse(input);
    if (this.store.towns.has(args.id)) throw new Error("town exists");
    const now = Date.now();
    const t: Town = {
      id: args.id,
      name: args.name,
      owner: args.owner as PlayerId,
      origin: args.origin,
      buildings: [],
      farms: [],
      market: [],
      createdAt: now,
      updatedAt: now
    };
    this.store.towns.set(t.id, t);
    const reg = regionFor(t.origin);
    if (!this.store.byRegion.has(reg)) this.store.byRegion.set(reg, new Set());
    this.store.byRegion.get(reg)!.add(t.id);
    this.publish?.(`towns.${t.id}`, { type: "town.created", town: t });
    this.publish?.(`region.${reg}`, { type: "region.townAdded", townId: t.id });
    return t;
  }

  addBuilding(input: unknown) {
    const { townId, ...rest } = createBuildingZ.parse(input);
    const town = this.get(townId);
    if (!town) throw new Error("town not found");
    const b: Building = { ...rest };
    town.buildings.push(b);
    town.updatedAt = Date.now();
    this.publish?.(`towns.${town.id}`, { type: "town.buildingAdded", building: b, townId: town.id });
    return b;
  }

  addFarm(input: unknown) {
    const { townId, ...rest } = createFarmZ.parse(input);
    const town = this.get(townId);
    if (!town) throw new Error("town not found");
    const f: Farm = { ...rest };
    town.farms.push(f);
    town.updatedAt = Date.now();
    this.publish?.(`towns.${town.id}`, { type: "town.farmAdded", farm: f, townId: town.id });
    return f;
  }
}

```
===== FILE END =====

### apps/data-api/src/domain/towns/types.ts

<a id="apps-data-api-src-domain-towns-types-ts"></a>
===== FILE START =====
Path: apps/data-api/src/domain/towns/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/domain/towns/types.ts
Bytes: 839  Lines: 43  Modified: 2025-09-01T06:42:36Z
SHA256: af952bb016320b7e2157140d84fd6f46ed292d2e2d2b46dc5aa8ff19e995e020   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Coord } from "../world/types";

export type TownId = string;
export type PlayerId = string;

export type BuildingKind = "hut" | "warehouse" | "market-hall" | "forge";
export type InfraKind = "road" | "well" | "bridge" | "power";
export type Crop = "wheat" | "corn" | "beets" | "algae";

export interface Building {
  id: string;
  kind: BuildingKind;
  at: Coord;
  level: number;
}

export interface Farm {
  id: string;
  crop: Crop;
  at: Coord;
  area: number;
  yieldPerTick: number;
}

export interface MarketQuote {
  item: string;
  bid: number;
  ask: number;
  ts: number;
}

export interface Town {
  id: TownId;
  name: string;
  owner: PlayerId;
  origin: Coord;                 // founding location
  buildings: Building[];
  farms: Farm[];
  market: MarketQuote[];
  createdAt: number;
  updatedAt: number;
}

```
===== FILE END =====

### apps/data-api/src/domain/towns/validators.ts

<a id="apps-data-api-src-domain-towns-validators-ts"></a>
===== FILE START =====
Path: apps/data-api/src/domain/towns/validators.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/domain/towns/validators.ts
Bytes: 700  Lines: 27  Modified: 2025-09-01T06:42:43Z
SHA256: 923c38972dc6dfe7915cc0c7f1e4d58b154e6f2c237fa14c53f05728a54f66c1   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { z } from "zod";

export const coordZ = z.object({ x: z.number(), y: z.number() });
export const createTownZ = z.object({
  id: z.string().min(1),
  name: z.string().min(1),
  owner: z.string().min(1),
  origin: coordZ
});

export const createBuildingZ = z.object({
  townId: z.string().min(1),
  id: z.string().min(1),
  kind: z.enum(["hut", "warehouse", "market-hall", "forge"]),
  at: coordZ,
  level: z.number().int().min(1).default(1)
});

export const createFarmZ = z.object({
  townId: z.string().min(1),
  id: z.string().min(1),
  crop: z.enum(["wheat", "corn", "beets", "algae"]),
  at: coordZ,
  area: z.number().positive(),
  yieldPerTick: z.number().nonnegative().default(0)
});

```
===== FILE END =====

### apps/data-api/src/domain/world/types.ts

<a id="apps-data-api-src-domain-world-types-ts"></a>
===== FILE START =====
Path: apps/data-api/src/domain/world/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/domain/world/types.ts
Bytes: 105  Lines: 3  Modified: 2025-09-01T06:42:20Z
SHA256: 86b93a6bf645d941bbb3001a43aea716c7330fa718707c4316a2eb71c322befa   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export type Coord = { x: number; y: number };
export type RegionId = string; // e.g. "reg:99123:-74000"

```
===== FILE END =====

### apps/data-api/src/domain/world/util.ts

<a id="apps-data-api-src-domain-world-util-ts"></a>
===== FILE START =====
Path: apps/data-api/src/domain/world/util.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/domain/world/util.ts
Bytes: 262  Lines: 11  Modified: 2025-09-01T06:42:27Z
SHA256: 1e56f27bdceaeaea896a93dca8ede816f5c74137cc7633dc50fc282b9a699a20   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Coord, RegionId } from "./types";

// Simple region bucketing (tune later)
const SIZE = 2048;

export function regionFor(c: Coord): RegionId {
  const rx = Math.floor(c.x / SIZE);
  const ry = Math.floor(c.y / SIZE);
  return `reg:${rx}:${ry}`;
}

```
===== FILE END =====

### apps/data-api/src/index.ts

<a id="apps-data-api-src-index-ts"></a>
===== FILE START =====
Path: apps/data-api/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/index.ts
Bytes: 628  Lines: 22  Modified: 2025-09-01T06:44:47Z
SHA256: 5619819f2b9950dc02a092eace2c9aca89984c897c481d0a0fd374df9c0250ee   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { Router } from "itty-router";
import { mountHealth } from "./routes/health";
import { mountTowns } from "./routes/towns";
import { mountBuildings } from "./routes/buildings";
import { mountFarms } from "./routes/farms";
import { mountMarkets } from "./routes/markets";
import { TownService } from "./domain/towns/service";
import { db } from "./store/memory";

export function buildApp(publish?: (topic: string, ev: any)=>void) {
  const r = Router();
  const svc = new TownService(db, publish);

  mountHealth(r);
  mountTowns(r, svc);
  mountBuildings(r, svc);
  mountFarms(r, svc);
  mountMarkets(r);

  return r;
}

```
===== FILE END =====

### apps/data-api/src/routes/buildings.ts

<a id="apps-data-api-src-routes-buildings-ts"></a>
===== FILE START =====
Path: apps/data-api/src/routes/buildings.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/routes/buildings.ts
Bytes: 502  Lines: 15  Modified: 2025-09-01T06:43:48Z
SHA256: dd7157b61c93c6a70d0458e1cd4ecf6a89f7184a6abfe45db172098c2b9e18b0   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Router } from "itty-router";
import { TownService } from "../domain/towns/service";

export function mountBuildings(r: Router, svc: TownService) {
  r.post("/towns/:id/buildings", async (req) => {
    const townId = req.params!.id;
    const body = await req.json().catch(() => ({}));
    try {
      return Response.json(svc.addBuilding({ townId, ...body }), { status: 201 });
    } catch (e: any) {
      return new Response(e.message || "bad request", { status: 400 });
    }
  });
}

```
===== FILE END =====

### apps/data-api/src/routes/farms.ts

<a id="apps-data-api-src-routes-farms-ts"></a>
===== FILE START =====
Path: apps/data-api/src/routes/farms.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/routes/farms.ts
Bytes: 490  Lines: 15  Modified: 2025-09-01T06:43:50Z
SHA256: 6a321bbfaa4195df03427fdc8dff59367280b4c13894b4f503c35d6675742d08   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Router } from "itty-router";
import { TownService } from "../domain/towns/service";

export function mountFarms(r: Router, svc: TownService) {
  r.post("/towns/:id/farms", async (req) => {
    const townId = req.params!.id;
    const body = await req.json().catch(() => ({}));
    try {
      return Response.json(svc.addFarm({ townId, ...body }), { status: 201 });
    } catch (e: any) {
      return new Response(e.message || "bad request", { status: 400 });
    }
  });
}

```
===== FILE END =====

### apps/data-api/src/routes/health.ts

<a id="apps-data-api-src-routes-health-ts"></a>
===== FILE START =====
Path: apps/data-api/src/routes/health.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/routes/health.ts
Bytes: 151  Lines: 6  Modified: 2025-09-01T06:43:27Z
SHA256: c068cb75f9776e397745f0c4ae8b02d7c3234a74c37213e26fa572e35ebed193   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Router } from "itty-router";

export function mountHealth(r: Router) {
  r.get("/health", () => new Response("ok", { status: 200 }));
}

```
===== FILE END =====

### apps/data-api/src/routes/markets.ts

<a id="apps-data-api-src-routes-markets-ts"></a>
===== FILE START =====
Path: apps/data-api/src/routes/markets.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/routes/markets.ts
Bytes: 166  Lines: 5  Modified: 2025-09-01T06:43:57Z
SHA256: d681206366791e5b19d11c4962cd84f58e839d731b66f84d828b89a48656448b   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Router } from "itty-router";
export function mountMarkets(r: Router) {
  r.get("/markets/ping", () => Response.json({ ok: true, now: Date.now() }));
}

```
===== FILE END =====

### apps/data-api/src/routes/towns.ts

<a id="apps-data-api-src-routes-towns-ts"></a>
===== FILE START =====
Path: apps/data-api/src/routes/towns.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/routes/towns.ts
Bytes: 719  Lines: 24  Modified: 2025-09-01T06:43:24Z
SHA256: 3468925333f0141c902fcbf711c41f1d3343fdd04fadff891db4f3d7562ae29c   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Router } from "itty-router";
import { TownService } from "../domain/towns/service";

export function mountTowns(r: Router, svc: TownService) {
  r.get("/towns/:id", (req) => {
    const t = svc.get(req.params!.id);
    return t ? Response.json(t) : new Response("not found", { status: 404 });
  });

  r.get("/regions/:reg/towns", (req) => {
    const list = svc.listByRegion(req.params!.reg);
    return Response.json(list);
  });

  r.post("/towns", async (req) => {
    const body = await req.json().catch(() => ({}));
    try {
      return Response.json(svc.create(body), { status: 201 });
    } catch (e: any) {
      return new Response(e.message || "bad request", { status: 400 });
    }
  });
}

```
===== FILE END =====

### apps/data-api/src/server.ts

<a id="apps-data-api-src-server-ts"></a>
===== FILE START =====
Path: apps/data-api/src/server.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/server.ts
Bytes: 651  Lines: 19  Modified: 2025-09-01T06:44:55Z
SHA256: b0bcd116265350c1477ac7ccae638ffd93054f59b9e279a4a66a124d857eddda   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import http from "http";
import { buildApp } from "./index";
import { DATA_API_PORT, ENABLE_WS } from "./config";
import { createBus } from "./ws/bus";

const server = http.createServer(async (req, res) => {
  const r = buildApp(publish);
  const resp = await r.fetch!(req as any, {} as any);
  res.writeHead(resp.status, Object.fromEntries(resp.headers as any));
  const buf = Buffer.from(await resp.arrayBuffer());
  res.end(buf);
});

const { publish } = ENABLE_WS ? createBus(server) : { publish: (_t: string, _e: any) => {} };

server.listen(DATA_API_PORT, "127.0.0.1", () => {
  console.log(`[data-api] http://127.0.0.1:${DATA_API_PORT}`);
});

```
===== FILE END =====

### apps/data-api/src/store/index.ts

<a id="apps-data-api-src-store-index-ts"></a>
===== FILE START =====
Path: apps/data-api/src/store/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/store/index.ts
Bytes: 0  Lines: 0  Modified: 2025-09-01T06:39:55Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### apps/data-api/src/store/memory.ts

<a id="apps-data-api-src-store-memory-ts"></a>
===== FILE START =====
Path: apps/data-api/src/store/memory.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/store/memory.ts
Bytes: 131  Lines: 5  Modified: 2025-09-01T06:42:05Z
SHA256: e6544a74f3be0659653a919fb2e0cc3553aad2ce9d9742b2cb8d5462df3c51ee   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import type { Store } from "./index";
import { createMemoryStore } from "./index";

export const db: Store = createMemoryStore();

```
===== FILE END =====

### apps/data-api/src/ws/bus.ts

<a id="apps-data-api-src-ws-bus-ts"></a>
===== FILE START =====
Path: apps/data-api/src/ws/bus.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/src/ws/bus.ts
Bytes: 1084  Lines: 34  Modified: 2025-09-01T06:44:12Z
SHA256: c0c8666dbd5d827e83b84907fb3e536ec0a16bb55e65527dd294f0d1227b2c35   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { WebSocketServer, WebSocket } from "ws";

type Topic = string;
const topics = new Map<Topic, Set<WebSocket>>();

export function createBus(server: import("http").Server) {
  const wss = new WebSocketServer({ server, path: "/ws" });

  wss.on("connection", (ws) => {
    let subs: Topic[] = [];
    ws.on("message", (raw) => {
      try {
        const msg = JSON.parse(String(raw));
        if (msg.type === "sub" && typeof msg.topic === "string") {
          subs.push(msg.topic);
          if (!topics.has(msg.topic)) topics.set(msg.topic, new Set());
          topics.get(msg.topic)!.add(ws);
          ws.send(JSON.stringify({ type: "sub.ok", topic: msg.topic }));
        }
      } catch {}
    });
    ws.on("close", () => subs.forEach(t => topics.get(t)?.delete(ws)));
  });

  function publish(topic: Topic, ev: any) {
    const peers = topics.get(topic);
    if (!peers || peers.size === 0) return;
    const payload = JSON.stringify({ topic, ...ev });
    for (const ws of peers) if (ws.readyState === WebSocket.OPEN) ws.send(payload);
  }

  return { publish };
}

```
===== FILE END =====

### apps/data-api/tsconfig.json

<a id="apps-data-api-tsconfig-json"></a>
===== FILE START =====
Path: apps/data-api/tsconfig.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/data-api/tsconfig.json
Bytes: 301  Lines: 15  Modified: 2025-09-01T06:41:37Z
SHA256: f6f9684e22f36ff2571bfbbffde8b1b7807431b8356d5991571b463923f3ec48   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "strict": true,
    "skipLibCheck": true,
    "resolveJsonModule": true,
    "outDir": "dist",
    "rootDir": "src"
  },
  "include": ["src"]
}

```
===== FILE END =====

### apps/game-server/package.json

<a id="apps-game-server-package-json"></a>
===== FILE START =====
Path: apps/game-server/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/package.json
Bytes: 442  Lines: 21  Modified: 2025-08-31T00:11:27Z
SHA256: ca0e6eff1facfcd2d3df40db737c1f09c48aa174939c53cc4d6221e1101fc126   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "game-server",
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "@warboy/chat": "0.0.0",
    "@warboy/net": "0.0.0",
    "@warboy/overlays": "0.0.0",
    "@warboy/world": "0.0.0",
    "nanoid": "^5.1.5",
    "ws": "^8.18.3"
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/auth/jwtVerify.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/auth/jwtVerify.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/chat/handler.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/chat/handler.ts
Bytes: 1179  Lines: 36  Modified: 2025-08-30T14:40:36Z
SHA256: 9852db92b1f2938bf8d69b30bd1294ca4e989c908f3f39fb815058da0998ecaa   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { nanoid } from "nanoid";
import type { C2S, C2S_ChatSend, S2C_ChatRecv, S2C_ChatAck, ChatMsg, S2C_Typing, S2C_Reaction } from '@warboy/chat';
import { append } from './store.js'; // <-- add this
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
    append(msg).catch(err => console.error('chat append failed', err));
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
export { handleChatIncoming as handleChatMessage };

```
===== FILE END =====

### apps/game-server/src/chat/store.ts

<a id="apps-game-server-src-chat-store-ts"></a>
===== FILE START =====
Path: apps/game-server/src/chat/store.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/chat/store.ts
Bytes: 1616  Lines: 49  Modified: 2025-08-30T14:41:12Z
SHA256: 4267324000e09e350beaa5ef0dfa305b77658778acf11ffaaa1970431dff1a67   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { promises as fs } from 'fs';
import * as path from 'path';
import type { ChatMsg } from '@warboy/chat';

const DATA_DIR = process.env.DATA_DIR || path.join(process.cwd(), 'data', 'chat');
const MAX_RECENT = 500;

const recentCache = new Map<string, ChatMsg[]>();

async function ensureDir() {
  await fs.mkdir(DATA_DIR, { recursive: true });
}

function fileFor(room: string) {
  const safe = room.replace(/[^a-zA-Z0-9._-]/g, '_');
  return path.join(DATA_DIR, `${safe}.ndjson`);
}

export async function append(msg: ChatMsg): Promise<void> {
  await ensureDir();
  const f = fileFor(msg.room);
  const line = JSON.stringify(msg) + '\n';
  await fs.appendFile(f, line, 'utf8');

  const arr = recentCache.get(msg.room) || [];
  arr.push(msg);
  if (arr.length > MAX_RECENT) arr.splice(0, arr.length - MAX_RECENT);
  recentCache.set(msg.room, arr);
}

export async function recent(room: string, limit = 50, afterMs?: number): Promise<ChatMsg[]> {
  const cached = recentCache.get(room);
  if (cached && (!afterMs || cached[cached.length - 1]?.ts > afterMs)) {
    const filtered = afterMs ? cached.filter(m => m.ts > afterMs) : cached.slice(-limit);
    return filtered.slice(-limit);
  }

  try {
    const txt = await fs.readFile(fileFor(room), 'utf8');
    const rows = txt.trim().split('\n').filter(Boolean).map(line => JSON.parse(line) as ChatMsg);
    recentCache.set(room, rows.slice(-MAX_RECENT));
    const filtered = afterMs ? rows.filter(m => m.ts > afterMs) : rows.slice(-limit);
    return filtered.slice(-limit);
  } catch (e: any) {
    if (e?.code === 'ENOENT') return [];
    throw e;
  }
}

```
===== FILE END =====

### apps/game-server/src/index.ts

<a id="apps-game-server-src-index-ts"></a>
===== FILE START =====
Path: apps/game-server/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/index.ts
Bytes: 6980  Lines: 218  Modified: 2025-08-30T14:40:02Z
SHA256: 3ff1660869f45f73ac268f05bf893db32334e71ffd622bb4c57b6c0251b5d955   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { createServer } from 'http';
import { WebSocketServer, WebSocket } from 'ws';
import { nanoid } from 'nanoid';
import { applyTilePatches } from '@warboy/overlays';
import type { OverlayEvent } from '@warboy/overlays';
import { getChunkPatches, getChunkVersion, appendOverlay } from './world/overlays.js';

// network protocol
import type { C2S, S2C } from '@warboy/net';

// chat protocol + server-side chat handler
import type { C2S as ChatC2S } from '@warboy/chat';
import { handleChatMessage } from './chat/handler.js';
import { recent } from './chat/store.js';

// --- INLINE WORLDGEN (temporary) ---
const CHUNK_SIZE = 32;
function genChunk(seed: number, cx: number, cy: number) {
  const w = CHUNK_SIZE, h = CHUNK_SIZE, tiles = new Uint8Array(w * h);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const v = (Math.sin((cx * w + x + seed) * 0.01) + Math.cos((cy * h + y - seed) * 0.013)) * 0.5 + 0.5;
    tiles[y * w + x] = v < 0.35 ? 0 : v > 0.75 ? 2 : 1; // 0 water, 1 grass, 2 rock
  }
  return { cx, cy, w, h, tiles };
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

// lightweight admin HTTP for overlays + chat history
const httpServer = createServer((req, res) => {
  if (req.method === 'GET' && req.url?.startsWith('/chat/recent')) {
    const u = new URL(req.url, 'http://localhost');
    const room = String(u.searchParams.get('room') || 'global');
    const after = u.searchParams.get('after') ? Number(u.searchParams.get('after')) : undefined;
    const limit = u.searchParams.get('limit') ? Number(u.searchParams.get('limit')) : 50;

    recent(room, isNaN(limit) ? 50 : limit, isNaN(after as any) ? undefined : after)
      .then((msgs) => {
        res.writeHead(200, { 'content-type': 'application/json' });
        res.end(JSON.stringify({ room, messages: msgs }));
      })
      .catch(() => { res.writeHead(500); res.end('error'); });
    return;
  }

  if (req.method === 'POST' && req.url === '/overlay/place') {
    let body = '';
    req.on('data', (c) => (body += c));
    req.on('end', () => {
      try {
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
        res.writeHead(204); res.end();
      } catch {
        res.writeHead(400); res.end('bad json');
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

  const sendToRoom = (room: string, frame: unknown) => {
    // TODO: proper room routing; for now broadcast to all
    const payload = JSON.stringify(frame);
    for (const p of players.values()) {
      if (p.sock.readyState === WebSocket.OPEN) p.sock.send(payload);
    }
  };

  // will be assigned after 'hello'
  let onChat: (raw: any) => void = () => {};

  sock.on('message', (buf) => {
    let msg: C2S | ChatC2S;
    try { msg = JSON.parse(buf.toString()); } catch { return; }

    // 1) hello – create player and then wire chat handler using that identity
    if (msg.t === 'hello') {
      const id = nanoid(8);
      const name = sanitize((msg as any).name);

      me = {
        id,
        name,
        x: rand(10, 90), y: rand(10, 90),
        tx: 0, ty: 0,
        sock, lastSeq: 0,
      };
      players.set(id, me);

      onChat = handleChatMessage({
        playerId: id,
        playerName: name,
        defaultRoom: () => 'global',
        sendToRoom,
      });

      const welcome = { t: 'welcome', id, zoneId: 'zone-0', time: Date.now() } as S2C;
      sock.send(JSON.stringify(welcome));

      // send recent chat (as normal chat/recv frames so client needs no new handler)
      recent('global', 30).then((msgs) => {
        for (const m of msgs) {
          if (sock.readyState === WebSocket.OPEN) {
            sock.send(JSON.stringify({ t: 'chat/recv', msg: m }));
          }
        }
      }).catch(() => { /* ignore */ });

      return;
    }

    // Must be authed after hello
    if (!me) return;

    // 2) chat – handle at top level (not inside intent)
    if (isChatMessage(msg)) { onChat(msg); return; }

    // 3) chunk request
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
        version: getChunkVersion(ch.cx, ch.cy),
      } as S2C;

      sock.send(JSON.stringify(payload));
      return;
    }

    // 4) movement intent
    if (msg.t === 'intent') {
      if (msg.seq <= me.lastSeq) return;
      me.lastSeq = msg.seq;

      // existing UI coords
      me.x = clamp(me.x + msg.dx * 1.5, 0, 100);
      me.y = clamp(me.y + msg.dy * 1.5, 0, 100);

      // NEW world coords
      me.tx += msg.dx * 2;
      me.ty += msg.dy * 2;
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
      tx: p.tx, ty: p.ty, // NEW
    })),
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

function isChatMessage(f: any): f is ChatC2S {
  return f && typeof f.t === 'string' && f.t.startsWith('chat/');
}

```
===== FILE END =====

### apps/game-server/src/index.ts.bak

<a id="apps-game-server-src-index-ts-bak"></a>
===== FILE START =====
Path: apps/game-server/src/index.ts.bak
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/index.ts.bak
Bytes: 5175  Lines: 180  Modified: 2025-08-29T00:38:20Z
SHA256: 795180e4836cc51a927c410bfbb2e4cb8bf404ee239bb3ed1e4d63207c1bd96a   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### apps/game-server/src/net/protocol.js

<a id="apps-game-server-src-net-protocol-js"></a>
===== FILE START =====
Path: apps/game-server/src/net/protocol.js
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/net/protocol.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/net/protocol.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/net/wsServer.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/net/wsServer.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/db.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/db.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/repos/buildings.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/repos/buildings.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/repos/users.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/repos/users.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/repos/warboys.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/repos/warboys.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/repos/zones.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/persistence/repos/zones.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/telemetry/metrics.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/telemetry/metrics.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/chunks.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/chunks.ts
Bytes: 560  Lines: 19  Modified: 2025-08-30T21:24:18Z
SHA256: 210c4bd5a87298c2502482b04af4020c926a8be4a1c0d87608954f86973e9c59   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { u8ToB64 } from '@warboy/world';
import type { ChunkSnapshot } from '@warboy/world';
import { genChunk } from './gen.js';
import { getSnapshot, putSnapshot } from './storage.js';

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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/entities/Building.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/entities/Building.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/entities/Player.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/entities/Player.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/entities/Warboy.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/entities/Warboy.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/gen.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/gen.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/overlays.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/overlays.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/storage.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/storage.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/battle.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/battle.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/building.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/building.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/capture.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/capture.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/encounters.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/encounters.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/movement.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/systems/movement.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/zones/Zone.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/zones/Zone.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/zones/ZoneManager.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/src/world/zones/ZoneManager.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/tsconfig.json
Bytes: 535  Lines: 23  Modified: 2025-08-31T00:00:21Z
SHA256: 83bb494e378fa2b8eba1175781c8f5e2a9b54464b67016a40aad96096431ea4a   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "rootDir": "src",
    "outDir": "dist",
    "composite": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "resolveJsonModule": true,
    "skipLibCheck": true,
    "target": "ES2022",
    "strict": true,
    "esModuleInterop": true
  },
  "include": ["src"],
  "references": [
    { "path": "../../packages/chat" },
    { "path": "../../packages/net" },
    { "path": "../../packages/overlays" },
    { "path": "../../packages/world" }
  ]
}

```
===== FILE END =====

### apps/game-server/tsconfig.tsbuildinfo

<a id="apps-game-server-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: apps/game-server/tsconfig.tsbuildinfo
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-server/tsconfig.tsbuildinfo
Bytes: 41628  Lines: 0  Modified: 2025-08-31T00:01:20Z
SHA256: 3d8da6a19e9f1b90a1758dbbb7006e7b074361cde969e340b23584766ce8b370   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### apps/game-web/.gitignore

<a id="apps-game-web-gitignore"></a>
===== FILE START =====
Path: apps/game-web/.gitignore
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/.gitignore
Bytes: 43  Lines: 4  Modified: 2025-08-30T18:51:27Z
SHA256: fbeba30608390c093b7e2ce116c822f5579644258cc8fec79f01ecc1648fe714   Language: plain   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```
src/**/*.js
src/**/*.js.map
src/**/*.d.ts

```
===== FILE END =====

### apps/game-web/index.html

<a id="apps-game-web-index-html"></a>
===== FILE START =====
Path: apps/game-web/index.html
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/index.html
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/package.json
Bytes: 608  Lines: 23  Modified: 2025-08-30T23:03:38Z
SHA256: 973224288cf9c24c4820425360d1701466dd3112a8df0e023c4d278818698850   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "game-web",
  "type": "module",
  "scripts": {
    "dev": "node ../../node_modules/vite/bin/vite.js --host 0.0.0.0 --port 5175 --strictPort",
    "build": "vite build",
    "start": "node dist/index.js",
    "preview": "vite preview -p 5173"
  },
  "dependencies": {
    "@warboy/chat": "0.0.0",
    "@warboy/overlays": "0.0.0",
    "@warboy/world": "0.0.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "@warboy/net": "0.0.0"
  },
  "devDependencies": {
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^4.7.0",
    "vite": "^6.3.5"
  }
}```
===== FILE END =====

### apps/game-web/public/tiles/grass.png

<a id="apps-game-web-public-tiles-grass-png"></a>
===== FILE START =====
Path: apps/game-web/public/tiles/grass.png
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/public/tiles/grass.png
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/public/tiles/rock.png
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/public/tiles/water.png
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/App.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/App.tsx
Bytes: 16147  Lines: 422  Modified: 2025-08-30T19:00:05Z
SHA256: 251edacbbb4e9a21072a66a43c2e68b73a4bcc21c588ba49b21f7e3e3cc0a486   Language: tsx   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```tsx
// apps/game-web/src/app/App.tsx

// ──────────────────────────────────────────────────────────────────────────────
// UI SYSTEM (canvas HUD + input)
// ──────────────────────────────────────────────────────────────────────────────
import { UIManager } from './ui/manager';
import React, { useEffect, useRef, useState } from 'react';
import { ChatPanel } from './chat/ChatPanel';

// ──────────────────────────────────────────────────────────────────────────────
// NETWORKING (WS client + message types)
// ──────────────────────────────────────────────────────────────────────────────
import { connectWS } from './game/net/wsClient';

// ──────────────────────────────────────────────────────────────────────────────
// WORLD DATA / CACHING / COORD MATH
// ──────────────────────────────────────────────────────────────────────────────
import { ChunkCache } from './game/world/cache';
import { CHUNK_SIZE, worldToChunk, localInChunk, edgePrefetch, directionalAOI, aoiRect } from '@warboy/world';

// ──────────────────────────────────────────────────────────────────────────────
// SPRITES / ANIMATION
// ──────────────────────────────────────────────────────────────────────────────
import heroUrl from './game/assets/sprites/Alex_16x16.png';
import { loadImage } from './game/sprites/loader';
import { SpriteSheet } from './game/sprites/spriteSheet';
import { Animator } from './game/sprites/anim';

// Chat message shape (matches server)
type ChatMsg = { id:string; room:string; from:{ id:string; name?:string }; text:string; ts:number };

// shared, long-lived chunk cache
const cache = new ChunkCache();

export function App() {
  const [status, setStatus] = useState('disconnected');
  const [id, setId] = useState<string | null>(null);
  const [players, setPlayers] = useState<any[]>([]);
  const [chatMsgs, setChatMsgs] = useState<ChatMsg[]>([]);

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

  // ui system (still used for canvas widgets/input routing)
  const uiRef = useRef<UIManager | null>(null);

  useEffect(() => { playersRef.current = players; }, [players]);
  useEffect(() => { idRef.current = id; }, [id]);

  // ASSET PRELOAD
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

  // NETWORK CONNECT (WS)
  useEffect(() => {
    setStatus('connecting');
    const name = `warboy-${Math.floor(Math.random() * 1000)}`;
    const url = import.meta.env?.VITE_WS_URL || `ws://${location.hostname}:8787`;

    const ws = connectWS({
      url,
      name,

      onChat: (m) => {
        setChatMsgs((prev) => [...prev, m].slice(-200));
      },

      onChatHistory: (_room, msgs) => {
        setChatMsgs(msgs.slice(-200));
      },

      onWelcome: (me) => {
        setId(me.id);
        setStatus('connected');

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
        console.log('[snapshot]', snap.players.map((p: any) => ({
          id: p.id, name: p.name, tx: p.tx, ty: p.ty, x: p.x, y: p.y
        })));
        setPlayers(snap.players);
      },

      onChunk: (msg) => {
        console.log('[onChunk]', msg);
        if (msg?.t === 'chunkData') {
          cache.setFromSnap(msg);
        }
      },

      onClose: () => {
        setStatus('disconnected');
        setChatMsgs((prev) => [...prev, { id: String(Date.now()), room:'global', from:{id:'system'}, text:'disconnected', ts:Date.now() }]);
      },
    });

    wsRef.current = ws;

    // movement keys (UI keys are handled below)
    const onKeyDown = (e: KeyboardEvent) => {
      const uiHandled = uiRef.current?.handleKeyDown(e) ?? false;
      if (uiHandled) { e.preventDefault(); return; }

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

  // AOI / PREFETCH SYSTEM
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

  // CANVAS + RENDER LOOP
  useEffect(() => {
    const c = canvasRef.current;
    if (!c) return;
    const ctx = c.getContext('2d');
    if (!ctx) return;
    ctxRef.current = ctx;

    // --- UI setup (still used for input routing) ---
    const ui = new UIManager();
    uiRef.current = ui;

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

    const onWheel = (e: WheelEvent) => {
      const handled = ui.dispatch({ t: 'wheel', dx: e.deltaX, dy: e.deltaY });
      if (handled) e.preventDefault();
    };

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

      // WORLD RENDER
      const curPlayers = playersRef.current;
      const meId = idRef.current;
      const me = curPlayers.find((p) => p.id === meId);
      const tx = me?.tx ?? 0;
      const ty = me?.ty ?? 0;
      const TILE_PIX = 8;
      const tileColor: Record<number, string> = { 0:'#2050ff', 1:'#2aa745', 2:'#999999' };

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
          ctx2.strokeStyle = '#222';
          const topLeftX = Math.floor(cssW / 2 + (ccx * CHUNK_SIZE - tx) * TILE_PIX);
          const topLeftY = Math.floor(cssH / 2 + (ccy * CHUNK_SIZE - ty) * TILE_PIX);
          ctx2.strokeRect(topLeftX, topLeftY, CHUNK_SIZE * TILE_PIX, CHUNK_SIZE * TILE_PIX);
        }
      }

      // OTHER PLAYERS
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

      // DEBUG HUD
      ctx2.fillStyle = '#fff';
      ctx2.font = '12px monospace';
      ctx2.textAlign = 'left';
      ctx2.fillText(`players:${curPlayers.length} me:${meId?.slice(0, 4) ?? '—'} tx:${tx} ty:${ty}`, 8, 16);

      // HERO SPRITE ANIM
      const sheet = heroSheetRef.current;
      const anim = heroAnimRef.current;
      if (sheet && anim) {
        const prev = lastDrawPosRef.current;
        const dx = prev ? Math.sign(tx - prev.tx) : 0;
        const dy = prev ? Math.sign(ty - prev.ty) : 0;
        lastDrawPosRef.current = { tx, ty };
        let row = heroRowRef.current;
        if (Math.abs(dx) > Math.abs(dy)) row = dx > 0 ? 1 : 3; else if (Math.abs(dy) > 0) row = dy < 0 ? 2 : 0;
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

      // UI overlay (no canvas chat anymore, but input routing stays)
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

      rafRef.current = null;
      ctxRef.current = null;
    };
  }, []);

  return (
    <div style={{ color: '#ddd', fontFamily: 'system-ui', padding: 8 }}>
      <div>status: {status} {id ? `| id: ${id}` : ''}</div>

      {/* Canvas host div with relative positioning to overlay DOM chat */}
      <div style={{ border: '1px solid #333', marginTop: 8, width: '100%', maxWidth: 960, aspectRatio: '16 / 9', position: 'relative' }}>
        <canvas ref={canvasRef} style={{ width: '100%', height: '100%', display: 'block' }}/>
       <ChatPanel
  messages={chatMsgs}
  onSend={(t) => {
    const wsApi = wsRef.current;
    console.log('[UI] chat send clicked', { t, hasApi: !!wsApi, hasChatSend: !!wsApi?.chatSend, rs: wsApi?.socket?.readyState });

    if (wsApi?.chatSend) {
      wsApi.chatSend(t, 'global');
    } else if (wsApi?.socket?.readyState === WebSocket.OPEN) {
      // Fallback (shouldn’t happen once clean)
      wsApi.socket.send(JSON.stringify({ t: 'chat/send', room: 'global', text: t }));
    } else {
      console.warn('[UI] no ws or not open');
    }
  }}
/>

      </div>

      <div style={{ marginTop: 8 }}>WASD / Arrow keys move your square.</div>
    </div>
  );
}

export default App;
```
===== FILE END =====

### apps/game-web/src/app/App.tsx.bak

<a id="apps-game-web-src-app-app-tsx-bak"></a>
===== FILE START =====
Path: apps/game-web/src/app/App.tsx.bak
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/App.tsx.bak
Bytes: 19011  Lines: 448  Modified: 2025-08-30T16:32:54Z
SHA256: 18808daa8687c2309bde650709f9c4030ea83f847b9ece764c8736110b28a473   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### apps/game-web/src/app/chat/ChatPanel.tsx

<a id="apps-game-web-src-app-chat-chatpanel-tsx"></a>
===== FILE START =====
Path: apps/game-web/src/app/chat/ChatPanel.tsx
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/chat/ChatPanel.tsx
Bytes: 2188  Lines: 55  Modified: 2025-08-30T18:59:18Z
SHA256: 0e357708f759f0c5bc885608016c171c741120b6e71e11050300cf07dbe8297f   Language: tsx   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```tsx
// apps/game-web/src/app/chat/ChatPanel.tsx
import React, { useEffect, useRef, useState } from 'react';

type ChatMsg = { id:string; room:string; from:{ id:string; name?:string }; text:string; ts:number };

export function ChatPanel({ messages, onSend }: { messages: ChatMsg[]; onSend: (t:string)=>void }) {
  const [buf, setBuf] = useState('');
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => { endRef.current?.scrollIntoView({ behavior: 'smooth' }); }, [messages.length]);

  const doSend = () => {
    const t = buf.trim();
    if (!t) return;
    console.log('[ChatPanel] doSend', t);
    onSend(t);
    setBuf('');
  };

  return (
    <div style={containerStyle}>
      <div style={listStyle}>
        {messages.map(m => (
          <div key={m.id}>
            <strong>{m.from.name ?? m.from.id.slice(0,4)}</strong>: {m.text}
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div style={inputRowStyle}>
        <input
          value={buf}
          onChange={e => setBuf(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') doSend(); }}
          placeholder="Type message…"
          style={inputStyle}
        />
        <button onClick={doSend} style={buttonStyle}>Send</button>
      </div>
    </div>
  );
}

const containerStyle: React.CSSProperties = {
  position: 'absolute', top: 8, left: 8, width: 360, height: 220,
  background: 'rgba(0,0,0,0.6)', border: '1px solid #333', borderRadius: 6,
  display: 'flex', flexDirection: 'column', color: '#ddd', fontFamily: 'system-ui',
  pointerEvents: 'auto', // ensures clicks go to chat (not canvas)
  backdropFilter: 'blur(2px)',
};
const listStyle: React.CSSProperties = { flex: 1, overflowY: 'auto', padding: '8px' };
const inputRowStyle: React.CSSProperties = { display: 'flex', gap: 6, padding: '6px 8px', borderTop: '1px solid #333' };
const inputStyle: React.CSSProperties = { flex: 1, background: '#111', border: '1px solid #444', borderRadius: 4, color: '#ddd', padding: '6px 8px' };
const buttonStyle: React.CSSProperties = { background: '#222', border: '1px solid #555', color: '#ddd', padding: '6px 10px', borderRadius: 4, cursor: 'pointer' };

```
===== FILE END =====

### apps/game-web/src/app/chat/useChat.d.ts

<a id="apps-game-web-src-app-chat-usechat-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/chat/useChat.d.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/chat/useChat.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/chat/useChat.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/chat/useChat.ts
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

### apps/game-web/src/app/chat/wireChat.ts

<a id="apps-game-web-src-app-chat-wirechat-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/chat/wireChat.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/chat/wireChat.ts
Bytes: 1248  Lines: 41  Modified: 2025-08-30T15:27:42Z
SHA256: 62560dd4fc0008a33c55ac47a122d5c9da7d1a50880229f5e76e5b5fc3193ba1   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/chat/wireChat.ts
import { ChatHud } from '../ui/chat/chatHUD';
import type { UIManager } from '../ui/manager';
import type { Rect } from '../ui/core';

export function wireChat(ws: WebSocket, ui: UIManager, rect: Rect = { x: 12, y: 12, w: 360, h: 220 }) {
  // Create HUD and pass a send() that emits chat/send frames
  const hud = new ChatHud(rect, (text) => {
    const frame = { t: 'chat/send', room: 'global', text };
    console.debug('[chat] send ->', frame);
    ws.send(JSON.stringify(frame));
  });

  // Listen for server messages and append to HUD
  const onMsg = (e: MessageEvent) => {
    try {
      const f = JSON.parse(e.data as string);
      if (f?.t === 'chat/recv' && f.msg?.room === 'global') {
        hud.addLine(`${f.msg.from.name}: ${f.msg.text}`);
      }
      // If you later send batched history frames, handle them too:
      if (f?.t === 'chat/history' && f.room === 'global') {
        for (const m of f.messages || []) {
          hud.addLine(`${m.from.name}: ${m.text}`);
        }
      }
    } catch {}
  };

  ws.addEventListener('message', onMsg);
  ui.add(hud);

  return {
    hud,
    dispose() {
      ws.removeEventListener('message', onMsg);
      ui.remove(hud);
    },
  };
}

```
===== FILE END =====

### apps/game-web/src/app/game/assets/sprites/Alex_16x16.png

<a id="apps-game-web-src-app-game-assets-sprites-alex-16x16-png"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/assets/sprites/Alex_16x16.png
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/assets/sprites/Alex_16x16.png
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/net/wsClient.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/net/wsClient.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/net/wsClient.ts
Bytes: 2793  Lines: 69  Modified: 2025-08-30T19:00:55Z
SHA256: bf1313e53adf70f240eaa57d7d964022bc565930434243aca5e4c168eeae8f12   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/game/net/wsClient.ts
type ClientHello    = { t: 'hello'; name: string };
type ClientIntent   = { t: 'intent'; seq: number; dx: -1|0|1; dy: -1|0|1 };
type ClientChunkReq = { t:'chunkReq'; cx:number; cy:number };
type ClientChatSend = { t:'chat/send'; room?: string; text:string };

type ServerWelcome   = { t: 'welcome'; id: string; zoneId: string; time: number };
type ServerSnapshot  = { t:'snapshot'; time:number; players:Array<{id:string;x:number;y:number;name:string}> };
type ServerChunkData = { t:'chunkData'; cx:number; cy:number; w:number; h:number; tilesB64:string };

type ChatMsg = { id:string; room:string; from:{ id:string; name?:string }; text:string; ts:number };
type ServerChatRecv    = { t:'chat/recv'; msg: ChatMsg };
type ServerChatHistory = { t:'chat/history'; room:string; messages: ChatMsg[] };

type C2S = ClientHello | ClientIntent | ClientChunkReq | ClientChatSend;
type S2C = ServerWelcome | ServerSnapshot | ServerChunkData | ServerChatRecv | ServerChatHistory;

export function connectWS(opts: {
  url: string; name: string;
  onWelcome?: (me: ServerWelcome) => void;
  onSnapshot?: (snap: ServerSnapshot) => void;
  onChunk?: (msg: ServerChunkData) => void;
  onChat?: (msg: ChatMsg) => void;
  onChatHistory?: (room: string, msgs: ChatMsg[]) => void;
  onClose?: () => void;
}) {
  const ws = new WebSocket(opts.url);
  let seq = 0;
console.log('[wsClient] module loaded');
  ws.addEventListener('open', () => {
    const m: ClientHello = { t:'hello', name: opts.name };
    ws.send(JSON.stringify(m));
  });

  ws.addEventListener('message', (ev) => {
    let msg: S2C;
    try { msg = JSON.parse(ev.data); } catch { return; }
    if (!msg || typeof msg !== 'object') return;

    switch (msg.t) {
      case 'welcome':      opts.onWelcome?.(msg); break;
      case 'snapshot':     opts.onSnapshot?.(msg); break;
      case 'chunkData':    opts.onChunk?.(msg); break;
      case 'chat/recv':    opts.onChat?.(msg.msg); break;
      case 'chat/history': opts.onChatHistory?.(msg.room, msg.messages || []); break;
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
    // NEW: chatSend -> chat/send
    chatSend(text:string, room = 'global') {
      const m: ClientChatSend = { t:'chat/send', room, text };
      if (ws.readyState === WebSocket.OPEN) ws.send(JSON.stringify(m));
    },
    close(){ try{ ws.close(); }catch{} },
    socket: ws,
  };
}

```
===== FILE END =====

### apps/game-web/src/app/game/sprites/anim.d.ts

<a id="apps-game-web-src-app-game-sprites-anim-d-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/game/sprites/anim.d.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/anim.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/anim.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/anim.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/loader.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/loader.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/loader.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/spriteSheet.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/spriteSheet.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/sprites/spriteSheet.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/state/chunks.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/state/chunks.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/state/chunks.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/aoi.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/aoi.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/aoi.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/cache.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/cache.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/cache.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/decode.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/decode.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/decode.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/draw.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/draw.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/draw.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/requests.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/requests.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/game/world/requests.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/routes/Login.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/routes/Login.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/routes/Login.tsx
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/routes/Play.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/routes/Play.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/routes/Play.tsx
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/ui/chat/chatHUD.ts
Bytes: 1272  Lines: 47  Modified: 2025-08-15T04:41:11Z
SHA256: 4bf2a0186802dc678b509db65a68186062558d3983855609d9d559e80733587d   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/ui/chat/chatHUD.ts
import { UIElement, Rect } from '../core';
import { ScrollList } from '../widgets';
import { EmojiPad } from './emojiPad';

export class ChatHud implements UIElement {
  private list: ScrollList;
  private pad: EmojiPad;
  private children: UIElement[];

  constructor(
    private outer: Rect,
    private sendFn: (text: string) => void
  ) {
    // Top: chat log
    const listRect: Rect = { x: outer.x, y: outer.y, w: outer.w, h: outer.h - 120 };

    // Bottom: emoji dial pad (finger‑friendly)
    const padRect: Rect = { x: outer.x, y: outer.y + outer.h - 116, w: outer.w, h: 116 };

    this.list = new ScrollList(listRect, { title: 'Chat' });
    this.pad  = new EmojiPad(padRect, { onSend: (t) => this.send(t), title: 'Quick Chat' });

    this.children = [this.list, this.pad];
  }

  bounds() { return this.outer; }

  draw(ctx: CanvasRenderingContext2D) {
    for (const c of this.children) c.draw(ctx);
  }

  event(ev: any) {
    // last-added topmost capture
    for (let i = this.children.length - 1; i >= 0; i--) {
      if (this.children[i].event?.(ev)) return true;
    }
    return false;
  }

  addLine(line: string) { this.list.push(line); }

  private send(text: string) {
    this.sendFn(text);
  }
}

```
===== FILE END =====

### apps/game-web/src/app/ui/chat/emojiPad.ts

<a id="apps-game-web-src-app-ui-chat-emojipad-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/ui/chat/emojiPad.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/ui/chat/emojiPad.ts
Bytes: 3978  Lines: 135  Modified: 2025-08-15T04:40:15Z
SHA256: 83f093f85ca8ce5a30f96b021d84a5eb5f0ab350f93a0f76ee19d1dc79d2995e   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// apps/game-web/src/app/ui/chat/emojiPad.ts
import type { UIElement, UIEvent, Rect } from '../core';
import { drawPanel, hit } from '../core';

type PadOpts = {
  title?: string;
  items?: string[];
  onSend: (text: string) => void;
};

export class EmojiPad implements UIElement {
  wantsKeyboard = false;

  private items: string[];
  private idx = 0;
  private buffer = '';
  private title: string;

  // Button rects (computed each draw)
  private rLeft!: Rect;
  private rRight!: Rect;
  private rSend!: Rect;
  private rBack!: Rect;

  constructor(private r: Rect, private opts: PadOpts) {
    this.items = opts.items ?? ['👋','🙂','😂','👍','❤️','❓','‼️','🔥','🤝','🤖','✨','🎉','🌊','🌿','🪨','🌀'];
    this.title = opts.title ?? 'Quick Chat';
  }

  bounds() { return this.r; }

  draw(ctx: CanvasRenderingContext2D) {
    const { x, y, w, h } = this.r;

    // Panel + title
    drawPanel(ctx, this.r, this.title);
    const padY = y + 18; // under title
    const padH = h - 18;

    // Buffer line
    ctx.fillStyle = '#ccc';
    ctx.font = '12px system-ui';
    ctx.textAlign = 'left';
    ctx.textBaseline = 'middle';
    const bufY = padY + 14;
    ctx.fillText(this.buffer || '…', x + 8, bufY);

    // Big selected emoji
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = '34px system-ui';
    ctx.fillStyle = '#fff';
    const bigEmojiY = padY + Math.floor(padH * 0.45);
    ctx.fillText(this.items[this.idx], x + Math.floor(w / 2), bigEmojiY);

    // Controls row (huge, finger‑friendly)
    const rowH = 32;
    const gap = 6;
    const btnW = Math.floor((w - gap * 5) / 4);
    const rowY = y + h - rowH - 6;

    // Helper
    const drawBtn = (bx: number, label: string) => {
      ctx.fillStyle = '#222';
      ctx.fillRect(bx, rowY, btnW, rowH);
      ctx.strokeStyle = '#555';
      ctx.strokeRect(bx, rowY, btnW, rowH);
      ctx.fillStyle = '#ddd';
      ctx.font = '14px system-ui';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(label, bx + btnW / 2, rowY + rowH / 2 + 1);
    };

    const b1x = x + gap;
    const b2x = b1x + btnW + gap;
    const b3x = b2x + btnW + gap;
    const b4x = b3x + btnW + gap;

    drawBtn(b1x, '←');
    drawBtn(b2x, '→');
    drawBtn(b3x, '⌫');
    drawBtn(b4x, 'Send');

    // Store clickable rects
    this.rLeft = { x: b1x, y: rowY, w: btnW, h: rowH };
    this.rRight = { x: b2x, y: rowY, w: btnW, h: rowH };
    this.rBack = { x: b3x, y: rowY, w: btnW, h: rowH };
    this.rSend = { x: b4x, y: rowY, w: btnW, h: rowH };

    // Small hint text (optional)
    ctx.fillStyle = '#888';
    ctx.font = '11px system-ui';
    ctx.textAlign = 'left';
    ctx.fillText('Tap ←/→ to pick, Send to post. Buffer shows the message you will send.', x + 8, rowY - 10);
  }

  event(ev: UIEvent) {
    if (ev.t !== 'pointerDown') return false;
    const p = ev.p;
    if (!hit(this.r, p)) return false;

    if (hit(this.rLeft, p)) { this.prev(); return true; }
    if (hit(this.rRight, p)) { this.next(); return true; }
    if (hit(this.rBack, p)) { this.backspace(); return true; }
    if (hit(this.rSend, p)) { this.send(); return true; }

    // Tap the middle to append current emoji too (nice shortcut)
    const { x, y, w, h } = this.r;
    const midRect: Rect = { x: x + w * 0.2, y: y + h * 0.2, w: w * 0.6, h: h * 0.4 };
    if (hit(midRect, p)) { this.append(); return true; }

    return true; // we handled a pointer inside panel even if no button
  }

  private prev() {
    this.idx = (this.idx + this.items.length - 1) % this.items.length;
  }
  private next() {
    this.idx = (this.idx + 1) % this.items.length;
  }
  private append() {
    this.buffer += this.items[this.idx];
  }
  private backspace() {
    this.buffer = this.buffer.slice(0, -1);
  }
  private send() {
    const text = this.buffer.trim();
    if (!text) return;
    this.opts.onSend(text);
    this.buffer = '';
  }
}

```
===== FILE END =====

### apps/game-web/src/app/ui/core.ts

<a id="apps-game-web-src-app-ui-core-ts"></a>
===== FILE START =====
Path: apps/game-web/src/app/ui/core.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/ui/core.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/ui/input/textCapture.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/ui/manager.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/app/ui/widgets.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/index.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/index.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/index.tsx
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/src/vite-env.d.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/tsconfig.json
Bytes: 521  Lines: 28  Modified: 2025-08-30T23:03:38Z
SHA256: 917b8e41972ad08e42abc0cef27f01aeb11307e5953b975fd1c0d9c2cf3ffd1e   Language: json   Role: source
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
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": [
    "src"
  ],
  "references": [
    {
      "path": "../../packages/world"
    },
    {
      "path": "../../packages/overlays"
    },
    {
      "path": "../../packages/chat"
    }
  ]
}```
===== FILE END =====

### apps/game-web/tsconfig.tsbuildinfo

<a id="apps-game-web-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: apps/game-web/tsconfig.tsbuildinfo
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/tsconfig.tsbuildinfo
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/vite.config.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/game-web/vite.config.ts
Bytes: 503  Lines: 18  Modified: 2025-08-30T23:27:46Z
SHA256: 008a0bb4ce037517f7cdcddce2bfc4e34b03490b89e443bc072f53a85132d93e   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  resolve: {
    // very important for linked workspace packages
    preserveSymlinks: true,
  },
  // keeps Vite from trying to pre-bundle these as external deps
  optimizeDeps: {
    exclude: ['@warboy/world', '@warboy/net', '@warboy/overlays', '@warboy/chat'],
  },
  ssr: {
    noExternal: ['@warboy/world', '@warboy/net', '@warboy/overlays', '@warboy/chat'],
  },
})

```
===== FILE END =====

### apps/towns-bot/src/auth/jwt.js

<a id="apps-towns-bot-src-auth-jwt-js"></a>
===== FILE START =====
Path: apps/towns-bot/src/auth/jwt.js
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/towns-bot/src/auth/jwt.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/towns-bot/src/auth/jwt.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/towns-bot/src/bot.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/towns-bot/src/bot.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/towns-bot/src/handlers/whoami.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/towns-bot/src/handlers/whoami.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/towns-bot/src/handlers/zoneEvents.js
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/apps/towns-bot/src/handlers/zoneEvents.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/infra/db/schema.sql
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/infra/db/seed.sql
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/infra/docker/Dockerfile
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/infra/k8s/deployment.yaml
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/package-lock.json
Bytes: 82735  Lines: 2516  Modified: 2025-09-06T15:20:59Z
SHA256: ab65a86707cff7bca8963cba205b8c206e404f63cdc1c594fb447922ed678df8   Language: json   Role: source
Summary: Truncated preview; file exceeds 999 lines.

-----8<----- CONTENT -----8<-----
```json
{
  "name": "warboy",
  "version": "0.0.0",
  "lockfileVersion": 3,
  "requires": true,
  "packages": {
    "": {
      "name": "warboy",
      "version": "0.0.0",
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
        "concurrently": "^9.2.1",
        "tsx": "^4.20.5",
        "turbo": "^2.5.6",
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
    "apps/chat-server": {
      "name": "@warboy/chat-server",
      "version": "0.1.0",
      "dependencies": {
        "@warboy/chat": "0.0.0",
        "@warboy/net": "0.0.0",
        "@warboy/overlays": "0.0.0",
        "@warboy/world": "0.0.0",
        "nanoid": "^5.0.7",
        "ws": "^8.18.0"
      },
      "devDependencies": {
        "tsx": "^4.15.7",
        "typescript": "^5.6.3"
      }
    },
    "apps/chat-server/node_modules/nanoid": {
      "version": "5.1.5",
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-5.1.5.tgz",
      "integrity": "sha512-Ir/+ZpE9fDsNH0hQ3C68uyThDXzYcim2EqcZ8zn8Chtt1iylPT9xXJB0kPCnqzgcEGikO9RxSrh63MsmVCU7Fw==",
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
    "apps/data-api": {
      "name": "@warboy/data-api",
      "version": "0.0.0",
      "dependencies": {
        "itty-router": "^4.2.2",
        "ws": "^8.17.0",
        "zod": "^3.23.8"
      },
      "devDependencies": {
        "@types/ws": "^8.5.10",
        "tsx": "^4.20.5",
        "typescript": "^5.9.2"
      }
    },
    "apps/game-server": {
      "dependencies": {
        "@warboy/chat": "0.0.0",
        "@warboy/net": "0.0.0",
        "@warboy/overlays": "0.0.0",
        "@warboy/world": "0.0.0",
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
      "resolved": "https://registry.npmjs.org/nanoid/-/nanoid-5.1.5.tgz",
      "integrity": "sha512-Ir/+ZpE9fDsNH0hQ3C68uyThDXzYcim2EqcZ8zn8Chtt1iylPT9xXJB0kPCnqzgcEGikO9RxSrh63MsmVCU7Fw==",
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
        "@warboy/chat": "0.0.0",
        "@warboy/net": "0.0.0",
        "@warboy/overlays": "0.0.0",
        "@warboy/world": "0.0.0",
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
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/core/-/core-7.28.3.tgz",
      "integrity": "sha512-yDBHV9kQNcr2/sUr9jghVyz9C3Y5G2zUM2H2lo+9mKv4sFgbA8s8Z9t8D1jiTkGoO/NoIfKMyKWr4s6CN23ZwQ==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@ampproject/remapping": "^2.2.0",
        "@babel/code-frame": "^7.27.1",
        "@babel/generator": "^7.28.3",
        "@babel/helper-compilation-targets": "^7.27.2",
        "@babel/helper-module-transforms": "^7.28.3",
        "@babel/helpers": "^7.28.3",
        "@babel/parser": "^7.28.3",
        "@babel/template": "^7.27.2",
        "@babel/traverse": "^7.28.3",
        "@babel/types": "^7.28.2",
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
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/generator/-/generator-7.28.3.tgz",
      "integrity": "sha512-3lSpxGgvnmZznmBkCRnVREPUFJv2wrv9iAoFDvADJc0ypmdOxdUtcLeBgBJ6zE0PMeTKnxeQzyk0xTBq4Ep7zw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/parser": "^7.28.3",
        "@babel/types": "^7.28.2",
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
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helper-module-transforms/-/helper-module-transforms-7.28.3.tgz",
      "integrity": "sha512-gytXUbs8k2sXS9PnQptz5o0QnpLL51SwASIORY6XaBKF88nsOT0Zw9szLqlSGQDP/4TljBAD5y98p2U1fqkdsw==",
      "dev": true,
      "license": "MIT",
      "dependencies": {
        "@babel/helper-module-imports": "^7.27.1",
        "@babel/helper-validator-identifier": "^7.27.1",
        "@babel/traverse": "^7.28.3"
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
      "version": "7.28.3",
      "resolved": "https://registry.npmjs.org/@babel/helpers/-/helpers-7.28.3.tgz",
      "integrity": "sha512-PTNtvUQihsAsDHMOP5pfobP8C6CM4JWXmP8DrEIt46c3r2bf87Ua1zoqevsMo9g+tWDwgWrFP5EIxuBx5RudAw==",
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

…
# [omitted middle: 1850 lines]
…

      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/turbo-darwin-arm64/-/turbo-darwin-arm64-2.5.6.tgz",
      "integrity": "sha512-LyiG+rD7JhMfYwLqB6k3LZQtYn8CQQUePbpA8mF/hMLPAekXdJo1g0bUPw8RZLwQXUIU/3BU7tXENvhSGz5DPA==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "darwin"
      ]
    },
    "node_modules/turbo-linux-64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/turbo-linux-64/-/turbo-linux-64-2.5.6.tgz",
      "integrity": "sha512-GOcUTT0xiT/pSnHL4YD6Yr3HreUhU8pUcGqcI2ksIF9b2/r/kRHwGFcsHgpG3+vtZF/kwsP0MV8FTlTObxsYIA==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/turbo-linux-arm64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/turbo-linux-arm64/-/turbo-linux-arm64-2.5.6.tgz",
      "integrity": "sha512-10Tm15bruJEA3m0V7iZcnQBpObGBcOgUcO+sY7/2vk1bweW34LMhkWi8svjV9iDF68+KJDThnYDlYE/bc7/zzQ==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "linux"
      ]
    },
    "node_modules/turbo-windows-64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/turbo-windows-64/-/turbo-windows-64-2.5.6.tgz",
      "integrity": "sha512-FyRsVpgaj76It0ludwZsNN40ytHN+17E4PFJyeliBEbxrGTc5BexlXVpufB7XlAaoaZVxbS6KT8RofLfDRyEPg==",
      "cpu": [
        "x64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
    },
    "node_modules/turbo-windows-arm64": {
      "version": "2.5.6",
      "resolved": "https://registry.npmjs.org/turbo-windows-arm64/-/turbo-windows-arm64-2.5.6.tgz",
      "integrity": "sha512-j/tWu8cMeQ7HPpKri6jvKtyXg9K1gRyhdK4tKrrchH8GNHscPX/F71zax58yYtLRWTiK04zNzPcUJuoS0+v/+Q==",
      "cpu": [
        "arm64"
      ],
      "dev": true,
      "license": "MIT",
      "optional": true,
      "os": [
        "win32"
      ]
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
    "node_modules/yaml": {
      "version": "2.8.1",
      "resolved": "https://registry.npmjs.org/yaml/-/yaml-2.8.1.tgz",
      "integrity": "sha512-lcYcMxX2PO9XMGvAJkJ3OsNMw+/7FKes7/hgerGUYWIoWu5j/+YQqcZr5JnPZWzOsEBgMbSbiSTn/dv/69Mkpw==",
      "license": "ISC",
      "bin": {
        "yaml": "bin.mjs"
      },
      "engines": {
        "node": ">= 14.6"
      }
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
    "node_modules/zod": {
      "version": "3.25.76",
      "resolved": "https://registry.npmjs.org/zod/-/zod-3.25.76.tgz",
      "integrity": "sha512-gzUt/qt81nXsFGKIFcC3YnfEAx5NkunCfnDlvuBSSFS02bcXu4Lmea0AFIUwbLWxWPx3d9p8S5QoaujKcNQxcQ==",
      "license": "MIT",
      "funding": {
        "url": "https://github.com/sponsors/colinhacks"
      }
    },
    "packages/chat": {
      "name": "@warboy/chat",
      "version": "0.0.0"
    },
    "packages/net": {
      "name": "@warboy/net",
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
    "packages/warboys-data": {
      "name": "@warboy/warboys-data",
      "version": "0.0.0",
      "dependencies": {
        "ajv": "^8.17.1",
        "ajv-formats": "^3.0.1",
        "yaml": "^2.8.1"
      }
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/package.json
Bytes: 3321  Lines: 52  Modified: 2025-09-06T16:45:41Z
SHA256: 3edba3a69734f8770a08daf76b7a01ea2dce6ca81c4d6ade6499c3daec519564   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "warboy",
  "private": true,
  "packageManager": "npm@10.9.2",
  "workspaces": [
    "apps/*",
    "packages/*"
  ],
  "scripts": {
    "dev:data": "npm --workspace apps/data-api run dev",
    "dev:server": "npm --workspace apps/game-server run dev",
    "dev:web": "npm --workspace apps/game-web run dev",
    "bootstrap:ws": "bash workflow-tools/bootstrap-workspaces.sh",
    "dev:tmux": "bash workflow-tools/dev-tmux.sh",
    "dev:all": "bash workflow-tools/dev-all.sh",
    "bootstrap:fedora": "bash workflow-tools/dev-all/bootstrap-fedora.sh",
    "up": "bash workflow-tools/dev-all/dev-all.sh up",
    "stop": "bash workflow-tools/dev-all/dev-all.sh stop",
    "status": "bash workflow-tools/dev-all/dev-all.sh status",
    "hud": "HUD_MODE=web bash workflow-tools/dev-all/helpers/hud.sh",
    "backup": "workflow-tools/backupr/backup.sh --wizard",
    "backup:quick": "ROOT_DIR=$(pwd) BACKUP_ROOT=\"$HOME/backups/warboy\" REPO_NAME=\"warboy\" workflow-tools/backupr/backup.sh",
    "backup:dry": "DRY_RUN=1 workflow-tools/backupr/backup.sh --wizard",
    "digestr": "bash -lc 'ROOT=$(pwd); cd workflow-tools/proj_digestr && ./main.sh -o \"$ROOT/PROJECT_BUNDLE.md\"'",
    "digestr:fast": "bash -lc 'ROOT=$(pwd); cd workflow-tools/proj_digestr && MAX_LINES=800 HEAD_TAKE=300 TAIL_TAKE=300 ./main.sh -o \"$ROOT/PROJECT_BUNDLE.md\" -X \"**/dist,**/.turbo,**/.cache,**/node_modules/**\"'",
    "digestr:full": "bash -lc 'ROOT=$(pwd); cd workflow-tools/proj_digestr && MAX_LINES=2000 HEAD_TAKE=700 TAIL_TAKE=700 ./main.sh -o \"$ROOT/PROJECT_BUNDLE.md\"'",
    "digestr:no-git": "bash -lc 'ROOT=$(pwd); cd workflow-tools/proj_digestr && ./main.sh --no-git -o \"$ROOT/PROJECT_BUNDLE.md\"'",
    "digestr:when": "stat -c '%y' PROJECT_BUNDLE.md",
    "digestr:tree": "bash --noprofile --norc -lc 'ROOT=$(pwd); npm run -s digestr && printf \"\\n# Repo Tree\\n\\n\" >> \"$ROOT/PROJECT_BUNDLE.md\" && printf '\\''```text\\n'\\'' >> \"$ROOT/PROJECT_BUNDLE.md\" && tree -L 3 -a --dirsfirst >> \"$ROOT/PROJECT_BUNDLE.md\" && printf '\\''\\n```\\n'\\'' >> \"$ROOT/PROJECT_BUNDLE.md\"'",
    "digestr:check": "bash -lc 'B=$(stat -c %Y PROJECT_BUNDLE.md 2>/dev/null || echo 0); C=$(git log -1 --format=%ct 2>/dev/null || echo 0); if [ \"$B\" -lt \"$C\" ]; then echo \"STALE: bundle older than latest commit\"; exit 1; else echo \"FRESH: bundle is up-to-date vs latest commit\"; fi'",
    "bundlr": "npm run digestr",
    "bundlr:tree": "npm run digestr:tree",
    "backup:restore:latest": "LATEST=$(ls -1t $HOME/backups/warboy/warboy-*.tar.gz | head -1) && DEST=$HOME/Desktop/warboy-restore-latest && mkdir -p \"$DEST\" && tar -xzf \"$LATEST\" -C \"$DEST\" && echo Restored to: \"$DEST/$(basename \"$LATEST\" .tar.gz)\"",
    "gitready": "bash --noprofile --norc workflow-tools/git/gitready.sh",
    "gitready:commit": "bash --noprofile --norc workflow-tools/git/gitready.sh --regen --message \"docs: modern README; chore: digestr+tree; ops: backup helpers\""
  },
  "devDependencies": {
    "@types/react": "^19.1.9",
    "@types/react-dom": "^19.1.7",
    "@vitejs/plugin-react": "^4.7.0",
    "concurrently": "^9.2.1",
    "tsx": "^4.20.5",
    "turbo": "^2.5.6",
    "typescript": "^5.9.2",
    "vite": "^6.3.5"
  },
  "dependencies": {
    "react": "^19.1.1",
    "react-dom": "^19.1.1"
  },
  "version": "0.0.0"
}
```
===== FILE END =====

### packages/assets/src/atlas.ts

<a id="packages-assets-src-atlas-ts"></a>
===== FILE START =====
Path: packages/assets/src/atlas.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/assets/src/atlas.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/assets/src/licensing.md
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
```
===== FILE END =====

### packages/assets/src/tiles.ts

<a id="packages-assets-src-tiles-ts"></a>
===== FILE START =====
Path: packages/assets/src/tiles.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/assets/src/tiles.ts
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/chat/README.md

<a id="packages-chat-readme-md"></a>
===== FILE START =====
Path: packages/chat/README.md
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/chat/README.md
Bytes: 2689  Lines: 112  Modified: 2025-08-30T19:31:29Z
SHA256: fabc54ffbf8a3e4ef34c57f8f49df75a9fa7fa0fee640b296ecafcce232a920f   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
# @warboy/chat

Lightweight browser client for the Warboy chat protocol.

- **send** → `{ t: "chat/send", room?: string, text: string }`
- **recv** ← `{ t: "chat/recv", msg: ChatMsg }`
- **history** ← `{ t: "chat/history", room: string, messages: ChatMsg[] }`

This package stays UI-focused and server-agnostic. The game can “drive”
the chat (open/close, send text), but chat networking & storage live
outside the rendering loop.

## Install / Build

From repo root:

```bash
npm -C packages/chat run build
(Or with workspaces: npm run -w packages/chat build)

API (client)
ts
Copy code
export type ChatMsg = {
  id: string;
  room: string;
  from: { id: string; name?: string };
  text: string;
  ts: number;
};

export function connectChat(opts: {
  url: string;               // ws://host:port (e.g. ws://localhost:8790)
  name: string;              // nickname sent in "hello"
  room?: string;             // default "global"
  onOpen?: () => void;
  onRecv?: (m: ChatMsg) => void;
  onHistory?: (room: string, msgs: ChatMsg[]) => void;
  onClose?: () => void;
}): {
  readonly ready: boolean;
  send(text: string, room?: string): void;
  close(): void;
  socket: WebSocket;
}
Usage (React)
tsx
Copy code
import { useEffect, useRef, useState } from "react";
import { connectChat, ChatMsg } from "@warboy/chat";

export function ChatOverlay() {
  const [msgs, setMsgs] = useState<ChatMsg[]>([]);
  const conn = useRef<ReturnType<typeof connectChat>>();

  useEffect(() => {
    const c = connectChat({
      url: import.meta.env.VITE_CHAT_WS_URL || `ws://${location.hostname}:8790`,
      name: "player-" + Math.floor(Math.random()*1000),
      room: "global",
      onHistory: (_r, hist) => setMsgs(hist.slice(-200)),
      onRecv: (m) => setMsgs((prev) => [...prev, m].slice(-200)),
    });
    conn.current = c;
    return () => c.close();
  }, []);

  return (
    <div>
      {/* … render msgs … */}
      <button disabled={!conn.current?.ready} onClick={() => conn.current?.send("hello")}>
        Send
      </button>
    </div>
  );
}
Env
VITE_CHAT_WS_URL – defaults to ws://<host>:8790 (local dev).

Roadmap
Server storage adapters (file NDJSON → later DB/datalake or Towns).

Reconnect/backoff on client.

pgsql
Copy code

---

# New: apps/chat-server (standalone, file-backed)

_Create these files:_

**apps/chat-server/package.json**
```json
{
  "name": "@warboy/chat-server",
  "private": true,
  "version": "0.1.0",
  "type": "commonjs",
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js"
  },
  "dependencies": {
    "nanoid": "^5.0.0",
    "ws": "^8.16.0"
  },
  "devDependencies": {
    "typescript": "^5.4.0"
  }
}
```
===== FILE END =====

### packages/chat/package.json

<a id="packages-chat-package-json"></a>
===== FILE START =====
Path: packages/chat/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/chat/package.json
Bytes: 350  Lines: 18  Modified: 2025-08-31T00:00:28Z
SHA256: 286e71ec599384cc3d54586ff1d81439ca250b4db74038a51a4233d7b8ba768a   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/chat",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "exports": "./src/index.ts",
  "types": "./dist/index.d.ts",
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "tsc -b"
  },
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "browser": "./dist/index.js",
  "sideEffects": false
}```
===== FILE END =====

### packages/chat/src/client.ts

<a id="packages-chat-src-client-ts"></a>
===== FILE START =====
Path: packages/chat/src/client.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/chat/src/client.ts
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

### packages/chat/src/index.ts

<a id="packages-chat-src-index-ts"></a>
===== FILE START =====
Path: packages/chat/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/chat/src/index.ts
Bytes: 58  Lines: 3  Modified: 2025-08-11T20:40:39Z
SHA256: 690a0109cbfbfb031b11fb9d13e3d2edffec52fc970233d52af77b33c076e622   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export * from "./types.js";
export * from "./client.js";

```
===== FILE END =====

### packages/chat/src/types.ts

<a id="packages-chat-src-types-ts"></a>
===== FILE START =====
Path: packages/chat/src/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/chat/src/types.ts
Bytes: 2441  Lines: 101  Modified: 2025-08-29T00:02:22Z
SHA256: 7547d2230c44d4d46f068ee68e71376a76060f7a64a80f757a58da9101a9a64f   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/chat/src/types.ts

// Core message shape (keeps your existing fields, adds optional kind/meta)
export type ChatMsg = {
  id: string;
  room: string; // "global" | "zone:Z" | "party:P" etc.
  from: { id: string; name: string };
  text: string;         // emojis as Unicode
  ts: number;           // epoch ms
  kind?: 'user' | 'system';
  meta?: Record<string, unknown>;
};

// ---------- Client -> Server (C2S) ----------

// Send a chat message (nonce for optimistic UI reconciliation)
export type C2S_ChatSend = {
  t: 'chat/send';
  room: string;
  text: string;
  nonce?: string;
};

// Typing indicator
export type C2S_Typing = {
  t: 'chat/typing';
  room: string;
  typing: boolean;
};

// Emoji reaction to an existing message
export type C2S_Reaction = {
  t: 'chat/react';
  room: string;
  msgId: string;
  emoji: string; // Unicode
  op: 'add' | 'remove';
};

// Union of all C2S frames
export type C2S = C2S_ChatSend | C2S_Typing | C2S_Reaction;

// ---------- Server -> Client (S2C) ----------

// Broadcast of a received message
export type S2C_ChatRecv = {
  t: 'chat/recv';
  msg: ChatMsg;
};

// Ack for optimistic UI (echoes server id/ts for the sent nonce)
export type S2C_ChatAck = {
  t: 'chat/ack';
  room: string;
  nonce: string;
  id: string;
  ts: number;
};

// Typing indicator from someone else
export type S2C_Typing = {
  t: 'chat/typing';
  room: string;
  from: { id: string; name: string };
  typing: boolean;
};

// Reaction broadcast
export type S2C_Reaction = {
  t: 'chat/react';
  room: string;
  from: { id: string; name: string };
  msgId: string;
  emoji: string;
  op: 'add' | 'remove';
};

// Union of all S2C frames
export type S2C = S2C_ChatRecv | S2C_ChatAck | S2C_Typing | S2C_Reaction;

// Combined union (any direction)
export type ChatFrame = C2S | S2C;

// ---------- Type guards ----------

export function isChatRecv(f: any): f is S2C_ChatRecv {
  return f && f.t === 'chat/recv' && f.msg && typeof f.msg.text === 'string';
}

export function isChatAck(f: any): f is S2C_ChatAck {
  return f && f.t === 'chat/ack' && typeof f.id === 'string' && typeof f.ts === 'number';
}

export function isTyping(f: any): f is S2C_Typing {
  return f && f.t === 'chat/typing' && !!f.room && !!f.from && typeof f.typing === 'boolean';
}

export function isReaction(f: any): f is S2C_Reaction {
  return f && f.t === 'chat/react' && !!f.room && !!f.msgId && typeof f.emoji === 'string';
}

```
===== FILE END =====

### packages/chat/tsconfig.json

<a id="packages-chat-tsconfig-json"></a>
===== FILE START =====
Path: packages/chat/tsconfig.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/chat/tsconfig.json
Bytes: 537  Lines: 24  Modified: 2025-08-30T23:28:25Z
SHA256: 028d8d7f64e08d03712569b1bbad4ec2eac070faf6fd3679768e78327f5f0619   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "emitDeclarationOnly": false,
    "noEmit": false,
    "resolveJsonModule": true,
    "allowJs": false,
    "checkJs": false
  },
  "include": [
    "src/**/*.ts"
  ]
}```
===== FILE END =====

### packages/chat/tsconfig.tsbuildinfo

<a id="packages-chat-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: packages/chat/tsconfig.tsbuildinfo
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/chat/tsconfig.tsbuildinfo
Bytes: 30461  Lines: 0  Modified: 2025-09-06T15:21:03Z
SHA256: 163669b2cb4c26124b77d52b3a5f94d6c97099d6abd83de34724d0c51e7f19e1   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### packages/core/src/battle/engine.ts

<a id="packages-core-src-battle-engine-ts"></a>
===== FILE START =====
Path: packages/core/src/battle/engine.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/core/src/battle/engine.ts
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/core/src/capture/engine.ts

<a id="packages-core-src-capture-engine-ts"></a>
===== FILE START =====
Path: packages/core/src/capture/engine.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/core/src/capture/engine.ts
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/core/src/economy/convert.ts

<a id="packages-core-src-economy-convert-ts"></a>
===== FILE START =====
Path: packages/core/src/economy/convert.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/core/src/economy/convert.ts
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/core/src/index.ts

<a id="packages-core-src-index-ts"></a>
===== FILE START =====
Path: packages/core/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/core/src/index.ts
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

### packages/core/src/rng.ts

<a id="packages-core-src-rng-ts"></a>
===== FILE START =====
Path: packages/core/src/rng.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/core/src/rng.ts
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

### packages/core/src/types.ts

<a id="packages-core-src-types-ts"></a>
===== FILE START =====
Path: packages/core/src/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/core/src/types.ts
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

### packages/core/src/validation/schemas.ts

<a id="packages-core-src-validation-schemas-ts"></a>
===== FILE START =====
Path: packages/core/src/validation/schemas.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/core/src/validation/schemas.ts
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/core/src/worldgen.ts

<a id="packages-core-src-worldgen-ts"></a>
===== FILE START =====
Path: packages/core/src/worldgen.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/core/src/worldgen.ts
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

### packages/net/package.json

<a id="packages-net-package-json"></a>
===== FILE START =====
Path: packages/net/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/net/package.json
Bytes: 349  Lines: 18  Modified: 2025-08-31T00:00:28Z
SHA256: 17829f44bd5319742b1230e8c1aa6ac96af6ba7d04b776bf5958200f23d326d6   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/net",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "exports": "./src/index.ts",
  "types": "./dist/index.d.ts",
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "tsc -b"
  },
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "browser": "./dist/index.js",
  "sideEffects": false
}```
===== FILE END =====

### packages/net/src/encode.ts

<a id="packages-net-src-encode-ts"></a>
===== FILE START =====
Path: packages/net/src/encode.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/net/src/encode.ts
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

### packages/net/src/index.ts

<a id="packages-net-src-index-ts"></a>
===== FILE START =====
Path: packages/net/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/net/src/index.ts
Bytes: 90  Lines: 4  Modified: 2025-08-29T00:16:08Z
SHA256: 823f724f466a3dd06a9507190f8838911b6f2fd59ada1fb4e7e2ffb326a82860   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/net/src/index.ts
export * from "./messages.js";
export * from "./encode.js";

```
===== FILE END =====

### packages/net/src/messages.ts

<a id="packages-net-src-messages-ts"></a>
===== FILE START =====
Path: packages/net/src/messages.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/net/src/messages.ts
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

### packages/net/src/rate.ts

<a id="packages-net-src-rate-ts"></a>
===== FILE START =====
Path: packages/net/src/rate.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/net/src/rate.ts
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/net/src/schema.ts

<a id="packages-net-src-schema-ts"></a>
===== FILE START =====
Path: packages/net/src/schema.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/net/src/schema.ts
Bytes: 0  Lines: 0  Modified: 2025-08-09T23:30:21Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/net/tsconfig.json

<a id="packages-net-tsconfig-json"></a>
===== FILE START =====
Path: packages/net/tsconfig.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/net/tsconfig.json
Bytes: 537  Lines: 24  Modified: 2025-08-30T23:28:25Z
SHA256: 028d8d7f64e08d03712569b1bbad4ec2eac070faf6fd3679768e78327f5f0619   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "emitDeclarationOnly": false,
    "noEmit": false,
    "resolveJsonModule": true,
    "allowJs": false,
    "checkJs": false
  },
  "include": [
    "src/**/*.ts"
  ]
}```
===== FILE END =====

### packages/net/tsconfig.tsbuildinfo

<a id="packages-net-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: packages/net/tsconfig.tsbuildinfo
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/net/tsconfig.tsbuildinfo
Bytes: 30858  Lines: 0  Modified: 2025-09-06T15:21:03Z
SHA256: 09038989c7ead242e2eca522de67781f000790187a56fe91aa7ba51e0883c546   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### packages/overlays/.gitignore

<a id="packages-overlays-gitignore"></a>
===== FILE START =====
Path: packages/overlays/.gitignore
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/overlays/.gitignore
Bytes: 48  Lines: 4  Modified: 2025-08-30T14:54:12Z
SHA256: 03e9ca0d5c6f33cc820544bfc632330fce09ca0766d749f54d22416f438371a8   Language: plain   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```
dist/
src/**/*.js
src/**/*.js.map
src/**/*.d.ts
```
===== FILE END =====

### packages/overlays/package.json

<a id="packages-overlays-package-json"></a>
===== FILE START =====
Path: packages/overlays/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/overlays/package.json
Bytes: 354  Lines: 18  Modified: 2025-08-31T00:00:28Z
SHA256: 0c5e03b376dbbd9a6ee3eb9036df30ae2f06fa01f927e2f94e904c1fa19d699a   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/overlays",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "exports": "./src/index.ts",
  "types": "./dist/index.d.ts",
  "files": [
    "dist",
    "src"
  ],
  "scripts": {
    "build": "tsc -b"
  },
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "browser": "./dist/index.js",
  "sideEffects": false
}```
===== FILE END =====

### packages/overlays/src/apply.ts

<a id="packages-overlays-src-apply-ts"></a>
===== FILE START =====
Path: packages/overlays/src/apply.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/overlays/src/apply.ts
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

### packages/overlays/src/index.ts

<a id="packages-overlays-src-index-ts"></a>
===== FILE START =====
Path: packages/overlays/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/overlays/src/index.ts
Bytes: 193  Lines: 5  Modified: 2025-08-30T15:00:08Z
SHA256: 78e858a908f857041b917d1ec93c7cc0d630d321c5b1a80c2786af82688fc87d   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/overlays/src/index.ts
export { applyTilePatches } from './apply.js';
export type { OverlayEvent } from './types.js';
export type { TilePatch } from './apply.js';   // <-- add this

```
===== FILE END =====

### packages/overlays/src/types.ts

<a id="packages-overlays-src-types-ts"></a>
===== FILE START =====
Path: packages/overlays/src/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/overlays/src/types.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/overlays/tsconfig.json
Bytes: 537  Lines: 24  Modified: 2025-08-30T23:28:25Z
SHA256: 028d8d7f64e08d03712569b1bbad4ec2eac070faf6fd3679768e78327f5f0619   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "emitDeclarationOnly": false,
    "noEmit": false,
    "resolveJsonModule": true,
    "allowJs": false,
    "checkJs": false
  },
  "include": [
    "src/**/*.ts"
  ]
}```
===== FILE END =====

### packages/overlays/tsconfig.tsbuildinfo

<a id="packages-overlays-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: packages/overlays/tsconfig.tsbuildinfo
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/overlays/tsconfig.tsbuildinfo
Bytes: 30447  Lines: 0  Modified: 2025-09-06T15:21:03Z
SHA256: 2f7cd6f853c73db60582588454643e51522f274f39ce7ffa1a99b56364547631   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### packages/trolls/package.json

<a id="packages-trolls-package-json"></a>
===== FILE START =====
Path: packages/trolls/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/trolls/package.json
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/trolls/src/README.md
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
```
===== FILE END =====

### packages/trolls/src/index.ts

<a id="packages-trolls-src-index-ts"></a>
===== FILE START =====
Path: packages/trolls/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/trolls/src/index.ts
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/trolls/src/schema.ts

<a id="packages-trolls-src-schema-ts"></a>
===== FILE START =====
Path: packages/trolls/src/schema.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/trolls/src/schema.ts
Bytes: 0  Lines: 0  Modified: 2025-08-10T23:51:58Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
```
===== FILE END =====

### packages/trolls/src/types.ts

<a id="packages-trolls-src-types-ts"></a>
===== FILE START =====
Path: packages/trolls/src/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/trolls/src/types.ts
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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/trolls/tsconfig.json
Bytes: 2  Lines: 0  Modified: 2025-08-11T23:03:28Z
SHA256: 44136fa355b3678a1146ad16f7e8649e94fb4fc21fe77e8310c060f61caaff8a   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{}```
===== FILE END =====

### packages/warboys-data/package.json

<a id="packages-warboys-data-package-json"></a>
===== FILE START =====
Path: packages/warboys-data/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/package.json
Bytes: 378  Lines: 17  Modified: 2025-09-01T20:02:50Z
SHA256: 2ab25b6163984587c936d7d2c3e5103877c3c7630f3e272f70df892c04cec498   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/warboys-data",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "dist/index.js",
  "types": "dist/index.d.ts",
  "scripts": {
    "build": "tsc -b && node ./scripts/after-build.mjs",
    "typecheck": "tsc -p tsconfig.json --noEmit"
  },
  "dependencies": {
    "ajv": "^8.17.1",
    "ajv-formats": "^3.0.1",
    "yaml": "^2.8.1"
  }
}
```
===== FILE END =====

### packages/warboys-data/scripts/after-build.mjs

<a id="packages-warboys-data-scripts-after-build-mjs"></a>
===== FILE START =====
Path: packages/warboys-data/scripts/after-build.mjs
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/scripts/after-build.mjs
Bytes: 885  Lines: 32  Modified: 2025-09-01T18:15:14Z
SHA256: b751a31e8a21ee147decaab782b82ce56cbaeff0b0d0d2e0bf65d67de2164b35   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
import fs from 'node:fs';
import path from 'node:path';

const here = path.resolve(process.cwd());
const src = path.join(here, 'src');
const dist = path.join(here, 'dist');

function copyDir(dir) {
  const from = path.join(src, dir);
  const to = path.join(dist, dir);
  if (!fs.existsSync(from)) return;
  fs.mkdirSync(to, { recursive: true });
  for (const f of fs.readdirSync(from)) {
    const s = path.join(from, f);
    const d = path.join(to, f);
    const st = fs.statSync(s);
    if (st.isDirectory()) {
      fs.mkdirSync(d, { recursive: true });
      // shallow: adjust if you nest deeper later
      for (const ff of fs.readdirSync(s)) {
        fs.copyFileSync(path.join(s, ff), path.join(d, ff));
      }
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

copyDir('schema');
copyDir('species');
console.log('[warboys-data] copied schema/ and species/ into dist/');

```
===== FILE END =====

### packages/warboys-data/scripts/validate.mjs

<a id="packages-warboys-data-scripts-validate-mjs"></a>
===== FILE START =====
Path: packages/warboys-data/scripts/validate.mjs
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/scripts/validate.mjs
Bytes: 0  Lines: 0  Modified: 2025-09-01T15:05:50Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
```
===== FILE END =====

### packages/warboys-data/src/index.ts

<a id="packages-warboys-data-src-index-ts"></a>
===== FILE START =====
Path: packages/warboys-data/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/src/index.ts
Bytes: 1350  Lines: 44  Modified: 2025-09-01T23:40:56Z
SHA256: b5b6b81ea4d829cee6b47ad9679e1f1750c2572bddaadfe3920a42573a5d68b6   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
import fs from 'node:fs';
import path from 'node:path';
import yaml from 'yaml';
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { speciesSchema } from './schema/species.schema';
import type { Species } from './types';

const root = path.resolve(import.meta.dirname, 'species');

const ajv = new Ajv({ allErrors: true, allowUnionTypes: true });
addFormats(ajv);

// compile the plain schema object; wrap in a type-guard
const validateImpl = ajv.compile(speciesSchema as any);
function isSpecies(data: unknown): data is Species {
  return !!validateImpl(data);
}

function loadAll(): Record<string, Species> {
  const map: Record<string, Species> = {};
  for (const fn of fs.readdirSync(root)) {
    if (!fn.endsWith('.yaml')) continue;

    const raw = fs.readFileSync(path.join(root, fn), 'utf8');
    const dataUnknown = yaml.parse(raw) as unknown;

    if (!isSpecies(dataUnknown)) {
      const msg = ajv.errorsText(validateImpl.errors, { dataVar: fn });
      throw new Error(`species invalid: ${fn}\n${msg}`);
    }

    const s = dataUnknown; // now typed as Species
    map[s.id] = s;
  }
  return map;
}

export const SPECIES_BY_ID = loadAll();
export const SPECIES_BY_SLUG = Object.fromEntries(
  Object.values(SPECIES_BY_ID).map(s => [s.slug, s])
);
export const ALL_SPECIES: Species[] = Object.values(SPECIES_BY_ID);

```
===== FILE END =====

### packages/warboys-data/src/schema/moves.schema.json

<a id="packages-warboys-data-src-schema-moves-schema-json"></a>
===== FILE START =====
Path: packages/warboys-data/src/schema/moves.schema.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/src/schema/moves.schema.json
Bytes: 0  Lines: 0  Modified: 2025-09-01T15:05:50Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
```
===== FILE END =====

### packages/warboys-data/src/schema/species.schema.ts

<a id="packages-warboys-data-src-schema-species-schema-ts"></a>
===== FILE START =====
Path: packages/warboys-data/src/schema/species.schema.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/src/schema/species.schema.ts
Bytes: 2628  Lines: 93  Modified: 2025-09-01T23:40:32Z
SHA256: b40a2229766f68b7c68e85ac2e9cc11e600f9f8fdec0c753496d692b572385c7   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// src/schema/species.schema.ts
export const speciesSchema = {
  $id: 'https://warboy.example/schema/species',
  type: 'object',
  additionalProperties: false,
  required: ['id','slug','name','rarity','types','baseStats','biomes'],
  properties: {
    id:    { type: 'string', pattern: '^WB-\\d{3}$' },
    slug:  { type: 'string' },
    name:  { type: 'string' },
    rarity:{ type: 'string', enum: ['common','uncommon','rare','epic','legendary'] },
    types: { type: 'array', items: { type: 'string' } },

    baseStats: {
      type: 'object',
      additionalProperties: false,
      required: ['hp','atk','def','spd','mag','res'],
      properties: {
        hp:  { type: 'integer', minimum: 1 },
        atk: { type: 'integer', minimum: 0 },
        def: { type: 'integer', minimum: 0 },
        spd: { type: 'integer', minimum: 0 },
        mag: { type: 'integer', minimum: 0 },
        res: { type: 'integer', minimum: 0 },
      },
    },

    biomes: { type: 'array', items: { type: 'string' } },

    spawn: {
      type: 'object',
      nullable: true, // optional & may be null; remove if you don’t allow nulls
      additionalProperties: false,
      required: ['levelRange','weight'],
      properties: {
        levelRange: {
          type: 'array',
          minItems: 2,
          maxItems: 2,
          items: [{ type: 'integer' }, { type: 'integer' }], // tuple form
        },
        weight: { type: 'number', minimum: 0 },
      },
    },

    evolutions: {
      type: 'array',
      nullable: true, // optional array; not null? then delete this line
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['to','condition'],
        properties: {
          to:        { type: 'string' },
          condition: { type: 'string' },
        },
      },
    },

    abilities: {
      type: 'array',
      // nullable: true, // add this ONLY if you want to permit null, otherwise omit
      uniqueItems: true,
      items: { type: 'string', enum: ['dig','fly','swim','shine','cut'] },
    },

    moves: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['id'],
        properties: {
          id: { type: 'string' },
          minLevel: { type: 'integer', minimum: 1 },
        },
      },
    },

    art: {
      type: 'object',
      nullable: true, // remove if you don’t want nulls
      additionalProperties: false,
      properties: {
        icon:        { type: 'string' },
        spriteSheet: { type: 'string' },
      },
    },

    flavorText: { type: 'string' },
  },
} as const;

```
===== FILE END =====

### packages/warboys-data/src/species/WB-001_embercub.yaml

<a id="packages-warboys-data-src-species-wb-001-embercub-yaml"></a>
===== FILE START =====
Path: packages/warboys-data/src/species/WB-001_embercub.yaml
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/src/species/WB-001_embercub.yaml
Bytes: 359  Lines: 14  Modified: 2025-09-01T20:43:30Z
SHA256: 15d3e9b5e63d085d6403ebb20f7e0eaf79902e75f8990b5efe4df98c7f04d183   Language: yaml   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```yaml
id: WB-001
slug: embercub
name: Embercub
rarity: common
types: [fire]
baseStats: { hp: 45, atk: 60, def: 40, spd: 55, mag: 35, res: 40 }
biomes: [wastes, volcanic]
spawn: { levelRange: [1, 3], weight: 1.0 }
abilities: [dig, shine]
moves:
  - { id: scratch }
  - { id: ember, minLevel: 3 }
flavorText: "A cub that sparks when excited. Leaves warm pawprints."

```
===== FILE END =====

### packages/warboys-data/src/species/WB-002_ferrugrim.yaml

<a id="packages-warboys-data-src-species-wb-002-ferrugrim-yaml"></a>
===== FILE START =====
Path: packages/warboys-data/src/species/WB-002_ferrugrim.yaml
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/src/species/WB-002_ferrugrim.yaml
Bytes: 394  Lines: 17  Modified: 2025-09-01T15:07:37Z
SHA256: a1aa3999c6fa618e212cf5fcafdd575070d1ff8d3fba04e485ff7c61b6fa95f0   Language: yaml   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```yaml
id: WB-002
slug: ferrugrim
name: Ferrugrim
rarity: uncommon
types: [metal]
baseStats: { hp: 65, atk: 70, def: 80, spd: 45, mag: 20, res: 60 }
biomes: [ruins, scrapyard, foundry]
spawn:
  levelRange: [6, 12]
  weight: 0.6
evolutions:
  - to: WB-042
    condition: "Use Alloy Core at level ≥ 20"
art:
  icon: "assets/warboys/WB-002/icon.png"
  spriteSheet: "assets/warboys/WB-002/sprites.png"

```
===== FILE END =====

### packages/warboys-data/src/species/WB-003_lumenfin.yaml

<a id="packages-warboys-data-src-species-wb-003-lumenfin-yaml"></a>
===== FILE START =====
Path: packages/warboys-data/src/species/WB-003_lumenfin.yaml
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/src/species/WB-003_lumenfin.yaml
Bytes: 0  Lines: 0  Modified: 2025-09-01T15:05:50Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: yaml   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```yaml
```
===== FILE END =====

### packages/warboys-data/src/types/index.ts

<a id="packages-warboys-data-src-types-index-ts"></a>
===== FILE START =====
Path: packages/warboys-data/src/types/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/src/types/index.ts
Bytes: 1225  Lines: 50  Modified: 2025-09-01T20:41:17Z
SHA256: bf5b964b4f8ee0d81a3f4435954dd5d6bb058b713f4c94c5d12b783b4b581419   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/warboys-data/src/types/index.ts

export type Rarity = 'common'|'uncommon'|'rare'|'epic'|'legendary';

/** Non-combat traversal/utility abilities */
export type OverworldAbility = 'dig'|'fly'|'swim'|'shine'|'cut';

export type MoveRef = {
  id: string;          // e.g. "scratch"
  minLevel?: number;   // unlock at/after this level
};

export type Species = {
  /** canonical id like "WB-001" */
  id: string;
  /** url-safe slug like "embercub" */
  slug: string;
  /** display name like "Embercub" */
  name: string;

  rarity: Rarity;
  types: string[];  // e.g. ["fire"]

  baseStats: {
    hp: number; atk: number; def: number;
    spd: number; mag: number; res: number;
  };

  /** allowed world regions/tiles */
  biomes: string[];

  /** optional spawn behavior */
  spawn?: { levelRange: [number, number]; weight: number };

  /** evolution chain */
  evolutions?: { to: string; condition: string }[];

  /** traversal / utility abilities */
  abilities?: OverworldAbility[];

  /** learnset (battle moves, separate from traversal abilities) */
  moves?: MoveRef[];

  /** art references */
  art?: { icon?: string; spriteSheet?: string };

  /** pokédex-style flavor text */
  flavorText?: string;
};

```
===== FILE END =====

### packages/warboys-data/tsconfig.json

<a id="packages-warboys-data-tsconfig-json"></a>
===== FILE START =====
Path: packages/warboys-data/tsconfig.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/tsconfig.json
Bytes: 494  Lines: 26  Modified: 2025-09-01T20:02:28Z
SHA256: f7898acd762c4537d94a97b8de851eda81ee0405253335a888c8ffdeef98e2f6   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "Bundler",

    "rootDir": "src",
    "outDir": "dist",
    "declaration": true,
    "composite": true,

    "strict": true,
    "skipLibCheck": true,

    "resolveJsonModule": true,
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "types": ["node"]
  },
  "include": [
    "src/**/*",
    "src/schema/species.schema.json"
  ]
}

```
===== FILE END =====

### packages/warboys-data/tsconfig.tsbuildinfo

<a id="packages-warboys-data-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: packages/warboys-data/tsconfig.tsbuildinfo
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/warboys-data/tsconfig.tsbuildinfo
Bytes: 46659  Lines: 0  Modified: 2025-09-06T15:21:03Z
SHA256: 9966087780b73437d1eb4d023a50e7ba42bc51fa6ab5314f1fbc44361a754f13   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### packages/world/package.json

<a id="packages-world-package-json"></a>
===== FILE START =====
Path: packages/world/package.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/world/package.json
Bytes: 340  Lines: 17  Modified: 2025-08-31T00:00:28Z
SHA256: 5488869616ebbef2431d41b6db43e54da8c7f1958373d3536c987de0d13b0355   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "name": "@warboy/world",
  "version": "0.0.0",
  "private": true,
  "type": "module",
  "main": "./dist/index.js",
  "module": "./dist/index.js",
  "types": "./dist/index.d.ts",
  "exports": "./src/index.ts",
  "files": [
    "dist"
  ],
  "scripts": {
    "build": "tsc -b"
  },
  "browser": "./dist/index.js",
  "sideEffects": false
}```
===== FILE END =====

### packages/world/src/aoi.ts

<a id="packages-world-src-aoi-ts"></a>
===== FILE START =====
Path: packages/world/src/aoi.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/world/src/aoi.ts
Bytes: 2011  Lines: 72  Modified: 2025-08-30T22:15:25Z
SHA256: e1b9b5ea2d048d56d0bcbb1f9274526f824a2bb47b5cd1293518705f15fc2d04   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/world/src/aoi.ts
import { CHUNK_SIZE } from './const.js';

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

### packages/world/src/codec.ts

<a id="packages-world-src-codec-ts"></a>
===== FILE START =====
Path: packages/world/src/codec.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/world/src/codec.ts
Bytes: 521  Lines: 12  Modified: 2025-08-30T22:15:25Z
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

### packages/world/src/const.ts

<a id="packages-world-src-const-ts"></a>
===== FILE START =====
Path: packages/world/src/const.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/world/src/const.ts
Bytes: 237  Lines: 11  Modified: 2025-08-30T22:15:25Z
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

### packages/world/src/index.ts

<a id="packages-world-src-index-ts"></a>
===== FILE START =====
Path: packages/world/src/index.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/world/src/index.ts
Bytes: 380  Lines: 12  Modified: 2025-08-31T01:10:45Z
SHA256: 280be537f95f5f5da54409b109e544963690fe5ad4a41a9ec8ca6f71bd50177a   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
export * from './aoi.ts';
export * from './codec.ts';
export * from './const.ts';
// re-export types EXCEPT TileId to avoid name collision with const.js
export type {
  // add only the types you actually define in types.ts (examples below)
  ChunkSnapshot,
  TerrainChunk,
  // add more from types.ts as needed
} from './types.ts';

export { u8ToB64, b64ToU8 } from './codec.ts';
```
===== FILE END =====

### packages/world/src/types.ts

<a id="packages-world-src-types-ts"></a>
===== FILE START =====
Path: packages/world/src/types.ts
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/world/src/types.ts
Bytes: 584  Lines: 19  Modified: 2025-08-30T22:15:25Z
SHA256: 7c7e72cd663b35e6df24c9d304eae4604895db2338abaf082e953156d16acf7d   Language: typescript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```typescript
// packages/world/src/types.ts
import type { TileId } from './const.js';

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
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/world/tsconfig.json
Bytes: 582  Lines: 26  Modified: 2025-08-31T01:30:05Z
SHA256: f29338c146d8f42621bee4ccc2dbfd03be56a65c7f1857d9d5fa7bbcb9589ad3   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "extends": "../../tsconfig.base.json",
  "compilerOptions": {
    "allowImportingTsExtensions": true,
    "composite": true,
    "declaration": true,
    "declarationMap": true,
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "target": "ES2022",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "sourceMap": true,
    "emitDeclarationOnly": true,
    "noEmit": false,
    "resolveJsonModule": true,
    "allowJs": false,
    "checkJs": false
  },
  "include": [
    "src/**/*.ts"
  ]
}
```
===== FILE END =====

### packages/world/tsconfig.tsbuildinfo

<a id="packages-world-tsconfig-tsbuildinfo"></a>
===== FILE START =====
Path: packages/world/tsconfig.tsbuildinfo
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/packages/world/tsconfig.tsbuildinfo
Bytes: 33147  Lines: 0  Modified: 2025-09-06T15:21:03Z
SHA256: 51cc7e83fb7f84d89f4ecea110ba0bd5fe2d533bbfd3f9b5f6c6f3c02cb414a1   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### tsconfig.base.json

<a id="tsconfig-base-json"></a>
===== FILE START =====
Path: tsconfig.base.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/tsconfig.base.json
Bytes: 259  Lines: 11  Modified: 2025-08-30T23:57:13Z
SHA256: 3f57bd555e465449ee5eaff7501e88a114935546b5d3e64d4b24584155d49623   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "compilerOptions": {
    "baseUrl": ".",
    "paths": {
      "@warboy/chat": ["packages/chat/src"],
      "@warboy/net": ["packages/net/src"],
      "@warboy/overlays": ["packages/overlays/src"],
      "@warboy/world": ["packages/world/src"]
    }
  }
}
```
===== FILE END =====

### tsconfig.json

<a id="tsconfig-json"></a>
===== FILE START =====
Path: tsconfig.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/tsconfig.json
Bytes: 657  Lines: 37  Modified: 2025-08-30T23:16:43Z
SHA256: 9936cae4e4f3d989a0c0cb759c5219cbde7ce376f4f549ce3d15931c7a32f73c   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "files": [],
  "compilerOptions": {
    "target": "ES2021",
    "lib": [
      "ES2021",
      "DOM"
    ],
    "module": "ESNext",
    "moduleResolution": "Bundler",
    "strict": true,
    "resolveJsonModule": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true,
    "composite": true,
    "declaration": true,
    "baseUrl": ".",
    "paths": {}
  },
  "references": [
    {
      "path": "packages/world"
    },
    {
      "path": "packages/overlays"
    },
    {
      "path": "packages/chat"
    },
    {
      "path": "apps/game-server"
    },
    {
      "path": "apps/game-web"
    }
  ]
}```
===== FILE END =====

### turbo.json

<a id="turbo-json"></a>
===== FILE START =====
Path: turbo.json
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/turbo.json
Bytes: 335  Lines: 19  Modified: 2025-09-01T01:25:40Z
SHA256: daf11e3a557bf9943fd4b9862a9fae9fe29ea2c0c272098a2039d18be31d11e2   Language: json   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", "tsconfig.tsbuildinfo"]
    },
    "typecheck": {
      "dependsOn": ["^typecheck"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "test": {
      "dependsOn": ["^test"]
    }
  }
}

```
===== FILE END =====

### workflow-tools/backupr/README.md

<a id="workflow-tools-backupr-readme-md"></a>
===== FILE START =====
Path: workflow-tools/backupr/README.md
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/backupr/README.md
Bytes: 1151  Lines: 23  Modified: 2025-09-04T21:26:53Z
SHA256: 6847332032df1bdf0da831925bb19a2a7a48256cdc7f10a4bd3e9297376b2f35   Language: md   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```md
ROOT_DIR → the folder you want to back up.
In your case, that’s usually the root of the warboy repo (~/Desktop/DIWHY/ART/warboy).

BACKUP_ROOT → the folder where backups will be stored.
Example: ~/backups/warboy or ../warboybackup. This is outside your project, so backups don’t get mixed with the repo.

REPO_NAME → just the name that will prefix the backup folder and archive.
Example: warboy → you’ll get backups like warboy-20250904-161530-<githash>.

INCLUDE_GIT → 1 means include the .git/ folder, 0 means skip it (usually skip unless you want the full repo history).

COMPRESS → 1 means also create a .tar.gz archive of the backup dir, 0 means just keep the raw folder copy.

DRY_RUN → 1 means preview with rsync (see what would be copied) but don’t actually write anything.
Useful for testing excludes.

ROTATE_BACKUPS → 1 means prune old backups, 0 means keep everything.
Works together with ROTATE_KEEP.

ROTATE_KEEP → how many backups to keep when pruning.
Example: 7 keeps a rolling week’s worth.

BACKUP_PRUNE_LEGACY → 1 means auto-delete the old warboy backup directory if it exists, 0 just warns about it.
```
===== FILE END =====

### workflow-tools/backupr/backup.sh

<a id="workflow-tools-backupr-backup-sh"></a>
===== FILE START =====
Path: workflow-tools/backupr/backup.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/backupr/backup.sh
Bytes: 7635  Lines: 230  Modified: 2025-09-04T21:11:57Z
SHA256: bfd6688dc62e4973a5482f3a3e4acd2fb1eaa38bd4301374f882a947eed6879b   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

# ---------------------------
# tiny backup wizard for warboy
# ---------------------------

need() { command -v "$1" >/dev/null 2>&1 || { echo "ERROR: missing '$1'"; exit 1; }; }
need rsync; need tar; need du; need date

# ---------- defaults ----------
# Try to find the repo root (git) or fall back to CWD
_git_root="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
: "${ROOT_DIR:="${_git_root}"}"
# sanity: ROOT_DIR must exist + not be '/'
if [[ ! -d "$ROOT_DIR" ]] || [[ "$ROOT_DIR" = "/" ]]; then
  echo "ERROR: ROOT_DIR resolves to an invalid path: '$ROOT_DIR'"; exit 1
fi

: "${REPO_NAME:="$(basename "$ROOT_DIR")"}"
# default backup root: ~/backups/<repo>
: "${BACKUP_ROOT:="$HOME/backups/$REPO_NAME"}"
# folder inside repo to exclude (if you happen to keep backups inside the repo)
: "${BACKUP_NAME:=".backups"}"

# behavior toggles (env overridable)
: "${INCLUDE_GIT:=0}"            # 1 to include .git
: "${COMPRESS:=1}"               # 1 to create .tar.gz
: "${DRY_RUN:=0}"                # 1 to preview rsync only
: "${ROTATE_BACKUPS:=1}"         # 1 to prune older backups
: "${ROTATE_KEEP:=10}"           # keep this many if rotating
: "${WRITE_CHECKSUM:=1}"         # 1 to write sha256 for archive
: "${BACKUP_PRUNE_LEGACY:=0}"    # 1 to remove legacy folder if present

# ---------- CLI flags ----------
WIZARD=0
ASSUME_YES=0
while [[ $# -gt 0 ]]; do
  case "${1:-}" in
    --wizard|-w) WIZARD=1 ;;
    --yes|-y)    ASSUME_YES=1 ;;
    -h|--help)
      cat <<EOF
Usage: $(basename "$0") [--wizard|-w] [--yes|-y]

Environment overrides:
  ROOT_DIR=<path> BACKUP_ROOT=<path> REPO_NAME=<name> BACKUP_NAME=<name>
  INCLUDE_GIT=0|1 COMPRESS=0|1 DRY_RUN=0|1
  ROTATE_BACKUPS=0|1 ROTATE_KEEP=<n>
  WRITE_CHECKSUM=0|1 BACKUP_PRUNE_LEGACY=0|1
EOF
      exit 0
      ;;
  esac
  shift
done

# ---------- helpers ----------
ask() {
  # ask "Prompt" "default"
  local prompt="$1"; local def="${2:-}"
  local suffix=""; [[ -n "$def" ]] && suffix=" [$def]"
  read -r -p "$prompt${suffix}: " ans || true
  [[ -z "${ans:-}" ]] && ans="$def"
  printf "%s" "$ans"
}

yesno() {
  # yesno "Prompt" default_yes|default_no
  local prompt="$1"; local def="${2:-default_yes}"
  local d="[Y/n]"; local ret=0
  [[ "$def" == "default_no" ]] && d="[y/N]"
  if [[ $ASSUME_YES -eq 1 ]]; then
    [[ "$def" == "default_no" ]] && ret=1 || ret=0
    return $ret
  fi
  while true; do
    read -r -p "$prompt $d " yn || true
    case "${yn,,}" in
      y|yes|"") [[ "$def" == "default_no" && -z "$yn" ]] && ret=1 || ret=0; break ;;
      n|no)     ret=1; break ;;
      *) echo "Please answer y or n."; ;;
    esac
  done
  return $ret
}

print_cfg() {
  cat <<EOF
Config:
  ROOT_DIR         : $ROOT_DIR
  REPO_NAME        : $REPO_NAME
  BACKUP_ROOT      : $BACKUP_ROOT
  INCLUDE_GIT      : $INCLUDE_GIT
  COMPRESS         : $COMPRESS
  DRY_RUN          : $DRY_RUN
  ROTATE_BACKUPS   : $ROTATE_BACKUPS
  ROTATE_KEEP      : $ROTATE_KEEP
  WRITE_CHECKSUM   : $WRITE_CHECKSUM
  BACKUP_NAME(excl): $BACKUP_NAME
EOF
}

# ---------- wizard ----------
if [[ $WIZARD -eq 1 ]]; then
  echo "==> Backup wizard (press Enter to accept defaults)"
  ROOT_DIR="$(ask "Repo root" "$ROOT_DIR")"
  if [[ ! -d "$ROOT_DIR" || "$ROOT_DIR" = "/" ]]; then
    echo "ERROR: invalid ROOT_DIR '$ROOT_DIR'"; exit 1
  fi
  REPO_NAME="$(ask "Repo name" "$REPO_NAME")"
  BACKUP_ROOT="$(ask "Backup root directory" "$BACKUP_ROOT")"
  INCLUDE_GIT=$(yesno "Include .git/ ?" default_no && echo 1 || echo 0)
  COMPRESS=$(yesno "Create tar.gz archive?" default_yes && echo 1 || echo 0)
  DRY_RUN=$(yesno "DRY RUN (preview only)?" default_no && echo 1 || echo 0)
  ROTATE_BACKUPS=$(yesno "Rotate old backups?" default_yes && echo 1 || echo 0)
  if [[ $ROTATE_BACKUPS -eq 1 ]]; then
    ROTATE_KEEP="$(ask "How many backups to keep" "$ROTATE_KEEP")"
    [[ "$ROTATE_KEEP" =~ ^[0-9]+$ ]] || { echo "ROTATE_KEEP must be integer"; exit 1; }
  fi
  WRITE_CHECKSUM=$(yesno "Write sha256 for archive?" default_yes && echo 1 || echo 0)
  BACKUP_PRUNE_LEGACY=$(yesno "Prune legacy backup dir if present?" default_no && echo 1 || echo 0)

  echo
  print_cfg
  yesno "Proceed?" default_yes || { echo "Aborted."; exit 1; }
fi

# ---------- legacy cleanup (optional) ----------
PARENT_DIR="$(cd "$ROOT_DIR/.." && pwd)"
legacy="$PARENT_DIR/$REPO_NAME backup"
if [[ -d "$legacy" ]]; then
  if [[ "${BACKUP_PRUNE_LEGACY:-0}" -eq 1 ]]; then
    echo "Pruning legacy backup dir: '$legacy'"
    rm -rf -- "$legacy"
  else
    echo "WARN: Legacy backup dir exists: '$legacy' (set BACKUP_PRUNE_LEGACY=1 to remove automatically)"
  fi
fi

mkdir -p "$BACKUP_ROOT"

# ---------- rsync ----------
ts="$(date +%Y%m%d-%H%M%S)"
git_hash="$(git -C "$ROOT_DIR" rev-parse --short HEAD 2>/dev/null || echo nogit)"
dest_dir="$BACKUP_ROOT/${REPO_NAME}-${ts}-${git_hash}"
archive="$BACKUP_ROOT/${REPO_NAME}-${ts}-${git_hash}.tar.gz"

echo "==> Preparing backup dir:"
echo "    $dest_dir"
mkdir -p "$dest_dir"

echo "==> Rsync repo → backup (excludes applied)"
ex=(
  ".git/" "node_modules/" "**/node_modules/" "**/dist/" "**/.turbo/" "tsconfig.tsbuildinfo"
  "workflow-tools/dev-all/logs/" "*.latest.log"
  ".web_hud.pid" ".web_hud.out.log" ".web_hud.err.log"
  ".env" ".env.*"
  "npm-debug.log*" "yarn-debug.log*" "yarn-error.log*" "pnpm-debug.log*"
  ".DS_Store" ".vscode/" ".idea/"
)
# include .git if requested
if [[ "${INCLUDE_GIT:-0}" -eq 1 ]]; then
  # remove ".git/" from excludes
  tmp=()
  for e in "${ex[@]}"; do [[ "$e" != ".git/" ]] && tmp+=("$e"); done
  ex=("${tmp[@]}")
fi

rsync_args=(-a --delete-excluded --prune-empty-dirs)
[[ "${DRY_RUN:-0}" -eq 1 ]] && rsync_args+=(--dry-run --itemize-changes)
for e in "${ex[@]}"; do rsync_args+=( --exclude "$e" ); done
rsync_args+=( --exclude "$BACKUP_NAME/" )

# Guard: never rsync from '/'
if [[ "$ROOT_DIR" = "/" ]]; then
  echo "ERROR: refusing to rsync from '/'"; exit 1
fi

rsync "${rsync_args[@]}" "$ROOT_DIR/" "$dest_dir/"

# Always include env example if present
if [[ -f "$ROOT_DIR/.env.example" ]]; then
  install -D -m 0644 "$ROOT_DIR/.env.example" "$dest_dir/.env.example"
fi

# ---------- metadata ----------
cat >"$dest_dir/.backup-info.txt" <<EOF
repo:      $REPO_NAME
created:   $(date -Iseconds)
git_short: $git_hash
source:    $ROOT_DIR
EOF

# ---------- archive (optional) ----------
if [[ "${COMPRESS:-1}" -eq 1 && "${DRY_RUN:-0}" -eq 0 ]]; then
  echo "==> Creating archive: $archive"
  (cd "$BACKUP_ROOT" && tar -czf "$(basename "$archive")" "$(basename "$dest_dir")")
  echo "==> Archive preview:"
  tar -tzf "$archive" | head -n 12
  echo "==> Sizes:"
  du -sh "$dest_dir" || true
  du -sh "$archive" || true
  if [[ "${WRITE_CHECKSUM:-1}" -eq 1 && "$(command -v sha256sum || true)" ]]; then
    (cd "$BACKUP_ROOT" && sha256sum "$(basename "$archive")" > "$(basename "$archive").sha256")
    echo "Checksum: ${archive}.sha256"
  fi
else
  [[ "${DRY_RUN:-0}" -eq 1 ]] && echo "==> DRY RUN: compression skipped."
  [[ "${COMPRESS:-1}" -eq 0 ]] && { echo "==> Skipping compression (COMPRESS=0)."; du -sh "$dest_dir" || true; }
fi

# ---------- rotation (optional) ----------
if [[ "${ROTATE_BACKUPS:-0}" -eq 1 ]]; then
  echo "==> Rotating backups in $BACKUP_ROOT (keep ${ROTATE_KEEP})"
  mapfile -t _old < <(ls -1dt "$BACKUP_ROOT/${REPO_NAME}-"* 2>/dev/null | tail -n +$((ROTATE_KEEP+1)) || true)
  if [[ "${#_old[@]}" -gt 0 ]]; then
    echo "Pruning ${#_old[@]} old backups…"
    rm -rf -- "${_old[@]}"
  else
    echo "Nothing to prune."
  fi
fi

echo "==> Done."
echo "Backup dir : $dest_dir"
if [[ "${COMPRESS:-1}" -eq 1 && "${DRY_RUN:-0}" -eq 0 ]]; then
  echo "Archive    : $archive"
fi

```
===== FILE END =====

### workflow-tools/bootstrap-workspaces.sh

<a id="workflow-tools-bootstrap-workspaces-sh"></a>
===== FILE START =====
Path: workflow-tools/bootstrap-workspaces.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/bootstrap-workspaces.sh
Bytes: 1230  Lines: 24  Modified: 2025-08-30T20:32:23Z
SHA256: 0804c0a3efa7ae01d592c5de2ac1b2e408c15b02f4482515e652e629c8140239   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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
```
===== FILE END =====

### workflow-tools/dev-all/bootstrap-fedora.sh

<a id="workflow-tools-dev-all-bootstrap-fedora-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/bootstrap-fedora.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/bootstrap-fedora.sh
Bytes: 486  Lines: 20  Modified: 2025-08-31T23:23:07Z
SHA256: 5ffe78e3604b4bd89a7bffceef2e0d7fe320263304993475982111aaf895316f   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

# ---- minimal system deps (Fedora / rpm-based) ----
# If Node is already installed, these dnf lines will no-op.
sudo dnf -y install \
  git tmux lsof nc jq ripgrep ed xdg-utils \
  nodejs npm

# Optional (often already present)
# sudo dnf -y install make gcc-c++ python3

# ---- node workspace deps ----
# install using the workspace root (monorepo)
npm i -W

echo
echo "✔ deps installed. Try:"
echo "  ./workflow-tools/dev-all/dev-all.sh up"

```
===== FILE END =====

### workflow-tools/dev-all/dev-all.sh

<a id="workflow-tools-dev-all-dev-all-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/dev-all.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/dev-all.sh
Bytes: 1717  Lines: 60  Modified: 2025-08-31T18:47:09Z
SHA256: 76b4ce0cae485ad0a53cd92b114866d40a21f8f5c8565a0ced68b10c4623b0f5   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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

```
===== FILE END =====

### workflow-tools/dev-all/helpers/build.sh

<a id="workflow-tools-dev-all-helpers-build-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/build.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/build.sh
Bytes: 1432  Lines: 57  Modified: 2025-09-01T04:06:26Z
SHA256: d5246c6385d035b73497f8013be6c75061270ee1735a778eef5ce507d89f9837   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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

echo "▶ [$NAME] Building once with Turbo (warm-up)…"


# Fallback to tsc if turbo isn't installed
if npx turbo --version >/dev/null 2>&1; then
  # prebuild packages only (safe + cached)
  npx turbo run build --filter=./packages/*
else
  echo "WARN: turbo not found; falling back to plain tsc"
  npx tsc -b "${PKG_DIRS[@]}"
fi


echo "✔ build done"

```
===== FILE END =====

### workflow-tools/dev-all/helpers/display/nice_display.sh

<a id="workflow-tools-dev-all-helpers-display-nice-display-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/display/nice_display.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/display/nice_display.sh
Bytes: 3144  Lines: 80  Modified: 2025-08-31T18:23:37Z
SHA256: 8210d51198debe1acf83ec0af3159703013701ca06c4e7dea96266c1eef651f6   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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

```
===== FILE END =====

### workflow-tools/dev-all/helpers/display/web_hud.html

<a id="workflow-tools-dev-all-helpers-display-web-hud-html"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/display/web_hud.html
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/display/web_hud.html
Bytes: 2866  Lines: 75  Modified: 2025-08-31T22:09:38Z
SHA256: 03ead7e2a2ee64be5baa3460d1125f0b8b383f61ccaf56b64f0eb5767e56dfca   Language: html   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```html
<!doctype html>
<meta charset="utf-8" />
<title>Warboy HUD</title>
<style>
  :root { color-scheme: dark; }
  body { margin:0; font:14px/1.4 system-ui, -apple-system, Segoe UI, Roboto, sans-serif; background:#0b0b0b; color:#e6e6e6; }
  header.top { position:sticky; top:0; z-index:10; padding:10px 16px; background:#111; border-bottom:1px solid #222; display:flex; gap:12px; align-items:center; }
  header.top h1 { margin:0; font-size:16px; font-weight:600; }
  header.top .status { margin-left:auto; opacity:.7; font-size:12px; }
  .grid { display:flex; flex-direction:column; gap:8px; padding:10px; }
  .pane { background:#0f1012; border:1px solid #222; border-radius:8px; overflow:hidden; }
  .pane header { display:flex; gap:8px; align-items:center; padding:8px 10px; background:#141519; border-bottom:1px solid #1d2230; }
  .title { font-weight:600; }
  .controls { margin-left:auto; display:flex; gap:8px; }
  a, button { background:#1e2533; color:#dce2f2; border:1px solid #2b3547; border-radius:6px; padding:4px 8px; cursor:pointer; font-size:12px; text-decoration:none; }
  a:hover, button:hover { background:#253049; }
  pre { margin:0; padding:10px; max-height:260px; overflow:auto; white-space:pre-wrap; word-break:break-word; background:#0b0c10; }
</style>

<header class="top">
  <h1>Warboy – Live Logs (simple)</h1>
  <div class="status" id="status">loading…</div>
  <div class="controls">
    <button id="kill">Kill HUD</button>
  </div>
</header>

<div class="grid" id="grid"></div>

<script>
const statusEl = document.getElementById('status');
const grid = document.getElementById('grid');
const killBtn = document.getElementById('kill');

async function loadOnce() {
  try {
    const labels = await (await fetch('/labels')).json();
    statusEl.textContent = `${labels.length} streams`;
    grid.innerHTML = '';
    for (const {label} of labels) {
      const wrap = document.createElement('div');
      wrap.className = 'pane';
      wrap.innerHTML = `
        <header>
          <span class="title">${label}</span>
          <div class="controls">
            <a href="/file/${encodeURIComponent(label)}" target="_blank">Open full</a>
          </div>
        </header>
        <pre>loading…</pre>`;
      grid.appendChild(wrap);

      // Fetch last 200 lines
      try {
        const text = await (await fetch(`/tail/${encodeURIComponent(label)}/200`)).text();
        wrap.querySelector('pre').textContent = text || '(empty)';
      } catch (e) {
        wrap.querySelector('pre').textContent = '(failed to load)';
      }
    }
  } catch (e) {
    console.error(e);
    statusEl.textContent = 'error loading';
  }
}

killBtn.onclick = async () => {
  try { await fetch('/shutdown', { method: 'POST' }); } catch {}
  setTimeout(() => location.reload(), 300);
};

loadOnce();
setInterval(loadOnce, 5000); // refresh every 5s
</script>

```
===== FILE END =====

### workflow-tools/dev-all/helpers/display/web_hud.js

<a id="workflow-tools-dev-all-helpers-display-web-hud-js"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/display/web_hud.js
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/display/web_hud.js
Bytes: 4407  Lines: 124  Modified: 2025-08-31T22:53:51Z
SHA256: b7abb5c8a4d4f8dfe2b635dd1f4f4d653ee8b647004a0f05e3239c1910e42030   Language: javascript   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```javascript
#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const http = require('http');
const { spawn } = require('child_process');

// replace the current PORT line with:
const PORT = parseInt(process.env.HUD_PORT || '5599', 10);
const REPO_DIR = process.env.REPO_DIR || process.cwd();
const LOG_DIR = process.env.LOG_DIR || path.join(REPO_DIR, 'workflow-tools/dev-all/logs');
const INDEX_HTML = path.join(__dirname, 'web_hud.html');

function safeStat(p){ try { return fs.statSync(p); } catch { return null; } }

function discover() {
  const picks = new Map();
  const st = safeStat(LOG_DIR);
  if (!st || !st.isDirectory()) return [];

  for (const name of fs.readdirSync(LOG_DIR)) {
    if (name.endsWith('.latest.log')) {
      const label = name.replace(/\.latest\.log$/, '');
      picks.set(label, path.join(LOG_DIR, name));
    }
  }

  const ts = fs.readdirSync(LOG_DIR).filter(n => n.endsWith('.log') && !n.endsWith('.latest.log'));
  const groups = new Map();
  for (const f of ts) {
    const m = /^([^\.]+)\./.exec(f);
    if (!m) continue;
    const label = m[1];
    if (!groups.has(label)) groups.set(label, []);
    groups.get(label).push(f);
  }
  for (const [label, files] of groups) {
    if (!picks.has(label)) {
      const sorted = files
        .map(fn => {
          const full = path.join(LOG_DIR, fn);
          const st2 = safeStat(full);
          return st2?.isFile() ? { full, m: st2.mtimeMs } : null;
        })
        .filter(Boolean)
        .sort((a,b) => b.m - a.m);
      if (sorted[0]) picks.set(label, sorted[0].full);
    }
  }

  return [...picks.entries()]
    .sort((a,b)=>a[0].localeCompare(b[0]))
    .map(([label, file]) => ({label, file}));
}

function sendText(res, code, text, headers={}) {
  res.writeHead(code, {'content-type':'text/plain; charset=utf-8', ...headers});
  res.end(text);
}

function serveIndex(res){
  fs.readFile(INDEX_HTML, 'utf8', (err, html) => {
    if (err) return sendText(res, 500, `Failed to read ${INDEX_HTML}\n${err.message||err}`);
    res.writeHead(200, {'content-type':'text/html; charset=utf-8'});
    res.end(html);
  });
}

function routeLabels(res) {
  res.writeHead(200, {'content-type':'application/json; charset=utf-8'});
  res.end(JSON.stringify(discover()));
}

function resolveLabel(label) {
  const entry = discover().find(x => x.label === label);
  return entry?.file;
}

function routeFile(req, res, label) {
  const file = resolveLabel(label);
  if (!file) return sendText(res, 404, `Unknown label: ${label}`);
  const s = fs.createReadStream(file, {encoding:'utf8'});
  res.writeHead(200, {'content-type':'text/plain; charset=utf-8'});
  s.pipe(res);
}

function routeTail(req, res, label, nStr) {
  const file = resolveLabel(label);
  if (!file) return sendText(res, 404, `Unknown label: ${label}`);
  const n = /^\d+$/.test(nStr) ? nStr : '500';
  const ps = require('child_process').spawn('tail', ['-n', n, file]);
  res.writeHead(200, {'content-type':'text/plain; charset=utf-8', 'cache-control':'no-cache'});
  ps.stdout.pipe(res);
  ps.stderr.on('data', b => res.write(`\n[tail err] ${b}`));
  ps.on('close', () => res.end());
}

function isLoopback(req) {
  const ip = req.socket.remoteAddress || '';
  return ip === '127.0.0.1' || ip === '::1' || ip === '::ffff:127.0.0.1';
}

function routeShutdown(req, res) {
  if (!isLoopback(req)) return sendText(res, 403, 'Forbidden');
  sendText(res, 200, 'Shutting down…');
  setTimeout(() => process.exit(0), 50);
}

const server = http.createServer((req, res) => {
  const u = new URL(req.url, `http://${req.headers.host}`);
  if (req.method === 'GET'  && (u.pathname === '/' || u.pathname === '/index.html')) return serveIndex(res);
  if (req.method === 'GET'  && u.pathname === '/labels') return routeLabels(res);
  if (req.method === 'GET'  && u.pathname.startsWith('/file/')) return routeFile(req, res, decodeURIComponent(u.pathname.slice(6)));
  if (req.method === 'GET'  && u.pathname.startsWith('/tail/')) {
    const parts = u.pathname.split('/'); // /tail/<label>/<n?>
    return routeTail(req, res, decodeURIComponent(parts[2] || ''), decodeURIComponent(parts[3] || '500'));
  }
  if (req.method === 'POST' && u.pathname === '/shutdown') return routeShutdown(req, res);
  sendText(res, 404, 'Not found');
});

server.listen(PORT, '127.0.0.1', () => {
  console.log(`[web-hud] http://localhost:${PORT}  logs=${LOG_DIR}`);
});

```
===== FILE END =====

### workflow-tools/dev-all/helpers/display/web_hud.sh

<a id="workflow-tools-dev-all-helpers-display-web-hud-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/display/web_hud.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/display/web_hud.sh
Bytes: 1429  Lines: 44  Modified: 2025-08-31T23:51:15Z
SHA256: 38f9957357b22497dd3b18d8615f24b26f4adb808c38f36b8aa51b7c57417398   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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

```
===== FILE END =====

### workflow-tools/dev-all/helpers/healthcheck.sh

<a id="workflow-tools-dev-all-helpers-healthcheck-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/healthcheck.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/healthcheck.sh
Bytes: 2343  Lines: 90  Modified: 2025-08-31T00:32:36Z
SHA256: 788aa25b14b4bef5d7478da01d75ed591c890ad77b42cf81ab5d0733715dcd9e   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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

```
===== FILE END =====

### workflow-tools/dev-all/helpers/hud.sh

<a id="workflow-tools-dev-all-helpers-hud-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/hud.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/hud.sh
Bytes: 6455  Lines: 165  Modified: 2025-08-31T23:51:12Z
SHA256: bddf1afc8f50578d1ef263919e0b9abb11f76dd0bb2002e86b0bab7c78f544ac   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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

```
===== FILE END =====

### workflow-tools/dev-all/helpers/launch.sh

<a id="workflow-tools-dev-all-helpers-launch-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/launch.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/launch.sh
Bytes: 5700  Lines: 182  Modified: 2025-08-31T23:51:12Z
SHA256: e7016432e01e30996d7c0e90ed6a6a287ea721e3da7d975866f01e7b0cd24534   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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

```
===== FILE END =====

### workflow-tools/dev-all/helpers/prep.sh

<a id="workflow-tools-dev-all-helpers-prep-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/prep.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/prep.sh
Bytes: 935  Lines: 28  Modified: 2025-08-31T23:51:12Z
SHA256: 4c05d94ea89f0ec246a4de9f2588b5b4e7880230de53ce90b761d03a96bdc073   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
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

```
===== FILE END =====

### workflow-tools/dev-all/helpers/stop.sh

<a id="workflow-tools-dev-all-helpers-stop-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/stop.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/stop.sh
Bytes: 1313  Lines: 40  Modified: 2025-08-31T23:51:12Z
SHA256: 4409308477fc270a3fe95154557b08ad8e3379a4c12d1d62a10150f37e65f28a   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail
NAME="${1:-warboy}"

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
[ -f "$ROOT_DIR/.env" ] && set -a && . "$ROOT_DIR/.env" && set +a
cd "$ROOT_DIR"

# Keep these in sync with web_hud.sh
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"
PORT="${PORT:-5599}"
PID_FILE="$LOG_DIR/.web_hud.pid"

echo "▶ Stopping tmux session '$NAME' (if any)…"
tmux has-session -t "$NAME" 2>/dev/null && tmux kill-session -t "$NAME" || true

echo "▶ Freeing ports…"
PORTS=(8787 8790 8789 8788 5173 5175 5177 "$PORT")
for p in "${PORTS[@]}"; do lsof -ti :"$p" | xargs -r kill -9 || true; done
# workflow-tools/dev-all/helpers/stop.sh
# ...
echo "▶ Killing common watchers…"
pkill -f "tsx.*watch" 2>/dev/null || true
pkill -f "vite.*dev" 2>/dev/null || true
pkill -f "tsc -b -w" 2>/dev/null || true

# Kill Web HUD (PID file + fallback)
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(cd "$SCRIPT_DIR/../../.." && pwd)"
[ -f "$ROOT_DIR/.env" ] && set -a && . "$ROOT_DIR/.env" && set +a
LOG_DIR="$ROOT_DIR/workflow-tools/dev-all/logs"
PID_FILE="$LOG_DIR/.web_hud.pid"
if [ -f "$PID_FILE" ]; then
  kill "$(cat "$PID_FILE")" 2>/dev/null || true
  rm -f "$PID_FILE"
fi
pkill -f "helpers/display/web_hud.js" 2>/dev/null || true

echo "✔ stopped"

```
===== FILE END =====

### workflow-tools/dev-all/helpers/verify-turbo.sh

<a id="workflow-tools-dev-all-helpers-verify-turbo-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-all/helpers/verify-turbo.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/helpers/verify-turbo.sh
Bytes: 3417  Lines: 116  Modified: 2025-09-01T01:23:39Z
SHA256: 28421ad26bb166bb40371481353f14ae4276acd6ada1ba8df2e3c30699ab09c8   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/../../.." && pwd)"
cd "$ROOT_DIR"

need() { command -v "$1" >/dev/null 2>&1 || { echo "ERROR: missing '$1'"; exit 1; }; }
need node
need npm
need sed
need grep

FIX=0
if [ "${1:-}" = "--fix" ]; then FIX=1; fi

PASS=()
FAIL=()
NOTE=()

# 1) package.json must have packageManager
if node -e "const p=require('./package.json'); process.exit(p.packageManager?0:1)"; then
  PASS+=("packageManager present")
else
  FAIL+=("packageManager missing in package.json")
  if [ $FIX -eq 1 ]; then
    ver="$(npm -v)"
    # insert after the "private" field or after "name"
    node -e "
      const fs=require('fs');
      const p=require('./package.json');
      p.packageManager = p.packageManager || 'npm@${ver}';
      fs.writeFileSync('package.json', JSON.stringify(p, null, 2)+'\n');
    "
    NOTE+=("Added packageManager: npm@${ver}")
  fi
fi

# 2) devDependencies.turbo should exist exactly once
hasTurbo=$(node -e "const p=require('./package.json');process.exit(p.devDependencies && p.devDependencies.turbo ? 0:1)" && echo yes || echo no)
if [ "$hasTurbo" = "yes" ]; then
  PASS+=("turbo present")
else
  FAIL+=("turbo missing in devDependencies")
  if [ $FIX -eq 1 ]; then
    npm i -D turbo >/dev/null 2>&1 || true
    NOTE+=("Installed turbo as devDependency")
  fi
fi

# Ensure no duplicate turbo entries (sometimes bad merges create two)
dups=$(grep -n '"turbo"' package.json | wc -l)
if [ "$dups" -gt 1 ]; then
  FAIL+=("duplicate 'turbo' entries in package.json")
  if [ $FIX -eq 1 ]; then
    # normalize to a single ^2.5.6 (adjust version if you want)
    node -e "
      const fs=require('fs');
      const p=require('./package.json');
      p.devDependencies = p.devDependencies || {};
      p.devDependencies.turbo = p.devDependencies.turbo || '^2.5.6';
      fs.writeFileSync('package.json', JSON.stringify(p, null, 2)+'\n');
    "
    NOTE+=("Normalized turbo to a single entry in devDependencies")
  fi
fi

# 3) turbo.json exists
if [ -f turbo.json ]; then
  PASS+=("turbo.json present")
else
  FAIL+=("turbo.json missing")
fi

# 4) .gitignore should contain .turbo/
if grep -qxF ".turbo/" .gitignore; then
  PASS+=(".turbo/ ignored")
else
  FAIL+=(".turbo/ not in .gitignore")
  if [ $FIX -eq 1 ]; then
    echo ".turbo/" >> .gitignore
    NOTE+=("Added '.turbo/' to .gitignore")
  fi
fi

# 5) (Info) Build scripts present in key workspaces (best-effort)
check_build() {
  local d="$1"
  [ -f "$d/package.json" ] || { NOTE+=("No package.json in $d"); return; }
  if node -e "const p=require('./$d/package.json');process.exit(p.scripts && p.scripts.build ? 0:1)"; then
    PASS+=("$d has build script")
  else
    NOTE+=("$d has no build script (tsc fallback will be used if needed)")
  fi
}
check_build apps/game-server
check_build apps/game-web
check_build packages/chat
check_build packages/net
check_build packages/overlays
check_build packages/world

echo "=== Turbo Verify ==="
for p in "${PASS[@]}"; do echo "✅ $p"; done
for f in "${FAIL[@]}"; do echo "❌ $f"; done
for n in "${NOTE[@]}"; do echo "ℹ️  $n"; done

if [ ${#FAIL[@]} -gt 0 ] && [ $FIX -eq 0 ]; then
  echo
  echo "Run again with --fix to auto-remediate what’s safe:"
  echo "  bash workflow-tools/dev-all/helpers/verify-turbo.sh --fix"
  exit 1
fi

echo
echo "Try a quick build:"
echo "  npx turbo run build  # (uses cache; fast on repeat)"
```
===== FILE END =====

### workflow-tools/dev-all/logs/.web_hud.err.log

<a id="workflow-tools-dev-all-logs-web-hud-err-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/.web_hud.err.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/.web_hud.err.log
Bytes: 0  Lines: 0  Modified: 2025-09-06T15:21:04Z
SHA256: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/.web_hud.out.log

<a id="workflow-tools-dev-all-logs-web-hud-out-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/.web_hud.out.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/.web_hud.out.log
Bytes: 106  Lines: 1  Modified: 2025-09-06T15:21:04Z
SHA256: b9a1912f5ff69be4f95fa670fe44f2ac5aa2b5efa93339625c1da4fcadd49504   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/.web_hud.pid

<a id="workflow-tools-dev-all-logs-web-hud-pid"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/.web_hud.pid
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/.web_hud.pid
Bytes: 7  Lines: 1  Modified: 2025-09-06T15:21:04Z
SHA256: adcbdc1fd4e8486726e6bbee052febf7d6332289dd3be05ea19194cd453cd27a   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/admin-api.warboy-20250901-094629.log

<a id="workflow-tools-dev-all-logs-admin-api-warboy-20250901-094629-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/admin-api.warboy-20250901-094629.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/admin-api.warboy-20250901-094629.log
Bytes: 100  Lines: 5  Modified: 2025-09-01T14:46:34Z
SHA256: 15be220bb0ed839d9750b81feded4549ddf66781afecfe4f181137f053a7684d   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/admin-api.warboy-20250901-184121.log

<a id="workflow-tools-dev-all-logs-admin-api-warboy-20250901-184121-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/admin-api.warboy-20250901-184121.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/admin-api.warboy-20250901-184121.log
Bytes: 100  Lines: 5  Modified: 2025-09-01T23:41:25Z
SHA256: 7125dab77f5809d60c0f3209129592a8f53b84c5158beb3bce97d6b29d73dd45   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/admin-api.warboy-20250906-102058.log

<a id="workflow-tools-dev-all-logs-admin-api-warboy-20250906-102058-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/admin-api.warboy-20250906-102058.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/admin-api.warboy-20250906-102058.log
Bytes: 100  Lines: 5  Modified: 2025-09-06T15:21:05Z
SHA256: 1547462d17a3250fc17496ede09716751fe34adb28896c96702264742230bc8d   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/admin-web.warboy-20250901-094629.log

<a id="workflow-tools-dev-all-logs-admin-web-warboy-20250901-094629-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/admin-web.warboy-20250901-094629.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/admin-web.warboy-20250901-094629.log
Bytes: 1429  Lines: 25  Modified: 2025-09-01T14:46:35Z
SHA256: fca6e3c2906407806a36a078e7eb68330f6ca71ec63beb0c4309f69afd2487bc   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/admin-web.warboy-20250901-184121.log

<a id="workflow-tools-dev-all-logs-admin-web-warboy-20250901-184121-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/admin-web.warboy-20250901-184121.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/admin-web.warboy-20250901-184121.log
Bytes: 1429  Lines: 25  Modified: 2025-09-01T23:41:26Z
SHA256: 6e36124ab6e6ca6d40f8d10d319d15f9d715f04a9bc956716573ebe0c0e5ee8c   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/admin-web.warboy-20250906-102058.log

<a id="workflow-tools-dev-all-logs-admin-web-warboy-20250906-102058-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/admin-web.warboy-20250906-102058.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/admin-web.warboy-20250906-102058.log
Bytes: 1429  Lines: 25  Modified: 2025-09-06T15:21:05Z
SHA256: f0aab47a6a105f2ac54520f9da06be8d24a32e3e82327ddce06de11176aa6307   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/chat-server.warboy-20250901-094629.log

<a id="workflow-tools-dev-all-logs-chat-server-warboy-20250901-094629-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/chat-server.warboy-20250901-094629.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/chat-server.warboy-20250901-094629.log
Bytes: 147  Lines: 6  Modified: 2025-09-01T14:46:35Z
SHA256: 398048d55d373ac6d9da6389ae88c6df7fdee61b9cbacb46f454e17a236355de   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/chat-server.warboy-20250901-184121.log

<a id="workflow-tools-dev-all-logs-chat-server-warboy-20250901-184121-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/chat-server.warboy-20250901-184121.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/chat-server.warboy-20250901-184121.log
Bytes: 147  Lines: 6  Modified: 2025-09-01T23:41:26Z
SHA256: 20d5e043464f97d4b3713e4c9000b2ff876af362320ffef74826a23ed22aad8a   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/chat-server.warboy-20250906-102058.log

<a id="workflow-tools-dev-all-logs-chat-server-warboy-20250906-102058-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/chat-server.warboy-20250906-102058.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/chat-server.warboy-20250906-102058.log
Bytes: 147  Lines: 6  Modified: 2025-09-06T15:21:05Z
SHA256: dfe7bf6e7d44d4bde5bdfd9c44329c80d38322c809641ba8df4f56576d3c1bb7   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/game-server.warboy-20250901-094629.log

<a id="workflow-tools-dev-all-logs-game-server-warboy-20250901-094629-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/game-server.warboy-20250901-094629.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/game-server.warboy-20250901-094629.log
Bytes: 96  Lines: 6  Modified: 2025-09-01T14:46:34Z
SHA256: 0f060847c8f847475d84e1db28968f9d5238974e26d33b5374c3d3425f3339bd   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/game-server.warboy-20250901-184121.log

<a id="workflow-tools-dev-all-logs-game-server-warboy-20250901-184121-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/game-server.warboy-20250901-184121.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/game-server.warboy-20250901-184121.log
Bytes: 96  Lines: 6  Modified: 2025-09-01T23:41:26Z
SHA256: 621362276654ebb3a3ab05e1537642e6b6c9cb294ed967ae42b9d26815687174   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/game-server.warboy-20250906-102058.log

<a id="workflow-tools-dev-all-logs-game-server-warboy-20250906-102058-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/game-server.warboy-20250906-102058.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/game-server.warboy-20250906-102058.log
Bytes: 96  Lines: 6  Modified: 2025-09-06T15:21:05Z
SHA256: 54b9f3cfa46cf420a0320e92de5f126e1e3610bcb70a82dbbe05674f82bfed10   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/game-web.warboy-20250901-094629.log

<a id="workflow-tools-dev-all-logs-game-web-warboy-20250901-094629-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/game-web.warboy-20250901-094629.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/game-web.warboy-20250901-094629.log
Bytes: 847  Lines: 22  Modified: 2025-09-01T18:16:28Z
SHA256: 7502ac8aea186af71da21a1ef158466aec77bd9ecec6896466d175bfcdfd67ae   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/game-web.warboy-20250901-184121.log

<a id="workflow-tools-dev-all-logs-game-web-warboy-20250901-184121-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/game-web.warboy-20250901-184121.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/game-web.warboy-20250901-184121.log
Bytes: 367  Lines: 12  Modified: 2025-09-01T23:41:26Z
SHA256: 9e0548f7bcee55f03438b9af178e19dbcf3045dc20686e78e3aef708da9f7555   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/game-web.warboy-20250906-102058.log

<a id="workflow-tools-dev-all-logs-game-web-warboy-20250906-102058-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/game-web.warboy-20250906-102058.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/game-web.warboy-20250906-102058.log
Bytes: 284  Lines: 11  Modified: 2025-09-06T15:21:05Z
SHA256: 9a24144fc63abdc766c3b5c6d3c5d7f94282736140c6f215706603b8a924cc4a   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/packages-watch.warboy-20250901-094629.log

<a id="workflow-tools-dev-all-logs-packages-watch-warboy-20250901-094629-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/packages-watch.warboy-20250901-094629.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/packages-watch.warboy-20250901-094629.log
Bytes: 168  Lines: 5  Modified: 2025-09-01T14:46:34Z
SHA256: 373962b692b184a8317ed863b85c8b320e69edc27e9b85cf0dd6195301e44a84   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/packages-watch.warboy-20250901-184121.log

<a id="workflow-tools-dev-all-logs-packages-watch-warboy-20250901-184121-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/packages-watch.warboy-20250901-184121.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/packages-watch.warboy-20250901-184121.log
Bytes: 168  Lines: 5  Modified: 2025-09-01T23:41:26Z
SHA256: 88c399398b726cf05754704056fa0a186ad1c0643b4bce827297f13f76538724   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-all/logs/packages-watch.warboy-20250906-102058.log

<a id="workflow-tools-dev-all-logs-packages-watch-warboy-20250906-102058-log"></a>
===== FILE START =====
Path: workflow-tools/dev-all/logs/packages-watch.warboy-20250906-102058.log
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-all/logs/packages-watch.warboy-20250906-102058.log
Bytes: 170  Lines: 5  Modified: 2025-09-06T15:21:05Z
SHA256: 3f6d4d59a8299c0c171e2d3f893a4c0b1f2fbd60d04011c5107265a8cd912837   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/dev-tmux.sh

<a id="workflow-tools-dev-tmux-sh"></a>
===== FILE START =====
Path: workflow-tools/dev-tmux.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/dev-tmux.sh
Bytes: 1559  Lines: 46  Modified: 2025-08-30T20:32:23Z
SHA256: 7b49d9a509e0b1920a87558486dfb7bb43ca9b0dceeb10c73c3afbe1c5331026   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

NAME=warboy
ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

# Kill old session & free ports
tmux has-session -t "$NAME" 2>/dev/null && tmux kill-session -t "$NAME" || true
PORTS=(8787 8790 5173 5175)
echo "▶ Killing anything on ${PORTS[*]}..."
for p in "${PORTS[@]}"; do lsof -ti :"$p" | xargs -r kill -9 || true; done

# Clean & build
echo "▶ Cleaning dists…"
rm -rf apps/game-server/dist apps/game-web/dist || true
find packages -maxdepth 2 -name dist -type d -exec rm -rf {} +

echo "▶ Building shared packages…"
npm run -w @warboy/overlays build || true
npm run -w @warboy/world    build || true
npm run -w @warboy/chat     build || true
npm run -w @warboy/net      build || true
npm run -w game-server      build

# New tmux session
tmux new-session -d -s "$NAME" -n dev

# Pane 0: game-server
tmux send-keys -t "$NAME":0.0 "cd $ROOT_DIR; node apps/game-server/dist/index.js" C-m

# Pane 1: game-web (vite)
tmux split-window -h -t "$NAME":0
tmux send-keys -t "$NAME":0.1 "cd $ROOT_DIR/apps/game-web; npm run dev -- --host 0.0.0.0 --port 5175 --strictPort" C-m

# Pane 2: chat-server (tsx watch)
tmux split-window -v -t "$NAME":0.0
tmux send-keys -t "$NAME":0.2 "cd $ROOT_DIR/apps/chat-server; npm run dev" C-m

# Pane 3: utils shell
tmux split-window -v -t "$NAME":0.1
tmux send-keys -t "$NAME":0.3 "cd $ROOT_DIR; echo 'utils pane ready (curl/wscat here)'; bash" C-m

tmux select-layout -t "$NAME":0 tiled
tmux select-pane -t "$NAME":0.3 -T 'utils' 2>/dev/null || true
tmux attach -t "$NAME"
```
===== FILE END =====

### workflow-tools/devserver-wizard.sh

<a id="workflow-tools-devserver-wizard-sh"></a>
===== FILE START =====
Path: workflow-tools/devserver-wizard.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/devserver-wizard.sh
Bytes: 3800  Lines: 125  Modified: 2025-08-30T19:29:00Z
SHA256: dc2065a0c58c6435005131ae544b3473e01c50d35cc03bd777d22245b47fded8   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")/.." && pwd)"
APPS_DIR="${ROOT_DIR}/apps"

have(){ command -v "$1" >/dev/null 2>&1; }

detect_lan_ip() {
  # try hostname -I, then ip route
  local ip
  ip="$(hostname -I 2>/dev/null | awk '{print $1}' || true)"
  if [[ -z "$ip" ]]; then
    ip="$(ip route get 1 2>/dev/null | awk '/src/ {for(i=1;i<=NF;i++) if($i=="src"){print $(i+1); exit}}' || true)"
  fi
  echo "${ip:-127.0.0.1}"
}

# 1) Find vite apps
mapfile -t VITE_APPS < <(find "$APPS_DIR" -maxdepth 2 -type f \( -name vite.config.ts -o -name vite.config.js \) -printf '%h\n' | sort -u)
if [[ ${#VITE_APPS[@]} -eq 0 ]]; then
  echo "❌ No Vite apps found under ${APPS_DIR}."
  exit 1
fi

echo "🧙  Dev Server Wizard"
echo
echo "Found Vite apps:"
i=1
for p in "${VITE_APPS[@]}"; do
  echo "  $i) ${p#${ROOT_DIR}/}"
  ((i++))
done

read -rp "Pick an app [1-${#VITE_APPS[@]}]: " CH
[[ "$CH" =~ ^[0-9]+$ ]] && (( CH>=1 && CH<=${#VITE_APPS[@]} )) || { echo "Invalid choice"; exit 1; }
APP_DIR="${VITE_APPS[$((CH-1))]}"
APP_REL="${APP_DIR#${ROOT_DIR}/}"
ENV_FILE="${APP_DIR}/.env.local"

# 2) Gather params
LAN_IP="$(detect_lan_ip)"
DEFAULT_PORT=5173
read -rp "Server host (default: 0.0.0.0 to bind all): " VITE_HOST
VITE_HOST="${VITE_HOST:-0.0.0.0}"

read -rp "Server port (default: ${DEFAULT_PORT}): " VITE_PORT
VITE_PORT="${VITE_PORT:-$DEFAULT_PORT}"

read -rp "HMR host (for cross-device live reload; default: ${LAN_IP}): " VITE_HMR_HOST
VITE_HMR_HOST="${VITE_HMR_HOST:-$LAN_IP}"

read -rp "HMR protocol (ws/wss) [ws]: " VITE_HMR_PROTO
VITE_HMR_PROTO="${VITE_HMR_PROTO:-ws}"

read -rp "HMR port (default: same as server port ${VITE_PORT}): " VITE_HMR_PORT
VITE_HMR_PORT="${VITE_HMR_PORT:-$VITE_PORT}"

# 3) Write .env.local (idempotent replace)
tmp="$(mktemp)"
cat >"$tmp" <<EOF
# Generated by devserver-wizard.sh
VITE_HOST=${VITE_HOST}
VITE_PORT=${VITE_PORT}
VITE_HMR_HOST=${VITE_HMR_HOST}
VITE_HMR_PROTO=${VITE_HMR_PROTO}
VITE_HMR_PORT=${VITE_HMR_PORT}
EOF
mv "$tmp" "$ENV_FILE"

echo
echo "✅ Wrote ${APP_REL}/.env.local with:"
cat "$ENV_FILE"

# 4) Offer to open firewall (Linux)
if have firewall-cmd; then
  read -rp "Open firewall for TCP ${VITE_PORT} with firewalld? [y/N]: " A
  if [[ "$A" =~ ^[Yy]$ ]]; then
    sudo firewall-cmd --add-port="${VITE_PORT}"/tcp --permanent
    sudo firewall-cmd --reload
    echo "✅ firewalld opened for ${VITE_PORT}/tcp"
  fi
elif have ufw; then
  read -rp "Open firewall for TCP ${VITE_PORT} with UFW? [y/N]: " A
  if [[ "$A" =~ ^[Yy]$ ]]; then
    sudo ufw allow "${VITE_PORT}/tcp"
    echo "✅ UFW opened for ${VITE_PORT}/tcp"
  fi
else
  echo "ℹ️  No known firewall tool detected (firewalld/ufw)."
fi

# 5) (Optional) Print Apache reverse proxy vhost
read -rp "Print an Apache HTTPS proxy vhost snippet (warboy.local style)? [y/N]: " PV
if [[ "$PV" =~ ^[Yy]$ ]]; then
  read -rp "Dev hostname to use (default: $(basename "$APP_DIR").local): " DEV_HOST
  DEV_HOST="${DEV_HOST:-$(basename "$APP_DIR").local}"
  cat <<SNIP

# Save as: /etc/httpd/conf.d/${DEV_HOST}-proxy.conf
<VirtualHost *:443>
  ServerName ${DEV_HOST}
  SSLEngine on
  SSLCertificateFile /etc/pki/tls/local/${DEV_HOST}/${DEV_HOST}.crt
  SSLCertificateKeyFile /etc/pki/tls/local/${DEV_HOST}/${DEV_HOST}.key

  ProxyPreserveHost On
  ProxyPass        / http://127.0.0.1:${VITE_PORT}/
  ProxyPassReverse / http://127.0.0.1:${VITE_PORT}/

  Header always set Strict-Transport-Security "max-age=31536000; includeSubDomains"
</VirtualHost>

# Then:
#   - issue a local cert (mkcert) for ${DEV_HOST}
#   - add '127.0.0.1 ${DEV_HOST}' to /etc/hosts
#   - sudo httpd -t && sudo systemctl reload httpd
SNIP
fi

echo
echo "🎯 Next:"
echo "  cd ${APP_REL} && npm run dev"
echo "  On other devices: http://${VITE_HMR_HOST}:${VITE_PORT}/"

```
===== FILE END =====

### workflow-tools/git/gitready.sh

<a id="workflow-tools-git-gitready-sh"></a>
===== FILE START =====
Path: workflow-tools/git/gitready.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/git/gitready.sh
Bytes: 2232  Lines: 78  Modified: 2025-09-06T16:45:29Z
SHA256: 218ebbdac892ec0c2190b0e7c5df6d78137ec969e63015b3d52f6555cb394e9a   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

INCLUDE_BUNDLE=1
RUN_DIGESTR_CHECK=1
DO_PUSH=1
DO_REGEN=0
COMMIT_MSG=""
STAGE_LIST=("README.md" "package.json" "turbo.json")

usage() {
  cat <<'USAGE'
gitready.sh [options] --message "your commit message"

Options:
  --regen             Run bundler before checks (npm run -s digestr:tree)
  --no-bundle         Do not stage PROJECT_BUNDLE.md
  --no-check          Do not run 'npm run -s digestr:check'
  --no-push           Do not push after commit
  --stage PATH        Stage an additional path (can repeat)
  --message MSG       Commit message (required)
  -h, --help          Show this help
USAGE
}

# Parse args
while [[ $# -gt 0 ]]; do
  case "$1" in
    --regen)     DO_REGEN=1; shift;;
    --no-bundle) INCLUDE_BUNDLE=0; shift;;
    --no-check)  RUN_DIGESTR_CHECK=0; shift;;
    --no-push)   DO_PUSH=0; shift;;
    --stage)
      [[ $# -ge 2 ]] || { echo "ERROR: --stage requires a path"; exit 1; }
      STAGE_LIST+=("$2"); shift 2;;
    --message)
      [[ $# -ge 2 ]] || { echo "ERROR: --message requires a string"; exit 1; }
      COMMIT_MSG="$2"; shift 2;;
    -h|--help)   usage; exit 0;;
    *) echo "Unknown arg: $1"; usage; exit 1;;
  esac
done

[[ -n "$COMMIT_MSG" ]] || { echo "ERROR: --message is required"; exit 1; }

# Sanity: inside a git repo, on a branch
git rev-parse --show-toplevel >/dev/null 2>&1 || { echo "ERROR: not a git repo"; exit 1; }
BRANCH="$(git rev-parse --abbrev-ref HEAD || true)"
[[ -n "$BRANCH" && "$BRANCH" != "HEAD" ]] || { echo "ERROR: not on a named branch"; exit 1; }

# Optional regeneration (makes bundle fresh)
if [[ "$DO_REGEN" -eq 1 ]]; then
  npm run -s digestr:tree
fi

# Optional freshness check (fast)
if [[ "$RUN_DIGESTR_CHECK" -eq 1 ]]; then
  npm run -s digestr:check
fi

# Stage files (plus bundle if requested and exists)
for p in "${STAGE_LIST[@]}"; do
  [[ -e "$p" ]] && git add "$p" || true
done
if [[ "$INCLUDE_BUNDLE" -eq 1 && -f PROJECT_BUNDLE.md ]]; then
  git add PROJECT_BUNDLE.md
fi

# If nothing to commit, abort gracefully
if git diff --cached --quiet; then
  echo "Nothing staged to commit. Exiting."
  exit 0
fi

git commit -m "$COMMIT_MSG"
if [[ "$DO_PUSH" -eq 1 ]]; then git push; fi

echo "Done. Branch: $BRANCH"
```
===== FILE END =====

### workflow-tools/proj_digestr/helpers/args.sh

<a id="workflow-tools-proj-digestr-helpers-args-sh"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/helpers/args.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/helpers/args.sh
Bytes: 2525  Lines: 63  Modified: 2025-09-01T06:47:32Z
SHA256: 12f97b8612ac2fbd3c75b9906b95bb23522907fa09d16549751ddc7010d26d06   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

# Defaults here are only for help text; real defaults live in config.sh
parse_args() {
  ARGS_ROOT=""
  ARGS_OUT=""
  ARGS_MAX_LINES=""
  ARGS_HEAD_TAKE=""
  ARGS_TAIL_TAKE=""
  ARGS_ALLOW_EXT=""
  ARGS_INCLUDE=""
  ARGS_EXCLUDE=""
  ARGS_PARALLEL=""
  ARGS_NO_GIT=""
  ARGS_APPEND_TREE=""
  ARGS_TREE_DEPTH=""

  while [[ $# -gt 0 ]]; do
    case "$1" in
      -r|--root)          ARGS_ROOT="${2:-}"; shift 2;;
      -o|--out)           ARGS_OUT="${2:-}"; shift 2;;
      --max-lines)        ARGS_MAX_LINES="${2:-}"; shift 2;;
      --head)             ARGS_HEAD_TAKE="${2:-}"; shift 2;;
      --tail)             ARGS_TAIL_TAKE="${2:-}"; shift 2;;
      --allow-ext)        ARGS_ALLOW_EXT="${2:-}"; shift 2;; # csv,tsv,astro
      -I|--include)       ARGS_INCLUDE="${2:-}"; shift 2;;   # glob (can repeat via comma)
      -X|--exclude)       ARGS_EXCLUDE="${2:-}"; shift 2;;   # glob (can repeat via comma)
      -j|--parallel)      ARGS_PARALLEL="${2:-}"; shift 2;;  # 1..N
      --no-git)           ARGS_NO_GIT=1; shift;;
      --append-tree)      ARGS_APPEND_TREE=1; shift;;
      --tree-depth)       ARGS_TREE_DEPTH="${2:-}"; shift 2;;
      -h|--help)
        cat <<EOF
Usage: main.sh [options]

Options:
  -r,  --root DIR          Root directory to bundle.
                           Default: git repo root if available, else <this-script>/../..
  -o,  --out FILE          Output markdown (default: PROJECT_BUNDLE.md or \$OUT)
       --max-lines N       Truncate files larger than N lines (default: 999 or \$MAX_LINES)
       --head N            When truncating, take first N lines (default: 333 or \$HEAD_TAKE)
       --tail N            When truncating, take last N lines (default: 333 or \$TAIL_TAKE)
       --allow-ext LIST    Extra textual extensions (comma-separated), e.g. "astro,svelte"
  -I,   --include GLOBS    Comma-separated include globs (evaluated relative to --root)
  -X,   --exclude GLOBS    Comma-separated exclude globs (in addition to built-ins)
  -j,   --parallel N       Emit sections in parallel (default: 1)
       --no-git            Do not attempt to resolve git URLs
       --append-tree       Append a directory tree summary at the end
       --tree-depth N      Depth for the appended tree (default: 3)
  -h,   --help             Show this help

Environment overrides (same as before):
  ROOT, OUT, MAX_LINES, HEAD_TAKE, TAIL_TAKE, ALLOW_EXT
EOF
        exit 0
        ;;
      *)
        echo "Unknown option: $1" >&2; exit 1;;
    esac
  done
}

```
===== FILE END =====

### workflow-tools/proj_digestr/helpers/config.sh

<a id="workflow-tools-proj-digestr-helpers-config-sh"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/helpers/config.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/helpers/config.sh
Bytes: 2432  Lines: 79  Modified: 2025-09-01T05:42:42Z
SHA256: 8ba2ed15ad580f8e7e7e49ec44ca55e16645bbf109bf4f50f0e6e950647fde2d   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

# Base defaults (your original)
CONF_OUT="PROJECT_BUNDLE.md"
CONF_MAX_LINES=999
CONF_HEAD_TAKE=333
CONF_TAIL_TAKE=333
CONF_PARALLEL=1
CONF_INCLUDE_GLOBS=""   # empty = include all (minus prunes)
CONF_EXCLUDE_GLOBS=""   # extra user excludes
CONF_ROOT=""            # repo root to scan
CONF_APPEND_TREE=0
CONF_TREE_DEPTH=3

# Merge env + CLI
config_init() {
  # Script location (used for fallback root)
  local SELF_DIR
  SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"

  # ROOT
  if [[ -n "${ARGS_ROOT:-}" ]]; then
    CONF_ROOT="$ARGS_ROOT"
  elif [[ -n "${ROOT:-}" ]]; then
    CONF_ROOT="$ROOT"
  else
    # try git top-level; fallback to script/../..
    if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
      CONF_ROOT="$(git rev-parse --show-toplevel 2>/dev/null || echo "${SELF_DIR}/..")"
    else
      CONF_ROOT="${SELF_DIR}/.."
    fi
  fi
  # normalize
  CONF_ROOT="$(cd "$CONF_ROOT" && pwd)"

  # OUT
  if [[ -n "${ARGS_OUT:-}" ]];         then CONF_OUT="$ARGS_OUT";
  elif [[ -n "${OUT:-}" ]];            then CONF_OUT="$OUT"; fi
  # If OUT is relative, place it under CONF_ROOT
  [[ "$CONF_OUT" != /* ]] && CONF_OUT="${CONF_ROOT}/${CONF_OUT}"

  # Numeric knobs
  if [[ -n "${ARGS_MAX_LINES:-}" ]];   then CONF_MAX_LINES="$ARGS_MAX_LINES";
  elif [[ -n "${MAX_LINES:-}" ]];      then CONF_MAX_LINES="$MAX_LINES"; fi

  if [[ -n "${ARGS_HEAD_TAKE:-}" ]];   then CONF_HEAD_TAKE="$ARGS_HEAD_TAKE";
  elif [[ -n "${HEAD_TAKE:-}" ]];      then CONF_HEAD_TAKE="$HEAD_TAKE"; fi

  if [[ -n "${ARGS_TAIL_TAKE:-}" ]];   then CONF_TAIL_TAKE="$ARGS_TAIL_TAKE";
  elif [[ -n "${TAIL_TAKE:-}" ]];      then CONF_TAIL_TAKE="$TAIL_TAKE"; fi

  if [[ -n "${ARGS_PARALLEL:-}" ]];    then CONF_PARALLEL="$ARGS_PARALLEL"; fi

  # ext allowlist extras
  CONF_ALLOW_EXT="${ALLOW_EXT:-}"
  if [[ -n "${ARGS_ALLOW_EXT:-}" ]]; then
    if [[ -n "$CONF_ALLOW_EXT" ]]; then
      CONF_ALLOW_EXT="${CONF_ALLOW_EXT},${ARGS_ALLOW_EXT}"
    else
      CONF_ALLOW_EXT="${ARGS_ALLOW_EXT}"
    fi
  fi
  export CONF_ALLOW_EXT

  # include/exclude globs
  [[ -n "${ARGS_INCLUDE:-}" ]] && CONF_INCLUDE_GLOBS="$ARGS_INCLUDE"
  [[ -n "${ARGS_EXCLUDE:-}" ]] && CONF_EXCLUDE_GLOBS="$ARGS_EXCLUDE"

  # git
  CONF_NO_GIT="${ARGS_NO_GIT:-0}"

  # tree
  [[ -n "${ARGS_APPEND_TREE:-}" ]] && CONF_APPEND_TREE=1
  if [[ -n "${ARGS_TREE_DEPTH:-}" ]]; then CONF_TREE_DEPTH="$ARGS_TREE_DEPTH"; fi

}

```
===== FILE END =====

### workflow-tools/proj_digestr/helpers/emit.sh

<a id="workflow-tools-proj-digestr-helpers-emit-sh"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/helpers/emit.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/helpers/emit.sh
Bytes: 4888  Lines: 161  Modified: 2025-09-01T06:47:29Z
SHA256: b50ca9a1b7ef01134704c9cbe8b6ddcd1415a95277343c33045996c24726731f   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

_emit_header_text() {
  cat <<EOF
# Project Bundle

Generated: $(date -u +"%Y-%m-%dT%H:%M:%SZ")

_This is a compact, AI-friendly snapshot of the project._
_Text files with known extensions include content; others are stubs._
_Files >${CONF_MAX_LINES} lines are truncated to the first/last ${CONF_HEAD_TAKE}/${CONF_TAIL_TAKE} lines._
_Use the Table of Contents to jump to any path._
_Git URLs appear when the repo/remote is detected._

## Table of Contents
EOF
}

emit_header() {
  : > "${CONF_OUT}"
  _emit_header_text >> "${CONF_OUT}"
}

emit_toc() {
  for f in "${FILES[@]}"; do
    echo "- [$f](#$(_slug "$f"))" >> "${CONF_OUT}"
  done
  echo >> "${CONF_OUT}"
}

_emit_file_section() {
  local f="$1"
  local f_abs bytes mtime sha lines lang url anchor allowed

  f_abs="$(abs_path "$f")"
  # OUT guard
  [[ "$f_abs" == "$(abs_path "${OUT_ABS:-$CONF_OUT}")" ]] && return 0

  bytes=$(wc -c < "$f" | tr -d ' ')
  mtime=$(date -u -r "$f" +"%Y-%m-%dT%H:%M:%SZ")
  sha=$(sha256sum "$f" | awk '{print $1}')
  lines=$(wc -l < "$f" | tr -d ' ' || echo 0)
  lang="$(_detect_lang "$f")"
  url="$(_file_git_url "$f")"
  anchor="$(_slug "$f")"
  _is_allowed_textual "$f" && allowed=1 || allowed=0

  cat <<EOF
### $f

<a id="$anchor"></a>
===== FILE START =====
Path: $f
URL: ${url:-"(not in git / no remote detected)"}
Bytes: $bytes  Lines: $lines  Modified: $mtime
SHA256: $sha   Language: ${lang:-plain}   Role: source
EOF

  if [[ "$allowed" -eq 0 ]]; then
    echo "Summary: Non-whitelisted type; metadata only."
  elif (( lines > CONF_MAX_LINES )); then
    echo "Summary: Truncated preview; file exceeds $CONF_MAX_LINES lines."
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
    : # stub
  else
    if (( lines > CONF_MAX_LINES )); then
      head -n "$CONF_HEAD_TAKE" -- "$f"
      echo
      echo "…"
      echo "# [omitted middle: $((lines - CONF_HEAD_TAKE - CONF_TAIL_TAKE)) lines]"
      echo "…"
      echo
      tail -n "$CONF_TAIL_TAKE" -- "$f"
    else
      cat -- "$f"
    fi
  fi

  echo '```'
  echo "===== FILE END ====="
  echo
}
# --- Directory Tree Summary (no external deps) ---

# --- Directory Tree Summary that mirrors gathered FILES ---
# --- Directory Tree Summary (prefer system 'tree', fallback to find) ---

emit_tree_section() {
  {
    echo
    echo '---'
    echo
    echo "## Repository Tree (depth: ${CONF_TREE_DEPTH})"
    echo
    echo '```'
    if command -v tree >/dev/null 2>&1; then
      # Use 'tree' with common prunes
      (
        cd "$CONF_ROOT" && \
        tree -a -L "${CONF_TREE_DEPTH}" \
             -I '.git|node_modules|bower_components|dist|build|out|.output|.next|.nuxt|target|coverage|.venv|venv|__pycache__|.cache|.tox|.gradle|.idea|.vscode|.turbo|.pnpm'
      )
    else
      # Portable fallback: BSD/GNU find (no -printf), then awk to draw indentation
      (
        cd "$CONF_ROOT" || exit 1
        {
          find . \
            \( -name .git -o -name node_modules -o -name bower_components \
               -o -name dist -o -name build -o -name out -o -name .output \
               -o -name .next -o -name .nuxt -o -name target -o -name coverage \
               -o -name .venv -o -name venv -o -name __pycache__ -o -name .cache \
               -o -name .tox -o -name .gradle -o -name .idea -o -name .vscode \
               -o -name .turbo -o -name .pnpm \) -prune -o \
            -type d -print | sed 's|^\./||; s|^|D:|'
          find . \
            \( -name .git -o -name node_modules -o -name bower_components \
               -o -name dist -o -name build -o -name out -o -name .output \
               -o -name .next -o -name .nuxt -o -name target -o -name coverage \
               -o -name .venv -o -name venv -o -name __pycache__ -o -name .cache \
               -o -name .tox -o -name .gradle -o -name .idea -o -name .vscode \
               -o -name .turbo -o -name .pnpm \) -prune -o \
            -type f -print | sed 's|^\./||; s|^|F:|'
        } | LC_ALL=C sort | awk -v maxd="${CONF_TREE_DEPTH:-3}" -v rootname="$(basename "$CONF_ROOT")" '
          function depth(p,   n){ if(p=="."||p=="") return 0; n=split(p,a,"/"); return n; }
          BEGIN { print rootname "/" }
          /^D:/ {
            p=substr($0,3)
            if (p==""||p==".") next
            d=depth(p); if (d>maxd) next
            ind=(d-1)*2; name=p; sub(/^.*\//,"",name)
            printf("%*s%s/\n", ind, "", name)
          }
          /^F:/ {
            p=substr($0,3)
            if (p==""||p==".") next
            d=depth(p); if (d>maxd) next
            ind=(d-1)*2; name=p; sub(/^.*\//,"",name)
            printf("%*s%s\n", ind, "", name)
          }
        '
      )
    fi
    echo '```'
    echo
  } >> "${CONF_OUT}"
}

```
===== FILE END =====

### workflow-tools/proj_digestr/helpers/fs.sh

<a id="workflow-tools-proj-digestr-helpers-fs-sh"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/helpers/fs.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/helpers/fs.sh
Bytes: 1916  Lines: 66  Modified: 2025-09-01T04:37:01Z
SHA256: 812f343ca7dab66b39ec6261ec2af984228753f43ed01fc2bab1c411902f3873   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

abs_path() { readlink -f "$1" 2>/dev/null || realpath "$1" 2>/dev/null || echo "$PWD/$1"; }

_slug() {
  echo "$1" | tr '[:upper:]' '[:lower:]' \
    | sed 's/[^a-z0-9]/-/g; s/-\{2,\}/-/g; s/^-//; s/-$//'
}

# Build find command with prunes + user include/exclude
gather_files() {
  # work inside root so all paths are repo-relative
  local oldpwd="$PWD"
  cd "$CONF_ROOT"

  # Default prunes
  local prunes=( -name .git -o -name node_modules -o -name bower_components
                 -o -name dist -o -name build -o -name out -o -name .output
                 -o -name .next -o -name .nuxt -o -name target -o -name coverage
                 -o -name .venv -o -name venv -o -name __pycache__ -o -name .cache
                 -o -name .tox -o -name .gradle -o -name .idea -o -name .vscode
                 -o -name .turbo -o -name .pnpm )

  # Construct a find expression
  local -a cmd=( find . \( )
  for ((i=0; i<${#prunes[@]}; i++)); do
    cmd+=( ${prunes[$i]} )
  done
  cmd+=( \) -prune -o -type f -print )

  # Execute find, sort, strip "./"
  mapfile -t _all < <("${cmd[@]}" | sed 's|^\./||' | LC_ALL=C sort)

  # Apply include/exclude globs in bash
  local includes=()
  local excludes=()
  IFS=',' read -r -a _ig <<< "${CONF_INCLUDE_GLOBS:-}"
  IFS=',' read -r -a _xg <<< "${CONF_EXCLUDE_GLOBS:-}"

  if [[ ${#_ig[@]} -gt 0 && -n "${_ig[0]}" ]]; then
    for p in "${_all[@]}"; do
      for g in "${_ig[@]}"; do
        [[ "$p" == $g ]] && { includes+=("$p"); break; }
      done
    done
  else
    includes=("${_all[@]}")
  fi

  if [[ ${#_xg[@]} -gt 0 && -n "${_xg[0]}" ]]; then
    for p in "${includes[@]}"; do
      local drop=0
      for g in "${_xg[@]}"; do
        [[ "$p" == $g ]] && { drop=1; break; }
      done
      [[ $drop -eq 0 ]] && excludes+=("$p")
    done
    FILES=("${excludes[@]}")
  else
    FILES=("${includes[@]}")
  fi

  cd "$oldpwd"
}

```
===== FILE END =====

### workflow-tools/proj_digestr/helpers/git.sh

<a id="workflow-tools-proj-digestr-helpers-git-sh"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/helpers/git.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/helpers/git.sh
Bytes: 839  Lines: 28  Modified: 2025-09-01T04:29:31Z
SHA256: 9caab8721fee589e4fd1f9e7fd3abd5050ea7130e383f353169c931bb1f5af35   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

GIT_URL_PREFIX=""
GIT_COMMIT=""

init_git_context() {
  [[ "${CONF_NO_GIT:-0}" == "1" ]] && return 0
  if git rev-parse --is-inside-work-tree >/dev/null 2>&1; then
    GIT_COMMIT="$(git rev-parse HEAD 2>/dev/null || true)"
    local remote
    remote="$(git remote get-url origin 2>/dev/null || true)"
    if [[ -n "${GIT_COMMIT}" && -n "${remote}" ]]; then
      if [[ "$remote" =~ ^git@([^:]+):(.+)\.git$ ]]; then
        local host="${BASH_REMATCH[1]}" path="${BASH_REMATCH[2]}"
        GIT_URL_PREFIX="https://${host}/${path}/blob/${GIT_COMMIT}/"
      elif [[ "$remote" =~ ^https?:// ]]; then
        remote="${remote%.git}"
        GIT_URL_PREFIX="${remote}/blob/${GIT_COMMIT}/"
      fi
    fi
  fi
}

_file_git_url() {
  [[ -n "$GIT_URL_PREFIX" ]] && echo "${GIT_URL_PREFIX}$1" || echo ""
}

```
===== FILE END =====

### workflow-tools/proj_digestr/helpers/lang.sh

<a id="workflow-tools-proj-digestr-helpers-lang-sh"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/helpers/lang.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/helpers/lang.sh
Bytes: 3449  Lines: 90  Modified: 2025-09-01T04:54:12Z
SHA256: e1939b11da549ce60343f92440351362c202b80b550a4a4cb7ccc1d2d8454280   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

# Base allow lists (same as your script)
_BASE_ALLOW_EXT=( js mjs cjs ts tsx jsx json jsonc ndjson html htm css scss less
                  yml yaml toml ini cfg conf env properties md markdown rst txt lock
                  py pyi rs java kt kts gradle xml pro sh bash zsh fish csv tsv gql graphql proto )
_BASE_ALLOW_NAMES=( Cargo.toml Cargo.lock requirements.txt requirements-dev.txt pyproject.toml Pipfile Pipfile.lock poetry.lock setup.py setup.cfg
                    package.json package-lock.json yarn.lock pnpm-lock.yaml bun.lockb tsconfig.json jsconfig.json .npmrc .nvmrc
                    .eslintrc .eslintrc.json .eslintignore .prettierrc .prettierrc.json .prettierrc.yml .prettierrc.yaml .prettierignore
                    settings.gradle build.gradle gradle.properties settings.gradle.kts build.gradle.kts
                    Dockerfile Containerfile Makefile .env .env.local .env.sample .editorconfig .gitignore .gitattributes
                    LICENSE LICENSE.md README README.md )

# Build merged allow ext (BASE + CONF_ALLOW_EXT)
_build_allow_ext() {
  local merged=("${_BASE_ALLOW_EXT[@]}")
  if [[ -n "${CONF_ALLOW_EXT:-}" ]]; then
    IFS=',' read -r -a extra <<< "$CONF_ALLOW_EXT"
    for e in "${extra[@]}"; do
      e="${e#.}"; e="${e,,}"
      [[ -n "$e" ]] && merged+=("$e")
    done
  fi
  printf "%s\n" "${merged[@]}" | awk '!seen[$0]++'
}

_ALLOW_EXT_CACHE="$(_build_allow_ext)"
_IS_NAME() {
  local base="$1"
  for n in "${_BASE_ALLOW_NAMES[@]}"; do
    [[ "$base" == "$n" ]] && return 0
  done
  return 1
}

_is_allowed_textual() {
  local f="$1" base ext
  base="$(basename "$f")"
  if _IS_NAME "$base"; then return 0; fi
  if [[ "$f" == *.* ]]; then
    ext="${f##*.}"; ext="${ext,,}"
    while read -r e; do [[ "$ext" == "$e" ]] && return 0; done <<< "$_ALLOW_EXT_CACHE"
  fi
  return 1
}

_detect_lang() {
  local f="$1" base ext
  base="$(basename "$f")"
  ext="${f##*.}"; ext="${ext,,}"

  shopt -s nocasematch
  case "$base" in
    Dockerfile|Containerfile) echo "dockerfile"; shopt -u nocasematch; return;;
    Makefile)                  echo "makefile";  shopt -u nocasematch; return;;
    .env|.env.*)              echo "dotenv";    shopt -u nocasematch; return;;
    LICENSE|README|README.md) echo "md";        shopt -u nocasematch; return;;
    Cargo.toml)               echo "toml";      shopt -u nocasematch; return;;
    Cargo.lock|*.lock)        echo "";          shopt -u nocasematch; return;;
  esac
  case "$ext" in
    sh|bash|zsh|fish) echo "bash" ;;
    py|pyi)           echo "python" ;;
    js|mjs|cjs)       echo "javascript" ;;
    ts)               echo "typescript" ;;
    jsx)              echo "jsx" ;;
    tsx)              echo "tsx" ;;
    json|jsonc|ndjson)echo "json" ;;
    yml|yaml)         echo "yaml" ;;
    toml)             echo "toml" ;;
    ini|cfg|conf|env|properties) echo "ini" ;;
    rs)               echo "rust" ;;
    go)               echo "go" ;;
    java)             echo "java" ;;
    kt|kts)           echo "kotlin" ;;
    html|htm)         echo "html" ;;
    css|scss|less)    echo "css" ;;
    md|markdown|rst)  echo "md" ;;
    csv)              echo "csv" ;;
    tsv)              echo "tsv" ;;
    xml)              echo "xml" ;;
    gql|graphql)      echo "graphql" ;;
    proto)            echo "proto" ;;
    gradle)           echo "gradle" ;;
    *)                echo "" ;;
  esac
  shopt -u nocasematch
}

```
===== FILE END =====

### workflow-tools/proj_digestr/helpers/log.sh

<a id="workflow-tools-proj-digestr-helpers-log-sh"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/helpers/log.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/helpers/log.sh
Bytes: 157  Lines: 7  Modified: 2025-09-01T04:29:00Z
SHA256: 4263fe6e11b82cdf63b682c1e4ffe054436b3704177d910eb2a319b2a39f42ab   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

log_info()  { echo "[info]  $*" >&2; }
log_warn()  { echo "[warn]  $*" >&2; }
log_error() { echo "[error] $*" >&2; }

```
===== FILE END =====

### workflow-tools/proj_digestr/main.sh

<a id="workflow-tools-proj-digestr-main-sh"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/main.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/main.sh
Bytes: 2507  Lines: 77  Modified: 2025-09-01T05:42:35Z
SHA256: d17a3fe02924a6fa2e524fd70353c15f808c60afd7627f71a262235c7eca9bc6   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

# Resolve script dir for sourcing helpers
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
HELPERS_DIR="${SELF_DIR}/helpers"

# shellcheck source=helpers/*.sh
source "${HELPERS_DIR}/log.sh"
source "${HELPERS_DIR}/args.sh"
source "${HELPERS_DIR}/config.sh"
source "${HELPERS_DIR}/lang.sh"
source "${HELPERS_DIR}/git.sh"
source "${HELPERS_DIR}/fs.sh"
source "${HELPERS_DIR}/emit.sh"

main() {
  parse_args "$@"             # fills ARGS_* vars
  config_init                 # derives CONF_* from env + ARGS_*

  init_git_context            # sets GIT_URL_PREFIX/GIT_COMMIT (maybe empty)

  # Work from the selected root for consistent relative paths
  pushd "$CONF_ROOT" >/dev/null

  # Guard against self-inclusion (OUT is now absolute inside CONF_ROOT if relative was given)
  OUT_ABS="$(abs_path "${CONF_OUT}")"

  emit_header                 # writes header & initial TOC header to OUT
  gather_files                # fills FILES[@] (relative to CONF_ROOT)
  emit_toc                    # uses FILES[@] to write ToC
  # Append repo tree if requested

  if [[ "${CONF_PARALLEL}" -gt 1 ]]; then
    # Parallel: create sections in tmp, then concat in order
    tmpdir="$(mktemp -d)"
    trap 'rm -rf "$tmpdir"' EXIT

    export -f emit_one_file _emit_file_section _detect_lang _is_allowed_textual _file_git_url _slug
    export CONF_MAX_LINES CONF_HEAD_TAKE CONF_TAIL_TAKE OUT_ABS GIT_URL_PREFIX
    export -f abs_path

    i=0
    printf "%s\n" "${FILES[@]}" | xargs -I{} -P "${CONF_PARALLEL}" bash -c 'emit_one_file "$@"' _ {} "${tmpdir}"

    # Concatenate in deterministic order
    for f in "${FILES[@]}"; do
      sec="${tmpdir}/$(printf "%08d" "$i")_$(slug "$f").md"
      [[ -f "$sec" ]] && cat "$sec" >> "${CONF_OUT}"
      i=$((i+1))
    done
  else
    # Serial
    for f in "${FILES[@]}"; do
      emit_file_section "$f"
    done
  fi

  if [[ "${CONF_APPEND_TREE}" -eq 1 ]]; then
    emit_tree_section
  fi


  popd >/dev/null
  log_info "✅ Project bundle saved to ${CONF_OUT}"
}

# ---- Local wrappers that helpers expect ----
emit_file_section()      { _emit_file_section "$1"    >> "${CONF_OUT}"; }
emit_one_file()          { local path="$1" dir="$2"; _emit_file_section "$path" > "${dir}/$(printf "%08d" "$RANDOM")_$(slug "$path").md"; }
detect_lang()            { _detect_lang "$1"; }
is_allowed_textual()     { _is_allowed_textual "$1"; }
file_git_url()           { _file_git_url "$1"; }
slug()                   { _slug "$1"; }

main "$@"

```
===== FILE END =====

### workflow-tools/proj_digestr/project_bundle.sh.bak

<a id="workflow-tools-proj-digestr-project-bundle-sh-bak"></a>
===== FILE START =====
Path: workflow-tools/proj_digestr/project_bundle.sh.bak
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/proj_digestr/project_bundle.sh.bak
Bytes: 7870  Lines: 269  Modified: 2025-08-15T04:20:49Z
SHA256: e30878fbdd3ed49a0ee55785873ef6520b338d4f85569318b76de8fdd0b4a596   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/rebuild-rerun.sh

<a id="workflow-tools-rebuild-rerun-sh"></a>
===== FILE START =====
Path: workflow-tools/rebuild-rerun.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/rebuild-rerun.sh
Bytes: 1408  Lines: 54  Modified: 2025-08-30T19:27:30Z
SHA256: f1d1ace78c1930d27b4246921d45a0be1b5bf63b0d3535bfeec05a0a3607cbf4   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOT_DIR"

PORTS=("8787" "8790" "5173" "5175")

echo "▶ Killing anything on ${PORTS[*]}..."
for p in "${PORTS[@]}"; do
  lsof -ti :"$p" | xargs -r kill -9 || true
done

echo "▶ Cleaning old dist outputs..."
rm -rf apps/game-server/dist || true
rm -rf apps/game-web/dist || true
find packages -maxdepth 2 -name dist -type d -exec rm -rf {} +

echo "▶ Building shared packages (adjust as needed)…"
# Build overlays/world/chat etc. in the right order for your repo
npm run -w @warboy/overlays build || true
npm run -w @warboy/world build || true
npm run -w @warboy/chat build || true
npm run -w game-server build

echo "▶ Starting servers…"
# game-server
node apps/game-server/dist/index.js &
PID_SERVER=$!

# game-web (vite dev)
( cd apps/game-web && npm run dev -- --host 0.0.0.0 --port 5175 --strictPort ) &
PID_WEB=$!

# optional: chat-server (if/when you add it)
if [ -d "apps/chat-server" ]; then
  echo "▶ Starting chat-server…"
  ( cd apps/chat-server && npm run dev ) &
  PID_CHAT=$!
else
  PID_CHAT=""
fi

cleanup() {
  echo "▶ Stopping…"
  [ -n "$PID_CHAT" ] && kill "$PID_CHAT" 2>/dev/null || true
  kill "$PID_WEB" 2>/dev/null || true
  kill "$PID_SERVER" 2>/dev/null || true
}
trap cleanup EXIT

echo "▶ All set. PIDs: server=$PID_SERVER web=$PID_WEB ${PID_CHAT:+chat=$PID_CHAT}"
wait

```
===== FILE END =====

### workflow-tools/warboyctl/VERSION

<a id="workflow-tools-warboyctl-version"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/VERSION
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/VERSION
Bytes: 7  Lines: 2  Modified: 2025-09-01T18:27:05Z
SHA256: 9ca90d4ac8fbe86d8aca4aa37a80e0f984c01df281f25f62c779e784fd155a21   Language: plain   Role: source
Summary: Non-whitelisted type; metadata only.

-----8<----- CONTENT -----8<-----
```
```
===== FILE END =====

### workflow-tools/warboyctl/routines/deadends.sh

<a id="workflow-tools-warboyctl-routines-deadends-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/routines/deadends.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/routines/deadends.sh
Bytes: 10260  Lines: 285  Modified: 2025-09-01T18:22:08Z
SHA256: 1ff7ef6954629edd6331484a78459f6dcf65f7a43a60af09117c3e43aa599360   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$ROOT"

# ---------- Flags ----------
PAGINATE=0
PAGE=1
PAGE_SIZE=100
FORMAT="text"   # or json
PATHS=""        # comma list to limit scan e.g. apps/data-api,apps/admin-api
CHECKS=""       # comma list of checks: empty,tsconfig,scripts,imports,mapping,all(default)

while [[ $# -gt 0 ]]; do
  case "$1" in
    --paginate) PAGINATE=1; shift;;
    --page) PAGE="${2:-1}"; shift 2;;
    --page-size) PAGE_SIZE="${2:-100}"; shift 2;;
    --format) FORMAT="${2:-text}"; shift 2;;
    --paths) PATHS="${2:-}"; shift 2;;
    --checks) CHECKS="${2:-}"; shift 2;;
    -h|--help)
      cat <<EOF
warboyctl deadends – find dead ends / links to nowhere

Usage:
  warboyctl deadends [--paginate] [--page N] [--page-size N]
                     [--format text|json]
                     [--paths apps/data-api,apps/admin-api]
                     [--checks empty,tsconfig,scripts,imports,mapping]

Checks:
  empty    - empty/near-empty code & empty files
  tsconfig - tsconfig rootDir exists and has files
  scripts  - package.json scripts reference real files (tsx/node/tsc -p)
  imports  - unresolved relative imports (./, ../)
  mapping  - dev-all mapping vs apps/ (if launch.sh exists)

Examples:
  warboyctl deadends --paginate
  warboyctl deadends --paths apps/data-api --checks imports
  warboyctl deadends --format json
EOF
      exit 0;;
    *) echo "Unknown arg: $1" >&2; exit 1;;
  esac
done

# ---------- Paths / JQ ----------
JQ=$(command -v jq || true)
IFS=',' read -r -a PATH_FILTER <<< "${PATHS}"
SCAN_ROOTS=()
if [[ -n "${PATH_FILTER[0]:-}" ]]; then
  for p in "${PATH_FILTER[@]}"; do [[ -d "$p" ]] && SCAN_ROOTS+=("$p"); done
else
  SCAN_ROOTS=("apps" "packages")
fi

WANT() {
  local name="$1"
  [[ -z "$CHECKS" || "$CHECKS" == "all" ]] && return 0
  IFS=',' read -r -a CH <<< "$CHECKS"
  for c in "${CH[@]}"; do [[ "$c" == "$name" ]] && return 0; done
  return 1
}

# ---------- Workspace ----------
WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
E_EMPTY="$WORK/empty.tsv"           # cols: type\tpath
E_TSC="$WORK/tsconfig.tsv"          # cols: path\trootDir
E_SCRIPTS="$WORK/scripts.tsv"       # cols: pkg\tkind\ttarget
E_IMPORTS="$WORK/imports.tsv"       # cols: file\tfrom
E_MAP="$WORK/mapping.tsv"           # cols: app\tstatus

say() { printf "%-9s %s\n" "[$1]" "$2"; }

# ============================================================
# ANALYZE
# ============================================================

# 1) Empty / near-empty sources
if WANT empty; then
  : > "$E_EMPTY"
  # find candidate files
  find "${SCAN_ROOTS[@]}" -type f 2>/dev/null | while read -r f; do
    case "$f" in
      *.ts|*.tsx|*.js|*.jsx)
        # near-empty: only whitespace + // comments (quick heuristic)
        if awk '
          {line=$0}
          {sub(/\/\/.*$/,"",line)}
          {gsub(/[[:space:]]/,"",line)}
          { if(length(line)>0){nonempty=1} }
          END{ exit(nonempty?1:0) }' "$f"
        then
          printf "emptyish\t%s\n" "$f" >> "$E_EMPTY"
        fi
        ;;
      *)
        [[ -s "$f" ]] || printf "empty\t%s\n" "$f" >> "$E_EMPTY"
        ;;
    esac
  done
fi

# 2) tsconfig rootDir has files
if WANT tsconfig; then
  : > "$E_TSC"
  git ls-files 'apps/**/tsconfig.json' 'packages/**/tsconfig.json' | while read -r tsc; do
    base="$(dirname "$tsc")"
    rootDir="src"
    if [[ -n "$JQ" ]]; then
      val=$(jq -r '.compilerOptions.rootDir // "src"' "$tsc" 2>/dev/null || echo "src")
      [[ -n "$val" && "$val" != "null" ]] && rootDir="$val"
    else
      m=$(grep -Eo '"rootDir"\s*:\s*"[^"]+"' "$tsc" 2>/dev/null | head -n1 | sed 's/.*"rootDir"\s*:\s*"\([^"]*\)".*/\1/')
      [[ -n "$m" ]] && rootDir="$m"
    fi
    abs="$base/$rootDir"
    cnt=$(find "$abs" -type f \( -name "*.ts" -o -name "*.tsx" -o -name "*.js" -o -name "*.jsx" \) 2>/dev/null | wc -l | tr -d ' ')
    if [[ ! -d "$abs" || "$cnt" -eq 0 ]]; then
      printf "%s\t%s\n" "$tsc" "$rootDir" >> "$E_TSC"
    fi
  done
fi

# 3) package.json script file targets
if WANT scripts; then
  : > "$E_SCRIPTS"
  git ls-files 'apps/**/package.json' 'packages/**/package.json' | while read -r pkg; do
    base="$(dirname "$pkg")"
    dev=""; start=""; build=""
    if [[ -n "$JQ" ]]; then
      dev=$(jq -r '.scripts.dev // empty' "$pkg" 2>/dev/null || true)
      start=$(jq -r '.scripts.start // empty' "$pkg" 2>/dev/null || true)
      build=$(jq -r '.scripts.build // empty' "$pkg" 2>/dev/null || true)
    else
      dev=$(grep -Eo '"dev"\s*:\s*"[^"]+"' "$pkg" 2>/dev/null | sed 's/.*"dev"\s*:\s*"\([^"]*\)".*/\1/' || true)
      start=$(grep -Eo '"start"\s*:\s*"[^"]+"' "$pkg" 2>/dev/null | sed 's/.*"start"\s*:\s*"\([^"]*\)".*/\1/' || true)
      build=$(grep -Eo '"build"\s*:\s*"[^"]+"' "$pkg" 2>/dev/null | sed 's/.*"build"\s*:\s*"\([^"]*\)".*/\1/' || true)
    fi
    dev_target=$(sed -E 's/.*tsx[[:space:]]+(watch|--watch)?[[:space:]]+([^[:space:];]+).*/\2/; t; d' <<<"$dev" || true)
    start_target=$(sed -E 's/.*node[[:space:]]+([^[:space:];]+).*/\1/; t; d' <<<"$start" || true)
    build_target=$(sed -E 's/.*-p[[:space:]]+([^[:space:];]+).*/\1/; t; d' <<<"$build" || true)

    check_target() {
      local kind="$1" targ="$2"
      [[ -z "$targ" ]] && return 0
      if [[ "$targ" =~ ^(\./|../|src/|dist/|build/) || "$targ" == */* ]]; then
        local p="$base/$targ"
        [[ -f "$p" ]] || printf "%s\t%s\t%s\n" "$pkg" "$kind" "$targ" >> "$E_SCRIPTS"
      fi
    }
    check_target "dev" "$dev_target"
    check_target "start" "$start_target"
    check_target "build" "$build_target"
  done
fi

# 4) unresolved relative imports
if WANT imports; then
  : > "$E_IMPORTS"
  resolve_rel() {
    local file="$1" from="$2"
    local dir; dir="$(dirname "$file")"
    local cands=(
      "$dir/$from.ts" "$dir/$from.tsx" "$dir/$from.js" "$dir/$from.jsx" "$dir/$from.mjs"
      "$dir/$from/index.ts" "$dir/$from/index.tsx" "$dir/$from/index.js" "$dir/$from/index.jsx" "$dir/$from/index.mjs"
    )
    for c in "${cands[@]}"; do [[ -f "$c" ]] && return 0; done
    return 1
  }
  while IFS= read -r -d '' file; do
    while IFS= read -r imp; do
      from=$(sed -E 's/.*from[[:space:]]+["'\'']([^"'\''"]+)["'\''].*/\1/' <<<"$imp")
      [[ "$from" =~ ^(\./|\../) ]] || continue
      if ! resolve_rel "$file" "$from"; then
        printf "%s\t%s\n" "$file" "$from" >> "$E_IMPORTS"
      fi
    done < <(grep -nE "from[[:space:]]+['\"][.]{1,2}/" "$file" || true)
  done < <(git ls-files -z 'apps/**/*.ts' 'apps/**/*.tsx' 'packages/**/*.ts' 'packages/**/*.tsx' 'apps/**/*.js' 'apps/**/*.jsx' 'packages/**/*.js' 'packages/**/*.jsx' 2>/dev/null || true)
fi

# 5) dev-all mapping (optional)
if WANT mapping; then
  : > "$E_MAP"
  if [[ -f workflow-tools/dev-all/helpers/launch.sh ]]; then
    mapped=$(grep -Eo '\["[^"]+"\]="[^"]+"' workflow-tools/dev-all/helpers/launch.sh | sed 's/^\["\([^"]*\)"\]="\([^"]*\)".*/\1\t\2/' | sort)
    real=$(find apps -maxdepth 1 -mindepth 1 -type d -printf "%f\tapps/%f\n" 2>/dev/null | sort || true)
    # real but not mapped
    comm -23 <(echo "$real") <(echo "$mapped") | cut -f1 | while read -r app; do
      [[ -n "$app" ]] && printf "%s\tunmapped\n" "$app" >> "$E_MAP"
    done
  fi
fi

# ============================================================
# QUERY (apply path filters to TSVs if any)
# ============================================================
FILTER_TSV() {
  local in="$1" out="$2"
  if [[ -z "${PATH_FILTER[0]:-}" ]]; then cp "$in" "$out"; return; fi
  : > "$out"
  while IFS= read -r line; do
    for p in "${PATH_FILTER[@]}"; do
      grep -q "$p" <<<"$line" && { echo "$line" >> "$out"; break; }
    done
  done < "$in"
}

for f in "$E_EMPTY" "$E_TSC" "$E_SCRIPTS" "$E_IMPORTS" "$E_MAP"; do
  [[ -f "$f" ]] || continue
  FILTER_TSV "$f" "$f.filtered"
done

# ============================================================
# REPORT
# ============================================================
COUNT() { [[ -f "$1" ]] && wc -l < "$1" | tr -d ' ' || echo 0; }

C_EMPTY=$(COUNT "$E_EMPTY.filtered")
C_TSC=$(COUNT "$E_TSC.filtered")
C_SCR=$(COUNT "$E_SCRIPTS.filtered")
C_IMP=$(COUNT "$E_IMPORTS.filtered")
C_MAP=$(COUNT "$E_MAP.filtered")

if [[ "$FORMAT" == "json" ]]; then
  # emit a compact JSON (jq optional)
  if [[ -n "$JQ" ]]; then
    jq -n --argjson empty "$C_EMPTY" --argjson tsconfig "$C_TSC" --argjson scripts "$C_SCR" --argjson imports "$C_IMP" --argjson mapping "$C_MAP" \
      '{summary:{empty:$empty,tsconfig:$tsconfig,scripts:$scripts,imports:$imports,mapping:$mapping}}'
  else
    printf '{"summary":{"empty":%s,"tsconfig":%s,"scripts":%s,"imports":%s,"mapping":%s}}\n' "$C_EMPTY" "$C_TSC" "$C_SCR" "$C_IMP" "$C_MAP"
  fi
  exit 0
fi

# Human-readable digest
REPORT="$WORK/report.txt"
{
  echo "warboyctl deadends – report"
  echo "root: $ROOT"
  [[ -n "${PATH_FILTER[0]:-}" ]] && echo "paths: ${PATHS}"
  [[ -n "$CHECKS" ]] && echo "checks: $CHECKS"
  echo
  printf "Empty/Near-empty: %d\n" "$C_EMPTY"
  printf "TSConfig rootDir: %d\n" "$C_TSC"
  printf "Script targets:   %d\n" "$C_SCR"
  printf "Rel imports:      %d\n" "$C_IMP"
  printf "Dev-all mapping:  %d\n" "$C_MAP"
  echo
  show_section() {
    local title="$1" file="$2" header="$3"
    [[ -f "$file" && -s "$file" ]] || return 0
    echo "## $title"
    echo "$header" | sed 's/\t/  /g'
    sed 's/\t/  /g' "$file" | nl -ba
    echo
  }
  show_section "Empty & near-empty files" "$E_EMPTY.filtered" "type  path"
  show_section "TSConfig with empty rootDir" "$E_TSC.filtered" "tsconfig.json  rootDir"
  show_section "Missing script targets" "$E_SCRIPTS.filtered" "package.json  kind  target"
  show_section "Unresolved relative imports" "$E_IMPORTS.filtered" "file  from"
  show_section "Apps not in dev-all mapping" "$E_MAP.filtered" "app  status"
} > "$REPORT"

# Pagination
if [[ $PAGINATE -eq 1 ]]; then
  if [[ -n "${PAGER:-}" ]]; then
    "$PAGER" "$REPORT"
  else
    less -R "$REPORT"
  fi
else
  # manual slice with --page/--page-size
  START=$(( (PAGE-1)*PAGE_SIZE + 1 ))
  END=$(( PAGE*PAGE_SIZE ))
  awk -v s="$START" -v e="$END" 'NR>=s && NR<=e' "$REPORT"
  TOTAL=$(wc -l < "$REPORT" | tr -d ' ')
  echo
  echo "[page $PAGE/$(( (TOTAL + PAGE_SIZE - 1) / PAGE_SIZE )) | lines $START-$END of $TOTAL]"
fi

```
===== FILE END =====

### workflow-tools/warboyctl/routines/doctor.sh

<a id="workflow-tools-warboyctl-routines-doctor-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/routines/doctor.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/routines/doctor.sh
Bytes: 438  Lines: 18  Modified: 2025-09-01T23:04:02Z
SHA256: 4896b52c9149c4ae12adbc3a18e7d81af83692840cd769fd8f85e3d550c28b67   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SENSORS_DIR="$SELF_DIR/../sensors"

run() {
  local name="$1" file="$2"
  [[ -x "$file" ]] || return 0
  echo "## $name"
  "$file" | column -t -s $'\t'
  echo
}

run "Ports"        "$SENSORS_DIR/ports.sh"
run "Env Vars"     "$SENSORS_DIR/envvars.sh"
run "Lockfile"     "$SENSORS_DIR/lockfile.sh"
run "TSConfig"     "$SENSORS_DIR/tsconfig.sh"

```
===== FILE END =====

### workflow-tools/warboyctl/routines/orphans.sh

<a id="workflow-tools-warboyctl-routines-orphans-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/routines/orphans.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/routines/orphans.sh
Bytes: 4634  Lines: 140  Modified: 2025-09-01T20:14:06Z
SHA256: 60086135d631aa92d08f77f1ad6143223de8360663e128f80dfe19ee1ee9b81a   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

# Find exported symbols that appear unused across the repo.
# Heuristics:
# - Looks for simple named exports: function/const/type/class
# - Skips re-exports like `export * from` and `export { x } from`
# - Skips default exports
# - Requires at least 2 occurrences of the symbol across the repo
#   (definition + at least one other reference)
# - Offers --paths filter and --format json|text

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$ROOT"

FORMAT="text"          # or json
PATHS=""               # comma-separated dirs to limit scan
MIN_HITS=2             # tweak if you want stricter/looser
IGNORE_PATTERN=""      # grep -E pattern to ignore (e.g., test files)

while [[ $# -gt 0 ]]; do
  case "$1" in
    --format)       FORMAT="${2:-text}"; shift 2;;
    --paths)        PATHS="${2:-}"; shift 2;;
    --min-hits)     MIN_HITS="${2:-2}"; shift 2;;
    --ignore)       IGNORE_PATTERN="${2:-}"; shift 2;;
    -h|--help)
      cat <<EOF
warboyctl orphans – exported but unused (heuristic)

Usage:
  warboyctl orphans [--format text|json] [--paths apps/data-api,packages/core]
                    [--min-hits N] [--ignore '(^|/)tests?/']

Notes:
  - We only match simple named exports: function/const/type/class.
  - Re-exports and default exports are ignored.
  - A symbol is considered "used" if it appears at least MIN_HITS times
    across the repo (definition + >=1 other reference).
EOF
      exit 0;;
    *) echo "Unknown arg: $1" >&2; exit 1;;
  esac
done

# Build file list
readarray -t FILES < <(
  if [[ -n "$PATHS" ]]; then
    IFS=',' read -r -a PARR <<< "$PATHS"
    git ls-files "${PARR[@]/%//*.ts}" "${PARR[@]/%//*.tsx}" "${PARR[@]/%//*.js}" "${PARR[@]/%//*.jsx}" 2>/dev/null \
    || true
  else
    git ls-files 'apps/**/*.{ts,tsx,js,jsx}' 'packages/**/*.{ts,tsx,js,jsx}' 2>/dev/null \
    || true
  fi
)

tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
OUT="$tmp/orphans.tsv"; : > "$OUT"

# Grep helper with optional ignore pattern
grep_repo() {
  local needle="$1"
  if [[ -n "$IGNORE_PATTERN" ]]; then
    git grep -n --line-number -I -E "$needle" \
      | grep -Ev "$IGNORE_PATTERN" || true
  else
    git grep -n --line-number -I -E "$needle" || true
  fi
}

# Iterate files, extract export names, count refs
for f in "${FILES[@]}"; do
  [[ -f "$f" ]] || continue

  # quick skip: re-exports and defaults are not candidates
  reexports=$(grep -E 'export\s+\*|export\s*\{[^}]+\}\s*from' "$f" || true)
  defaults=$(grep -E 'export\s+default' "$f" || true)

  # extract simple named exports (const/function/type/class Name)
  # capture the symbol name as field 3
  grep -Eo 'export[[:space:]]+(const|function|type|class)[[:space:]]+[A-Za-z0-9_]+' "$f" 2>/dev/null \
  | awk '{print $3}' \
  | sort -u \
  | while read -r sym; do
      [[ -z "$sym" ]] && continue

      # Count occurrences of the symbol across the repo.
      # We use word boundary to reduce false positives.
      hits=$(grep_repo "\b${sym}\b" | wc -l | tr -d ' ')

      # Discount any hits in this same file to be safer (we already know definition is here).
      # Count refs in this file:
      in_self=$(grep -n -E "\b${sym}\b" -- "$f" | wc -l | tr -d ' ')

      # Total external references = hits - in_self (but keep >= 0)
      ext_refs=$(( hits - in_self ))
      (( ext_refs < 0 )) && ext_refs=0

      # Consider "used" if (definition + external refs) >= MIN_HITS
      # definition ~ 1, so ext_refs >= (MIN_HITS-1)
      needed=$(( MIN_HITS - 1 ))
      if (( ext_refs < needed )); then
        printf "%s\t%s\t%d\t%d\n" "$f" "$sym" "$hits" "$ext_refs" >> "$OUT"
      fi
    done
done

# Output
if [[ "$FORMAT" == "json" ]]; then
  if command -v jq >/dev/null 2>&1; then
    # TSV: file \t symbol \t total_hits \t external_refs
    jq -Rn '
      [inputs | select(length>0) | split("\t") | {file:.[0], symbol:.[1], total_hits:(.[2]|tonumber), external_refs:(.[3]|tonumber)}] |
      {count: length, items: .}
    ' < "$OUT"
  else
    # Minimal JSON without jq
    echo -n '{"count":'
    c=$(wc -l < "$OUT" | tr -d ' ')
    echo -n "$c"
    echo ',"items":['
    i=0
    while IFS=$'\t' read -r file sym th ex; do
      [[ $i -gt 0 ]] && echo -n ','
      printf '{"file":%q,"symbol":%q,"total_hits":%q,"external_refs":%q}' "$file" "$sym" "$th" "$ex"
      i=$((i+1))
    done < "$OUT"
    echo ']}'
  fi
else
  echo "Orphans (exported but not referenced enough):"
  if [[ -s "$OUT" ]]; then
    # align columns: file | symbol | hits | ext_refs
    (echo -e "file\tsymbol\ttotal_hits\texternal_refs" && cat "$OUT") | column -t -s $'\t'
  else
    echo "(none)"
  fi
fi

```
===== FILE END =====

### workflow-tools/warboyctl/routines/route-link-check.sh

<a id="workflow-tools-warboyctl-routines-route-link-check-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/routines/route-link-check.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/routines/route-link-check.sh
Bytes: 7016  Lines: 216  Modified: 2025-09-01T20:48:51Z
SHA256: 3ec64905590eda66d39db7e2520f21b86a7ad85b05872db2bf62bbf4dc23209b   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

# route-link-check: validate internal links discovered in TSX/HTML/MD
# (A) Static existence heuristic: does /foo map to a route/page/public file?
# (B) Optional live HTTP requests to BASE + /foo (parallel curl)

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"
cd "$ROOT"

FORMAT="text"
PATHS=""
BASE=""
TIMEOUT=2
CONC=8

while [[ $# -gt 0 ]]; do
  case "$1" in
    --format)      FORMAT="${2:-text}"; shift 2;;
    --paths)       PATHS="${2:-}"; shift 2;;
    --base)        BASE="${2:-}"; shift 2;;
    --timeout)     TIMEOUT="${2:-2}"; shift 2;;
    --concurrency) CONC="${2:-8}"; shift 2;;
    -h|--help)
      cat <<EOF
warboyctl route-links – check internal links

Usage:
  warboyctl route-links [--paths apps/game-web,apps/admin-web]
                        [--format text|json]
                        [--base http://127.0.0.1:3000]
                        [--timeout 2] [--concurrency 8]

Finds links from:
  - TSX/HTML: href="/...", <Link to="/...">
  - Programmatic: navigate('/...'), history.push('/...'), router.push('/...'), redirect('/...')
  - Markdown: [text](/...)

Checks:
  (A) Map to routes/pages/public files
  (B) If --base given, HTTP GET and report status codes
EOF
      exit 0;;
    *) echo "Unknown arg: $1" >&2; exit 1;;
  esac
done

# ---------- Gather source files (robust: use find, not git brace/**) ----------
readarray -t SRC_ROOTS < <(
  if [[ -n "$PATHS" ]]; then
    IFS=',' read -r -a PARR <<< "$PATHS"
    for p in "${PARR[@]}"; do [[ -d "$p" ]] && echo "$p"; done
  else
    printf "%s\n" apps packages .
  fi
)

readarray -t SRC_FILES < <(
  {
    for r in "${SRC_ROOTS[@]}"; do
      # TS/TSX often contain links; HTML; Markdown (docs)
      find "$r" -type f \( -name '*.tsx' -o -name '*.ts' -o -name '*.jsx' -o -name '*.js' -o -name '*.html' -o -name '*.md' \) 2>/dev/null
    done
  } | sort -u
)
# Always include top-level README if present
[[ -f README.md ]] && SRC_FILES+=("README.md")

# ---------- Extract links starting with "/" ----------
tmp="$(mktemp -d)"; trap 'rm -rf "$tmp"' EXIT
LINKS="$tmp/links.txt"; : > "$LINKS"

if (( ${#SRC_FILES[@]} > 0 )); then
  {
    # HTML/TSX <a href="/...">
    grep -Eho 'href[[:space:]]*=\s*"/[^"]+"' "${SRC_FILES[@]}" 2>/dev/null
    # React Router <Link to="/..."> or any to="/..."
    grep -Eho 'to[[:space:]]*=\s*"/[^"]+"' "${SRC_FILES[@]}" 2>/dev/null
    # Programmatic navigation: '...("/path")'
    grep -Eho '(navigate|history\.push|router\.push|redirect)\s*\(\s*'\''/[^'\'']+'\''\s*\)' "${SRC_FILES[@]}" 2>/dev/null \
      | sed -E "s/.*\(\s*'([^']+)'.*/\1/"
    # Markdown [text](/path)
    grep -Eho '\[[^]]+\]\(\/[^)]+\)' "${SRC_FILES[@]}" 2>/dev/null \
      | sed -E 's/.*\]\((\/[^)]+)\).*/\1/'
  } \
  | sed -E 's/.*href\s*=\s*"([^"]+)".*/\1/; s/.*to\s*=\s*"([^"]+)".*/\1/' \
  | sed -E 's/[?#].*$//' \
  | grep -E '^/' \
  | sort -u > "$LINKS" || true
fi

# Helpful debug
found_files=${#SRC_FILES[@]}
found_links=$(wc -l < "$LINKS" 2>/dev/null | tr -d ' ' || echo 0)

# ---------- Inventories for static mapping ----------
readarray -t ROUTE_FILES < <(git ls-files 'apps/**/routes/**/*.*' 'apps/**/pages/**/*.*' 2>/dev/null || true)
readarray -t PUBLIC_FILES < <(git ls-files 'apps/**/public/**' 2>/dev/null || true)

lc() { tr '[:upper:]' '[:lower:]'; }

route_exists_static() {
  local path="$1" # e.g. /play or /foo/ (trailing slash)
  # 1) explicit public asset?
  for p in "${PUBLIC_FILES[@]}"; do
    case "$p" in
      */public/*)
        local rel="/${p#*/public/}"
        [[ "$rel" == "$path" ]] && return 0
        ;;
    esac
  done
  # 2) route name mapping
  local last="$(basename "$path")"
  if [[ "$path" == */ ]]; then last="index"; fi
  [[ -z "$last" ]] && last="index"
  local lname="$(printf "%s" "$last" | lc)"
  for f in "${ROUTE_FILES[@]}"; do
    base="$(basename "$f")"
    name="${base%.*}"
    if [[ "$(printf "%s" "$name" | lc)" == "$lname" ]]; then
      return 0
    fi
  done
  return 1
}

# ---------- Static report ----------
STAT_TSV="$tmp/static.tsv"; : > "$STAT_TSV"
if [[ -s "$LINKS" ]]; then
  while IFS= read -r L; do
    [[ -z "$L" || "$L" != /* ]] && continue
    if route_exists_static "$L"; then
      printf "%s\tOK\n" "$L" >> "$STAT_TSV"
    else
      printf "%s\tMISSING\n" "$L" >> "$STAT_TSV"
    fi
  done < "$LINKS"
fi

# ---------- Optional live HTTP ----------
HTTP_TSV="$tmp/http.tsv"; : > "$HTTP_TSV"
if [[ -n "$BASE" && -s "$LINKS" ]]; then
  URLS="$tmp/urls.txt"; : > "$URLS"
  while IFS= read -r L; do
    [[ -z "$L" || "$L" != /* ]] && continue
    echo "${BASE%/}$L" >> "$URLS"
  done < "$LINKS"
  < "$URLS" xargs -I{} -P "$CONC" bash -c '
    url="$1"
    code=$(curl -s -m "'"$TIMEOUT"'" -o /dev/null -w "%{http_code}" "$url" || echo "000")
    # strip scheme+host in the first column for compactness
    printf "%s\t%s\n" "$(printf "%s" "$url" | sed -E "s|^https?://[^/]+||")" "$code"
  ' _ {} > "$HTTP_TSV" || true
fi

# ---------- Output ----------
if [[ "$FORMAT" == "json" ]]; then
  if command -v jq >/dev/null 2>&1; then
    jq -n --arg files "$found_files" --arg links "$found_links" \
      --slurpfile s "$STAT_TSV" \
      --slurpfile h "$HTTP_TSV" '
        def parse(tsv):
          (tsv|map(split("\t")))|map(select(length>=2)|{link:.[0], status:.[1]});
        {
          stats: { scanned_files: ($files|tonumber), found_links: ($links|tonumber) },
          static: parse($s),
          http:   parse($h)
        }'
  else
    echo -n '{"stats":{"scanned_files":'"$found_files"',"found_links":'"$found_links"'},"static":['
    i=0; while IFS=$'\t' read -r link status; do
      [[ -z "$link" ]] && continue; [[ $i -gt 0 ]] && echo -n ','
      printf '{"link":%q,"status":%q}' "$link" "$status"; i=$((i+1))
    done < "$STAT_TSV"
    echo -n '],"http":['
    j=0; while IFS=$'\t' read -r link code; do
      [[ -z "$link" ]] && continue; [[ $j -gt 0 ]] && echo -n ','
      printf '{"link":%q,"status":%q}' "$link" "$code"; j=$((j+1))
    done < "$HTTP_TSV"
    echo ']}'
  fi
  exit 0
fi

# Text
echo "route-link-check results"
echo "(scanned files: $found_files, found links: $found_links)"
echo
if [[ -s "$STAT_TSV" ]]; then
  echo "Static check (routes/pages/public mapping):"
  (echo -e "link\tstatus" && cat "$STAT_TSV") | column -t -s $'\t'
  echo
else
  echo "(no links found – searched: href=\"/..\", to=\"/..\", navigate('/..'), router.push('/..'), markdown [..](/..))"
  echo
fi

if [[ -n "$BASE" ]]; then
  if [[ -s "$HTTP_TSV" ]]; then
    echo "HTTP check against base=$BASE (timeout ${TIMEOUT}s):"
    (echo -e "link\tcode" && cat "$HTTP_TSV") | column -t -s $'\t'
    echo
    bad=$(awk -F'\t' '$2!="200" && $2!="301" && $2!="302"{print}' "$HTTP_TSV" | wc -l | tr -d ' ')
    if [[ "$bad" -gt 0 ]]; then
      echo "(HTTP summary: $bad non-OK codes; if you expected OK, ensure the dev server is running)"
    else
      echo "(HTTP summary: all OK or redirects)"
    fi
  else
    echo "(HTTP check skipped: no links were found to request)"
  fi
fi

exit 0

```
===== FILE END =====

### workflow-tools/warboyctl/sensors/_lib.sh

<a id="workflow-tools-warboyctl-sensors-lib-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/sensors/_lib.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/sensors/_lib.sh
Bytes: 766  Lines: 30  Modified: 2025-09-01T23:03:16Z
SHA256: 90590884be242fbec0dbeaabbf2b16f55c39d97d337aa40092bf24358c235d5f   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

ROOT="$(git rev-parse --show-toplevel 2>/dev/null || pwd)"

# printing
say() { printf "%-6s %s\n" "[$1]" "$2"; }
ok()  { say "OK" "$*"; }
wrn() { say "WARN" "$*"; }
bad() { say "FAIL" "$*"; }

# require a tool
need() { command -v "$1" >/dev/null 2>&1 || { bad "missing tool: $1"; return 1; }; }

# discover app dirs (apps/* with package.json)
discover_apps() {
  find "$ROOT/apps" -maxdepth 1 -mindepth 1 -type d -print 2>/dev/null \
    | while read -r d; do [[ -f "$d/package.json" ]] && echo "$d"; done
}

# safe jq (optional)
jqget() {  # jqget <file> <jq_expr> -> prints or empty
  if command -v jq >/dev/null 2>&1; then
    jq -r "$2 // empty" "$1" 2>/dev/null || true
  else
    # no jq: leave empty
    echo ""
  fi
}

```
===== FILE END =====

### workflow-tools/warboyctl/sensors/envvars.sh

<a id="workflow-tools-warboyctl-sensors-envvars-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/sensors/envvars.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/sensors/envvars.sh
Bytes: 968  Lines: 37  Modified: 2025-09-01T23:03:38Z
SHA256: a18170097efef9a366732c9a32ee9e92481a853872fe5fbf809cf96d30b198bb   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SELF_DIR/_lib.sh"

echo -e "app\tvar\tstatus"

vars_in_envfiles() {
  local app="$1"
  awk -F= '
    /^[[:space:]]*#/ {next}
    /^[[:space:]]*$/ {next}
    /^[[:space:]]*[A-Za-z_][A-Za-z0-9_]*[[:space:]]*=/ {gsub(/[[:space:]]/,"",$1); print $1}
  ' "$app"/.env* 2>/dev/null | sort -u
}

vars_in_code() {
  local app="$1"
  grep -RhoE 'process\.env\.([A-Za-z_][A-Za-z0-9_]*)' "$app" 2>/dev/null \
    | sed -E 's/.*process\.env\.([A-Za-z_][A-Za-z0-9_]*)/\1/' \
    | sort -u
}

while read -r app; do
  code_vars=$(vars_in_code "$app" || true)
  [[ -z "$code_vars" ]] && continue
  mapfile -t env_vars < <(vars_in_envfiles "$app" || true)

  for v in $code_vars; do
    if printf "%s\n" "${env_vars[@]}" | grep -qx "$v"; then
      echo -e "$(basename "$app")\t$v\tOK"
    else
      echo -e "$(basename "$app")\t$v\tMISSING"
    fi
  done
done < <(discover_apps)

```
===== FILE END =====

### workflow-tools/warboyctl/sensors/lockfile.sh

<a id="workflow-tools-warboyctl-sensors-lockfile-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/sensors/lockfile.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/sensors/lockfile.sh
Bytes: 724  Lines: 33  Modified: 2025-09-01T23:03:45Z
SHA256: 2506acf07b54f73f407b9d3d308e98d97e47a04f2c7700cda92fab91d9d099d9   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SELF_DIR/_lib.sh"

echo -e "path\tissue"

check_one() {
  local dir="$1"
  local pj="$dir/package.json"
  [[ -f "$pj" ]] || return 0

  local lock
  if [[ -f "$ROOT/package-lock.json" ]]; then
    lock="$ROOT/package-lock.json"
  elif [[ -f "$dir/package-lock.json" ]]; then
    lock="$dir/package-lock.json"
  else
    echo -e "$dir\tNO_LOCKFILE"
    return 0
  fi

  [[ -d "$dir/node_modules" ]] || echo -e "$dir\tMISSING_NODE_MODULES"

  # mtime heuristic
  if [[ "$pj" -nt "$lock" ]]; then
    echo -e "$dir\tLOCKFILE_STALE"
  fi
}

check_one "$ROOT"
while read -r app; do check_one "$app"; done < <(discover_apps)

```
===== FILE END =====

### workflow-tools/warboyctl/sensors/ports.sh

<a id="workflow-tools-warboyctl-sensors-ports-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/sensors/ports.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/sensors/ports.sh
Bytes: 1711  Lines: 59  Modified: 2025-09-01T23:03:26Z
SHA256: 978edc2a52933d013fa5b77eebd118a0227342b15db8fa72cd15668d63f3ebc1   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SELF_DIR/_lib.sh"

need ss || need netstat || true

echo -e "app\tport\tstatus"

in_use() {
  local p="$1"
  if command -v ss >/dev/null 2>&1; then
    ss -ltn | awk '{print $4}' | grep -E "[:.]$p\$" -q
  else
    netstat -ltn 2>/dev/null | awk '{print $4}' | grep -E "[:.]$p\$" -q
  fi
}

guess_port() {
  local app="$1"
  # priority 1: .env files
  for f in "$app/.env" "$app/.env.local"; do
    [[ -f "$f" ]] && awk -F= '/^[[:space:]]*([A-Za-z0-9_]*PORT)[[:space:]]*=/{print $2}' "$f" | tail -n1 | tr -d ' ' && return 0
  done
  # priority 2: package.json scripts (simple grep)
  local pj="$app/package.json"
  [[ -f "$pj" ]] || return 1
  # look for --port N
  local port
  port=$(grep -Eo -- '--port[[:space:]]+[0-9]+' "$pj" | awk '{print $2}' | tail -n1)
  [[ -n "$port" ]] && { echo "$port"; return 0; }
  # look for process.env.*PORT default assignment e.g. || 3000
  port=$(grep -Eo 'PORT[^0-9]{0,20}[0-9]{3,5}' -h "$app" -R 2>/dev/null | grep -Eo '[0-9]{3,5}' | head -n1 || true)
  [[ -n "$port" ]] && { echo "$port"; return 0; }
  # priority 3: name-based defaults (optional)
  case "$(basename "$app")" in
    game-web) echo 5173;;
    admin-web) echo 5174;;
    game-server) echo 8800;;
    data-api) echo 8801;;
    auth-api) echo 8802;;
    chat-server) echo 8803;;
    *) echo "";;
  esac
}

while read -r app; do
  p="$(guess_port "$app" || true)"
  if [[ -z "$p" ]]; then
    echo -e "$(basename "$app")\t-\tUNKNOWN"
  else
    if in_use "$p"; then
      echo -e "$(basename "$app")\t$p\tCONFLICT"
    else
      echo -e "$(basename "$app")\t$p\tFREE"
    fi
  fi
done < <(discover_apps)

```
===== FILE END =====

### workflow-tools/warboyctl/sensors/tsconfig.sh

<a id="workflow-tools-warboyctl-sensors-tsconfig-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/sensors/tsconfig.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/sensors/tsconfig.sh
Bytes: 1218  Lines: 34  Modified: 2025-09-01T23:03:53Z
SHA256: 96916a93c29e011a5275fce8a78242a015673987a2e7cc016daca13331be7d53   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail
SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SELF_DIR/_lib.sh"

echo -e "tsconfig\tissue\tdetail"

while read -r tsc; do
  base="$(dirname "$tsc")"
  rootDir="$(jqget "$tsc" '.compilerOptions.rootDir')"
  [[ -z "$rootDir" ]] && rootDir="src"
  outDir="$(jqget "$tsc" '.compilerOptions.outDir')"
  mod="$(jqget "$tsc" '.compilerOptions.module')"
  modRes="$(jqget "$tsc" '.compilerOptions.moduleResolution')"

  # rootDir exists & has code
  if [[ ! -d "$base/$rootDir" ]]; then
    echo -e "$tsc\tMISSING_ROOTDIR\t$rootDir"
  else
    cnt=$(find "$base/$rootDir" -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.jsx' \) | wc -l | tr -d ' ')
    [[ "$cnt" -eq 0 ]] && echo -e "$tsc\tEMPTY_ROOTDIR\t$rootDir"
  fi

  # NodeNext pairing (optional nudge)
  if [[ "$mod" == "NodeNext" && "$modRes" != "NodeNext" ]]; then
    echo -e "$tsc\tMODULE_MISMATCH\tmodule=$mod moduleResolution=$modRes"
  fi

  # outDir after build
  if [[ -n "$outDir" && ! -d "$base/$outDir" && -d "$base/$rootDir" ]]; then
    : # not an error until build
  fi
done < <(git ls-files -z 'apps/**/tsconfig.json' 'packages/**/tsconfig.json' | xargs -0 -I{} echo "{}")

```
===== FILE END =====

### workflow-tools/warboyctl/warboyctl.sh

<a id="workflow-tools-warboyctl-warboyctl-sh"></a>
===== FILE START =====
Path: workflow-tools/warboyctl/warboyctl.sh
URL: https://github.com/lungbean23/warboy/blob/afdd3a2536a013c216de5f4e594c321cf5ef5108/workflow-tools/warboyctl/warboyctl.sh
Bytes: 1365  Lines: 60  Modified: 2025-09-01T23:04:45Z
SHA256: d6eefad8d60ff17b607409435d2b97a992146e61ff66a74adceb97d16c67a3e6   Language: bash   Role: source
Summary: 

-----8<----- CONTENT -----8<-----
```bash
#!/usr/bin/env bash
set -euo pipefail

SELF_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(git rev-parse --show-toplevel 2>/dev/null || cd "$SELF_DIR/../.." && pwd)"
ROUTINES_DIR="$SELF_DIR/routines"
VERSION_FILE="$SELF_DIR/VERSION"
VERSION="$(cat "$VERSION_FILE" 2>/dev/null || echo "0.1.0")"

usage() {
  cat <<EOF
warboyctl v$VERSION – unified warboy tooling

Usage:
  warboyctl <command> [args]

Commands:
  doctor      sensor aggregate
  deadends    Scan for empty files, broken script targets, unresolved imports, etc.
  orphans      Find exported symbols that appear unused across the repo
  route-links  Check internal links and routes for obvious 404s (and optional live HTTP)
  version     Print version
  help        Show this help

Examples:
  warboyctl deadends --paginate
  warboyctl deadends --paths apps/data-api --checks imports
  warboyctl deadends --format json
EOF
}

cmd="${1:-}"; shift || true

case "${cmd}" in
  doctor)
    exec "$ROUTINES_DIR/doctor.sh" "$@"
    ;;
	
  deadends)
    exec "$ROUTINES_DIR/deadends.sh" "$@"
    ;;
  orphans) 
    exec "$ROUTINES_DIR/orphans.sh" "$@"
    ;;
   route-links)  
    exec "$ROUTINES_DIR/route-link-check.sh" "$@" 
    ;;  
  version)
    echo "$VERSION"
    ;;
  ""|-h|--help|help)
    usage
    ;;
  *)
    echo "Unknown command: ${cmd}" >&2
    usage
    exit 1
    ;;
esac

```
===== FILE END =====


# Repo Tree

```text
.
├── apps
│   ├── admin-api
│   │   ├── src
│   │   ├── .turbo
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── admin-web
│   │   ├── public
│   │   ├── src
│   │   ├── .turbo
│   │   ├── .env.local
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── vite.config.js
│   │   └── vite.config.ts
│   ├── auth-api
│   │   └── src
│   ├── chat-server
│   │   ├── data
│   │   ├── node_modules
│   │   ├── src
│   │   ├── .env
│   │   ├── .env.example
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── data-api
│   │   ├── docs
│   │   ├── src
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── game-server
│   │   ├── node_modules
│   │   ├── src
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   ├── game-web
│   │   ├── node_modules
│   │   ├── public
│   │   ├── src
│   │   ├── .gitignore
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   ├── tsconfig.tsbuildinfo
│   │   ├── vite.config.js
│   │   └── vite.config.ts
│   ├── towns-bot
│   │   └── src
│   └── towns-web
├── .git
│   ├── hooks
│   │   ├── applypatch-msg.sample
│   │   ├── commit-msg.sample
│   │   ├── fsmonitor-watchman.sample
│   │   ├── post-update.sample
│   │   ├── pre-applypatch.sample
│   │   ├── pre-commit.sample
│   │   ├── pre-merge-commit.sample
│   │   ├── prepare-commit-msg.sample
│   │   ├── pre-push.sample
│   │   ├── pre-rebase.sample
│   │   ├── pre-receive.sample
│   │   ├── push-to-checkout.sample
│   │   ├── sendemail-validate.sample
│   │   └── update.sample
│   ├── info
│   │   └── exclude
│   ├── logs
│   │   ├── refs
│   │   └── HEAD
│   ├── objects
│   │   ├── 01
│   │   ├── 02
│   │   ├── 05
│   │   ├── 07
│   │   ├── 08
│   │   ├── 09
│   │   ├── 0b
│   │   ├── 0c
│   │   ├── 0e
│   │   ├── 0f
│   │   ├── 10
│   │   ├── 12
│   │   ├── 13
│   │   ├── 17
│   │   ├── 18
│   │   ├── 19
│   │   ├── 1a
│   │   ├── 1c
│   │   ├── 1d
│   │   ├── 1e
│   │   ├── 1f
│   │   ├── 20
│   │   ├── 21
│   │   ├── 22
│   │   ├── 23
│   │   ├── 24
│   │   ├── 25
│   │   ├── 26
│   │   ├── 27
│   │   ├── 29
│   │   ├── 2a
│   │   ├── 2b
│   │   ├── 2c
│   │   ├── 2d
│   │   ├── 2e
│   │   ├── 2f
│   │   ├── 35
│   │   ├── 39
│   │   ├── 3a
│   │   ├── 3d
│   │   ├── 3e
│   │   ├── 41
│   │   ├── 42
│   │   ├── 43
│   │   ├── 44
│   │   ├── 45
│   │   ├── 46
│   │   ├── 48
│   │   ├── 4b
│   │   ├── 4e
│   │   ├── 4f
│   │   ├── 50
│   │   ├── 51
│   │   ├── 52
│   │   ├── 53
│   │   ├── 55
│   │   ├── 56
│   │   ├── 58
│   │   ├── 59
│   │   ├── 5a
│   │   ├── 5b
│   │   ├── 5c
│   │   ├── 5d
│   │   ├── 5e
│   │   ├── 60
│   │   ├── 61
│   │   ├── 63
│   │   ├── 64
│   │   ├── 65
│   │   ├── 68
│   │   ├── 6b
│   │   ├── 6d
│   │   ├── 6f
│   │   ├── 70
│   │   ├── 74
│   │   ├── 76
│   │   ├── 77
│   │   ├── 78
│   │   ├── 79
│   │   ├── 7a
│   │   ├── 7d
│   │   ├── 7f
│   │   ├── 83
│   │   ├── 84
│   │   ├── 85
│   │   ├── 86
│   │   ├── 87
│   │   ├── 88
│   │   ├── 8b
│   │   ├── 8c
│   │   ├── 8e
│   │   ├── 8f
│   │   ├── 90
│   │   ├── 92
│   │   ├── 93
│   │   ├── 94
│   │   ├── 96
│   │   ├── 97
│   │   ├── 98
│   │   ├── 9b
│   │   ├── 9d
│   │   ├── 9e
│   │   ├── a0
│   │   ├── a2
│   │   ├── a6
│   │   ├── a7
│   │   ├── a8
│   │   ├── a9
│   │   ├── ab
│   │   ├── ac
│   │   ├── ad
│   │   ├── ae
│   │   ├── af
│   │   ├── b0
│   │   ├── b3
│   │   ├── b4
│   │   ├── b6
│   │   ├── b7
│   │   ├── b9
│   │   ├── bb
│   │   ├── bc
│   │   ├── bd
│   │   ├── be
│   │   ├── bf
│   │   ├── c0
│   │   ├── c1
│   │   ├── c2
│   │   ├── c3
│   │   ├── c4
│   │   ├── c6
│   │   ├── c8
│   │   ├── c9
│   │   ├── ca
│   │   ├── cb
│   │   ├── ce
│   │   ├── cf
│   │   ├── d0
│   │   ├── d1
│   │   ├── d2
│   │   ├── d3
│   │   ├── d5
│   │   ├── d7
│   │   ├── d9
│   │   ├── da
│   │   ├── db
│   │   ├── dc
│   │   ├── dd
│   │   ├── de
│   │   ├── e0
│   │   ├── e2
│   │   ├── e4
│   │   ├── e5
│   │   ├── e6
│   │   ├── e7
│   │   ├── e9
│   │   ├── ea
│   │   ├── ec
│   │   ├── ed
│   │   ├── ee
│   │   ├── ef
│   │   ├── f2
│   │   ├── f4
│   │   ├── f5
│   │   ├── f8
│   │   ├── f9
│   │   ├── fc
│   │   ├── fd
│   │   ├── ff
│   │   ├── info
│   │   └── pack
│   ├── refs
│   │   ├── heads
│   │   ├── remotes
│   │   └── tags
│   ├── COMMIT_EDITMSG
│   ├── config
│   ├── description
│   ├── HEAD
│   └── index
├── .github
│   └── workflows
│       └── ci.yml
├── infra
│   ├── db
│   │   ├── schema.sql
│   │   └── seed.sql
│   ├── docker
│   │   └── Dockerfile
│   └── k8s
│       └── deployment.yaml
├── node_modules
│   ├── ajv
│   │   ├── dist
│   │   ├── lib
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── .runkit_example.js
│   ├── ajv-formats
│   │   ├── dist
│   │   ├── src
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── @ampproject
│   │   └── remapping
│   ├── ansi-regex
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── ansi-styles
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── @babel
│   │   ├── code-frame
│   │   ├── compat-data
│   │   ├── core
│   │   ├── generator
│   │   ├── helper-compilation-targets
│   │   ├── helper-globals
│   │   ├── helper-module-imports
│   │   ├── helper-module-transforms
│   │   ├── helper-plugin-utils
│   │   ├── helpers
│   │   ├── helper-string-parser
│   │   ├── helper-validator-identifier
│   │   ├── helper-validator-option
│   │   ├── parser
│   │   ├── plugin-transform-react-jsx-self
│   │   ├── plugin-transform-react-jsx-source
│   │   ├── template
│   │   ├── traverse
│   │   └── types
│   ├── .bin
│   │   ├── browserslist -> ../browserslist/cli.js
│   │   ├── conc -> ../concurrently/dist/bin/concurrently.js
│   │   ├── concurrently -> ../concurrently/dist/bin/concurrently.js
│   │   ├── esbuild -> ../esbuild/bin/esbuild
│   │   ├── jsesc -> ../jsesc/bin/jsesc
│   │   ├── json5 -> ../json5/lib/cli.js
│   │   ├── nanoid -> ../nanoid/bin/nanoid.cjs
│   │   ├── parser -> ../@babel/parser/bin/babel-parser.js
│   │   ├── rollup -> ../rollup/dist/bin/rollup
│   │   ├── semver -> ../semver/bin/semver.js
│   │   ├── tree-kill -> ../tree-kill/cli.js
│   │   ├── tsc -> ../typescript/bin/tsc
│   │   ├── tsserver -> ../typescript/bin/tsserver
│   │   ├── tsx -> ../tsx/dist/cli.mjs
│   │   ├── turbo -> ../turbo/bin/turbo
│   │   ├── update-browserslist-db -> ../update-browserslist-db/cli.js
│   │   ├── vite -> ../vite/bin/vite.js
│   │   └── yaml -> ../yaml/bin.mjs
│   ├── browserslist
│   │   ├── browser.js
│   │   ├── cli.js
│   │   ├── error.d.ts
│   │   ├── error.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── node.js
│   │   ├── package.json
│   │   ├── parse.js
│   │   └── README.md
│   ├── caniuse-lite
│   │   ├── data
│   │   ├── dist
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── chalk
│   │   ├── node_modules
│   │   ├── source
│   │   ├── index.d.ts
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── cliui
│   │   ├── build
│   │   ├── CHANGELOG.md
│   │   ├── index.mjs
│   │   ├── LICENSE.txt
│   │   ├── package.json
│   │   └── README.md
│   ├── color-convert
│   │   ├── CHANGELOG.md
│   │   ├── conversions.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── route.js
│   ├── color-name
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── concurrently
│   │   ├── dist
│   │   ├── docs
│   │   ├── index.d.mts
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── index.mjs
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── convert-source-map
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── csstype
│   │   ├── index.d.ts
│   │   ├── index.js.flow
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── debug
│   │   ├── src
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── electron-to-chromium
│   │   ├── chromium-versions.js
│   │   ├── chromium-versions.json
│   │   ├── full-chromium-versions.js
│   │   ├── full-chromium-versions.json
│   │   ├── full-versions.js
│   │   ├── full-versions.json
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── versions.js
│   │   └── versions.json
│   ├── emoji-regex
│   │   ├── es2015
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE-MIT.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   └── text.js
│   ├── @esbuild
│   │   └── linux-x64
│   ├── esbuild
│   │   ├── bin
│   │   ├── lib
│   │   ├── install.js
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── escalade
│   │   ├── dist
│   │   ├── sync
│   │   ├── index.d.mts
│   │   ├── index.d.ts
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── fast-deep-equal
│   │   ├── es6
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── react.d.ts
│   │   ├── react.js
│   │   └── README.md
│   ├── fast-uri
│   │   ├── benchmark
│   │   ├── .github
│   │   ├── lib
│   │   ├── test
│   │   ├── types
│   │   ├── eslint.config.js
│   │   ├── .gitattributes
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── fdir
│   │   ├── dist
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── game-server -> ../apps/game-server
│   ├── game-web -> ../apps/game-web
│   ├── gensync
│   │   ├── test
│   │   ├── index.js
│   │   ├── index.js.flow
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── get-caller-file
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── index.js.map
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── get-tsconfig
│   │   ├── dist
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── has-flag
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── is-fullwidth-code-point
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── itty-router
│   │   ├── createCors.d.ts
│   │   ├── createCors.js
│   │   ├── createCors.js.map
│   │   ├── createCors.mjs
│   │   ├── createCors.mjs.map
│   │   ├── createResponse.d.ts
│   │   ├── createResponse.js
│   │   ├── createResponse.js.map
│   │   ├── createResponse.mjs
│   │   ├── createResponse.mjs.map
│   │   ├── error.d.ts
│   │   ├── error.js
│   │   ├── error.js.map
│   │   ├── error.mjs
│   │   ├── error.mjs.map
│   │   ├── html.d.ts
│   │   ├── html.js
│   │   ├── html.js.map
│   │   ├── html.mjs
│   │   ├── html.mjs.map
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── index.js.map
│   │   ├── index.mjs
│   │   ├── index.mjs.map
│   │   ├── jpeg.d.ts
│   │   ├── jpeg.js
│   │   ├── jpeg.js.map
│   │   ├── jpeg.mjs
│   │   ├── jpeg.mjs.map
│   │   ├── json.d.ts
│   │   ├── json.js
│   │   ├── json.js.map
│   │   ├── json.mjs
│   │   ├── json.mjs.map
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── png.d.ts
│   │   ├── png.js
│   │   ├── png.js.map
│   │   ├── png.mjs
│   │   ├── png.mjs.map
│   │   ├── README.md
│   │   ├── Router.d.ts
│   │   ├── Router.js
│   │   ├── Router.js.map
│   │   ├── Router.mjs
│   │   ├── Router.mjs.map
│   │   ├── status.d.ts
│   │   ├── StatusError.d.ts
│   │   ├── StatusError.js
│   │   ├── StatusError.js.map
│   │   ├── StatusError.mjs
│   │   ├── StatusError.mjs.map
│   │   ├── status.js
│   │   ├── status.js.map
│   │   ├── status.mjs
│   │   ├── status.mjs.map
│   │   ├── text.d.ts
│   │   ├── text.js
│   │   ├── text.js.map
│   │   ├── text.mjs
│   │   ├── text.mjs.map
│   │   ├── webp.d.ts
│   │   ├── webp.js
│   │   ├── webp.js.map
│   │   ├── webp.mjs
│   │   ├── webp.mjs.map
│   │   ├── websocket.d.ts
│   │   ├── websocket.js
│   │   ├── websocket.js.map
│   │   ├── websocket.mjs
│   │   ├── websocket.mjs.map
│   │   ├── withContent.d.ts
│   │   ├── withContent.js
│   │   ├── withContent.js.map
│   │   ├── withContent.mjs
│   │   ├── withContent.mjs.map
│   │   ├── withCookies.d.ts
│   │   ├── withCookies.js
│   │   ├── withCookies.js.map
│   │   ├── withCookies.mjs
│   │   ├── withCookies.mjs.map
│   │   ├── withParams.d.ts
│   │   ├── withParams.js
│   │   ├── withParams.js.map
│   │   ├── withParams.mjs
│   │   └── withParams.mjs.map
│   ├── @jridgewell
│   │   ├── gen-mapping
│   │   ├── resolve-uri
│   │   ├── sourcemap-codec
│   │   └── trace-mapping
│   ├── jsesc
│   │   ├── bin
│   │   ├── man
│   │   ├── jsesc.js
│   │   ├── LICENSE-MIT.txt
│   │   ├── package.json
│   │   └── README.md
│   ├── json5
│   │   ├── dist
│   │   ├── lib
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── json-schema-traverse
│   │   ├── .github
│   │   ├── spec
│   │   ├── .eslintrc.yml
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── js-tokens
│   │   ├── CHANGELOG.md
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── lru-cache
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── ms
│   │   ├── index.js
│   │   ├── license.md
│   │   ├── package.json
│   │   └── readme.md
│   ├── nanoid
│   │   ├── async
│   │   ├── bin
│   │   ├── non-secure
│   │   ├── url-alphabet
│   │   ├── index.browser.cjs
│   │   ├── index.browser.js
│   │   ├── index.cjs
│   │   ├── index.d.cts
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── nanoid.js
│   │   ├── package.json
│   │   └── README.md
│   ├── node-releases
│   │   ├── data
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── picocolors
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── picocolors.browser.js
│   │   ├── picocolors.d.ts
│   │   ├── picocolors.js
│   │   ├── README.md
│   │   └── types.d.ts
│   ├── picomatch
│   │   ├── lib
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── posix.js
│   │   └── README.md
│   ├── postcss
│   │   ├── lib
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── react
│   │   ├── cjs
│   │   ├── compiler-runtime.js
│   │   ├── index.js
│   │   ├── jsx-dev-runtime.js
│   │   ├── jsx-dev-runtime.react-server.js
│   │   ├── jsx-runtime.js
│   │   ├── jsx-runtime.react-server.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── react.react-server.js
│   │   └── README.md
│   ├── react-dom
│   │   ├── cjs
│   │   ├── client.js
│   │   ├── client.react-server.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── profiling.js
│   │   ├── profiling.react-server.js
│   │   ├── react-dom.react-server.js
│   │   ├── README.md
│   │   ├── server.browser.js
│   │   ├── server.bun.js
│   │   ├── server.edge.js
│   │   ├── server.js
│   │   ├── server.node.js
│   │   ├── server.react-server.js
│   │   ├── static.browser.js
│   │   ├── static.edge.js
│   │   ├── static.js
│   │   ├── static.node.js
│   │   ├── static.react-server.js
│   │   └── test-utils.js
│   ├── react-refresh
│   │   ├── cjs
│   │   ├── babel.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── runtime.js
│   ├── require-directory
│   │   ├── index.js
│   │   ├── .jshintrc
│   │   ├── LICENSE
│   │   ├── .npmignore
│   │   ├── package.json
│   │   ├── README.markdown
│   │   └── .travis.yml
│   ├── require-from-string
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── resolve-pkg-maps
│   │   ├── dist
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── @rolldown
│   │   └── pluginutils
│   ├── @rollup
│   │   ├── rollup-linux-x64-gnu
│   │   └── rollup-linux-x64-musl
│   ├── rollup
│   │   ├── dist
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── rxjs
│   │   ├── ajax
│   │   ├── dist
│   │   ├── fetch
│   │   ├── operators
│   │   ├── src
│   │   ├── testing
│   │   ├── webSocket
│   │   ├── CHANGELOG.md
│   │   ├── CODE_OF_CONDUCT.md
│   │   ├── LICENSE.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   └── tsconfig.json
│   ├── scheduler
│   │   ├── cjs
│   │   ├── index.js
│   │   ├── index.native.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── unstable_mock.js
│   │   └── unstable_post_task.js
│   ├── semver
│   │   ├── bin
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── range.bnf
│   │   ├── README.md
│   │   └── semver.js
│   ├── shell-quote
│   │   ├── .github
│   │   ├── test
│   │   ├── .eslintrc
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── .nycrc
│   │   ├── package.json
│   │   ├── parse.js
│   │   ├── print.py
│   │   ├── quote.js
│   │   ├── README.md
│   │   └── security.md
│   ├── source-map-js
│   │   ├── lib
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── source-map.d.ts
│   │   └── source-map.js
│   ├── string-width
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── strip-ansi
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── supports-color
│   │   ├── browser.js
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── tinyglobby
│   │   ├── dist
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── tree-kill
│   │   ├── cli.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── tslib
│   │   ├── modules
│   │   ├── CopyrightNotice.txt
│   │   ├── LICENSE.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   ├── tslib.d.ts
│   │   ├── tslib.es6.html
│   │   ├── tslib.es6.js
│   │   ├── tslib.es6.mjs
│   │   ├── tslib.html
│   │   └── tslib.js
│   ├── tsx
│   │   ├── dist
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── turbo
│   │   ├── bin
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── schema.json
│   ├── turbo-linux-64
│   │   ├── bin
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── @types
│   │   ├── babel__core
│   │   ├── babel__generator
│   │   ├── babel__template
│   │   ├── babel__traverse
│   │   ├── estree
│   │   ├── node
│   │   ├── react
│   │   ├── react-dom
│   │   └── ws
│   ├── typescript
│   │   ├── bin
│   │   ├── lib
│   │   ├── LICENSE.txt
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── SECURITY.md
│   │   └── ThirdPartyNoticeText.txt
│   ├── undici-types
│   │   ├── agent.d.ts
│   │   ├── api.d.ts
│   │   ├── balanced-pool.d.ts
│   │   ├── cache.d.ts
│   │   ├── cache-interceptor.d.ts
│   │   ├── client.d.ts
│   │   ├── client-stats.d.ts
│   │   ├── connector.d.ts
│   │   ├── content-type.d.ts
│   │   ├── cookies.d.ts
│   │   ├── diagnostics-channel.d.ts
│   │   ├── dispatcher.d.ts
│   │   ├── env-http-proxy-agent.d.ts
│   │   ├── errors.d.ts
│   │   ├── eventsource.d.ts
│   │   ├── fetch.d.ts
│   │   ├── formdata.d.ts
│   │   ├── global-dispatcher.d.ts
│   │   ├── global-origin.d.ts
│   │   ├── h2c-client.d.ts
│   │   ├── handlers.d.ts
│   │   ├── header.d.ts
│   │   ├── index.d.ts
│   │   ├── interceptors.d.ts
│   │   ├── LICENSE
│   │   ├── mock-agent.d.ts
│   │   ├── mock-call-history.d.ts
│   │   ├── mock-client.d.ts
│   │   ├── mock-errors.d.ts
│   │   ├── mock-interceptor.d.ts
│   │   ├── mock-pool.d.ts
│   │   ├── package.json
│   │   ├── patch.d.ts
│   │   ├── pool.d.ts
│   │   ├── pool-stats.d.ts
│   │   ├── proxy-agent.d.ts
│   │   ├── readable.d.ts
│   │   ├── README.md
│   │   ├── retry-agent.d.ts
│   │   ├── retry-handler.d.ts
│   │   ├── util.d.ts
│   │   ├── utility.d.ts
│   │   ├── webidl.d.ts
│   │   └── websocket.d.ts
│   ├── update-browserslist-db
│   │   ├── check-npm-version.js
│   │   ├── cli.js
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── utils.js
│   ├── vite
│   │   ├── bin
│   │   ├── dist
│   │   ├── misc
│   │   ├── types
│   │   ├── client.d.ts
│   │   ├── index.cjs
│   │   ├── index.d.cts
│   │   ├── LICENSE.md
│   │   ├── package.json
│   │   └── README.md
│   ├── @vitejs
│   │   └── plugin-react
│   ├── @warboy
│   │   ├── admin-api -> ../../apps/admin-api
│   │   ├── admin-web -> ../../apps/admin-web
│   │   ├── chat -> ../../packages/chat
│   │   ├── chat-server -> ../../apps/chat-server
│   │   ├── data-api -> ../../apps/data-api
│   │   ├── net -> ../../packages/net
│   │   ├── overlays -> ../../packages/overlays
│   │   ├── trolls -> ../../packages/trolls
│   │   ├── warboys-data -> ../../packages/warboys-data
│   │   └── world -> ../../packages/world
│   ├── wrap-ansi
│   │   ├── index.js
│   │   ├── license
│   │   ├── package.json
│   │   └── readme.md
│   ├── ws
│   │   ├── lib
│   │   ├── browser.js
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── wrapper.mjs
│   ├── y18n
│   │   ├── build
│   │   ├── CHANGELOG.md
│   │   ├── index.mjs
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   ├── yallist
│   │   ├── iterator.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── yallist.js
│   ├── yaml
│   │   ├── browser
│   │   ├── dist
│   │   ├── bin.mjs
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   └── util.js
│   ├── yargs
│   │   ├── build
│   │   ├── helpers
│   │   ├── lib
│   │   ├── locales
│   │   ├── browser.d.ts
│   │   ├── browser.mjs
│   │   ├── index.cjs
│   │   ├── index.mjs
│   │   ├── LICENSE
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── yargs
│   │   └── yargs.mjs
│   ├── yargs-parser
│   │   ├── build
│   │   ├── browser.js
│   │   ├── CHANGELOG.md
│   │   ├── LICENSE.txt
│   │   ├── package.json
│   │   └── README.md
│   ├── zod
│   │   ├── src
│   │   ├── v3
│   │   ├── v4
│   │   ├── v4-mini
│   │   ├── index.cjs
│   │   ├── index.d.cts
│   │   ├── index.d.ts
│   │   ├── index.js
│   │   ├── LICENSE
│   │   ├── package.json
│   │   └── README.md
│   └── .package-lock.json
├── packages
│   ├── assets
│   │   └── src
│   ├── chat
│   │   ├── src
│   │   ├── .turbo
│   │   ├── package.json
│   │   ├── README.md
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   ├── core
│   │   └── src
│   ├── net
│   │   ├── src
│   │   ├── .turbo
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   ├── overlays
│   │   ├── src
│   │   ├── .turbo
│   │   ├── .gitignore
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   ├── shared
│   ├── trolls
│   │   ├── src
│   │   ├── package.json
│   │   └── tsconfig.json
│   ├── warboys-data
│   │   ├── dist
│   │   ├── node_modules
│   │   ├── scripts
│   │   ├── src
│   │   ├── .turbo
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsconfig.tsbuildinfo
│   └── world
│       ├── src
│       ├── .turbo
│       ├── package.json
│       ├── tsconfig.json
│       └── tsconfig.tsbuildinfo
├── .turbo
│   ├── cache
│   │   ├── 06dd3b2ed08ec006-meta.json
│   │   ├── 06dd3b2ed08ec006.tar.zst
│   │   ├── 514b634f94b5922c-meta.json
│   │   ├── 514b634f94b5922c.tar.zst
│   │   ├── a3f1ba6cd5d33f21-meta.json
│   │   ├── a3f1ba6cd5d33f21.tar.zst
│   │   ├── b381066401fa1879-meta.json
│   │   ├── b381066401fa1879.tar.zst
│   │   ├── e1803a16f594e15f-meta.json
│   │   └── e1803a16f594e15f.tar.zst
│   ├── cookies
│   │   ├── 10.cookie
│   │   ├── 1.cookie
│   │   ├── 2.cookie
│   │   ├── 3.cookie
│   │   ├── 4.cookie
│   │   ├── 5.cookie
│   │   ├── 6.cookie
│   │   ├── 7.cookie
│   │   ├── 8.cookie
│   │   └── 9.cookie
│   └── daemon
│       └── 698dcf88aebd82f5-turbo.log.2025-09-06
├── workflow-tools
│   ├── backupr
│   │   ├── backup.sh
│   │   └── README.md
│   ├── dev-all
│   │   ├── _attic
│   │   ├── helpers
│   │   ├── logs
│   │   ├── bootstrap-fedora.sh
│   │   └── dev-all.sh
│   ├── git
│   │   └── gitready.sh
│   ├── proj_digestr
│   │   ├── helpers
│   │   ├── main.sh
│   │   └── project_bundle.sh.bak
│   ├── warboyctl
│   │   ├── routines
│   │   ├── sensors
│   │   ├── VERSION
│   │   └── warboyctl.sh
│   ├── warboyctlclearr
│   ├── warboyctlr
│   ├── bootstrap-workspaces.sh
│   ├── devserver-wizard.sh
│   ├── dev-tmux.sh
│   └── rebuild-rerun.sh
├── BETA.md
├── .env.example
├── .gitattributes
├── .gitignore
├── .npmrc
├── package.json
├── package-lock.json
├── PROJECT_BUNDLE.md
├── README.md
├── tsconfig.base.json
├── tsconfig.json
└── turbo.json

470 directories, 657 files

```
