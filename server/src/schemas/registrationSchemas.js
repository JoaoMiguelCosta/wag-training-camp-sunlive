// server/src/schemas/registrationSchemas.js
import { z } from "zod";

export const campSchema = z.enum(["malta", "anadia"]);
export const roleSchema = z.enum(["gymnast", "coach", "family"]);

// helper para telefone: só dígitos, min 5
const phoneSchema = z
  .string()
  .regex(/^\d+$/, "Phone must contain digits only")
  .min(5, "Phone must have at least 5 digits");

// 🔹 Dados para GYMNAST
export const gymnastDataSchema = z.object({
  camp: z.string().min(3),
  name: z.string().min(2),
  birthDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  country: z.string().min(2),
  club: z.string().min(2),
  coachName: z.string().min(2),
  phone: phoneSchema,
  email: z.string().email(),
  bestResults: z
    .string()
    .min(1)
    .max(150, "Best results must be at most 150 characters"),
});

// 🔹 Dados para COACH
export const coachDataSchema = z.object({
  camp: z.string().min(3),
  name: z.string().min(2),
  birthDate: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),
  country: z.string().min(2),
  club: z.string().min(2),
  gymnastsNames: z.string().min(1),
  phone: phoneSchema,
  email: z.string().email(),
});

// 🔹 Dados para FAMILY
export const familyDataSchema = z.object({
  camp: z.string().min(3),
  accompanyingGymnast: z.string().min(2),
  companionName: z.string().min(2),
  kinship: z.string().min(2),
  country: z.string().min(2),
  phone: phoneSchema,
  email: z.string().email(),
});

/**
 * Valida o body completo { camp, role, data }
 * e escolhe o schema certo para "data" dependendo do role.
 */
export function validateRegistrationPayload(body) {
  const baseSchema = z.object({
    camp: campSchema,
    role: roleSchema,
    data: z.unknown(),
  });

  const base = baseSchema.parse(body);

  let dataSchema;
  if (base.role === "gymnast") dataSchema = gymnastDataSchema;
  else if (base.role === "coach") dataSchema = coachDataSchema;
  else if (base.role === "family") dataSchema = familyDataSchema;

  const data = dataSchema.parse(base.data);

  return { ...base, data };
}
