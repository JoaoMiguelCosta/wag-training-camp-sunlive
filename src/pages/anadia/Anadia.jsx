// src/pages/anadia/Anadia.jsx
import styles from "./Anadia.module.css";

import { ScrollToTopButton } from "../../shared/components/ScrollToTopButton";
import AnadiaHeader from "./components/AnadiaHeader.jsx";
import AnadiaRegistrationSection from "./components/AnadiaRegistrationSection.jsx";
import AnadiaCoachingTeamSection from "./components/AnadiaCoachingTeamSection.jsx";
import AnadiaProgramSection from "./components/AnadiaProgramSection.jsx";
import AnadiaGymStarsSection from "./components/AnadiaGymStarsSection.jsx";
import AnadiaContentSection from "./components/AnadiaContentSection.jsx";
import AnadiaHotelSection from "./components/AnadiaHotelSection.jsx";
import AnadiaSunliveSection from "./components/AnadiaSunliveSection.jsx";

export default function AnadiaPage() {
  return (
    <main className={styles.page}>
      <AnadiaHeader />
      <AnadiaRegistrationSection />
      <AnadiaCoachingTeamSection />
      <AnadiaProgramSection />
      <AnadiaGymStarsSection />
      <AnadiaContentSection />
      <AnadiaHotelSection />
      <AnadiaSunliveSection />

      <ScrollToTopButton />
    </main>
  );
}
