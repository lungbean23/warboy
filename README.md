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
