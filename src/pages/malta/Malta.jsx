import styles from "./Malta.module.css";
import { maltaContent } from "../../config/content/malta.content.js";

export default function Malta() {
  return (
    <main className={styles.page}>
      <h1>{maltaContent.hero.title}</h1>
      <p>{maltaContent.hero.subtitle}</p>
    </main>
  );
}
