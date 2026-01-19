# 💻 Frontend – Wag Training Camp

![Frontend](https://img.shields.io/badge/Frontend-React%20+%20Vite-22c55e)
![UI](https://img.shields.io/badge/UI-CSS%20Modules-blueviolet)
![Deploy](https://img.shields.io/badge/Deploy-FTP%20%2F%20Apache-orange)

Aplicação frontend desenvolvida em **React + Vite**, já **em produção**, para promoção e gestão de inscrições dos **WAG Training Camps** (Malta e Anadia).

🔗 **Website live:** https://www.wagtrainingcamp.sunlive.pt/

---

## 🎯 Objetivo do projeto

- Página institucional do WAG Training Camp
- Divulgação dos camps (Malta / Portugal – Anadia)
- Apresentação de programa, equipa técnica, venue e parceiros
- Inscrições através de **Google Forms integrados em modal (iframe)**

👉 Projeto **100% frontend**, sem backend próprio.

---

## ⚙️ Stack técnica

- React 19
- Vite
- React Router
- CSS Modules
- Google Forms (embed via iframe)
- Apache (.htaccess)
- Deploy tradicional via FTP

---

## 🚀 Estado atual

- ✅ Produção ativa
- ✅ HTTPS ativo
- ✅ Routing funcional (`/`, `/malta`, `/anadia`)
- ✅ Modais de inscrição funcionais
- ✅ Responsive (mobile-first)
- ❌ Sem backend / API própria

---

## 🗂️ Estrutura do projeto

```text
src/
├── assets/              # imagens (logos, posters, fundos, pessoas)
├── config/
│   └── content/         # conteúdos estáticos (home, malta, anadia)
├── pages/
│   ├── home/
│   ├── malta/
│   └── anadia/
├── shared/
│   └── components/      # componentes reutilizáveis
├── styles/              # tokens e estilos globais
├── App.jsx
└── main.jsx
```

---

## 📝 Inscrições (Google Forms)

- Cada camp possui formulários separados:
  - Gymnasts
  - Coaches
  - Families
- Os formulários são abertos em **modal fullscreen**
- Gestão de:
  - bloqueio de scroll
  - fecho por overlay / ESC
  - reload do iframe ao trocar de formulário

📌 **Dados não passam pelo frontend** — submissão direta ao Google Forms.

---

## 🔐 Segurança & boas práticas

- HTTPS ativo no domínio
- Nenhuma credencial no frontend
- Google Forms protegidos por permissões Google
- `.htaccess` usado para:
  - SPA routing (React Router)
  - forçar HTTPS
  - evitar rotas quebradas em refresh

---

## 📦 Build & Deploy

### Build local

```bash
npm install
npm run build
```

### Deploy

- Upload da pasta `dist/` via FTP
- Servidor Apache
- `index.html` na raiz do domínio
- `.htaccess` configurado para SPA

---

## 🧠 Decisões técnicas

- **Google Forms** em vez de backend:
  - rapidez
  - fiabilidade
  - zero manutenção
- **CSS Modules**:
  - isolamento de estilos
  - escalabilidade
- **Config por ficheiros JS**:
  - fácil edição de conteúdos
  - sem CMS externo

---

## 👤 Autor

Projeto desenvolvido por **João Costa**  
Frontend Developer (React)

---

## 📌 Nota para recrutadores

Este projeto demonstra:

- Estruturação de SPA em produção
- Deploy real em alojamento tradicional
- Gestão de routing, modais e estados
- Integração com serviços externos
- Atenção a UX, responsividade e detalhe visual
