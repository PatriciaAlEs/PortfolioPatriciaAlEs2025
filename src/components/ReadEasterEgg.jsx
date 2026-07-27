import { useEffect, useRef, useState } from "react";
import useTranslation from "../hooks/useTranslation.jsx";

export default function ReadEasterEgg() {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const bufferRef = useRef("");
  const timerRef = useRef(null);

  useEffect(() => {
    const onKeyDown = (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && (target.matches("input, textarea, select") || target.isContentEditable)) return;
      if (event.ctrlKey || event.metaKey || event.altKey) return;
      if (event.key.length !== 1) return;
      bufferRef.current = `${bufferRef.current}${event.key.toUpperCase()}`.slice(-4);
      if (bufferRef.current !== "READ") return;
      setVisible(true);
      window.dispatchEvent(new CustomEvent("portfolio:read-found"));
      window.clearTimeout(timerRef.current);
      timerRef.current = window.setTimeout(() => setVisible(false), 3200);
      bufferRef.current = "";
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.clearTimeout(timerRef.current);
    };
  }, []);

  return visible ? <div className="read-easter-egg editorial-copy" role="status">{t("readEasterEgg")}</div> : null;
}
