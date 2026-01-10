import { staticTechs, staticProjects } from "../data/staticData";

export const actions = (get, set) => ({
    async loadTechs() {
        set({ type: "setTechs", payload: staticTechs });
    },
    async loadProjects() {
        const projects = staticProjects.map(p => ({
            ...p,
            techs: staticTechs.filter(t => p.techKeys.includes(t.name)),
            images: p.images || []
        }));
        set({ type: "setProjects", payload: projects });
    },
    async register({ name, email, password, kind }) {
        const baseURL = get().baseURL.replace('/api', '');
        const r = await fetch(`${baseURL}/auth/signup`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, password, kind })
        });
        if (!r.ok) {
            const error = await r.json();
            throw new Error(error.msg || "Registro fallido");
        }
        const data = await r.json();
        set({ type: "login", payload: data });
    },
    async login({ email, password }) {
        const baseURL = get().baseURL.replace('/api', '');
        const r = await fetch(`${baseURL}/auth/login`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (!r.ok) {
            const error = await r.json();
            throw new Error(error.msg || "Login fallido");
        }
        const data = await r.json();
        set({ type: "login", payload: data });
    }
});

