import { HomeHeader } from "./components/HomeHeader";
import { UniqueCampSection } from "./components/UniqueCampSection";
import { SunliveGroupSection } from "./components/SunliveGroupSection";
import { LogosSection } from "./components/LogosSection";
import { HomeContactsSection } from "./components/HomeContactsSection";
import { HomeFooter } from "./components/HomeFooter";
import { ScrollToTopButton } from "../../shared/components/ScrollToTopButton";

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

      {/* botão flutuante para voltar ao topo / #home */}
      <ScrollToTopButton />
    </main>
  );
}
