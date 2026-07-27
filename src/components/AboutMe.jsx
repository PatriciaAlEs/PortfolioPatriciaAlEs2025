import useTranslation from "../hooks/useTranslation.jsx";

export default function AboutMe() {
  const { t } = useTranslation();

  const facets = [
    ["§ 01", "fantasyReader", "chapterInProgress"],
    ["§ 02", "filmAndSeries", "endlessList"],
    ["§ 03", "catMother", "codeSupervisors"],
    ["§ 04", "complexSystems", "conceptMaps"]
  ];

  return (
    <section id="sobre-mi" className="about-section">
      <div className="page-shell about-section__grid">
        <div className="about-section__main">
          <p className="section-label">{t("aboutMe")}</p>
          <span className="chapter-number">§ 01</span>
          <h2>{t("aboutEditorialTitle")}</h2>
          <p>{t("aboutEditorialBody")}</p>
          <blockquote>{t("aboutEditorialQuote")}</blockquote>
        </div>
        <div className="about-facets">
          <p className="section-label">{t("outsideEditor")}</p>
          {facets.map(([number, title, note]) => (
            <article key={number}>
              <span>{number}</span>
              <h3>{t(title)}</h3>
              <p>{t(note)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
