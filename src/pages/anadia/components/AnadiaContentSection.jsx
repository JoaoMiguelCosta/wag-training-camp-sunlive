// src/pages/anadia/components/AnadiaContentSection.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import InfoGridSection from "../../../shared/components/InfoGridSection.jsx";
import styles from "./AnadiaContentSection.module.css";

export default function AnadiaContentSection() {
  const { contentSection } = anadiaContent;
  if (!contentSection) return null;

  const { id, title, items } = contentSection;

  return (
    <div id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.titleUnderline} />
      </header>

      {/* 2x2 no desktop */}
      <InfoGridSection items={items} columns={2} />
    </div>
  );
}
