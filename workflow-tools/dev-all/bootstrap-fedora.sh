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

