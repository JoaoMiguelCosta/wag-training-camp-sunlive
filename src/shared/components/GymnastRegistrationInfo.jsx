// src/shared/components/GymnastRegistrationInfo.jsx
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Primeiro passo do wizard – só texto informativo.
 *
 * Props:
 * - title: string
 * - paragraphs: string[]  (cada entrada é um parágrafo/linha)
 */
export function GymnastRegistrationInfo({ title, paragraphs }) {
  return (
    <div className={styles.step}>
      <h2 className={styles.stepTitle}>{title}</h2>

      <div className={styles.infoBlock}>
        {paragraphs?.map((text, index) => (
          <p key={index} className={styles.infoParagraph}>
            {text}
          </p>
        ))}
      </div>
    </div>
  );
}
