import React, { useEffect, useRef, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const MoreAboutMe = () => {
    const { store } = useGlobalReducer();
    const [visibleCards, setVisibleCards] = useState([]);
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        // Animar cards uno por uno (6 cards)
                        [0, 1, 2, 3, 4, 5].forEach((index) => {
                            setTimeout(() => {
                                setVisibleCards((prev) => [...prev, index]);
                            }, index * 300);
                        });
                        observer.disconnect();
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (store.user) {
            // Asegurar que las cards sean visibles incluso si el observer no se dispara
            setVisibleCards([0, 1, 2, 3, 4, 5]);
        }
    }, [store.user]);

    // Solo mostrar si el usuario está logueado
    if (!store.user) {
        console.log('Usuario no logueado, no se muestra contenido extra');
        return null;
    }

    console.log('Usuario logueado, mostrando contenido extra:', store.user);

    return (
        <section ref={sectionRef} id="mas-sobre-mi" className="my-12 px-4 w-full overflow-hidden">
            <div className="container-narrow max-w-full bg-white/8 backdrop-blur-lg rounded-3xl shadow-[0_18px_55px_rgba(0,0,0,0.18)] border border-white/10 p-5 sm:p-6">
                <h2 className="section-title mb-6 sm:mb-8 text-center text-2xl sm:text-3xl">MÁS SOBRE MÍ</h2>

                <div className="flex gap-3 sm:gap-4 md:gap-6 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-hide">
                    {/* Canción favorita */}
                    <div
                        className="relative group rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 overflow-hidden flex-shrink-0 w-72 sm:w-80 md:w-96 snap-center"
                        style={{
                            opacity: visibleCards.includes(0) ? 1 : 0,
                            transform: visibleCards.includes(0) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        {/* Fondo cristal mejorado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 bg-white/[0.03] rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute -inset-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 border border-white/20 rounded-2xl sm:rounded-3xl group-hover:border-pink-light/40 transition-all duration-500"></div>

                        {/* Contenido relativo */}
                        <div className="relative z-10">
                            <h3 className="text-lg sm:text-xl font-bold text-green-hero mb-3 sm:mb-4 text-center">
                                Mi Canción Favorita
                            </h3>
                            <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mb-3 sm:mb-4">
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent z-10 rounded-lg sm:rounded-xl pointer-events-none"></div>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/swnudbCnccs"
                                    title="Mi canción favorita"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                                También me encanta Imagine Dragons, Johnny Cash, Mumford and Sons y todo lo que tenga vibes country. La música es +100 de aura. Una buena BSO lo cambia todo.
                            </p>
                        </div>
                    </div>

                    {/* Lectora empedernida */}
                    <div
                        className="relative group rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 overflow-hidden flex-shrink-0 w-72 sm:w-80 md:w-96 snap-center"
                        style={{
                            opacity: visibleCards.includes(1) ? 1 : 0,
                            transform: visibleCards.includes(1) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        {/* Fondo cristal mejorado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 bg-white/[0.03] rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute -inset-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 border border-white/20 rounded-2xl sm:rounded-3xl group-hover:border-pink-light/40 transition-all duration-500"></div>

                        {/* Contenido relativo */}
                        <div className="relative z-10">
                            <h3 className="text-lg sm:text-xl font-bold text-green-hero mb-3 sm:mb-4 text-center">
                                Lectora Empedernida
                            </h3>
                            <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mb-3 sm:mb-4">
                                <img
                                    src="https://i.pinimg.com/736x/ba/3b/96/ba3b96bd64f5432a2662e813c120e354.jpg"
                                    alt="Lectura acogedora"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                                En 2025 me leí <strong className="text-pink-light text-2xl">63 libros</strong>. Sí, sesenta y tres.
                                Me encanta perderme en historias, y cuando algo me atrapa, no hay quien me pare.
                            </p>
                        </div>
                    </div>

                    {/* Fan de Harry Potter y Star Wars */}
                    <div
                        className="relative group rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 overflow-hidden flex-shrink-0 w-72 sm:w-80 md:w-96 snap-center"
                        style={{
                            opacity: visibleCards.includes(2) ? 1 : 0,
                            transform: visibleCards.includes(2) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        {/* Fondo cristal mejorado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 bg-white/[0.03] rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute -inset-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 border border-white/20 rounded-2xl sm:rounded-3xl group-hover:border-pink-light/40 transition-all duration-500"></div>

                        {/* Contenido relativo */}
                        <div className="relative z-10">
                            <h3 className="text-lg sm:text-xl font-bold text-green-hero mb-3 sm:mb-4 text-center">
                                Friki Fan
                            </h3>
                            <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mb-3 sm:mb-4">
                                <img
                                    src="https://i.pinimg.com/1200x/4a/9b/b7/4a9bb71939f72b0154ff09c5574cc7e8.jpg"
                                    alt="Harry Potter y Star Wars"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                                Soy <strong>super fan de Harry Potter y Star Wars</strong> hasta el punto de que
                                los llevo tatuados en mi piel. Nada de muggle por aquí. Literalmente. No es broma.
                            </p>
                        </div>
                    </div>

                    {/* Madre gatuna */}
                    <div
                        className="relative group rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 overflow-hidden flex-shrink-0 w-72 sm:w-80 md:w-96 snap-center"
                        style={{
                            opacity: visibleCards.includes(3) ? 1 : 0,
                            transform: visibleCards.includes(3) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        {/* Fondo cristal mejorado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 bg-white/[0.03] rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute -inset-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 border border-white/20 rounded-2xl sm:rounded-3xl group-hover:border-pink-light/40 transition-all duration-500"></div>

                        {/* Contenido relativo */}
                        <div className="relative z-10">
                            <h3 className="text-lg sm:text-xl font-bold text-green-hero mb-3 sm:mb-4 text-center">
                                Madre Gatuna por Partida Doble
                            </h3>
                            <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mb-3 sm:mb-4">
                                <img
                                    src="https://i.pinimg.com/1200x/b2/fc/00/b2fc00d65317ffd55354a9fe492122c9.jpg"
                                    alt="Gatos adorables"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                                Tengo dos gatos que son mi vida. Soy esa persona que habla de sus gatos sin que nadie me haya preguntado.
                                No tengo arreglo. <i className="fa-solid fa-heart text-pink-light ml-1"></i>
                            </p>
                        </div>
                    </div>

                    {/* Fan de Halloween */}
                    <div
                        className="relative group rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 overflow-hidden flex-shrink-0 w-72 sm:w-80 md:w-96 snap-center"
                        style={{
                            opacity: visibleCards.includes(4) ? 1 : 0,
                            transform: visibleCards.includes(4) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        {/* Fondo cristal mejorado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 bg-white/[0.03] rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute -inset-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 border border-white/20 rounded-2xl sm:rounded-3xl group-hover:border-pink-light/40 transition-all duration-500"></div>

                        {/* Contenido relativo */}
                        <div className="relative z-10">
                            <h3 className="text-lg sm:text-xl font-bold text-green-hero mb-3 sm:mb-4 text-center">
                                Halloween & Calabazas
                            </h3>
                            <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mb-3 sm:mb-4">
                                <img
                                    src="https://i.pinimg.com/1200x/23/c4/13/23c413d3c961aa46e88ac5ad5da1d86c.jpg"
                                    alt="Halloween y calabazas"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                                Soy fanática de Halloween y las calabazas. Si pudiera, decoraría mi casa con calabazas todo el año.
                                La temporada de otoño es mi favorita. <i className="fa-solid fa-pumpkin text-orange-400 ml-1"></i>
                            </p>
                        </div>
                    </div>

                    {/* Fan de Navidad */}
                    <div
                        className="relative group rounded-2xl sm:rounded-3xl p-4 sm:p-5 md:p-6 overflow-hidden flex-shrink-0 w-72 sm:w-80 md:w-96 snap-center"
                        style={{
                            opacity: visibleCards.includes(5) ? 1 : 0,
                            transform: visibleCards.includes(5) ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.95)',
                            transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                        }}
                    >
                        {/* Fondo cristal mejorado */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-white/0 backdrop-blur-xl rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 bg-white/[0.03] rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute -inset-px bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl sm:rounded-3xl"></div>
                        <div className="absolute inset-0 border border-white/20 rounded-2xl sm:rounded-3xl group-hover:border-pink-light/40 transition-all duration-500"></div>

                        {/* Contenido relativo */}
                        <div className="relative z-10">
                            <h3 className="text-lg sm:text-xl font-bold text-green-hero mb-3 sm:mb-4 text-center">
                                Asturiana & Alicantina
                            </h3>
                            <div className="aspect-video rounded-lg sm:rounded-xl overflow-hidden shadow-2xl mb-3 sm:mb-4">
                                <img
                                    src="https://i.pinimg.com/736x/2c/2f/d1/2c2fd13dd87c5b19f0adefb7c4489194.jpg"
                                    alt="Navidad y nieve"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-xs sm:text-sm md:text-base text-white/90 leading-relaxed">
                                Nacida en Asturias, de adopción en Alicante. Dos raíces, dos lugares que llevaré siempre en mi corazón.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="mt-6 text-center">
                    <p className="text-white/60 text-sm italic">
                        <i className="fa-solid fa-lock-open mr-2"></i>
                        Esta sección exclusiva es visible solo para usuarios registrados
                    </p>
                </div>
            </div>
        </section>
    );
};

export default MoreAboutMe;
