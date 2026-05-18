import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SitePreferencesProvider } from "@/components/site-preferences-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { publicName } from "@/resources/site-content";

const geist = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: `${publicName} | Engenheiro de Software Sênior`,
  description: `Portfólio de ${publicName} com trajetória profissional, competências, projetos selecionados e currículo.`,
  metadataBase: new URL("https://julio-saito.vercel.app"),
  openGraph: {
    title: `${publicName} | Engenheiro de Software Sênior`,
    description: `Portfólio de ${publicName} com trajetória profissional, competências, projetos selecionados e currículo.`,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      suppressHydrationWarning
      className={`${geist.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider>
          <LocaleProvider>
            <SitePreferencesProvider>
              {children}
              <SiteFooter />
            </SitePreferencesProvider>
          </LocaleProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
