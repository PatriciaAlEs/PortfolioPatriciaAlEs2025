import useGlobalReducer from "./useGlobalReducer";
import { projectTranslations } from "../data/projectTranslations.js";

export default function useProjectTranslation() {
    const { store } = useGlobalReducer();
    const language = store.language || "es";

    const getProjectDescription = (projectId, descType = "long_desc") => {
        const projectTranslation = projectTranslations[language]?.[projectId];
        if (projectTranslation && projectTranslation[descType]) {
            return projectTranslation[descType];
        }
        // Si no encuentra traducción, retorna una cadena vacía o el original
        return "";
    };

    return { getProjectDescription, language };
}
