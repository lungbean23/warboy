# warboy

Monorepo for the Warboy project.

## Dev
```bash
npm i
npm run build   # builds all workspaces
npm run dev     # runs game-server + game-web together (if configured)
Workspaces

apps/game-server

apps/game-web

apps/admin-api

apps/admin-web

apps/auth-api

apps/towns-bot

## Quick start (Fedora)

```bash
git clone <this-repo>
cd warboy

# install system deps + npm workspaces
./workflow-tools/dev-all/bootstrap-fedora.sh

# run everything (tmux + servers + HUD)
./workflow-tools/dev-all/dev-all.sh up

# view the app:
# - game web: http://localhost:5175/
# - HUD logs: http://localhost:5599/

# status / stop
./workflow-tools/dev-all/dev-all.sh status
./workflow-tools/dev-all/dev-all.sh stop

