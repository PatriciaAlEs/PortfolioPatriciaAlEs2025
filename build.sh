#!/usr/bin/env bash
# exit on error
set -o errexit

# Instalar dependencias de Node (para el frontend)
echo "Instalando dependencias de Node..."
npm install --production=false

echo "Construyendo frontend..."
npm run build

# Instalar dependencias de Python
echo "Instalando dependencias de Python..."
pip install --upgrade pip
pip install -r api/requirements.txt
pip install gunicorn

echo "Build completado exitosamente"


