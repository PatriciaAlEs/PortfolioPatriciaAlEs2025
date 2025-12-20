// ProjectCard.jsx
import { useState, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function ProjectCard({ project }) {
  const { dispatch } = useGlobalReducer();
  const [showImageModal, setShowImageModal] = useState(false);

  // Cerrar modal con tecla ESC
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && showImageModal) {
        setShowImageModal(false);
      }
    };

    if (showImageModal) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden'; // Prevenir scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [showImageModal]);

  const techIcons = {
    "React": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    "Flask": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg",
    "Python": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "JavaScript": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    "Bootstrap": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
    "HTML5": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    "CSS3": "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  };

  const projectTechs = {
    "Habit Tracker": ["React", "JavaScript", "CSS3"],
    "Hooboo": ["React", "Flask", "Python", "Bootstrap"],
    "NameGen": ["JavaScript", "HTML5", "CSS3"],
    "Portfolio": ["React", "Flask", "Python", "Bootstrap"]
  };

  const technologies = projectTechs[project.title] || [];

  return (
    <>
      <div className="bg-white rounded-3xl overflow-hidden shadow-project hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 border-2 border-green-dark/20 hover:border-green-dark">
        <div className="flex flex-col md:flex-row">
          {/* Imagen a la izquierda */}
          <div
            className="md:w-2/5 relative overflow-hidden cursor-pointer group"
            onClick={(e) => {
              e.stopPropagation();
              setShowImageModal(true);
            }}
          >
            <img
              src={project.cover_url}
              className="w-full h-72 md:h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt={project.title}
            />
            <div className="absolute inset-0 bg-gradient-to-tr from-green-dark/70 to-green-hero/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="bg-pink-light/40 backdrop-blur-sm rounded-full p-4 shadow-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                </svg>
              </div>
            </div>
            {/* Badge decorativo */}
            <div className="absolute top-4 right-4 bg-green-dark text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
              Ver más
            </div>
          </div>

          {/* Contenido a la derecha */}
          <div className="md:w-3/5 p-8 flex flex-col justify-between bg-gradient-to-br from-pink-light/20 to-transparent">
            {/* Título y descripción */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-1 h-8 bg-gradient-to-b from-green-dark to-green-hero rounded-full"></div>
                <h3 className="text-3xl font-black text-ink hover:text-green-dark transition-colors duration-300">
                  {project.title}
                </h3>
              </div>

              {/* Descripción con diseño mejorado */}
              <div className="bg-pink-light/30 p-4 rounded-xl shadow-sm mb-6 border-l-4 border-green-dark">
                <p className="text-ink leading-relaxed text-base">
                  {project.short_desc}
                </p>
              </div>
            </div>

            {/* Tecnologías con diseño mejorado */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
                <h4 className="text-sm font-bold text-ink uppercase tracking-wider">Stack Tecnológico</h4>
              </div>
              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 bg-white px-4 py-2.5 rounded-xl hover:bg-green-dark hover:text-white transition-all duration-300 shadow-soft hover:shadow-lg border border-green-dark/20 hover:border-green-dark group/tech"
                    title={tech}
                  >
                    <img
                      src={techIcons[tech]}
                      alt={tech}
                      className="w-6 h-6 group-hover/tech:scale-110 transition-transform duration-300"
                    />
                    <span className="text-sm font-semibold text-ink group-hover/tech:text-white transition-colors duration-300">{tech}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal mejorado para ver la imagen en grande */}
      {showImageModal && (
        <div
          className="fixed inset-0 bg-gradient-to-br from-green-dark/95 via-[#0f1a13]/95 to-green-hero/95 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative w-full h-full flex flex-col items-center justify-center animate-scaleIn">
            <button
              className="absolute top-4 right-4 bg-pink-light/20 backdrop-blur-md text-white hover:bg-pink-light hover:text-ink w-12 h-12 rounded-full flex items-center justify-center text-3xl font-bold transition-all duration-300 hover:scale-110 shadow-lg z-10 border-2 border-pink-light/30 hover:border-pink-light"
              onClick={(e) => {
                e.stopPropagation();
                setShowImageModal(false);
              }}
              title="Cerrar (ESC)"
            >
              ×
            </button>
            <div className="max-w-[95vw] max-h-[85vh] flex items-center justify-center p-2">
              <img
                src={project.cover_url}
                alt={project.title}
                className="max-w-full max-h-full object-contain rounded-xl shadow-2xl border-4 border-pink-light/50 hover:border-pink-light transition-all duration-300"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <div className="flex items-center gap-4 mt-6">
              <span className="text-white text-center font-black text-xl bg-pink-light/90 text-ink px-6 py-3 rounded-full shadow-lg border-2 border-white/20">
                {project.title}
              </span>
              {project.repo_url && (
                <a
                  href={project.repo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-dark hover:bg-green-hero text-white font-bold px-6 py-3 rounded-full shadow-lg border-2 border-pink-light/30 hover:border-pink-light transition-all duration-300 hover:scale-105"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  Ver Repositorio
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
