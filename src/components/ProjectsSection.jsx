// ProjectsSection.jsx
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useTranslation from "../hooks/useTranslation.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetailModal from "./ProjectDetailModal.jsx";

export default function ProjectsSection() {
  const { store, actions } = useGlobalReducer();
  const { t } = useTranslation();
  useEffect(() => { actions.loadProjects(); }, []);

  return (
    <section id="proyectos" className="section projects-wrap py-12 sm:py-16 md:py-20 px-4">
      <div className="container-narrow">
        {/* Título principal con más protagonismo */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-green-dark mb-4 relative inline-block">
            {t("projectsTitle")}
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-green-hero via-green-dark to-green-hero rounded-full shadow-lg"></div>
          </h2>
          <p className="text-ink text-lg mt-6 max-w-2xl mx-auto font-bold">
            {t("projectsDesc")}
          </p>
        </div>

        {/* Grid de proyectos */}
        <div className="flex flex-col gap-8">
          {store.projects.map((p, index) => (
            <ProjectCard key={p.id} project={p} index={index} />
          ))}
        </div>
      </div>
      <ProjectDetailModal />
    </section>
  );
}
