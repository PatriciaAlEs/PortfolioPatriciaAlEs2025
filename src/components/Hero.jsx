import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useTranslation from "../hooks/useTranslation.jsx";
import corporativePic from "../assets/img/corporative pic.jpeg";

const CV_FILE_ID = "1Yh7NyD3bcU2Tcn1CEWWoDOTOCIVgPnnO";
const CV_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${CV_FILE_ID}`;
const CV_VIEW_URL = `https://drive.google.com/file/d/${CV_FILE_ID}/view`;

export default function Hero() {
  const { store, dispatch } = useGlobalReducer();
  const { t } = useTranslation();

  const handleExclusiveContent = () => {
    if (store.user) {
      // Usuario logueado: scroll a la sección "Más sobre mí"
      const moreAboutSection = document.getElementById('mas-sobre-mi');
      if (moreAboutSection) {
        moreAboutSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      // Usuario no logueado: mostrar modal de login
      alert("Para ver contenido exclusivo debes estar registrado e iniciar sesión");
      dispatch({ type: "openAuth", mode: "login" });
    }
  };

  return (
    <section id="top" className="hero my-4 sm:my-6 section px-4">
      <div className="container-narrow">
        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 items-center">
          <div className="order-2 lg:order-1 space-y-3 sm:space-y-4">
            <h1 className="mt-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold" style={{ fontFamily: 'Inter, sans-serif' }}>Patricia Álvarez</h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white/90">
              {t("heroSubtitle")}
            </p>
            <p className="text-xs sm:text-sm md:text-base font-medium text-pink-light">
              {t("heroStack")}
            </p>

            <div className="space-y-3 text-sm sm:text-base text-white/90 leading-relaxed">
              <p>
                {t("heroPara1")}
              </p>
              <p>
                {t("heroPara2")}
              </p>
              <p>
                {t("heroPara3")}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={CV_DOWNLOAD_URL}
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-white text-green-hero font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 hover:rotate-1 shadow-lg hover:shadow-xl text-sm sm:text-base group"
                download
              >
                <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                {t("downloadCV")}
              </a>
              <a
                href={CV_VIEW_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 border border-white/60 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm sm:text-base"
              >
                {t("openCV")}
              </a>
              {store.user && (
                <button
                  className="inline-flex items-center px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-pink-light to-pink-light/80 text-ink font-semibold rounded-lg hover:from-pink-light/90 hover:to-pink-light transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl text-sm sm:text-base group"
                  onClick={handleExclusiveContent}
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                  {t("exclusiveContent")}
                </button>
              )}
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center">
            <img
              className="photo mx-auto w-full max-w-xs sm:max-w-sm md:max-w-md"
              src={corporativePic}
              alt="Retrato profesional de Patricia Álvarez"
            />
          </div>
        </div>
      </div>
    </section>

  );
}
