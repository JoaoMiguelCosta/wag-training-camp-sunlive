// src/shared/components/ui/Button.jsx
import styles from "./Button.module.css";

export default function Button({ children, href, type = "button", onClick }) {
  if (href) {
    return (
      <a href={href} className={styles.button}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={styles.button}>
      {children}
    </button>
  );
}
