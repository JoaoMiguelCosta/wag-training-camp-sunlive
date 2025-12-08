// src/shared/components/CoachRegistrationWizard.jsx
import { useState } from "react";
import { GymnastRegistrationInfo } from "./GymnastRegistrationInfo.jsx";
import { CoachRegistrationForm } from "./CoachRegistrationForm.jsx";
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Wizard para inscrição de Coaches
 *
 * Props:
 * - isOpen
 * - onClose
 * - infoContent: { title, paragraphs[] }
 * - campOptions: [{ value, label }]
 */
export function CoachRegistrationWizard({
  isOpen,
  onClose,
  infoContent,
  campOptions,
}) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    camp: "",
    name: "",
    birthDate: "",
    country: "",
    club: "",
    gymnastsNames: "",
    phone: "",
    email: "",
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
    console.log("Coach registration data:", formData);
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
          <CoachRegistrationForm
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
