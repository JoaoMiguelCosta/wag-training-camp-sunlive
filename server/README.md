# 🧪 Backend – Wag Training Camp

![Backend](https://img.shields.io/badge/Backend-Node.js_+_Express-16a34a)
![Storage](https://img.shields.io/badge/Storage-Google%20Sheets-facc15)

API em Node.js + Express responsável por receber inscrições e gravar os dados numa folha de cálculo Google Sheets.

---

## ⚙️ Requisitos

- Node.js ≥ 18
- npm ou pnpm
- Projeto Google Cloud com:
  - Google Sheets API ativa
  - Credenciais de conta de serviço criadas

---

## 📦 Instalação

```bash
cd backend
npm install
```

---

## 📜 Scripts

```bash
npm run dev     # desenvolvimento (ex: nodemon)
npm start       # produção
```

---

## 🔐 Variáveis de ambiente

Criar `.env` (a partir de `.env.example` se existir):

```env
PORT=4000
CORS_ORIGIN=http://localhost:5173

GOOGLE_SHEETS_ID=XXXXXXXXXXXXXXX
GOOGLE_SHEETS_CLIENT_EMAIL=conta@project-id.iam.gserviceaccount.com
GOOGLE_SHEETS_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\n...\n-----END PRIVATE KEY-----\n"
```

Produção (exemplo):

```env
CORS_ORIGIN=https://dominio-do-cliente.pt
```

> A chave privada deve manter o formato com `\n` para as quebras de linha.

---

## 🗂️ Estrutura de pastas (sugerida)

```text
backend/
├── src/
│   ├── index.js                 # entrada da app Express
│   ├── config/
│   │   └── googleSheets.js      # configuração do cliente Google Sheets
│   ├── routes/
│   │   └── registrations.routes.js
│   ├── controllers/
│   │   └── registrations.controller.js
│   ├── services/
│   │   └── registrations.service.js
│   ├── middleware/
│   │   ├── validateRegistrationPayload.js
│   │   ├── rateLimit.js
│   │   └── errorHandler.js
│   └── utils/
│       └── logger.js
└── package.json
```

*(Podes adaptar os nomes mas esta organização ajuda a manter o código limpo.)*

---

## 🌐 Endpoints

### `GET /health` (opcional, recomendado)

- Útil para testes rápidos e monitorização.
- Resposta exemplo:

```json
{ "status": "ok" }
```

### `POST /api/registrations`

Recebe os dados do formulário e cria uma nova linha no Google Sheets.

- **Request**: `Content-Type: application/json`
- **Body (exemplo simplificado)**:

```json
{
  "fullName": "Test Gymnast",
  "email": "test@example.com",
  "phone": "912345678",
  "country": "Portugal",
  "club": "Clube XPTO",
  "camp": "malta",
  "bestResults": "Campeão nacional 2023",
  "notes": "",
  "extraInfo": ""
}
```

- **Passos internos**:
  1. Validação do payload (middleware).
  2. Verificação do campo `extraInfo` (honeypot, anti-bot).
  3. Conversão dos dados para o formato esperado pelo Google Sheets.
  4. Escrita de nova linha na folha definida por `GOOGLE_SHEETS_ID`.
  5. Resposta JSON com resultado (sucesso/erro).

- **Respostas típicas**:
  - `201 Created` – inscrição guardada com sucesso.
  - `400 Bad Request` – payload inválido.
  - `429 Too Many Requests` – rate-limit atingido.
  - `500 Internal Server Error` – erro inesperado (ex: problema com Google Sheets).

---

## ✅ Validação de payload (exemplo de regras)

| Campo         | Obrigatório | Regras                                                            |
|--------------|------------|--------------------------------------------------------------------|
| `fullName`   | ✅          | string não vazia                                                  |
| `email`      | ✅          | string, contém `@`                                                |
| `phone`      | ✅          | string, apenas dígitos, tamanho mínimo (ex: 9)                    |
| `country`    | ✅          | string não vazia                                                  |
| `club`       | ✅          | string não vazia                                                  |
| `camp`       | ✅          | enum: `malta` ou `anadia`                                         |
| `bestResults`| ❌          | `length <= 150`                                                    |
| `notes`      | ❌          | string opcional                                                    |
| `extraInfo`  | ❌          | deve vir vazio; se preenchido → provável bot (não gravar no sheet) |

> A validação deve ser feita **antes** de chamar o serviço de Google Sheets.

---

## 📊 Integração com Google Sheets

Passos de configuração:

1. Criar projeto no Google Cloud e ativar **Google Sheets API**.
2. Criar credenciais de **Service Account**.
3. Descarregar o JSON da conta de serviço e extrair:
   - `client_email`
   - `private_key`
4. Criar um Google Sheet e copiar o ID (parte da URL).
5. Partilhar a folha com o `client_email` da conta de serviço, com permissão de edição.

Exemplo de serviço (pseudo-código):

```js
import { GoogleSpreadsheet } from "google-spreadsheet";

async function appendRegistrationRow(data) {
  const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEETS_ID);

  await doc.useServiceAccountAuth({
    client_email: process.env.GOOGLE_SHEETS_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_SHEETS_PRIVATE_KEY,
  });

  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0]; // ou pelo título

  await sheet.addRow({
    Timestamp: new Date().toISOString(),
    FullName: data.fullName,
    Email: data.email,
    Phone: data.phone,
    Country: data.country,
    Club: data.club,
    Camp: data.camp,
    BestResults: data.bestResults || "",
    Notes: data.notes || ""
  });
}
```

*(O código real pode variar; este é apenas um guia.)*

---

## 🛡️ Segurança

### CORS

- Usar o middleware `cors` com origem restrita:

```js
import cors from "cors";

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
```

### Helmet

- Recomendado para cabeçalhos de segurança:

```js
import helmet from "helmet";
app.use(helmet());
```

### Rate-limit dedicado em `/api/registrations`

```js
import rateLimit from "express-rate-limit";

const registrationsLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minuto
  max: 5,              // 5 pedidos / min / IP (ajusta conforme necessário)
});

app.post("/api/registrations", registrationsLimiter, registrationsHandler);
```

### Anti-bot (honeypot)

```js
function honeypotGuard(req, res, next) {
  if (req.body.extraInfo) {
    // Provável bot – devolve 200 para não dar pistas
    return res.status(200).json({ ok: true });
  }
  next();
}
```

Aplicar este middleware na rota de inscrições.

### Logs simples (sem dados sensíveis)

Exemplo (pseudo-código):

```js
import fs from "node:fs";
import path from "node:path";

const logFile = path.join(process.cwd(), "logs", "registrations.log");

function logRegistrationEvent(event) {
  const line = JSON.stringify({
    time: new Date().toISOString(),
    ip: event.ip,
    ua: event.userAgent,
    status: event.status,
  });
  fs.appendFile(logFile, line + "\n", () => {});
}
```

- **Não** guardar nomes, emails, telefones, etc., neste ficheiro.

---

## ☁️ Deploy

### Plataformas sugeridas

- Render, Railway, Fly.io ou similar.

### Passos gerais

1. Subir o código para GitHub/GitLab/Bitbucket.
2. Criar serviço na plataforma escolhida apontando para a pasta `backend/`.
3. Definir as env vars:
   - `PORT` (ou usar a definida pela plataforma)
   - `CORS_ORIGIN`
   - `GOOGLE_SHEETS_ID`
   - `GOOGLE_SHEETS_CLIENT_EMAIL`
   - `GOOGLE_SHEETS_PRIVATE_KEY`
4. Confirmar que o endpoint `/health` (se existir) responde corretamente.
5. Testar `POST /api/registrations` a partir do frontend em produção.

---

## 🔍 Teste rápido manual

```bash
curl -X POST http://localhost:4000/api/registrations   -H "Content-Type: application/json"   -d '{"fullName":"Test Gymnast","email":"test@example.com","phone":"912345678","country":"Portugal","club":"Clube XPTO","camp":"malta","bestResults":"Teste"}'
```

- Esperado: resposta de sucesso (ex: 201) e linha adicionada no Google Sheets.
