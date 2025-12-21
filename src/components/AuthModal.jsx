import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function AuthModal() {
  const { store, dispatch, actions } = useGlobalReducer();
  const [form, setForm] = useState({ name: "", email: "", password: "", kind: "particular" });
  const [showPassword, setShowPassword] = useState(false);
  const mode = store.ui.authMode;

  const submit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "register") await actions.register(form);
      else await actions.login(form);
    } catch (err) { alert(err.message); }
  };

  return (
    <>
      <div className={`fixed inset-0 z-50 ${store.ui.authOpen ? "block" : "hidden"}`} onClick={() => dispatch({ type: "closeAuth" })}>
        <div className="flex items-center justify-center min-h-screen px-4">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-6" onClick={e => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold text-ink">
                {mode === "register" ? "Crear cuenta" : "Iniciar sesión"}
              </h2>
              <button
                className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                onClick={() => dispatch({ type: "closeAuth" })}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={submit} className="space-y-4">
              {mode === "register" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
                  <input
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-hero focus:border-green-hero transition-colors duration-200"
                    required
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                <input
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-hero focus:border-green-hero transition-colors duration-200"
                  required
                  value={form.email}
                  onChange={e => setForm({ ...form, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    className="w-full px-3 py-2 pr-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-hero focus:border-green-hero transition-colors duration-200"
                    required
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-2xl hover:scale-110 transition-transform duration-200"
                    onClick={() => setShowPassword(!showPassword)}
                    title={showPassword ? "Ocultar contraseña" : "Mostrar contraseña"}
                  >
                    {showPassword ? "🙈" : "🙉"}
                  </button>
                </div>
              </div>

              {mode === "register" && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Tipo</label>
                  <select
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-hero focus:border-green-hero transition-colors duration-200"
                    value={form.kind}
                    onChange={e => setForm({ ...form, kind: e.target.value })}
                  >
                    <option value="particular">Particular</option>
                    <option value="empresa">Empresa</option>
                  </select>
                </div>
              )}

              <div className="flex flex-col space-y-3 pt-4">
                <button
                  className="w-full bg-green-hero text-white font-semibold py-3 rounded-lg hover:bg-green-dark transition-all duration-300 transform hover:scale-105"
                  type="submit"
                >
                  {mode === "register" ? "Registrarme" : "Entrar"}
                </button>

                <button
                  className="w-full border-2 border-green-hero text-green-hero font-semibold py-3 rounded-lg hover:bg-green-hero hover:text-white transition-all duration-300"
                  type="button"
                  onClick={() => dispatch({ type: "openAuth", mode: mode === "register" ? "login" : "register" })}
                >
                  {mode === "register" ? "Tengo cuenta" : "Crear cuenta"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {store.ui.authOpen && (
        <div className="fixed inset-0 bg-black/60 z-40"></div>
      )}
    </>
  );
}
