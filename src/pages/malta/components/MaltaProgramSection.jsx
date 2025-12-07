// src/pages/malta/components/MaltaProgramSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import ImageTitleBanner from "../../../shared/components/ImageTitleBanner.jsx";
import ProgramScheduleGrid from "../../../shared/components/ProgramScheduleGrid.jsx";

import styles from "./MaltaProgramSection.module.css";

export default function MaltaProgramSection() {
  const { programSection } = maltaContent;

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
