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
    <nav className="bg-mauve py-3 px-4 sticky top-0 z-50 backdrop-blur-sm bg-mauve/90">
      <div className="container-narrow flex items-center justify-between">

        {/* Brand */}
        <a className="text-ink font-black text-xl uppercase tracking-wide hover:text-green-dark transition-colors duration-200 no-underline"
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}>
          Patricia Álvarez
        </a>

        {/* Links / acciones */}
        <div className="flex items-center gap-3">
          {!store.user ? (
            <>
              <button
                className="px-4 py-2 border-2 border-green-hero text-green-hero bg-transparent font-semibold rounded-full hover:bg-green-hero hover:text-white transition-all duration-300"
                onClick={() => dispatch({ type: "openAuth", mode: "login" })}
              >
                Iniciar sesión
              </button>
              <button
                className="px-4 py-2 bg-green-hero text-white font-semibold rounded-full hover:bg-green-dark transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                onClick={() => dispatch({ type: "openAuth", mode: "register" })}
              >
                Registro
              </button>
            </>
          ) : (
            <div className="relative" ref={dropdownRef}>
              <button
                className="px-4 py-2 border-2 border-green-hero text-green-hero bg-transparent font-semibold rounded-full hover:bg-green-hero hover:text-white transition-all duration-300 flex items-center gap-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {store.user.name}
                <svg
                  className={`w-4 h-4 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                  <button
                    className="w-full px-4 py-2 text-left text-ink hover:bg-gray-100 rounded-lg transition-colors duration-200"
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
