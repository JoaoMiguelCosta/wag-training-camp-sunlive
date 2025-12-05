// src/pages/home/components/UniqueCampSection.jsx
import { homeContent } from "../../../config/content/home.content.js";
import PosterCard from "../../../shared/components/PosterCard.jsx";

// 👉 agora a ir buscar às banners-home
import bannerMalta from "../../../assets/banners-home/banner-malta.png";
import bannerAnadia from "../../../assets/banners-home/banner-anadia.png";

import styles from "./UniqueCampSection.module.css";

const posterImagesById = {
  malta: bannerMalta,
  anadia: bannerAnadia,
};

export function UniqueCampSection() {
  const { title, camps } = homeContent.uniqueCampSection;

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{title}</h2>

      <div className={styles.grid}>
        {camps.map((camp) => (
          <PosterCard
            key={camp.id}
            imageSrc={posterImagesById[camp.id]}
            alt={camp.posterAlt}
            buttonLabel={camp.buttonLabel}
            buttonHref={camp.href}
          />
        ))}
      </div>
    </section>
  );
}
