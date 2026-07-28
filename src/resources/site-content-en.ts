import { skillGroups as sharedSkillGroups } from "@/resources/skill-groups";

export const publicName = "Julio Saito";

export const person = {
	fullName: "Julio Makdisse Saito",
	firstName: "Julio",
	role: "Senior Software Engineer",
	location: "Ubatuba, São Paulo, Brazil",
	email: "saitodisse@gmail.com",
	phone: "+55 11 96569-7834",
	github: "https://github.com/saitodisse",
	linkedin: "https://www.linkedin.com/in/julio-saito",
	languages: [
		{ name: "Portuguese", level: "Native" },
		{ name: "English", level: "Full professional proficiency" },
		{ name: "Spanish", level: "Limited working proficiency" },
	],
} as const;

export const professionalSummary =
	"I turn business problems into reliable digital products by combining architecture, TypeScript, React, Node.js, Next.js, PostgreSQL, and cloud. I work end to end, from modeling and integration to production and continuous evolution. My current focus is responsible applied AI: orchestrating agents to accelerate specification, implementation, testing, and documentation while preserving technical decisions, quality, and product control.";

export const credentials = [
	{ label: "Experience", value: "20+ years" },
	{ label: "Specialty", value: "TypeScript, React, and Node.js" },
	{ label: "Scope", value: "Product, architecture, and cloud" },
	{ label: "Current focus", value: "Applied AI with governance" },
] as const;

export type FeaturedProject = {
	name: string;
	description: string;
	github?: string;
	site?: string;
	siteLabel?: string;
	internalSite?: boolean;
	detailPath?: string;
	icon: "leaf" | "music" | "handshake" | "terminal";
	category?: "achorde" | "other";
	tags: readonly string[];
	image?: string;
	imageAlt?: string;
	imageFit?: "cover" | "contain";
	imageBackground?: string;
	gallery?: readonly { src: string; alt: string }[];
	details?: {
		features: readonly { title: string; description: string }[];
		installation?: { title?: string; code: string; language: string };
		usage?: { title?: string; code: string; language: string };
	};
};

const achordeProducts = [
	{
		name: "AC15",
		detailPath: "/projetos/ac15",
		description:
			"Private offline-first app for reading chord charts, organizing repertoire, creating diagrams, and keeping musical work available locally.",
		site: "https://ac15.vercel.app/",
		icon: "terminal",
		image: "/images/projects/achorde/ac15.png",
		imageAlt:
			"A librarian beetle among chord sheets and instruments, representing AC15",
		tags: [
			"Next.js",
			"React",
			"OfflineFirst",
			"Music",
			"Chord charts",
			"Repertoire",
			"Local catalog",
			"Diagrams",
		],
		details: {
			features: [
				{
					title: "Catalog available on the device",
					description:
						"Downloads and keeps a local music catalog so consulting it does not depend on an active connection.",
				},
				{
					title: "Chord-chart reading with key control",
					description:
						"Organizes charts by artist and lets musicians adjust key and type size while reading.",
				},
				{
					title: "Chord library and diagrams",
					description:
						"Brings together chord references and their diagrams to support repertoire practice and performance.",
				},
				{
					title: "Controlled synchronization",
					description:
						"Shows sync status and keeps the local catalog as the musician's working foundation.",
				},
			],
			installation: {
				title: "Access",
				language: "text",
				code: `Available to authorized people at:
https://ac15.vercel.app/

No local installation is required.`,
			},
			usage: {
				title: "Common flow",
				language: "text",
				code: `1. Sync the catalog when a connection is available.
2. Choose a song from the local repertoire.
3. Adjust the key and chord-chart reading settings.
4. Consult chords and diagrams during performance.`,
			},
		},
	},
	{
		name: "Artist Portal",
		detailPath: "/projetos/portal-do-artista",
		description:
			"A public foundation for artists to present repertoire and identity in their own portal, with a chord-chart catalog ready for compatible readers.",
		github: "https://github.com/saitodisse/artist-portal-base",
		site: "https://saitodisse.github.io/artist-portal-base/",
		icon: "music",
		image: "/images/projects/achorde/portal-do-artista.png",
		imageAlt:
			"A curator beetle opening a path between musical creation and its audience",
		tags: [
			"Astro",
			"React",
			"Catalog",
			"Music",
			"Source catalog",
			"Markdown",
			"GitHub Pages",
			"Static site",
		],
		details: {
			features: [
				{
					title: "Public, readable portal",
					description:
						"Publishes an artist's identity, repertoire, and chord charts in a static experience ready for the public.",
				},
				{
					title: "Importable catalog",
					description:
						"Generates a read-only source catalog with a manifest, checksums, and entities for compatible tools.",
				},
				{
					title: "Markdown content under version control",
					description:
						"Models artists, songs, playable versions, and chord charts as straightforward files to review in Git.",
				},
				{
					title: "Updateable foundation for artists",
					description:
						"Creates a new portal from the base while preserving a path to receive improvements through an upstream remote.",
				},
			],
			installation: {
				language: "bash",
				code: `git clone https://github.com/saitodisse/artist-portal-base.git my-artist-portal
cd my-artist-portal
pnpm install
pnpm portal:init --source-id my-artist --name "My Artist"`,
			},
			usage: {
				language: "bash",
				code: `# update the profile and chord charts in catalog/
pnpm build:catalog
pnpm build
pnpm test`,
			},
		},
	},
	{
		name: "Achorde",
		detailPath: "/achorde",
		description:
			"A musical ecosystem with two applications — AC15 and Artist Portal — plus four core packages for domain, chord charts, diagrams, and voicings.",
		site: "/achorde#pacotes",
		siteLabel: "View packages",
		internalSite: true,
		icon: "music",
		gallery: [
			{
				src: "/images/projects/achorde/musical-domain.png",
				alt: "An archivist ant representing musical-domain",
			},
			{
				src: "/images/projects/achorde/tab-renderer.png",
				alt: "A typographer wasp representing tab-renderer",
			},
			{
				src: "/images/projects/achorde/svguitar-react.png",
				alt: "A weaving spider representing svguitar-react",
			},
			{
				src: "/images/projects/achorde/interactive-fretboard.png",
				alt: "A praying mantis representing interactive-fretboard",
			},
		],
		tags: ["TypeScript", "React", "Open Source", "Music"],
	},
] as const satisfies readonly FeaturedProject[];

