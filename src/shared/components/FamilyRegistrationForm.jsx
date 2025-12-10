// src/shared/components/FamilyRegistrationForm.jsx
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Formulário para Families (2º passo do wizard)
 *
 * Props:
 * - campOptions
 * - values
 * - onChange
 * - onSubmit
 * - onPrevious
 * - isSubmitting
 */
export function FamilyRegistrationForm({
  campOptions,
  values,
  onChange,
  onSubmit,
  onPrevious,
  isSubmitting,
}) {
  const isFormValid = Object.values(values).every(
    (value) => String(value ?? "").trim() !== ""
  );

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!isFormValid || isSubmitting) return;
    onSubmit(e);
  }

  return (
    <form className={styles.step} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.stepTitle}>Families</h2>

      <div className={styles.formGrid}>
        {/* Camp */}
        <div className={styles.formField}>
          <label className={styles.label}>
            Camp <span className={styles.required}>*</span>
          </label>
          <select
            className={styles.input}
            value={values.camp}
            onChange={(e) => onChange("camp", e.target.value)}
            required
          >
            <option value="">Select</option>
            {campOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>

        {/* Name of accompanying gymnast */}
        <div className={styles.formFieldFull}>
          <label className={styles.label}>
            Name of accompanying gymnast{" "}
            <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.accompanyingGymnast}
            onChange={(e) => onChange("accompanyingGymnast", e.target.value)}
            required
          />
        </div>

        {/* Name of the companion */}
        <div className={styles.formFieldFull}>
          <label className={styles.label}>
            Name of the companion <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.companionName}
            onChange={(e) => onChange("companionName", e.target.value)}
            required
          />
        </div>

        {/* Degree of kinship */}
        <div className={styles.formFieldFull}>
          <label className={styles.label}>
            Degree of kinship <span className={styles.required}>*</span>
          </label>

          <div className={styles.radioGroup}>
            {["Mother", "Father", "Brother", "Sister", "Others"].map(
              (option) => (
                <label key={option} className={styles.radioOption}>
                  <input
                    type="radio"
                    name="kinship"
                    value={option}
                    checked={values.kinship === option}
                    onChange={(e) => onChange("kinship", e.target.value)}
                    required
                  />
                  <span>{option}</span>
                </label>
              )
            )}
          </div>
        </div>

        {/* Country */}
        <div className={styles.formField}>
          <label className={styles.label}>
            Country <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.country}
            onChange={(e) => onChange("country", e.target.value)}
            required
          />
        </div>

        {/* Phone – só dígitos */}
        <div className={styles.formField}>
          <label className={styles.label}>
            Phone <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            inputMode="numeric"
            className={styles.input}
            value={values.phone}
            onChange={(e) =>
              onChange("phone", e.target.value.replace(/\D/g, ""))
            }
            required
          />
        </div>

        {/* E-mail */}
        <div className={styles.formField}>
          <label className={styles.label}>
            E-mail <span className={styles.required}>*</span>
          </label>
          <input
            type="email"
            className={styles.input}
            value={values.email}
            onChange={(e) => onChange("email", e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.footer}>
        <button
          type="button"
          className={styles.secondaryButton}
          onClick={onPrevious}
          disabled={isSubmitting}
        >
          Previous
        </button>

        <button
          type="submit"
          className={styles.primaryButton}
          disabled={!isFormValid || isSubmitting}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </form>
  );
}
