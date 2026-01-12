import { useEffect } from "react";
import styles from "./FormModal.module.css";

export default function FormModal({
  open,
  onClose,
  title = "Formulário",
  formUrl,
}) {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3 className={styles.title}>{title}</h3>
          <button
            className={styles.close}
            onClick={onClose}
            aria-label="Fechar"
          >
            ✕
          </button>
        </div>

        <iframe
          title={title}
          src={formUrl}
          className={styles.iframe}
          frameBorder="0"
        />
      </div>
    </div>
  );
}