export const achordeHomeProjects = [achordeProducts[2]] as const;

export const achordeProjects = [
	achordeProducts[0],
	achordeProducts[1],
	{
		name: "@achorde/musical-domain",
		detailPath: "/projetos/musical-domain",
		description:
			"Headless contracts and helpers for chords, parsed chord charts, diagnostics, and shared voicings.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/musical-domain",
		site: "https://achorde-musical-domain.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/musical-domain.png",
		imageAlt: "An archivist ant representing musical-domain shared contracts",
		tags: [
			"TypeScript",
			"Contracts",
			"Domain",
			"Music",
			"Open Source",
			"Headless",
			"AST",
			"Voicings",
			"Diagnostics",
		],
		details: {
			features: [
				{
					title: "Portable music contracts",
					description:
						"Defines stable types for chord charts, parsed tabs, diagnostics, and voicings without depending on React, SVG, or browser APIs.",
				},
				{
					title: "AST and parsing diagnostics",
					description:
						"Provides line and token structures so parsers and renderers share an explicit interpretation of a chord chart.",
				},
				{
					title: "Consistent voicings",
					description:
						"Standardizes low-to-high string coordinates and includes selection, ranking, and fingerboard-position normalization.",
				},
				{
					title: "Symbol normalization",
					description:
						"Normalizes chord labels and preserves spelling metadata to reduce ambiguity across consumers.",
				},
			],
			installation: {
				language: "bash",
				code: "pnpm add @achorde/musical-domain",
			},
			usage: {
				language: "ts",
				code: `import { normalizeChordSymbolLabel } from "@achorde/musical-domain";

const chord = normalizeChordSymbolLabel("C♯maj7");
// C#maj7`,
			},
		},
	},
	{
		name: "@achorde/tab-renderer",
		detailPath: "/projetos/tab-renderer",
		description:
			"Library for parsing and rendering chord charts with a headless core, React adapter, and styled viewer.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/tab-renderer",
		site: "https://tab-renderer-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/tab-renderer.png",
		imageAlt:
			"A typographer wasp among text and chords, representing tab-renderer",
		tags: [
			"TypeScript",
			"React",
			"Chord Sheets",
			"Open Source",
			"Parser",
			"Transposition",
			"AST",
			"Viewer",
			"Storybook",
		],
		details: {
			features: [
				{
					title: "Headless chord-chart core",
					description:
						"Handles parsing, transposition, and bar preparation without imposing a visual interface on consumers.",
				},
				{
					title: "AST with semantic tokens",
					description:
						"Keeps sections, lines, chords, lyrics, decorations, and spaces available for custom renderers and inspection.",
				},
				{
					title: "Composable React viewer",
					description:
						"Delivers a styled Tab plus primitives for composing interfaces with chords positioned above lyrics.",
				},
				{
					title: "Configurable styling and reading modes",
					description:
						"Lets each product adjust typography, colors, key, spacing, and chord/lyric visibility.",
				},
			],
			installation: {
				language: "bash",
				code: "pnpm add @achorde/tab-renderer @achorde/musical-domain",
			},
			usage: {
				language: "tsx",
				code: `import { Tab } from "@achorde/tab-renderer/react";

<Tab body={body} style={{ displayMode: "both", transposeNumber: 0 }} />;`,
			},
		},
	},
	{
		name: "@achorde/svguitar-react",
		detailPath: "/projetos/svguitar-react",
		description:
			"React library for rendering fretted-instrument diagrams in SVG from structured voicings.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/svguitar-react",
		site: "https://svguitar-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/svguitar-react.png",
		imageAlt:
			"A weaving spider turning a musical structure into an SVG diagram",
		tags: [
			"TypeScript",
			"React",
			"SVG",
			"Chords",
			"Open Source",
			"Diagrams",
			"Layout",
			"Responsive",
			"Storybook",
		],
		details: {
			features: [
				{
					title: "SVG chord diagrams",
					description:
						"Turns structured voicings into scalable diagrams for fretted instruments.",
				},
				{
					title: "Layouts for different orientations",
					description:
						"Provides horizontal or vertical views for right- and left-handed players, with consistent label orientation.",
				},
				{
					title: "Custom styling and layout strategy",
					description:
						"Exposes colors, dimensions, fonts, and swappable layout engines to fit a diagram to the product.",
				},
				{
					title: "Automatic high-position framing",
					description:
						"Adjusts the first visible fret when chord positions exceed the standard range.",
				},
			],
			installation: {
				language: "bash",
				code: "pnpm add @achorde/svguitar-react @achorde/musical-domain",
			},
			usage: {
				language: "tsx",
				code: `import { ChordDiagram } from "@achorde/svguitar-react";

<ChordDiagram voicing={voicing} view="vertical-right" />;`,
			},
		},
	},
	{
		name: "@achorde/interactive-fretboard",
		detailPath: "/projetos/interactive-fretboard",
		description:
			"React fretted-fingerboard editor for creating and changing voicings with mouse, touch, or pen.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/interactive-fretboard",
		site: "https://interactive-fretboard.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/interactive-fretboard.png",
		imageAlt:
			"A praying mantis using an instrument fingerboard to edit voicings",
		tags: [
			"TypeScript",
			"React",
			"Pointer",
			"Voicings",
			"Open Source",
			"SVG",
			"Mouse, touch, and pen",
			"Chord detection",
			"Controlled editor",
		],
		details: {
			features: [
				{
					title: "Direct fingerboard editing",
					description:
						"Creates and changes fingerings on a responsive SVG neck with mouse, touch, or pen.",
				},
				{
					title: "Precise pointer interaction",
					description:
						"Maps pointer positions to SVG geometry and keeps touch targets reliable across screen sizes.",
				},
				{
					title: "Finger and barre controls",
					description:
						"Uses mouse actions to cycle fingers, apply a sticky finger, and represent barres in a fingering.",
				},
				{
					title: "Controlled value with optional detection",
					description:
						"Works with a controlled FrettedInstrumentVoicing and can report the detected chord on each change.",
				},
			],
			installation: {
				language: "bash",
				code: "pnpm add @achorde/interactive-fretboard @achorde/musical-domain",
			},
			usage: {
				language: "tsx",
				code: `import "@achorde/interactive-fretboard/dist/interactive-fretboard.css";
import { InteractiveFretboard } from "@achorde/interactive-fretboard";

<InteractiveFretboard value={voicing} onChange={({ voicing }) => setVoicing(voicing)} />;`,
			},
		},
	},
] as const satisfies readonly FeaturedProject[];

