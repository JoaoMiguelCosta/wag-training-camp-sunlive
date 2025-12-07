// src/pages/malta/Malta.jsx
import styles from "./Malta.module.css";

import { ScrollToTopButton } from "../../shared/components/ScrollToTopButton";
import MaltaHeader from "./components/MaltaHeader.jsx";
import MaltaSunliveSection from "./components/MaltaSunliveSection.jsx";
import MaltaRegistrationSection from "./components/MaltaRegistrationSection.jsx";
import MaltaTestimonialSection from "./components/MaltaTestimonialSection.jsx";
import MaltaCoachingTeamSection from "./components/MaltaCoachingTeamSection.jsx";
import MaltaProgramSection from "./components/MaltaProgramSection.jsx";
import MaltaGymStarsSection from "./components/MaltaGymStarsSection.jsx";
import MaltaContentSection from "./components/MaltaContentSection.jsx";
import MaltaHotelSection from "./components/MaltaHotelSection.jsx";


export default function MaltaPage() {
  return (
    <main className={styles.page}>
      <MaltaHeader />

      <MaltaRegistrationSection />
      <MaltaTestimonialSection />
      <MaltaCoachingTeamSection />
      <MaltaProgramSection />
      <MaltaGymStarsSection />
      <MaltaContentSection />
      <MaltaHotelSection />
      <MaltaSunliveSection />

      <ScrollToTopButton />
    </main>
  );
}
