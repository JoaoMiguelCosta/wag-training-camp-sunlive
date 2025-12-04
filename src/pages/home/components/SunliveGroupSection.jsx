// src/pages/home/components/SunliveGroupSection.jsx
import backgroundHome from "../../../assets/background-home/fundo-home.jpg";
import { homeContent } from "../../../config/content/home.content.js";
import styles from "./SunliveGroupSection.module.css";

export function SunliveGroupSection() {
  const { sunliveGroupSection } = homeContent;
  const { title, subtitle, paragraphs, link, video } = sunliveGroupSection;

  return (
    <section id="sunlive" className={styles.section}>
      <div
        className={styles.overlay}
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.55), rgba(0,0,0,0.55)), url(${backgroundHome})`,
        }}
      >
        <h2 className={styles.title}>{title}</h2>

        <div className={styles.content}>
          <div className={styles.textColumn}>
            <h3 className={styles.subtitle}>{subtitle}</h3>

            {paragraphs.map((text, index) => (
              <p key={index} className={styles.paragraph}>
                {text}
              </p>
            ))}

            <a
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className={styles.link}
            >
              {link.label}
            </a>
          </div>

          <div className={styles.videoColumn}>
            <div className={styles.videoWrapper}>
              <iframe
                className={styles.video}
                src={video.src}
                title={video.title}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
