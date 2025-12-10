// src/shared/components/GymnastRegistrationWizard.jsx
import { useState } from "react";
import { GymnastRegistrationInfo } from "./GymnastRegistrationInfo.jsx";
import { GymnastRegistrationForm } from "./GymnastRegistrationForm.jsx";
import { submitRegistration } from "../api/registrations.js";
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Wizard para inscrição de Gymnasts
 *
 * Props:
 * - isOpen
 * - onClose
 * - camp: "malta" | "anadia"
 * - infoContent: { title, paragraphs[] }
 * - campOptions: [{ value, label }]
 */
export function GymnastRegistrationWizard({
  isOpen,
  onClose,
  camp,
  infoContent,
  campOptions,
}) {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

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

  async function handleSubmit(e) {
    e.preventDefault();
    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      await submitRegistration({
        camp, // "malta" ou "anadia"
        role: "gymnast",
        data: formData,
      });

      // limpa o form para a próxima utilização
      setFormData({
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

      // mostra passo de sucesso
      setShowSuccess(true);
      setStep(3);
    } catch (err) {
      console.error(err);
      alert(err.message || "Error submitting form. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleCloseSuccess() {
    setShowSuccess(false);
    setStep(1);
    onClose();
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
            isSubmitting={isSubmitting}
            onPrevious={handlePrevious}
          />
        )}

        {step === 3 && showSuccess && (
          <div className={styles.step}>
            <h2 className={styles.stepTitle}>Thank you!</h2>

            <p className={styles.successMessage}>
              Thank you for your registration. See you soon!
            </p>

            <div className={styles.footer}>
              <button
                type="button"
                className={styles.primaryButton}
                onClick={handleCloseSuccess}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
