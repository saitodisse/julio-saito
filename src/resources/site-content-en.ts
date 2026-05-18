export const publicName = "Julio Saito";

export const person = {
  fullName: "Julio Makdisse Saito",
  firstName: "Julio",
  role: "Senior Software Engineer & Solutions Architect",
  location: "São Bernardo do Campo, São Paulo, Brazil",
  email: "saitodisse@gmail.com",
  phone: "+55 11 96569-7834",
  github: "https://github.com/saitodisse",
  linkedin: "https://www.linkedin.com/in/julio-makdisse-saito-868707a",
  languages: ["Portuguese", "English"],
} as const;

export const professionalSummary = `I am a senior software engineer with more than 20 years of experience building digital products, predictable architectures, and technical solutions for real business problems.

My work goes beyond coding: I help clarify the right problem, propose viable paths, organize execution, and turn ideas into reliable systems. I use TypeScript, React, Node.js, cloud, and AI agents to accelerate development without giving up on tests, quality, or scalability.

I have strong experience orchestrating coding LLMs, technical workflows, and teams/tools to turn complex problems into clear, sustainable, and well-documented deliveries.`;

export const credentials = [
  { label: "Experience", value: "20+ years" },
  { label: "Stack", value: "TypeScript, React, Next.js" },
  { label: "Focus", value: "Architecture, TDD, cloud" },
  { label: "Interest", value: "Applied AI and open source" },
] as const;

export type FeaturedProject = {
  name: string;
  description: string;
  github?: string;
  site?: string;
  icon: "leaf" | "music" | "handshake" | "terminal";
  tags: readonly string[];
  image?: string;
  imageAlt?: string;
  imageFit?: "cover" | "contain";
  imageBackground?: string;
};

export const featuredProjects = [
  {
    name: "Grana Clara",
    description:
      "Offline-first app to import, categorize, and analyze Nubank statements and transactions with local privacy.",
    github: "https://github.com/saitodisse/grana-clara",
    site: "https://grana-clara.vercel.app/",
    icon: "leaf",
    image: "/images/projects/grana-clara.png",
    imageAlt:
      "Wallet illustration with coins and an upward chart, representing financial organization and growth",
    tags: ["React", "Tailwind", "Offline-first"],
  },
  {
    name: "svguitar-react",
    description:
      "React library for rendering chord diagrams in SVG, with a lean API and a focus on customization.",
    github: "https://github.com/saitodisse/svguitar-react",
    site: "https://svguitar-react.vercel.app/",
    icon: "music",
    image: "/images/projects/svguitar-react.png",
    imageAlt: "SVG chord diagram from svguitar-react",
    tags: ["TypeScript", "React", "SVG"],
  },
  {
    name: "SoM&A Deals",
    description:
      "Digital M&A platform for SMBs, connecting analysis, commercial relationships, and negotiation flow.",
    site: "https://www.somadeals.com/",
    icon: "handshake",
    image: "/images/projects/soma-deals.webp",
    imageAlt: "Soma Deals logo with handshake symbol and green typography",
    imageFit: "contain",
    imageBackground: "#ffffff",
    tags: ["Next.js", "Cloud", "Product"],
  },
  {
    name: "achordex",
    description:
      "App to manage, search, and visualize chord charts, with repertoire organization and reading modes.",
    site: "https://achordex.vercel.app/",
    icon: "terminal",
    image: "/images/projects/achordex.png",
    imageAlt:
      "achordex interface with chord charts, repertoire, and musical reading UI",
    tags: ["Next.js", "Convex", "Search"],
  },
] as const satisfies readonly FeaturedProject[];

