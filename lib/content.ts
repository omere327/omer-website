// Copy and data for the home page, taken from the v4 design.
// Inner pages (Work, Insights, About, Contact) were not in the export, so nav links point at home-page sections.

export const EMAIL = "omerejaz@sensviz.com";
export const LINKEDIN = "https://www.linkedin.com/in/mohammad-omer-ejaz/";
export const INSTAGRAM = "https://www.instagram.com/qureshiomer/";
export const X_URL = "https://x.com/m_omerejaz";
export const X_HANDLE = "@m_omerejaz";

// Omer's profiles: the footer icons, the Elsewhere links and the Person's sameAs in the structured data.
export const socials = [
  { label: "LinkedIn", href: LINKEDIN, icon: "linkedin" },
  { label: "Instagram", href: INSTAGRAM, icon: "instagram" },
  { label: "X", href: X_URL, icon: "x-social" },
] as const;

export const navLinks = [
  { id: "work", label: "Work", href: "/#built" },
  { id: "insights", label: "Insights", href: "/#ideas" },
  { id: "about", label: "About", href: "/#about" },
];

// Facts used in copy and structured data. SensViz details are from sensviz.com (checked 21 October 2026).
export const SITE_URL = "https://omerejaz.com";
export const SENSVIZ = {
  name: "SensViz",
  url: "https://sensviz.com",
  description:
    "SensViz is a custom AI development and software company that builds AI systems and software products for startups and growing businesses.",
  offices: [
    { city: "London", street: "71-75 Shelton Street, Covent Garden", postcode: "WC2H 9JQ", country: "GB" },
    { city: "Lahore", street: "99, Block C, Valencia", postcode: "54000", region: "Punjab", country: "PK" },
  ],
};

export const navCta = { label: "Start a conversation", href: "/#contact" };

export const buildSteps = [
  { name: "Positioning", note: "What it is, and for whom.", status: "Done" },
  { name: "Brand", note: "How it is seen and remembered.", status: "Done" },
  { name: "Product", note: "What people actually use.", status: "Done" },
  { name: "Business", note: "What it earns, and how it grows.", status: "Building now", current: true },
];

export const practice = [
  {
    name: "Brand strategy",
    statement: "A brand is the whole business, seen from outside.",
    body: "Brand positioning, digital presence, content and customer experience for founders and startups, treated as one asset rather than four projects.",
    tags: ["brand positioning", "founder brand", "thought leadership"],
  },
  {
    name: "Business growth",
    statement: "Where the brand has to pay for itself.",
    body: "Business models, pricing and go-to-market strategy that follow from a clear position.",
    tags: ["business strategy", "go-to-market", "pricing"],
  },
  {
    name: "AI product development",
    statement: "Technology where it earns its place.",
    body: "Custom AI products, AI agents and software built with SensViz, each one attached to a real business need.",
    tags: ["AI products", "AI automation", "custom software"],
  },
  {
    name: "Product delivery",
    statement: "Teams that turn plans into product.",
    body: "Product strategy, building teams, managing delivery and shipping. The practical work most strategy skips.",
    tags: ["product strategy", "delivery", "teams"],
  },
];

// SensViz's service lines, named as sensviz.com names them.
export const capabilities = [
  {
    title: "AI product development",
    change: "New AI products and features that were not possible before.",
    questions: [
      "What will a customer do differently once this exists?",
      "Is AI the simplest way to get there?",
      "How will we know it works?",
    ],
  },
  {
    title: "Agentic AI and automation",
    change: "AI agents and automations that take repetitive work off a team.",
    questions: [
      "Which process costs the most time today?",
      "What should stay manual on purpose?",
      "Where must a person approve the work?",
    ],
  },
  {
    title: "Generative AI and LLMs",
    change: "Documents, messages and conversations turned into structured work with large language models.",
    questions: ["Which text arrives every day?", "What happens to it now?", "How do we check what the model writes?"],
  },
  {
    title: "Computer vision",
    change: "Visual work, such as inspection or monitoring, handled by software.",
    questions: ["What does a person look for today?", "What does a mistake cost?", "Where does the camera actually sit?"],
  },
  {
    title: "Data and analytics",
    change: "Decisions made on evidence rather than instinct.",
    questions: ["Which decision are we trying to improve?", "Is the data good enough to trust?", "Who acts on the answer?"],
  },
  {
    title: "Custom software",
    change: "Web apps, mobile apps and the systems a business runs on, built around how it actually works.",
    questions: [
      "Which workflow should the software fit?",
      "What has to work on a phone?",
      "Who owns it after launch?",
    ],
  },
];

