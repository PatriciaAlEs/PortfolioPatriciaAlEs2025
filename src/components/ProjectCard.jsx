// ProjectCard.jsx
import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function ProjectCard({ project }) {
  const { dispatch } = useGlobalReducer();
  const [showImageModal, setShowImageModal] = useState(false);

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
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4 backdrop-blur-sm animate-fadeIn"
          onClick={() => setShowImageModal(false)}
        >
          <div className="relative max-w-7xl max-h-[90vh] w-full animate-scaleIn">
            <button
              className="absolute -top-12 right-0 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 w-10 h-10 rounded-full flex items-center justify-center text-2xl font-bold transition-all duration-300 hover:scale-110"
              onClick={() => setShowImageModal(false)}
            >
              ×
            </button>
            <div className="bg-white p-2 rounded-2xl shadow-2xl">
              <img
                src={project.cover_url}
                alt={project.title}
                className="w-full h-full object-contain rounded-xl"
                onClick={(e) => e.stopPropagation()}
              />
            </div>
            <p className="text-white text-center mt-4 font-semibold text-lg">{project.title}</p>
          </div>
        </div>
      )}
    </>
  );
}
