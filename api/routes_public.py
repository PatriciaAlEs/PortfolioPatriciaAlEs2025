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
