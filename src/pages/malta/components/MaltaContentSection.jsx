// src/pages/malta/components/MaltaContentSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import InfoGridSection from "../../../shared/components/InfoGridSection.jsx";

import styles from "./MaltaContentSection.module.css";

export default function MaltaContentSection() {
  const { contentSection } = maltaContent;

  if (!contentSection) return null;

  const { id, title, items } = contentSection;

  return (
    // wrapper com o id da âncora; o InfoGridSection faz só o cartão
    <div id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.titleUnderline} />
      </header>

      <InfoGridSection items={items} />
    </div>
  );
}
