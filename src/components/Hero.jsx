import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import confetti from 'canvas-confetti';

export default function Hero() {
  const { store, dispatch } = useGlobalReducer();

  const handleCVDownload = () => {
    if (store.user) {
      // Usuario logueado: permitir descarga
      window.open("https://drive.google.com/uc?export=download&id=1thS8XpNQfm3dktvUke_8ccksko_lIFPt", "_blank");

      // Animación de confeti
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });

      // Confeti adicional con delay
      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 60,
          spread: 55,
          origin: { x: 0 }
        });
      }, 250);

      setTimeout(() => {
        confetti({
          particleCount: 50,
          angle: 120,
          spread: 55,
          origin: { x: 1 }
        });
      }, 400);
    } else {
      // Usuario no logueado: mostrar modal de login
      alert("Para descargar mi CV debes estar registrado e iniciar sesión");
      dispatch({ type: "openAuth", mode: "login" });
    }
  };

  return (
    <section id="top" className="hero my-4 sm:my-6 section">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="order-2 lg:order-1 space-y-3 sm:space-y-4">
            <span className="tag text-xs sm:text-sm">Portfolio · 2025</span>
            <h1 className="title mt-2 text-4xl sm:text-5xl md:text-6xl lg:text-7xl">PORTFOLIO</h1>
            <p className="text-base sm:text-lg md:text-xl font-semibold text-white/90">
              Full-Stack Developer — React · Flask · SQLAlchemy · JWT · WooCommerce
            </p>

            <p className="text-sm sm:text-base text-white/80 leading-relaxed">
              Me encanta convertir ideas en código que funcione de verdad. Aquí encontrarás
              proyectos reales, las tecnologías con las que trabajo y cómo resuelvo problemas del día a día.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-green-hero font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl text-sm sm:text-base group"
                onClick={handleCVDownload}
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Descargar CV
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center">
            <img
              className="photo mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md animate-float"
              src="src/assets/img/Patricia Alvarez.jpg"
              alt="Patricia Álvarez"
            />
          </div>
        </div>
      </div>
    </section>

  );
}
