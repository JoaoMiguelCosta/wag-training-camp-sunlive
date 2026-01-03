import styles from "./ProgramScheduleGrid.module.css";

export default function ProgramScheduleGrid({ id, columns = [] }) {
  if (!columns.length) return null;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.grid}>
        {columns.map((column) => {
          const hasPlaceholder = (column.items || []).some(
            (i) => i.isPlaceholder
          );
          const placeholder = (column.items || []).find((i) => i.isPlaceholder);

          return (
            <article key={column.id} className={styles.dayColumn}>
              {column.title && (
                <h3 className={styles.dayTitle}>{column.title}</h3>
              )}

              {/* ✅ Se houver placeholder, ele SUBSTITUI a lista inteira */}
              {hasPlaceholder ? (
                placeholder?.description ? (
                  <p className={styles.placeholderNote}>
                    {placeholder.description}
                  </p>
                ) : null
              ) : (
                Array.isArray(column.items) &&
                column.items.length > 0 && (
                  <ul className={styles.itemsList}>
                    {column.items.map((item, index) => (
                      <li key={index} className={styles.itemRow}>
                        {/* span da hora existe SEMPRE, mesmo vazio, para alinhar */}
                        <span className={styles.time}>
                          {item.time || "\u00A0"}
                        </span>

                        <span className={styles.description}>
                          {item.description}
                        </span>
                      </li>
                    ))}
                  </ul>
                )
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
