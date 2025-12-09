// src/services/registration.service.js
import { HttpError } from "../utils/httpError.js";

export const registrationService = {
  async create({ camp, role, data }) {
    if (!["malta", "anadia"].includes(camp)) {
      throw new HttpError(400, "Invalid camp");
    }

    if (!["gymnast", "coach", "family"].includes(role)) {
      throw new HttpError(400, "Invalid role");
    }

    // Por agora só loga. Mais tarde: Google Sheets / Email / DB.
    console.log("New registration:", { camp, role, data });

    return {
      id: `${camp}-${role}-${Date.now()}`,
    };
  },
};
