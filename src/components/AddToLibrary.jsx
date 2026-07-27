import useTranslation from "../hooks/useTranslation.jsx";
import useReducedMotion from "../hooks/useReducedMotion.js";
import useSessionState from "../hooks/useSessionState.js";

export default function AddToLibrary() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  const [saved, setSaved] = useSessionState("portfolio-added-to-library", false);

  const togglePortfolio = () => {
    const nextSaved = !saved;
    setSaved(nextSaved);
    window.dispatchEvent(new CustomEvent("portfolio:library-toggled", {
      detail: { saved: nextSaved }
    }));
  };

  return (
    <div className={`add-to-library${saved ? " is-saved" : ""}${reducedMotion ? " is-reduced" : ""}`}>
      <button
        type="button"
        onClick={togglePortfolio}
        aria-pressed={saved}
        aria-label={t(saved ? "removeFromLibrary" : "addToLibrary")}
        title={t(saved ? "removeFromLibrary" : "addToLibrary")}
      >
        <span className="add-to-library__book" aria-hidden="true">P</span>
      </button>
    </div>
  );
}
