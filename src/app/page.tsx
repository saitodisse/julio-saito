import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const projects = [
  {
    name: "Grana Clara",
    description:
      "Aplicação para organizar finanças com foco em clareza, velocidade e decisões do dia a dia.",
  },
  {
    name: "SVG Shored React",
    description:
      "Projeto open source com foco em visualização de fretboard, SVG e componentes reutilizáveis.",
  },
  {
    name: "NubaKart Finance",
    description:
      "Produto em evolução para controle financeiro, catálogo e visão prática do negócio.",
  },
];

const links = [
  { label: "GitHub", href: "https://github.com/saitodisse" },
  { label: "LinkedIn", href: "https://linkedin.com/in/julio-makdisse-saito-868707a/" },
  { label: "Email", href: "mailto:julio@exemplo.com" },
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col px-6 py-10 sm:px-10 lg:px-12">
      <section className="flex flex-1 flex-col justify-between gap-16 rounded-3xl border border-border bg-card p-8 shadow-sm sm:p-10 lg:p-14">
        <div className="max-w-3xl space-y-6">
          <p className="font-mono text-sm uppercase tracking-[0.24em] text-muted-foreground">
            saitodisse
          </p>
          <div className="space-y-4">
            <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance text-foreground sm:text-5xl lg:text-6xl">
              Portfólio simples, direto ao ponto e com foco em produto.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Sou Julio Saito, desenvolvedor full-stack. Gosto de transformar
              problemas práticos em interfaces limpas, rápidas e fáceis de
              manter.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row">
            <a href="#projects" className={cn(buttonVariants({ size: "lg" }), "rounded-full px-6")}>
              Ver projetos
            </a>
            <a
              href="#contact"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-6")}
            >
              Falar comigo
            </a>
          </div>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <section className="space-y-3">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Sobre
            </h2>
            <p className="max-w-xl text-pretty text-base leading-7 text-foreground/85 sm:text-lg">
              Trabalho com TypeScript, React e Next.js, e prefiro sites que
              pareçam simples para o visitante e organizados para quem vai dar
              manutenção depois.
            </p>
          </section>

          <section className="space-y-3" id="contact">
            <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
              Contato
            </h2>
            <div className="flex flex-wrap gap-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="rounded-full border border-border px-4 py-2 text-sm text-foreground transition-colors hover:bg-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </section>
        </div>

        <section className="space-y-6" id="projects">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                Projetos selecionados
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Uma amostra curta do tipo de trabalho que eu curto fazer.
              </p>
            </div>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.name}
                className="rounded-2xl border border-border bg-background p-5"
              >
                <h3 className="text-lg font-medium text-foreground">
                  {project.name}
                </h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">
                  {project.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </main>
  );
}
