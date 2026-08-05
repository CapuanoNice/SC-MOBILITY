#!/usr/bin/env bash
set -euo pipefail

# Descarga la versión RAW de preview.html desde GitHub y la abre en el navegador
# Uso: chmod +x scripts/open-raw-preview.sh && scripts/open-raw-preview.sh

REPO_OWNER="CapuanoNice"
REPO_NAME="SC-MOBILITY"
BRANCH="main"
FILE_PATH="preview.html"

RAW_URL="https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${BRANCH}/${FILE_PATH}"
TMPDIR="$(mktemp -d)"
OUTFILE="$TMPDIR/preview.html"

echo "Descargando $RAW_URL -> $OUTFILE"
curl -fsSL "$RAW_URL" -o "$OUTFILE"

echo "Abriendo $OUTFILE en el navegador..."
if command -v xdg-open >/dev/null 2>&1; then
  xdg-open "$OUTFILE" || true
elif command -v open >/dev/null 2>&1; then
  open "$OUTFILE" || true
else
  echo "No se encontró comando para abrir el navegador. Archivo descargado en: $OUTFILE"
fi

exit 0
