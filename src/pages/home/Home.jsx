// src/pages/home/Home.jsx
import { HomeHeader } from "./components/HomeHeader";
import { UniqueCampSection } from "./components/UniqueCampSection";
import { SunliveGroupSection } from "./components/SunliveGroupSection";
import { LogosSection } from "./components/LogosSection";
import { HomeContactsSection } from "./components/HomeContactsSection";
import { HomeFooter } from "./components/HomeFooter";

// 👇 ESTE IMPORT TEM DE EXISTIR
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <HomeHeader />
      <UniqueCampSection />
      <SunliveGroupSection />
      <HomeContactsSection />
      <LogosSection />

      <HomeFooter />
    </main>
  );
}
