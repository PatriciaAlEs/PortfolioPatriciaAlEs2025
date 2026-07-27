import useTranslation from "../hooks/useTranslation.jsx";
import SectionHeading from "./SectionHeading.jsx";

const capabilities = [
  ["capProductTitle", "fa-layer-group", ["Flutter", "React", "TypeScript", "UX", "Tailwind CSS", "Dart"]],
  ["capBackendTitle", "fa-code", ["Python", "Flask", "Supabase", "PostgreSQL", "SQLite", "JWT", "REST APIs"]],
  ["capAiTitle", "fa-terminal", ["OpenAI", "Gemini", "$aiAssistants", "$contextMemory", "Streaming SSE", "Prompts"]],
  ["capQualityTitle", "fa-bolt", ["n8n", "APIs", "Debugging", "Code review", "$functionalValidation"]]
];

export default function CapabilitiesSection() {
  const { t } = useTranslation();

  return (
    <section id="capacidades" className="capabilities-section">
      <div className="page-shell">
        <SectionHeading eyebrow={t("technicalCapabilities")} title={t("fullStackTitle")} accent={t("productJudgement")} />
        <div className="capability-list">
          {capabilities.map(([title, icon, items]) => (
            <article className="capability-row" key={title}>
              <i className={`fa-solid ${icon}`} aria-hidden="true" />
              <div>
                <h3>{t(title)}</h3>
                <div className="capability-row__tags">
                  {items.map((item) => <span key={item}>{item.startsWith("$") ? t(item.slice(1)) : item}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
