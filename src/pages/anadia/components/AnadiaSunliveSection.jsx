// src/pages/malta/components/MaltaSunliveSection.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import HeroVideoSection from "../../../shared/components/HeroVideoSection.jsx";

import styles from "./AnadiaSunliveSection.module.css";

export default function AnadiaSunliveSection() {
  const { sunliveSection } = anadiaContent;

  if (!sunliveSection) return null;

  const { id, title, description, background, video, pdf, website } =
    sunliveSection;

  return (
    <section
      id={id}
      className={styles.section}
      style={
        background?.src
          ? {
              backgroundImage: `url(${background.src})`,
            }
          : undefined
      }
    >
      <HeroVideoSection
        title={title}
        description={description}
        videoSrc={video?.src}
        videoTitle={video?.title}
        pdfLabel={pdf?.label}
        pdfHref={pdf?.href}
        siteLabel={website?.label}
        siteHref={website?.href}
      />
    </section>
  );
}
