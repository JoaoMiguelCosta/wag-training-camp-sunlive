// src/services/registrationGoogleSheetsRepository.js
import { google } from "googleapis";

const SCOPES = ["https://www.googleapis.com/auth/spreadsheets"];

// Criamos um GoogleAuth reutilizável
let googleAuth;

function getAuth() {
  if (googleAuth) return googleAuth;

  const clientEmail = process.env.GOOGLE_SHEETS_CLIENT_EMAIL;
  let privateKey = process.env.GOOGLE_SHEETS_PRIVATE_KEY;

  if (!clientEmail || !privateKey) {
    console.warn("[Sheets] Missing GOOGLE_SHEETS_CLIENT_EMAIL or PRIVATE_KEY");
    return null;
  }

  // Corrigir "\n" literais para que fiquem newlines reais
  privateKey = privateKey.replace(/\\n/g, "\n");

  googleAuth = new google.auth.GoogleAuth({
    credentials: {
      client_email: clientEmail,
      private_key: privateKey,
    },
    scopes: SCOPES,
  });

  return googleAuth;
}

export const registrationGoogleSheetsRepository = {
  async append(registration) {
    const spreadsheetId = process.env.GOOGLE_SHEETS_ID;

    if (!spreadsheetId) {
      console.warn("[Sheets] GOOGLE_SHEETS_ID not set – skipping write");
      return;
    }

    const auth = getAuth();
    if (!auth) return;

    // 👉 obter o client OAuth2 a partir do GoogleAuth
    const authClient = await auth.getClient();
    const sheets = google.sheets({ version: "v4", auth: authClient });

    const range = "Registrations!A:Z";

    const { id, submittedAt, camp, role, data } = registration;
    const formCamp = data.camp; // camp escolhido no formulário

    let extraCols;

    if (role === "gymnast") {
      const {
        name,
        birthDate,
        country,
        club,
        coachName,
        phone,
        email,
        bestResults,
      } = data;

      extraCols = [
        name,
        birthDate,
        country,
        club,
        coachName,
        phone,
        email,
        bestResults || "",
      ];
    } else if (role === "coach") {
      const { name, birthDate, country, club, gymnastsNames, phone, email } =
        data;

      extraCols = [
        name,
        birthDate,
        country,
        club,
        gymnastsNames,
        phone,
        email,
        "",
      ];
    } else if (role === "family") {
      const {
        accompanyingGymnast,
        companionName,
        kinship,
        country,
        phone,
        email,
      } = data;

      const coachOrFamily = `${kinship} - ${companionName}`;

      extraCols = [
        accompanyingGymnast, // name
        "", // birthDate
        country,
        "", // club
        coachOrFamily,
        phone,
        email,
        "",
      ];
    } else {
      console.warn("[Sheets] Unknown role, skipping:", role);
      return;
    }

    const row = [id, submittedAt, camp, role, formCamp, ...extraCols];

    try {
      await sheets.spreadsheets.values.append({
        spreadsheetId,
        range,
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [row],
        },
      });

      console.log("[Sheets] Registration appended to Google Sheet");
    } catch (err) {
      console.error("[Sheets] Failed to append registration:");
      console.error(" message:", err.message);
      if (err.response?.data) {
        console.error(" details:", JSON.stringify(err.response.data));
      }
    }
  },
};