export const experiences = [
  {
    company: "Soma Deals",
    role: "Senior Software Engineer",
    period: "Aug 2025 - Present",
    location: "São Paulo, Brazil · Remote",
    summary:
      "Development of a digital M&A platform for SMBs, covering front-end, back-end, and AWS infrastructure.",
    bullets: [
      "Built features in Next.js and TypeScript to support the platform's commercial and operational flow.",
      "Kept the technical base aligned with a simple experience for business owners and industry professionals.",
      "Participated in infrastructure and continuous delivery decisions with a focus on security and predictability.",
    ],
  },
  {
    company: "Linx Commerce",
    role: "Solutions Architect",
    period: "Dec 2021 - Jun 2024",
    location: "Brazil",
    summary:
      "Technical leadership of a WhatsApp customer service system and the product's architectural evolution.",
    bullets: [
      "Led and coordinated a team of up to four developers, also acting as Product Owner and Scrum Master.",
      "Developed conversation flows, product lists, and a virtual cart using the official WhatsApp API.",
      "Migrated operations to Vercel with AWS Cloud Functions and PostgreSQL on Google Cloud to balance scale and cost.",
      "Organized CI/CD, deployment automation, and TDD practices, reducing complexity without slowing delivery.",
    ],
  },
  {
    company: "Semantix",
    role: "Web Developer",
    period: "Nov 2020 - Dec 2021",
    location: "Brazil",
    summary:
      "Delivery of web products for live commerce and conversational automation, plus parallel open source work.",
    bullets: [
      "Worked on live-shopping and intelligent-chat projects, combining video, chat, cart, and Dialogflow bots.",
      "Created open source Next.js templates to accelerate adoption of a consistent technical base.",
      "Practiced unit and integration testing in deliveries with strong product-engineering integration.",
    ],
  },
  {
    company: "Latife Gastronomia Árabe",
    role: "CTO / Programmer",
    period: "Feb 2017 - Nov 2020",
    location: "Brazil",
    summary:
      "Sole owner of the family business technology operation, from management to deployment.",
    bullets: [
      "Centralized technical operations and product decisions in a lean-resource context.",
      "Used Trello, GitHub, AWS, Heroku, Google Cloud, and Vercel to keep operations stable and easy to evolve.",
      "Worked with TypeScript, Hasura, PostgreSQL, and Next.js to deliver automation and direct interfaces.",
    ],
  },
  {
    company: "Azuki",
    role: "Developer",
    period: "Oct 2014 - Nov 2016",
    location: "Brazil",
    summary:
      "Major contribution to AZK, an open source tool for orchestrating development environments.",
    bullets: [
      "Was one of the main contributors to AZK, working on development, community support, and project management.",
      "Worked with TDD practices and collaboration flows typical of a high-impact open source project.",
      "Helped consolidate a solution that predated docker-compose for technical teams.",
    ],
  },
  {
    company: "Integgro Tecnologia da Informação",
    role: "Developer",
    period: "2013",
    location: "Brazil",
    summary:
      "Work on projects with ASP.NET MVC and JavaScript, including a CI base still in use.",
    bullets: [
      "Developed applications in ASP.NET MVC and JavaScript with a focus on consistent delivery.",
      "Structured a CI server that remained in use after I left the company.",
    ],
  },
  {
    company: "Grupo SHC",
    role: "Developer & Instructor",
    period: "Mar 2006 - Sep 2012",
    location: "Brazil",
    summary:
      "Technical architecture of Apollo Web, team training, and technology decisions in a large company project.",
    bullets: [
      "Acted as technical architect of Apollo Web, the group's largest software project.",
      "Led technical choices, training, and CI/CD practice setup.",
      "Worked with ASP.NET, SQL Server, NHibernate, SAP, and open source tools.",
    ],
  },
  {
    company: "everis",
    role: "Programmer Analyst",
    period: "May 2005 - Feb 2006",
    location: "Brazil",
    summary:
      "Projects for Santander Banespa with systems analysis, web development, and technical collaboration.",
    bullets: [
      "Participated in systems analysis and web development in Visual Basic 6 and Oracle.",
      "Provided technical leadership in a large corporate context.",
    ],
  },
  {
    company: "GEMPI",
    role: "Developer",
    period: "Aug 2003 - Apr 2005",
    location: "Brazil",
    summary: "First professional deliveries on projects for Embratel and Telemar.",
    bullets: [
      "Worked on project management, database migration, and web development.",
      "Delivered routines with Oracle and integration with operational needs of the time.",
    ],
  },
] as const;

export const education = [
  {
    name: "FATEC-SP - Faculdade de Tecnologia de São Paulo",
    description: "Information Technology Technologist, 2001-2006",
  },
] as const;

export const skillGroups = [
  {
    title: "Front-end",
    items: ["TypeScript", "JavaScript", "React", "Next.js", "Tailwind CSS"],
  },
  {
    title: "Back-end and data",
    items: [
      "Node.js",
      "GraphQL",
      "Hasura",
      "PostgreSQL",
      "SQL Server",
      "Oracle",
    ],
  },
  {
    title: "Cloud and DevOps",
    items: [
      "AWS",
      "Vercel",
      "Google Cloud",
      "Heroku",
      "Docker",
      "Kubernetes",
      "CI/CD",
    ],
  },
  {
    title: "Architecture and quality",
    items: [
      "TDD",
      "Serverless",
      "DDD/OOP",
      "Scalability",
      "Maintainability",
    ],
  },
  {
    title: "Applied AI",
    items: ["Strategic AI", "RAG", "automation", "problem solving"],
  },
] as const;

export const contactLinks = [
  {
    label: "Email",
    value: person.email,
    href: `mailto:${person.email}`,
    icon: "mail",
  },
  {
    label: "LinkedIn",
    value: "julio-makdisse-saito-868707a",
    href: person.linkedin,
    icon: "linkedin",
  },
  {
    label: "GitHub",
    value: "saitodisse",
    href: person.github,
    icon: "github",
  },
  {
    label: "Location",
    value: person.location,
    icon: "map",
  },
] as const;
