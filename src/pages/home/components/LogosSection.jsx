// src/pages/home/components/LogosSection.jsx
import sunliveGroupLogo from "../../../assets/logos/sunlive-group.png";
import estalagemLogo from "../../../assets/logos/estalagem.png";
import aceLogo from "../../../assets/logos/ace.png";
import maltaLogo from "../../../assets/logos/malta.png";
import kuwaitLogo from "../../../assets/logos/kuwait.png";
import catarLogo from "../../../assets/logos/catar.png";
import headerLogo from "../../../assets/header/header.png";

import styles from "./LogosSection.module.css";

export function LogosSection() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.grid}>
          {/* 1ª linha */}
          <div className={styles.logoCell}>
            <img
              src={sunliveGroupLogo}
              alt="Sunlive Group"
              className={styles.logoSmall}
            />
          </div>
          <div className={styles.logoCell}>
            <img
              src={estalagemLogo}
              alt="Estalagem de Sangalhos"
              className={styles.logoSmall}
            />
          </div>
          <div className={styles.logoCell}>
            <img src={aceLogo} alt="ACE" className={styles.logoSmall} />
          </div>

          {/* 2ª linha */}
          <div className={styles.logoCell}>
            <img
              src={maltaLogo}
              alt="Sunlive Malta"
              className={styles.logoSmall}
            />
          </div>
          <div className={styles.logoCell}>
            <img
              src={kuwaitLogo}
              alt="Sunlive Kuwait"
              className={styles.logoSmall}
            />
          </div>
          <div className={styles.logoCell}>
            <img
              src={catarLogo}
              alt="Sunlive Qatar"
              className={styles.logoSmall}
            />
          </div>

          {/* 3ª linha – header a toda a largura */}
          <div className={styles.headerCell}>
            <img
              src={headerLogo}
              alt="Sunlive International WAG Training Camp"
              className={styles.headerLogo}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
