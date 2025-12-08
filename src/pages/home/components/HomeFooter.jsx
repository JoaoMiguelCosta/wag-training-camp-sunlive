import { homeContent } from "../../../config/content/home.content.js";
import { CampFooter } from "../../../shared/components/CampFooter.jsx";

export function HomeFooter() {
  const { text } = homeContent.footer;

  return <CampFooter text={text} />;
}
