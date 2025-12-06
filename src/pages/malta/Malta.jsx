// src/pages/malta/MaltaPage.jsx
import styles from "./Malta.module.css";
import { ScrollToTopButton } from "../../shared/components/ScrollToTopButton";
import MaltaHeader from "./components/MaltaHeader";
import MaltaRegistrationSection from "./components/MaltaRegistrationSection.jsx";

export default function MaltaPage() {
  return (
    <main className={styles.page}>
      <MaltaHeader />
      <MaltaRegistrationSection />

      <ScrollToTopButton />
    </main>
  );
}
