import { useCallback, useEffect, useRef } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useProjectTranslation from "../hooks/useProjectTranslation.jsx";
import useTranslation from "../hooks/useTranslation.jsx";

export default function ProjectDetailModal() {
  const { store, dispatch } = useGlobalReducer();
  const { getProjectDescription } = useProjectTranslation();
  const { t } = useTranslation();
  const project = store.projects.find((item) => item.id === store.ui.projectOpen);
  const closeButtonRef = useRef(null);
  const closeModal = useCallback(() => dispatch({ type: "closeProject" }), [dispatch]);

  useEffect(() => {
    if (!project) return undefined;
    const handleKeyDown = (event) => {
      if (event.key === "Escape") closeModal();
    };
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    closeButtonRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [closeModal, project]);

  if (!project) return null;

  return (
    <>
      <div
        className="modal fade show d-block"
        tabIndex="-1"
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={closeModal}
      >
        <div className="modal-dialog modal-xl modal-dialog-centered" onClick={(event) => event.stopPropagation()}>
          <div className="modal-content p-2 sm:p-4 rounded-4">
            <div className="modal-header border-0">
              <h2 className="modal-title h4" id="project-modal-title">{project.title}</h2>
              <button ref={closeButtonRef} type="button" className="btn-close" aria-label={t("close")} onClick={closeModal} />
            </div>

            <div className="modal-body">
              <p className="text-gray-700 leading-relaxed">
                {getProjectDescription(project.id, "long_desc") || project.long_desc}
              </p>

              <div className="d-flex flex-wrap gap-3 mt-4">
                {project.repo_url && (
                  <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="btn btn-outline-primary">
                    {t("viewRepo")}
                  </a>
                )}
                {project.live_url && (
                  <a href={project.live_url} target="_blank" rel="noopener noreferrer" className="btn btn-success">
                    {t("viewLive")}
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="modal-backdrop fade show"></div>
    </>
  );
}
