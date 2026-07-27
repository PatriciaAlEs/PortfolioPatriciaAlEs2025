import { useEffect, useState } from "react";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import useTranslation from "../hooks/useTranslation.jsx";
import LanguageSwitcher from "./LanguageSwitcher.jsx";

const CV_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1Yh7NyD3bcU2Tcn1CEWWoDOTOCIVgPnnO";

export default function Navbar() {
  const { store, dispatch } = useGlobalReducer();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const handleScroll = () => setCompact(window.scrollY > 48);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className={`site-header ${compact ? "site-header--compact" : ""}`}>
      <div className="site-header__inner">
        <button className="wordmark" type="button" onClick={() => navigate("top")}>
          Patricia Álvarez
        </button>

        <nav id="primary-navigation" className={`primary-nav ${menuOpen ? "primary-nav--open" : ""}`} aria-label={t("mainNavigation")}>
          <button type="button" onClick={() => navigate("proyectos")}>{t("projects")}</button>
          <button type="button" onClick={() => navigate("experiencia")}>{t("experience")}</button>
          <button type="button" onClick={() => navigate("sobre-mi")}>{t("about")}</button>
          <button type="button" onClick={() => navigate("contacto")}>{t("contact")}</button>
        </nav>

        <div className="header-actions">
          <span className="availability"><span aria-hidden="true" />{t("available")}</span>
          <LanguageSwitcher />
          <a className="header-cv" href={CV_DOWNLOAD_URL}>{t("cvShort")}</a>
          {!store.user ? (
            <button className="account-action" type="button" onClick={() => dispatch({ type: "openAuth", mode: "login" })}>
              {t("login")}
            </button>
          ) : (
            <button className="account-action" type="button" onClick={() => dispatch({ type: "logout" })}>
              {t("logout")}
            </button>
          )}
          <button
            className="menu-toggle"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            aria-label={t("toggleMenu")}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
