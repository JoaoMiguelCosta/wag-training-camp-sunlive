// src/pages/home/components/HomeHeader.jsx
import headerLogo from "../../../assets/header/header.png";
import { homeContent } from "../../../config/content/home.content.js";
import styles from "./HomeHeader.module.css";

export function HomeHeader() {
  const { logoAlt, navItems } = homeContent.header;

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <div className={styles.logoWrapper}>
          <img src={headerLogo} alt={logoAlt} className={styles.logo} />
        </div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.id} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
