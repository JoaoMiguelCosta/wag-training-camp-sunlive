import styles from "./InfoGridSection.module.css";

/**
 * Props:
 * - id      -> id da secção (âncora) – opcional
 * - items   -> [{ id, title, lines: string[], isPlaceholder?, placeholderText? }]
 * - columns -> nº de colunas no desktop (3 por omissão)
 */
export default function InfoGridSection({ id, items = [], columns = 3 }) {
  if (!items.length) return null;

  const gridClassName =
    columns === 2
      ? `${styles.grid} ${styles.gridTwo}`
      : `${styles.grid} ${styles.gridThree}`;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.inner}>
        <div className={gridClassName}>
          {items.map((block) => {
            const hasPlaceholder = Boolean(block.isPlaceholder);
            const note = block.placeholderText || "To be defined later";

            return (
              <article key={block.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{block.title}</h3>

                {/* ✅ Se for placeholder, SUBSTITUI o conteúdo */}
                {hasPlaceholder ? (
                  <p className={styles.placeholderNote}>{note}</p>
                ) : (
                  <ul className={styles.list}>
                    {block.lines?.map((text, index) => (
                      <li key={index} className={styles.listItem}>
                        {text}
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
