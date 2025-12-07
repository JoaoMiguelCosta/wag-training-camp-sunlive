// src/pages/malta/components/MaltaCoachingTeamSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import QuoteHighlight from "../../../shared/components/QuoteHighlight.jsx";

import styles from "./MaltaCoachingTeamSection.module.css";

export default function MaltaCoachingTeamSection() {
  const { coachingSection } = maltaContent;

  if (!coachingSection) return null;

  const { id, title, quote, authorName, authorRole, photo, bio } =
    coachingSection;

  return (
    // 👇 wrapper é um <div>, só o QuoteHighlight é <section>
    <div id={id} className={styles.section}>
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
    </div>
  );
}
