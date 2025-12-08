// src/shared/components/CoachRegistrationForm.jsx
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Formulário para Coaches (2º passo do wizard)
 *
 * Props:
 * - campOptions
 * - values
 * - onChange(field, value)
 * - onSubmit(event)
 * - onPrevious()
 */
export function CoachRegistrationForm({
  campOptions,
  values,
  onChange,
  onSubmit,
  onPrevious,
}) {
  const isFormValid = Object.values(values).every(
    (value) => String(value ?? "").trim() !== ""
  );

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid) return;
    onSubmit(e);
  }

  return (
    <form className={styles.step} onSubmit={handleSubmit}>
      <h2 className={styles.stepTitle}>Coaches</h2>

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

        {/* Name */}
        <div className={styles.formField}>
          <label className={styles.label}>
            Name <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.name}
            onChange={(e) => onChange("name", e.target.value)}
            required
          />
        </div>

        {/* Date of Birth */}
        <div className={styles.formField}>
          <label className={styles.label}>
            Date of Birth <span className={styles.required}>*</span>
          </label>
          <input
            type="date"
            className={styles.input}
            value={values.birthDate}
            onChange={(e) => onChange("birthDate", e.target.value)}
            required
          />
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

        {/* Club */}
        <div className={styles.formField}>
          <label className={styles.label}>
            Club <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.club}
            onChange={(e) => onChange("club", e.target.value)}
            required
          />
        </div>

        {/* Name of gymnasts under responsibility */}
        <div className={styles.formFieldFull}>
          <label className={styles.label}>
            Name of the gymnasts under your responsability in this camp{" "}
            <span className={styles.required}>*</span>
          </label>
          <textarea
            className={styles.textarea}
            rows={3}
            value={values.gymnastsNames}
            onChange={(e) => onChange("gymnastsNames", e.target.value)}
            required
          />
        </div>

        {/* Phone */}
        <div className={styles.formField}>
          <label className={styles.label}>
            Phone <span className={styles.required}>*</span>
          </label>
          <input
            type="tel"
            className={styles.input}
            value={values.phone}
            onChange={(e) => onChange("phone", e.target.value)}
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
        >
          Previous
        </button>

        <button
          type="submit"
          className={styles.primaryButton}
          disabled={!isFormValid}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
