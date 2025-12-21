// ProjectsSection.jsx
import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import ProjectCard from "./ProjectCard.jsx";
import ProjectDetailModal from "./ProjectDetailModal.jsx";

export default function ProjectsSection() {
  const { store, actions } = useGlobalReducer();
  useEffect(() => { actions.loadProjects(); }, []);

  return (
    <section id="proyectos" className="section projects-wrap py-20">
      <div className="container-narrow">
        {/* Título principal con más protagonismo */}
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-black text-green-dark mb-4 relative inline-block">
            PROYECTOS
            <div className="absolute -bottom-2 left-0 right-0 h-1.5 bg-gradient-to-r from-green-hero via-green-dark to-green-hero rounded-full shadow-lg"></div>
          </h2>
          <p className="text-ink text-lg mt-6 max-w-2xl mx-auto font-bold">
            Explora algunos de los proyectos que he desarrollado
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
