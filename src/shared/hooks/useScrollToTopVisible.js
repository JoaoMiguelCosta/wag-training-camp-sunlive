// src/shared/hooks/useScrollToTopVisible.js
import { useEffect, useState } from "react";

export function useScrollToTopVisible(threshold = 400) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > threshold);
    }

    handleScroll(); // garante estado correcto no load
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [threshold]);

  return visible;
}
