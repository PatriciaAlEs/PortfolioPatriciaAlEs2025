from flask import Flask, send_from_directory, make_response
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import sys
import os

sys.path.append(os.path.dirname(os.path.abspath(__file__)))


from extensions import db  # instancia común
from dotenv import load_dotenv
# Cargar variables de entorno
load_dotenv()


def create_app():
    # Resolver URL de base de datos desde diferentes nombres de entorno
    db_url = os.getenv("DATABASE_URL") or "sqlite:///portfolio.db"
    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql://", 1)

    # Rutas
    # Rutas corregidas
# En tu archivo app.py, cambia las rutas a esto:
    BASE_DIR = os.path.dirname(os.path.abspath(__file__)) # Al estar en la raíz es más simple
    DIST_DIR = os.path.join(BASE_DIR, "..", "dist") # Subes un nivel desde api/ hacia la raíz

# Asegúrate de que Flask sepa dónde están los estáticos de React
    app = Flask(__name__, 
            static_folder=os.path.join(DIST_DIR, "assets"), 
            static_url_path="/assets")
    # Config
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET", "change-me")

    # Extensions - CORS configurado para producción
    cors_origins = [
        "http://localhost:3000",
        "http://127.0.0.1:3000",
        "https://*.onrender.com"
    ]
    CORS(app, resources={r"/*": {"origins": "*"}}, supports_credentials=True)
    db.init_app(app)
    JWTManager(app)

    # Models
    from models import User, Tech, Project, ProjectImage
    with app.app_context():
        db.create_all()

    # Blueprints
    from routes_auth import auth_bp
    from routes_public import pub_bp
    app.register_blueprint(auth_bp, url_prefix="/auth")
    app.register_blueprint(pub_bp, url_prefix="/api")

    # SPA frontend
    @app.route("/", defaults={"path": ""})
    @app.route("/<path:path>")
    def serve(path):
        if path.startswith(("auth/", "api/", "static/")):
            return None

        file_path = os.path.join(DIST_DIR, path)
        if path and os.path.isfile(file_path):
            response = make_response(send_from_directory(DIST_DIR, path))
            # Cache assets with hash for 1 year, no-cache for index.html
            if path.startswith('assets/'):
                response.headers['Cache-Control'] = 'public, max-age=31536000, immutable'
            return response

        index_path = os.path.join(DIST_DIR, "index.html")
        if os.path.isfile(index_path):
            response = make_response(send_from_directory(DIST_DIR, "index.html"))
            # Never cache index.html to ensure users get latest version
            response.headers['Cache-Control'] = 'no-cache, no-store, must-revalidate'
            response.headers['Pragma'] = 'no-cache'
            response.headers['Expires'] = '0'
            return response

        return {"error": "Not found"}, 404

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
