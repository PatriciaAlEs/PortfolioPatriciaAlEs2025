from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy  
from flask_jwt_extended import JWTManager
import os
from dotenv import load_dotenv

# Cargar variables de entorno desde .env
load_dotenv()

from extensions import db  # 👈 usa la instancia común

def create_app():
    app = Flask(__name__, static_folder='static', static_url_path='/static')
    app.config["SQLALCHEMY_DATABASE_URI"] = os.getenv("DB_URL","sqlite:///portfolio.db")
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET","change-me")
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

    CORS(app, supports_credentials=True)
    db.init_app(app)     
    JWTManager(app)

    from models import User, Tech, Project, ProjectImage
    with app.app_context():
        db.create_all()

    from routes_auth import auth_bp
    from routes_public import pub_bp
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(pub_bp,   url_prefix="/api")

    # Servir archivos estáticos y el frontend desde dist
    @app.route('/', defaults={'path': ''})
    @app.route('/<path:path>')
    def serve(path):
        # Si es una ruta de API, dejar que Flask la maneje normalmente
        if path.startswith('auth/') or path.startswith('api/'):
            return None
        
        # Si el archivo existe en dist, servirlo
        dist_path = os.path.join("../dist", path)
        if path != "" and os.path.isfile(dist_path):
            return send_from_directory("../dist", path)
        
        # Para cualquier otra ruta, servir index.html (SPA)
        if os.path.isfile("../dist/index.html"):
            return send_from_directory("../dist", "index.html")
        
        return {"error": "Not found"}, 404

    return app

app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
