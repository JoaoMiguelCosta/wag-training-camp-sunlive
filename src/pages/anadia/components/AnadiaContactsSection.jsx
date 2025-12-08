// src/pages/anadia/components/AnadiaContactsSection.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import { CampContactsSection } from "../../../shared/components/CampContactsSection.jsx";

import styles from "./AnadiaContactsSection.module.css";

export function AnadiaContactsSection() {
  const { contactsSection } = anadiaContent;

  return (
    <div className={styles.sectionWrapper}>
      <CampContactsSection {...contactsSection} />
    </div>
  );
}
