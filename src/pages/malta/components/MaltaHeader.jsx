// src/pages/malta/components/MaltaHeader.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import CampHeaderWithPoster from "../../../shared/components/CampHeaderWithPoster.jsx";

import styles from "./MaltaHeader.module.css";

export default function MaltaHeader() {
  const { header } = maltaContent;

  return (
    <CampHeaderWithPoster
      header={header}
      homePath="/"
      logoClassName={styles.logo}
    />
  );
}
