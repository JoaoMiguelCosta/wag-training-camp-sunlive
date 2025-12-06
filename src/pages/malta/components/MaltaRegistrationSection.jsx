// src/pages/malta/components/MaltaRegistrationSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import Button from "../../../shared/ui/Button.jsx";

import styles from "./MaltaRegistrationSection.module.css";

export default function MaltaRegistrationSection() {
  const { registrationSection } = maltaContent;
  const { id, banner, ribbonText, buttons } = registrationSection;

  const handleClick = (button) => {
    // TODO: no futuro ligar ao formulário certo (button.formKey)
    console.log("Registration button clicked:", button.formKey);
  };

  return (
    <section id={id} className={styles.section}>
      <div className={styles.bannerWrapper}>
        <img src={banner.src} alt={banner.alt} className={styles.bannerImage} />
      </div>

      <div className={styles.ctaArea}>
        <p className={styles.ribbon}>{ribbonText}</p>

        <div className={styles.buttonsRow}>
          {buttons.map((button) => (
            <Button
              key={button.id}
              type="button"
              onClick={() => handleClick(button)}
              className={styles.registrationButton} // 👈 estilo só para Malta
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
