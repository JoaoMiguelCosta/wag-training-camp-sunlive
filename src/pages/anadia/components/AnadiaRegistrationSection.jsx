// src/pages/anadia/components/AnadiaRegistrationSection.jsx
import { useCallback, useEffect, useMemo, useState } from "react";
import { anadiaContent } from "../../../config/content/anadia.content.js";
import CampRegistrationSection from "../../../shared/components/CampRegistrationSection.jsx";
import styles from "./AnadiaRegistrationSection.module.css";

const FORMS = {
  gymnasts:
    "https://docs.google.com/forms/d/e/1FAIpQLScPlOjAJgJ_YswTieR-8sdihokLmtsxCXtb1BhaOeqbBljs5A/viewform?embedded=true",

  coaches:
    "https://docs.google.com/forms/d/e/1FAIpQLSf2AiXNkSjDos4uUsFIftZmwbuv4F8RO05Ct1-tILk4qXKkyA/viewform?embedded=true",

  families:
    "https://docs.google.com/forms/d/e/1FAIpQLScIXg4bjQfyUpklz9jIYeu2nCITQvEp936MaoYKj-2s8Peq8g/viewform?embedded=true",
};

const TITLES = {
  gymnasts: "GYMNASTS REGISTRATION",
  coaches: "COACHES REGISTRATION",
  families: "FAMILIES REGISTRATION",
};

export default function AnadiaRegistrationSection() {
  const { registrationSection } = anadiaContent;
  const { id, banner, ribbonText, buttons } = registrationSection;

  const [activeKey, setActiveKey] = useState(null);

  const isOpen = Boolean(activeKey);
  const activeUrl = useMemo(
    () => (activeKey ? FORMS[activeKey] : ""),
    [activeKey]
  );
  const activeTitle = useMemo(
    () => (activeKey ? TITLES[activeKey] : ""),
    [activeKey]
  );

  const close = useCallback(() => setActiveKey(null), []);

  const handleClick = useCallback((button) => {
    const key = button?.id; // "gymnasts" | "coaches" | "families"
    const url = FORMS[key];
    if (!url) return;

    setActiveKey(key);
  }, []);

  // ✅ Fechar com ESC
  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") close();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, close]);

  // ✅ Bloquear scroll do body enquanto modal está aberto
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  return (
    <>
      <CampRegistrationSection
        id={id}
        banner={banner}
        ribbonText={ribbonText}
        buttons={buttons}
        onButtonClick={handleClick}
      />

      {isOpen && (
        <div
          className={styles.backdrop}
          role="dialog"
          aria-modal="true"
          aria-label={activeTitle}
          onMouseDown={close}
        >
          <div
            className={styles.modal}
            onMouseDown={(e) => e.stopPropagation()}
          >
            <div className={styles.header}>
              <h3 className={styles.title}>{activeTitle}</h3>

              <button
                type="button"
                className={styles.closeBtn}
                onClick={close}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <iframe
              key={activeKey} // força reload quando mudas de form
              title={activeTitle}
              src={activeUrl}
              className={styles.iframe}
              loading="lazy"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      )}
    </>
  );
}
