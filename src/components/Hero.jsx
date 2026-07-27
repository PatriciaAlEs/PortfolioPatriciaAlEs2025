import useTranslation from "../hooks/useTranslation.jsx";
import portrait from "../assets/img/corporative pic.jpeg";

const CV_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1Yh7NyD3bcU2Tcn1CEWWoDOTOCIVgPnnO";

export default function Hero() {
  const { t } = useTranslation();

  const navigate = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="top" className="editorial-hero">
      <div className="page-shell editorial-hero__grid">
        <div className="hero-copy">
          <p className="hero-copy__eyebrow">{t("heroEyebrow")}</p>
          <h1>Patricia <em>Álvarez</em></h1>
          <p className="hero-copy__value">{t("heroValue")}</p>

          <div className="hero-capabilities" aria-label={t("keyCapabilities")}>
            {[t("keyCapabilities"), "Full Stack", t("appliedAI"), t("automation")].map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>

          <div className="hero-actions">
            <button className="button-primary" type="button" onClick={() => navigate("proyectos")}>
              {t("viewProjects")}
            </button>
            <a className="button-secondary" href={CV_DOWNLOAD_URL}>{t("downloadCV")}</a>
            <button className="button-secondary" type="button" onClick={() => navigate("contacto")}>
              {t("contactAction")}
            </button>
          </div>
        </div>

        <figure className="hero-portrait">
          <img src={portrait} alt={t("portraitAlt")} />
          <aside className="hero-status" aria-label={t("statusLabel")}>
            <span>{t("statusLabel")}</span>
            <strong>{t("statusWorking")}</strong>
            <p>{t("statusLocation")} · {t("statusAvailable")}</p>
          </aside>
        </figure>

        <p className="hero-human-note">{t("humanNote")}</p>
      </div>
    </section>
  );
}
