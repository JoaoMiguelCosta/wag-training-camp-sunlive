// src/shared/components/CampRegistrationSection.jsx
import Button from "../ui/Button.jsx";
import styles from "./CampRegistrationSection.module.css";

export default function CampRegistrationSection({
  id,
  banner,
  ribbonText,
  buttons = [],
  onButtonClick,
}) {
  const handleClick = (button) => {
    if (onButtonClick) onButtonClick(button);
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
              key={button.id ?? button.label}
              type="button"
              onClick={() => handleClick(button)}
              className={styles.registrationButton}
            >
              {button.label}
            </Button>
          ))}
        </div>
      </div>
    </section>
  );
}
