# 📋 Guía de Despliegue en Render

## Requisitos previos

1. **Cuenta en Render**: https://render.com
2. **Repositorio en GitHub** con los cambios confirmados
3. **Variables de entorno necesarias**

## Pasos de Despliegue

### 1. Conectar Repositorio

1. Accede a https://dashboard.render.com
2. Click en "New +" → "Web Service"
3. Selecciona tu repositorio de GitHub
4. Autoriza a Render si es necesario

### 2. Configuración Inicial

- **Name**: `portfolio-api` (o tu nombre preferido)
- **Runtime**: `Python 3.11.0`
- **Build Command**: Se leerá automáticamente desde `render.yaml`
- **Start Command**: Se leerá automáticamente desde `render.yaml`
- **Auto-deploy**: Habilitado

### 3. Crear Base de Datos PostgreSQL

1. En el dashboard de Render, ve a "Databases"
2. Click en "New +" → "PostgreSQL"
3. **Name**: `portfolio-db`
4. **Region**: Selecciona la misma que tu servicio web
5. **Plan**: Free (para empezar)
6. Espera a que se cree (unos minutos)

### 4. Conectar la BD al Web Service

1. Abre el Web Service `portfolio-api`
2. Ve a "Environment"
3. Render debería haber creado automáticamente `DATABASE_URL`
4. Verifica que esté presente

### 5. Generar JWT_SECRET

La clave JWT se genera automáticamente por Render.
Si necesitas cambiarla manualmente:

1. En "Environment", edita `JWT_SECRET`
2. Usa un valor aleatorio fuerte (ej: `openssl rand -hex 32`)

### 6. Confirmar Despliegue

1. Cualquier push a la rama principal (main) disparará automáticamente el deploy
2. Monitorea el progreso en la sección "Logs"

## Verificación Post-Despliegue

1. **Frontend**: Accede a `https://tu-servicio.onrender.com`
2. **API**: Prueba `https://tu-servicio.onrender.com/api/`
3. **Autenticación**: Prueba login en `https://tu-servicio.onrender.com/auth/`

## Solución de Problemas

### "Build failed" o "npm: command not found"

- Render no encontró Node.js. Verifica que el `buildCommand` esté correcto en `render.yaml`

### "ModuleNotFoundError"

- Las dependencias de Python no se instalaron. Revisa `api/requirements.txt`

### "Database connection refused"

- La variable `DATABASE_URL` no está configurada correctamente
- Verifica que PostgreSQL esté corriendo en Render

### Frontend no se carga

- Asegúrate de que `npm run build` ejecutó correctamente
- Verifica que `dist/` contiene los archivos compilados
- Revisa que `app.py` sirva correctamente los archivos estáticos

## Estructura de Archivos para Render

```
proyecto/
├── api/
│   ├── app.py              # Aplicación Flask principal
│   ├── requirements.txt    # Dependencias Python
│   ├── routes_*.py
│   ├── models.py
│   └── extensions.py
├── src/                    # Frontend React
│   └── ...
├── dist/                   # Frontend compilado (se genera en build)
├── package.json            # Dependencias Node.js
├── render.yaml             # Configuración para Render
├── build.sh                # Script de build
├── .env.example            # Variables de entorno de ejemplo
└── .gitignore
```

## Variables de Entorno Automáticas (por Render)

- `DATABASE_URL`: Generada automáticamente cuando creas la BD PostgreSQL
- `JWT_SECRET`: Generada automáticamente (sin generar valor, hazlo manual)

## Variables de Entorno Manuales

No son necesarias para Render, ya que:
- `PYTHON_VERSION` se especifica en `render.yaml`
- `NODE_VERSION` se especifica en `render.yaml`
- `FLASK_ENV` ya está en `render.yaml`

## Tips Importantes

✅ **Mantener código sincronizado**: Los cambios en main se despliegan automáticamente
✅ **Base de datos**: Renderiza mantiene los datos entre redeploys (planes pagos mantienen más datos)
✅ **Logs**: Revisa los logs en tiempo real en el dashboard de Render
✅ **SSL/HTTPS**: Se cubre automáticamente con certificados Let's Encrypt

## URL de Ejemplo

Tu aplicación estará disponible en:
```
https://mi-nuevo-portfolio.onrender.com
```

Para cambiar el nombre del servicio, ve a Settings > Rename.
