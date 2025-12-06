// src/shared/components/ui/Button.jsx
import styles from "./Button.module.css";

export default function Button({
  children,
  href,
  type = "button",
  onClick,
  className, // 👈 extra opcional
}) {
  const combinedClassName = className
    ? `${styles.button} ${className}`
    : styles.button;

  if (href) {
    return (
      <a href={href} className={combinedClassName}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName}>
      {children}
    </button>
  );
}
