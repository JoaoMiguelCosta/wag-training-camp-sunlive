// src/shared/components/HotelHighlight.jsx
import styles from "./HotelHighlight.module.css";

/**
 * Componente reutilizável para secções de Hotel com vídeo + info.
 *
 * Props:
 * - id?: string                  -> id da secção (para âncoras)
 * - title?: string               -> título grande do hotel
 * - videoSrc?: string            -> URL do iframe (YouTube, etc.)
 * - videoTitle?: string          -> atributo title do iframe
 *
 * - addressTitle?: string        -> ex: "Address:"
 * - addressLines?: string[]      -> linhas de morada
 *
 * - contactsTitle?: string       -> ex: "Contacts:"
 * - contactsLines?: string[]     -> linhas de contactos
 *
 * - websiteLabel?: string        -> texto do botão (ex: "Website")
 * - websiteHref?: string         -> URL do site do hotel
 *
 * Para o 1.º formato usas address + contacts + website.
 * Para o 2.º formato podes usar só address + website.
 */
export default function HotelHighlight({
  id,
  title,
  videoSrc,
  videoTitle,
  addressTitle,
  addressLines = [],
  contactsTitle,
  contactsLines = [],
  websiteLabel,
  websiteHref,
}) {
  const hasAddress = addressLines.length > 0;
  const hasContacts = contactsLines.length > 0;
  const hasButton = websiteHref && websiteLabel;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.card}>
        {/* VÍDEO / MEDIA */}
        {videoSrc && (
          <div className={styles.media}>
            <div className={styles.videoFrame}>
              <iframe
                src={videoSrc}
                title={videoTitle || title || "Hotel video"}
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
        )}

        {/* BLOCO DE INFORMAÇÃO */}
        <div className={styles.info}>
          {title && <h2 className={styles.title}>{title}</h2>}

          <div className={styles.infoBlocks}>
            {hasAddress && (
              <div className={styles.infoBlock}>
                {addressTitle && (
                  <h3 className={styles.infoLabel}>{addressTitle}</h3>
                )}

                {addressLines.map((line, index) => (
                  <p key={index} className={styles.infoLine}>
                    {line}
                  </p>
                ))}
              </div>
            )}

            {hasContacts && (
              <div className={styles.infoBlock}>
                {contactsTitle && (
                  <h3 className={styles.infoLabel}>{contactsTitle}</h3>
                )}

                {contactsLines.map((line, index) => (
                  <p key={index} className={styles.infoLine}>
                    {line}
                  </p>
                ))}
              </div>
            )}
          </div>

          {hasButton && (
            <a
              href={websiteHref}
              target="_blank"
              rel="noreferrer"
              className={styles.websiteButton}
            >
              {websiteLabel}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
