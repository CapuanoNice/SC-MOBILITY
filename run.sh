#!/usr/bin/env bash
set -euo pipefail

echo "SC-MOBILITY — iniciar entorno de desarrollo"
ROOT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$ROOT_DIR"

if [ ! -f .env ]; then
  cp .env.example .env
  echo ".env creado desde .env.example — edita DATABASE_URL y claves antes de migrar/sembrar"
fi

echo "Instalando dependencias (si no están instaladas)..."
npm install --no-audit --no-fund

echo "Generando cliente Prisma..."
npx prisma generate

echo "Nota: las migraciones y el seed requieren DATABASE_URL configurado."
echo "Para aplicar migraciones y seed manualmente ejecuta:"
echo "  npx prisma migrate dev --name init"
echo "  npm run seed"

echo "Iniciando servidor de desarrollo..."
npm run dev
