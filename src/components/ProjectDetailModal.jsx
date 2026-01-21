// ProjectDetailModal.jsx
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useProjectTranslation from "../hooks/useProjectTranslation.jsx";

export default function ProjectDetailModal() {
  const { store, dispatch } = useGlobalReducer();
  const { getProjectDescription } = useProjectTranslation();
  const project = store.projects.find(p => p.id === store.ui.projectOpen);
  const open = Boolean(project);

  return (
    <>
      {/* Modal principal */}
      <div
        className={`modal fade ${open ? "show d-block" : ""}`}
        tabIndex="-1"
        onClick={() => dispatch({ type: "closeProject" })}
      >
        <div
          className="modal-dialog modal-xl modal-dialog-centered"
          onClick={e => e.stopPropagation()}
        >
          <div className="modal-content p-4 rounded-4">

            {/* Header */}
            <div className="modal-header border-0">
              <h5 className="modal-title">{project?.title}</h5>
              <button
                type="button"
                className="btn-close"
                onClick={() => dispatch({ type: "closeProject" })}
              />
            </div>

            {/* Body */}
            <div className="modal-body">
              {project && (
                <div className="container">
                  {/* Video */}
                  <div className="ratio ratio-16x9 mb-3">
                    <iframe
                      src={project.video_url}
                      title={project.title}
                      allowFullScreen
                      className="rounded-3"
                    ></iframe>
                  </div>

                  {/* Descripción principal */}
                  <p>
                    {project.title === "Hooboo" ? (
                      <>
                        <strong>Descripción del Proyecto:</strong> HooBoo es una plataforma interactiva diseñada para conectar a lectores y escritores a través de una experiencia social centrada en la literatura. Los usuarios pueden explorar libros, compartir reseñas y conectarse con otros lectores, disfrutando de un diseño atractivo y adaptable.<br /><br />

                        <strong>Motivación e Historia:</strong> La idea de HooBoo surgió para ofrecer una red social exclusiva para libros, con registro, publicaciones, comentarios y feed personalizado. Queríamos combinar la experiencia visual de redes como Instagram con la literatura.<br /><br />

                        <strong>Funcionalidades:</strong> Explorar libros, interacción social (favoritos, comentarios), personalización de perfil y modo claro/oscuro, sistema de calificación, login y registro, vista para usuarios no registrados y registrados con opciones diferenciadas.<br /><br />

                        <strong>Tecnologías:</strong> Google Books API, Commento, CHATRA, Bootstrap, CSS, Bases de datos de usuarios, libros y calificaciones.
                      </>
                    ) : (
                      getProjectDescription(project.id, "long_desc") || project.long_desc
                    )}
                  </p>

                  {/* Imágenes */}
                  {project.images.length > 0 && (
                    <div className="row row-cols-1 row-cols-md-3 g-3 mb-3">
                      {project.images.map((img, i) => (
                        <div className="col" key={i}>
                          <img
                            src={img.url}
                            alt={`img-${i}`}
                            className="img-fluid rounded-3 shadow-sm"
                          />
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Botones */}
                  <div className="d-flex gap-3 mt-3">
                    {project.repo_url && (
                      <a
                        href={project.repo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-outline-primary"
                      >
                        Ver Repositorio
                      </a>
                    )}
                    {project.live_url && (
                      <a
                        href={project.live_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-success"
                      >
                        Ver Proyecto Online
                      </a>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Fondo atenuado */}
      {open && <div className="modal-backdrop fade show"></div>}
    </>
  );
}
