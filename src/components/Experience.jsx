import React from "react";

const Experience = () => {
    return (
        <section id="experiencia" className="my-12">
            <div className="container-narrow">
                <h2 className="section-title mb-8">EXPERIENCIA PROFESIONAL</h2>
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            Teaching Assistant · 4Geeks
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">2024 — actual</div>
                        <p className="text-gray-700 leading-relaxed">
                            Ayudo a estudiantes que están aprendiendo a programar desde cero. Doy mentorías, resuelvo bugs que parecen imposibles (spoiler: siempre es un punto y coma), reviso código y les ayudo a desplegar sus proyectos. Lo mejor de todo: ver cómo pasan de "no entiendo nada" a "¡ya funciona!" 🚀
                        </p>
                    </div>
                    <div className="ex-card group">
                        <div className="ex-head text-lg mb-2 group-hover:text-green-hero transition-colors duration-300">
                            Freelance · E-commerce
                        </div>
                        <div className="text-sm text-gray-500 mb-4 font-medium">2024 — actual</div>
                        <p className="text-gray-700 leading-relaxed">
                            Creo tiendas online para clientes que necesitan vender sus productos en internet. Uso WordPress y WooCommerce (sí, a veces toca PHP 😅), configuro pasarelas de pago, optimizo velocidad y me aseguro de que todo se vea bien en móviles. Básicamente, que la gente pueda comprar sin frustrarse por el camino.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
