// ✏️ EDIT THIS FILE to change what your portfolio says.
// Everything on the page comes from here — no need to touch the other files.
//
// 🖼️ IMAGES: put picture files in the public/images folder using the "file"
// names below. Any of .jpg, .jpeg, .png or .webp works, e.g. portrait.jpg.
// Until a file is added, you'll see a labelled box on your computer, and
// nothing on the published site.

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
    file: "portrait",
    label: "Your portrait",
    alt: "Portrait of Dorcas Adewumi",
  },
};

// Each { ... } block is one card under "Selected work".
// Optional fields:
//   status: a small label on the card, e.g. "In development"
//   contribution: shown as "My contribution: ..."
//   image: a picture shown at the top of the card
//   link + linkLabel: adds a button, e.g. link: "https://...", linkLabel: "Learn more"
export const projects = [
  {
    name: "KNOWN",
    description:
      "A Scripture-centred tool developed with a team for Christian international students carrying worry about conflict back home. Users begin by choosing a picture that reflects their experience, then explore Scripture and respond through prayer or connection with someone.",
    contribution:
      "leading the team and shaping the concept, user journey, content, and pitch.",
    image: {
      file: "known-screenshot",
      label: "KNOWN app screenshot",
      alt: "Screenshot of the KNOWN app",
    },
  },
  {
    name: "Honours Research — Making Better Use of Existing Lab Tools",
    description:
      "For my honours thesis at Brock University, I explored a potentially more cost-effective way to measure how cells use oxygen. My research investigated whether an existing oxygen-monitoring system could be adapted for this purpose.",
    image: {
      file: "honours-research",
      label: "Honours research photo",
      alt: "Honours research at Brock University",
      optional: true,
    },
  },
  {
    name: "Identity Redefined",
    description:
      "Through my podcast and writing, I explore identity in Christ, Scripture, and what it looks like to live out what we believe.",
    image: {
      file: "identity-redefined-cover",
      label: "Identity Redefined podcast cover",
      alt: "Identity Redefined podcast cover art",
    },
  },
  {
    name: "Identity to Impact",
    status: "In development",
    description:
      "Identity to Impact is my passion project for young people in Liberia, using science, technology, engineering, arts, and mathematics (STEAM) as tools to explore identity, build confidence, and develop a mindset of possibility. It connects creative, hands-on learning with how young people see themselves and what they believe they can contribute.",
    image: {
      file: "identity-to-impact",
      label: "Identity to Impact project image",
      alt: "Identity to Impact project",
    },
  },
];

export const community = {
  items: [
    {
      name: "F.O.C.U.S. — Friends of College and University Students",
      description:
        "Served as an ambassador, intern, and club president during university.",
    },
    {
      name: "SHESees",
      description:
        "Planning and facilitating creative, faith-based sessions for girls to build confidence and connection.",
    },
  ],
  image: {
    file: "community",
    label: "Community & Leadership photo",
    alt: "Dorcas with her community",
    optional: true,
  },
};

// Leave a value as "" to hide that link.
export const contact = {
  email: "d.abimbola01@gmail.com",
  linkedin: "https://www.linkedin.com/in/dade01/",
};
