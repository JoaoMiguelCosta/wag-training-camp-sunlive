// src/shared/components/HeroVideoSection.jsx
import styles from "./HeroVideoSection.module.css";

/**
 * Secção genérica com:
 * - texto + 2 botões (PDF e Website)
 * - vídeo YouTube ao lado
 *
 * Props:
 * - id?: string
 * - title?: string
 * - description?: string | string[]
 *
 * - videoSrc?: string      -> URL do iframe YouTube (embed)
 * - videoTitle?: string    -> atributo title do iframe
 *
 * - pdfLabel?: string      -> texto do botão PDF
 * - pdfHref?: string       -> link para o PDF
 *
 * - siteLabel?: string     -> texto do botão Website
 * - siteHref?: string      -> link para o site
 */
export default function HeroVideoSection({
  id,
  title,
  description,
  videoSrc,
  videoTitle,

  pdfLabel,
  pdfHref,

  siteLabel,
  siteHref,
}) {
  const hasPdf = pdfLabel && pdfHref;
  const hasSite = siteLabel && siteHref;

  const descriptionArray = Array.isArray(description)
    ? description
    : description
      ? [description]
      : [];

  return (
    <section id={id} className={styles.section}>
      <div className={styles.overlay}>
        <div className={styles.inner}>
          {/* BLOCO TEXTO + BOTÕES */}
          <div className={styles.textColumn}>
            {title && <h2 className={styles.title}>{title}</h2>}

            {descriptionArray.length > 0 && (
              <div className={styles.description}>
                {descriptionArray.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            )}

            {(hasPdf || hasSite) && (
              <div className={styles.actions}>
                {hasPdf && (
                  <a
                    href={pdfHref}
                    className={`${styles.button} ${styles.buttonPrimary}`}
                    download
                  >
                    {pdfLabel}
                  </a>
                )}

                {hasSite && (
                  <a
                    href={siteHref}
                    className={styles.button}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {siteLabel}
                  </a>
                )}
              </div>
            )}
          </div>

          {/* BLOCO VÍDEO */}
          {videoSrc && (
            <div className={styles.videoColumn}>
              <div className={styles.videoFrame}>
                <iframe
                  src={videoSrc}
                  title={videoTitle || title || "Video"}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
