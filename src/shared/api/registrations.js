// src/shared/api/registrations.js
import { postJson } from "./client.js";

/**
 * Envia inscrição para o backend
 *
 * @param {Object} params
 * @param {"malta"|"anadia"} params.camp
 * @param {"gymnast"|"coach"|"family"} params.role
 * @param {Object} params.data  // body do formulário
 */
export async function submitRegistration({ camp, role, data }) {
  return postJson(`/registrations/${camp}/${role}`, data);
}
