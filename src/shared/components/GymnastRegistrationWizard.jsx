// src/shared/components/GymnastRegistrationWizard.jsx
import { useState } from "react";
import { GymnastRegistrationInfo } from "./GymnastRegistrationInfo.jsx";
import { GymnastRegistrationForm } from "./GymnastRegistrationForm.jsx";
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Wizard reutilizável para inscrições de ginastas
 *
 * Props:
 * - isOpen: bool → controla se o modal está visível
 * - onClose: fn  → fecha o modal
 * - infoContent: { title, paragraphs: string[] } → texto do 1º passo (muda Malta/Anadia)
 * - campOptions: [{ value, label }]             → opções do select "Camp"
 */
export function GymnastRegistrationWizard({
  isOpen,
  onClose,
  infoContent,
  campOptions,
}) {
  const [step, setStep] = useState(1);

  // estado simples só no front-end (depois trocamos para backend)
  const [formData, setFormData] = useState({
    camp: "",
    name: "",
    birthDate: "",
    country: "",
    club: "",
    coachName: "",
    phone: "",
    email: "",
    bestResults: "",
  });

  if (!isOpen) return null;

  function handleNext() {
    setStep(2);
  }

  function handlePrevious() {
    setStep(1);
  }

  function handleChange(field, value) {
    setFormData((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // 🔹 Por agora só front-end
    console.log("Gymnast registration data:", formData);
    // opcional: mostrar feedback simples
    alert("Form submitted (front-end only). Backend will be added later.");
    onClose();
    setStep(1);
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.modal} role="dialog" aria-modal="true">
        <button
          type="button"
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Close"
        >
          ×
        </button>

        {step === 1 && (
          <>
            <GymnastRegistrationInfo {...infoContent} />
            <div className={styles.footer}>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </>
        )}

        {step === 2 && (
          <GymnastRegistrationForm
            campOptions={campOptions}
            values={formData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            onPrevious={handlePrevious}
          />
        )}
      </div>
    </div>
  );
}
