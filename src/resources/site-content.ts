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

export const professionalSummary =
	"Transformo problemas de negócio em produtos digitais confiáveis, combinando arquitetura, TypeScript, React, Node.js, Next.js, PostgreSQL e cloud. Atuo de ponta a ponta: da modelagem e integração à produção e evolução contínua. Meu foco atual é IA aplicada com responsabilidade — orquestrar agentes para acelerar especificação, implementação, testes e documentação, preservando decisões técnicas, qualidade e controle do produto.";

export const credentials = [
	{ label: "Experiência", value: "20+ anos" },
	{ label: "Especialidade", value: "TypeScript, React e Node.js" },
	{ label: "Atuação", value: "Produto, arquitetura e cloud" },
	{ label: "Foco atual", value: "IA aplicada com governança" },
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
			"Aplicação privada offline-first para ler cifras, organizar repertório, criar diagramas e manter o trabalho musical disponível localmente.",
		site: "https://ac15.vercel.app/",
		icon: "terminal",
		image: "/images/projects/achorde/ac15.png",
		imageAlt:
			"Besouro bibliotecário entre cifras e instrumentos, representando o AC15",
		tags: [
			"Next.js",
			"React",
			"OfflineFirst",
			"Música",
			"Cifras",
			"Repertório",
			"Catálogo local",
			"Diagramas",
		],
		details: {
			features: [
				{
					title: "Catálogo disponível no dispositivo",
					description:
						"Baixa e mantém um catálogo musical local para que a consulta não dependa de uma conexão ativa.",
				},
				{
					title: "Leitura de cifras com controle de tom",
					description:
						"Organiza cifras por artista e permite ajustar tom e tamanho de fonte durante a leitura.",
				},
				{
					title: "Biblioteca de acordes e diagramas",
					description:
						"Reúne referências de acordes e seus diagramas para apoiar estudo e execução do repertório.",
				},
				{
					title: "Sincronização controlada",
					description:
						"Expõe o estado da sincronização e mantém o catálogo local como base de trabalho do músico.",
				},
			],
			installation: {
				title: "Acesso",
				language: "text",
				code: `Disponível para pessoas autorizadas em:
https://ac15.vercel.app/

Não exige instalação local.`,
			},
			usage: {
				title: "Fluxo mais comum",
				language: "text",
				code: `1. Sincronize o catálogo quando houver conexão.
2. Escolha uma música no repertório local.
3. Ajuste o tom e a leitura da cifra.
4. Consulte acordes e diagramas durante a execução.`,
			},
		},
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
		tags: [
			"Astro",
			"React",
			"Catálogo",
			"Música",
			"Source catalog",
			"Markdown",
			"GitHub Pages",
			"Estático",
		],
		details: {
			features: [
				{
					title: "Portal público e legível",
					description:
						"Publica identidade, repertório e cifras de um artista em uma experiência estática pronta para o público.",
				},
				{
					title: "Catálogo importável",
					description:
						"Gera um source catalog de leitura com manifesto, checksums e entidades para consumo por ferramentas compatíveis.",
				},
				{
					title: "Conteúdo versionado em Markdown",
					description:
						"Modela artista, músicas, versões executáveis e cifras em arquivos simples de revisar no Git.",
				},
				{
					title: "Base atualizável para novos artistas",
					description:
						"Permite criar um novo portal a partir da base e continuar recebendo melhorias por meio de um remoto upstream.",
				},
			],
			installation: {
				language: "bash",
				code: `git clone https://github.com/saitodisse/artist-portal-base.git my-artist-portal
cd my-artist-portal
pnpm install
pnpm portal:init --source-id my-artist --name "Meu Artista"`,
			},
			usage: {
				language: "bash",
				code: `# atualize o perfil e as cifras em catalog/
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
		tags: [
			"TypeScript",
			"Contratos",
			"Domínio",
			"Música",
			"Open Source",
			"Headless",
			"AST",
			"Voicings",
			"Diagnósticos",
		],
		details: {
			features: [
				{
					title: "Contratos portáveis para música",
					description:
						"Define tipos estáveis para cifras, tabs parseadas, diagnósticos e voicings sem depender de React, SVG ou APIs do navegador.",
				},
				{
					title: "AST e diagnósticos de parsing",
					description:
						"Fornece a estrutura de linhas e tokens para que parsers e renderizadores compartilhem uma interpretação explícita da cifra.",
				},
				{
					title: "Voicings consistentes",
					description:
						"Padroniza coordenadas de cordas de grave para aguda e inclui seleção, ordenação e normalização de posições no braço.",
				},
				{
					title: "Normalização de símbolos",
					description:
						"Normaliza rótulos de acordes e preserva metadados de grafia para reduzir ambiguidades entre consumidores.",
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
			"Biblioteca para parsing e renderização de cifras com core headless, adapter React e viewer estilizado.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/tab-renderer",
		site: "https://tab-renderer-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/tab-renderer.png",
		imageAlt:
			"Vespa tipógrafa entre texto e acordes, representando o tab-renderer",
		tags: [
			"TypeScript",
			"React",
			"Cifras",
			"Open Source",
			"Parser",
			"Transposição",
			"AST",
			"Viewer",
			"Storybook",
		],
		details: {
			features: [
				{
					title: "Core headless de cifras",
					description:
						"Faz parsing, transposição e preparação de barras sem impor uma interface visual ao consumidor.",
				},
				{
					title: "AST com tokens semânticos",
					description:
						"Mantém seções, linhas, acordes, letras, marcações e espaços para renderizações e inspeções customizadas.",
				},
				{
					title: "Viewer React componível",
					description:
						"Entrega um Tab estilizado e primitivas para montar interfaces próprias com acordes sobre as letras.",
				},
				{
					title: "Estilo e modos de leitura configuráveis",
					description:
						"Permite ajustar tipografia, cores, tom, espaçamento, visualização de acordes e letras para cada produto.",
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
			"Biblioteca React para renderizar diagramas de instrumentos trasteados em SVG a partir de voicings estruturados.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/svguitar-react",
		site: "https://svguitar-react.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/svguitar-react.png",
		imageAlt:
			"Aranha tecelã transformando uma estrutura musical em diagrama SVG",
		tags: [
			"TypeScript",
			"React",
			"SVG",
			"Acordes",
			"Open Source",
			"Diagramas",
			"Layout",
			"Responsivo",
			"Storybook",
		],
		details: {
			features: [
				{
					title: "Diagramas de acordes em SVG",
					description:
						"Transforma voicings estruturados em diagramas escaláveis para instrumentos trasteados.",
				},
				{
					title: "Layouts para diferentes orientações",
					description:
						"Oferece visualizações horizontal ou vertical para destros e canhotos, com orientação consistente dos rótulos.",
				},
				{
					title: "Customização e estratégia de layout",
					description:
						"Expõe cores, medidas, fontes e engines de layout intercambiáveis para adaptar o diagrama ao produto.",
				},
				{
					title: "Enquadramento automático de posições altas",
					description:
						"Ajusta o primeiro traste visível quando as posições do acorde ultrapassam o intervalo padrão.",
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
			"Editor React de braço trasteado para criar e alterar voicings com mouse, toque ou caneta.",
		github:
			"https://github.com/saitodisse/achorde/tree/main/packages/interactive-fretboard",
		site: "https://interactive-fretboard.vercel.app/",
		icon: "music",
		image: "/images/projects/achorde/interactive-fretboard.png",
		imageAlt:
			"Louva-a-deus usando um braço de instrumento para editar voicings",
		tags: [
			"TypeScript",
			"React",
			"Pointer",
			"Voicings",
			"Open Source",
			"SVG",
			"Mouse, toque e caneta",
			"Detecção de acorde",
			"Editor controlado",
		],
		details: {
			features: [
				{
					title: "Edição direta no braço",
					description:
						"Permite criar e ajustar digitações em um braço SVG responsivo usando mouse, toque ou caneta.",
				},
				{
					title: "Interação de ponteiro precisa",
					description:
						"Converte a posição do ponteiro para a geometria do SVG e mantém áreas de toque confiáveis em diferentes telas.",
				},
				{
					title: "Controle de dedos e pestanas",
					description:
						"Usa ações de mouse para alternar dedos, aplicar um dedo fixo e representar pestanas na digitação.",
				},
				{
					title: "Valor controlado e detecção opcional",
					description:
						"Trabalha com FrettedInstrumentVoicing controlado e pode informar o acorde detectado a cada alteração.",
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
		details: {
			features: [
				{
					title: "Dados financeiros mantidos no dispositivo",
					description:
						"Processa os arquivos no navegador e persiste as informações localmente, sem conta, banco de dados remoto ou integração bancária.",
				},
				{
					title: "Importação de CSV do Nubank",
					description:
						"Lê faturas e extratos compatíveis, identifica lançamentos repetidos por uma hash determinística e permite importar lotes com segurança.",
				},
				{
					title: "Categorização que combina regras e revisão humana",
					description:
						"Aplica palavras-chave configuráveis, preserva ajustes manuais por transação e oferece ações em lote para corrigir a classificação.",
				},
				{
					title: "Análises e backup locais",
					description:
						"Cruza busca, período, categoria e itens ignorados com rankings e evolução mensal, além de exportar a configuração em JSON.",
				},
			],
			installation: {
				title: "Instalação local",
				language: "bash",
				code: "pnpm install\npnpm dev",
			},
			usage: {
				title: "Fluxo mais comum",
				language: "text",
				code: `1. Exporte a fatura ou o extrato do Nubank em CSV.
2. Importe o arquivo no Grana Clara.
3. Revise as categorias sugeridas e corrija o que for necessário.
4. Use filtros e gráficos para acompanhar os gastos.`,
			},
		},
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
		details: {
			features: [
				{
					title: "Simulação física interativa",
					description:
						"Usa o Matter.js para simular uma piscina de bolas com corpos, colisões e comportamento físico em tempo real.",
				},
				{
					title: "Criação de bolas pelo ponteiro",
					description:
						"Permite criar uma bola com um clique ou várias de uma vez ao combinar Ctrl e o botão esquerdo do mouse.",
				},
				{
					title: "Modo de depuração",
					description:
						"Expõe uma alternância de debug para observar com mais clareza o comportamento do motor durante os experimentos.",
				},
				{
					title: "Cenário responsivo",
					description:
						"Adapta a simulação ao tamanho da janela para preservar a experiência de interação em diferentes telas.",
				},
			],
			installation: {
				title: "Instalação local",
				language: "bash",
				code: "npm install\nnpm run dev",
			},
			usage: {
				title: "Como experimentar",
				language: "text",
				code: `1. Abra a simulação no navegador.
2. Clique no cenário para criar uma bola.
3. Use Ctrl + clique esquerdo para criar várias bolas.
4. Ative o modo de debug para observar a física.`,
			},
		},
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
		details: {
			features: [
				{
					title: "Oportunidades para compra, venda e investimento",
					description:
						"Conecta empresas e franquias a pessoas interessadas em vender, comprar ou investir com informações para apoiar a decisão.",
				},
				{
					title: "Matchmaking com IA",
					description:
						"Apoia a descoberta de oportunidades e relações comerciais mais aderentes aos objetivos de cada participante.",
				},
				{
					title: "Deal Room para a negociação",
					description:
						"Organiza uma etapa dedicada para conduzir a negociação de uma oportunidade com mais contexto e segurança.",
				},
				{
					title: "Jornadas para PMEs e franquias",
					description:
						"Atende quem quer vender, comprar, investir, expandir uma franqueadora ou começar um negócio com inteligência de mercado.",
				},
			],
			installation: {
				title: "Acesso à plataforma",
				language: "text",
				code: `Acesse:
https://app.somadeals.com/

Crie uma conta ou entre para usar a plataforma.`,
			},
			usage: {
				title: "Fluxo mais comum",
				language: "text",
				code: `1. Escolha se quer vender, comprar, investir ou expandir.
2. Complete as informações da sua empresa ou do objetivo de negócio.
3. Explore as oportunidades e conexões indicadas.
4. Conduza a negociação pelo fluxo apropriado.`,
			},
		},
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
		name: "Add-ons App POC",
		detailPath: "/projetos/addons-app-poc",
		description:
			"Prova de conceito para um host extensível que descobre add-ons independentes por manifesto, com contratos tipados, prioridade e fallback.",
		github: "https://github.com/saitodisse/addons-app-poc",
		icon: "terminal",
		image: "/images/projects/addons-app-poc.png",
		imageAlt:
			"Hub de add-ons conectado a módulos independentes por um manifesto, com rota alternativa de fallback",
		tags: [
			"React",
			"TypeScript",
			"Node.js",
			"HTTP",
			"Plug-ins",
			"Manifestos",
			"Fallback",
			"Open Source",
		],
		details: {
			features: [
				{
					title: "Add-ons descobertos por manifesto",
					description:
						"O host conhece os contratos do protocolo, enquanto cada extensão publica seu próprio manifesto e implementação em um endereço independente.",
				},
				{
					title: "Módulos locais e serviços HTTP",
					description:
						"Demonstra add-ons JavaScript carregados em processo e servidores HTTP que oferecem catálogos, buscas e textos pelo mesmo protocolo.",
				},
				{
					title: "Prioridade e fallback explícitos",
					description:
						"Quando mais de uma extensão oferece o mesmo serviço, o runtime ordena os provedores e tenta o próximo se a implementação prioritária falhar.",
				},
				{
					title: "Instalação revisável e persistente",
					description:
						"A pessoa informa a URL do manifesto, revisa o contrato antes de instalar e mantém escolhas, extensões desativadas e aceitação após recarregar a página.",
				},
			],
			installation: {
				title: "Execução local",
				language: "bash",
				code: "git clone https://github.com/saitodisse/addons-app-poc.git\ncd addons-app-poc\npnpm install\npnpm dev",
			},
			usage: {
				title: "Como explorar a POC",
				language: "text",
				code: `1. Abra o host em http://localhost:5280.
2. Em Configurações, informe ou escolha uma URL de manifest.json.
3. Revise e aceite o contrato do add-on.
4. Abra a rota adicionada na barra lateral.
5. Desative ou remova a extensão para conferir a persistência e o runtime.`,
			},
		},
	},
	{
		name: "Lista de Materiais",
		detailPath: "/projetos/lista-de-materiais",
		description:
			"PWA local-first para cadastrar Produtos, compor Receitas e gerar Listas de Materiais com BOM aninhada, custos e materiais consolidados.",
		github: "https://github.com/saitodisse/lista-de-materiais",
		site: "https://listademateriais.vercel.app/",
		icon: "leaf",
		image: "/images/projects/lista-de-materiais.png",
		imageAlt:
			"Prancheta com árvore de materiais, ingredientes e embalagem, representando receitas e listas de materiais",
		tags: [
			"React",
			"TypeScript",
			"PWA",
			"OfflineFirst",
			"BOM",
			"Receitas",
			"IndexedDB",
			"Vite",
			"Open Source",
		],
		details: {
			features: [
				{
					title: "Receitas em árvores sem ciclos",
					description:
						"Modela produtos, componentes e quantidades, bloqueando autorreferência, repetições e ciclos para que cada Receita continue calculável.",
				},
				{
					title: "Lista de materiais consolidada",
					description:
						"Transforma produtos desejados em uma árvore BOM expansível e soma os materiais terminais necessários para produzir cada item.",
				},
				{
					title: "Dados que ficam no aparelho",
					description:
						"Armazena o catálogo no IndexedDB do navegador, sem conta, backend ou sincronização, e permanece disponível offline depois da primeira abertura.",
				},
				{
					title: "Cópia JSON sob controle da pessoa",
					description:
						"Exporta e importa Produtos, Receitas e Listas localmente, validando os dados e pedindo confirmação antes de substituir o catálogo.",
				},
			],
			installation: {
				title: "Acesso",
				language: "text",
				code: "Disponível em:\nhttps://listademateriais.vercel.app/\n\nNão exige conta ou instalação local.",
			},
			usage: {
				title: "Fluxo mais comum",
				language: "text",
				code: `1. Cadastre matérias-primas, embalagens e Produtos sem Receita.
2. Cadastre semiacabados e Produtos finais com seus componentes.
3. Crie uma Lista de Materiais com as quantidades desejadas.
4. Consulte os materiais terminais, custos e a árvore BOM.
5. Exporte um JSON para guardar uma cópia do catálogo.`,
			},
		},
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
		details: {
			features: [
				{
					title: "Cálculo de custos e pesos em árvores aninhadas",
					description:
						"Calcula os materiais necessários para receitas complexas em vários níveis, acumulando custo e peso de cada ingrediente.",
				},
				{
					title: "Unidades e relações recursivas",
					description:
						"Trabalha com unidades como KG e UN e resolve relações entre produtos, subprodutos, matérias-primas e embalagens.",
				},
				{
					title: "API funcional e tipada",
					description:
						"Oferece uma abordagem sem efeitos colaterais, suporte completo a TypeScript e compatibilidade com Deno e JSR.",
				},
				{
					title: "Planejamento de produção",
					description:
						"O builder de árvore de materiais e o plano de produção ajudam a calcular necessidades para quantidades e datas planejadas.",
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
