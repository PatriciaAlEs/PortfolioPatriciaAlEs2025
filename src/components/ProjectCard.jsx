import { useEffect, useRef, useState } from "react";
import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useProjectTranslation from "../hooks/useProjectTranslation.jsx";
import useTranslation from "../hooks/useTranslation.jsx";

export default function ProjectCard({ project, index }) {
  const { dispatch } = useGlobalReducer();
  const { getProjectDescription } = useProjectTranslation();
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    const card = cardRef.current;
    if (card) observer.observe(card);
    return () => observer.disconnect();
  }, []);

  const technologies = project.techs || [];
  const animationDirection = index % 2 === 0 ? "-translate-x-20" : "translate-x-20";
  const animationClass = isVisible ? "opacity-100 translate-x-0" : `opacity-0 ${animationDirection}`;

  return (
    <article
      ref={cardRef}
      className={`bg-white rounded-3xl overflow-hidden shadow-project hover:shadow-xl transition-all duration-700 ease-out transform hover:-translate-y-1 border-2 ${
        project.featured ? "border-green-hero" : "border-green-dark/20"
      } ${animationClass}`}
    >
      <div className="flex flex-col md:flex-row">
        <div className="md:w-2/5 min-h-56 sm:min-h-64 relative overflow-hidden">
          {project.cover_url ? (
            <img
              src={project.cover_url}
              className="absolute inset-0 w-full h-full object-cover"
              alt={`Vista de ${project.title}`}
              loading="lazy"
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-green-dark via-green-hero to-pink-light flex items-center justify-center p-8">
              <span className="text-white text-3xl sm:text-4xl font-black text-center drop-shadow-lg">
                {project.title}
              </span>
            </div>
          )}
          {(project.featured || project.complementary) && (
            <span className="absolute top-4 left-4 bg-white/95 text-green-dark px-3 py-1.5 rounded-full text-xs font-bold shadow-lg">
              {t(project.featured ? "featuredProject" : "complementaryProject")}
            </span>
          )}
        </div>

        <div className="md:w-3/5 p-5 sm:p-7 md:p-8 flex flex-col justify-between bg-gradient-to-br from-pink-light/20 to-transparent">
          <div>
            <h3 className="text-2xl sm:text-3xl font-black text-ink mb-4">{project.title}</h3>
            <p className="text-ink leading-relaxed text-sm sm:text-base mb-6">
              {getProjectDescription(project.id, "short_desc") || project.short_desc}
            </p>
          </div>

          <div>
            <h4 className="text-xs sm:text-sm font-bold text-ink uppercase tracking-wider mb-3">
              {t("techStack")}
            </h4>
            <div className="flex flex-wrap gap-2 mb-6">
              {technologies.map((tech) => (
                <span
                  key={tech.id}
                  className="inline-flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-soft border border-green-dark/20 text-xs sm:text-sm font-semibold text-ink"
                >
                  {tech.icon_url && <img src={tech.icon_url} alt="" className="w-5 h-5" loading="lazy" />}
                  {tech.name}
                </span>
              ))}
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-xl bg-green-dark px-5 py-2.5 text-white font-bold hover:bg-green-hero transition-colors"
              onClick={() => dispatch({ type: "openProject", payload: project.id })}
            >
              {t("viewMore")}
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    short_desc: PropTypes.string.isRequired,
    cover_url: PropTypes.string,
    featured: PropTypes.bool,
    complementary: PropTypes.bool,
    techs: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        icon_url: PropTypes.string
      })
    )
  }).isRequired,
  index: PropTypes.number.isRequired
};
