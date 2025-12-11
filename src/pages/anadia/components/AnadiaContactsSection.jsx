// src/pages/anadia/components/AnadiaContactsSection.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import { CampContactsSection } from "../../../shared/components/CampContactsSection.jsx";

import styles from "./AnadiaContactsSection.module.css";

export function AnadiaContactsSection() {
  const { contactsSection } = anadiaContent;

  return (
    <div id={contactsSection.id} className={styles.sectionWrapper}>
      <CampContactsSection
        logo={contactsSection.logo}
        columns={contactsSection.columns}
        website={contactsSection.website}
        followLabel={contactsSection.followLabel}
        socialLinks={contactsSection.socialLinks}
      />
    </div>
  );
}
