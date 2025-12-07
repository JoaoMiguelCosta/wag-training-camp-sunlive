// src/shared/hooks/useCampHeaderNav.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

/**
 * Hook genérico para headers de camp (Malta, Anadia, ...)
 * Recebe o objeto `header` vindo do content:
 *  { logo, navItems, poster, portal }
 */
export function useCampHeaderNav({ header, homePath = "/" }) {
  const navigate = useNavigate();
  const [isPosterOpen, setIsPosterOpen] = useState(false);

  const openPoster = () => setIsPosterOpen(true);
  const closePoster = () => setIsPosterOpen(false);

  const scrollToSection = (sectionId) => {
    if (!sectionId) return;

    const el = document.getElementById(sectionId);
    if (!el) return;

    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const handlePortalClick = () => {
    navigate(homePath);
  };

  return {
    header,
    isPosterOpen,
    openPoster,
    closePoster,
    scrollToSection,
    handlePortalClick,
  };
}
