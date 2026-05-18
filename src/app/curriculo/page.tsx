import Link from "next/link";
import {
  Download,
  FileText,
  GitBranch,
  Mail,
  MapPin,
  Link2,
  Sparkles,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  contactLinks,
  education,
  person,
  professionalSummary,
  skillGroups,
} from "@/resources/site-content";

const contactIcons = {
  mail: Mail,
  linkedin: Link2,
  github: GitBranch,
  map: MapPin,
} as const;

export default function CurriculoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader activePath="/curriculo" />

      <PageShell className="pt-8 sm:pt-10 lg:pt-12">
        <section className="max-w-5xl">
          <PageIntro
            backHref="/"
            backLabel="Voltar para Home"
            eyebrow="Currículo"
            title="Resumo profissional"
            summary={professionalSummary}
            icon={FileText}
          />

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
            {contactLinks.map((item) => {
              const Icon = contactIcons[item.icon];
              const card = (
                <div className="flex h-full flex-col rounded-[20px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:px-5 sm:py-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-primary/15 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-foreground/42">
                        {item.label}
                      </p>
                      <p className="mt-1 text-[0.98rem] font-medium tracking-[-0.02em] text-foreground">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </div>
              );

              if ("href" in item) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="transition-transform hover:-translate-y-0.5"
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                  >
                    {card}
                  </a>
                );
              }

              return (
                <div key={item.label}>
                  {card}
                </div>
              );
            })}
          </div>

          <div className="mt-10 grid gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-primary/15 text-primary shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <Sparkles className="size-5" />
              </span>
              <h2 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.75rem]">
                Compet&ecirc;ncias principais
              </h2>
            </div>

            <div className="grid gap-4 lg:grid-cols-2">
              {skillGroups.map((group) => (
                <article
                  key={group.title}
                  className="rounded-[20px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:px-5 sm:py-5"
                >
                  <h3 className="text-[1.08rem] font-semibold tracking-[-0.03em] text-foreground">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-[0.9rem] font-medium tracking-[-0.01em] text-secondary-foreground"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[24px] border border-border bg-card px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:px-6 sm:py-6">
              <h2 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground">
                Formação
              </h2>
              <div className="mt-4 grid gap-4">
                {education.map((item) => (
                  <div
                    key={item.name}
                    className="rounded-[18px] border border-border bg-muted px-4 py-4"
                  >
                    <p className="text-[1rem] font-medium tracking-[-0.02em] text-foreground">
                      {item.name}
                    </p>
                    <p className="mt-1 text-[0.96rem] leading-7 tracking-[-0.01em] text-foreground/66">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-[24px] border border-border bg-card px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:px-6 sm:py-6">
              <h2 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground">
                Idiomas
              </h2>
              <div className="mt-4 flex flex-wrap gap-2">
                {person.languages.map((language) => (
                  <span
                    key={language}
                    className="rounded-full border border-border bg-secondary/30 px-3 py-1 text-[0.9rem] font-medium tracking-[-0.01em] text-secondary-foreground"
                  >
                    {language}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-[0.98rem] leading-7 tracking-[-0.01em] text-foreground/62">
                Esta p&aacute;gina concentra o contato direto e os grupos de compet&ecirc;ncias que costumam interessar primeiro em uma triagem.
              </p>
            </article>
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="/curriculo.pdf"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 w-full justify-center rounded-xl px-6 text-[1rem] font-medium shadow-[0_12px_30px_rgba(175,144,11,0.18)] transition-transform hover:-translate-y-0.5 sm:w-auto"
              )}
            >
              <Download className="mr-3 size-5" />
              Baixar PDF
            </a>
            <Link
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 w-full justify-center rounded-xl border-border bg-card px-6 text-[1rem] font-medium text-foreground shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-0.5 hover:bg-muted sm:w-auto"
              )}
            >
              Ver trajet&oacute;ria completa
            </Link>
          </div>
        </section>
      </PageShell>
    </div>
  );
}
