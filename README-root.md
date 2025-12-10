# ✨ Wag Training Camp – Plataforma de Inscrições

![Stack](https://img.shields.io/badge/Stack-React_+_Node_+_Google_Sheets-0ea5e9)
![Status](https://img.shields.io/badge/Status-Em%20desenvolvimento-facc15)

> Plataforma full-stack para gerir inscrições nos camps (Malta / Anadia), com frontend em React/Vite e backend em Node/Express integrado com Google Sheets.

---

## 🧭 Visão geral do projeto

- <span style="color:#22c55e;">Frontend</span>: SPA em React + Vite, com páginas para:
  - Home (apresentação do evento)
  - Página Malta
  - Página Anadia
  - Formulários de inscrição (wizard)
- <span style="color:#f97316;">Backend</span>: API REST em Node.js + Express:
  - Endpoint principal: `POST /api/registrations`
  - Escrita das inscrições em Google Sheets
- <span style="color:#eab308;">Armazenamento</span>: Google Sheets (tabela com uma linha por inscrição)

```text
.
├── README.md                ← este ficheiro (overview geral)
├── frontend/                ← app React (Vite)
└── backend/                 ← API Node/Express + Google Sheets
```

Cada pasta (`frontend/` e `backend/`) tem o seu próprio `README.md` com mais detalhes.

---

## 🧱 Arquitetura e tecnologias

- **Monorepo simples**: frontend + backend na mesma raiz
- **Comunicação**: HTTP/JSON via `fetch`/`axios` (no frontend) para a API
- **Autenticação**: não existe área privada (formulários públicos)
- **Stack principal**:
  - React + Vite
  - CSS Modules (design personalizado, design tokens)
  - Node.js + Express
  - Google Sheets API (via credenciais de serviço)

---

## ⚙️ Requisitos

- Node.js ≥ 18 (ideal 20)
- npm ou pnpm
- Conta Google Cloud com:
  - projeto criado
  - Google Sheets API ativada
  - credenciais de **conta de serviço**
- Uma folha de cálculo Google Sheets criada para receber as inscrições

---

## 🚀 Setup rápido de desenvolvimento

1. **Clonar repositório**

```bash
git clone <url-do-repo>
cd wag-training-camp
```

2. **Instalar dependências**

```bash
cd frontend
npm install

cd ../backend
npm install
```

3. **Configurar variáveis de ambiente**

- Em `frontend/.env`
- Em `backend/.env`

(ver detalhes em cada README específico).

4. **Correr backend**

```bash
cd backend
npm run dev      # por omissão: http://localhost:4000
```

5. **Correr frontend**

```bash
cd frontend
npm run dev      # por omissão: http://localhost:5173
```

---

## 🔐 Variáveis de ambiente (resumo)

### Backend (ver detalhes em `backend/README.md`)

- `PORT` – porta da API (ex: `4000`)
- `CORS_ORIGIN` – origem permitida (ex: `http://localhost:5173` ou domínio do frontend)
- `GOOGLE_SHEETS_ID` – ID da folha de cálculo (ver URL do Google Sheets)
- `GOOGLE_SHEETS_CLIENT_EMAIL` – email da conta de serviço
- `GOOGLE_SHEETS_PRIVATE_KEY` – chave privada (com quebras de linha `\n`)

### Frontend (ver detalhes em `frontend/README.md`)

- `VITE_API_BASE_URL` – URL base da API, ex.:
  - `http://localhost:4000` em desenvolvimento
  - `https://api.dominio-do-cliente.pt` em produção

---

## 🗂️ Estrutura de pastas (alto nível)

```text
wag-training-camp/
├── frontend/
│   ├── src/
│   │   ├── assets/         # imagens, logos, posters, fundos
│   │   ├── config/         # ficheiros de conteúdo (home, Malta, Anadia, ...)
│   │   ├── pages/          # páginas principais
│   │   ├── shared/         # componentes reutilizáveis
│   │   ├── hooks/          # hooks personalizados (ex: navegação, scroll)
│   │   ├── api/            # funções de chamada à API (ex: submitRegistration)
│   │   └── main.jsx        # entrypoint React
│   └── index.html
└── backend/
    ├── src/
    │   ├── index.js        # entrada da app Express
    │   ├── routes/         # definição de rotas (ex: registrations.routes.js)
    │   ├── controllers/    # lógica de cada endpoint
    │   ├── services/       # integração com Google Sheets, etc.
    │   ├── middleware/     # validação, rate-limit, CORS extra, logs...
    │   └── utils/          # helpers diversos
    └── package.json
```

*(Os nomes concretos podem variar, mas esta é a arquitetura recomendada.)*

---

## 🔁 Fluxo de inscrição (front → back → Google Sheets)

1. Utilizador entra na página de inscrição (Malta ou Anadia).
2. Preenche o wizard de inscrição (1+ passos).
3. Frontend:
   - valida campos obrigatórios
   - validações adicionais (telefone, email, limites de texto)
   - envia `POST` para `POST /api/registrations`
4. Backend:
   - valida payload novamente (nunca confiar só no frontend)
   - verifica honeypot (anti-bot)
   - escreve os dados numa nova linha do Google Sheets
   - devolve resposta JSON de sucesso/erro
5. Frontend mostra mensagem final (sucesso ou erro amigável).

---

## ✅ Regras de validação (exemplo típico)

| Campo         | Tipo       | Obrigatório | Regras                                                                 |
|--------------|------------|------------|------------------------------------------------------------------------|
| `fullName`   | string     | ✅          | 2+ caracteres                                                          |
| `email`      | string     | ✅          | tem de conter `@`                                                      |
| `phone`      | string     | ✅          | apenas dígitos, comprimento mínimo (ex: 9)                             |
| `country`    | string     | ✅          | não vazio                                                              |
| `club`       | string     | ✅          | não vazio                                                              |
| `camp`       | enum       | ✅          | `malta` ou `anadia`                                                    |
| `bestResults`| string     | ❌ (depende)| máx. **150 caracteres**                                                |
| `notes`      | string     | ❌          | opcional                                                               |
| `extraInfo`  | string     | ❌          | campo honeypot (deve vir vazio; se vier preenchido, provável bot)     |

> ⚠️ A validação deve existir **no frontend** e **no backend**.

---

## 🛡️ Segurança & privacidade (visão geral)

- **CORS**: restringir `CORS_ORIGIN` ao domínio oficial do frontend.
- **Rate-limit**:
  - rate-limit global para a API (flood de pedidos)
  - rate-limit específico mais apertado em `POST /api/registrations`
- **Anti-bot (honeypot)**:
  - campo escondido (`extraInfo`) no formulário
  - se vier preenchido → ignorar pedido sem dar informação extra
- **Logs**:
  - guardar apenas o necessário (ex: IP mascarado, user-agent, estado)
  - **não** guardar dados sensíveis (nome, email, telefone) nos logs de aplicação
- **HTTPS**:
  - frontend e backend sempre servidos por HTTPS em produção

---

## ☁️ Deploy (workflow recomendado)

1. **Backend (API)**
   - Plataforma sugerida: Render / Railway / Fly.io
   - Subir pasta `backend/` ou repo completo com start comand definido
   - Definir env vars (`PORT`, `CORS_ORIGIN`, `GOOGLE_SHEETS_*`)
   - Confirmar que a API responde em HTTPS

2. **Frontend**
   - Plataforma sugerida: Vercel / Netlify / Cloudflare Pages
   - `cd frontend && npm run build`
   - Configurar:
     - `VITE_API_BASE_URL` = URL pública do backend
     - build command: `npm run build`
     - output dir: `dist`

3. **Domínio do cliente**
   - Apontar domínio (ex: `wagcamp.dominio.pt`) para o frontend
   - Verificar CORS e chamadas à API a partir do domínio final

---

## ✏️ Convenções de código (sugestão)

- **Nomes de ficheiros React**: `PascalCase.jsx` para componentes, `kebab-case.module.css` para estilos.
- **Hooks**: `useNomeDoHook.js` em `src/hooks/`.
- **Conteúdo estático**:
  - ficheiros `*.content.js` em `src/config/content`
  - cada ficheiro exporta um objeto com textos, imagens, links, etc.
- **Imports**:
  - agrupar por tipo (libs → componentes → CSS).
- **Commits Git** (opcional):
  - `feat: descrição curta`
  - `fix: descrição curta`
  - `chore: descrição curta`
  - `docs: descrição curta`

---

## 🗺️ Roadmap sugerido

- [ ] Finalizar todos os formulários (Malta / Anadia) e validações
- [ ] Implementar integração real com Google Sheets
- [ ] Adicionar rate-limit específico por IP em `/api/registrations`
- [ ] Ligar honeypot no front + back
- [ ] Rever textos e conteúdos (EN/PT) para o cliente
- [ ] Configurar deploy final (domínio, HTTPS, CORS) e testar fluxo completo
