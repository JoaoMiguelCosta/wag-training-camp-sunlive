// src/shared/components/GymnastRegistrationForm.jsx
import styles from "./GymnastRegistrationWizard.module.css";

/**
 * Segundo passo do wizard – formulário de atletas.
 *
 * Props:
 * - campOptions: [{ value, label }]
 * - values: objeto com todos os campos
 * - onChange(field, value)
 * - onSubmit(event)
 * - onPrevious()
 * - isSubmitting: boolean (estado de envio)
 */
export function GymnastRegistrationForm({
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

  const maxChars = 150;
  const bestResultsLength = (values.bestResults ?? "").length;

  function handleSubmit(e) {
    e.preventDefault();

    const form = e.currentTarget;
    // validação nativa do browser (required, email, maxLength, etc.)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!isFormValid || isSubmitting) return;
    onSubmit(e);
  }

  return (
    <form className={styles.step} onSubmit={handleSubmit} noValidate>
      <h2 className={styles.stepTitle}>Athletes</h2>

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

        {/* Coach name */}
        <div className={styles.formField}>
          <label className={styles.label}>
            Coach name (responsible) <span className={styles.required}>*</span>
          </label>
          <input
            type="text"
            className={styles.input}
            value={values.coachName}
            onChange={(e) => onChange("coachName", e.target.value)}
            required
          />
        </div>

        {/* Phone – só números */}
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

        {/* Best results – com contador */}
        <div className={styles.formFieldFull}>
          <label className={styles.label}>
            Best results (max. 5) <span className={styles.required}>*</span>
          </label>
          <textarea
            className={styles.textarea}
            rows={4}
            maxLength={maxChars}
            value={values.bestResults}
            onChange={(e) => onChange("bestResults", e.target.value)}
            required
          />
          <div className={styles.charCounter}>
            {bestResultsLength}/{maxChars}
          </div>
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
