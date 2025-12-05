// src/pages/home/components/HomeFooter.jsx
import { homeContent } from "../../../config/content/home.content.js";
import styles from "./HomeFooter.module.css";

export function HomeFooter() {
  const { text } = homeContent.footer;

  return (
    <footer className={styles.footer}>
      <p className={styles.text}>{text}</p>
    </footer>
  );
}
