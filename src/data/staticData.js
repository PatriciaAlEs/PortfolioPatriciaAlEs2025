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
        id: 3,
        title: "NameGen",
        short_desc: "Full-stack web application with React frontend and Python/Flask backend that generates random names for different game genres (RPG, FPS, etc.). Includes generation logic combining prefix and suffix lists by style, and a REST API that feeds the user interface with personalized results.",
        long_desc: "Full-stack web application with React frontend and Python/Flask backend that generates random names for different game genres (RPG, FPS, etc.). Includes generation logic combining prefix and suffix lists by style, and a REST API that feeds the user interface with personalized results. This project was a great learning experience in integrating frontend and backend, understanding API communication, and working with randomization algorithms.",
        cover_url: "/img/NameGen.png",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/PatriciaAlEs-generador-nombres",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Tailwind", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
        images: []
    },
    {
        id: 2,
        title: "Hooboo",
        short_desc: "Full-stack web application developed as a team final project. HooBoo works as a social network for readers with searches via Google Books and personal favorites library.",
        long_desc: "Full-stack web application developed as a team final project. HooBoo works as a social network for readers where users can search for books using the Google Books API, create a personal favorites library, write comments and rate books. Includes JWT authentication, database relationships (users, books, interactions) and a well-defined frontend-backend architecture. The project put special focus on communication between layers and collaborative work.",
        cover_url: "/img/HooBoo.png",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/hooboo",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Python", "Flask", "SQLAlchemy", "PostgreSQL", "JWT"],
        images: []
    },
    {
        id: 1,
        title: "Habit Tracker",
        short_desc: "An app to track daily habits that I made to learn how to manage state in React without external libraries. The challenge was keeping everything synchronized with LocalStorage and not losing anything on reload. I reinforced React hooks, array and object handling, and data persistence in the browser.",
        long_desc: "My first 'serious' project in React. I wanted something functional that I could use myself to track habits (because post-its didn't work for me). The biggest challenge was understanding how to update state correctly without directly mutating arrays and making everything save automatically to LocalStorage. I learned a lot about useEffect, useState and how React re-renders components.",
        cover_url: "/img/habit_tracker.jpeg",
        video_url: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        repo_url: "https://github.com/PatriciaAlEs/habit-tracker",
        techKeys: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap"],
        images: []
    }
];
