#!/usr/bin/env bash
set -euo pipefail

ROOTDIR="$(cd "$(dirname "$0")/.." && pwd)"
cd "$ROOTDIR"

echo "[sc-mobility] Aplicando cambios y preparando entorno..."

echo "1) Asegurando rama 'main' y actualizando desde origin"
git checkout main || true
git pull origin main

echo "2) Instalando dependencias npm"
npm install

if [ ! -f .env ]; then
  echo "3) .env no encontrado — creando desde .env.example"
  if [ -f .env.example ]; then
    cp .env.example .env
    echo "   -> Copiado .env.example a .env. Rellena las claves (CLERK, DATABASE_URL, etc.) antes de continuar si es necesario."
  else
    echo "   -> No existe .env.example. Crea .env manualmente con las variables requeridas."
  fi
else
  echo "3) .env ya existe — no la sobrescribiré."
fi

# Ejecutar seed si está definido en package.json como prisma:seed
if npm run | grep -q "prisma:seed"; then
  echo "4) Ejecutando seed (prisma:seed)"
  npm run prisma:seed || echo "   -> Seed falló o requiere DB configurada. Revísalo manualmente."
else
  echo "4) No se encontró script 'prisma:seed' en package.json — saltando seed."
fi

echo "5) Construyendo la aplicación (next build)"
npm run build

echo "Hecho. Para ejecutar en desarrollo: npm run dev" 
echo "Para desplegar en Vercel: configura las variables de entorno en Vercel y usa 'npx vercel --prod'"

exit 0
