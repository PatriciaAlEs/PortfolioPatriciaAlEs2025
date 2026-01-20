# 📋 Checklist de Despliegue en Render

## Antes de Desplegar

- [ ] Todos los cambios están en Git (staged y committed)
- [ ] Branch `main` está actualizado con los cambios
- [ ] Probaste localmente: `npm run dev` y Flask backend
- [ ] Corriste: `bash verify-render-config.sh`
- [ ] `.env.example` tiene todas las variables necesarias
- [ ] `render.yaml` existe y está bien formateado

## En Render Dashboard

- [ ] Cuentas con acceso a https://dashboard.render.com
- [ ] Conectaste tu repositorio GitHub
- [ ] Autorizaste a Render (GitHub OAuth)

## Creación del Web Service

- [ ] Click en "New +" → "Web Service"
- [ ] Selecciona el repositorio
- [ ] **Name**: `portfolio-api` (o tu nombre)
- [ ] **Runtime**: `Python` (Render detecta automáticamente Node.js)
- [ ] **Branch**: `main`
- [ ] **Build Command**: Auto-detectado de `render.yaml` ✓
- [ ] **Start Command**: Auto-detectado de `render.yaml` ✓
- [ ] **Plan**: Free (para empezar)
- [ ] Click "Create Web Service"

## Creación de Base de Datos

- [ ] En Dashboard, ve a "Databases"
- [ ] Click "New +" → "PostgreSQL"
- [ ] **Name**: `portfolio-db`
- [ ] **Region**: Misma que el servicio web
- [ ] **Plan**: Free
- [ ] Click "Create Database"
- [ ] Espera a que esté lista (2-5 minutos)

## Configuración de Variables

- [ ] En el Web Service, ve a "Environment"
- [ ] Verifica que `DATABASE_URL` esté presente (auto-creada)
- [ ] Verifica que `JWT_SECRET` esté presente (auto-creada)
- [ ] Nota: Render puede generar JWT_SECRET automáticamente
- [ ] Si quieres cambiar JWT_SECRET: edítalo manualmente

## Monitoreo del Deploy

- [ ] Ve a la pestaña "Logs"
- [ ] Observa que el build comienza
- [ ] Busca:
  - ✓ "Instalando dependencias de Node..."
  - ✓ "Construyendo frontend..."
  - ✓ "Instalando dependencias de Python..."
  - ✓ "Build completado exitosamente"
- [ ] La aplicación debe iniciarse con gunicorn

## Verificación Post-Deploy

### Acceso Frontal

- [ ] Abre: `https://portfolio-api.onrender.com` (o tu URL)
- [ ] Debe cargar la página del portafolio
- [ ] Interfaz debe verse igual que local

### API Tests

- [ ] Abre: `https://portfolio-api.onrender.com/api/`
- [ ] Debe retornar JSON (sin error)
- [ ] Prueba: `https://portfolio-api.onrender.com/api/projects`
- [ ] Prueba: `https://portfolio-api.onrender.com/api/techs`

### Autenticación

- [ ] Intenta registrarte en la interfaz
- [ ] Intenta iniciar sesión
- [ ] Los tokens JWT deben funcionar
- [ ] Abre DevTools → Network para verificar solicitudes a `/auth/`

### Base de Datos

- [ ] Los datos de usuarios se guardan
- [ ] Los datos persisten entre reloads
- [ ] Los proyectos se cargan correctamente

## Si Algo Falla

### ❌ Build Failed

```
Soluciones:
1. Ve a Logs y busca el error específico
2. Revisa que render.yaml esté bien formateado YAML
3. Verifica que build.sh tenga permisos de ejecución
4. Chequea que requirements.txt sea válido
```

### ❌ "Command not found: npm"

```
Posible causa: Render no detectó Node.js
Solución: Verifica que buildCommand incluya "npm"
```

### ❌ "ModuleNotFoundError"

```
Posible causa: Dependencias Python no instaladas
Solución: Revisa api/requirements.txt
```

### ❌ "Application failed to start"

```
Posible causa: Puerto incorrecto o error en app.py
Solución: 
  1. Revisa los logs
  2. Asegúrate que app.py imports todo correctamente
  3. Verifica que app.py define app = create_app()
```

### ❌ "Cannot GET /"

```
Posible causa: Frontend no se compiló
Solución:
  1. Revisa que npm run build ejecutó sin errores
  2. Verifica que dist/ contiene index.html
  3. Chequea que app.py sirve archivos estáticos correctamente
```

### ❌ Frontend carga pero no puedo conectar a API

```
Posible causa: Problema de CORS o puerto
Solución:
  1. Abre DevTools → Console
  2. Verifica errores de CORS
  3. Revisa que apiServices.js usa rutas relativas (/api/*, /auth/*)
  4. Confirma que CORS está habilitado en app.py
```

## Después del Deploy Exitoso

- [ ] Comparte la URL con otros
- [ ] Configura un dominio personalizado (opcional)
- [ ] Monitorea el uso en Dashboard
- [ ] Haz push de cambios futuros para auto-deploy
- [ ] Mantén `main` branch como producción

## URLs Importantes

- 🔗 Dashboard: https://dashboard.render.com
- 🔗 Documentación: https://render.com/docs
- 🔗 Tu App: https://portfolio-api.onrender.com (cambiar nombre)

## Notas Importantes

1. **Plan Free**: Se pone en sleep después de 15 min sin tráfico
   - Solución: Usar plan pago o agregar uptime monitor
   
2. **Límites Free**:
   - 750 horas/mes
   - PostgreSQL limitada a 90 días sin acceso (se borra)
   - Suficiente para desarrollo

3. **Auto-deploy**: Cualquier push a `main` redeploya automáticamente
   - Crea ramas para experimentos
   - Merge a main solo cuando esté listo

4. **Logs**: Los logs antiguos se limpian automáticamente
   - Descarga logs importantes si necesitas archivo

---

**¡Éxito con tu despliegue! 🚀**
