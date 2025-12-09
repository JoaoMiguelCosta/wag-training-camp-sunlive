// src/pages/malta/components/MaltaRegistrationSection.jsx
import { useState } from "react";
import { maltaContent } from "../../../config/content/malta.content.js";
import CampRegistrationSection from "../../../shared/components/CampRegistrationSection.jsx";
import { GymnastRegistrationWizard } from "../../../shared/components/GymnastRegistrationWizard.jsx";
import { CoachRegistrationWizard } from "../../../shared/components/CoachRegistrationWizard.jsx";
import { FamilyRegistrationWizard } from "../../../shared/components/FamilyRegistrationWizard.jsx";

export default function MaltaRegistrationSection() {
  const { registrationSection, contentSection } = maltaContent;
  const { id, banner, ribbonText, buttons } = registrationSection;

  const [openForm, setOpenForm] = useState(null);

  const baseParagraphs = contentSection.items.flatMap((item) => [
    item.title,
    ...item.lines,
    "",
  ]);

  const gymnastInfo = {
    title: "Gymnasts / Ginastas | WAG Training Camp, Malta - 2026",
    paragraphs: baseParagraphs,
  };

  const coachInfo = {
    title: "Coaches / Treinadores | WAG Training Camp, Malta - 2026",
    paragraphs: baseParagraphs,
  };

  const familyInfo = {
    title: "Families / Famílias | WAG Training Camp, Malta - 2026",
    paragraphs: baseParagraphs,
  };

  const campOptions = [
    {
      value: "14th - 19th July 2026",
      label: "» 14th - 19th July 2026",
    },
  ];

  const handleClick = (button) => {
    console.log("Malta registration button clicked:", button);

    if (button.id === "gymnasts") {
      setOpenForm("gymnasts");
    } else if (button.id === "coaches") {
      setOpenForm("coaches");
    } else if (button.id === "families") {
      setOpenForm("families");
    } else {
      setOpenForm(null);
    }
  };

  return (
    <>
      <CampRegistrationSection
        id={id}
        banner={banner}
        ribbonText={ribbonText}
        buttons={buttons}
        onButtonClick={handleClick}
      />

      {openForm === "gymnasts" && (
        <GymnastRegistrationWizard
          isOpen={true}
          onClose={() => setOpenForm(null)}
          camp="malta"
          infoContent={gymnastInfo}
          campOptions={campOptions}
        />
      )}
      {openForm === "coaches" && (
        <CoachRegistrationWizard
          isOpen={true}
          onClose={() => setOpenForm(null)}
          camp="malta"
          infoContent={coachInfo}
          campOptions={campOptions}
        />
      )}
      {openForm === "families" && (
        <FamilyRegistrationWizard
          isOpen={true}
          onClose={() => setOpenForm(null)}
          camp="malta"
          infoContent={familyInfo}
          campOptions={campOptions}
        />
      )}
    </>
  );
}
