from flask import Blueprint, jsonify
from models import Tech, Project

pub_bp = Blueprint("public", __name__)

@pub_bp.get("/techs")
def techs():
    data = [t.serialize() for t in Tech.query.order_by(Tech.name).all()]
    return jsonify(data), 200

@pub_bp.get("/projects")
def projects():
    data = [p.serialize() for p in Project.query.order_by(Project.id.desc()).all()]
    return jsonify(data), 200

@pub_bp.get("/debug")
def debug():
    techs_count = Tech.query.count()
    projects_count = Project.query.count()
    return jsonify({
        "techs_count": techs_count,
        "projects_count": projects_count,
        "techs": [t.name for t in Tech.query.all()],
        "projects": [p.title for p in Project.query.all()]
    }), 200
