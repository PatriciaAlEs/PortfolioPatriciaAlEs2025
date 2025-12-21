# api/models.py
from datetime import datetime
from flask_bcrypt import generate_password_hash, check_password_hash
from extensions import db  # 👈 CAMBIO: antes era from app import db

# Tabla de asociación many-to-many entre Project y Tech
project_tech = db.Table('project_tech',
    db.Column('project_id', db.Integer, db.ForeignKey('project.id'), primary_key=True),
    db.Column('tech_id', db.Integer, db.ForeignKey('tech.id'), primary_key=True)
)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password_hash = db.Column(db.String(255), nullable=False)
    kind = db.Column(db.String(20), default="particular")
    created_at = db.Column(db.DateTime, default=datetime.utcnow)

    def set_password(self,p): self.password_hash = generate_password_hash(p).decode()
    def check_password(self,p): return check_password_hash(self.password_hash, p)

    def serialize(self):
        return {
            "id":self.id,
            "name":self.name,
            "email":self.email,
            "kind":self.kind
            }

class Tech(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), unique=True, nullable=False)
    icon_url = db.Column(db.String(255))
    documentation_url = db.Column(db.String(255))
    
    def serialize(self): 
        return {
            "id":self.id,
            "name":self.name,
            "icon_url":self.icon_url,
            "documentation_url":self.documentation_url
            }

class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(120), nullable=False)
    short_desc = db.Column(db.String(240))
    long_desc = db.Column(db.Text)
    cover_url = db.Column(db.String(255))
    video_url = db.Column(db.String(255))
    repo_url = db.Column(db.String(255))
    images = db.relationship("ProjectImage", backref="project", cascade="all,delete")
    techs = db.relationship("Tech", secondary=project_tech, backref="projects")
    
    def serialize(self):
        return {
            "id": self.id, "title": self.title,
            "short_desc": self.short_desc, "long_desc": self.long_desc,
            "cover_url": self.cover_url, "video_url": self.video_url,
            "repo_url": self.repo_url,
            "images": [i.url for i in self.images],
            "techs": [t.serialize() for t in self.techs]
        }

class ProjectImage(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    url = db.Column(db.String(255))
    project_id = db.Column(db.Integer, db.ForeignKey("project.id"))
