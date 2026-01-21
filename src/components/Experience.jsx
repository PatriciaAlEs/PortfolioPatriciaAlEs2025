import React from "react";
import useTranslation from "../hooks/useTranslation.jsx";

const Experience = () => {
    const { t } = useTranslation();
    return (
        <section id="experiencia" className="my-12 px-4">
            <div className="container-narrow bg-white/10 backdrop-blur-lg rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-white/10 p-6 sm:p-8">
                <h2 className="section-title mb-8 text-center">{t("experience")}</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            {t("mentorTitle")} · 4Geeks
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">{t("mentorYear")}</div>
                        <p className="text-gray-700 leading-relaxed">
                            {t("mentorDesc")}
                        </p>
                    </div>
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            {t("qaTesterTitle")} · 4Geeks Academy
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">{t("qaTesterYear")}</div>
                        <p className="text-gray-700 leading-relaxed">
                            {t("qaTesterDesc")}
                        </p>
                    </div>
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            {t("freelanceTitle")}
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">{t("freelanceYear")}</div>
                        <p className="text-gray-700 leading-relaxed">
                            {t("freelanceDesc")}
                        </p>
                    </div>
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            {t("teamManagementTitle")} · Retail
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">{t("teamManagementYear")}</div>
                        <p className="text-gray-700 leading-relaxed">
                            {t("teamManagementDesc")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
