// src/config/content/malta.content.js
import sunliveGroupLogo from "../../assets/logos/sunlive-group.png";
import posterMalta from "../../assets/posters/poster-malta.png";
import bannerMalta from "../../assets/banners-malta-anadia/banner-malta.png";

export const maltaContent = {
  header: {
    logo: {
      src: sunliveGroupLogo,
      alt: "Sunlive Group",
    },
    navItems: [
      { id: "home", label: "Home" },
      { id: "team", label: "Team" },
      { id: "program", label: "Program" },
      { id: "venue", label: "The Venue" },
      { id: "content", label: "Content" },
      { id: "hotel", label: "Hotel" },
      { id: "contacts", label: "Contacts" },
    ],
    poster: {
      label: "Poster",
      image: {
        src: posterMalta,
        alt: "Poster WAG Training Camp Malta",
      },
    },
    portal: {
      label: "Portal",
      homePath: "/", // rota para voltar à Home
    },
  },

  registrationSection: {
    id: "registration", // id da secção (para âncoras futuras se quiseres)
    banner: {
      src: bannerMalta,
      alt: "Sunlive International WAG Training Camp Malta banner",
    },
    ribbonText: "▽ REGISTRATION IS OPEN ▽",
    buttons: [
      {
        id: "gymnasts",
        label: "Gymnasts",
        // placeholder para futuro form:
        formKey: "gymnasts",
      },
      {
        id: "coaches",
        label: "Coaches",
        formKey: "coaches",
      },
      {
        id: "families",
        label: "Families",
        formKey: "families",
      },
    ],
  },
};
