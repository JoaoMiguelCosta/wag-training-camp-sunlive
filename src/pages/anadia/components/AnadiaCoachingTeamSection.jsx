// src/pages/malta/components/MaltaCoachingTeamSection.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import QuoteHighlight from "../../../shared/components/QuoteHighlight.jsx";

import styles from "./AnadiaCoachingTeamSection.module.css";

export default function AnadiaCoachingTeamSection() {
  const { coachingTeamSection } = anadiaContent;
  if (!coachingTeamSection) return null;

  const { id, title, quote, authorName, authorRole, photo, bio } =
    coachingTeamSection;

  return (
    <section id={id} className={styles.section}>
      <header className={styles.header}>
        <h2 className={styles.title}>{title}</h2>
        <div className={styles.titleUnderline} />
      </header>

      <QuoteHighlight
        quote={quote}
        authorName={authorName}
        authorRole={authorRole}
        avatarSrc={photo?.src}
        avatarAlt={photo?.alt}
        bioLabel={bio?.label}
        bioHref={bio?.href}
      />
    </section>
  );
}
