import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Hero() {
  const { store, dispatch } = useGlobalReducer();

  const handleCVDownload = () => {
    if (store.user) {
      // Usuario logueado: permitir descarga
      window.open("https://drive.google.com/uc?export=download&id=1thS8XpNQfm3dktvUke_8ccksko_lIFPt", "_blank");
    } else {
      // Usuario no logueado: mostrar modal de login
      alert("Para descargar mi CV debes estar registrado e iniciar sesión");
      dispatch({ type: "openAuth", mode: "login" });
    }
  };

  return (
    <section id="top" className="hero my-6 section">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <span className="tag">Portafolio · 2025</span>
            <h1 className="title mt-2">PORTAFOLIO</h1>
            <p className="text-lg md:text-xl font-semibold text-white/90">
              Full-Stack Developer — React · Flask · SQLAlchemy · JWT · WooCommerce
            </p>

            <p className="text-white/80 leading-relaxed">
              Construyo experiencias web claras, rápidas y mantenibles. Aquí verás
              proyectos reales, stack técnico y casos prácticos.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <button
                className="inline-flex items-center px-6 py-3 bg-white text-green-hero font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
                onClick={handleCVDownload}
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {store.user ? 'Descargar CV' : 'Descargar CV (Login requerido)'}
              </button>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center">
            <img
              className="photo mx-auto"
              src="src/assets/img/Patricia Alvarez.jpg"
              alt="Patricia Álvarez"
            />
          </div>
        </div>
      </div>
    </section>

  );
}
