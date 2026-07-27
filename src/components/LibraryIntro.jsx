import { useLayoutEffect, useState } from "react";
import useTranslation from "../hooks/useTranslation.jsx";
import useReducedMotion from "../hooks/useReducedMotion.js";
import useSessionState from "../hooks/useSessionState.js";

export default function LibraryIntro() {
  const { t } = useTranslation();
  const reducedMotion = useReducedMotion();
  const [seen, setSeen] = useSessionState("portfolio-library-intro", false);
  const [visible, setVisible] = useState(() => !seen);

  useLayoutEffect(() => {
    if (seen || reducedMotion || document.readyState === "complete") {
      setVisible(false);
      setSeen(true);
      return undefined;
    }

    document.documentElement.classList.add("library-intro-active");
    const timer = window.setTimeout(() => {
      document.documentElement.classList.remove("library-intro-active");
      setVisible(false);
      setSeen(true);
    }, 720);
    return () => {
      window.clearTimeout(timer);
      document.documentElement.classList.remove("library-intro-active");
    };
  }, [reducedMotion, seen, setSeen]);

  if (!visible) return null;

  return (
    <div className="library-intro" aria-hidden="true">
      <div className="library-intro__book"><span /><span /></div>
      <p>{t("openingLibrary")}</p>
    </div>
  );
}
