import { anadiaContent } from "../../../config/content/anadia.content.js";
import HotelHighlight from "../../../shared/components/HotelHighlight.jsx";

import restaurantHotel from "../../../assets/background-anadia/restautant-hotel.jpg";
import styles from "./AnadiaHotelSection.module.css";

export default function AnadiaHotelSection() {
  const { hotelSection } = anadiaContent;
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
        cardBgSrc={restaurantHotel} // ✅ novo
      />
    </div>
  );
}
