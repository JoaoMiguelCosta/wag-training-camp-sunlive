// server/src/services/registrationFileRepository.js
import { promises as fs } from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// pasta e ficheiro onde vamos guardar as inscrições
const DATA_DIR = path.join(__dirname, "..", "data");
const REGISTRATIONS_FILE = path.join(DATA_DIR, "registrations.json");

async function ensureFile() {
  // garante que a pasta existe
  await fs.mkdir(DATA_DIR, { recursive: true });

  // se o ficheiro ainda não existir, cria com []
  try {
    await fs.access(REGISTRATIONS_FILE);
  } catch {
    await fs.writeFile(REGISTRATIONS_FILE, "[]", "utf8");
  }
}

async function readAll() {
  await ensureFile();
  const raw = await fs.readFile(REGISTRATIONS_FILE, "utf8");

  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

async function writeAll(registrations) {
  await ensureFile();
  const json = JSON.stringify(registrations, null, 2);
  await fs.writeFile(REGISTRATIONS_FILE, json, "utf8");
}

// 👇 export que o service está à espera
export const registrationFileRepository = {
  async save({ camp, role, data }) {
    const record = {
      id: `${camp}-${role}-${Date.now()}`,
      submittedAt: new Date().toISOString(),
      camp,
      role,
      data,
    };

    const registrations = await readAll();
    registrations.push(record);
    await writeAll(registrations);

    console.log("New registration saved:", record);

    return record; // o service precisa disto para mandar para o Sheets
  },

  async getAll() {
    return readAll();
  },
};
