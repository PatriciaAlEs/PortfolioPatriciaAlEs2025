import { useState } from "react";
import useTranslation from "../hooks/useTranslation.jsx";
import SectionHeading from "./SectionHeading.jsx";

const steps = [
  ["discover", "discoverTitle", "discoverDesc"],
  ["design", "designTitle", "designDesc"],
  ["build", "buildTitle", "buildDesc"],
  ["validate", "validateTitle", "validateDesc"],
  ["iterate", "iterateTitle", "iterateDesc"]
];

export default function WorkProcess() {
  const { t } = useTranslation();
  const [active, setActive] = useState(0);

  return (
    <section className="process-section">
      <div className="page-shell">
        <SectionHeading eyebrow={t("howIWork")} title={t("processTitle")} />
        <div className="process-grid">
          <div className="process-tabs" role="tablist" aria-label={t("processTitle")}>
            {steps.map(([label], index) => (
              <button
                key={label}
                type="button"
                role="tab"
                aria-selected={active === index}
                className={active === index ? "is-active" : ""}
                onClick={() => setActive(index)}
              >
                <span>0{index + 1}</span>{t(label)}
              </button>
            ))}
          </div>
          <div className="process-detail" role="tabpanel">
            <p>{t(steps[active][0])}</p>
            <h3>{t(steps[active][1])}</h3>
            <p>{t(steps[active][2])}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
