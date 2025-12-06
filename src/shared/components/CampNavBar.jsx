// src/shared/components/CampNavBar.jsx
import styles from "./CampNavBar.module.css";

/**
 * Header de navegação para páginas de camp (Malta, Anadia, etc.)
 *
 * - `logo`: JSX para o logo (img, svg, etc.)
 * - `children`: botões/links do menu (sem lógica aqui)
 */
export function CampNavBar({ logo, children }) {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        {logo && <div className={styles.logoWrapper}>{logo}</div>}

        <nav className={styles.nav}>{children}</nav>
      </div>
    </header>
  );
}

/**
 * Item de navegação genérico (pill button).
 * Usa o estilo do header da Home.
 */
export function CampNavItem({ children, ...props }) {
  return (
    <button type="button" className={styles.navLink} {...props}>
      {children}
    </button>
  );
}
