// Translation overrides for projects
export const projectTranslations = {
    es: {
        3: { // NameGen
            short_desc: "Aplicación web full-stack con frontend en React y backend en Python/Flask que genera nombres aleatorios para distintos géneros de juegos (RPG, FPS, etc.). Incluye lógica de generación combinando listas de prefijos y sufijos por estilo, y una API REST que alimenta la interfaz de usuario con resultados personalizados.",
            long_desc: "Aplicación web full-stack con frontend en React y backend en Python/Flask que genera nombres aleatorios para distintos géneros de juegos (RPG, FPS, etc.). Incluye lógica de generación combinando listas de prefijos y sufijos por estilo, y una API REST que alimenta la interfaz de usuario con resultados personalizados."
        },
        2: { // Hooboo
            short_desc: "Aplicación web full-stack desarrollada en equipo como proyecto final. HooBoo funciona como una red social para lectores con búsquedas vía Google Books y biblioteca personal de favoritos.",
            long_desc: "Aplicación web full-stack desarrollada en equipo como proyecto final. HooBoo funciona como una red social para lectores donde los usuarios pueden buscar libros usando la API de Google Books, crear una biblioteca personal de favoritos, escribir comentarios y valorar libros. Incluye autenticación con JWT, relaciones de base de datos (usuarios, libros, interacciones) y una arquitectura frontend-backend bien definida. El proyecto puso especial foco en la comunicación entre capas y el trabajo colaborativo."
        },
        1: { // Habit Tracker
            short_desc: "Una app para trackear hábitos diarios que hice para aprender a gestionar estado en React sin librerías externas. El reto fue mantener todo sincronizado con LocalStorage y que no se perdiera nada al recargar. Afiancé React hooks, manejo de arrays y objetos, y persistencia de datos en el navegador.",
            long_desc: "Mi primer proyecto 'serio' en React. Quería algo funcional que yo misma pudiera usar para seguir hábitos (porque post-its no me funcionaban). El mayor desafío fue entender cómo actualizar el estado correctamente sin mutar arrays directamente y hacer que todo se guardara automáticamente en LocalStorage. Aprendí muchísimo sobre useEffect, useState y cómo React re-renderiza componentes."
        }
    },
    en: {
        3: { // NameGen
            short_desc: "Full-stack web application with React frontend and Python/Flask backend that generates random names for different game genres (RPG, FPS, etc.). Includes generation logic combining prefix and suffix lists by style, and a REST API that feeds the user interface with personalized results.",
            long_desc: "Full-stack web application with React frontend and Python/Flask backend that generates random names for different game genres (RPG, FPS, etc.). Includes generation logic combining prefix and suffix lists by style, and a REST API that feeds the user interface with personalized results. This project was a great learning experience in integrating frontend and backend, understanding API communication, and working with randomization algorithms."
        },
        2: { // Hooboo
            short_desc: "Full-stack web application developed as a team final project. HooBoo works as a social network for readers with searches via Google Books and personal favorites library.",
            long_desc: "Full-stack web application developed as a team final project. HooBoo works as a social network for readers where users can search for books using the Google Books API, create a personal favorites library, write comments and rate books. Includes JWT authentication, database relationships (users, books, interactions) and a well-defined frontend-backend architecture. The project put special focus on communication between layers and collaborative work."
        },
        1: { // Habit Tracker
            short_desc: "An app to track daily habits that I made to learn how to manage state in React without external libraries. The challenge was keeping everything synchronized with LocalStorage and not losing anything on reload. I reinforced React hooks, array and object handling, and data persistence in the browser.",
            long_desc: "My first 'serious' project in React. I wanted something functional that I could use myself to track habits (because post-its didn't work for me). The biggest challenge was understanding how to update state correctly without directly mutating arrays and making everything save automatically to LocalStorage. I learned a lot about useEffect, useState and how React re-renders components."
        }
    }
};
