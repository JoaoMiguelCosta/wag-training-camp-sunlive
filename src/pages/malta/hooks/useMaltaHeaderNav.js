// src/pages/malta/hooks/useMaltaHeaderNav.js
import { useCallback, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { maltaContent } from "../../../config/content/malta.content.js";

export function useMaltaHeaderNav() {
  const { header } = maltaContent;
  const navigate = useNavigate();

  const [isPosterOpen, setIsPosterOpen] = useState(false);

  const scrollToSection = useCallback((sectionId) => {
    if (!sectionId) return;

    const target = document.getElementById(sectionId);
    if (!target) return;

    const headerOffsetVar = getComputedStyle(document.documentElement)
      .getPropertyValue("--header-offset")
      .trim();

    const headerOffset = headerOffsetVar.endsWith("rem")
      ? parseFloat(headerOffsetVar) * 16
      : parseFloat(headerOffsetVar) || 0;

    const elementTop = target.getBoundingClientRect().top + window.scrollY;
    const scrollTo = elementTop - headerOffset;

    window.scrollTo({
      top: scrollTo,
      behavior: "smooth",
    });
  }, []);

  const handlePortalClick = useCallback(() => {
    const portalPath = header.portal?.homePath || "/";
    navigate(portalPath);
  }, [navigate, header.portal?.homePath]);

  const openPoster = useCallback(() => {
    setIsPosterOpen(true);
  }, []);

  const closePoster = useCallback(() => {
    setIsPosterOpen(false);
  }, []);

  // fechar com ESC
  useEffect(() => {
    if (!isPosterOpen) return;

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setIsPosterOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isPosterOpen]);

  return {
    header,
    isPosterOpen,
    openPoster,
    closePoster,
    scrollToSection,
    handlePortalClick,
  };
}
