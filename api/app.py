from flask import Flask, send_from_directory
from flask_cors import CORS
from flask_jwt_extended import JWTManager
import os
from dotenv import load_dotenv

from extensions import db  # instancia común

# Cargar variables de entorno
load_dotenv()


def create_app():
    # Resolver URL de base de datos desde diferentes nombres de entorno
    db_url = os.getenv("DATABASE_URL") or "sqlite:///portfolio.db"
    if db_url.startswith("postgres://"):
        db_url = db_url.replace("postgres://", "postgresql://", 1)

    # Rutas
    BASE_DIR = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    DIST_DIR = os.path.join(BASE_DIR, "dist")

    app = Flask(__name__, static_folder="static", static_url_path="/static")

    # Config
    app.config["SQLALCHEMY_DATABASE_URI"] = db_url
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
    app.config["JWT_SECRET_KEY"] = os.getenv("JWT_SECRET", "change-me")

    # Extensions
    CORS(app, supports_credentials=True)
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
            return send_from_directory(DIST_DIR, path)

        index_path = os.path.join(DIST_DIR, "index.html")
        if os.path.isfile(index_path):
            return send_from_directory(DIST_DIR, "index.html")

        return {"error": "Not found"}, 404

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
