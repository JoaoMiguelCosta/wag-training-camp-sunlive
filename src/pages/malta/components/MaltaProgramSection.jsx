// src/pages/malta/components/MaltaProgramSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import ImageTitleBanner from "../../../shared/components/ImageTitleBanner.jsx";
import ProgramScheduleGrid from "../../../shared/components/ProgramScheduleGrid.jsx";

import styles from "./MaltaProgramSection.module.css";

export default function MaltaProgramSection({
  program = maltaContent.programSection,
}) {
  if (!program) return null;

  const { id, banner, schedule } = program;

  const cleanedColumns =
    schedule?.columns?.map((col) => ({
      ...col,
      items: Array.isArray(col.items)
        ? col.items.filter((item) => !item?.isPlaceholder)
        : [],
    })) ?? [];

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

      {schedule?.id && cleanedColumns.length > 0 && (
        <ProgramScheduleGrid id={schedule.id} columns={cleanedColumns} />
      )}
    </section>
  );
}
