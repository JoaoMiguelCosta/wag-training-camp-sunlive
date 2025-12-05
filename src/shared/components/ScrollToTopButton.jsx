// src/shared/components/ScrollToTopButton.jsx
import styles from "./ScrollToTopButton.module.css";
import { useScrollToTopVisible } from "../hooks/useScrollToTopVisible";

export function ScrollToTopButton() {
  const visible = useScrollToTopVisible(400);

  function handleClick() {
    const homeSection = document.getElementById("home");

    if (homeSection) {
      homeSection.scrollIntoView({ behavior: "smooth" });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  if (!visible) return null;

  return (
    <button
      type="button"
      className={styles.button}
      onClick={handleClick}
      aria-label="Voltar ao topo"
    >
      <span className={styles.arrow} />
    </button>
  );
}
