# 🏗️ Arquitectura del Proyecto en Render

## Diagrama de Flujo

```
┌─────────────────────────────────────────────────────────────┐
│                     NAVEGADOR DEL USUARIO                    │
│                   (cualquier dispositivo)                     │
└────────────────────────┬──────────────────────────────────────┘
                         │
                         │ HTTPS
                         │
                    ┌────▼────┐
                    │  RENDER  │
                    │ Web Srv  │
                    └─┬──────┬─┘
                      │      │
        ┌─────────────┴──┐   │
        │                │   │
   ┌────▼────┐       ┌───▼──────┐
   │ Frontend │       │  Backend │
   │ (React)  │       │  (Flask) │
   │  dist/   │       │ Port 0.0 │
   └──────────┘       │   .0:8  │
                      └───┬──────┘
                          │
                          │ SQL
                          │
                      ┌───▼──────┐
                      │PostgreSQL│
                      │   BD     │
                      └──────────┘
```

## Flujo de Datos

### 1️⃣ Usuario accede a la app
```
Usuario → https://portfolio-api.onrender.com
         ↓
    Render Web Service
         ↓
    Backend (Flask) busca index.html
         ↓
    Retorna: dist/index.html
         ↓
    Navegador carga React
```

### 2️⃣ Usuario interactúa con la app
```
React (Frontend) → Hace request a /api/projects
                ↓
          Backend (Flask)
          /api/projects route
                ↓
          Query a PostgreSQL
                ↓
          Retorna JSON
                ↓
          React renderiza datos
```

### 3️⃣ Usuario se registra/autentica
```
React (Frontend) → POST /auth/signup
                ↓
          Backend (Flask)
          /auth/signup route
                ↓
          Valida credenciales
          Hashea contraseña (bcrypt)
                ↓
          Guarda en PostgreSQL
                ↓
          Retorna JWT token
                ↓
          React guarda token
          Usa token en requests futuros
```

## Componentes del Proyecto

```
📦 mi-nuevo-portfolio/
│
├── 📱 FRONTEND (React)
│   ├── src/
│   │   ├── components/        # Componentes React
│   │   ├── pages/             # Páginas
│   │   ├── services/          # API calls
│   │   ├── hooks/             # Custom hooks
│   │   ├── data/              # Datos estáticos
│   │   └── index.jsx          # Entry point
│   │
│   ├── package.json           # Dependencias Node
│   ├── vite.config.js         # Configuración Vite
│   └── build output:          # npm run build → dist/
│
├── 🔗 BACKEND (Flask)
│   ├── api/
│   │   ├── app.py             # Aplicación principal
│   │   ├── routes_auth.py     # Rutas de autenticación
│   │   ├── routes_public.py   # Rutas públicas
│   │   ├── models.py          # Modelos SQLAlchemy
│   │   ├── extensions.py      # Extensiones (DB, etc)
│   │   └── requirements.txt   # Dependencias Python
│   │
│   └── serve (dist/)          # Archivos estáticos del frontend
│
├── 🗄️ DATABASE (PostgreSQL)
│   ├── Users
│   ├── Projects
│   ├── Technologies
│   └── ProjectImages
│
└── 📋 RENDER CONFIG
    ├── render.yaml            # Configuración (BUILD + START)
    ├── Procfile               # Alternative config
    ├── build.sh               # Script de build
    └── .env.example           # Variables de entorno
```

## Ciclo de Vida: De Desarrollo a Producción

