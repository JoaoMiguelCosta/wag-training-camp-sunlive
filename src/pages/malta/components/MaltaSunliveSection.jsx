// src/pages/malta/components/MaltaSunliveSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import HeroVideoSection from "../../../shared/components/HeroVideoSection.jsx";

import styles from "./MaltaSunliveSection.module.css";

export default function MaltaSunliveSection() {
  const { sunliveSection } = maltaContent;

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
