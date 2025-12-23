import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function ContactModal() {
    const { store, dispatch, actions } = useGlobalReducer();
    const [form, setForm] = useState({
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);

    console.log("ContactModal render - contactOpen:", store.ui?.contactOpen);
    console.log("Store user:", store.user);

    const submit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        console.log("Formulario enviado:", form);
        console.log("Subject:", form.subject, "tipo:", typeof form.subject);
        console.log("Message:", form.message, "tipo:", typeof form.message);

        // Validación adicional
        if (!form.subject || form.subject.trim() === "") {
            alert("Por favor selecciona un asunto");
            setIsSubmitting(false);
            return;
        }

        if (!form.message || form.message.trim() === "") {
            alert("Por favor escribe un mensaje");
            setIsSubmitting(false);
            return;
        }

        try {
            await actions.sendContactMessage(form);
            alert("¡Mensaje enviado correctamente! Te responderé pronto.");
            setForm({ subject: "", message: "" });
            dispatch({ type: "closeContact" });
        } catch (err) {
            console.error("Error enviando mensaje:", err);

            // Si es un error de JWT, hacer logout automático
            if (err.message.includes("Signature verification failed") ||
                err.message.includes("Token has expired") ||
                err.message.includes("Invalid token")) {
                alert("Tu sesión ha expirado. Por favor, inicia sesión nuevamente.");
                dispatch({ type: "logout" });
                dispatch({ type: "closeContact" });
                dispatch({ type: "openAuth", mode: "login" });
            } else {
                alert(err.message || "Error al enviar el mensaje. Inténtalo de nuevo.");
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    if (!store.ui?.contactOpen) {
        return null;
    }
    

    return (
        <>
            <div className="fixed inset-0 bg-black/60 z-40"></div>
            <div className="fixed inset-0 z-50 flex items-center justify-center min-h-screen px-4" onClick={() => dispatch({ type: "closeContact" })}>
                <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6" onClick={e => e.stopPropagation()}>
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold text-ink">
                            Envíame un mensaje
                        </h2>
                        <button
                            className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
                            onClick={() => dispatch({ type: "closeContact" })}
                        >
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-gray-600">
                            <span className="font-medium">Enviando como:</span> {store.user?.name} ({store.user?.email})
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Asunto</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-hero focus:border-green-hero transition-colors duration-200"
                                required
                                value={form.subject}
                                onChange={e => setForm({ ...form, subject: e.target.value })}
                            >
                                <option value="">Selecciona un asunto</option>
                                <option value="Oferta de trabajo">Oferta de trabajo</option>
                                <option value="Proyecto freelance">Proyecto freelance</option>
                                <option value="Colaboración">Colaboración</option>
                                <option value="Consulta técnica">Consulta técnica</option>
                                <option value="Feedback del portfolio">Feedback del portfolio</option>
                                <option value="Otro">Otro</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mensaje</label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-hero focus:border-green-hero transition-colors duration-200 resize-none"
                                required
                                rows={5}
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                placeholder="Describe tu consulta, proyecto o propuesta..."
                                maxLength={1000}
                            />
                            <div className="text-xs text-gray-500 mt-1">
                                {form.message.length}/1000 caracteres
                            </div>
                        </div>

                        <div className="flex flex-col space-y-3 pt-4">
                            <button
                                className="w-full bg-green-hero text-white font-semibold py-3 rounded-lg hover:bg-green-dark transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                                type="submit"
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <span className="flex items-center justify-center gap-2">
                                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                        </svg>
                                        Enviando...
                                    </span>
                                ) : (
                                    "Enviar mensaje"
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}