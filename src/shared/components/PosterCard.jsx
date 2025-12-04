// src/shared/components/PosterCard.jsx
import Button from "../ui/Button.jsx";
import styles from "./PosterCard.module.css";

export default function PosterCard({ imageSrc, alt, buttonLabel, buttonHref }) {
  return (
    <div className={styles.card}>
      <img src={imageSrc} alt={alt} className={styles.posterImage} />
      <div className={styles.buttonWrapper}>
        <Button href={buttonHref}>{buttonLabel}</Button>
      </div>
    </div>
  );
}
