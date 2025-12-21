// TechGrid.jsx
import { useEffect, useRef, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const TechGrid = () => {
  const { store, actions } = useGlobalReducer();
  const [visibleCards, setVisibleCards] = useState([]);
  const sectionRef = useRef(null);

  useEffect(() => { actions.loadTechs(); }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && visibleCards.length === 0) {
          // Animar las tarjetas de forma escalonada
          store.techs.forEach((_, index) => {
            setTimeout(() => {
              setVisibleCards(prev => [...prev, index]);
            }, index * 50);
          });
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [store.techs]);

  const handleTechClick = (tech) => {
    if (tech.documentation_url) {
      window.open(tech.documentation_url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section ref={sectionRef} id="tecnologias" className="my-12">
      <div className="container-narrow">
        <h2 className="section-title mb-8">TECNOLOGÍAS</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {store.techs.map((t, index) => (
            <div
              key={t.id}
              className="flex"
              style={{
                opacity: visibleCards.includes(index) ? 1 : 0,
                transform: visibleCards.includes(index) ? 'translateY(0)' : 'translateY(20px)',
                transition: 'all 0.5s ease-out'
              }}
            >
              <div
                className={`tech-card w-full flex flex-col items-center justify-center min-h-[120px] group ${t.documentation_url
                  ? 'cursor-pointer hover:shadow-xl hover:scale-105 hover:border hover:border-green-hero/30 hover:bg-gradient-to-br hover:from-white hover:to-green-hero/5'
                  : ''
                  }`}
                onClick={() => handleTechClick(t)}
                role={t.documentation_url ? "button" : undefined}
                tabIndex={t.documentation_url ? 0 : undefined}
                onKeyDown={(e) => {
                  if (t.documentation_url && (e.key === 'Enter' || e.key === ' ')) {
                    e.preventDefault();
                    handleTechClick(t);
                  }
                }}
                title={t.documentation_url ? `Ver documentación de ${t.name}` : t.name}
              >
                <img
                  className="tech-icon mb-3"
                  src={t.icon_url}
                  alt={t.name}
                />
                <div className="font-semibold text-sm text-center text-ink">
                  {t.name}
                </div>
                {t.documentation_url && (
                  <div className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-4 h-4 text-green-hero" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechGrid;
