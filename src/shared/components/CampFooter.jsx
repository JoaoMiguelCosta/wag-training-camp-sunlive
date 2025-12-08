import styles from "./CampFooter.module.css";

/**
 * Footer genérico reutilizável
 *
 * Props:
 *  - text -> string (ex.: "© COPYRIGHT 2026 SUNLIVE - ALL RIGHTS RESERVED")
 */
export function CampFooter({ text }) {
  if (!text) return null;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.text}>{text}</p>
      </div>
    </footer>
  );
}
