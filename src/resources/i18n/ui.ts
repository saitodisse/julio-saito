import type { Locale } from "@/lib/site-preferences";

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
      home: "Home",
      work: "Work",
      resume: "Currículo",
      downloadPdf: "Baixar PDF",
      toggleTheme: "Alternar tema",
    },
    footer: {
      resetPreferences: "Redefinir preferências",
      resetPreferencesLabel:
        "Limpar preferências salvas e abrir novamente a escolha de tema e idioma",
    },
    home: {
      heroTitle: "Engenheiro de software",
      viewProjects: "Ver projetos",
      viewResume: "Ver currículo",
      featuredProjects: "Projetos em destaque",
      viewSite: "Ver site",
      ctaTitle: "Quer ver a trajetória completa?",
      ctaBody:
        "A página de work concentra o histórico profissional, e o currículo traz os contatos e o PDF para download.",
      viewWork: "Ver work",
      profileAlt: "Retrato de Julio Saito",
    },
    work: {
      backLabel: "Voltar para Home",
      eyebrow: "Work",
      title: "Trajetória profissional",
      highlight: "Destaque principal",
      ctaTitle: "Quer ver o resumo curto?",
      ctaBody:
        "O currículo organiza contato, competências principais e o PDF para download.",
      viewResume: "Ver currículo",
    },
    resume: {
      backLabel: "Voltar para Home",
      eyebrow: "Currículo",
      title: "Resumo profissional",
      skillsTitle: "Competências principais",
      educationTitle: "Formação",
      languagesTitle: "Idiomas",
      languagesNote:
        "Esta página concentra o contato direto e os grupos de competências que costumam interessar primeiro em uma triagem.",
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
      resetPreferences: "Reset preferences",
      resetPreferencesLabel:
        "Clear saved preferences and open theme and language selection again",
    },
    home: {
      heroTitle: "Software engineer",
      viewProjects: "View projects",
      viewResume: "View resume",
      featuredProjects: "Featured projects",
      viewSite: "Visit site",
      ctaTitle: "Want the full career path?",
      ctaBody:
        "The work page gathers professional history, and the resume page brings contacts plus the PDF download.",
      viewWork: "View work",
      profileAlt: "Portrait of Julio Saito",
    },
    work: {
      backLabel: "Back to Home",
      eyebrow: "Work",
      title: "Professional journey",
      highlight: "Main highlight",
      ctaTitle: "Want the short summary?",
      ctaBody:
        "The resume page organizes contact details, core skills, and the PDF download.",
      viewResume: "View resume",
    },
    resume: {
      backLabel: "Back to Home",
      eyebrow: "Resume",
      title: "Professional summary",
      skillsTitle: "Core skills",
      educationTitle: "Education",
      languagesTitle: "Languages",
      languagesNote:
        "This page focuses on direct contact details and skill groups that usually matter first in a screening.",
      downloadPdf: "Download PDF",
      viewWork: "View full journey",
    },
  },
} as const;

export type UiCopy = (typeof ui)[Locale];

export function getUi(locale: Locale): UiCopy {
  return ui[locale];
}
