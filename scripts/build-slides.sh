#!/usr/bin/env bash
set -euo pipefail

# Marp CLI が無ければ一時的に npx で実行
OUT_DIR="docs/slides/pdf"
mkdir -p "$OUT_DIR"

# 1つも .marp.md が無い場合はスキップ
shopt -s nullglob
MARPS=(docs/slides/*.marp.md)
if [ ${#MARPS[@]} -eq 0 ]; then
  echo "No slides (.marp.md) found under docs/slides/. Skipped."
  exit 0
fi

npx -y @marp-team/marp-cli "${MARPS[@]}" --pdf --allow-local-files --output "$OUT_DIR"/
echo "PDF exported to $OUT_DIR/"
