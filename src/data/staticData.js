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
        id: 1,
        title: "Habit Tracker",
        short_desc: "Una app para trackear hábitos diarios que hice para aprender a gestionar estado en React sin librerías externas. El reto fue mantener todo sincronizado con LocalStorage y que no se perdiera nada al recargar. Afiancé React hooks, manejo de arrays y objetos, y persistencia de datos en el navegador.",
        long_desc: "Mi primer proyecto 'serio' en React. Quería algo funcional que yo misma pudiera usar para seguir hábitos (porque post-its no me funcionaban 😅). El mayor desafío fue entender cómo actualizar el estado correctamente sin mutar arrays directamente y hacer que todo se guardara automáticamente en LocalStorage. Aprendí muchísimo sobre useEffect, useState y cómo React re-renderiza componentes.",
        cover_url: "/img/habit_tracker.jpeg",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/habit-tracker",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
        images: []
    },
    {
        id: 2,
        title: "Hooboo",
        short_desc: "Red social para lectores donde puedes buscar libros (con la API de Google Books), guardar favoritos, comentar y calificar. Proyecto en equipo que me hizo sudar con JWT, relaciones de base de datos y la coordinación entre frontend y backend.",
        long_desc: "Este fue un proyecto grupal bastante ambicioso: una red social de libros completa. Integramos la API de Google Books, montamos un sistema de autenticación con JWT (que al principio nos dio más dolores de cabeza de los esperados), y diseñamos la base de datos con relaciones entre usuarios, libros, comentarios y calificaciones. Lo más complicado fue sincronizar el trabajo del equipo y debuggear errores de CORS y tokens expirados. Pero salió adelante y aprendí un montón sobre arquitectura backend, APIs de terceros y cómo NO mergear código sin revisar primero 😂.",
        cover_url: "/img/HooBoo.png",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/hooboo",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
        images: []
    },
    {
        id: 3,
        title: "NameGen",
        short_desc: "Generador de nombres random para cuando no se te ocurre cómo llamar un proyecto, personaje o variable. Vanilla JavaScript puro, sin frameworks.",
        long_desc: "Un proyecto más sencillo pero súper útil. Lo hice en JavaScript vanilla porque quería practicar sin depender de React. La idea era generar nombres aleatorios aplicando filtros (longitud, letras iniciales, etc.). Lo más interesante fue optimizar la lógica para que fuera rápida y crear una UI limpia solo con CSS. Me ayudó a recordar que no siempre necesitas un framework para todo, y que dominar JavaScript básico es clave.",
        cover_url: "/img/NameGen.png",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/PatriciaAlEs-generador-nombres",
        techKeys: ["HTML5", "CSS3", "JavaScript"],
        images: []
    },
    {
        id: 4,
        title: "PORTFOLIO",
        short_desc: "Este portfolio que estás viendo ahora mismo 😊. Full-stack con React y Flask, sistema de autenticación para descargar mi CV, gestión de proyectos desde la base de datos y diseño responsive.",
        long_desc: "El proyecto más personal. Quería un portfolio que no fuera solo 'bonito', sino funcional y que mostrara lo que sé hacer de verdad. Implementé autenticación (para que descarguen el CV solo si están registrados), un backend con Flask que sirve los proyectos desde una base de datos PostgreSQL, y un diseño con TailwindCSS que me encanta. Los mayores desafíos fueron optimizar el rendimiento, hacer el diseño responsive sin que se rompiera nada, y desplegar todo en producción sin que explotara.",
        cover_url: "/img/portfolio.png",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/mi-nuevo-portfolio",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT", "Git", "GitHub"],
        images: []
    }
];
