// src/pages/anadia/components/AnadiaRegistrationSection.jsx
import { useMemo, useState } from "react";
import { anadiaContent } from "../../../config/content/anadia.content.js";
import CampRegistrationSection from "../../../shared/components/CampRegistrationSection.jsx";
import { GymnastRegistrationWizard } from "../../../shared/components/GymnastRegistrationWizard.jsx";
import { CoachRegistrationWizard } from "../../../shared/components/CoachRegistrationWizard.jsx";
import { FamilyRegistrationWizard } from "../../../shared/components/FamilyRegistrationWizard.jsx";

export default function AnadiaRegistrationSection() {
  const { registrationSection, contentSection } = anadiaContent;
  const { id, banner, ribbonText, buttons } = registrationSection;

  const [openForm, setOpenForm] = useState(null);

  // ✅ "substituto" como nos outros:
  // - se item.isPlaceholder -> mostra só o placeholderText (ou "To be defined later")
  // - senão -> mostra as lines
  const baseParagraphs = useMemo(() => {
    const items = contentSection?.items || [];

    return items.flatMap((item) => {
      const hasPlaceholder = Boolean(item.isPlaceholder);
      const placeholderText = item.placeholderText || "To be defined later";

      return [
        item.title,
        ...(hasPlaceholder ? [placeholderText] : item.lines || []),
        "",
      ];
    });
  }, [contentSection]);

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
      value: "17th - 22th August 2026",
      label: "» 17th - 22th August 2026",
    },
  ];

  const handleClick = (button) => {
    if (button.id === "gymnasts") setOpenForm("gymnasts");
    else if (button.id === "coaches") setOpenForm("coaches");
    else if (button.id === "families") setOpenForm("families");
    else setOpenForm(null);
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
          camp="anadia"
          infoContent={gymnastInfo}
          campOptions={campOptions}
        />
      )}

      {openForm === "coaches" && (
        <CoachRegistrationWizard
          isOpen={true}
          onClose={() => setOpenForm(null)}
          camp="anadia"
          infoContent={coachInfo}
          campOptions={campOptions}
        />
      )}

      {openForm === "families" && (
        <FamilyRegistrationWizard
          isOpen={true}
          onClose={() => setOpenForm(null)}
          camp="anadia"
          infoContent={familyInfo}
          campOptions={campOptions}
        />
      )}
    </>
  );
}
