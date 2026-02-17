// src/pages/malta/components/MaltaContentSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import InfoGridSection from "../../../shared/components/InfoGridSection.jsx";
import styles from "./MaltaContentSection.module.css";

export default function MaltaContentSection() {
  const { contentSection } = maltaContent;
  if (!contentSection) return null;

  const { id, title, items } = contentSection;

  return (
    <div id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.titleUnderline} />
      </header>

      {/* 2x2 no desktop (igual ao Anadia) */}
      <InfoGridSection items={items} columns={2} />
    </div>
  );
}
