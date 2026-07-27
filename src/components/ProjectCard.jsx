import PropTypes from "prop-types";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useProjectTranslation from "../hooks/useProjectTranslation.jsx";
import useTranslation from "../hooks/useTranslation.jsx";

export default function ProjectCard({ project }) {
  const { store } = useGlobalReducer();
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
      <div className="project-card__details">
        <div className="project-card__stack">
          <strong>{t("projectStackLabel")}</strong>
          <div>{(project.techs || []).map((tech) => <span key={tech.id}>{tech.name}</span>)}</div>
        </div>
        <div className="project-card__skills">
          <strong>{t("projectSkillsLabel")}</strong>
          <div>{(project.skills?.[store.language] || project.skills?.es || []).map((skill) => <span key={skill}>{skill}</span>)}</div>
        </div>
      </div>
      <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="project-card__link">
        {t("viewRepo")} <i className="fa-brands fa-github" aria-hidden="true" />
      </a>
    </article>
  );
}

ProjectCard.propTypes = {
  project: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    short_desc: PropTypes.string.isRequired,
    repo_url: PropTypes.string.isRequired,
    complementary: PropTypes.bool,
    skills: PropTypes.shape({
      es: PropTypes.arrayOf(PropTypes.string),
      en: PropTypes.arrayOf(PropTypes.string)
    }),
    techs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired
    }))
  }).isRequired
};
