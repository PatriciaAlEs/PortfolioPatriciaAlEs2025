import { useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useTranslation from "../hooks/useTranslation.jsx";

export default function ContactModal() {
    const { store, dispatch, actions } = useGlobalReducer();
    const { t } = useTranslation();
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
            alert(t("selectSubjectError"));
            setIsSubmitting(false);
            return;
        }

        if (!form.message || form.message.trim() === "") {
            alert(t("enterMessage"));
            setIsSubmitting(false);
            return;
        }

        try {
            await actions.sendContactMessage(form);
            alert(t("messageSentSuccess"));
            setForm({ subject: "", message: "" });
            dispatch({ type: "closeContact" });
        } catch (err) {
            console.error("Error enviando mensaje:", err);

            // Si es un error de JWT, hacer logout automático
            if (err.message.includes("Signature verification failed") ||
                err.message.includes("Token has expired") ||
                err.message.includes("Invalid token")) {
                alert(t("sessionExpired"));
                dispatch({ type: "logout" });
                dispatch({ type: "closeContact" });
                dispatch({ type: "openAuth", mode: "login" });
            } else {
                alert(err.message || t("errorSendingMessage"));
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
                            {t("sendMessage")}
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
                            <span className="font-medium">{t("sendingAs")}</span> {store.user?.name} ({store.user?.email})
                        </p>
                    </div>

                    <form onSubmit={submit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t("subject")}</label>
                            <select
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-hero focus:border-green-hero transition-colors duration-200"
                                required
                                value={form.subject}
                                onChange={e => setForm({ ...form, subject: e.target.value })}
                            >
                                <option value="">{t("selectSubject")}</option>
                                <option value={t("jobOffer")}>{t("jobOffer")}</option>
                                <option value={t("freelanceProject")}>{t("freelanceProject")}</option>
                                <option value={t("collaboration")}>{t("collaboration")}</option>
                                <option value={t("technicalQuery")}>{t("technicalQuery")}</option>
                                <option value={t("portfolioFeedback")}>{t("portfolioFeedback")}</option>
                                <option value={t("other")}>{t("other")}</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">{t("message")}</label>
                            <textarea
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-hero focus:border-green-hero transition-colors duration-200 resize-none"
                                required
                                rows={5}
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                placeholder={t("messageDescription")}
                                maxLength={1000}
                            />
                            <div className="text-xs text-gray-500 mt-1">
                                {form.message.length}/1000 {t("characters")}
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
                                        {t("sending")}
                                    </span>
                                ) : (
                                    t("sendButton")
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}