// src/config/content/malta.content.js
import sunliveGroupLogo from "../../assets/logos/sunlive-group.png";
import wagGoldLogo from "../../assets/logos/wag-gold.png";
import jumpUpLogo from "../../assets/logos/jump-up.png";
import gymtrackLogo from "../../assets/logos/gymtrack.png";
import gymstarsLogo from "../../assets/logos/gymstars.png";
import maltaLogo from "../../assets/logos/malta.png";
import topazHotelLogo from "../../assets/logos/topaz-hotel.png";
import maltaTourismLogo from "../../assets/logos/malta-tourism.png";
import globeLogo from "../../assets/logos/globe.png";
import wagVerticalLogo from "../../assets/logos/wag-vertical.png";

import posterMalta from "../../assets/posters/poster-malta.png";
import bannerMalta from "../../assets/banners-malta-anadia/banner-malta.png";
import fundoMalta from "../../assets/background-malta/fundo-malta.jpg";
import fundoMalta3 from "../../assets/background-malta/malta-fundo3.jpg";

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
      // quando quiseres podes adicionar aqui, por ex.:
      // { id: "organization-partners", label: "Organization & Partners" },
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
    id: "home",
    banner: {
      src: bannerMalta,
      alt: "Sunlive International WAG Training Camp Malta banner",
    },
    ribbonText: "▽ REGISTRATION IS OPEN ▽",
    buttons: [
      { id: "gymnasts", label: "Gymnasts", formKey: "gymnasts" },
      { id: "coaches", label: "Coaches", formKey: "coaches" },
      { id: "families", label: "Families", formKey: "families" },
    ],
  },

  testimonialSection: {
    id: "testimonial",
    quote:
      '"We are thrilled to be hosting the 2025 SUNLIVE International WAG Training Camp in Malta. This camp provides an exceptional opportunity for gymnasts and coaches to refine their skills, gain valuable insights, and train in a dynamic and supportive environment. We are confident that every participant will leave with not only enhanced techniques but also lasting friendships and a renewed sense of motivation. We are also incredibly proud to welcome a team of renowned international coaching experts, whose knowledge and experience will further enrich this unforgettable training experience."',
    authorName: "Francesca Borg",
    authorRole: "Organization Sunlive Malta",
    photo: {
      src: "/src/assets/person-malta/francesca.png",
      alt: "Francesca Borg",
    },
  },

  coachingTeamSection: {
    id: "team",
    title: "Coaching Team",
    quote:
      '"I am absolutely delighted to be invited to be involved in the 2025 SUNLIVE International WAG Training Camp. This camp provides a unique opportunity for both gymnasts and coaches to develop their skills in an inspiring and supportive environment. With an exciting training program, top-class facilities, a fantastic hotel, delicious food, and a dedicated team, everything is set for an incredible experience. I look forward to working personally with all the gymnasts and coaches to help them achieve their best throughout this exceptional training camp."',
    authorName: "Carol-Angela Orchard",
    authorRole: "4-time Worlds Medallist & 4-time Olympic coach",
    photo: {
      src: "/src/assets/person-malta/carol.png",
      alt: "Carol-Angela Orchard",
    },
    bio: {
      label: "Biography",
      href: "/books/biography.pdf",
    },
  },

  // 🔹 SECÇÃO LOGOS (Organization & Partners)
  logosSection: {
    id: "organization-partners",
    organization: [
      {
        id: "sunlive-group",
        src: sunliveGroupLogo,
        alt: "Sunlive Group",
      },
      {
        id: "wag-gold",
        src: wagGoldLogo,
        alt: "Sunlive Member Malta",
      },
      {
        id: "jump-up",
        src: jumpUpLogo,
        alt: "Jump Up",
      },
    ],
    partnersRows: [
      [
        {
          id: "gymtrack",
          src: gymtrackLogo,
          alt: "Gymtrack",
        },
        {
          id: "gymstars",
          src: gymstarsLogo,
          alt: "GymStars Malta",
        },
        {
          id: "malta",
          src: maltaLogo,
          alt: "Malta",
        },
      ],
      [
        {
          id: "topaz-hotel",
          src: topazHotelLogo,
          alt: "Topaz Hotel",
        },
        {
          id: "malta-tourism",
          src: maltaTourismLogo,
          alt: "Malta Tourism",
        },
        {
          id: "globe",
          src: globeLogo,
          alt: "Sunlive Globe",
        },
      ],
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

  // 🔹 SECÇÃO GYMSTARS MALTA (THE VENUE)
  gymStarsSection: {
    id: "venue",
    title: "GymStars Malta",
    description: [
      "Established in July 2003, GymStars Gymnastics Club (GGC) has evolved into a premier gymnastics facility on the island, boasting a spacious 800 square meters of state-of-the-art training space. From its humble beginnings with 40 registered members and 3 coaching staff, GGC has grown to become a cornerstone in gymnastics excellence.",
      "Catering to a diverse range of athletes, GGC is proud to host elite squad groups, including members of the National Team. Over the years, the club has witnessed historic achievements, exemplified by a memorable moment in 2007 when a Men's Artistic Gymnastics (MAG) athlete secured the first-ever Artistic Gymnastics Medal at the Small Nation Games in Monaco. Continuing this legacy, two Senior gymnasts from GGC recently qualified for the prestigious World Championships held in Liverpool in 2022.",
      "The training facility at GGC is meticulously maintained and updated to meet the highest standards, ensuring that our athletes receive top-notch coaching and support. Recognized by the International Gymnastics Federation (FIG), our facility is a testament to our commitment to excellence in gymnastics.",
    ],
    addressTitle: "Address",
    addressLines: [
      "GymStars Gymnastics Club",
      "c/o Attrans,",
      "Mdina Road, Zebbug",
      "ZBG 9018 MALTA",
    ],
    websiteLabel: "Website",
    websiteUrl: "https://gymstarsmalta.com",
  },

  // 🔹 SECÇÃO DE PROGRAMA
  programSection: {
    id: "program",
    banner: {
      title: "PROGRAM FOR GYMNASTS AND COACHES 2026",
      background: {
        src: fundoMalta,
        alt: "Gymnasts training in the gym during the Malta camp",
      },
    },
    schedule: {
      id: "program-schedule",
      columns: [
        // » MONDAY, JULY 14
        {
          id: "monday-july-14",
          title: "» MONDAY, JULY 14",
          items: [
            { time: "", description: "Hotel Check-in: Topaz Hotel" },
            { time: "", description: "Breakfast & Lunch" },
            { time: "12:00", description: "Transport to Gym" },
            { time: "12:50", description: "Arrival at Gym" },
            { time: "13:00", description: "Introduction/Orientation" },
            { time: "13:30", description: "Training Session" },
            { time: "17:30", description: "End of Training Session" },
            { time: "17:35", description: "Transport to Hotel" },
            { time: "18:15 - 19:30", description: "Free Time" },
            { time: "19:30", description: "Dinner" },
            {
              time: "20:30",
              description: "Coaching Education Session",
            },
          ],
        },

        // » TUESDAY, JULY 15
        {
          id: "tuesday-july-15",
          title: "» TUESDAY, JULY 15",
          items: [
            { time: "7:15", description: "Breakfast" },
            { time: "8:00", description: "Transport to Gym" },
            {
              time: "8:45 - 11:40",
              description: "Training & Group & Individual Photos",
            },
            { time: "11:45", description: "Transport to Hotel" },
            { time: "12:30", description: "Lunch" },
            { time: "15:30", description: "Transport to Gym" },
            {
              time: "16:15 - 19:00",
              description: "Training & Training Photos",
            },
            { time: "19:30", description: "Dinner" },
            { time: "20:30", description: "Coaching Education" },
          ],
        },

        // » WEDNESDAY, JULY 16
        {
          id: "wednesday-july-16",
          title: "» WEDNESDAY, JULY 16",
          items: [
            { time: "7:15", description: "Breakfast" },
            { time: "8:00", description: "Transport to Gym" },
            { time: "8:45 - 11:40", description: "Training" },
            { time: "11:45", description: "Transport to Hotel" },
            { time: "12:30", description: "Lunch" },
            { time: "15:30", description: "Transport to Gym" },
            { time: "16:15 - 19:00", description: "Training" },
            { time: "19:00", description: "Transport to Hotel" },
            { time: "19:30", description: "Dinner" },
            { time: "20:30", description: "Coaching Education" },
          ],
        },

        // » THURSDAY, JULY 17
        {
          id: "thursday-july-17",
          title: "» THURSDAY, JULY 17",
          items: [
            { time: "7:15", description: "Breakfast" },
            { time: "8:00", description: "Transport to Gym" },
            { time: "8:45 - 11:40", description: "Training" },
            { time: "11:45", description: "Transport to Hotel" },
            { time: "12:30", description: "Lunch" },
            { time: "13:00", description: "Transport to Water Park" },
            { time: "13:30 - 17:30", description: "Water Park" },
            { time: "17:45", description: "Transport to Hotel" },
            { time: "19:00", description: "Dinner" },
            {
              time: "",
              description: "FREE EVENING FOR COACHES & GYMNASTS",
            },
          ],
        },

        // » FRIDAY, JULY 18
        {
          id: "friday-july-18",
          title: "» FRIDAY, JULY 18",
          items: [
            { time: "7:15", description: "Breakfast" },
            { time: "8:00", description: "Transport to Gym" },
            { time: "8:45 - 11:40", description: "Training" },
            { time: "11:45", description: "Transport to Hotel" },
            { time: "12:30", description: "Lunch" },
            { time: "15:30", description: "Transport to Gym" },
            { time: "16:15 - 19:00", description: "Training" },
            {
              time: "19:30",
              description:
                "FAREWELL FINAL DINNER & Presentation of Diplomas to Gymnasts/Coaches & Q/A session with expert coaches",
            },
          ],
        },

        // » SATURDAY, JULY 19
        {
          id: "saturday-july-19",
          title: "» SATURDAY, JULY 19",
          items: [
            {
              time: "7:15",
              description:
                "Breakfast & Check-out (for those departing on Saturday)",
            },
            { time: "8:00", description: "Transport to Gym" },
            {
              time: "8:45 - 11:40",
              description: "Gymnasts’ Presentation & Photos",
            },
            { time: "11:45", description: "Transport to Hotel" },
            {
              time: "",
              description:
                "Saturday, July 19 (Afternoon) & Sunday, July 20 - DEPARTURES",
            },
          ],
        },
      ],
    },
  },

  // 🔹 SECÇÃO CONTENT (InfoGridSection)
  contentSection: {
    id: "content",
    title: "General Informations",
    items: [
      {
        id: "registration",
        title: "★ REGISTRATION",
        lines: [
          "Registrations must be made in our website registration form until May 30.",
          "Registrations will only be accepted after submission of bank transfer of 50% of the final price.",
          "A proof of payment of the remaining 50% has to be made up to the moment of the check in.",
          "We'll accept a maximum of 40 gymnasts in a first come first served basis.",
          "If available, it will be possible to register after June 15 with an extra payment per person.",
          "In case of cancellation of the camp, all the payments will be reimbursed.",
          "Website: www.wagtrainingcamp.sunlive.pt",
          "Mobile: (+356) 99 164 245",
          "Mail: events@sunlive.pt",
        ],
      },
      {
        id: "prices",
        title: "★ PRICES",
        lines: [
          "GYMNASTS",
          "Single room: €940",
          "Double/Twin room: €840",
          "Triple and more room: €780",
          "",
          "COACHES",
          "Single room: N/A",
          "Double/Twin room: €740",
          "Triple and more room: €680",
          "",
          "FAMILY",
          "Single room: N/A (upon request)",
          "Double/Twin room: €620",
          "Triple and more room: €560",
          "",
          "Extra nights at TOPAZ HOTEL:",
          "Single room: €110",
          "Double/Twin room: €95",
          "Triple and more room: €85",
          "",
          "EXTRA MEALS: €20",
        ],
      },
      {
        id: "extra-info",
        title: "► Additional services available at extra cost:",
        lines: [
          "Physiotherapy & Manual therapy treatments",
          "Water Park entrance",
          "Extra lunches and dinners outside the program",
          "Extra nights (the package includes 5 nights)",
        ],
      },
      {
        id: "bank",
        title: "► THE BANK DETAILS",
        lines: [
          "Bank: APS Bank Ltd",
          "Account Name: Sunlive Malta Ltd",
          "IBAN: MT43 APSB 7701 3000 0004 4900 0200 16",
          "Swift Code / BIC: APSBMTMT",
        ],
      },
      {
        id: "package",
        title: "► Package Inclusions & Additional Costs:",
        lines: [
          "5 nights at Topaz Hotel* on a full-board basis.",
          "Free access to the outdoor swimming pool (as per hotel regulations).",
          "Free Wi-Fi.",
          "Transfers to/from the airport.",
          "Transfers between the hotel and gym during the camp.",
          "Camp coordination and coaching team expert services.",
          "Theoretical lectures (for coaches).",
          "Camp diploma and photo souvenirs for all gymnasts and coaches.",
          "Surveillance and basic physiotherapy support.",
        ],
      },
    ],
  },

  // 🔹 SECÇÃO HOTEL – TOPAZ HOTEL
  hotelSection: {
    id: "hotel",
    title: "Topaz Hotel",
    videoSrc: "https://www.youtube.com/embed/GlQCSUtnb3E?rel=0",
    videoTitle: "Topaz Hotel - Bugibba, Malta",
    addressTitle: "Address:",
    addressLines: [
      "Topaz Hotel,",
      "Censu Tanti street,",
      "Bugibba,",
      "SPB3025",
    ],
    contactsTitle: "Contacts:",
    contactsLines: ["Tel: +356 20146000", "reservations@topaz.com.mt"],
    websiteLabel: "Website",
    websiteHref: "https://topaz.com.mt/",
  },

  contactsSection: {
    id: "contacts",
    logo: {
      src: wagVerticalLogo,
      alt: "Sunlive International WAG Training Camp",
    },
    columns: [
      {
        id: "address",
        title: "Address",
        lines: [
          "GymStars Malta",
          "Attrans, Mdina Road, Haz-Zebbug,",
          "Malta ZBG 9018",
        ],
      },
      {
        id: "contacts",
        title: "Contacts",
        lines: ["@: events@sunlive.pt", "M: (+356) 99 164 245"],
      },
      {
        id: "links",
        title: "Links",
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
      label: "www.wagtrainingcamp.sunlive.pt/malta",
      href: "https://wagtrainingcamp.sunlive.pt/malta",
    },
    followLabel: "FOLLOW US",
    socialLinks: [
      {
        id: "facebook",
        label: "Facebook",
        href: "https://www.facebook.com/SunliveInternationalWAGTrainingCamp/",
      },
      {
        id: "youtube",
        label: "YouTube",
        href: "https://www.youtube.com/channel/UC_83bWDr30mR9fw8JETjHcw",
      },
    ],
    
  },
    footer: {
    text: "© Copyright 2026 Sunlive - All Rights Reserved",
  },

};