const legacyProjects = [
	{
		name: "svguitar-react",
		description:
			"React library for rendering chord diagrams in SVG, with a lean API and a focus on customization.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/svguitar-react",
		site: "https://svguitar-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/svguitar-react.png",
		category: "achorde",
		imageAlt: "SVG chord diagram from svguitar-react",
		tags: [
			"TypeScript",
			"React",
			"SVG",
			"Music",
			"Chord Sheets",
			"Chords",
			"Diagrams",
			"Open Source",
		],
	},
	{
		name: "tab-renderer",
		description:
			"Open source library for parsing and rendering chord sheets with a headless core, React adapter, and styled viewer.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/tab-renderer",
		site: "https://tab-renderer-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/tab-renderer.png",
		category: "achorde",
		imageAlt: "Stylized chord sheet diagram representing tab-renderer",
		tags: [
			"TypeScript",
			"React",
			"SVG",
			"Music",
			"Chord Sheets",
			"Open Source",
			"Storybook",
		],
	},
	{
		name: "Grana Clara",
		detailPath: "/projetos/grana-clara",
		description:
			"Offline-first app to import, categorize, and analyze Nubank statements with local privacy.",
		github: "https://github.com/saitodisse/grana-clara",
		site: "https://grana-clara.vercel.app/",
		icon: "leaf",
		image: "/images/projects/grana-clara.png",
		imageAlt:
			"Wallet illustration with coins and an upward chart, representing financial organization and growth",
		tags: [
			"React",
			"Tailwind",
			"OfflineFirst",
			"Open Source",
			"Finance",
			"Nubank",
			"Bills",
			"Charts",
		],
		details: {
			features: [
				{
					title: "Financial data kept on the device",
					description:
						"Processes files in the browser and persists information locally, without an account, remote database, or banking integration.",
				},
				{
					title: "Nubank CSV import",
					description:
						"Reads compatible statements and credit-card bills, identifies duplicate entries with a deterministic hash, and safely supports batch imports.",
				},
				{
					title: "Categorization that combines rules and human review",
					description:
						"Applies configurable keywords, preserves manual transaction adjustments, and provides bulk actions for correcting classifications.",
				},
				{
					title: "Local analytics and backups",
					description:
						"Combines search, period, category, and hidden-item filters with rankings and monthly trends, while exporting configuration as JSON.",
				},
			],
			installation: {
				title: "Local installation",
				language: "bash",
				code: "pnpm install\npnpm dev",
			},
			usage: {
				title: "Common flow",
				language: "text",
				code: `1. Export a Nubank bill or statement as CSV.
2. Import the file into Grana Clara.
3. Review suggested categories and correct them when needed.
4. Use filters and charts to review your spending.`,
			},
		},
	},
	{
		name: "achorde-musical-domain",
		description:
			"Public package of shared musical contracts for chord sheets, parsed tabs, diagnostics, and voicings.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/musical-domain",
		icon: "music",
		image: "/images/projects/achorde/musical-domain.png",
		category: "achorde",
		imageAlt:
			"Square artwork for achorde-musical-domain with musical contracts and shared abstraction lines",
		tags: ["TypeScript", "Contracts", "Domain", "Music", "Open Source"],
	},
	{
		name: "matter-js-experiments",
		detailPath: "/projetos/matter-js-experiments",
		description:
			"Physics game and simulation built with Matter.js, with a TypeScript typing layer for the engine and one of my first experiences with AI and coding agents.",
		github: "https://github.com/saitodisse/matter-js-experiments",
		site: "https://saitodisse.github.io/matter-js-experiments/",
		icon: "terminal",
		image: "/images/projects/matter-js-experiments.png",
		imageAlt:
			"Matter.js Experiments logo with yellow typography on a dark blue background",
		imageFit: "contain",
		imageBackground: "#060a19",
		tags: ["Open Source", "Game", "Physics", "Matter.js", "TypeScript"],
		details: {
			features: [
				{
					title: "Interactive physics simulation",
					description:
						"Uses Matter.js to simulate a ball pool with bodies, collisions, and real-time physical behavior.",
				},
				{
					title: "Pointer-based ball creation",
					description:
						"Creates one ball with a click or many at once by combining Ctrl with the left mouse button.",
				},
				{
					title: "Debug mode",
					description:
						"Provides a debug toggle to make the engine's behavior clearer while running experiments.",
				},
				{
					title: "Responsive scene",
					description:
						"Adapts the simulation to the window size to preserve the interactive experience across screen sizes.",
				},
			],
			installation: {
				title: "Local installation",
				language: "bash",
				code: "npm install\nnpm run dev",
			},
			usage: {
				title: "How to explore it",
				language: "text",
				code: `1. Open the simulation in a browser.
2. Click the scene to create a ball.
3. Use Ctrl + left click to create several balls.
4. Enable debug mode to inspect the physics.`,
			},
		},
	},
	{
		name: "SoM&A Deals",
		detailPath: "/projetos/soma-deals",
		description:
			"Digital M&A platform for SMBs, connecting analysis, commercial relationships, and negotiation flow.",
		site: "https://www.somadeals.com/",
		icon: "handshake",
		image: "/images/projects/soma-deals.png",
		imageAlt: "Soma Deals logo with handshake symbol and green typography",
		imageFit: "contain",
		imageBackground: "#ffffff",
		tags: [
			"Next.js",
			"Cloud",
			"Product",
			"M&A",
			"Subscription",
			"Payments",
			"Companies",
			"Franchises",
			"Negotiations",
		],
		details: {
			features: [
				{
					title: "Opportunities to buy, sell, and invest",
					description:
						"Connects companies and franchises with people looking to sell, buy, or invest, supplying information that supports decisions.",
				},
				{
					title: "AI matchmaking",
					description:
						"Supports the discovery of opportunities and commercial relationships that better fit each participant's goals.",
				},
				{
					title: "Deal Room for negotiations",
					description:
						"Organizes a dedicated stage for conducting an opportunity's negotiation with more context and security.",
				},
				{
					title: "Journeys for SMBs and franchises",
					description:
						"Serves people looking to sell, buy, invest, expand a franchise network, or start a business with market intelligence.",
				},
			],
			installation: {
				title: "Platform access",
				language: "text",
				code: `Visit:
https://app.somadeals.com/

Create an account or sign in to use the platform.`,
			},
			usage: {
				title: "Common flow",
				language: "text",
				code: `1. Choose whether you want to sell, buy, invest, or expand.
2. Complete information about your company or business goal.
3. Explore the suggested opportunities and connections.
4. Conduct the negotiation through the appropriate flow.`,
			},
		},
	},
	{
		name: "interactive-fretboard",
		description:
			"React fretted-fingerboard editor for creating and changing voicings with mouse, touch, or pen.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/interactive-fretboard",
		site: "https://interactive-fretboard.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/interactive-fretboard.png",
		category: "achorde",
		imageAlt:
			"A praying mantis using an instrument fingerboard to edit voicings",
		tags: ["TypeScript", "React", "Pointer", "Voicings", "Open Source"],
	},
	{
		name: "ac15",
		description:
			"Private offline-first platform that integrates contracts, parsing, rendering, persistence, and sync for the musical ecosystem.",
		icon: "terminal",
		image: "/images/projects/achorde/ac15.png",
		category: "achorde",
		imageAlt:
			"Square composition for ac15 with product layers, sync, and a local-first base",
		site: "https://ac15.vercel.app/",
		tags: ["Next.js", "React", "OfflineFirst", "Sync", "Architecture", "Music"],
	},
	{
		name: "BOM Recipe Calculator",
		detailPath: "/projetos/bom-recipe-calculator",
		description:
			"BOM calculator for nested recipes, with cost and weight calculations across multi-level ingredient trees.",
		github: "https://github.com/saitodisse/bom-recipe-calculator",
		site: "https://bom-recipe-calculator.deno.dev/",
		icon: "leaf",
		image: "/images/projects/bom-recipe-calculator.png",
		imageAlt:
			"BOM Recipe Calculator screen with product list, ingredients, and the Brownies example",
		tags: [
			"BOM",
			"Recipes",
			"Costs",
			"Weights",
			"JSR",
			"Deno",
			"Open Source",
			"Product Tree",
		],
		details: {
			features: [
				{
					title: "Cost and weight calculations in nested trees",
					description:
						"Calculates materials needed for complex recipes across multiple levels, accumulating each ingredient's cost and weight.",
				},
				{
					title: "Units and recursive relationships",
					description:
						"Works with units such as KG and UN and resolves relationships among products, subproducts, raw materials, and packaging.",
				},
				{
					title: "Functional, typed API",
					description:
						"Provides a side-effect-free approach, full TypeScript support, and compatibility with Deno and JSR.",
				},
				{
					title: "Production planning",
					description:
						"The materials-tree builder and production plan help calculate requirements for planned quantities and dates.",
				},
			],
			installation: {
				language: "bash",
				code: "deno add jsr:@saitodisse/bom-recipe-calculator",
			},
			usage: {
				language: "ts",
				code: `import { MaterialsTreeBuilder } from "jsr:@saitodisse/bom-recipe-calculator";

const tree = new MaterialsTreeBuilder({
  productsList: products,
  productCode: "bread4pack",
  initialQuantity: 1,
}).build();

console.log(tree.toHumanReadable());`,
			},
		},
	},
] as const satisfies readonly FeaturedProject[];

