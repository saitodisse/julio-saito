import { skillGroups as sharedSkillGroups } from "@/resources/skill-groups";

export const publicName = "Julio Saito";

export const person = {
	fullName: "Julio Makdisse Saito",
	firstName: "Julio",
	role: "Engenheiro de Software Sênior",
	location: "Ubatuba, São Paulo, Brasil",
	email: "saitodisse@gmail.com",
	phone: "+55 11 96569-7834",
	github: "https://github.com/saitodisse",
	linkedin: "https://www.linkedin.com/in/julio-saito",
	languages: [
		{ name: "Português", level: "Nativo" },
		{ name: "Inglês", level: "Proficiência profissional completa" },
		{ name: "Espanhol", level: "Proficiência limitada de trabalho" },
	],
} as const;

export const professionalSummary = `Sou engenheiro de software sênior com mais de 20 anos de experiência criando plataformas web complexas, sistemas em cloud e software crítico para negócios. Minha especialidade combina TypeScript, Node.js, React, Next.js, arquiteturas cloud e desenvolvimento full-stack moderno.

Combino fundamentos sólidos de engenharia de software com práticas avançadas de desenvolvimento assistido por IA. Meu foco atual é orquestrar agentes de IA ao longo do ciclo de desenvolvimento — pesquisa, especificação, implementação, testes, refatoração, documentação e validação.

Trabalho com uma abordagem metódica baseada em Spec-Driven Development, TDD, testes automatizados, contexto técnico claro e decisões arquiteturais conscientes. Uso agentes de IA para acelerar entregas sem abrir mão da responsabilidade técnica, garantindo software robusto, sustentável e alinhado aos objetivos de negócio.`;

export const credentials = [
	{ label: "Experiência", value: "20+ anos" },
	{ label: "Stack", value: "TypeScript, Node.js, React" },
	{ label: "Foco", value: "SDD, TDD e arquitetura cloud" },
	{ label: "Interesse", value: "Orquestração de agentes de IA" },
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
};

const achordeProducts = [
	{
		name: "AC15",
		detailPath: "/projetos/ac15",
		description:
			"Aplicação privada offline-first para ler cifras, organizar repertório, criar diagramas e manter o trabalho musical disponível localmente.",
		site: "https://ac15.vercel.app/",
		icon: "terminal",
		image: "/images/projects/achorde/ac15.png",
		imageAlt:
			"Besouro bibliotecário entre cifras e instrumentos, representando o AC15",
		tags: ["Next.js", "React", "OfflineFirst", "Música"],
	},
	{
		name: "Portal do Artista",
		detailPath: "/projetos/portal-do-artista",
		description:
			"Base pública para artistas apresentarem repertório e identidade em um portal próprio, com catálogo de cifras pronto para leitores compatíveis.",
		github: "https://github.com/saitodisse/artist-portal-base",
		site: "https://saitodisse.github.io/artist-portal-base/",
		icon: "music",
		image: "/images/projects/achorde/portal-do-artista.png",
		imageAlt:
			"Besouro curador conduzindo uma passagem entre a criação musical e o público",
		tags: ["Astro", "React", "Catálogo", "Música"],
	},
	{
		name: "Achorde",
		detailPath: "/achorde",
		description:
			"Ecossistema musical com duas aplicações — AC15 e Portal do Artista — e quatro pacotes principais para domínio, cifras, diagramas e voicings.",
		site: "/achorde#pacotes",
		siteLabel: "Ver pacotes",
		internalSite: true,
		icon: "music",
		gallery: [
			{
				src: "/images/projects/achorde/musical-domain.png",
				alt: "Formiga arquivista representando o musical-domain",
			},
			{
				src: "/images/projects/achorde/tab-renderer.png",
				alt: "Vespa tipógrafa representando o tab-renderer",
			},
			{
				src: "/images/projects/achorde/svguitar-react.png",
				alt: "Aranha tecelã representando o svguitar-react",
			},
			{
				src: "/images/projects/achorde/interactive-fretboard.png",
				alt: "Louva-a-deus representando o interactive-fretboard",
			},
		],
		tags: ["TypeScript", "React", "Open Source", "Música"],
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
			"Contratos e helpers headless para acordes, cifras parseadas, diagnósticos e voicings compartilhados.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/musical-domain",
		site: "https://achorde-musical-domain.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/musical-domain.png",
		imageAlt: "Formiga arquivista representando os contratos do musical-domain",
		tags: ["TypeScript", "Contratos", "Domínio", "Música", "Open Source"],
	},
	{
		name: "@achorde/tab-renderer",
		detailPath: "/projetos/tab-renderer",
		description:
			"Biblioteca para parsing e renderização de cifras com core headless, adapter React e viewer estilizado.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/tab-renderer",
		site: "https://tab-renderer-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/tab-renderer.png",
		imageAlt:
			"Vespa tipógrafa entre texto e acordes, representando o tab-renderer",
		tags: ["TypeScript", "React", "Cifras", "Open Source"],
	},
	{
		name: "@achorde/svguitar-react",
		detailPath: "/projetos/svguitar-react",
		description:
			"Biblioteca React para renderizar diagramas de instrumentos trasteados em SVG a partir de voicings estruturados.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/svguitar-react",
		site: "https://svguitar-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/svguitar-react.png",
		imageAlt:
			"Aranha tecelã transformando uma estrutura musical em diagrama SVG",
		tags: ["TypeScript", "React", "SVG", "Acordes", "Open Source"],
	},
	{
		name: "@achorde/interactive-fretboard",
		detailPath: "/projetos/interactive-fretboard",
		description:
			"Editor React de braço trasteado para criar e alterar voicings com mouse, toque ou caneta.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/interactive-fretboard",
		site: "https://interactive-fretboard.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/interactive-fretboard.png",
		imageAlt:
			"Louva-a-deus usando um braço de instrumento para editar voicings",
		tags: ["TypeScript", "React", "Pointer", "Voicings", "Open Source"],
	},
] as const satisfies readonly FeaturedProject[];

