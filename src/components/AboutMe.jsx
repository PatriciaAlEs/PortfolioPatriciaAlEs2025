import React, { useEffect, useRef, useState } from "react";
import useTranslation from "../hooks/useTranslation.jsx";

const AboutMe = () => {
    const { t } = useTranslation();
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id="sobre-mi"
            className={`split my-4 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                }`}
        >
            <div className="row g-0">


                <div className="col-12 col-lg-5 left d-flex align-items-center justify-content-center">
                    <div className="box w-100 text-center">
                        <h2 className="section-title text-white m-0">{t("aboutMeTitle")}</h2>
                    </div>
                </div>


                <div className="col-12 col-lg-7 right">
                    <div className="box">
                        <p className="mb-2">
                            {t("aboutMePara1")}
                        </p>
                        <p className="mb-2">
                            {t("aboutMePara2")}
                        </p>
                        <p className="mb-0">
                            {t("aboutMePara3")}
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
