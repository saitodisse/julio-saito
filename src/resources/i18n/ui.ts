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
		viewAllProjects: string;
		viewSite: string;
		imageActionLabel: string;
		expandImage: string;
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
		fullscreenImage: string;
		featuresTitle: string;
		installationTitle: string;
		usageTitle: string;
		viewDetailsLabel: string;
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
			heroTitle: "Engenheiro de software sênior",
			viewProjects: "Ver projetos",
			viewResume: "Ver currículo",
			featuredProjects: "Projetos em destaque",
			relatedMusicProjects: "Projetos musicais relacionados.",
			otherProjects: "Outros projetos",
			outsideMusicProjects: "Projetos fora da categoria musical.",
			projectsLabel: "projetos",
			viewAllProjects: "Ver todos os projetos",
			viewSite: "Ver site",
			imageActionLabel: "Clique na imagem para saber mais",
			expandImage: "Abrir detalhes do projeto",
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
			productsTitle: "Aplicativos",
			packagesTitle: "Open source",
			packagesSummary:
				"Componentes open source para construir experiências musicais com contratos consistentes.",
		},
		project: {
			backLabel: "Voltar para projetos",
			projectLinkLabel: "Abrir projeto",
			repositoryLinkLabel: "Abrir repositório",
			fullscreenImage: "Ver imagem em tela cheia",
			featuresTitle: "Principais funcionalidades",
			installationTitle: "Instalação",
			usageTitle: "Uso mais comum",
			viewDetailsLabel: "Ver detalhes",
		},
		work: {
			backLabel: "Voltar para Home",
			eyebrow: "Work",
			title: "Trajetória profissional",
			summary:
				"Uma trajetória em produtos digitais, sistemas de negócio e plataformas cloud, conectando arquitetura, entrega e evolução técnica.",
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
				"Engenheiro de software sênior que transforma problemas de negócio em produtos digitais confiáveis, combinando arquitetura, TypeScript, Node.js, React e IA aplicada com decisões técnicas, testes e documentação sob controle.",
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
			heroTitle: "Senior software engineer",
			viewProjects: "View projects",
			viewResume: "View resume",
			featuredProjects: "Featured projects",
			relatedMusicProjects: "Related music projects.",
			otherProjects: "Other projects",
			outsideMusicProjects: "Projects outside the music category.",
			projectsLabel: "projects",
			viewAllProjects: "View all projects",
			viewSite: "Visit site",
			imageActionLabel: "Click the image to learn more",
			expandImage: "Open project details",
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
			productsTitle: "Applications",
			packagesTitle: "Open source",
			packagesSummary:
				"Open-source components for building musical experiences with consistent contracts.",
		},
		project: {
			backLabel: "Back to projects",
			projectLinkLabel: "Open project",
			repositoryLinkLabel: "Open repository",
			fullscreenImage: "View image in full screen",
			featuresTitle: "Key features",
			installationTitle: "Installation",
			usageTitle: "Common use",
			viewDetailsLabel: "View details",
		},
		work: {
			backLabel: "Back to Home",
			eyebrow: "Work",
			title: "Professional journey",
			summary:
				"A career across digital products, business systems, and cloud platforms, connecting architecture, delivery, and technical evolution.",
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
				"Senior software engineer who turns business problems into reliable digital products by combining architecture, TypeScript, Node.js, React, and applied AI with technical decisions, testing, and documentation under control.",
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
