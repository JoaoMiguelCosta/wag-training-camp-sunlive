import styles from "./Home.module.css";
import { homeContent } from "../../config/content/home.content.js";

export default function Home() {
  return (
    <main className={styles.page}>
      <h1>{homeContent.hero.title}</h1>
      <p>{homeContent.hero.subtitle}</p>
    </main>
  );
}
