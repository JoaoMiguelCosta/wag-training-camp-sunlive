// src/config/content/anadia.content.js
import sunliveGroupLogo from "../../assets/logos/sunlive-group.png";
import sunliveCompletoLogo from "../../assets/logos/sunlive-completo.png";
import wagGoldLogo from "../../assets/logos/wag-gold.png";
import aceLogo from "../../assets/logos/ace.png";
import anadiaLogo from "../../assets/logos/anadia.png";
import estalagemLogo from "../../assets/logos/estalagem.png";
import jumpUpLogo from "../../assets/logos/jump-up.png";
import gymtrackLogo from "../../assets/logos/gymtrack.png";
import wagVerticalLogo from "../../assets/logos/wag-vertical.png";
import carolPhoto from "../../assets/person-malta/carol.png";

import posterAnadia from "../../assets/posters/poster-anadia.png";
import bannerAnadia from "../../assets/banners-malta-anadia/banner-anadia.png";
import fundoMalta from "../../assets/background-malta/fundo-malta.jpg";
import fundoMalta3 from "../../assets/background-malta/malta-fundo3.jpg";

export const anadiaContent = {
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
      // quando quiseres podes adicionar:
      // { id: "organization-partners", label: "Organization & Partners" },
    ],
    poster: {
      label: "Poster",
      image: {
        src: posterAnadia,
        alt: "Poster WAG Training Camp Anadia 2026",
      },
    },
    portal: {
      label: "Portal",
      homePath: "/", // rota para voltar à Home
    },
  },

  registrationSection: {
    id: "home",
    banner: {
      src: bannerAnadia,
      alt: "Sunlive International WAG Training Camp Anadia banner",
    },
    ribbonText: "▽ REGISTRATION IS OPEN ▽",
    buttons: [
      { id: "gymnasts", label: "Gymnasts", formKey: "gymnasts" },
      { id: "coaches", label: "Coaches", formKey: "coaches" },
      { id: "families", label: "Families", formKey: "families" },
    ],
  },

  // 🔹 PROGRAMA
  programSection: {
    id: "program",
    banner: {
      title: "PROGRAM FOR GYMNASTS AND COACHES 2026",
      background: {
        src: fundoMalta,
        alt: "Gymnasts training in the gym during the Anadia camp",
      },
    },
    schedule: {
      id: "program-schedule",
      columns: [
        {
          id: "Monday-august-17",
          title: "» MONDAY, AUGUST 17",
          items: [
            {
              time: "",
              description:
                "Morning - Participants Check-in in Estalagem de Sangalhos",
            },
            { time: "12:00", description: "Lunch" },
            { time: "13:30", description: "Arrival Briefing" },
            { time: "14:10", description: "Transport" },
            { time: "14:30", description: "Training session" },
            { time: "17:30", description: "End of session / Transport" },
            { time: "18:15", description: "Free time for all" },
            { time: "19:30", description: "Dinner" },
            { time: "20:30", description: "Free time for gymnasts" },
            { time: "20:30", description: "Theory lecture" },
            { time: "21:45", description: "End of session" },

            // ✅ Placeholder guardado para atualizares mais tarde
            {
              time: "",
              description: "To be defined later",
              isPlaceholder: true,
            },
          ],
        },

        {
          id: "Tuesday-august-18",
          title: "» TUESDAY, AUGUST 18",
          items: [
            { time: "7:45", description: "Breakfast" },
            { time: "8:25", description: "Transport" },
            { time: "8:45", description: "Photo session for gymnasts" },
            { time: "8:45", description: "Vault Workshop" },
            { time: "9:45", description: "Training Session" },
            { time: "12:15", description: "End of session / Transport" },
            { time: "12:30", description: "Lunch" },
            { time: "13:15", description: "Free time for gymnasts" },
            { time: "13:30", description: "Debate Session" },
            { time: "14:45", description: "End of session" },
            { time: "15:40", description: "Transport" },
            { time: "16:00", description: "Training Session" },
            { time: "19:20", description: "End of session / Transport" },
            { time: "19:30", description: "Dinner" },
            { time: "20:30", description: "Theory lecture" },
            { time: "21:45", description: "End of session" },

            // ✅ Placeholder guardado para atualizares mais tarde
            {
              time: "",
              description: "To be defined later",
              isPlaceholder: true,
            },
          ],
        },

        {
          id: "Wednesday-august-19",
          title: "» WEDNESDAY, AUGUST 19",
          items: [
            { time: "8:30", description: "Breakfast" },
            { time: "9:10", description: "Transport" },
            { time: "9:30", description: "Training session" },
            { time: "12:30", description: "End of session / Transport" },
            { time: "12:45", description: "Lunch" },
            { time: "13:30", description: "Free time for gymnasts" },
            { time: "13:45", description: "Theory lecture" },
            { time: "15:00", description: "Free time for all" },
            { time: "16:40", description: "Transport" },
            { time: "17:00", description: "Training session" },
            { time: "20:00", description: "End of session / Transport" },
            { time: "20:15", description: "Dinner" },
            { time: "21:00", description: "Free time for all" },

            // ✅ Placeholder guardado para atualizares mais tarde
            {
              time: "",
              description: "To be defined later",
              isPlaceholder: true,
            },
          ],
        },

        {
          id: "Thursday-august-20",
          title: "» THURSDAY, AUGUST 20",
          items: [
            { time: "8:30", description: "Breakfast" },
            { time: "9:30", description: "Transport" },
            { time: "9:45", description: "Training session" },
            { time: "11:45", description: "End of session / Transport" },
            { time: "12:00", description: "Lunch" },
            {
              time: "13:00",
              description: "Departure to the beach and Aveiro Tour",
            },
            { time: "20:00", description: "Arrival and dinner" },
            { time: "21:00", description: "Free time for all" },

            // ✅ Placeholder guardado para atualizares mais tarde
            {
              time: "",
              description: "To be defined later",
              isPlaceholder: true,
            },
          ],
        },

        {
          id: "Friday-august-21",
          title: "» FRIDAY, AUGUST 21",
          items: [
            { time: "8:45", description: "Breakfast" },
            { time: "9:25", description: "Transport" },
            { time: "9:45", description: "Training session" },
            { time: "12:45", description: "End of session / Transport" },
            { time: "13:00", description: "Lunch" },
            { time: "13:45", description: "Free time for all" },
            { time: "16:10", description: "Transport" },
            { time: "16:30", description: "Training session" },
            { time: "19:15", description: "End of session / Transport" },
            { time: "19:30", description: "Dinner" },
            { time: "20:30", description: "Theory lecture" },
            { time: "21:45", description: "End of session" },

            // ✅ Placeholder guardado para atualizares mais tarde
            {
              time: "",
              description: "To be defined later",
              isPlaceholder: true,
            },
          ],
        },

        {
          id: "Saturday-august-22",
          title: "» SATURDAY, AUGUST 22",
          items: [
            { time: "8:15", description: "Breakfast" },
            { time: "8:40", description: "Transport" },
            { time: "9:00", description: "Training session" },
            { time: "11:45", description: "End of session / Transport" },
            { time: "12:00", description: "Lunch" },
            { time: "12:45", description: "Free time for gymnasts" },
            { time: "13:00", description: "Q&A Session" },
            { time: "14:00", description: "End of session" },
            { time: "15:00", description: "Transport" },
            { time: "15:15", description: "Final training session" },
            { time: "16:45", description: "End of session / Transport" },
            { time: "17:00", description: "Free time for all" },
            { time: "18:15", description: "Diploma Ceremony" },
            { time: "19:00", description: "Final dinner and farewell party" },

            // ✅ Placeholder guardado para atualizares mais tarde
            {
              time: "",
              description: "To be defined later",
              isPlaceholder: true,
            },
          ],
        },
      ],
    },
  },

  // 🔹 SECÇÃO LOGOS (Organization & Partners)
  logosSection: {
    id: "organization-partners",
    organization: [
      {
        id: "sunlive-completo",
        src: sunliveCompletoLogo,
        alt: "Sunlive Group",
      },
      {
        id: "wag-gold",
        src: wagGoldLogo,
        alt: "Sunlive Member",
      },
      {
        id: "ace",
        src: aceLogo,
        alt: "ACE",
      },
    ],
    partnersRows: [
      [
        {
          id: "anadia",
          src: anadiaLogo,
          alt: "Anadia",
        },
        {
          id: "estalagem",
          src: estalagemLogo,
          alt: "Estalagem de Sangalhos",
        },
        {
          id: "jump-up",
          src: jumpUpLogo,
          alt: "Jump Up",
        },
        {
          id: "gymtrack",
          src: gymtrackLogo,
          alt: "Gymtrack",
        },
      ],
    ],
  },

  // 🔹 THE VENUE – ANADIA (sem website)
  gymStarsSection: {
    id: "venue",
    title: "Velodrome of Sangalhos / Anadia - High Performance Center",
    description: [
      "The High Performance Center in Anadia is a top multi-sports venue. Within the velodrome, we have almost 3000 square meters with all the equipment for every Gymnastics discipline. This was the home of several FIG World Challenge Cups in the last few years, as well as many other international and national competitions.",
      "This is one of the most wanted gym centers in Europe for high-level team camps. Top National teams like Great Britain, Brazil, France, Belgium, Switzerland and many other national teams and clubs have used this venue, from off-season camps to specific preparation for Olympics or World Championships.",
      "It is a fully equipped gym with 2 official floors, 2 very comfortable pit zones, all the apparatus with official mats and pit access, trampolines, fast track, etc. Obviously, every WAG apparatus will be set for our camp.",
    ],
    addressTitle: "Address",
    addressLines: [
      "Rua Ivo Neves",
      "3780-524 Sangalhos",
      "GPS: N 40º28'46, W 8º28'27",
    ],
  },

  contentSection: {
    id: "content",
    title: "General Informations",
    items: [
      {
        id: "registration",
        title: "★ REGISTRATION",
        isPlaceholder: true,
        placeholderText: "To be defined later",
        lines: [
          "Registrations must be made in our website registration form until June 30.",
          "Registrations will only be accepted after submission of bank transfer of 50% of the final price.",
          "In case of a participant withdrawal until May 31, this deposit will be refunded.",
          "In case of a participant withdrawal after May 31 and before June 30, only 50% of the deposit will be refunded.",
          "In case of absence of the camp or withdrawal after June 30, this deposit will not be refunded.",
          "A proof of payment of the remaining 50% has to be made up to the moment of the check in.",
          "We’ll accept a maximum of 40 gymnasts in a first come first served basis.",
          "If more gymnasts show interest in register, we’ll have a waiting list, by order of contact (no extra costs).",
          "If available, it will be possible to register after June 30, with an extra payment of 100 euros per person.",
          "In case of cancellation of the camp, all the payments will be reimbursed.",
        ],
      },
      {
        id: "prices",
        title: "★ PRICES",
        isPlaceholder: true,
        placeholderText: "To be defined later",
        lines: [
          "Gymnasts:",
          "Single room: €940",
          "Double/Twin room: €760",
          "Triple and more: €700",
          "",
          "Coaches:",
          "Single room: n/a",
          "Double/Twin room: €660",
          "Triple and more: €600",
          "",
          "Family:",
          "Single room: n/a (upon request)",
          "Double/Twin room: €540",
          "Triple and more: €480",
          "",
          "Extra nights at Estalagem de Sangalhos:",
          "Single room: €110",
          "Double/Twin room: €95",
          "Triple: €85",
          "",
          "Extra meals: €20",
        ],
      },
      {
        id: "extra-info",
        title: "► Those prices include:",
        isPlaceholder: true,
        placeholderText: "To be defined later",
        lines: [
          "5 nights at sports hotel Estalagem de Sangalhos***, full board accommodation.",
          "Free access to outdoor swimming pool, hotel gym, snooker and play room.",
          "Free Wi-Fi.",
          "Transfer from/to Porto airport.",
          "Transfer between hotel and gym (5 minutes) during the camp.",
          "Camp coordination and coaching team services.",
          "Tour to Aveiro and beach.",
          "Theoretical lectures (for coaches).",
          "Camp diploma and souvenirs to all gymnasts and coaches.",
          "Surveillance and basic physiotherapy support.",
          "",
          "Available by order, but not included in the price:",
          "Physiotherapy treatments.",
          "Sauna.",
          "Transfer from/to Lisbon Airport – 1–8 people: €550.",
          "Transfer from/to Lisbon Airport – up to 45 pax: €1200.",
        ],
      },
      {
        id: "bank",
        title: "► THE BANK DETAILS",
        isPlaceholder: true,
        placeholderText: "To be defined later",
        lines: [
          "Company: SUNLIVE INVESTIMENTOS IMOBILIARIOS, LDA",
          "Address: R ESTALAGEM SA 3780-101 SANGALHOS",
          "IBAN: PT50 0045 3210 4029 1435 6802 8",
          "BIC/SWIFT: CCCMPTPL",
          "Bank: CA Crédito Agricola",
          "Tel: 231510880   Fax: 231510881",
        ],
      },
    ],
  },

  // 🔹 SECÇÃO "WHO ARE WE?" (SUNLIVE GROUP)
  sunliveSection: {
    id: "who-we-are",
    title: "Who Are We?",
    background: {
      src: fundoMalta3,
      alt: "Pool area at the Sunlive hotel in Portugal",
    },
    description: [
      "Nowadays we are a company performing on a wider range of solutions on several areas, working within a solid network with different partnerships, developed through the contacts in our Hotel in Portugal with our clients, allowing us to respond into several business opportunities.",
    ],
    video: {
      src: "https://www.youtube.com/embed/OueN7zefqmQ?rel=0",
      title: "SUNLIVE GROUP 2021 – What else?",
    },
    pdf: {
      label: "Presentation PDF",
      href: "/books/sunlive_apresentation.pdf",
    },
    website: {
      label: "Website",
      href: "https://sunlive.pt",
    },
  },

  // 🔹 HOTEL – ESTALAGEM DE SANGALHOS
  hotelSection: {
    id: "hotel",
    title: "Sangalhos Hotel & Restaurant",
    videoSrc: "https://www.youtube.com/embed/dx5Nh5CVdZ0?rel=0",
    videoTitle: "Estalagem de Sangalhos – Sport & Nature Hotel",
    addressTitle: "Address:",
    addressLines: [
      "Rua Narciso da Marça,",
      "3780-101 Sangalhos – Anadia,",
      "GPS: 40º28' 37.88\" N, 8º27' 34.14\" W.",
    ],
    contactsTitle: "Contacts:",
    contactsLines: ["Phone: +351 234 745 133"],
    websiteLabel: "Website",
    websiteHref: "https://www.estalagem.sunlive.pt/",
  },

  coachingTeamSection: {
    id: "team",
    title: "Coaching Team",
    quote:
      '"I am absolutely delighted to be invited to be involved in the 2026 SUNLIVE International WAG Training Camp. This camp provides a unique opportunity for both gymnasts and coaches to develop their skills in an inspiring and supportive environment. With an exciting training program, top-class facilities, a fantastic hotel, delicious food, and a dedicated team, everything is set for an incredible experience. I look forward to working personally with all the gymnasts and coaches to help them achieve their best throughout this exceptional training camp."',
    authorName: "Carol-Angela Orchard",
    authorRole: "4-time Worlds Medallist & 4-time Olympic coach",
    photo: {
      src: carolPhoto,
      alt: "Carol-Angela Orchard",
    },
    bio: {
      label: "Biography",
      href: "/books/biography.pdf",
    },
  },

  // 🔹 SECÇÃO CONTACTOS (usa CampContactsSection)
  contactsSection: {
    id: "contacts",
    logo: {
      src: wagVerticalLogo,
      alt: "Sunlive International WAG Training Camp logo",
    },
    columns: [
      {
        id: "address",
        title: "ADDRESS",
        lines: [
          "Velodrome of Sangalhos",
          "Rua Ivo Neves",
          "3780-524 Sangalhos",
        ],
      },
      {
        id: "contacts",
        title: "CONTACTS",
        lines: ["sunlivegymnastics@gmail.com", "+351 934 094 584"],
      },
      {
        id: "links",
        title: "LINKS",
        lines: [
          {
            id: "gdpr",
            label: "GDPR",
            href: "https://www.sunlive.pt/en/rgpd",
          },
          {
            id: "facebook-wag",
            label: "Facebook WAG",
            href: "https://www.facebook.com/SunliveInternationalWAGTrainingCamp",
          },
        ],
      },
    ],
    website: {
      label: "www.wagtrainingcamp.sunlive.pt/anadia",
      href: "https://www.wagtrainingcamp.sunlive.pt/anadia",
    },
    followLabel: "FOLLOW US",
    socialLinks: [
      {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/SunliveInternationalWAGTrainingCamp/",
        icon: "facebook",
      },
      {
        id: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/channel/UC_83bWDr30mR9fw8JETjHcw",
        icon: "youtube",
      },
    ],
  },

  // 🔹 FOOTER (usado pelo AnadiaFooter)
  footer: {
    text: "© Copyright 2026 Sunlive - All Rights Reserved",
  },
};
