import useTranslation from "../hooks/useTranslation.jsx";

export default function AboutMe() {
  const { t } = useTranslation();

  return (
    <section id="sobre-mi" className="about-section">
      <div className="page-shell">
        <div className="about-section__main">
          <p className="section-label">{t("aboutMe")}</p>
          <h2>{t("aboutEditorialTitle")}</h2>
          <p className="editorial-copy">{t("aboutEditorialBody")}</p>
          <blockquote className="editorial-copy">{t("aboutEditorialQuote")}</blockquote>
        </div>
      </div>
    </section>
  );
}
