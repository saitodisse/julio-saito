import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";
import { LocaleProvider } from "@/components/locale-provider";
import { SiteFooter } from "@/components/site-footer";
import { SitePreferencesProvider } from "@/components/site-preferences-provider";
import { ThemeProvider } from "@/components/theme-provider";
import { publicName } from "@/resources/site-content";
import { NuqsAdapter } from "nuqs/adapters/next/app";

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
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (() => {
                try {
                  const params = new URLSearchParams(window.location.search);
                  const theme = params.get('theme');
                  const storedTheme = window.localStorage.getItem('theme');
                  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const resolvedTheme = theme === 'light' || theme === 'dark'
                    ? theme
                    : storedTheme === 'light' || storedTheme === 'dark'
                      ? storedTheme
                      : systemTheme;
                  const root = document.documentElement;
                  root.classList.toggle('dark', resolvedTheme === 'dark');
                  root.style.colorScheme = resolvedTheme;
                } catch (error) {}
              })();
            `,
          }}
        />
      </head>
      <body className="min-h-full bg-background text-foreground">
        <NuqsAdapter>
          <Suspense fallback={null}>
            <ThemeProvider>
              <LocaleProvider>
                <SitePreferencesProvider>
                  {children}
                  <SiteFooter />
                </SitePreferencesProvider>
              </LocaleProvider>
            </ThemeProvider>
          </Suspense>
        </NuqsAdapter>
      </body>
    </html>
  );
}
