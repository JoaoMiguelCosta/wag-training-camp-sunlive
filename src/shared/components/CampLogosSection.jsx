// src/shared/components/CampLogosSection.jsx
import styles from "./CampLogosSection.module.css";

/**
 * Secção de logos reutilizável (Organization / Partners)
 *
 * Props:
 *  - id                -> opcional, para anchor
 *  - variant           -> "malta" | "anadia" (define layout base)
 *  - organizationLogos -> array de { id, src, alt }
 *  - partnersRows      -> array de linhas, cada linha é array de { id, src, alt }
 */
export function CampLogosSection({
  id,
  variant = "malta",
  organizationLogos,
  partnersRows,
}) {
  const configs = {
    malta: {
      organizationCols: 3,
      partnersRows: [3, 3],
    },
    anadia: {
      organizationCols: 3,
      partnersRows: [4],
    },
  };

  const config = configs[variant] ?? configs.malta;

  const organizationSlots =
    organizationLogos && organizationLogos.length
      ? organizationLogos
      : Array.from({ length: config.organizationCols }).map(() => null);

  const partnersSlots =
    partnersRows && partnersRows.length
      ? partnersRows
      : config.partnersRows.map((cols) =>
          Array.from({ length: cols }).map(() => null)
        );

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        {/* ---------- ORGANIZATION ---------- */}
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Organization</h2>

          <div className={`${styles.logosRow} ${styles.cols3}`}>
            {organizationSlots.map((logo, index) => (
              <div key={logo?.id ?? `org-${index}`} className={styles.logoCard}>
                {logo && <img src={logo.src} alt={logo.alt} loading="lazy" />}
              </div>
            ))}
          </div>
        </div>

        {/* ---------- PARTNERS ---------- */}
        <div className={styles.block}>
          <h2 className={styles.blockTitle}>Partners</h2>

          {partnersSlots.map((row, rowIndex) => {
            const colsClass = row.length === 4 ? styles.cols4 : styles.cols3;

            return (
              <div
                key={`partners-row-${rowIndex}`}
                className={`${styles.logosRow} ${colsClass}`}
              >
                {row.map((logo, index) => (
                  <div
                    key={logo?.id ?? `partners-${rowIndex}-${index}`}
                    className={styles.logoCard}
                  >
                    {logo && (
                      <img src={logo.src} alt={logo.alt} loading="lazy" />
                    )}
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
