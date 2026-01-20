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
        let r;
        try {
            r = await fetch("/auth/signup", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, password, kind: kind || "particular" })
            });
        } catch (e) {
            console.error("Error de conexión:", e);
            throw new Error("No se pudo conectar con el servidor. Verifica que el backend esté corriendo.");
        }

        if (!r.ok) {
            let error;
            try {
                error = await r.json();
            } catch {
                throw new Error(`Error del servidor (${r.status})`);
            }
            throw new Error(error.msg || "Registro fallido");
        }

        let data;
        try {
            data = await r.json();
        } catch (e) {
            console.error("Error parseando respuesta:", e);
            throw new Error("El servidor devolvió una respuesta inválida");
        }

        set({ type: "login", payload: data });
    },
    async login({ email, password }) {
        let r;
        try {
            r = await fetch("/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password })
            });
        } catch (e) {
            console.error("Error de conexión:", e);
            throw new Error("No se pudo conectar con el servidor. Verifica que el backend esté corriendo.");
        }

        if (!r.ok) {
            let error;
            try {
                error = await r.json();
            } catch {
                throw new Error(`Error del servidor (${r.status})`);
            }
            throw new Error(error.msg || "Login fallido");
        }

        let data;
        try {
            data = await r.json();
        } catch (e) {
            console.error("Error parseando respuesta:", e);
            throw new Error("El servidor devolvió una respuesta inválida");
        }

        set({ type: "login", payload: data });
    }

});

