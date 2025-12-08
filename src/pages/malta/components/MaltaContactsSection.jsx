// src/pages/malta/components/MaltaContactsSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import { CampContactsSection } from "../../../shared/components/CampContactsSection.jsx";

import styles from "./MaltaContactsSection.module.css";

export function MaltaContactsSection() {
  const { contactsSection } = maltaContent;

  return (
    <div id={contactsSection.id} className={styles.anchorWrapper}>
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
