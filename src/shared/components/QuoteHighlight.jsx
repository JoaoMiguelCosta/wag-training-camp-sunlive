// src/shared/components/QuoteHighlight.jsx
import styles from "./QuoteHighlight.module.css";

/**
 * Componente reutilizável para testemunhos / citações.
 *
 * Props sugeridas:
 * - quote        -> texto principal da citação
 * - authorName   -> nome da pessoa
 * - authorRole   -> cargo / descrição curta
 * - avatarSrc    -> URL da foto
 * - avatarAlt    -> alt da foto
 * - bioLabel     -> texto do link/“botão” (ex: "Biography")
 * - bioHref      -> link para o PDF (download ou nova aba)
 */
export default function QuoteHighlight({
  quote,
  authorName,
  authorRole,
  avatarSrc,
  avatarAlt,
  bioLabel,
  bioHref,
}) {
  return (
    <section className={styles.section}>
      {/* Bloco da citação */}
      <div className={styles.quoteWrapper}>
        <p className={styles.quoteText}>{quote}</p>
      </div>

      {/* Bloco do autor */}
      <div className={styles.authorBlock}>
        {avatarSrc && (
          <div className={styles.avatarRing}>
            <img
              src={avatarSrc}
              alt={avatarAlt}
              className={styles.avatar}
              loading="lazy"
            />
          </div>
        )}

        {authorName && <h3 className={styles.authorName}>{authorName}</h3>}

        {authorRole && <p className={styles.authorRole}>{authorRole}</p>}

        {/* Botão/Link opcional para PDF (ex: Biography) */}
        {bioHref && bioLabel && (
          <a
            href={bioHref}
            className={styles.bioLink}
            // o parent pode depois alterar para target="_blank" se quiser
            download
          >
            {bioLabel}
          </a>
        )}
      </div>
    </section>
  );
}
