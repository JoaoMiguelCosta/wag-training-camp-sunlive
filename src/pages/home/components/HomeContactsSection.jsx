// src/pages/home/components/HomeContactsSection.jsx
import { homeContent } from "../../../config/content/home.content.js";
import InfoCard from "../../../shared/components/InfoCard.jsx";
import styles from "./HomeContactsSection.module.css";

const iconsById = {
  email: "✉️",
  phone: "📞", // o novo ícone
};

export function HomeContactsSection() {
  const { title, cards } = homeContent.contactsSection;

  return (
    <section id="contacts" className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.grid}>
        {cards.map((card) => (
          <InfoCard key={card.id} className={styles.cardContent}>
            <span className={styles.icon}>{iconsById[card.id]}</span>

            <h3 className={styles.cardTitle}>{card.title}</h3>

            {/* descrição removida */}

            {card.link && (
              <a href={card.link.href} className={styles.link}>
                {card.link.label}
              </a>
            )}
          </InfoCard>
        ))}
      </div>
    </section>
  );
}
