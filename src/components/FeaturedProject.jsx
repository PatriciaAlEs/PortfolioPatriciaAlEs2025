import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useProjectTranslation from "../hooks/useProjectTranslation.jsx";
import useTranslation from "../hooks/useTranslation.jsx";
import readPpMockup from "../img_readme/Mockup_ReadPp.png";

const architecture = [
  ["Interface", "architectureInterface"],
  ["Controller", "architectureController"],
  ["Repositories", "architectureRepositories"],
  ["Data Sources", "architectureData"],
  ["Database / LLM", "architectureServices"]
];

export default function FeaturedProject() {
  const { store, dispatch } = useGlobalReducer();
  const { getProjectDescription } = useProjectTranslation();
  const { t } = useTranslation();
  const [activeLayer, setActiveLayer] = useState(0);
  const project = store.projects.find((item) => item.id === 10);

  if (!project) return null;

  return (
    <article className="featured-project">
      <div className="featured-project__intro">
        <div>
          <div className="project-kicker">
            <span>ReadPp</span>
            <span>{t("activeDevelopment")}</span>
          </div>
          <h3>ReadPp <em>+ LibrerIA</em></h3>
          <p className="featured-project__lead">{getProjectDescription(10, "short_desc") || project.short_desc}</p>
        </div>

        <div className="project-facts">
          <div>
            <span>{t("problemLabel")}</span>
            <p>{t("readPpProblem")}</p>
          </div>
          <div>
            <span>{t("roleLabel")}</span>
            <p>{t("readPpRole")}</p>
          </div>
          <button type="button" onClick={() => dispatch({ type: "openProject", payload: project.id })}>
            {t("viewCaseStudy")}
          </button>
        </div>
      </div>

      <figure className="featured-project__media">
        <img src={readPpMockup} alt={t("readPpMockupAlt")} />
      </figure>

      <div className="architecture-explorer">
        <div className="architecture-explorer__heading">
          <p>ReadPp + LibrerIA</p>
          <h4>{t("layeredArchitecture")}</h4>
        </div>
        <div className="architecture-rail" role="tablist" aria-label={t("layeredArchitecture")}>
          {architecture.map(([label], index) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={activeLayer === index}
              className={activeLayer === index ? "is-active" : ""}
              onClick={() => setActiveLayer(index)}
            >
              <span>0{index + 1}</span>{label}
            </button>
          ))}
        </div>
        <p className="architecture-detail">{t(architecture[activeLayer][1])}</p>
      </div>
    </article>
  );
}