// Each product is shown as an animated scene of how it works (components/work/scenes.tsx), drawn in the site's tones.
export type WorkItem = {
  span: 5 | 7 | 12;
  title: string;
  summary: string;
  tech: string[];
  scene: "grantmatch" | "cvjury" | "playano" | "sipp" | "artile";
  label: string;
};

export const work: WorkItem[] = [
  {
    span: 7,
        title: "GrantMatch",
    summary: "An AI grant-matching platform that finds and ranks funding opportunities for a project.",
    tech: ["LLMs", "recommendation engine", "vector database"],
    scene: "grantmatch",
    label: "Animation of GrantMatch: a project is typed in and three matching grants rank themselves by fit.",
  },
  {
    span: 5,
        title: "CVJury",
    summary: "An AI cover letter generator that writes to a user’s role and field.",
    tech: ["LLMs", "NLP"],
    scene: "cvjury",
    label: "Animation of CVJury: a role and field are chosen and a cover letter writes itself line by line.",
  },
  {
    span: 5,
        title: "Playano",
    summary: "A piano-learning app that uses computer vision to guide a learner while they play.",
    tech: ["computer vision"],
    scene: "playano",
    label: "Animation of Playano: the notes of Ode to Joy fall onto a keyboard and each key lights as it is played.",
  },
  {
    span: 7,
        title: "SIPP",
    summary: "A water-quality monitoring product that forecasts trends with time-series models.",
    tech: ["time-series forecasting"],
    scene: "sipp",
    label: "Animation of SIPP on a phone: a fountain's flow is scored, read at 4.3 gallons per minute and charted, then a filter alert arrives.",
  },
  {
    span: 12,
        title: "AR Tile",
    summary: "An augmented reality flooring visualiser that previews tiles and planks in a photo of a real room.",
    tech: ["computer vision", "augmented reality"],
    scene: "artile",
    label: "Animation of AR Tile: a floor is scanned and measured, then square tile, oak plank and stone slab are laid over the room in turn.",
  },
];

// Clients, shown as their logos (public/logos, trimmed; CV Jury's dark lettering lifted and Playano's dark
// background box removed so both read on black).
// Clients without a logo file yet are set as their name in the display face.
export type Client = { name: string; logo?: { src: string; w: number; h: number } };
export const clients: Client[] = [
  { name: "CV Jury", logo: { src: "/logos/cv-jury.png", w: 152, h: 57 } },
  { name: "GrantMatch", logo: { src: "/logos/grantmatch.png", w: 177, h: 48 } },
  { name: "Playano Education", logo: { src: "/logos/playano-education.png", w: 179, h: 41 } },
  { name: "SIPP", logo: { src: "/logos/sipp.png", w: 123, h: 59 } },
  { name: "AR Tile", logo: { src: "/logos/ar-tile.png", w: 141, h: 59 } },
  { name: "Bidsters", logo: { src: "/logos/bidsters.png", w: 210, h: 57 } },
  { name: "Fossilite.ai", logo: { src: "/logos/fossilite-ai.png", w: 145, h: 67 } },
  { name: "City Detect", logo: { src: "/logos/city-detect.png", w: 206, h: 39 } },
  { name: "ZenPro", logo: { src: "/logos/zenpro.png", w: 187, h: 48 } },
  { name: "Catalyzing Concepts", logo: { src: "/logos/catalyzing-concepts.png", w: 235, h: 49 } },
];

