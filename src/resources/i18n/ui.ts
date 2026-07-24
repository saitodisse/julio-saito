import type { Locale } from "@/lib/site-preferences";

type UiCopySchema = {
	preferences: {
		title: string;
		description: string;
		themeLabel: string;
		themeSystem: string;
		themeLight: string;
		themeDark: string;
		languageLabel: string;
		languagePt: string;
		languageEn: string;
		confirm: string;
	};
	nav: {
		home: string;
		work: string;
		resume: string;
		downloadPdf: string;
		toggleTheme: string;
	};
	footer: {
		projectRepository: string;
		resetPreferences: string;
		resetPreferencesLabel: string;
		languageSwitchLabel: string;
		switchToPortuguese: string;
		switchToEnglish: string;
	};
	home: {
		heroTitle: string;
		viewProjects: string;
		viewResume: string;
		featuredProjects: string;
		relatedMusicProjects: string;
		otherProjects: string;
		outsideMusicProjects: string;
		projectsLabel: string;
		viewSite: string;
		expandImage: string;
		closePreview: string;
		ctaTitle: string;
		ctaBody: string;
		viewWork: string;
		profileAlt: string;
	};
	achorde: {
		backLabel: string;
		eyebrow: string;
		title: string;
		summary: string;
		productsTitle: string;
		packagesTitle: string;
		packagesSummary: string;
	};
	project: {
		backLabel: string;
		projectLinkLabel: string;
		repositoryLinkLabel: string;
	};
	work: {
		backLabel: string;
		eyebrow: string;
		title: string;
		summary: string;
		highlight: string;
		ctaTitle: string;
		ctaBody: string;
		viewResume: string;
	};
	resume: {
		backLabel: string;
		eyebrow: string;
		title: string;
		summary: string;
		skillsTitle: string;
		educationTitle: string;
		languagesTitle: string;
		languagesNote: string;
		downloadPdf: string;
		viewWork: string;
	};
};

