// src/validators/registration.validator.js
import { z } from "zod";

// helpers
const nonEmptyString = z.string().trim().min(1, "Required");

const emailSchema = z.string().trim().email("Invalid e-mail format");

const phoneSchema = z
  .string()
  .trim()
  .min(6, "Phone too short")
  .max(30, "Phone too long");

// GYMNASTS
export const gymnastRegistrationSchema = z.object({
  camp: nonEmptyString,
  name: nonEmptyString,
  birthDate: nonEmptyString, // podemos afinar depois p/ data
  country: nonEmptyString,
  club: nonEmptyString,
  coachName: nonEmptyString,
  phone: phoneSchema,
  email: emailSchema,
  bestResults: nonEmptyString, // texto livre (máx pode ser afinado)
});

// COACHES
export const coachRegistrationSchema = z.object({
  camp: nonEmptyString,
  name: nonEmptyString,
  birthDate: nonEmptyString,
  country: nonEmptyString,
  club: nonEmptyString,
  gymnastsNames: nonEmptyString,
  phone: phoneSchema,
  email: emailSchema,
});

// FAMILIES
export const familyRegistrationSchema = z.object({
  camp: nonEmptyString,
  accompanyingGymnast: nonEmptyString,
  companionName: nonEmptyString,
  kinship: nonEmptyString, // Mother / Father / Brother / Sister / Others
  country: nonEmptyString,
  phone: phoneSchema,
  email: emailSchema,
});

// devolve o schema certo com base no role
export function getRegistrationSchemaByRole(role) {
  switch (role) {
    case "gymnast":
    case "gymnasts":
      return gymnastRegistrationSchema;
    case "coach":
    case "coaches":
      return coachRegistrationSchema;
    case "family":
    case "families":
      return familyRegistrationSchema;
    default:
      return null;
  }
}
