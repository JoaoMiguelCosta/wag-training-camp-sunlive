// src/pages/malta/components/MaltaProgramSection.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import ImageTitleBanner from "../../../shared/components/ImageTitleBanner.jsx";
import ProgramScheduleGrid from "../../../shared/components/ProgramScheduleGrid.jsx";

import styles from "./AnadiaProgramSection.module.css";

export default function AnadiaProgramSection() {
  const { programSection } = anadiaContent;

  if (!programSection) return null;

  const { id, banner, schedule } = programSection;

  return (
    <section id={id} className={styles.section}>
      {banner && (
        <ImageTitleBanner
          id={`${id}-banner`}
          title={banner.title}
          backgroundSrc={banner.background?.src}
          backgroundAlt={banner.background?.alt}
        />
      )}

      {schedule &&
        Array.isArray(schedule.columns) &&
        schedule.columns.length > 0 && (
          <ProgramScheduleGrid id={schedule.id} columns={schedule.columns} />
        )}
    </section>
  );
}
