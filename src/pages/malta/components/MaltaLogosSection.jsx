// src/pages/malta/components/MaltaLogosSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import { CampLogosSection } from "../../../shared/components/CampLogosSection.jsx";

import styles from "./MaltaLogosSection.module.css";

export function MaltaLogosSection() {
  const { logosSection } = maltaContent;

  return (
    <section id={logosSection.id} className={styles.section}>
      <CampLogosSection
        variant="malta"
        organizationLogos={logosSection.organization}
        partnersRows={logosSection.partnersRows}
      />
    </section>
  );
}
