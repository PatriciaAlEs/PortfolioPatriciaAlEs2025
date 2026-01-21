import useGlobalReducer from "./useGlobalReducer";
import { translations } from "../data/translations.js";

export default function useTranslation() {
    const { store } = useGlobalReducer();
    const language = store.language || "es";

    const t = (key) => {
        return translations[language]?.[key] || translations.es[key] || key;
    };

    return { t, language };
}
