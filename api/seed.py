from extensions import db
from app import create_app
from models import Tech, Project, ProjectImage

app = create_app()

with app.app_context():
    db.drop_all()
    db.create_all()

    # --- Tecnologías ---
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

    # --- Proyectos ---
    habit_tracker = Project(
        title="Habit Tracker",
        short_desc="Aplicación web intuitiva para el seguimiento y gestión de hábitos diarios. Permite crear, monitorear y mantener hábitos saludables con visualización de progreso y estadísticas personalizadas.",
        long_desc="Aplicación React para registrar hábitos diarios, con persistencia en LocalStorage.",
        cover_url="http://127.0.0.1:5000/static/img/habit_tracker.jpeg",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url="https://github.com/PatriciaAlEs/habit-tracker"
    )

    hooboo = Project(
        title="Hooboo",
        short_desc="Red social interactiva para amantes de la lectura. Conecta lectores y escritores, permite compartir reseñas, descubrir nuevos libros y participar en una comunidad literaria vibrante con sistema de calificaciones y comentarios.",
        long_desc="Proyecto colaborativo con autenticación, publicaciones y comentarios.",
        cover_url="http://127.0.0.1:5000/static/img/HooBoo.png",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url="https://github.com/PatriciaAlEs/hooboo"
    )

    namegen = Project(
        title="NameGen",
        short_desc="Herramienta creativa para generar nombres únicos y originales. Ideal para proyectos, personajes, empresas o marcas. Ofrece múltiples categorías, filtros personalizables y opciones de búsqueda avanzada para encontrar el nombre perfecto.",
        long_desc="Aplicación para generar nombres aleatorios con diferentes opciones y filtros.",
        cover_url="http://127.0.0.1:5000/static/img/NameGen.png",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url="https://github.com/PatriciaAlEs/PatriciaAlEs-generador-nombres"
    )

    portfolio = Project(
        title="Portfolio",
        short_desc="Portfolio web profesional y moderno que presenta mis proyectos más destacados, stack tecnológico y experiencia como desarrolladora. Diseño responsive con React en el frontend y Flask en el backend, incluyendo sistema de autenticación y gestión de contenido.",
        long_desc="Sitio web personal mostrando mis proyectos, habilidades y experiencia profesional.",
        cover_url="http://127.0.0.1:5000/static/img/portfolio.png",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url="https://github.com/PatriciaAlEs/mi-nuevo-portfolio"
    )

    db.session.add_all([habit_tracker, hooboo, namegen, portfolio])
    db.session.commit()

    print("✅ Base de datos poblada con tecnologías y proyectos")
