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
        short_desc="Una app para trackear hábitos diarios que hice para aprender a gestionar estado en React sin librerías externas. El reto fue mantener todo sincronizado con LocalStorage y que no se perdiera nada al recargar. Afiancé React hooks, manejo de arrays y objetos, y persistencia de datos en el navegador.",
        long_desc="Mi primer proyecto 'serio' en React. Quería algo funcional que yo misma pudiera usar para seguir hábitos (porque post-its no me funcionaban 😅). El mayor desafío fue entender cómo actualizar el estado correctamente sin mutar arrays directamente y hacer que todo se guardara automáticamente en LocalStorage. Aprendí muchísimo sobre useEffect, useState y cómo React re-renderiza componentes.",
        cover_url="http://127.0.0.1:5000/static/img/habit_tracker.jpeg",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url="https://github.com/PatriciaAlEs/habit-tracker"
    )

    hooboo = Project(
        title="Hooboo",
        short_desc="Red social para lectores donde puedes buscar libros (con la API de Google Books), guardar favoritos, comentar y calificar. Proyecto en equipo que me hizo sudar con JWT, relaciones de base de datos y la coordinación entre frontend y backend. Fortaleció mi Flask, SQLAlchemy, autenticación y trabajo en equipo.",
        long_desc="Este fue un proyecto grupal bastante ambicioso: una red social de libros completa. Integramos la API de Google Books, montamos un sistema de autenticación con JWT (que al principio nos dio más dolores de cabeza de los esperados), y diseñamos la base de datos con relaciones entre usuarios, libros, comentarios y calificaciones. Lo más complicado fue sincronizar el trabajo del equipo y debuggear errores de CORS y tokens expirados. Pero salió adelante y aprendí un montón sobre arquitectura backend, APIs de terceros y cómo NO mergear código sin revisar primero 😂.",
        cover_url="http://127.0.0.1:5000/static/img/HooBoo.png",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url="https://github.com/PatriciaAlEs/hooboo"
    )

    namegen = Project(
        title="NameGen",
        short_desc="Generador de nombres random para cuando no se te ocurre cómo llamar un proyecto, personaje o variable. Vanilla JavaScript puro, sin frameworks. El reto fue hacer que los filtros funcionaran bien y que la interfaz fuera simple pero bonita. Afiancé manipulación del DOM, eventos y lógica de arrays con JS puro.",
        long_desc="Un proyecto más sencillo pero súper útil. Lo hice en JavaScript vanilla porque quería practicar sin depender de React. La idea era generar nombres aleatorios aplicando filtros (longitud, letras iniciales, etc.). Lo más interesante fue optimizar la lógica para que fuera rápida y crear una UI limpia solo con CSS. Me ayudó a recordar que no siempre necesitas un framework para todo, y que dominar JavaScript básico es clave.",
        cover_url="http://127.0.0.1:5000/static/img/NameGen.png",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url="https://github.com/PatriciaAlEs/PatriciaAlEs-generador-nombres"
    )

    portfolio = Project(
        title="PORTFOLIO",
        short_desc="Este portfolio que estás viendo ahora mismo 😊. Full-stack con React y Flask, sistema de autenticación para descargar mi CV, gestión de proyectos desde la base de datos y diseño responsive. El gran reto fue hacer que todo se viera bien, funcionara rápido y que el código quedara limpio. Consolidé todo mi stack: React, Flask, SQLAlchemy, JWT, TailwindCSS y deployment.",
        long_desc="El proyecto más personal. Quería un portfolio que no fuera solo 'bonito', sino funcional y que mostrara lo que sé hacer de verdad. Implementé autenticación (para que descarguen el CV solo si están registrados), un backend con Flask que sirve los proyectos desde una base de datos PostgreSQL, y un diseño con TailwindCSS que me encanta. Los mayores desafíos fueron optimizar el rendimiento, hacer el diseño responsive sin que se rompiera nada, y desplegar todo en producción sin que explotara. Aprendí deployment real, manejo de variables de entorno, CORS en producción y mucho sobre UX/UI.",
        cover_url="http://127.0.0.1:5000/static/img/portfolio.png",
        video_url="https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url="https://github.com/PatriciaAlEs/mi-nuevo-portfolio"
    )

    db.session.add_all([habit_tracker, hooboo, namegen, portfolio])
    db.session.commit()

    # --- Asignar tecnologías a proyectos ---
    # Habit Tracker
    habit_tracker.techs.extend([
        techs[0],  # HTML5
        techs[1],  # CSS3
        techs[2],  # JavaScript
        techs[3],  # React
        techs[4],  # Bootstrap
    ])

    # Hooboo
    hooboo.techs.extend([
        techs[0],  # HTML5
        techs[1],  # CSS3
        techs[2],  # JavaScript
        techs[3],  # React
        techs[4],  # Bootstrap
        techs[5],  # Python
        techs[6],  # Flask
        techs[7],  # SQLAlchemy
        techs[8],  # PostgreSQL
        techs[9],  # JWT
    ])

    # NameGen
    namegen.techs.extend([
        techs[0],  # HTML5
        techs[1],  # CSS3
        techs[2],  # JavaScript
    ])

    # Portfolio
    portfolio.techs.extend([
        techs[0],  # HTML5
        techs[1],  # CSS3
        techs[2],  # JavaScript
        techs[3],  # React
        techs[5],  # Python
        techs[6],  # Flask
        techs[7],  # SQLAlchemy
        techs[8],  # PostgreSQL
        techs[9],  # JWT
        techs[10], # Git
        techs[11], # GitHub
    ])

    db.session.commit()

    print("✅ Base de datos poblada con tecnologías y proyectos")
