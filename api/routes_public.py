from flask import Blueprint, jsonify
from models import Tech, Project
from extensions import db

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

@pub_bp.post("/seed")
def run_seed():
    try:
        # Borrar datos existentes
        db.session.query(Project).delete()
        db.session.query(Tech).delete()
        db.session.commit()
        
        # Crear tecnologías
        techs = [
            Tech(name="HTML5", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", documentation_url="https://developer.mozilla.org/en-US/docs/Web/HTML"),
            Tech(name="CSS3", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", documentation_url="https://developer.mozilla.org/en-US/docs/Web/CSS"),
            Tech(name="JavaScript", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", documentation_url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"),
            Tech(name="React", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", documentation_url="https://react.dev/"),
            Tech(name="Bootstrap", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", documentation_url="https://getbootstrap.com/docs/"),
            Tech(name="Python", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", documentation_url="https://docs.python.org/3/"),
            Tech(name="Flask", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", documentation_url="https://flask.palletsprojects.com/"),
            Tech(name="SQLAlchemy", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", documentation_url="https://docs.sqlalchemy.org/"),
            Tech(name="PostgreSQL", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", documentation_url="https://www.postgresql.org/docs/"),
            Tech(name="JWT", icon_url="https://jwt.io/img/pic_logo.svg", documentation_url="https://jwt.io/introduction"),
            Tech(name="Git", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", documentation_url="https://git-scm.com/doc"),
            Tech(name="GitHub", icon_url="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", documentation_url="https://docs.github.com/"),
        ]
        db.session.add_all(techs)
        db.session.commit()
        
        # Crear proyectos
        habit_tracker = Project(
            title="Habit Tracker",
            short_desc="Una app para trackear hábitos diarios que hice para aprender a gestionar estado en React sin librerías externas.",
            long_desc="Mi primer proyecto 'serio' en React. Quería algo funcional que yo misma pudiera usar para seguir hábitos.",
            cover_url="/static/img/habit_tracker.jpeg",
            video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
            repo_url="https://github.com/PatriciaAlEs/habit-tracker"
        )
        
        hooboo = Project(
            title="Hooboo",
            short_desc="Red social para lectores donde puedes buscar libros (con la API de Google Books).",
            long_desc="Este fue un proyecto grupal bastante ambicioso: una red social de libros completa.",
            cover_url="/static/img/HooBoo.png",
            video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
            repo_url="https://github.com/PatriciaAlEs/hooboo"
        )
        
        namegen = Project(
            title="NameGen",
            short_desc="Generador de nombres random para cuando no se te ocurre cómo llamar un proyecto.",
            long_desc="Un proyecto más sencillo pero súper útil. Lo hice en JavaScript vanilla.",
            cover_url="/static/img/NameGen.png",
            video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
            repo_url="https://github.com/PatriciaAlEs/PatriciaAlEs-generador-nombres"
        )
        
        portfolio = Project(
            title="PORTFOLIO",
            short_desc="Este portfolio que estás viendo ahora mismo 😊.",
            long_desc="El proyecto más personal. Quería un portfolio funcional.",
            cover_url="/static/img/portfolio.png",
            video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
            repo_url="https://github.com/PatriciaAlEs/mi-nuevo-portfolio"
        )
        
        db.session.add_all([habit_tracker, hooboo, namegen, portfolio])
        db.session.commit()
        
        # Asignar tecnologías
        habit_tracker.techs.extend([techs[0], techs[1], techs[2], techs[3], techs[4]])
        hooboo.techs.extend([techs[0], techs[1], techs[2], techs[3], techs[4], techs[5], techs[6], techs[7], techs[8], techs[9]])
        namegen.techs.extend([techs[0], techs[1], techs[2]])
        portfolio.techs.extend([techs[0], techs[1], techs[2], techs[3], techs[5], techs[6], techs[7], techs[8], techs[9], techs[10], techs[11]])
        
        db.session.commit()
        
        return jsonify({"message": "Seed data loaded successfully", "techs": len(techs), "projects": 4}), 200
    except Exception as e:
        db.session.rollback()
        return jsonify({"error": str(e)}), 500
