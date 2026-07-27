import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useTranslation from "../hooks/useTranslation.jsx";
import FeaturedProject from "./FeaturedProject.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetailModal from "./ProjectDetailModal.jsx";
import SectionHeading from "./SectionHeading.jsx";

export default function ProjectsSection() {
  const { store, actions } = useGlobalReducer();
  const { t } = useTranslation();

  useEffect(() => {
    actions.loadProjects();
    // Static portfolio data only needs hydrating once.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section id="proyectos" className="projects-section">
      <div className="page-shell">
        <SectionHeading eyebrow={t("featuredProjectsEyebrow")} title={t("productsThat")} accent={t("workForReal")} />
        <FeaturedProject />

        <div className="secondary-projects">
          <div className="secondary-projects__header">
            <p>{t("otherProjectsEyebrow")}</p>
            <h3>{t("otherProjectsTitle")}</h3>
          </div>
          <div>
            {store.projects.filter((project) => project.id !== 10).map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
      <ProjectDetailModal />
    </section>
  );
}
