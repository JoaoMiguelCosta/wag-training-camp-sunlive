// src/pages/anadia/components/AnadiaRegistrationSection.jsx
import { anadiaContent } from "../../../config/content/anadia.content.js";
import CampRegistrationSection from "../../../shared/components/CampRegistrationSection.jsx";

export default function AnadiaRegistrationSection() {
  const { registrationSection } = anadiaContent;
  const { id, banner, ribbonText, buttons } = registrationSection;

  const handleClick = (button) => {
    // no futuro: abrir formulário certo (button.formKey)
    console.log("Anadia registration button clicked:", button.formKey);
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