export const featuredProjects = legacyProjects.filter(
	(project) => !("category" in project && project.category === "achorde"),
);

export const projectDetails: readonly FeaturedProject[] = [
	...achordeProjects,
	...featuredProjects,
];

export const experiences = [
	{
		company: "Soma Deals",
		companyLinkedin: "https://br.linkedin.com/company/soma-deals",
		role: "Senior Software Engineer",
		period: "Aug 2025 - May 2026",
		location: "São Paulo, Brazil",
		summary:
			"Full-stack engineering on a digital M&A platform for small and medium-sized businesses, contributing to tools that support company buying and selling workflows.",
		bullets: [
			"Developed front-end features using Next.js, React, and TypeScript, with a focus on usability, maintainability, and business-oriented flows.",
			"Built a dynamic multi-phase document search system that chained new searches from data extracted in earlier results, running automatically with placeholders and persisted state, without human intervention or code changes.",
			"Managed AWS infrastructure and cloud services to improve reliability, security, and scalability.",
			"Collaborated on product and technical decisions, helping transform complex M&A processes into intuitive digital workflows.",
		],
	},
	{
		company: "Linx Commerce",
		companyLinkedin: "https://br.linkedin.com/company/linx-commerce",
		role: "Solutions Architect",
		period: "Dec 2021 - Jun 2024",
		location: "São Paulo, Brazil",
		summary:
			"Led the development of an innovative WhatsApp-based customer service and commerce system, integrating product listings, virtual cart flows, and dynamic conversation experiences.",
		bullets: [
			"Acted across multiple roles, including Senior Developer, Product Owner, and Scrum Master, aligning technical execution, product requirements, and team delivery.",
			"Simplified system architecture to make the codebase easier to understand, maintain, and evolve by other developers.",
			"Migrated parts of the architecture from Kubernetes to serverless solutions using Vercel and AWS Cloud Functions, reducing operational complexity and improving scalability.",
			"Optimized PostgreSQL usage on Google Cloud, supporting better performance and reliability for commerce-related workloads.",
		],
	},
	{
		company: "Semantix",
		companyLinkedin: "https://www.linkedin.com/company/semantix",
		role: "Senior Web Developer",
		period: "Nov 2020 - Dec 2021",
		location: "São Paulo, Brazil",
		summary:
			"Delivered live-shopping and intelligent-chat features combining digital commerce, conversational automation, and web applications.",
		bullets: [
			"Implemented features using VTEX and Dialogflow to support digital commerce and customer engagement solutions.",
			"Developed and maintained web applications with Next.js, improving website functionality, user experience, and integration capabilities.",
			"Collaborated on open-source initiatives and reusable front-end components to support faster development and better maintainability.",
			"Worked closely with product and engineering teams to deliver features aligned with business goals and customer needs.",
		],
	},
	{
		company: "Latife Gastronomia Árabe",
		role: "CTO",
		period: "Feb 2017 - Nov 2020",
		location: "Greater São Paulo Area, Brazil",
		summary:
			"Managed end-to-end IT operations for a family-owned food business, covering software development, infrastructure, tools, and internal processes.",
		bullets: [
			"Built and maintained web systems using TypeScript, Next.js, Hasura, and related technologies to support business operations.",
			"Organized project workflows using Trello and GitHub Projects, improving visibility, prioritization, and execution.",
			"Maintained cloud infrastructure across AWS, Heroku, Google Cloud, and Vercel, selecting the most appropriate platform according to cost, simplicity, and operational needs.",
			"Supported the business with practical software solutions, process improvements, and technical decision-making.",
		],
	},
	{
		company: "Azuki (azukiapp.com)",
		companyLinkedin: "https://www.linkedin.com/company/azuki-azukiapp-com-/",
		role: "Software Engineer",
		period: "Oct 2014 - Nov 2016",
		location: "São Paulo, Brazil",
		summary:
			"Contributed to the development and strategic evolution of AZK, an open-source CLI tool designed to automate development environment setup and management.",
		bullets: [
			"Built core features using Node.js, helping developers create reproducible local environments before Docker Compose became widely adopted.",
			"Supported the open-source community by helping users understand, adopt, and contribute to the project.",
			"Applied TDD practices to improve reliability, maintainability, and confidence in the tool's behavior.",
			"Worked with APIs, containerization concepts, Docker, developer tooling, and open-source project management.",
		],
	},
	{
		company: "Integgro Tecnologia da Informação",
		role: "Web Developer",
		period: "2013",
		location: "São Paulo Area, Brazil",
		summary:
			"Web development work with ASP.NET MVC and JavaScript, including continuous integration automation.",
		bullets: [
			"Developed web applications using ASP.NET MVC and JavaScript.",
			"Implemented a continuous integration server that continued running smoothly after delivery.",
		],
	},
	{
		company: "Grupo SHC",
		companyLinkedin: "https://www.linkedin.com/company/grupo-shc",
		role: "Programmer and Technical Instructor",
		period: "Mar 2006 - Sep 2012",
		location: "Greater São Paulo Area, Brazil",
		summary:
			"Acted as technical architect and developer for Apollo Web, one of Grupo SHC's largest internal software projects for vehicle sales and after-sales operations.",
		bullets: [
			"Defined technologies, development practices, and architectural patterns used by the team throughout the project.",
			"Developed and maintained the application using ASP.NET, SQL Server, NHibernate, SAP integrations, and Castle Windsor.",
			"Applied object-oriented design and DDD-inspired layered architecture to improve maintainability and separation of concerns.",
			"Implemented automated tests using NUnit, Moq, and Selenium, plus continuous integration with TeamCity, Rake, and Albacore.",
			"Created technical training, internal wiki/blog documentation, and SAP integrations using ERPConnect from Theobald Software.",
		],
	},
	{
		company: "everis",
		companyLinkedin: "https://www.linkedin.com/company/everis-is-nttdata",
		role: "Programmer Analyst",
		period: "May 2005 - Feb 2006",
		location: "Brazil",
		summary:
			"Worked on Santander Banespa projects involving web development, system analysis, database migration, and internal tooling.",
		bullets: [
			"Developed applications using ASP, Visual Basic 6, Oracle packages, and supporting technologies.",
			"Led web development activities and communicated directly with the client to clarify requirements and support delivery.",
			"Created automation macros to speed up repetitive development and maintenance tasks.",
			"Worked on secure password registration workflows involving anti-trojan and encryption-related requirements.",
		],
	},
	{
		company: "GEMPI",
		role: "Junior Developer",
		period: "Aug 2003 - Apr 2005",
		location: "Brazil",
		summary:
			"Worked on Embratel and Telemar projects involving web development, Oracle packages, and data migration support.",
		bullets: [
			"Created technical and functional specifications for database migration processes.",
			"Developed applications using Visual Basic 6, ASP, and Oracle.",
			"Supported project management activities and collaborated with teams on enterprise telecom systems.",
		],
	},
] as const;

export const education = [
	{
		name: "FATEC-SP — São Paulo State Technology College",
		description: "Technologist in Information Technology, 2001–2006",
	},
] as const;

export const skillGroups = sharedSkillGroups;

export const contactLinks = [
	{
		label: "Email",
		value: person.email,
		href: `mailto:${person.email}`,
		icon: "mail",
	},
	{
		label: "Phone",
		value: person.phone,
		href: "tel:+5511965697834",
		icon: "phone",
	},
	{
		label: "LinkedIn",
		value: "linkedin.com/in/julio-saito",
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
