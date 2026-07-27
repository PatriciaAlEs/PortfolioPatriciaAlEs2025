import useTranslation from "../hooks/useTranslation.jsx";
import SectionHeading from "./SectionHeading.jsx";

const capabilities = [
  ["capProductTitle", ["Flutter", "React", "TypeScript", "UX", "Tailwind CSS", "Dart"], "ReadPp"],
  ["capBackendTitle", ["Python", "Flask", "Supabase", "PostgreSQL", "SQLite", "JWT", "REST APIs"], "TimeToTask"],
  ["capAiTitle", ["OpenAI", "Gemini", "$aiAssistants", "$contextMemory", "Streaming SSE", "Prompts"], "LibrerIA"],
  ["capQualityTitle", ["n8n", "APIs", "Debugging", "Code review", "$functionalValidation"], "Acceso Pro · 4Geeks"]
];

export default function CapabilitiesSection() {
  const { t } = useTranslation();

  return (
    <section id="capacidades" className="capabilities-section">
      <div className="page-shell">
        <SectionHeading eyebrow={t("technicalCapabilities")} title={t("fullStackTitle")} accent={t("productJudgement")} />
        <div className="capability-list">
          {capabilities.map(([title, items, evidence], index) => (
            <article className="capability-row" key={title}>
              <span className="capability-row__index">0{index + 1}</span>
              <div>
                <h3>{t(title)}</h3>
                <div className="capability-row__tags">
                  {items.map((item) => <span key={item}>{item.startsWith("$") ? t(item.slice(1)) : item}</span>)}
                </div>
              </div>
              <p><span>{t("evidence")}</span>{evidence}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
