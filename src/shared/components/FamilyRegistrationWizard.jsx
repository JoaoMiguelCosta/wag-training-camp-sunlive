// src/shared/components/FamilyRegistrationWizard.jsx
import { useState } from "react";
import { GymnastRegistrationInfo } from "./GymnastRegistrationInfo.jsx";
import { FamilyRegistrationForm } from "./FamilyRegistrationForm.jsx";
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Wizard para inscrição de Families (Malta)
 */
export function FamilyRegistrationWizard({
  isOpen,
  onClose,
  infoContent,
  campOptions,
}) {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    camp: "",
    accompanyingGymnast: "",
    companionName: "",
    kinship: "",
    country: "",
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
    console.log("Family registration data:", formData);
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
          <FamilyRegistrationForm
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
