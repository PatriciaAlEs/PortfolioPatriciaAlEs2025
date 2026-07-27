import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useTranslation from "../hooks/useTranslation.jsx";

export default function MoreAboutMe() {
  const { store } = useGlobalReducer();
  const { t } = useTranslation();

  if (!store.user) return null;

  return (
    <section id="mas-sobre-mi" className="exclusive-section" aria-label={t("moreAboutMeTitle")}>
      <div className="page-shell">
        <h2>{t("moreAboutMeTitle")}</h2>
        <p>{t("exclusiveNote")}</p>
        <div className="exclusive-grid">
          <article><span>01</span><h3>{t("hardcoreReader")}</h3><p>{t("readerDesc")}</p></article>
          <article><span>02</span><h3>{t("catMom")}</h3><p>{t("catMomDesc")}</p></article>
          <article><span>03</span><h3>{t("roots")}</h3><p>{t("rootsDesc")}</p></article>
        </div>
      </div>
    </section>
  );
}
