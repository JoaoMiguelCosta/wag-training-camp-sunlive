import styles from "./Anadia.module.css";
import { anadiaContent } from "../../config/content/anadia.content.js";

export default function Anadia() {
  return (
    <main className={styles.page}>
      <h1>{anadiaContent.hero.title}</h1>
      <p>{anadiaContent.hero.subtitle}</p>
    </main>
  );
}
