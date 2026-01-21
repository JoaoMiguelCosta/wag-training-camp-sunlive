// src/config/content/home.content.js

export const homeContent = {
  header: {
    logoAlt: "Sunlive International Wag Training Camp",
    navItems: [
      { id: "home", label: "Home", href: "#home" },
      { id: "sunlive", label: "Sunlive", href: "#sunlive" },
      { id: "contacts", label: "Contacts", href: "#contacts" },
    ],
  },

  uniqueCampSection: {
    title: "A UNIQUE CAMP!!!",
    camps: [
      {
        id: "malta",
        posterAlt: "WAG Training Camp - Malta 2026",
        buttonLabel: "Registration Open",
        href: "/malta",
      },
      {
        id: "anadia",
        posterAlt: "WAG Training Camp - Portugal 2026",
        buttonLabel: "Registration Open",
        href: "/anadia",
      },
    ],
  },

  sunliveGroupSection: {
    title: "SUNLIVE GROUP",
    subtitle: "WHO ARE WE?",
    paragraphs: [
      "Nowadays we are a company performing on a wider range of solutions on several areas, working within a solid network with different partnerships, developed through the contacts in our Hotel in Portugal with our clients, allowing us to respond into several business opportunities.",
    ],
    link: {
      label: "» www.sunlive.pt",
      href: "https://www.sunlive.pt",
    },
    video: {
      // autoplay + mute (para os browsers permitirem o autoplay)
      src: "https://www.youtube.com/embed/OueN7zefqmQ?autoplay=1&mute=1&playsinline=1",
      title: "SUNLIVE GROUP 2021 - What else?",
    },
  },

  contactsSection: {
    title: "Contacts",
    cards: [
      // 🇲🇹 MALTA (1ª linha)
      {
        id: "email-malta",
        title: "Email",
        group: "malta",
        link: { href: "mailto:events@sunlive.pt", label: "events@sunlive.pt" },
      },
      {
        id: "phone-malta",
        title: "Phone",
        group: "malta",
        link: { href: "tel:+356 99164245", label: "+356 99164245" },
      },

      // 🇵🇹 PORTUGAL (2ª linha)
      {
        id: "email-portugal",
        title: "Email",
        group: "portugal",
        link: {
          href: "mailto:sunlivegymnastics@gmail.com",
          label: "sunlivegymnastics@gmail.com",
        },
      },
      {
        id: "phone-portugal",
        title: "Phone",
        group: "portugal",
        link: { href: "tel:+351934094584", label: "+351 934 094 584" },
      },
    ],
  },

  footer: {
    text: "© Copyright 2026 Sunlive - All Rights Reserved",
  },
};
