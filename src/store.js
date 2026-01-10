// 👇 imports SIEMPRE arriba del todo
import { actions } from "./services/apiServices.js";

export const initialStore = {
  baseURL: import.meta.env.VITE_API_URL || "http://127.0.0.1:5000/api",
  token: localStorage.getItem("token") || null,
  user: JSON.parse(localStorage.getItem("user") || "null"),
  techs: [],
  projects: [],
  ui: { cvOpen: false, authOpen: false, authMode: "register", projectOpen: null, contactOpen: false }
};

export function storeReducer(state, action) {
  switch (action.type) {
    case "setTechs": return { ...state, techs: action.payload };
    case "setProjects": return { ...state, projects: action.payload };
    case "openCV": return { ...state, ui: { ...state.ui, cvOpen: true } };
    case "closeCV": return { ...state, ui: { ...state.ui, cvOpen: false } };
    case "openAuth": return { ...state, ui: { ...state.ui, authOpen: true, authMode: action.mode || "register" } };
    case "closeAuth": return { ...state, ui: { ...state.ui, authOpen: false } };
    case "openProject": return { ...state, ui: { ...state.ui, projectOpen: action.payload } };
    case "closeProject": return { ...state, ui: { ...state.ui, projectOpen: null } };
    case "openContact": return { ...state, ui: { ...state.ui, contactOpen: true } };
    case "closeContact": return { ...state, ui: { ...state.ui, contactOpen: false } };
    case "login":
      localStorage.setItem("token", action.payload.token);
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      return { ...state, token: action.payload.token, user: action.payload.user, ui: { ...state.ui, authOpen: false } };
    case "logout":
      localStorage.removeItem("token"); localStorage.removeItem("user");
      return { ...state, token: null, user: null };
    default: return state;
  }
}

export { actions };
