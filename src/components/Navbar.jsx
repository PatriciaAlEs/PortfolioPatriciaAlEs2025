import { useState, useRef, useEffect } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export default function Navbar() {
  const { store, dispatch } = useGlobalReducer();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Cerrar dropdown al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-mauve py-3 px-4 sticky top-0 z-50 backdrop-blur-sm bg-mauve/90 shadow-md">
      <div className="container-narrow flex items-center justify-between">

        {/* Brand */}
        <a className="group relative text-ink font-black text-2xl sm:text-3xl md:text-4xl tracking-tight hover:text-green-dark transition-all duration-300 no-underline"
          style={{ fontFamily: "'Playfair Display', serif" }}
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          <span className="relative z-10">
            Patricia <span className="text-green-dark">Álvarez</span>
          </span>
          <div className="absolute -bottom-1 left-0 w-0 h-1 bg-gradient-to-r from-green-dark to-pink-light group-hover:w-full transition-all duration-500"></div>
          <div className="absolute -inset-2 bg-pink-light/20 rounded-lg opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10"></div>
        </a>

        {/* Links / acciones */}
        <div className="flex items-center gap-2 sm:gap-3">
          {!store.user ? (
            <>
              <button
                className="group relative px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 border-2 border-green-hero text-green-hero bg-transparent font-bold rounded-lg hover:bg-green-hero hover:text-white transition-all duration-300 overflow-hidden text-xs sm:text-sm md:text-base"
                onClick={() => dispatch({ type: "openAuth", mode: "login" })}
              >
                <span className="relative z-10"><span className="hidden sm:inline">Iniciar sesión</span><span className="sm:hidden">Login</span></span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-hero to-green-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
              <button
                className="group relative px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-green-hero to-green-dark text-white font-bold rounded-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 overflow-hidden text-xs sm:text-sm md:text-base"
                onClick={() => dispatch({ type: "openAuth", mode: "register" })}
              >
                <span className="relative z-10">Registro</span>
                <div className="absolute inset-0 bg-gradient-to-l from-pink-light to-green-hero opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                className="group relative px-3 sm:px-4 md:px-5 py-2 sm:py-2.5 border-2 border-green-hero text-green-hero bg-transparent font-bold rounded-lg hover:bg-green-hero hover:text-white transition-all duration-300 flex items-center gap-2 overflow-hidden text-xs sm:text-sm md:text-base"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="max-w-[100px] sm:max-w-[150px] truncate">{store.user.name}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-hero to-green-dark opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border-2 border-pink-light/30 z-50 overflow-hidden">
                  <button
                    className="w-full px-4 py-3 text-left text-ink hover:bg-gradient-to-r hover:from-pink-light/30 hover:to-green-hero/20 rounded-lg transition-all duration-200 font-semibold"
                    onClick={() => {
                      dispatch({ type: "logout" });
                      setDropdownOpen(false);
                    }}
                  >
                    Cerrar sesión
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}
