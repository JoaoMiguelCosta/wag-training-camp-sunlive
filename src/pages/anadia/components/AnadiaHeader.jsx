
import { anadiaContent } from "../../../config/content/anadia.content.js";
import CampHeaderWithPoster from "../../../shared/components/CampHeaderWithPoster.jsx";

import styles from "./AnadiaHeader.module.css";

export default function AnadiaHeader() {
  const { header } = anadiaContent;

  return (
    <CampHeaderWithPoster
      header={header}
      homePath="/"
      logoClassName={styles.logo}
    />
  );
}