// SensViz's ratings and partner badges, as supplied by the owner (public/badges).
export const recognition = [
  { name: "Clutch", note: "Rated 4.8 out of 5 by clients", src: "/badges/clutch.png", w: 129, h: 63 },
  { name: "Google", note: "5.0 average rating", src: "/badges/google-rating.png", w: 149, h: 77 },
  { name: "AWS Partner", note: "Solution Provider", src: "/badges/aws-partner.png", w: 57, h: 57 },
  { name: "Tech Behemoths", note: "Trusted on Tech Behemoths", src: "/badges/tech-behemoths.png", w: 139, h: 50 },
];

export const values = [
  { a: "Execution", b: "hype" },
  { a: "Strategy", b: "buzzwords" },
  { a: "Outcomes", b: "claims" },
];

export const questions = [
  { topic: "Brand building", title: "What does a founder’s personal brand owe the business behind it?" },
  { topic: "AI", title: "Which parts of a business should AI run, and which should it never touch?" },
  { topic: "Entrepreneurship", title: "How small can a team be and still build a real product?" },
  { topic: "Strategy", title: "When is a new business model actually new?" },
];

export const footCols = [
  {
    title: "Site",
    links: [
      { label: "Work", href: "/#built" },
      { label: "Insights", href: "/#ideas" },
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
    ],
  },
  {
    title: "SensViz",
    links: [
      { label: "About SensViz", href: "https://sensviz.com" },
      { label: "AI development services", href: "https://sensviz.com/services/" },
      { label: "SensViz blog", href: "https://sensviz.com/blog/" },
      { label: "Contact SensViz", href: "https://sensviz.com/contact-us/" },
    ],
  },
  {
    title: "Elsewhere",
    links: [
      { label: "LinkedIn", href: LINKEDIN },
      { label: "Instagram", href: INSTAGRAM },
      { label: "X (Twitter)", href: X_URL },
      { label: "Email", href: `mailto:${EMAIL}` },
    ],
  },
];

// Answers to what people search about Omer and SensViz. Shown on the page (components/sections/Faq.tsx) and
// mirrored word for word in the FAQPage structured data (components/seo/StructuredData.tsx).
export const faqs = [
  {
    id: "who-is-omer-ejaz",
    q: "Who is Omer Ejaz?",
    a: "Mohammed Omer Ejaz is the co-founder and CEO of SensViz, a custom AI development and software company with offices in London and Lahore. He works on brand strategy, product strategy and AI products for startups and growing businesses.",
  },
  {
    id: "what-is-sensviz",
    q: "What is SensViz?",
    a: "SensViz is an AI software development company that builds custom AI systems and software products for startups and growing businesses. Its work covers agentic AI, generative AI and LLM solutions, computer vision, AI automation, data and analytics, and web and mobile apps.",
  },
  {
    id: "where-is-sensviz",
    q: "Where is SensViz based?",
    a: "SensViz has two regional offices: one at 71-75 Shelton Street in Covent Garden, London, and one in Valencia, Lahore, Pakistan. Omer Ejaz is based in Lahore.",
  },
  {
    id: "what-does-omer-help-with",
    q: "What does Omer Ejaz help businesses with?",
    a: "Omer Ejaz helps founders connect brand, product and technology: brand positioning, business and go-to-market strategy, AI product development with SensViz, and building the team that ships it.",
  },
  {
    id: "what-has-sensviz-built",
    q: "What AI products has SensViz built?",
    a: "SensViz has built GrantMatch, an AI grant-matching platform; CVJury, an AI cover letter generator; Playano, a computer vision piano-learning app; SIPP, a water-quality forecasting product; and AR Tile, an augmented reality flooring visualiser.",
  },
  {
    id: "how-to-start",
    q: "How do I start a project with Omer Ejaz or SensViz?",
    a: `Email Omer at ${EMAIL} with what you are building, or use the contact page on sensviz.com. A short note on the business, the problem and the timeline is enough to start.`,
  },
];
