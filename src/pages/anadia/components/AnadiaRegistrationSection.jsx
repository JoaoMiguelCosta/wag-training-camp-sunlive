// src/pages/anadia/components/AnadiaRegistrationSection.jsx
import { useState } from "react";
import { anadiaContent } from "../../../config/content/anadia.content.js";
import CampRegistrationSection from "../../../shared/components/CampRegistrationSection.jsx";
import { GymnastRegistrationWizard } from "../../../shared/components/GymnastRegistrationWizard.jsx";
import { CoachRegistrationWizard } from "../../../shared/components/CoachRegistrationWizard.jsx";
import { FamilyRegistrationWizard } from "../../../shared/components/FamilyRegistrationWizard.jsx";

export default function AnadiaRegistrationSection() {
  const { registrationSection, contentSection } = anadiaContent;
  const { id, banner, ribbonText, buttons } = registrationSection;

  // "gymnasts" | "coaches" | "families" | null
  const [openForm, setOpenForm] = useState(null);

  // texto base (igual para ginastas, coaches e families)
  const baseParagraphs = contentSection.items.flatMap((item) => [
    item.title,
    ...item.lines,
    "",
  ]);

  const gymnastInfo = {
    title: "Gymnasts / Ginastas | WAG Training Camp, ANADIA - 2026",
    paragraphs: baseParagraphs,
  };

  const coachInfo = {
    title: "Coaches / Treinadores | WAG Training Camp, ANADIA - 2026",
    paragraphs: baseParagraphs,
  };

  const familyInfo = {
    title: "Families / Famílias | WAG Training Camp, ANADIA - 2026",
    paragraphs: baseParagraphs,
  };

  const campOptions = [
    {
      value: "week1",
      label: "» 13th - 18th August 2026",
    },
  ];

  const handleClick = (button) => {
    console.log("Anadia registration button clicked:", button);

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
          infoContent={gymnastInfo}
          campOptions={campOptions}
        />
      )}

      {openForm === "coaches" && (
        <CoachRegistrationWizard
          isOpen={true}
          onClose={() => setOpenForm(null)}
          infoContent={coachInfo}
          campOptions={campOptions}
        />
      )}

      {openForm === "families" && (
        <FamilyRegistrationWizard
          isOpen={true}
          onClose={() => setOpenForm(null)}
          infoContent={familyInfo}
          campOptions={campOptions}
        />
      )}
    </>
  );
}
