import { useCallback, useEffect, useMemo, useState } from "react";
import { maltaContent } from "../../../config/content/malta.content.js";
import CampRegistrationSection from "../../../shared/components/CampRegistrationSection.jsx";
import styles from "./MaltaRegistrationSection.module.css";

const FORMS = {
  gymnasts:
    "https://docs.google.com/forms/d/e/1FAIpQLScv115gP_HMEEteLzpMSFcZkVWp1edZM7CctgBFmmAr6cuI0Q/viewform?embedded=true",

  coaches:
    "https://docs.google.com/forms/d/e/1FAIpQLSfXrmNUyknDt1n5hjS5rDQ9bvF3fgnGqGftI2Zriv4vQ2Kctg/viewform?embedded=true",

  families:
    "https://docs.google.com/forms/d/e/1FAIpQLSdRe7lvZJ-vV1UgOw5mPx-wVtsrKsJkDWfyXK7Cd8x30TBIzQ/viewform?embedded=true",
};

const TITLES = {
  gymnasts: "GYMNASTS REGISTRATION",
  coaches: "COACHES REGISTRATION",
  families: "FAMILIES REGISTRATION",
};

export default function MaltaRegistrationSection() {
  const { registrationSection } = maltaContent;
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
