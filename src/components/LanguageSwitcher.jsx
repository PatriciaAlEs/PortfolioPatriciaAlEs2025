import { useEffect, useRef } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function LanguageSwitcher() {
  const { store, dispatch } = useGlobalReducer();
  const transitionTimer = useRef();

  useEffect(() => {
    document.documentElement.lang = store.language;
  }, [store.language]);

  useEffect(() => () => window.clearTimeout(transitionTimer.current), []);

  const changeLanguage = (language) => {
    if (language === store.language) return;
    const root = document.documentElement;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      dispatch({ type: "setLanguage", payload: language });
      return;
    }

    root.classList.add("is-language-changing");
    window.clearTimeout(transitionTimer.current);
    transitionTimer.current = window.setTimeout(() => {
      dispatch({ type: "setLanguage", payload: language });
      window.requestAnimationFrame(() => root.classList.remove("is-language-changing"));
    }, 90);
  };

  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {["es", "en"].map((language) => (
        <button
          key={language}
          type="button"
          aria-pressed={store.language === language}
          className={store.language === language ? "is-active" : ""}
          onClick={() => changeLanguage(language)}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
