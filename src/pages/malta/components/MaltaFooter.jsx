// src/pages/malta/components/MaltaFooter.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import { CampFooter } from "../../../shared/components/CampFooter.jsx";

export function MaltaFooter() {
  const { text } = maltaContent.footer;

  return <CampFooter text={text} />;
}
