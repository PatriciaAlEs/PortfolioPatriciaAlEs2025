import { useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function LanguageSwitcher() {
  const { store, dispatch } = useGlobalReducer();

  useEffect(() => {
    document.documentElement.lang = store.language;
  }, [store.language]);

  return (
    <div className="language-switcher" role="group" aria-label="Language">
      {["es", "en"].map((language) => (
        <button
          key={language}
          type="button"
          aria-pressed={store.language === language}
          className={store.language === language ? "is-active" : ""}
          onClick={() => dispatch({ type: "setLanguage", payload: language })}
        >
          {language.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