const ui = {
	pt: {
		preferences: {
			title: "Personalize sua visita",
			description:
				"Escolha o tema e o idioma do site. Suas preferências ficam salvas neste navegador.",
			themeLabel: "Tema",
			themeSystem: "Sistema",
			themeLight: "Claro",
			themeDark: "Escuro",
			languageLabel: "Idioma",
			languagePt: "Português",
			languageEn: "Inglês",
			confirm: "Salvar preferências",
		},
		nav: {
			home: "Início",
			work: "Trabalhos",
			resume: "Currículo",
			downloadPdf: "Baixar PDF",
			toggleTheme: "Alternar tema",
		},
		footer: {
			projectRepository: "Código no GitHub",
			resetPreferences: "Redefinir preferências",
			resetPreferencesLabel:
				"Limpar preferências salvas e abrir novamente a escolha de tema e idioma",
			languageSwitchLabel: "Trocar idioma do site",
			switchToPortuguese: "Trocar para português",
			switchToEnglish: "Trocar para inglês",
		},
		home: {
			heroTitle: "Engenheiro de software",
			viewProjects: "Ver projetos",
			viewResume: "Ver currículo",
			featuredProjects: "Projetos em destaque",
			relatedMusicProjects: "Projetos musicais relacionados.",
			otherProjects: "Outros projetos",
			outsideMusicProjects: "Projetos fora da categoria musical.",
			projectsLabel: "projetos",
			viewSite: "Ver site",
			expandImage: "Ampliar imagem do projeto",
			closePreview: "Fechar",
			ctaTitle: "Quer ver a trajetória completa?",
			ctaBody:
				"A página de work concentra o histórico profissional, e o currículo traz os contatos e o PDF para download.",
			viewWork: "Ver work",
			profileAlt: "Retrato de Julio Saito",
		},
		achorde: {
			backLabel: "Voltar para Home",
			eyebrow: "Ecossistema musical",
			title: "Achorde",
			summary:
				"Produtos e bibliotecas que conectam leitura de cifras, criação de acordes e publicação de repertório.",
			productsTitle: "Produtos",
			packagesTitle: "Pacotes públicos",
			packagesSummary:
				"Componentes open source para construir experiências musicais com contratos consistentes.",
		},
		project: {
			backLabel: "Voltar para projetos",
			projectLinkLabel: "Abrir projeto",
			repositoryLinkLabel: "Abrir repositório",
		},
		work: {
			backLabel: "Voltar para Home",
			eyebrow: "Work",
			title: "Trajetória profissional",
			summary:
				"Trajetória profissional em ordem cronológica, com contexto de cada empresa, responsabilidades e principais entregas técnicas.",
			highlight: "Em destaque",
			ctaTitle: "Quer ver o resumo curto?",
			ctaBody:
				"O currículo organiza contato, competências principais e o PDF para download.",
			viewResume: "Ver currículo",
		},
		resume: {
			backLabel: "Voltar para Home",
			eyebrow: "Currículo",
			title: "Engenheiro de Software Sênior",
			summary:
				"Engenheiro de software sênior com 20+ anos de experiência criando plataformas web complexas, sistemas em cloud e software crítico para negócios, com foco atual em orquestração de agentes de IA, SDD, TDD e arquitetura confiável.",
			skillsTitle: "Competências principais",
			educationTitle: "Formação",
			languagesTitle: "Idiomas",
			languagesNote:
				"Esta página concentra contato direto, competências centrais e informações essenciais para uma primeira triagem profissional.",
			downloadPdf: "Baixar PDF",
			viewWork: "Ver trajetória completa",
		},
	},
	en: {
		preferences: {
			title: "Customize your visit",
			description:
				"Choose the site theme and language. Your preferences are saved in this browser.",
			themeLabel: "Theme",
			themeSystem: "System",
			themeLight: "Light",
			themeDark: "Dark",
			languageLabel: "Language",
			languagePt: "Portuguese",
			languageEn: "English",
			confirm: "Save preferences",
		},
		nav: {
			home: "Home",
			work: "Work",
			resume: "Resume",
			downloadPdf: "Download PDF",
			toggleTheme: "Toggle theme",
		},
		footer: {
			projectRepository: "Source on GitHub",
			resetPreferences: "Reset preferences",
			resetPreferencesLabel:
				"Clear saved preferences and open theme and language selection again",
			languageSwitchLabel: "Change site language",
			switchToPortuguese: "Switch to Portuguese",
			switchToEnglish: "Switch to English",
		},
		home: {
			heroTitle: "Software engineer",
			viewProjects: "View projects",
			viewResume: "View resume",
			featuredProjects: "Featured projects",
			relatedMusicProjects: "Related music projects.",
			otherProjects: "Other projects",
			outsideMusicProjects: "Projects outside the music category.",
			projectsLabel: "projects",
			viewSite: "Visit site",
			expandImage: "Enlarge project image",
			closePreview: "Close",
			ctaTitle: "Want the full career path?",
			ctaBody:
				"The work page gathers professional history, and the resume page brings contacts plus the PDF download.",
			viewWork: "View work",
			profileAlt: "Portrait of Julio Saito",
		},
		achorde: {
			backLabel: "Back to Home",
			eyebrow: "Music ecosystem",
			title: "Achorde",
			summary:
				"Products and libraries that connect chord-chart reading, chord creation, and repertoire publishing.",
			productsTitle: "Products",
			packagesTitle: "Public packages",
			packagesSummary:
				"Open-source components for building musical experiences with consistent contracts.",
		},
		project: {
			backLabel: "Back to projects",
			projectLinkLabel: "Open project",
			repositoryLinkLabel: "Open repository",
		},
		work: {
			backLabel: "Back to Home",
			eyebrow: "Work",
			title: "Professional journey",
			summary:
				"Professional journey in chronological order, including context for each company, responsibilities, and key technical deliveries.",
			highlight: "Featured",
			ctaTitle: "Want the short summary?",
			ctaBody:
				"The resume page organizes contact details, core skills, and the PDF download.",
			viewResume: "View resume",
		},
		resume: {
			backLabel: "Back to Home",
			eyebrow: "Resume",
			title: "Senior Software Engineer",
			summary:
				"Senior software engineer with 20+ years of experience building complex web platforms, cloud-based systems, and business-critical software, currently focused on AI agent orchestration, SDD, TDD, and reliable architecture.",
			skillsTitle: "Core skills",
			educationTitle: "Education",
			languagesTitle: "Languages",
			languagesNote:
				"This page focuses on direct contact, core skills, and essential details for a first professional screening.",
			downloadPdf: "Download PDF",
			viewWork: "View Work History",
		},
	},
} as const satisfies Record<Locale, UiCopySchema>;

export type UiCopy = UiCopySchema;

export function getUi(locale: Locale): UiCopy {
	return ui[locale];
}
