#!/usr/bin/env bash
# exit on error
set -o errexit

# Instalar dependencias de Node (para el frontend)
npm install
npm run build

# Instalar dependencias de Python
pip install --upgrade pip
pip install -r api/requirements.txt
pip install gunicorn psycopg2-binary


