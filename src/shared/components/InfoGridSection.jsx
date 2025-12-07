// src/shared/components/InfoGridSection.jsx
import styles from "./InfoGridSection.module.css";

/**
 * Props:
 * - id      -> id da secção (âncora) – opcional
 * - items   -> [{ id, title, lines: string[] }]
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
          {items.map((block) => (
            <article key={block.id} className={styles.card}>
              <h3 className={styles.cardTitle}>{block.title}</h3>
              <ul className={styles.list}>
                {block.lines?.map((text, index) => (
                  <li key={index} className={styles.listItem}>
                    {text}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
