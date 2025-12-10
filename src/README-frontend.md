# 💻 Frontend – Wag Training Camp

![Frontend](https://img.shields.io/badge/Frontend-React_+_Vite-22c55e)
![UI](https://img.shields.io/badge/UI-CSS%20Modules-blueviolet)

Aplicação React + Vite que contém a página principal, páginas dos camps (Malta/Anadia) e os formulários de inscrição.

---

## ⚙️ Requisitos

- Node.js ≥ 18
- npm ou pnpm
- Backend a correr localmente (ou URL da API em produção)

---

## 📦 Instalação

```bash
cd frontend
npm install
```

---

## 📜 Scripts disponíveis

```bash
npm run dev       # servidor de desenvolvimento (Vite)
npm run build     # build de produção
npm run preview   # preview da build de produção
npm run lint      # (se configurado) corre o linter
```

---

## 🔐 Variáveis de ambiente

Criar um ficheiro `.env` (ou `.env.local`) na pasta `frontend/`:

```env
VITE_API_BASE_URL=http://localhost:4000
```

Exemplo em produção:

```env
VITE_API_BASE_URL=https://api.dominio-do-cliente.pt
```

> O valor é usado para construir a URL das chamadas à API, por exemplo `POST ${VITE_API_BASE_URL}/api/registrations`.

---

## 🗂️ Estrutura de pastas (detalhe)

```text
frontend/
├── public/                    # assets públicos (se usados)
├── src/
│   ├── assets/                # imagens (logos, posters, fundos)
│   ├── config/
│   │   ├── content/
│   │   │   ├── home.content.js
│   │   │   ├── malta.content.js
│   │   │   └── anadia.content.js
│   │   └── design.tokens.css  # tokens de design (cores, fontes, etc.)
│   ├── pages/
│   │   ├── home/              # Home page
│   │   ├── malta/             # Página Malta
│   │   └── anadia/            # Página Anadia
│   ├── shared/
│   │   ├── components/        # componentes reutilizáveis (headers, forms, etc.)
│   │   └── styles/            # estilos partilhados (se existirem)
│   ├── hooks/                 # hooks personalizados (ex: navegação, scroll)
│   ├── api/                   # funções para comunicação com o backend
│   ├── main.jsx               # entrypoint React
│   └── App.jsx                # componente raiz (rotas, layout geral)
└── index.html
```

*(Os nomes concretos podem variar ligeiramente consoante a implementação.)*

---

## 🧩 Componentes principais (exemplos)

- `CampHeaderWithPoster`  
  - Header com logo, navegação e botão de poster (overlay).

- `CampNavBar` / `CampNavItem`  
  - Barra de navegação reutilizável para as páginas de camp.

- `GymnastRegistrationWizard`  
  - Wizard de inscrição (vários passos).
  - Recebe `camp`, `infoContent`, `campOptions` por props.
  - Usa um componente `GymnastRegistrationForm` com os campos do formulário.

- `ProgramSchedule` (ou semelhante)  
  - Mostra horários, datas e descrições por dia, com estilos consistentes.

---

## 📝 Formulários de inscrição – detalhes

Campos típicos (apenas exemplo; confirma com o conteúdo real):

- Nome do gymnast
- Data de nascimento
- País
- Clube
- Email
- Telefone
- Camp (Malta / Anadia)
- Nível / categoria
- Best results (máx. 150 caracteres)
- Notas adicionais (opcional)

Validações no **frontend**:

- 📞 **Telefone**
  - apenas dígitos (`0-9`)
  - impedir letras e símbolos na input (ex: filtrar no `onChange`)
- ✉️ **Email**
  - obrigatório
  - tem de conter `@` (validação simples)
- 🏅 **Best results**
  - `maxLength` = 150
  - contador de caracteres restantes (ex: `150 - value.length`)

Exemplo simplificado de contador:

```jsx
const maxChars = 150;
const [bestResults, setBestResults] = useState("");

const remaining = maxChars - bestResults.length;
```

---

## 🌐 Comunicação com o backend

Exemplo de função em `src/api/registrations.js`:

```js
export async function submitRegistration(data) {
  const baseUrl = import.meta.env.VITE_API_BASE_URL;

  const response = await fetch(`${baseUrl}/api/registrations`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    // podes melhorar mensagens de erro aqui
    throw new Error("Falha ao enviar inscrição");
  }

  return response.json();
}
```

No formulário/wizard:

```jsx
try {
  setIsSubmitting(true);
  await submitRegistration(formData);
  setStatus("success");
} catch (err) {
  setStatus("error");
} finally {
  setIsSubmitting(false);
}
```

---

## 🤖 Anti-bot (honeypot) no frontend

Adicionar um input escondido no formulário:

```jsx
<input
  type="text"
  name="extraInfo"
  autoComplete="off"
  style={{ display: "none" }}
  tabIndex={-1}
  value={extraInfo}
  onChange={(e) => setExtraInfo(e.target.value)}
/>
```

- O utilizador humano não vê o campo.
- Bots genéricos tendem a preencher todos os campos → backend detecta.

---

## 🎨 Estilos e design

- CSS Modules por componente (ex: `Componente.module.css`)
- Tokens de design centralizados (cores, fontes, etc.) em `design.tokens.css`
- Gradientes e sombras consistentes entre home e páginas de camp
- Respeitar o header fixo (espaço superior via `padding-block: var(--header-offset)` na página)

Boas práticas:

- Evitar estilos inline (usar CSS Modules sempre que possível).
- Manter a paleta de cores consistente com os tokens.
- Garantir contraste suficiente para legibilidade (especialmente sobre fundos com gradiente).

---

## ♿ Acessibilidade básica

- Cada input com `label` associado (`htmlFor` / `id`).
- Mensagens de erro claras por campo.
- Foco visível (não remover outline sem o substituir por algo equivalente).
- Botões com texto descritivo (evitar apenas ícones sem `aria-label`).

---

## 🔍 Desenvolvimento diário (workflow sugerido)

1. `npm run dev` no backend (pasta `backend/`).
2. `npm run dev` no frontend (pasta `frontend/`).
3. Trabalhar em componentes/páginas/hook específicos.
4. Correr `npm run build` pontualmente para garantir que a build de produção compila sem erros.
