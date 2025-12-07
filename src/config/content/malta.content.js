// src/config/content/malta.content.js
import sunliveGroupLogo from "../../assets/logos/sunlive-group.png";
import posterMalta from "../../assets/posters/poster-malta.png";
import bannerMalta from "../../assets/banners-malta-anadia/banner-malta.png";
import fundoMalta from "../../assets/background-malta/fundo-malta.jpg";

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
    id: "registration",
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
    id: "coaching-team",
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
};
