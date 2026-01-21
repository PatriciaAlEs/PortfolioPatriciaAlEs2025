import React, { useEffect, useRef, useState } from "react";

const AboutMe = () => {
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
                        <h2 className="section-title text-white m-0">SOBRE MÍ</h2>
                    </div>
                </div>


                <div className="col-12 col-lg-7 right">
                    <div className="box">
                        <p className="mb-2">
                            ¡Hola! Soy <strong>Patricia</strong>, desarrolladora full-stack y Mentora Técnica en 4Geeks Academy.
                        </p>
                        <p className="mb-2">
                            Me paso el día entre React y Flask, montando aplicaciones que resuelvan problemas reales. Me gusta que el código sea limpio y fácil de mantener (porque sé que alguien lo va a leer después, probablemente yo misma 😅). También trabajo con bases de datos, JWT, WooCommerce... lo que haga falta para que las cosas funcionen.
                        </p>
                        <p className="mb-0">
                            Lo que más me motiva es <strong>ver ideas convertirse en productos que la gente usa de verdad</strong>. Si algo no sirve para resolver un problema o hacer la vida más fácil, ¿para qué programarlo?
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
