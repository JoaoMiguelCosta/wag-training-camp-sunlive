// src/pages/home/components/HomeContactsSection.jsx
import { homeContent } from "../../../config/content/home.content.js";
import InfoCard from "../../../shared/components/InfoCard.jsx";
import styles from "./HomeContactsSection.module.css";

const getIcon = (id) => (id.includes("email") ? "✉️" : "📞");

const sortEmailFirst = (a, b) =>
  (a.id.includes("email") ? 0 : 1) - (b.id.includes("email") ? 0 : 1);

export function HomeContactsSection() {
  const { title, cards } = homeContent.contactsSection;

  const malta = cards.filter((c) => c.group === "malta").sort(sortEmailFirst);
  const portugal = cards
    .filter((c) => c.group === "portugal")
    .sort(sortEmailFirst);

  return (
    <section id="contacts" className={styles.section}>
      <div className={styles.inner}>
        <h2 className={styles.title}>{title}</h2>

        {/* 🇲🇹 MALTA */}
        <h3 className={styles.groupTitle}>Malta Event</h3>
        <div className={styles.grid}>
          {malta.map((card) => (
            <InfoCard key={card.id} className={styles.cardContent}>
              <span className={styles.icon}>{getIcon(card.id)}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>

              {card.link && (
                <a href={card.link.href} className={styles.link}>
                  {card.link.label}
                </a>
              )}
            </InfoCard>
          ))}
        </div>

        {/* 🇵🇹 PORTUGAL */}
        <h3 className={styles.groupTitle}>Portugal Event</h3>
        <div className={styles.grid}>
          {portugal.map((card) => (
            <InfoCard key={card.id} className={styles.cardContent}>
              <span className={styles.icon}>{getIcon(card.id)}</span>
              <h3 className={styles.cardTitle}>{card.title}</h3>

              {card.link && (
                <a href={card.link.href} className={styles.link}>
                  {card.link.label}
                </a>
              )}
            </InfoCard>
          ))}
        </div>
      </div>
    </section>
  );
}
