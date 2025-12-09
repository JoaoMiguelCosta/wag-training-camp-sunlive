// src/services/registration.service.js
import { HttpError } from "../utils/httpError.js";
import { registrationFileRepository } from "./registrationFileRepository.js";
import { registrationGoogleSheetsRepository } from "./registrationGoogleSheetsRepository.js";

export const registrationService = {
  async create({ camp, role, data }) {
    if (!["malta", "anadia"].includes(camp)) {
      throw new HttpError(400, "Invalid camp");
    }

    if (!["gymnast", "coach", "family"].includes(role)) {
      throw new HttpError(400, "Invalid role");
    }

    // 1) guarda sempre em ficheiro (backup local)
    const saved = await registrationFileRepository.save({ camp, role, data });

    // 2) tenta enviar para Google Sheets (se falhar, não quebra o pedido)
    try {
      await registrationGoogleSheetsRepository.append(saved);
    } catch (err) {
      console.error("[Sheets] Failed to append registration:", err.message);
    }

    return { id: saved.id };
  },
};
