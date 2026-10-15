// ✏️ EDIT THIS FILE to change what your portfolio says.
// Everything on the page comes from here, so there's no need to touch the other files.
//
// 🖼️ IMAGES live in the public/images folder. To show one, add an image entry:
//   image: { src: "/images/my-file.jpg", width: 1600, height: 900, alt: "Describe it" }
// width and height are the picture's real size in pixels (they keep its shape correct).

export const profile = {
  name: "Dorcas Adewumi",
  initials: "DA",
  tagline: "Curious about people. Drawn to ideas. Rooted in faith.",
  intro:
    "I’m a Biomedical Sciences graduate, writer, and creative who enjoys bringing different people and perspectives together. This is a place for the things I’m building, exploring, and learning along the way.",
  about: [
    "I’m Nigerian-Canadian: born in Kaduna, raised in Lagos, and moved to Canada when I was ten. My interests span research, writing, creativity, and community. My Christian faith shapes how I approach life, and I enjoy exploring how these interests can come together to serve people.",
  ],
  image: {
    src: "/images/portrait.jpg",
    width: 1254,
    height: 1254,
    alt: "Portrait of Dorcas Adewumi smiling",
  },
};

// Each { ... } block is one card under "Selected work".
// Optional fields:
//   status: a small label on the card, e.g. "In development"
//   contribution: shown as "My contribution: ..."
//   image: a picture shown at the top of the card (see above)
//   link + linkLabel: adds a button, e.g. link: "https://...", linkLabel: "Learn more"
export const projects = [
  {
    name: "KNOWN",
    description:
      "KNOWN is a Scripture-centred tool that helps displaced Christian international students lament, bringing their grief, fear, and questions about conflict back home honestly before God. Beginning with a picture when words are hard to find, it guides them into Scripture and a personal response through prayer, with an option to reach out to someone for support.",
    contribution:
      "leading the team and shaping the concept, user journey, content, and pitch.",
    image: {
      src: "/images/known-screenshot.png",
      width: 3000,
      height: 2000,
      alt: "KNOWN app screens: choosing a picture that feels familiar, then reading Psalm 13",
    },
  },
  {
    name: "Honours Research: Making Better Use of Existing Lab Tools",
    description:
      "For my honours thesis at Brock University, I explored a potentially more cost-effective way to measure how cells use oxygen. My research investigated whether an existing oxygen-monitoring system could be adapted for this purpose.",
  },
  {
    name: "Identity Redefined",
    description:
      "Through my podcast and writing, I explore identity in Christ, Scripture, and what it looks like to live out what we believe.",
    link: "https://open.spotify.com/show/6LKnaN7KjarVrf4Z0R7Plb",
    linkLabel: "Listen on Spotify",
  },
  {
    name: "Identity to Impact",
    description:
      "Identity to Impact was my passion project for young people in Liberia, using science, technology, engineering, arts, and mathematics (STEAM) as tools to explore identity, build confidence, and develop a mindset of possibility. It connected creative, hands-on learning with how young people see themselves and what they believe they can contribute.",
    image: {
      src: "/images/identity-to-impact.png",
      width: 1600,
      height: 900,
      alt: "Identity to Impact participants in Liberia holding up their certificates",
    },
  },
];

export const community = [
  {
    name: "F.O.C.U.S. (Friends of College and University Students)",
    description:
      "Served as an ambassador, intern, and club president during university.",
  },
  {
    name: "SHESees",
    description:
      "Planning and facilitating creative, faith-based sessions for girls to build confidence and connection.",
  },
];

// Leave a value as "" to hide that link.
export const contact = {
  email: "d.abimbola01@gmail.com",
  linkedin: "https://www.linkedin.com/in/dade01/",
};
