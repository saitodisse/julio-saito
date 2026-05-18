import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Julio Saito | Portfolio",
  description:
    "Portfólio simples de Julio Saito: produto, engenharia e projetos selecionados.",
  metadataBase: new URL("https://saitodisse-portifolio-2.vercel.app"),
  openGraph: {
    title: "Julio Saito | Portfolio",
    description:
      "Portfólio simples de Julio Saito: produto, engenharia e projetos selecionados.",
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
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">{children}</body>
    </html>
  );
}
