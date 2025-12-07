// src/pages/malta/Malta.jsx
import styles from "./Malta.module.css";

import { ScrollToTopButton } from "../../shared/components/ScrollToTopButton";
import MaltaHeader from "./components/MaltaHeader.jsx";
import MaltaRegistrationSection from "./components/MaltaRegistrationSection.jsx";
import MaltaTestimonialSection from "./components/MaltaTestimonialSection.jsx";
import MaltaCoachingTeamSection from "./components/MaltaCoachingTeamSection.jsx";
import MaltaProgramSection from "./components/MaltaProgramSection.jsx";

export default function MaltaPage() {
  return (
    <main className={styles.page}>
      <MaltaHeader />
      <MaltaRegistrationSection />
      <MaltaTestimonialSection />
      <MaltaCoachingTeamSection />
      <MaltaProgramSection />

      <ScrollToTopButton />
    </main>
  );
}
