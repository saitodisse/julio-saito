import { skillGroups as sharedSkillGroups } from "@/resources/skill-groups";

export const publicName = "Julio Saito";

export const person = {
  fullName: "Julio Makdisse Saito",
  firstName: "Julio",
  role: "Engenheiro de Software Sênior & Arquiteto de Soluções",
  location: "Ubatuba, São Paulo, Brasil",
  email: "saitodisse@gmail.com",
  github: "https://github.com/saitodisse",
  linkedin: "https://www.linkedin.com/in/julio-makdisse-saito-868707a",
  languages: [
    { name: "Português", level: "Nativo" },
    { name: "Inglês", level: "Proficiência profissional de trabalho" },
  ],
} as const;

export const professionalSummary = `Sou engenheiro de software sênior com mais de 20 anos de experiência criando produtos digitais, arquiteturas previsíveis e soluções técnicas para problemas reais de negócio.

  Meu trabalho vai além da programação: ajudo a entender o problema certo, propor caminhos viáveis, organizar a execução e transformar ideias em sistemas confiáveis. Uso TypeScript, React, Node.js, cloud e agentes de IA para acelerar o desenvolvimento sem abrir mão de testes, qualidade e escalabilidade.

  Tenho forte experiência em orquestrar LLMs de programação, workflows técnicos e times/ferramentas para transformar problemas complexos em entregas claras, sustentáveis e bem documentadas.`;

export const credentials = [
  { label: "Experiência", value: "20+ anos" },
  { label: "Stack", value: "TypeScript, React, Next.js" },
  { label: "Foco", value: "Arquitetura, TDD, cloud" },
  { label: "Interesse", value: "IA aplicada e open source" },
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
      "Aplicação offline-first para importar, categorizar e analisar faturas e extratos do Nubank com privacidade local.",
    github: "https://github.com/saitodisse/grana-clara",
    site: "https://grana-clara.vercel.app/",
    icon: "leaf",
    image: "/images/projects/grana-clara.png",
    imageAlt:
      "Ilustração de carteira com moedas e gráfico ascendente, representando organização e crescimento financeiro",
    tags: ["React", "Tailwind", "Offline-first"],
  },
  {
    name: "svguitar-react",
    description:
      "Biblioteca React para renderização de diagramas de acordes em SVG, com API enxuta e foco em personalização.",
    github: "https://github.com/saitodisse/svguitar-react",
    site: "https://svguitar-react.vercel.app/",
    icon: "music",
    image: "/images/projects/svguitar-react.png",
    imageAlt: "Diagrama de acordes em SVG do svguitar-react",
    tags: ["TypeScript", "React", "SVG"],
  },
  {
    name: "SoM&A Deals",
    description:
      "Plataforma digital de M&A para PMEs, conectando análise, relacionamento comercial e fluxo de negociação.",
    site: "https://www.somadeals.com/",
    icon: "handshake",
    image: "/images/projects/soma-deals.webp",
    imageAlt:
      "Logo da Soma Deals com símbolo de aperto de mãos e tipografia em verde",
    imageFit: "contain",
    imageBackground: "#ffffff",
    tags: ["Next.js", "Cloud", "Produto"],
  },
  {
    name: "achordex",
    description:
      "Aplicação para gerenciar, buscar e visualizar cifras, com organização de repertório e modos de leitura.",
    site: "https://achordex.vercel.app/",
    icon: "terminal",
    image: "/images/projects/achordex.png",
    imageAlt:
      "Visual do achordex com cifras, repertório e interface de leitura musical",
    tags: ["Next.js", "Convex", "Busca"],
  },
] as const satisfies readonly FeaturedProject[];

