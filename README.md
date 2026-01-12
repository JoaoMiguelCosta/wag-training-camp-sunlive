
# 🏋️ WAG Training Camp — Frontend

Frontend oficial do **WAG Training Camp**, desenvolvido com **React + Vite**, focado em performance, clareza estrutural e manutenção simples.
O projeto é **100% frontend estático**, usando **Google Forms** para inscrições, sem backend ou APIs externas.

---

## 🎯 Objetivo do Projeto

- Apresentar informação completa sobre os WAG Training Camps
- Permitir inscrições de **Gymnasts, Coaches e Families**
- Ter páginas independentes para **Malta** e **Anadia**
- Garantir facilidade de manutenção e atualização de conteúdos

---

## 🚀 Stack Tecnológica

- ⚛️ **React 19**
- ⚡ **Vite**
- 🧭 **React Router DOM**
- 🎨 **CSS Modules**
- 📝 **Google Forms (iframe)**
- 🧹 **ESLint**

Sem backend, sem base de dados, sem autenticação.

---

## 📂 Estrutura de Pastas

```txt
src/
├─ assets/
│  ├─ backgrounds/
│  ├─ banners/
│  ├─ logos/
│  ├─ posters/
│  └─ persons/
│
├─ config/
│  ├─ content/
│  │  ├─ home.content.js
│  │  ├─ malta.content.js
│  │  └─ anadia.content.js
│  └─ routes.config.js
│
├─ pages/
│  ├─ home/
│  ├─ malta/
│  └─ anadia/
│
├─ router/
│  └─ index.jsx
│
├─ shared/
│  └─ components/
│
├─ styles/
│  ├─ design-tokens.css
│  └─ global.css
│
├─ App.jsx
└─ main.jsx
```

---

## 🧠 Princípios de Arquitetura

### 1️⃣ Conteúdo desacoplado
- Todo o texto, imagens e links vivem em `config/content`
- Componentes nunca contêm texto fixo
- Atualizar conteúdos **não exige mexer em JSX**

### 2️⃣ Componentização por página
- Cada página tem componentes próprios (`MaltaProgramSection`, `AnadiaHotelSection`, etc.)
- Evita lógica condicional complexa
- Facilita leitura e manutenção

### 3️⃣ Estilos isolados
- Cada componente tem o seu `.module.css`
- Zero conflitos globais
- Tokens globais apenas para cores, tipografia e espaçamentos base

---

## 🧭 Sistema de Rotas

```js
export const ROUTES = {
  HOME: "/",
  MALTA: "/malta",
  ANADIA: "/anadia",
};
```

Geridas via `react-router-dom` com `BrowserRouter`.

---

## 📝 Sistema de Inscrições

As inscrições usam **Google Forms embebidos em modais**.

### Como funciona:
- Botões definidos no `content`
- Cada botão abre um formulário específico
- O formulário é carregado num `<iframe>`

### Funcionalidades implementadas:
- 🪟 Modal acessível (`role="dialog"`)
- ⌨️ Fecho por **ESC**
- 🖱️ Clique fora para fechar
- 🔒 Bloqueio de scroll do body
- ♻️ Reload automático ao mudar de formulário

### Tipos de inscrição:
- Gymnasts
- Coaches
- Families

---

## 🌍 Páginas Disponíveis

### Home (`/`)
- Introdução ao projeto
- Escolha do camp (Malta / Anadia)
- Apresentação do Sunlive Group
- Contactos

### Malta (`/malta`)
- Header + navegação interna
- Inscrições
- Testemunho
- Coaching team
- Programa
- Venue (GymStars Malta)
- Hotel
- Conteúdos informativos
- Contactos

### Anadia (`/anadia`)
- Estrutura equivalente à Malta
- Conteúdos específicos do local

---

## ♿ Acessibilidade & UX

- `aria-modal` e `aria-label`
- Navegação por teclado
- Sem page reloads
- Scroll controlado em overlays
- Estrutura semântica consistente

---

## ▶️ Scripts Disponíveis

```bash
npm install     # Instalar dependências
npm run dev     # Ambiente de desenvolvimento
npm run build   # Build de produção
npm run preview # Preview local do build
```

---

## 🧪 Limitações Conhecidas

- Google Forms não permite:
  - Controlo visual total
  - Validação custom
  - Submissão programática
- Dependência de iframes

Estas decisões são **intencionais**.

---

## 📌 Estado do Projeto

- ✅ Produção-ready (frontend)
- ✅ Conteúdo totalmente configurável
- ✅ Fácil de manter
- 🚫 Sem backend
- 🚫 Sem dependências externas críticas

---

## 📄 Licença

Projeto privado — © Sunlive Group / WAG Training Camp  
Todos os direitos reservados.
