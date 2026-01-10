export const staticTechs = [
    { id: 1, name: "HTML5", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", documentation_url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { id: 2, name: "CSS3", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", documentation_url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { id: 3, name: "JavaScript", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", documentation_url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { id: 4, name: "React", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", documentation_url: "https://react.dev/" },
    { id: 5, name: "Bootstrap", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg", documentation_url: "https://getbootstrap.com/docs/" },
    { id: 6, name: "Python", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", documentation_url: "https://docs.python.org/3/" },
    { id: 7, name: "Flask", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", documentation_url: "https://flask.palletsprojects.com/" },
    { id: 8, name: "SQLAlchemy", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", documentation_url: "https://docs.sqlalchemy.org/" },
    { id: 9, name: "PostgreSQL", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", documentation_url: "https://www.postgresql.org/docs/" },
    { id: 10, name: "JWT", icon_url: "https://jwt.io/img/pic_logo.svg", documentation_url: "https://jwt.io/introduction" },
    { id: 11, name: "Git", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", documentation_url: "https://git-scm.com/doc" },
    { id: 12, name: "GitHub", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", documentation_url: "https://docs.github.com/" }
];

export const staticProjects = [
    {
        id: 4,
        title: "PORTFOLIO",
        short_desc: "Portfolio personal construido con React y Vite como plantilla base para mostrar mis proyectos, habilidades y trayectoria profesional.",
        long_desc: "Portfolio personal construido con React y Vite como plantilla base para mostrar mis proyectos, habilidades y trayectoria profesional. El proyecto está estructurado con una arquitectura escalable, estilos con TailwindCSS y preparado para añadir páginas, componentes y secciones personalizadas. Sirve como base sólida para desarrollar una web de presentación profesional con navegación, estilos modernos y fácil mantenimiento.",
        cover_url: "/img/portfolio.png",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/mi-nuevo-portfolio",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT", "Git", "GitHub"],
        images: []
    },
    {
        id: 3,
        title: "NameGen",
        short_desc: "Aplicación web full-stack con frontend en React y backend en Python/Flask que genera nombres aleatorios para distintos géneros de juegos (RPG, FPS, etc.). Incluye lógica de generación combinando listas de prefijos y sufijos por estilo, y una API REST que alimenta la interfaz de usuario con resultados personalizados.",
        long_desc: "Aplicación web full-stack con frontend en React y backend en Python/Flask que genera nombres aleatorios para distintos géneros de juegos (RPG, FPS, etc.). Incluye lógica de generación combinando listas de prefijos y sufijos por estilo, y una API REST que alimenta la interfaz de usuario con resultados personalizados.",
        cover_url: "/img/NameGen.png",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/PatriciaAlEs-generador-nombres",
        techKeys: ["HTML5", "CSS3", "JavaScript"],
        images: []
    },
    {
        id: 2,
        title: "Hooboo",
        short_desc: "Aplicación web full-stack desarrollada en equipo como proyecto final. HooBoo funciona como una red social para lectores con búsquedas vía Google Books y biblioteca personal de favoritos.",
        long_desc: "Aplicación web full-stack desarrollada en equipo como proyecto final. HooBoo funciona como una red social para lectores donde los usuarios pueden buscar libros usando la API de Google Books, crear una biblioteca personal de favoritos, escribir comentarios y valorar libros. Incluye autenticación con JWT, relaciones de base de datos (usuarios, libros, interacciones) y una arquitectura frontend-backend bien definida. El proyecto puso especial foco en la comunicación entre capas y el trabajo colaborativo.",
        cover_url: "/img/HooBoo.png",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/hooboo",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
        images: []
    },
    {
        id: 1,
        title: "Habit Tracker",
        short_desc: "Una app para trackear hábitos diarios que hice para aprender a gestionar estado en React sin librerías externas. El reto fue mantener todo sincronizado con LocalStorage y que no se perdiera nada al recargar. Afiancé React hooks, manejo de arrays y objetos, y persistencia de datos en el navegador.",
        long_desc: "Mi primer proyecto 'serio' en React. Quería algo funcional que yo misma pudiera usar para seguir hábitos (porque post-its no me funcionaban 😅). El mayor desafío fue entender cómo actualizar el estado correctamente sin mutar arrays directamente y hacer que todo se guardara automáticamente en LocalStorage. Aprendí muchísimo sobre useEffect, useState y cómo React re-renderiza componentes.",
        cover_url: "/img/habit_tracker.jpeg",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/habit-tracker",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
        images: []
    }
];
