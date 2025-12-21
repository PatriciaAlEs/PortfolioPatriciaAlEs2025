import React from "react";

const ContentsStrip = () => {
    return (
        <section className="section strip my-3 hover:shadow-lg transition-shadow duration-300">
            <div className="container-narrow">
                <div className="row g-2 text-center text-md-start">
                    <div className="col"><a href="#sobre-mi" className="inline-block hover:scale-110 transition-transform duration-300">SOBRE MÍ</a></div>
                    <div className="col"><a href="#experiencia" className="inline-block hover:scale-110 transition-transform duration-300">EXPERIENCIA</a></div>
                    <div className="col"><a href="#tecnologias" className="inline-block hover:scale-110 transition-transform duration-300">TECNOLOGÍAS</a></div>
                    <div className="col"><a href="#proyectos" className="inline-block hover:scale-110 transition-transform duration-300">PROYECTOS</a></div>
                    <div className="col d-none d-md-block"><a href="#contacto" className="inline-block hover:scale-110 transition-transform duration-300">CONTACTO</a></div>
                </div>
            </div>
        </section>
    );
};

export default ContentsStrip;
