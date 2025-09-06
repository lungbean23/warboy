#!/usr/bin/env bash
set -euo pipefail

INCLUDE_BUNDLE=1
RUN_DIGESTR_CHECK=1
DO_PUSH=1
COMMIT_MSG=""
STAGE_LIST=("README.md" "package.json" "turbo.json")

usage() {
  cat <<'USAGE'
gitready.sh [options] --message "your commit message"

Options:
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

# Commit
git commit -m "$COMMIT_MSG"

# Optional push
if [[ "$DO_PUSH" -eq 1 ]]; then
  git push
fi

echo "Done. Branch: $BRANCH"
