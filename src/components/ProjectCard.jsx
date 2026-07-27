import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useProjectTranslation from "../hooks/useProjectTranslation.jsx";
import useTranslation from "../hooks/useTranslation.jsx";

export default function ProjectCard({ project }) {
  const { dispatch } = useGlobalReducer();
  const { getProjectDescription } = useProjectTranslation();
  const { t } = useTranslation();

  return (
    <article className="project-card">
      <div className="project-card__index">0{project.id === 11 ? 2 : project.id === 12 ? 3 : 4}</div>
      <div>
        <p>{project.complementary ? t("complementaryProject") : t("secondaryProject")}</p>
        <h3>{project.title}</h3>
        <p>{getProjectDescription(project.id, "short_desc") || project.short_desc}</p>
      </div>
      <div className="project-card__stack">
        {(project.techs || []).slice(0, 5).map((tech) => <span key={tech.id}>{tech.name}</span>)}
      </div>
      <button type="button" onClick={() => dispatch({ type: "openProject", payload: project.id })}>
        {t("viewMore")}
      </button>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    short_desc: PropTypes.string.isRequired,
    complementary: PropTypes.bool,
    techs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }))
  }).isRequired
};