const legacyProjects = [
	{
		name: "svguitar-react",
		description:
			"Biblioteca React para renderização de diagramas de acordes em SVG, com API enxuta e foco em personalização.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/svguitar-react",
		site: "https://svguitar-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/svguitar-react.png",
		category: "achorde",
		imageAlt: "Diagrama de acordes em SVG do svguitar-react",
		tags: [
			"TypeScript",
			"React",
			"SVG",
			"Música",
			"Cifras",
			"Acordes",
			"Diagramas",
			"Open Source",
		],
	},
	{
		name: "tab-renderer",
		description:
			"Biblioteca open source para parsing e renderização de cifras com core headless, adapter React e viewer estilizado.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/tab-renderer",
		site: "https://tab-renderer-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/tab-renderer.png",
		category: "achorde",
		imageAlt:
			"Diagrama estilizado de cifra e acordes representando o tab-renderer",
		tags: [
			"TypeScript",
			"React",
			"SVG",
			"Música",
			"Cifras",
			"Open Source",
			"Storybook",
		],
	},
	{
		name: "Grana Clara",
		detailPath: "/projetos/grana-clara",
		description:
			"Aplicação offline-first para importar, categorizar e analisar faturas e extratos do Nubank com privacidade local.",
		github: "https://github.com/saitodisse/grana-clara",
		site: "https://grana-clara.vercel.app/",
		icon: "leaf",
		image: "/images/projects/grana-clara.png",
		imageAlt:
			"Ilustração de carteira com moedas e gráfico ascendente, representando organização e crescimento financeiro",
		tags: [
			"React",
			"Tailwind",
			"OfflineFirst",
			"Open Source",
			"Finanças",
			"Nubank",
			"Faturas",
			"Gráficos",
		],
	},
	{
		name: "achorde-musical-domain",
		description:
			"Pacote público de contratos musicais compartilhados para cifras, tabs parseadas, diagnósticos e voicings.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/musical-domain",
		icon: "music",
		image: "/images/projects/achorde/musical-domain.png",
		category: "achorde",
		imageAlt:
			"Arte quadrada do achorde-musical-domain com contratos musicais e linhas de abstração compartilhada",
		tags: ["TypeScript", "Contratos", "Domínio", "Música", "Open Source"],
	},
	{
		name: "matter-js-experiments",
		detailPath: "/projetos/matter-js-experiments",
		description:
			"Jogo e simulação física com Matter.js, interface em TypeScript para tipagem do motor e uma das minhas primeiras experiências com IA e agência de código.",
		github: "https://github.com/saitodisse/matter-js-experiments",
		site: "https://saitodisse.github.io/matter-js-experiments/",
		icon: "terminal",
		image: "/images/projects/matter-js-experiments.png",
		imageAlt:
			"Logo do Matter.js Experiments com tipografia amarela sobre fundo azul escuro",
		imageFit: "contain",
		imageBackground: "#060a19",
		tags: ["Open Source", "Jogo", "Física", "Matter.js", "TypeScript"],
	},
	{
		name: "SoM&A Deals",
		detailPath: "/projetos/soma-deals",
		description:
			"Plataforma digital de M&A para PMEs, conectando análise, relacionamento comercial e fluxo de negociação.",
		site: "https://www.somadeals.com/",
		icon: "handshake",
		image: "/images/projects/soma-deals.png",
		imageAlt:
			"Logo da Soma Deals com símbolo de aperto de mãos e tipografia em verde",
		imageFit: "contain",
		imageBackground: "#ffffff",
		tags: [
			"NextJs",
			"Cloud",
			"Produto",
			"MA",
			"Assinatura",
			"Pagamento",
			"Empresas",
			"Franquias",
			"Negociações",
		],
	},

	{
		name: "interactive-fretboard",
		description:
			"Editor React de braço trasteado para criar e alterar voicings com mouse, toque ou caneta.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/interactive-fretboard",
		site: "https://interactive-fretboard.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/interactive-fretboard.png",
		category: "achorde",
		imageAlt:
			"Louva-a-deus usando um braço de instrumento para editar voicings",
		tags: ["TypeScript", "React", "Pointer", "Voicings", "Open Source"],
	},

	{
		name: "ac15",
		description:
			"Plataforma privada offline-first que integra contratos, parser, renderização, persistência e sync para o ecossistema musical.",
		icon: "terminal",
		image: "/images/projects/achorde/ac15.png",
		category: "achorde",
		imageAlt:
			"Composição quadrada do ac15 com camadas de produto, sync e base local",
		site: "https://ac15.vercel.app/",
		tags: ["Next.js", "React", "OfflineFirst", "Sync", "Arquitetura", "Música"],
	},

	{
		name: "BOM Recipe Calculator",
		detailPath: "/projetos/bom-recipe-calculator",
		description:
			"Calculadora de Bill of Materials para receitas aninhadas, com cálculo de custos e pesos em múltiplos níveis de ingredientes.",
		github: "https://github.com/saitodisse/bom-recipe-calculator",
		site: "https://bom-recipe-calculator.deno.dev/",
		icon: "leaf",
		image: "/images/projects/bom-recipe-calculator.png",
		imageAlt:
			"Tela do BOM Recipe Calculator com lista de produtos, ingredientes e exemplo Brownies",
		tags: [
			"BOM",
			"Receitas",
			"Custos",
			"Pesos",
			"JSR",
			"Deno",
			"Open Source",
			"Árvore de Produtos",
		],
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
		role: "Engenheiro de Software Sênior",
		period: "Ago 2025 - Mai 2026",
		location: "São Paulo, Brasil",
		summary:
			"Atuação full-stack em uma plataforma digital de M&A para pequenas e médias empresas, contribuindo para ferramentas que apoiam fluxos de compra e venda de negócios.",
		bullets: [
			"Desenvolvi funcionalidades de front-end com Next.js, React e TypeScript, com foco em usabilidade, manutenibilidade e fluxos orientados ao negócio.",
			"Implementei um sistema dinâmico de busca documental em múltiplas fases, capaz de encadear novas pesquisas a partir dos dados encontrados nas anteriores, com execução automática, placeholders e estados persistidos, sem intervenção humana nem alteração de código.",
			"Gerenciei infraestrutura e serviços em AWS para melhorar confiabilidade, segurança e escalabilidade.",
			"Colaborei em decisões técnicas e de produto, transformando processos complexos de M&A em workflows digitais mais intuitivos.",
		],
	},
	{
		company: "Linx Commerce",
		companyLinkedin: "https://br.linkedin.com/company/linx-commerce",
		role: "Arquiteto de Soluções",
		period: "Dez 2021 - Jun 2024",
		location: "São Paulo, Brasil",
		summary:
			"Liderança do desenvolvimento de um sistema inovador de atendimento e comércio via WhatsApp, integrando listas de produtos, carrinho virtual e conversas dinâmicas.",
		bullets: [
			"Atuei em múltiplos papéis, incluindo desenvolvedor sênior, Product Owner e Scrum Master, alinhando execução técnica, requisitos de produto e entrega do time.",
			"Simplifiquei a arquitetura para tornar a base de código mais fácil de entender, manter e evoluir por outros desenvolvedores.",
			"Migrei partes da arquitetura de Kubernetes para soluções serverless com Vercel e AWS Cloud Functions, reduzindo complexidade operacional e melhorando escalabilidade.",
			"Otimizei o uso de PostgreSQL no Google Cloud, apoiando melhor performance e confiabilidade em cargas relacionadas a comércio.",
		],
	},
	{
		company: "Semantix",
		companyLinkedin: "https://www.linkedin.com/company/semantix",
		role: "Desenvolvedor Web Sênior",
		period: "Nov 2020 - Dez 2021",
		location: "São Paulo, Brasil",
		summary:
			"Entrega de funcionalidades de live-shopping e intelligent-chat, combinando comércio digital, automação conversacional e aplicações web.",
		bullets: [
			"Implementei recursos com VTEX e Dialogflow para apoiar experiências de comércio digital e engajamento de clientes.",
			"Desenvolvi e mantive aplicações web com Next.js, melhorando funcionalidades, experiência de uso e capacidades de integração.",
			"Colaborei em iniciativas open source e componentes front-end reutilizáveis para acelerar desenvolvimento e manutenibilidade.",
			"Trabalhei próximo de times de produto e engenharia para entregar funcionalidades alinhadas a objetivos de negócio e necessidades dos clientes.",
		],
	},
	{
		company: "Latife Gastronomia Árabe",
		role: "CTO",
		period: "Fev 2017 - Nov 2020",
		location: "Grande São Paulo, Brasil",
		summary:
			"Responsável pela operação de tecnologia de uma empresa familiar de alimentação, cobrindo desenvolvimento, infraestrutura, ferramentas e processos internos.",
		bullets: [
			"Construí e mantive sistemas web com TypeScript, Next.js, Hasura e tecnologias relacionadas para apoiar operações do negócio.",
			"Organizei fluxos de projeto com Trello e GitHub Projects, melhorando visibilidade, priorização e execução.",
			"Mantive infraestrutura em AWS, Heroku, Google Cloud e Vercel, escolhendo plataformas de acordo com custo, simplicidade e necessidades operacionais.",
			"Apoiei o negócio com soluções práticas de software, melhorias de processo e tomada de decisão técnica.",
		],
	},
	{
		company: "Azuki (azukiapp.com)",
		companyLinkedin: "https://www.linkedin.com/company/azuki-azukiapp-com-/",
		role: "Engenheiro de Software",
		period: "Out 2014 - Nov 2016",
		location: "São Paulo, Brasil",
		summary:
			"Contribuição para o desenvolvimento e evolução estratégica do AZK, uma ferramenta CLI open source para automatizar configuração e gestão de ambientes de desenvolvimento.",
		bullets: [
			"Construí funcionalidades centrais com Node.js, ajudando desenvolvedores a criar ambientes locais reprodutíveis antes da ampla adoção do Docker Compose.",
			"Apoiei a comunidade open source, ajudando usuários a entender, adotar e contribuir com o projeto.",
			"Apliquei práticas de TDD para melhorar confiabilidade, manutenibilidade e confiança no comportamento da ferramenta.",
			"Trabalhei com APIs, conceitos de conteinerização, Docker, tooling para desenvolvedores e gestão de projeto open source.",
		],
	},
	{
		company: "Integgro Tecnologia da Informação",
		role: "Desenvolvedor Web",
		period: "2013",
		location: "Região de São Paulo, Brasil",
		summary:
			"Atuação em desenvolvimento web com ASP.NET MVC e JavaScript, incluindo automação de integração contínua.",
		bullets: [
			"Desenvolvi aplicações web usando ASP.NET MVC e JavaScript.",
			"Implementei um servidor de integração contínua que seguiu rodando de forma estável após a entrega.",
		],
	},
	{
		company: "Grupo SHC",
		companyLinkedin: "https://www.linkedin.com/company/grupo-shc",
		role: "Programador e Instrutor Técnico",
		period: "Mar 2006 - Set 2012",
		location: "Grande São Paulo, Brasil",
		summary:
			"Atuação como arquiteto técnico e desenvolvedor do Apollo Web, um dos maiores projetos internos do Grupo SHC para operações de venda e pós-venda de veículos.",
		bullets: [
			"Defini tecnologias, práticas de desenvolvimento e padrões arquiteturais usados pelo time ao longo do projeto.",
			"Desenvolvi e mantive a aplicação com ASP.NET, SQL Server, NHibernate, integrações SAP e Castle Windsor.",
			"Apliquei design orientado a objetos e arquitetura em camadas inspirada em DDD para melhorar manutenibilidade e separação de responsabilidades.",
			"Implementei testes automatizados com NUnit, Moq e Selenium, além de integração contínua com TeamCity, Rake e Albacore.",
			"Criei treinamentos técnicos, documentação interna em wiki/blog e integrações com SAP usando ERPConnect da Theobald Software.",
		],
	},
	{
		company: "everis",
		companyLinkedin: "https://www.linkedin.com/company/everis-is-nttdata",
		role: "Analista Programador",
		period: "Mai 2005 - Fev 2006",
		location: "Brasil",
		summary:
			"Atuação em projetos do Santander Banespa envolvendo desenvolvimento web, análise de sistemas, migração de banco de dados e ferramentas internas.",
		bullets: [
			"Desenvolvi aplicações usando ASP, Visual Basic 6, packages Oracle e tecnologias de apoio.",
			"Liderei atividades de desenvolvimento web e me comuniquei diretamente com o cliente para esclarecer requisitos e apoiar entregas.",
			"Criei macros de automação para acelerar tarefas repetitivas de desenvolvimento e manutenção.",
			"Trabalhei em fluxos seguros de cadastro de senha envolvendo requisitos anti-trojan e relacionados a criptografia.",
		],
	},
	{
		company: "GEMPI",
		role: "Desenvolvedor Júnior",
		period: "Ago 2003 - Abr 2005",
		location: "Brasil",
		summary:
			"Atuação em projetos para Embratel e Telemar envolvendo desenvolvimento web, packages Oracle e suporte a migração de dados.",
		bullets: [
			"Criei especificações técnicas e funcionais para processos de migração de banco de dados.",
			"Desenvolvi aplicações usando Visual Basic 6, ASP e Oracle.",
			"Apoiei atividades de gestão de projeto e colaborei com times em sistemas corporativos de telecomunicações.",
		],
	},
] as const;

export const education = [
	{
		name: "FATEC-SP — Faculdade de Tecnologia de São Paulo",
		description: "Tecnólogo em Tecnologia da Informação, 2001–2006",
	},
] as const;

export const skillGroups = sharedSkillGroups;

export const contactLinks = [
	{
		label: "E-mail",
		value: person.email,
		href: `mailto:${person.email}`,
		icon: "mail",
	},
	{
		label: "Telefone",
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
		label: "Localização",
		value: person.location,
		icon: "map",
	},
] as const;
