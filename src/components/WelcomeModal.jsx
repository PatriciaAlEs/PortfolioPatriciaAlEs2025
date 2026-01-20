import React, { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import confetti from 'canvas-confetti';

const WelcomeModal = () => {
    const { store } = useGlobalReducer();
    const [showModal, setShowModal] = useState(false);
    const [animateItems, setAnimateItems] = useState([]);

    useEffect(() => {
        // Mostrar modal cuando el usuario se registra o inicia sesión
        if (store.user) {
            const hasSeenWelcome = sessionStorage.getItem('hasSeenWelcome');
            if (!hasSeenWelcome) {
                setTimeout(() => {
                    setShowModal(true);
                    sessionStorage.setItem('hasSeenWelcome', 'true');

                    // Lanzar confeti múltiple
                    launchConfetti();

                    // Animar items de la lista uno por uno
                    [0, 1, 2].forEach((index) => {
                        setTimeout(() => {
                            setAnimateItems((prev) => [...prev, index]);
                        }, 800 + (index * 200));
                    });
                }, 500);
            }
        }
    }, [store.user]);

    const launchConfetti = () => {
        const duration = 3000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(() => {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);

            // Confeti desde la izquierda
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
                colors: ['#ff69b4', '#00ff88', '#4169e1', '#ffd700', '#ff6347']
            });

            // Confeti desde la derecha
            confetti({
                ...defaults,
                particleCount,
                origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
                colors: ['#ff69b4', '#00ff88', '#4169e1', '#ffd700', '#ff6347']
            });
        }, 250);

        // Explosión central adicional
        setTimeout(() => {
            confetti({
                particleCount: 100,
                spread: 70,
                origin: { y: 0.6 },
                colors: ['#ff69b4', '#00ff88', '#4169e1', '#ffd700']
            });
        }, 200);
    };

    const handleClose = () => {
        setShowModal(false);
        // Scroll suave a la sección "Más sobre mí"
        setTimeout(() => {
            const moreAboutSection = document.getElementById('mas-sobre-mi');
            if (moreAboutSection) {
                moreAboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }, 300);
    };

    if (!showModal) return null;

    return (
        <div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            style={{
                animation: 'fadeIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
            }}
            onClick={handleClose}
        >
            <div
                className="relative bg-gradient-to-br from-green-dark via-[#0f1a13] to-ink rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl border-2 border-pink-light/40"
                style={{
                    animation: 'modalBounceIn 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Efectos de brillo */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-light/10 via-transparent to-green-hero/10 rounded-3xl animate-pulse"></div>

                <div className="relative text-center">
                    {/* Icono de celebración con efecto de rotación */}
                    <div className="mb-4 relative">
                        <div
                            className="inline-flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-pink-light to-pink-light/80 rounded-full shadow-lg"
                            style={{
                                animation: 'spinStar 2s ease-in-out infinite'
                            }}
                        >
                            <i className="fa-solid fa-star text-4xl sm:text-5xl text-ink"></i>
                        </div>
                        {/* Anillo brillante alrededor */}
                        <div
                            className="absolute inset-0 rounded-full border-4 border-pink-light/30"
                            style={{
                                animation: 'ripple 1.5s ease-out infinite'
                            }}
                        ></div>
                    </div>

                    {/* Título con efecto gradient */}
                    <h2
                        className="text-2xl sm:text-3xl font-black mb-3 bg-gradient-to-r from-white via-pink-light to-white bg-clip-text text-transparent"
                        style={{
                            animation: 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.2s both'
                        }}
                    >
                        ¡Gracias por registrarte!
                    </h2>

                    {/* Mensaje */}
                    <p
                        className="text-white/90 text-base sm:text-lg leading-relaxed mb-6"
                        style={{
                            animation: 'slideDown 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.3s both'
                        }}
                    >
                        Ahora tienes acceso a <strong className="text-pink-light">datos extra sobre mí</strong> que solo usuarios registrados pueden ver.
                    </p>

                    {/* Lista de beneficios con animación individual */}
                    <div
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-4 mb-6 text-left border border-white/10"
                        style={{
                            animation: 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.4s both'
                        }}
                    >
                        <div
                            className="flex items-center gap-3 mb-3 transition-all duration-300"
                            style={{
                                opacity: animateItems.includes(0) ? 1 : 0,
                                transform: animateItems.includes(0) ? 'translateX(0)' : 'translateX(-20px)',
                                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            <i className="fa-solid fa-check-circle text-pink-light text-xl"></i>
                            <span className="text-white/90 text-sm sm:text-base">Descubre mi canción favorita</span>
                        </div>
                        <div
                            className="flex items-center gap-3 mb-3 transition-all duration-300"
                            style={{
                                opacity: animateItems.includes(1) ? 1 : 0,
                                transform: animateItems.includes(1) ? 'translateX(0)' : 'translateX(-20px)',
                                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            <i className="fa-solid fa-check-circle text-pink-light text-xl"></i>
                            <span className="text-white/90 text-sm sm:text-base">Conoce mis lecturas de 2025</span>
                        </div>
                        <div
                            className="flex items-center gap-3 transition-all duration-300"
                            style={{
                                opacity: animateItems.includes(2) ? 1 : 0,
                                transform: animateItems.includes(2) ? 'translateX(0)' : 'translateX(-20px)',
                                transition: 'all 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            <i className="fa-solid fa-check-circle text-pink-light text-xl"></i>
                            <span className="text-white/90 text-sm sm:text-base">Datos curiosos sobre mí</span>
                        </div>
                    </div>

                    {/* Botón con efectos hover mejorados */}
                    <button
                        onClick={handleClose}
                        className="relative w-full bg-gradient-to-r from-pink-light to-pink-light/80 hover:from-pink-light/90 hover:to-pink-light text-ink font-bold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl overflow-hidden group"
                        style={{
                            animation: 'slideUp 0.5s cubic-bezier(0.4, 0, 0.2, 1) 0.5s both'
                        }}
                    >
                        <span className="relative z-10">¡Ver datos extra sobre mí!</span>
                        <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WelcomeModal;
