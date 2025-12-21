// Footer.jsx
import { useState } from 'react';

export default function Footer() {
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = async (e) => {
    e.preventDefault();

    const email = 'patriciaalvarezestevez@gmail.com';

    try {
      const mailtoLink = `mailto:${email}`;
      const testWindow = window.open(mailtoLink, '_self');

      setTimeout(async () => {
        try {
          await navigator.clipboard.writeText(email);
          setEmailCopied(true);
          setTimeout(() => setEmailCopied(false), 3000);
        } catch (err) {
        }
      }, 500);
    } catch (err) {
      try {
        await navigator.clipboard.writeText(email);
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 3000);
      } catch (clipboardErr) {
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-green-dark via-[#0f1a13] to-ink py-12 sm:py-16 mt-16 relative w-full">
      <div className="max-w-[1600px] mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <div className="flex flex-col sm:flex-row justify-center items-start gap-10 sm:gap-16 lg:gap-24 mb-10">

          <div className="flex flex-col items-center sm:items-start space-y-4">
            <h3 className="text-2xl sm:text-3xl font-black text-white text-center sm:text-left" style={{ fontFamily: "'Playfair Display', serif" }}>
              Patricia <span className="text-pink-light">Álvarez</span>
            </h3>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed text-center sm:text-left max-w-xs">
              Desarrolladora Full Stack creando experiencias web que funcionan de verdad.
            </p>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-bold text-lg sm:text-xl mb-5 uppercase tracking-wider">Accesos Rápidos</h4>
            <div className="flex flex-col gap-3">
              <a href="#sobre-mi" className="text-gray-300 hover:text-pink-light transition-colors duration-300 text-sm sm:text-base flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-pink-light group-hover:w-4 transition-all duration-300"></span>
                Sobre Mí
              </a>
              <a href="#experiencia" className="text-gray-300 hover:text-pink-light transition-colors duration-300 text-sm sm:text-base flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-pink-light group-hover:w-4 transition-all duration-300"></span>
                Experiencia
              </a>
              <a href="#tecnologias" className="text-gray-300 hover:text-pink-light transition-colors duration-300 text-sm sm:text-base flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-pink-light group-hover:w-4 transition-all duration-300"></span>
                Tecnologías
              </a>
              <a href="#proyectos" className="text-gray-300 hover:text-pink-light transition-colors duration-300 text-sm sm:text-base flex items-center gap-2 group">
                <span className="w-0 h-0.5 bg-pink-light group-hover:w-4 transition-all duration-300"></span>
                Proyectos
              </a>
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h4 className="text-white font-bold text-lg sm:text-xl mb-5 uppercase tracking-wider text-center sm:text-left">Contáctame</h4>
            <div className="flex gap-4 sm:gap-5">
              <button
                onClick={handleEmailClick}
                className="bg-white/10 hover:bg-pink-light text-white hover:text-ink w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-light/50 group cursor-pointer border-none"
                title="Copiar email"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </button>

              <a
                href="https://github.com/PatriciaAlEs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-pink-light text-white hover:text-ink w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-light/50"
                title="GitHub"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/patricia-alvarez-estevez/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-pink-light text-white hover:text-ink w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-pink-light/50"
                title="LinkedIn"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 sm:h-7 sm:w-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="h-px bg-gradient-to-r from-transparent via-pink-light/30 to-transparent mb-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 text-sm sm:text-base">
          <p className="text-gray-400 m-0 text-center md:text-left">
            © {new Date().getFullYear()} Patricia Álvarez. Todos los derechos reservados.
          </p>
          <p className="text-gray-400 m-0 flex items-center gap-2">
            Hecho con
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6 text-pink-light animate-pulse" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            y React + Flask
          </p>
        </div>
      </div>

      {emailCopied && (
        <div className="fixed bottom-4 sm:bottom-8 right-4 sm:right-8 bg-pink-light text-ink px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-2xl animate-bounce z-50 font-semibold text-sm sm:text-base">
          ✓ Email copiado al portapapeles!
        </div>
      )}
    </footer>
  );
}
