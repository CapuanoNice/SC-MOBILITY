#!/usr/bin/env bash
set -euo pipefail

# open-preview.sh — abre preview.html con el comando adecuado según el SO
FILE="preview.html"

if [ ! -f "$FILE" ]; then
  echo "Error: $FILE no encontrado en el directorio actual."
  exit 1
fi

OS_NAME=$(uname -s)
case "$OS_NAME" in
  Darwin)
    open "$FILE" || { echo "Fallo al ejecutar open."; exit 1; }
    ;;
  Linux)
    if command -v xdg-open >/dev/null 2>&1; then
      xdg-open "$FILE" || { echo "Fallo al ejecutar xdg-open."; exit 1; }
    else
      echo "xdg-open no está disponible. Abre $FILE manualmente."; exit 1
    fi
    ;;
  *)
    echo "SO no soportado automáticamente: $OS_NAME. Abre $FILE manualmente.";
    exit 1
    ;;
esac

exit 0