```
┌──────────────────────────────────────────────────────────────┐
│ 1. DESARROLLO LOCAL                                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  npm run dev                 →  Frontend en :3000           │
│  cd api && python app.py     →  Backend en :5000            │
│                                                              │
│  Proxy en vite.config.js:                                   │
│  /api → http://localhost:5000  (desarrollo)                │
│  /auth → http://localhost:5000 (desarrollo)                │
│                                                              │
│  Hot reload automático ✓                                    │
│                                                              │
└──────────────────────────────────────────────────────────────┘
                            │
                            │ git push main
                            ▼
┌──────────────────────────────────────────────────────────────┐
│ 2. RENDER: BUILD                                             │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  npm install                 →  Descarga dependencias Node │
│  npm run build               →  Compila React → dist/       │
│  pip install requirements    →  Instala deps Python        │
│                                                              │
│  Resultado: carpeta dist/ listo                            │
│                                                              │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│ 3. RENDER: START                                             │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  gunicorn --chdir api app:app                              │
│  ├─ Worker 1                                               │
│  ├─ Worker 2                                               │
│  ├─ Worker 3                                               │
│  └─ Worker 4                                               │
│                                                              │
│  Escuchando en 0.0.0.0:8000                               │
│                                                              │
│  Sirve:                                                      │
│  ├─ dist/ como static files  (frontend)                   │
│  ├─ /api/*                   (backend)                     │
│  └─ /auth/*                  (autenticación)               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
                            │
                            ▼
┌──────────────────────────────────────────────────────────────┐
│ 4. PRODUCCIÓN: LIVE                                          │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  URL: https://portfolio-api.onrender.com                   │
│                                                              │
│  Usuario accede → Renderiza frontend desde dist/           │
│  Frontend hace requests → Backend procesa                   │
│  Backend accede → PostgreSQL en Render                      │
│                                                              │
│  Todos los archivos servidos desde HTTPS                   │
│  Certificado SSL automático (Let's Encrypt)               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Flujo de Requests Típico

```
CASO 1: Usuario accede a la app por primera vez
───────────────────────────────────────────────

Usuario:  GET /
          ↓
Render:   Recibe request
          ↓
Flask:    @app.route("/", defaults={"path": ""})
          @app.route("/<path:path>")
          def serve(path):
              return send_from_directory(DIST_DIR, "index.html")
          ↓
HTTP:     200 OK + index.html + React JS
          ↓
Browser:  Renderiza React
          Carga componentes
          ↓
React:    Ejecuta hooks
          Hace request a /api/projects
          
          
CASO 2: React solicita datos de la API
────────────────────────────────────────

React:    GET /api/projects
          ↓
Render:   Recibe request
          ↓
Flask:    @pub_bp.route("/projects")
          def get_projects():
              projects = Project.query.all()
              return jsonify([p.to_dict() for p in projects])
          ↓
DB:       SELECT * FROM projects
          ↓
Flask:    Retorna JSON
          ↓
HTTP:     200 OK + JSON data
          ↓
React:    Recibe datos
          Actualiza state
          Re-renderiza componentes


CASO 3: Usuario se registra
──────────────────────────

React:    POST /auth/signup
          {email, password, name}
          ↓
Render:   Recibe request
          ↓
Flask:    @auth_bp.route("/signup", methods=["POST"])
          def signup():
              user = User(...)
              user.password_hash = bcrypt.hashpw(password)
              db.session.add(user)
              db.session.commit()
              token = create_access_token(identity=user.id)
              return jsonify({token})
          ↓
DB:       INSERT INTO users VALUES (...)
          ↓
Flask:    Retorna JWT token
          ↓
HTTP:     201 Created + {token}
          ↓
React:    Guarda token en localStorage
          Establece header Authorization
          Redirige a dashboard
```

## Ventajas de esta Arquitectura

✅ **Simpledad**: Un solo servicio, no múltiples
✅ **Economía**: Usa plan free de Render
✅ **Performance**: Gunicorn con 4 workers
✅ **Escalabilidad**: Fácil agregar más workers
✅ **Mantenimiento**: Una sola URL, un solo deploy
✅ **Seguridad**: HTTPS automático, CORS configurado
✅ **Desarrollo**: Local dev experience igual a producción

## Desventajas (y cuándo migrar)

❌ **Escalado horizontal**: Difícil si crece mucho
   → Solución: Usar contenedores separados con Docker

❌ **Build time**: ~2-3 minutos por deploy
   → Solución: Usar render + servicios separados

❌ **Plan free se duerme**: Después de 15 min sin tráfico
   → Solución: Usar plan pago o agregar uptime monitor

## Monitoreo Recomendado

```
Dashboard Render:
├─ Logs               → Ver errores en tiempo real
├─ Metrics            → CPU, Memoria, Requests/s
├─ Deployments        → Historial de cambios
└─ Environment Vars   → DATABASE_URL, JWT_SECRET

Recomendaciones:
✓ Revisar logs diariamente primeras 2 semanas
✓ Monitorear performance si ↑ tráfico
✓ Backups de BD cada mes
✓ Alertas si build falla
```

---

**Arquitectura optimizada para máximo impacto con mínima complejidad** 🚀
