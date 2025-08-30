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

