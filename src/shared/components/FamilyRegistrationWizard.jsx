// src/shared/components/FamilyRegistrationWizard.jsx
import { useState } from "react";
import { GymnastRegistrationInfo } from "./GymnastRegistrationInfo.jsx";
import { FamilyRegistrationForm } from "./FamilyRegistrationForm.jsx";
import { submitRegistration } from "../api/registrations.js";
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Wizard para inscrição de Families
 *
 * Props:
 * - isOpen
 * - onClose
 * - camp: "malta" | "anadia"
 * - infoContent: { title, paragraphs[] }
 * - campOptions: [{ value, label }]
 */
export function FamilyRegistrationWizard({
  isOpen,
  onClose,
  camp,
  infoContent,
  campOptions,
}) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      await submitRegistration({
        camp,
        role: "family",
        data: formData,
      });

      alert("Registration submitted successfully!");
      onClose();
      setStep(1);
      setFormData({
        camp: "",
        accompanyingGymnast: "",
        companionName: "",
        kinship: "",
        country: "",
        phone: "",
        email: "",
      });
    } catch (err) {
      console.error(err);
      alert(err.message || "Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
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
