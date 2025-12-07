// src/pages/malta/components/MaltaHotelSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import HotelHighlight from "../../../shared/components/HotelHighlight.jsx";

import styles from "./MaltaHotelSection.module.css";

export default function MaltaHotelSection() {
  const { hotelSection } = maltaContent;

  if (!hotelSection) return null;

  const {
    id,
    title,
    videoSrc,
    videoTitle,
    addressTitle,
    addressLines,
    contactsTitle,
    contactsLines,
    websiteLabel,
    websiteHref,
  } = hotelSection;

  return (
    <div id={id} className={styles.section}>
      <HotelHighlight
        title={title}
        videoSrc={videoSrc}
        videoTitle={videoTitle}
        addressTitle={addressTitle}
        addressLines={addressLines}
        contactsTitle={contactsTitle}
        contactsLines={contactsLines}
        websiteLabel={websiteLabel}
        websiteHref={websiteHref}
      />
    </div>
  );
}
