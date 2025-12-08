// src/shared/components/CampContactsSection.jsx
import styles from "./CampContactsSection.module.css";

/**
 * Desenha ícone consoante o id (facebook / instagram / youtube).
 */
function renderSocialIcon(id, label) {
  switch (id) {
    case "facebook":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path
            fill="currentColor"
            d="M13.5 21v-7.25H16l.4-3h-2.9V8.25c0-.87.29-1.5 1.7-1.5H16.5V4.1c-.3-.04-1.1-.1-2.1-.1-2.4 0-3.9 1.3-3.9 3.9V10.75H8v3h2.5V21h3z"
          />
        </svg>
      );

    case "instagram":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="5"
            ry="5"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle
            cx="12"
            cy="12"
            r="4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <circle cx="17" cy="7" r="1.2" fill="currentColor" />
        </svg>
      );

    case "youtube":
      return (
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="3"
            ry="3"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          />
          <polygon points="10,9 16,12 10,15" fill="currentColor" />
        </svg>
      );

    default:
      return label?.[0] ?? "?";
  }
}

/**
 * Secção de contactos reutilizável (Malta / Anadia).
 *
 * Props:
 *  - id       -> opcional, para anchor
 *  - logo     -> { src, alt }
 *  - columns  -> array de colunas:
 *        { id, title, lines }
 *        lines: array de string OU { id, label, href }
 *  - website  -> { label, href }  (linha central tipo "www.wagtrainingcamp...")
 *  - followLabel -> string (ex: "FOLLOW US")
 *  - socialLinks -> array:
 *        { id, label, href }
 */
export function CampContactsSection({
  id,
  logo,
  columns = [],
  website,
  followLabel = "",
  socialLinks = [],
}) {
  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        {/* ---------- TOPO: LOGO + COLUNAS ---------- */}
        <div className={styles.topRow}>
          {logo && (
            <div className={styles.logoWrapper}>
              <img
                src={logo.src}
                alt={logo.alt}
                className={styles.logoImage}
                loading="lazy"
              />
            </div>
          )}

          {columns.map((column) => (
            <div key={column.id} className={styles.column}>
              {column.title && (
                <h3 className={styles.columnTitle}>{column.title}</h3>
              )}

              {column.lines && column.lines.length > 0 && (
                <ul className={styles.linesList}>
                  {column.lines.map((line, index) => {
                    if (typeof line === "string") {
                      return (
                        <li key={index} className={styles.lineItem}>
                          {line}
                        </li>
                      );
                    }

                    // caso seja { label, href }
                    return (
                      <li key={line.id ?? index} className={styles.lineItem}>
                        <a
                          href={line.href}
                          target="_blank"
                          rel="noreferrer"
                          className={styles.link}
                        >
                          {line.label}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              )}
            </div>
          ))}
        </div>

        {/* ---------- FUNDO: WEBSITE + FOLLOW US ---------- */}
        <div className={styles.bottomRow}>
          {website && website.label && website.href && (
            <a
              href={website.href}
              target="_blank"
              rel="noreferrer"
              className={styles.websiteLink}
            >
              {website.label}
            </a>
          )}

          {followLabel && <p className={styles.followLabel}>{followLabel}</p>}

          {socialLinks.length > 0 && (
            <div className={styles.socialRow}>
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label={social.label}
                >
                  <span className={styles.socialIcon}>
                    {renderSocialIcon(social.id, social.label)}
                  </span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
