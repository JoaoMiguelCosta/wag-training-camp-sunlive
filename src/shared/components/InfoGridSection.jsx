import { Fragment } from "react";
import styles from "./InfoGridSection.module.css";

/**
 * Props:
 * - id      -> id da secção (âncora) – opcional
 * - items   -> [{ id, title, lines: string[], isPlaceholder?, placeholderText? }]
 * - columns -> nº de colunas no desktop (3 por omissão)
 */

const CARD_HEADING_LABELS = [
  "REGISTRATION",
  "PRICES",
  "THOSE PRICES INCLUDE",
  "THOSE PRINCES INCLUDE", // typo comum
  "THE BANK DETAILS",
];

const SUBHEAD_LABELS = ["GYMNASTS", "COACHES", "FAMILY"];

const SUBHEAD_PREFIXES = [
  "EXTRA NIGHTS AT ESTALAGEM DE SANGALHOS",
  "EXTRA MEALS",
  "AVAILABLE UPON REQUEST, BUT NOT INCLUDED IN THE PRICE",
  "TRANSFER TO/FROM LISBON AIRPORT",
];


function normalizeForMatch(str) {
  return String(str ?? "")
    .trim()
    .toUpperCase()
    .replace(/[★►»]/g, "")
    .replace(/[:]/g, "")
    .replace(/\s+/g, " ");
}

function isCardHeadingText(text) {
  const norm = normalizeForMatch(text);
  return CARD_HEADING_LABELS.some((label) => norm === normalizeForMatch(label));
}

function isSubheadingText(text) {
  const norm = normalizeForMatch(text);

  if (SUBHEAD_LABELS.some((label) => norm === normalizeForMatch(label))) {
    return true;
  }

  return SUBHEAD_PREFIXES.some((prefix) =>
    norm.startsWith(normalizeForMatch(prefix)),
  );
}

function splitCardTitle(rawTitle) {
  const t = String(rawTitle ?? "").trim();
  if (!t) return { icon: null, label: "" };

  const first = t[0];
  const hasIcon = first === "★" || first === "►" || first === "»";
  const icon = hasIcon ? first : null;

  let label = hasIcon ? t.slice(1).trim() : t;
  label = label.replace(/:\s*$/, "");
  label = label.toUpperCase();

  return { icon, label };
}

function isExtraMealsLine(text) {
  const norm = normalizeForMatch(text);
  return norm.startsWith(normalizeForMatch("EXTRA MEALS"));
}

function splitKeyValue(text) {
  const idx = text.indexOf(":");
  if (idx <= 0) return null;

  const key = text.slice(0, idx).trim();
  const value = text.slice(idx + 1).trim();

  if (!key || !value) return null;
  return { key, value };
}

function parseLine(raw) {
  const text = String(raw ?? "").trim();
  if (!text) return { kind: "spacer", text: "" };

  if (text.startsWith("=")) {
    const t = text.replace(/^=\s*/, "").trim();
    if (isSubheadingText(t)) return { kind: "subheading", text: t };
    return { kind: "heading", text: t };
  }

  if (text.startsWith("-")) {
    return { kind: "bullet", text: text.replace(/^-+\s*/, "") };
  }

  // ✅ Caso especial: "EXTRA MEALS: €25" -> subheading + bullet(€25)
  if (isExtraMealsLine(text) && text.includes(":")) {
    const [left, ...rest] = text.split(":");
    const value = rest.join(":").trim();
    return { kind: "subheadingWithValue", text: left.trim(), value };
  }

  if (isSubheadingText(text)) {
    return { kind: "subheading", text };
  }

  if (isCardHeadingText(text)) {
    return { kind: "heading", text };
  }

  return { kind: "bullet", text };
}

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

            const { icon, label } = splitCardTitle(block.title);
            const isBankBlock = block.id === "bank";

            return (
              <article key={block.id} className={styles.card}>
                <h3 className={styles.cardTitle}>
                  {icon && (
                    <span className={styles.cardTitleIcon} aria-hidden="true">
                      {icon}
                    </span>
                  )}
                  <span className={styles.cardTitleText}>{label}</span>
                </h3>

                {hasPlaceholder ? (
                  <p className={styles.placeholderNote}>{note}</p>
                ) : (
                  <ul className={styles.list}>
                    {block.lines?.map((raw, index) => {
                      const line = parseLine(raw);

                      if (line.kind === "spacer") {
                        return <li key={index} className={styles.spacer} />;
                      }

                      if (line.kind === "heading") {
                        return (
                          <li key={index} className={styles.listHeading}>
                            {String(line.text)
                              .toUpperCase()
                              .replace(/[:]\s*$/, "")}
                          </li>
                        );
                      }

                      if (line.kind === "subheadingWithValue") {
                        const sub = String(line.text)
                          .toUpperCase()
                          .replace(/[:]\s*$/, "");
                        const value = String(line.value ?? "").trim();

                        return (
                          <Fragment key={index}>
                            <li className={styles.listSubheading}>
                              <span
                                className={styles.subheadingIcon}
                                aria-hidden="true"
                              >
                                ◆
                              </span>
                              <span>{sub}</span>
                            </li>

                            {value ? (
                              <li className={styles.listItem}>{value}</li>
                            ) : null}
                          </Fragment>
                        );
                      }

                      if (line.kind === "subheading") {
                        const sub = String(line.text).toUpperCase();
                        const clean = sub.replace(/[:]\s*$/, "");
                        return (
                          <li key={index} className={styles.listSubheading}>
                            <span
                              className={styles.subheadingIcon}
                              aria-hidden="true"
                            >
                              ◆
                            </span>
                            <span>{clean}</span>
                          </li>
                        );
                      }

                      // ✅ BULLET normal (mas no BANK faz key/value destacado)
                      const text = String(line.text ?? "");
                      const kv = isBankBlock ? splitKeyValue(text) : null;

                      if (kv) {
                        return (
                          <li key={index} className={styles.listItem}>
                            <span className={styles.kvKey}>
                              {kv.key.toUpperCase()}
                            </span>
                            <span className={styles.kvSep}>:</span>{" "}
                            <span className={styles.kvValue}>{kv.value}</span>
                          </li>
                        );
                      }

                      return (
                        <li key={index} className={styles.listItem}>
                          {text}
                        </li>
                      );
                    })}
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
