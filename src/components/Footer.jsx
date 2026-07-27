import { useState } from "react";
import useTranslation from "../hooks/useTranslation.jsx";

const EMAIL = "patriciaalvarezestevez@gmail.com";
const CV_DOWNLOAD_URL = "https://drive.google.com/uc?export=download&id=1Yh7NyD3bcU2Tcn1CEWWoDOTOCIVgPnnO";
const CV_VIEW_URL = "https://drive.google.com/file/d/1Yh7NyD3bcU2Tcn1CEWWoDOTOCIVgPnnO/view";

export default function Footer() {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <footer id="contacto" className="contact-section">
      <div className="page-shell">
        <p className="section-label">{t("contact")}</p>
        <div className="contact-section__grid">
          <h2>{t("contactQuestion")}</h2>
          <div>
            <p>{t("contactBody")}</p>
            <div className="contact-actions">
              <button type="button" onClick={copyEmail}>{copied ? t("emailCopied") : t("copyEmail")}</button>
              <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            </div>
            <div className="social-links">
              <a href="https://www.linkedin.com/in/patricia-alvarez-estevez/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://github.com/PatriciaAlEs" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={CV_DOWNLOAD_URL}>{t("downloadCV")}</a>
              <a href={CV_VIEW_URL} target="_blank" rel="noopener noreferrer">{t("openCV")}</a>
            </div>
          </div>
        </div>
        <div className="footer-line">
          <div><strong>Patricia Álvarez</strong><span>{t("footerRole")}</span></div>
          <span>© {new Date().getFullYear()}</span>
          <span>React · Flask</span>
        </div>
      </div>
    </footer>
  );
}
