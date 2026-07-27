import useTranslation from "../hooks/useTranslation.jsx";

const ContentsStrip = () => {
    const { t } = useTranslation();
    return (
        <section className="section strip my-3 hover:shadow-lg transition-shadow duration-300">
            <div className="container-narrow">
                <div className="row g-2 text-center text-md-start">
                    <div className="col"><a href="#top" className="inline-block hover:scale-110 transition-transform duration-300">{t("about")}</a></div>
                    <div className="col"><a href="#experiencia" className="inline-block hover:scale-110 transition-transform duration-300">{t("experience")}</a></div>
                    <div className="col"><a href="#tecnologias" className="inline-block hover:scale-110 transition-transform duration-300">{t("technologies")}</a></div>
                    <div className="col"><a href="#proyectos" className="inline-block hover:scale-110 transition-transform duration-300">{t("projects")}</a></div>
                    <div className="col d-none d-md-block"><a href="#contacto" className="inline-block hover:scale-110 transition-transform duration-300">{t("contact")}</a></div>
                </div>
            </div>
        </section>
    );
};

export default ContentsStrip;
