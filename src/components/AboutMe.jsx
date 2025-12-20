import React from "react";

const AboutMe = () => {
    return (
        <section id="sobre-mi" className="split my-4">
            <div className="row g-0">


                <div className="col-12 col-lg-5 left d-flex align-items-center">
                    <div className="box w-100">
                        <h2 className="section-title text-white m-0">SOBRE MÍ</h2>
                    </div>
                </div>


                <div className="col-12 col-lg-7 right">
                    <div className="box">
                        <p className="mb-2">
                            Hola, soy <strong>Patricia Álvarez</strong> · Full-Stack Developer & Teaching Assistant en 4Geeks Academy.
                        </p>
                        <p className="mb-2">
                            Trabajo sobre todo con React y Flask, aunque también me manejo con bases de datos y e-commerce (WooCommerce, JWT, SQLAlchemy…)
                            Me gusta construir <strong> experiencias web claras, rápidas y mantenibles</strong> pero lo que más disfruto es darle forma a las ideas y ver cómo se convierten en proyectos reales que la gente puede usar.
                        </p>
                        <p className="mb-0">
                            Mi enfoque está en la arquitectura limpia, el diseño accesible y la creación de proyectos reales que conecten con las personas.
                        </p>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default AboutMe;
