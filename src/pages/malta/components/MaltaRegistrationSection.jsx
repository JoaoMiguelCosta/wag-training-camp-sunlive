// src/pages/malta/components/MaltaRegistrationSection.jsx
import { maltaContent } from "../../../config/content/malta.content.js";
import CampRegistrationSection from "../../../shared/components/CampRegistrationSection.jsx";

export default function MaltaRegistrationSection() {
  const { registrationSection } = maltaContent;
  const { id, banner, ribbonText, buttons } = registrationSection;

  const handleClick = (button) => {
    // no futuro: abrir formulário certo (button.formKey)
    console.log("Malta registration button clicked:", button.formKey);
  };

  return (
    <CampRegistrationSection
      id={id}
      banner={banner}
      ribbonText={ribbonText}
      buttons={buttons}
      onButtonClick={handleClick}
    />
  );
}
