📦 PROYECTO LISTO PARA RENDER
============================

Tu proyecto está 100% preparado. Aquí está la forma MÁS RÁPIDA de desplegarlo:

## PASO 1: Confirmar cambios en Git (1 min)

```bash
git add .
git commit -m "Preparar para Render: frontend + backend"
git push origin main
```

## PASO 2: Ir a Render Dashboard (5 min)

1. Accede a: https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Conecta tu repositorio GitHub
4. Render leerá `render.yaml` automáticamente
5. Click "Create Web Service"
6. Espera el build (2-3 minutos)

## PASO 3: Crear Base de Datos PostgreSQL (5 min)

1. En Dashboard, click "New +" → "PostgreSQL"
2. Name: `portfolio-db`
3. Click "Create Database"
4. Espera a que esté lista

## PASO 4: Listo ✨

- Tu app está en: `https://portfolio-api.onrender.com`
- Frontend funciona
- Backend funciona
- Base de datos funciona

## Si Algo Falla

1. Revisa los LOGS en el Dashboard (botón rojo "Logs")
2. Lee: `CHECKLIST_DEPLOY.md` → Sección "Si Algo Falla"

## Verificación Pre-Deploy (opcional)

```bash
bash verify-render-config.sh
```

## Desarrollar Localmente (opcional)

```bash
bash setup-local.sh
```

Luego abre 2 terminales:
- Terminal 1: `npm run dev` (Frontend en :3000)
- Terminal 2: `cd api && python app.py` (Backend en :5000)

---

📚 Documentación disponible:
- `README_DEPLOY.md` - Resumen completo
- `DEPLOY_RENDER.md` - Guía detallada
- `CHECKLIST_DEPLOY.md` - Checklist completo
- `ARCHITECTURE.md` - Diagramas

🚀 ¡A desplegar!
