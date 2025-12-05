// src/shared/components/InfoCard.jsx
import styles from "./InfoCard.module.css";

export default function InfoCard({ children, className = "" }) {
  const cardClassName = `${styles.card} ${className}`.trim();

  return <div className={cardClassName}>{children}</div>;
}
