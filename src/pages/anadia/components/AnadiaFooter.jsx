// src/pages/anadia/components/AnadiaFooter.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import { CampFooter } from "../../../shared/components/CampFooter.jsx";

export function AnadiaFooter() {
  const { text } = anadiaContent.footer;

  return <CampFooter text={text} />;
}
