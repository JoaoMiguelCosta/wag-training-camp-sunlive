// src/shared/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // sempre que o path muda, volta ao topo
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
