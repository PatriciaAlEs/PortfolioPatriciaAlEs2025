#!/usr/bin/env bash
# Script para probar la aplicación localmente antes de desplegar en Render

echo "🧪 Iniciando pruebas locales..."
echo ""

# Colores
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 1. Verificar Node.js
echo "📌 Verificando Node.js..."
if command -v node &> /dev/null; then
    NODE_VERSION=$(node --version)
    echo -e "${GREEN}✓${NC} Node.js $NODE_VERSION encontrado"
else
    echo -e "${RED}✗${NC} Node.js no encontrado. Instálalo desde https://nodejs.org"
    exit 1
fi

# 2. Verificar Python
echo ""
echo "📌 Verificando Python..."
if command -v python3 &> /dev/null; then
    PYTHON_VERSION=$(python3 --version)
    echo -e "${GREEN}✓${NC} Python $PYTHON_VERSION encontrado"
else
    echo -e "${RED}✗${NC} Python no encontrado. Instálalo desde https://python.org"
    exit 1
fi

# 3. Instalar dependencias Node.js
echo ""
echo "📌 Instalando dependencias Node.js..."
npm install
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} npm install completado"
else
    echo -e "${RED}✗${NC} npm install falló"
    exit 1
fi

# 4. Crear venv Python (si no existe)
echo ""
echo "📌 Configurando entorno Python..."
if [ ! -d "venv" ]; then
    python3 -m venv venv
    echo -e "${GREEN}✓${NC} Entorno virtual creado"
fi

# Activar venv
source venv/bin/activate
echo -e "${GREEN}✓${NC} Entorno virtual activado"

# 5. Instalar dependencias Python
echo ""
echo "📌 Instalando dependencias Python..."
pip install --upgrade pip > /dev/null
pip install -r api/requirements.txt
if [ $? -eq 0 ]; then
    echo -e "${GREEN}✓${NC} pip install completado"
else
    echo -e "${RED}✗${NC} pip install falló"
    exit 1
fi

# 6. Crear .env si no existe
echo ""
echo "📌 Verificando .env..."
if [ ! -f ".env" ]; then
    cp .env.example .env
    echo -e "${YELLOW}⚠${NC} .env creado desde .env.example"
    echo "   Edítalo si necesitas cambiar valores"
else
    echo -e "${GREEN}✓${NC} .env encontrado"
fi

# 7. Limpiar dist anterior
echo ""
echo "📌 Preparando build..."
rm -rf dist
echo -e "${GREEN}✓${NC} Carpeta dist limpiada"

echo ""
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo -e "${GREEN}✓ Configuración completada${NC}"
echo -e "${GREEN}════════════════════════════════════════${NC}"
echo ""
echo "🚀 Para iniciar en desarrollo:"
echo ""
echo "   Terminal 1 (Frontend):"
echo "   npm run dev"
echo ""
echo "   Terminal 2 (Backend):"
echo "   source venv/bin/activate"
echo "   cd api"
echo "   python app.py"
echo ""
echo "   La app estará disponible en:"
echo "   http://localhost:3000"
echo ""
echo "🔨 Para simular producción (como en Render):"
echo ""
echo "   npm run build"
echo "   source venv/bin/activate"
echo "   cd api"
echo "   gunicorn --bind 0.0.0.0:8000 app:app"
echo ""
echo "   Luego accede a:"
echo "   http://localhost:8000"
echo ""
echo "✅ Listo para desplegar en Render"
