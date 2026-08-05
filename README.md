# SC-MOBILITY — Plataforma premium de micromovilidad

Proyecto base para la tienda premium SC-MOBILITY.

Comandos rápidos:

```bash
npm install
npm run dev
```

Archivos clave:
- prisma/schema.prisma — esquema inicial
- app/layout.tsx — layout global
- app/page.tsx — página principal (hero)
# SC-MOBILITY
Website de SC-MOBILITY

## Deploy (dominio gratuito)

Estado: pendiente — despliegue en Vercel no completado desde este entorno debido a credenciales.

-- Dominio público (Vercel): `PENDIENTE_DE_DESPLIEGUE`
-- Versión estática (GitHub Pages): https://CapuanoNice.github.io/SC-MOBILITY

Pasos para desplegar y obtener el dominio gratuito:

1. Crear/entrar en una cuenta en https://vercel.com y conectar GitHub.
2. En Vercel, importar el repositorio `CapuanoNice/SC-MOBILITY`.
3. Añadir variables de entorno en Settings → Environment Variables:
	- `DATABASE_URL` (ej: `postgresql://postgres:changeme@HOST:5432/sc_mobility?schema=public`)
	- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY` (si usas Clerk)
4. Desplegar desde la UI de Vercel o usar la CLI:

```bash
npx vercel login
npx vercel --prod
```

Cuando el despliegue se complete, Vercel proporcionará un dominio gratuito del tipo `https://<proyecto>.vercel.app`.
Reemplaza `PENDIENTE_DE_DESPLIEGUE` arriba por esa URL.

Si quieres, puedo terminar el despliegue desde este entorno — necesito que inicies sesión con `npx vercel login` en este terminal (abrirás una URL y autorizarás). Actualmente el intento falló con: "The specified token is not valid".

### Vista previa rápida (archivo HTML descargable)

Si quieres ver una versión estática simple ahora, hay un archivo HTML listo para descargar y abrir localmente:

- Preview HTML: [public/preview.html](public/preview.html)

Puedes descargarlo haciendo clic en el enlace anterior en GitHub (botón "Raw" → Guardar como), o descargar el archivo directamente desde el repositorio y abrirlo en tu navegador.

