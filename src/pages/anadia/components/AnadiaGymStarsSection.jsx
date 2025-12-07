import { anadiaContent } from "../../../config/content/anadia.content.js";
import fundoMalta2 from "../../../assets/background-malta/fundo-malta2.jpg";

import styles from "./AnadiaGymStarsSection.module.css";

export default function AnadiaGymStarsSection() {
  const { gymStarsSection } = anadiaContent;

  if (!gymStarsSection) return null;

  const { id, title, description, addressTitle, addressLines } =
    gymStarsSection;

  return (
    <section
      id={id}
      className={styles.section}
      style={{ backgroundImage: `url(${fundoMalta2})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2 className={styles.title}>{title}</h2>

          <div className={styles.textBlock}>
            {description?.map((paragraph, index) => (
              <p key={index} className={styles.paragraph}>
                {paragraph}
              </p>
            ))}
          </div>

          <div className={styles.infoBlock}>
            <div className={styles.address}>
              <span className={styles.infoLabel}>{addressTitle}:</span>
              {addressLines?.map((line, index) => (
                <span key={index} className={styles.infoLine}>
                  {line}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
