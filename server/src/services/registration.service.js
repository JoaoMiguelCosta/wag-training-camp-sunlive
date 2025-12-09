// src/services/registration.service.js
import crypto from "crypto";
import { saveRegistration } from "./registrationFileRepository.js";

export const registrationService = {
  /**
   * Cria uma nova inscrição
   * payload: { camp, role, data }
   *  - camp: "malta" | "anadia"
   *  - role: "gymnast" | "coach" | "family"
   *  - data: campos específicos do formulário (já validados pelo Zod)
   */
  async create({ camp, role, data }) {
    const id = crypto.randomUUID();
    const submittedAt = new Date().toISOString();

    const record = {
      id,
      submittedAt,
      camp,
      role,
      data,
    };

    // grava no ficheiro JSON (modo DEV)
    await saveRegistration(record);

    // log opcional para debugging
    console.log("New registration saved:", record);

    return { id };
  },
};
