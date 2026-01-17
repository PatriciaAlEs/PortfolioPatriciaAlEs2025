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
        const cfgUrl = import.meta.env.VITE_API_URL || get().baseURL;
        const origin = (() => {
            try { return new URL(cfgUrl).origin; } catch { return window.location.origin; }
        })();
        let r;
        try {
            r = await fetch(`${origin}/auth/signup`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, kind })
            });
        } catch (e) {
            throw new Error(`No se pudo conectar con el servidor (${origin}/auth/signup). Verifica el despliegue.`);
        }
        if (!r.ok) {
            const error = await r.json();
            throw new Error(error.msg || "Registro fallido");
        }
        const data = await r.json();
        set({ type: "login", payload: data });
    },
    async login({ email, password }) {
        const cfgUrl = import.meta.env.VITE_API_URL || get().baseURL;
        const origin = (() => {
            try { return new URL(cfgUrl).origin; } catch { return window.location.origin; }
        })();
        let r;
        try {
            r = await fetch(`${origin}/auth/login`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
        } catch (e) {
            throw new Error(`No se pudo conectar con el servidor (${origin}/auth/login). Verifica el despliegue.`);
        }
        if (!r.ok) {
            const error = await r.json();
            throw new Error(error.msg || "Login fallido");
        }
        const data = await r.json();
        set({ type: "login", payload: data });
    }
});

