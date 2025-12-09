// src/controllers/registration.controller.js
import { ZodError } from "zod";
import { registrationService } from "../services/registration.service.js";
import { validateRegistrationPayload } from "../schemas/registrationSchemas.js";

export async function createRegistration(req, res, next) {
  try {
    const { camp, role } = req.params;

    // Montamos o objeto completo e validamos com Zod
    const payload = validateRegistrationPayload({
      camp,
      role,
      data: req.body, // o body que vem do front (gymnast/coach/family)
    });

    // Se chegou aqui, está tudo validado
    const result = await registrationService.create(payload);

    return res.status(201).json({
      success: true,
      id: result.id,
    });
  } catch (err) {
    // Erros de validação Zod -> 400
    if (err instanceof ZodError) {
      return res.status(400).json({
        success: false,
        message: "Validation error",
        errors: err.errors,
      });
    }

    // Outros erros seguem para o middleware de erro global
    return next(err);
  }
}
