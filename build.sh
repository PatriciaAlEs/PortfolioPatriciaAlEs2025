#!/usr/bin/env bash
# exit on error
set -o errexit

# Instalar dependencias de Python
pip install --upgrade pip
pip install -r api/requirements.txt
pip install gunicorn psycopg2-binary

# Crear las tablas en la base de datos
cd api
python -c "from app import create_app; app = create_app(); app.app_context().push(); from extensions import db; db.create_all()"
