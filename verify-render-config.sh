#!/usr/bin/env bash
# Script de verificación previa a despliegue en Render

echo "🔍 Verificando configuración del proyecto..."
echo ""

# Verificar archivos críticos
echo "📁 Verificando archivos críticos..."
files=(
    "package.json"
    "vite.config.js"
    "api/app.py"
    "api/requirements.txt"
    "render.yaml"
    "build.sh"
    ".env.example"
)

for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file existe"
    else
        echo "❌ FALTA: $file"
    fi
done

echo ""
echo "📦 Verificando dependencias Python..."
if [ -f "api/requirements.txt" ]; then
    echo "Contenido de requirements.txt:"
    cat api/requirements.txt
else
    echo "❌ No se encontró api/requirements.txt"
fi

echo ""
echo "📦 Verificando dependencias Node.js..."
if [ -f "package.json" ]; then
    echo "✅ package.json encontrado"
else
    echo "❌ No se encontró package.json"
fi

echo ""
echo "🔧 Verificando render.yaml..."
if grep -q "DATABASE_URL" render.yaml; then
    echo "✅ DATABASE_URL configurado en render.yaml"
else
    echo "❌ DATABASE_URL no encontrado en render.yaml"
fi

if grep -q "npm run build" render.yaml; then
    echo "✅ npm run build está en el comando"
else
    echo "⚠️  npm run build no está en buildCommand"
fi

echo ""
echo "✨ Verificación completada"
echo ""
echo "Próximos pasos:"
echo "1. Asegúrate de tener los cambios confirmados en Git"
echo "2. Accede a https://dashboard.render.com"
echo "3. Conecta tu repositorio de GitHub"
echo "4. Crea el Web Service y la Base de Datos"
