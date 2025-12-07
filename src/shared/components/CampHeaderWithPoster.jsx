// src/shared/components/CampHeaderWithPoster.jsx
import { CampNavBar, CampNavItem } from "./CampNavBar.jsx";

import { useCampHeaderNav } from "../hooks/useCampHeaderNav.js";
import styles from "./CampHeaderWithPoster.module.css";

/**
 * Header genérico com:
 * - logo
 * - navegação
 * - botão Poster (abre overlay)
 * - botão Portal (volta à Home)
 *
 * Props:
 *  - header  -> objeto vindo do content (logo, navItems, poster, portal)
 *  - homePath -> para onde o Portal navega (ex: "/")
 *  - logoClassName -> classe extra para controlar tamanho do logo por página
 */
export default function CampHeaderWithPoster({
  header: headerConfig,
  homePath = "/",
  logoClassName,
}) {
  const {
    header,
    isPosterOpen,
    openPoster,
    closePoster,
    scrollToSection,
    handlePortalClick,
  } = useCampHeaderNav({ header: headerConfig, homePath });

  const { logo, navItems, poster, portal } = header;

  return (
    <>
      {/* NAV SUPERIOR */}
      <CampNavBar
        logo={
          <img
            src={logo.src}
            alt={logo.alt}
            className={`${styles.logoBase} ${logoClassName ?? ""}`.trim()}
          />
        }
      >
        {navItems.map((item) => (
          <CampNavItem key={item.id} onClick={() => scrollToSection(item.id)}>
            {item.label}
          </CampNavItem>
        ))}

        {/* POSTER -> abre overlay */}
        <CampNavItem onClick={openPoster}>{poster.label}</CampNavItem>

        {/* PORTAL -> volta à Home */}
        <CampNavItem onClick={handlePortalClick}>{portal.label}</CampNavItem>
      </CampNavBar>

      {/* OVERLAY DO POSTER */}
      {isPosterOpen && (
        <div className={styles.posterOverlay} onClick={closePoster}>
          <div
            className={styles.posterContent}
            onClick={(event) => event.stopPropagation()} // não fechar ao clicar na imagem
          >
            <button
              type="button"
              className={styles.posterClose}
              onClick={closePoster}
            >
              <span aria-hidden="true">&times;</span>
              <span className={styles.srOnly}>Close poster</span>
            </button>

            <img
              src={poster.image.src}
              alt={poster.image.alt}
              className={styles.posterImage}
            />

            <button
              type="button"
              className={styles.posterCloseBottom}
              onClick={closePoster}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
