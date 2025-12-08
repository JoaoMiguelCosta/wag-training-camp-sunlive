// src/pages/anadia/components/AnadiaLogosSection.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import { CampLogosSection } from "../../../shared/components/CampLogosSection.jsx";

import styles from "./AnadiaLogosSection.module.css";

export function AnadiaLogosSection() {
  const { logosSection } = anadiaContent;

  return (
    <section id={logosSection.id} className={styles.section}>
      <CampLogosSection
        variant="anadia"
        organizationLogos={logosSection.organization}
        partnersRows={logosSection.partnersRows}
      />
    </section>
  );
}