export const experiences = [
  {
    company: "Soma Deals",
    companyLinkedin: "https://br.linkedin.com/company/soma-deals",
    role: "Engenheiro de Software Sênior",
    period: "Ago 2025 - Presente",
    location: "São Paulo, Brasil · Remoto",
    summary:
      "Atuação no desenvolvimento de uma plataforma digital de M&A para PMEs, cobrindo front-end, backend e infraestrutura em AWS.",
    bullets: [
      "Construi funcionalidades em Next.js e TypeScript para apoiar o fluxo comercial e operacional da plataforma.",
      "Mantive a base técnica alinhada a uma experiência simples para empresários e profissionais do setor.",
      "Participei das decisões de infraestrutura e entrega contínua com foco em segurança e previsibilidade.",
    ],
  },
  {
    company: "Linx Commerce",
    companyLinkedin: "https://br.linkedin.com/company/linx-commerce",
    role: "Arquiteto de Soluções",
    period: "Dez 2021 - Jun 2024",
    location: "Brasil",
    summary:
      "Liderança técnica de um sistema de atendimento via WhatsApp e da evolução arquitetural do produto.",
    bullets: [
      "Liderei e coordenei uma equipe de até 4 desenvolvedores, atuando também como Product Owner e Scrum Master.",
      "Desenvolvi fluxos de conversa, lista de produtos e carrinho virtual usando a API oficial do WhatsApp.",
      "Migrei a operação para Vercel com AWS Cloud Functions e PostgreSQL no Google Cloud para equilibrar escala e custo.",
      "Organizei CI/CD, automação de deploy e práticas de TDD, reduzindo complexidade sem perder velocidade de entrega.",
    ],
  },
  {
    company: "Semantix",
    companyLinkedin: "https://www.linkedin.com/company/semantix",
    role: "Desenvolvedor Web",
    period: "Nov 2020 - Dez 2021",
    location: "Brasil",
    summary:
      "Entrega de produtos web para live commerce e automação conversacional, além de trabalho open source paralelo.",
    bullets: [
      "Participei dos projetos live-shopping e intelligent-chat, unindo vídeo, chat, carrinho e bots Dialogflow.",
      "Criei templates open source de Next.js para acelerar a adoção de uma base técnica consistente.",
      "Pratiquei testes unitários e de integração em entregas com forte integração entre produto e engenharia.",
    ],
  },
  {
    company: "Latife Gastronomia Árabe",
    role: "CTO / Programador",
    period: "Fev 2017 - Nov 2020",
    location: "Brasil",
    summary:
      "Responsável sozinho por toda a operação de tecnologia da empresa familiar, da gestão ao deploy.",
    bullets: [
      "Centralizei a operação técnica e a tomada de decisão de produto em um contexto com recursos enxutos.",
      "Usei Trello, GitHub, AWS, Heroku, Google Cloud e Vercel para manter a operação estável e simples de evoluir.",
      "Trabalhei com TypeScript, Hasura, PostgreSQL e Next.js para entregar automações e interfaces diretas.",
    ],
  },
  {
    company: "Azuki",
    companyLinkedin: "https://www.linkedin.com/company/azuki-azukiapp-com-/",
    role: "Desenvolvedor",
    period: "Out 2014 - Nov 2016",
    location: "Brasil",
    summary:
      "Contribuição importante para o AZK, uma ferramenta open source para orquestração de ambientes de desenvolvimento.",
    bullets: [
      "Fui um dos principais contribuidores do AZK, atuando em desenvolvimento, suporte à comunidade e gestão do projeto.",
      "Trabalhei com práticas de TDD e fluxos de colaboração próprios de um projeto open source de alto impacto.",
      "Ajudei a consolidar uma solução anterior ao docker-compose para uso de equipes técnicas.",
    ],
  },
  {
    company: "Integgro Tecnologia da Informação",
    role: "Desenvolvedor",
    period: "2013",
    location: "Brasil",
    summary:
      "Atuação em projetos com ASP.NET MVC e JavaScript, incluindo base de CI ainda utilizada.",
    bullets: [
      "Desenvolvi aplicações em ASP.NET MVC e JavaScript com foco em entrega consistente.",
      "Estruturei um servidor de CI que permaneceu em uso após minha passagem pela empresa.",
    ],
  },
  {
    company: "Grupo SHC",
    companyLinkedin: "https://www.linkedin.com/company/grupo-shc",
    role: "Desenvolvedor & Instrutor",
    period: "Mar 2006 - Set 2012",
    location: "Brasil",
    summary:
      "Arquitetura técnica do Apollo Web, treinamento de times e decisões de tecnologia em um projeto grande da empresa.",
    bullets: [
      "Atuei como arquiteto técnico do Apollo Web, o maior projeto de software do grupo.",
      "Conduzi escolhas técnicas, treinamento e montagem de práticas de CI/CD.",
      "Trabalhei com ASP.NET, SQL Server, NHibernate, SAP e ferramentas open source.",
    ],
  },
  {
    company: "everis",
    companyLinkedin: "https://www.linkedin.com/company/everis-is-nttdata",
    role: "Analista Programador",
    period: "Mai 2005 - Fev 2006",
    location: "Brasil",
    summary:
      "Projetos para Santander Banespa com análise, desenvolvimento web e colaboração técnica.",
    bullets: [
      "Participei de análise de sistemas e desenvolvimento web em Visual Basic 6 e Oracle.",
      "Atuei com liderança técnica em um contexto corporativo de grande porte.",
    ],
  },
  {
    company: "GEMPI",
    role: "Desenvolvedor",
    period: "Ago 2003 - Abr 2005",
    location: "Brasil",
    summary:
      "Primeiras entregas profissionais em projetos para Embratel e Telemar.",
    bullets: [
      "Trabalhei com gestão de projetos, migração de banco de dados e desenvolvimento web.",
      "Entreguei rotinas com Oracle e integração com necessidades de operação da época.",
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
