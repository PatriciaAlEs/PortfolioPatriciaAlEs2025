import React from "react";

const Experience = () => {
    return (
        <section id="experiencia" className="my-12 px-4">
            <div className="container-narrow bg-white/10 backdrop-blur-lg rounded-3xl shadow-[0_20px_60px_rgba(0,0,0,0.18)] border border-white/10 p-6 sm:p-8">
                <h2 className="section-title mb-8 text-center">EXPERIENCIA PROFESIONAL</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            Teaching Assistant · 4Geeks
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">2024 — actual</div>
                        <p className="text-gray-700 leading-relaxed">
                            Ayudo a estudiantes que están aprendiendo a programar desde cero. Doy mentorías, resuelvo bugs que parecen imposibles (spoiler: siempre es un punto y coma), reviso código y les ayudo a desplegar sus proyectos. Lo mejor de todo: ver cómo pasan de "no entiendo nada" a "¡ya funciona!"
                        </p>
                    </div>
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            QA Tester · 4Geeks Academy
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">2024 — actual</div>
                        <p className="text-gray-700 leading-relaxed">
                            Reviso código de estudiantes con ojo crítico: busco bugs, pruebo funcionalidades, verifico que todo funcione como debe y sugiero mejoras. Básicamente, soy la persona que encuentra los errores antes de que lleguen a producción. Me encanta ese momento en el que encuentras el bug escondido que nadie más vio.
                        </p>
                    </div>
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            Freelance · E-commerce
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">2024 — actual</div>
                        <p className="text-gray-700 leading-relaxed">
                            Creo tiendas online para clientes que necesitan vender sus productos en internet. Uso WordPress y WooCommerce (sí, a veces toca PHP), configuro pasarelas de pago, optimizo velocidad y me aseguro de que todo se vea bien en móviles. Básicamente, que la gente pueda comprar sin frustrarse por el camino.
                        </p>
                    </div>
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            Gestión de Equipos · Retail
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">2015 — 2023</div>
                        <p className="text-gray-700 leading-relaxed">
                            Años liderando equipos me enseñaron que la clave está en la comunicación clara, saber priorizar cuándo y qué es urgente, y mantener al equipo motivado incluso bajo presión. Esas son exactamente las habilidades que busco aplicar como PMI en equipos de desarrollo: coordinar sprints, traducir necesidades técnicas al lenguaje del cliente, y asegurarme de que el equipo tenga lo que necesita para entregar buenos productos sin quemarse en el camino.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
