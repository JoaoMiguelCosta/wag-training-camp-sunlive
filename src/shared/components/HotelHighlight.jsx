import styles from "./HotelHighlight.module.css";

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
  cardBgSrc, // ✅ novo
}) {
  const hasAddress = addressLines.length > 0;
  const hasContacts = contactsLines.length > 0;
  const hasButton = websiteHref && websiteLabel;

  return (
    <section id={id} className={styles.section}>
      <div
        className={styles.card}
        style={cardBgSrc ? { "--card-bg": `url(${cardBgSrc})` } : undefined}
        data-has-bg={cardBgSrc ? "true" : "false"}
      >
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
