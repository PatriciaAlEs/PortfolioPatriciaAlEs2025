export const staticTechs = [
    { id: 1, name: "Flutter", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg", documentation_url: "https://docs.flutter.dev/" },
    { id: 2, name: "Dart", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dart/dart-original.svg", documentation_url: "https://dart.dev/guides" },
    { id: 3, name: "Riverpod", icon_url: "", documentation_url: "https://riverpod.dev/" },
    { id: 4, name: "Supabase", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg", documentation_url: "https://supabase.com/docs" },
    { id: 5, name: "SQLite", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", documentation_url: "https://sqlite.org/docs.html" },
    { id: 6, name: "OpenAI/Gemini", icon_url: "", documentation_url: "https://platform.openai.com/docs/" },
    { id: 7, name: "React", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", documentation_url: "https://react.dev/" },
    { id: 8, name: "TypeScript", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg", documentation_url: "https://www.typescriptlang.org/docs/" },
    { id: 9, name: "Tailwind CSS", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg", documentation_url: "https://tailwindcss.com/docs" },
    { id: 10, name: "Python", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", documentation_url: "https://docs.python.org/3/" },
    { id: 11, name: "Flask", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg", documentation_url: "https://flask.palletsprojects.com/" },
    { id: 12, name: "SQLAlchemy", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlalchemy/sqlalchemy-original.svg", documentation_url: "https://docs.sqlalchemy.org/" },
    { id: 13, name: "PostgreSQL", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg", documentation_url: "https://www.postgresql.org/docs/" },
    { id: 14, name: "JavaScript", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", documentation_url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript" },
    { id: 15, name: "HTML5", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", documentation_url: "https://developer.mozilla.org/en-US/docs/Web/HTML" },
    { id: 16, name: "CSS3", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", documentation_url: "https://developer.mozilla.org/en-US/docs/Web/CSS" },
    { id: 17, name: "JWT", icon_url: "", documentation_url: "https://jwt.io/introduction" },
    { id: 18, name: "Git", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", documentation_url: "https://git-scm.com/doc" },
    { id: 19, name: "GitHub", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", documentation_url: "https://docs.github.com/" },
    { id: 20, name: "Next.js", icon_url: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg", documentation_url: "https://nextjs.org/docs" },
    { id: 21, name: "NLP", icon_url: "", documentation_url: "" },
    { id: 22, name: "AI / LLMs", icon_url: "", documentation_url: "" }
];

export const staticProjects = [
    {
        id: 10,
        title: "ReadPp",
        featured: true,
        short_desc: "Cross-platform platform for managing the complete reading experience, combining multi-device synchronisation, local storage, analytics and contextual AI.",
        long_desc: "ReadPp is designed to support the complete reading cycle. It lets users manage their personal library, record reading sessions, explore statistics and interact with LibrerIA, a contextual assistant that retains conversation memory and adapts its responses to the reader. The application is built with Flutter and Riverpod, includes offline persistence through Drift/SQLite, synchronisation with Supabase and an AI layer compatible with OpenAI and Gemini through SSE streaming. It also integrates observability, product analytics and an architecture designed to support conversational assistants, multiple AI providers and new capabilities without modifying the application's core.",
        cover_url: "",
        repo_url: "https://github.com/PatriciaAlEs/App-Libros-Flutter",
        live_url: "https://readpp-web-alpha.vercel.app",
        techKeys: ["Flutter", "Dart", "Riverpod", "Supabase", "SQLite", "OpenAI/Gemini"],
        images: []
    },
    {
        id: 11,
        title: "PDF Translator",
        featured: false,
        short_desc: "Document translation and post-processing tool built with Python, Flask, NLP and AI.",
        long_desc: "A document translation tool where AI supports the main workflow without replacing the product logic. Document processing focuses on preserving structure, readability and control over the result, with comparison of responses from different language models to refine prompts.",
        cover_url: "",
        repo_url: "https://github.com/PatriciaAlEs/PDF-translatorV2",
        live_url: "",
        techKeys: ["Python", "Flask", "NLP", "AI / LLMs"],
        skills: {
            es: ["Procesamiento de documentos", "Integración de IA", "Evaluación de prompts", "Preservación de estructura"],
            en: ["Document processing", "AI integration", "Prompt evaluation", "Structure preservation"]
        },
        images: []
    },
    {
        id: 12,
        title: "TimeToTask",
        featured: false,
        short_desc: "Full Stack task product covering the complete flow from interface to API, validation and persistence.",
        long_desc: "A task product centred on the complete flow: screen, API, models, validation and persistence. The project separates responsibilities from the user action through to the database and implements CRUD with Flask, SQLAlchemy and PostgreSQL.",
        cover_url: "",
        repo_url: "https://github.com/PatriciaAlEs/TimeToTask",
        live_url: "",
        techKeys: ["React", "Python", "Flask", "SQLAlchemy", "PostgreSQL"],
        skills: {
            es: ["CRUD de extremo a extremo", "Diseño de API", "Validación", "Persistencia"],
            en: ["End-to-end CRUD", "API design", "Validation", "Persistence"]
        },
        images: []
    },
    {
        id: 13,
        title: "ProfileStack",
        featured: false,
        short_desc: "Open-source system for maintaining multiple role-specific CV variants from structured profile data.",
        long_desc: "ProfileStack manages multiple role-specific CV variants from one structured professional history. It automatically discovers profile files, provides editing and A4 preview, supports browser PDF export and keeps private local profiles outside Git.",
        cover_url: "",
        repo_url: "https://github.com/PatriciaAlEs/ProfileStack",
        live_url: "",
        techKeys: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        skills: {
            es: ["Datos estructurados", "Arquitectura multiperfil", "Diseño A4 para impresión", "Privacidad local"],
            en: ["Structured data", "Multi-profile architecture", "A4 print layout", "Local privacy"]
        },
        images: []
    }
];
