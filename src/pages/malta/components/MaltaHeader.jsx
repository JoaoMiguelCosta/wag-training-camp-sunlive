// src/pages/malta/components/MaltaHeader.jsx
import {
  CampNavBar,
  CampNavItem,
} from "../../../shared/components/CampNavBar.jsx";
import { useMaltaHeaderNav } from "../hooks/useMaltaHeaderNav.js";

import styles from "./MaltaHeader.module.css";

export default function MaltaHeader() {
  const {
    header,
    isPosterOpen,
    openPoster,
    closePoster,
    scrollToSection,
    handlePortalClick,
  } = useMaltaHeaderNav();

  const { logo, navItems, poster, portal } = header;

  return (
    <>
      {/* NAV SUPERIOR */}
      <CampNavBar
        logo={<img src={logo.src} alt={logo.alt} className={styles.logo} />}
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
              <span className={styles.srOnly}>Fechar poster</span>
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
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
}
