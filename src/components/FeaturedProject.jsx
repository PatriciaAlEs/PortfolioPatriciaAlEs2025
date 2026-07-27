import { useEffect, useRef, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useTranslation from "../hooks/useTranslation.jsx";
import readPpMockup from "../img_readme/Mockup_ReadPp.png";

const architecture = [
  ["Interface", "architectureInterface"],
  ["Controller", "architectureController"],
  ["Repositories", "architectureRepositories"],
  ["Data Sources", "architectureData"],
  ["Database / LLM", "architectureServices"]
];

const productFeatures = [
  "readPpDoesLibrary",
  "readPpDoesSessions",
  "readPpDoesInsights",
  "readPpDoesSync",
  "readPpDoesOffline",
  "readPpDoesAssistant"
];

const buildScope = [
  "readPpBuiltArchitecture",
  "readPpBuiltFlutter",
  "readPpBuiltRiverpod",
  "readPpBuiltLocal",
  "readPpBuiltSupabase",
  "readPpBuiltModels",
  "readPpBuiltMemory",
  "readPpBuiltObservability"
];

const currentStatus = [
  "readPpStatusFunctional",
  "readPpStatusPwa",
  "readPpStatusApk",
  "readPpStatusNext"
];

const stackGroups = [
  ["stackFrontend", ["Flutter", "Dart", "Riverpod", "Material 3", "Responsive UI"]],
  ["stackBackendData", ["Supabase", "PostgreSQL", "Drift", "SQLite", "REST APIs"]],
  ["stackAiDevelopment", ["OpenAI", "Gemini", "Prompt Engineering", "Context Management"], true],
  ["stackProduct", ["UX Research", "Architecture", "Testing", "Observability", "PWA"]]
];

export default function FeaturedProject() {
  const { store } = useGlobalReducer();
  const { t } = useTranslation();
  const [activeLayer, setActiveLayer] = useState(0);
  const [visibleLayer, setVisibleLayer] = useState(0);
  const [layerTransition, setLayerTransition] = useState("");
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const previewTriggerRef = useRef(null);
  const closePreviewRef = useRef(null);
  const layerTimerRef = useRef(null);
  const project = store.projects.find((item) => item.id === 10);

  useEffect(() => {
    if (!isPreviewOpen) return undefined;
    const previousOverflow = document.body.style.overflow;
    const previewTrigger = previewTriggerRef.current;
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setIsPreviewOpen(false);
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", closeOnEscape);
    closePreviewRef.current?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
      previewTrigger?.focus();
    };
  }, [isPreviewOpen]);

  useEffect(() => () => window.clearTimeout(layerTimerRef.current), []);

  const selectLayer = (index) => {
    if (index === activeLayer) return;
    setActiveLayer(index);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisibleLayer(index);
      return;
    }

    setLayerTransition("is-exiting");
    window.clearTimeout(layerTimerRef.current);
    layerTimerRef.current = window.setTimeout(() => {
      setVisibleLayer(index);
      setLayerTransition("is-entering");
      layerTimerRef.current = window.setTimeout(() => setLayerTransition(""), 170);
    }, 110);
  };

  if (!project) return null;

  return (
    <article className="featured-project">
      <div className="featured-project__showcase">
        <div className="featured-project__content">
          <div className="project-kicker">
            <span>ReadPp</span>
            <span>{t("activeDevelopment")}</span>
          </div>
          <h3>ReadPp <em>+ LibrerIA</em></h3>
          <p className="featured-project__lead">{t("readPpBrief")}</p>

          <div className="featured-project__lists">
            <section>
              <h4>{t("whatItDoes")}</h4>
              <ul>{productFeatures.map((item) => <li key={item}>{t(item)}</li>)}</ul>
            </section>
            <section>
              <h4>{t("whatIBuilt")}</h4>
              <ul>{buildScope.map((item) => <li key={item}>{t(item)}</li>)}</ul>
            </section>
          </div>
          <a href={project.repo_url} target="_blank" rel="noopener noreferrer" className="featured-project__repo">
            {t("viewRepo")} <i className="fa-brands fa-github" aria-hidden="true" />
          </a>
          <div className="featured-project__availability" aria-label={t("availabilityLabel")}>
            <a href={project.live_url} target="_blank" rel="noopener noreferrer">PWA</a>
            <span>APK Android</span>
          </div>

        </div>

        <aside className="featured-project__visual">
          <figure className="featured-project__media">
            <button ref={previewTriggerRef} type="button" onClick={() => setIsPreviewOpen(true)} aria-label={t("expandReadPpMockup")}>
              <img src={readPpMockup} alt={t("readPpMockupAlt")} />
              <span><i className="fa-solid fa-expand" aria-hidden="true" /> {t("expandImage")}</span>
            </button>
          </figure>
          <section className="featured-project__status">
            <h4>{t("currentStatus")}</h4>
            <ul>{currentStatus.map((item) => <li key={item}>{t(item)}</li>)}</ul>
          </section>
          <div className="featured-project__stack">
            <span>{t("techStack")}</span>
            <div className="featured-project__stack-groups">
              {stackGroups.map(([title, items, planned]) => (
                <section key={title} className={planned ? "is-planned" : ""}>
                  <h5>{t(title)}</h5>
                  <div>{items.map((item) => <span key={item}>{item}</span>)}</div>
                </section>
              ))}
            </div>
          </div>
        </aside>
      </div>

      <div className="architecture-explorer">
        <div className="architecture-explorer__heading">
          <p>ReadPp + LibrerIA</p>
          <h4>{t("layeredArchitecture")}</h4>
        </div>
        <div className="architecture-rail" role="tablist" aria-label={t("layeredArchitecture")} style={{ "--active-layer": activeLayer }}>
          {architecture.map(([label], index) => (
            <button
              key={label}
              type="button"
              role="tab"
              aria-selected={activeLayer === index}
              className={activeLayer === index ? "is-active" : ""}
              onClick={() => selectLayer(index)}
            >
              <span>0{index + 1}</span>{label}
            </button>
          ))}
        </div>
        <p className={`architecture-detail ${layerTransition}`} role="tabpanel">{t(architecture[visibleLayer][1])}</p>
      </div>

      {isPreviewOpen && (
        <div className="image-lightbox" role="dialog" aria-modal="true" aria-label={t("readPpMockupAlt")} onClick={() => setIsPreviewOpen(false)}>
          <button ref={closePreviewRef} type="button" className="image-lightbox__close" onClick={() => setIsPreviewOpen(false)} aria-label={t("closeImagePreview")}>
            <i className="fa-solid fa-xmark" aria-hidden="true" />
          </button>
          <img src={readPpMockup} alt={t("readPpMockupAlt")} onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </article>
  );
}
