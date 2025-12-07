// src/shared/components/ImageTitleBanner.jsx
import styles from "./ImageTitleBanner.module.css";


export default function ImageTitleBanner({
  id,
  title,
  backgroundSrc,
  backgroundAlt = "",
  children,
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.imageWrapper}>
        {backgroundSrc && (
          <img
            src={backgroundSrc}
            alt={backgroundAlt}
            className={styles.image}
            loading="lazy"
          />
        )}

        <div className={styles.overlay}>
          {title && <h2 className={styles.title}>{title}</h2>}
          {children && <div className={styles.extra}>{children}</div>}
        </div>
      </div>
    </section>
  );
}
