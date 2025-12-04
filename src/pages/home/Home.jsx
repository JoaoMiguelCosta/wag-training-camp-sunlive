// src/pages/home/Home.jsx
import { HomeHeader } from "./components/HomeHeader";
import { UniqueCampSection } from "./components/UniqueCampSection";
import { SunliveGroupSection } from "./components/SunliveGroupSection";
import styles from "./Home.module.css";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <HomeHeader />
      <UniqueCampSection />
      <SunliveGroupSection />
    </main>
  );
}
