// src/controllers/registration.controller.js
import { registrationService } from "../services/registration.service.js";

export async function createRegistration(req, res, next) {
  try {
    const { camp, role } = req.params;

    // se a validação passou, temos isto; senão, usa o body normal
    const data = req.validatedBody ?? req.body;

    const result = await registrationService.create({ camp, role, data });

    res.status(201).json({
      success: true,
      id: result.id,
    });
  } catch (err) {
    next(err);
  }
}
