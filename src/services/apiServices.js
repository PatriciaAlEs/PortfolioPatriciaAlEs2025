export const actions = (get, set) => ({
    async loadTechs() {
        const r = await fetch(`${get().baseURL}/techs`);
        const data = await r.json();
        set({ type: "setTechs", payload: data });
    },
    async loadProjects() {
        const r = await fetch(`${get().baseURL}/projects`);
        const data = await r.json();
        set({ type: "setProjects", payload: data });
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

