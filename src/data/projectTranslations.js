export const projectTranslations = {
    es: {
        10: {
            short_desc: "Plataforma multiplataforma para gestionar la experiencia de lectura de principio a fin. Combina sincronización multidispositivo, almacenamiento local, analítica e IA contextual para acompañar al usuario durante todo su recorrido lector.",
            long_desc: "ReadPp es una plataforma diseñada para acompañar todo el ciclo de lectura. Permite gestionar la biblioteca personal, registrar sesiones, visualizar estadísticas e interactuar con LibrerIA, un asistente contextual que mantiene memoria de la conversación y adapta sus respuestas al lector. La aplicación está desarrollada con Flutter y Riverpod, incorpora persistencia offline mediante Drift/SQLite, sincronización con Supabase y una capa de IA compatible con OpenAI y Gemini mediante streaming SSE. Además integra observabilidad, analítica de producto y una arquitectura preparada para soportar asistentes conversacionales, múltiples proveedores de IA y nuevas funcionalidades sin modificar el núcleo de la aplicación."
        },
        11: {
            short_desc: "Herramienta de traducción y postprocesado de documentos desarrollada con Python, Flask, NLP e IA.",
            long_desc: "Herramienta de traducción de documentos donde la IA acompaña el flujo principal sin desplazar la lógica del producto. El procesamiento se centra en mantener la estructura, legibilidad y control del resultado, comparando respuestas de distintos modelos de lenguaje para ajustar los prompts."
        },
        12: {
            short_desc: "Producto Full Stack de tareas que cubre el flujo completo desde la interfaz hasta la API, validación y persistencia.",
            long_desc: "Producto de tareas centrado en el flujo completo: pantalla, API, modelos, validación y persistencia. El proyecto mantiene separadas las responsabilidades desde la acción del usuario hasta la base de datos e implementa un CRUD con Flask, SQLAlchemy y PostgreSQL."
        },
        13: {
            short_desc: "Sistema open source para mantener varias versiones de CV orientadas a distintos roles desde datos profesionales estructurados.",
            long_desc: "ProfileStack gestiona distintas versiones de CV orientadas a roles desde un único historial profesional estructurado. Descubre perfiles automáticamente, permite editarlos y previsualizarlos en A4, exportarlos a PDF desde el navegador y mantener perfiles privados locales fuera de Git."
        }
    },
    en: {
        10: {
            short_desc: "Cross-platform platform for managing the complete reading experience, combining multi-device synchronisation, local storage, analytics and contextual AI throughout the reader's journey.",
            long_desc: "ReadPp is designed to support the complete reading cycle. It lets users manage their personal library, record reading sessions, explore statistics and interact with LibrerIA, a contextual assistant that retains conversation memory and adapts its responses to the reader. The application is built with Flutter and Riverpod, includes offline persistence through Drift/SQLite, synchronisation with Supabase and an AI layer compatible with OpenAI and Gemini through SSE streaming. It also integrates observability, product analytics and an architecture designed to support conversational assistants, multiple AI providers and new capabilities without modifying the application's core."
        },
        11: {
            short_desc: "Document translation and post-processing tool built with Python, Flask, NLP and AI.",
            long_desc: "A document translation tool where AI supports the main workflow without replacing the product logic. Document processing focuses on preserving structure, readability and control over the result, with comparison of responses from different language models to refine prompts."
        },
        12: {
            short_desc: "Full Stack task product covering the complete flow from interface to API, validation and persistence.",
            long_desc: "A task product centred on the complete flow: screen, API, models, validation and persistence. The project separates responsibilities from the user action through to the database and implements CRUD with Flask, SQLAlchemy and PostgreSQL."
        },
        13: {
            short_desc: "Open-source system for maintaining multiple role-specific CV variants from structured professional data.",
            long_desc: "ProfileStack manages multiple role-specific CV variants from one structured professional history. It automatically discovers profile files, provides editing and A4 preview, supports browser PDF export and keeps private local profiles outside Git."
        }
    }
};
