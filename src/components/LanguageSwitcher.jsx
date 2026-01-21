import useGlobalReducer from "../hooks/useGlobalReducer";

export default function LanguageSwitcher() {
    const { store, dispatch } = useGlobalReducer();

    return (
        <div className="flex items-center gap-2 border-l border-white/20 pl-3 ml-3">
            <button
                onClick={() => dispatch({ type: "setLanguage", payload: "es" })}
                className={`px-2 py-1 rounded text-sm font-semibold transition-all duration-200 ${store.language === "es"
                        ? "bg-green-hero text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                title="Español"
                aria-label="Switch to Spanish"
            >
                ES
            </button>
            <button
                onClick={() => dispatch({ type: "setLanguage", payload: "en" })}
                className={`px-2 py-1 rounded text-sm font-semibold transition-all duration-200 ${store.language === "en"
                        ? "bg-green-hero text-white"
                        : "text-white/60 hover:text-white"
                    }`}
                title="English"
                aria-label="Switch to English"
            >
                EN
            </button>
        </div>
    );
}
