import Button from "../ui/Button.jsx";
import styles from "./PosterCard.module.css";

export default function PosterCard({ imageSrc, alt, buttonLabel, buttonHref }) {
  return (
    <div className={styles.card}>
      {/* wrapper só da imagem/poster */}
      <div className={styles.posterWrapper}>
        <img src={imageSrc} alt={alt} className={styles.posterImage} />
      </div>

      {/* wrapper separado só do botão */}
      <div className={styles.buttonWrapper}>
        <Button href={buttonHref}>{buttonLabel}</Button>
      </div>
    </div>
  );
}
