"use client";

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

import { useLocale } from "@/components/locale-provider";
import { SiteHeader } from "@/components/site-header";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const contactIcons = {
  mail: Mail,
  linkedin: Link2,
  github: GitBranch,
  map: MapPin,
} as const;

const featuredSkills = new Set([
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "PostgreSQL",
  "System Design",
  "Spec-Driven Development",
  "LLM Orchestration",
  "AI Coding Agents",
]);

const mutedSkills = new Set([
  "Progressive Web Apps",
  "Technical Documentation",
  "Technical Specifications",
  "AGENTS.md",
  "Sub-agents",
]);

export default function CurriculoPage() {
  const { content, ui } = useLocale();
  const { contactLinks, education, person, skillGroups } = content;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader activePath="/curriculo" />

      <PageShell className="pt-8 sm:pt-10 lg:pt-12">
        <section className="max-w-5xl">
          <PageIntro
            backHref="/"
            backLabel={ui.resume.backLabel}
            eyebrow={ui.resume.eyebrow}
            title={ui.resume.title}
            summary={ui.resume.summary}
            icon={FileText}
          />

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <a
              href="/curriculo.pdf"
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-14 w-full justify-center rounded-xl px-6 text-[1rem] font-medium shadow-[0_12px_30px_rgba(175,144,11,0.18)] transition-transform hover:-translate-y-0.5 sm:w-auto",
              )}
            >
              <Download className="mr-3 size-5" />
              {ui.resume.downloadPdf}
            </a>
            <Link
              href="/work"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-14 w-full justify-center rounded-xl border-border bg-card px-6 text-[1rem] font-medium text-foreground shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-0.5 hover:bg-muted sm:w-auto",
              )}
            >
              {ui.resume.viewWork}
            </Link>
          </div>

          <div className="mt-8 grid gap-4 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
            {contactLinks.map((item) => {
              const Icon = contactIcons[item.icon];
              const card = (
                <div className="flex h-full flex-col rounded-[20px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:px-5 sm:py-5">
                  <div className="flex items-center gap-3">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-primary/15 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-foreground/42">
                        {item.label}
                      </p>
                      <p className="mt-1 break-words text-[0.98rem] font-medium tracking-[-0.02em] text-foreground">
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
                    rel={
                      item.href.startsWith("http") ? "noreferrer" : undefined
                    }
                  >
                    {card}
                  </a>
                );
              }

              return <div key={item.label}>{card}</div>;
            })}
          </div>

          <div className="mt-10 grid gap-4">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl border border-border bg-primary/15 text-primary shadow-[0_1px_0_rgba(0,0,0,0.03)]">
                <Sparkles className="size-5" />
              </span>
              <h2 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.75rem]">
                {ui.resume.skillsTitle}
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
                      <Badge
                        key={item}
                        variant={
                          featuredSkills.has(item)
                            ? "featured"
                            : mutedSkills.has(item)
                              ? "muted"
                              : "secondary"
                        }
                        className="px-3 py-1.5 text-[0.82rem] font-medium"
                      >
                        {item}
                      </Badge>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="mt-10 grid gap-4 lg:grid-cols-[1.1fr_0.9fr]">
            <article className="rounded-[24px] border border-border bg-card px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:px-6 sm:py-6">
              <h2 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground">
                {ui.resume.educationTitle}
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
                {ui.resume.languagesTitle}
              </h2>
              <div className="mt-4 grid gap-3">
                {person.languages.map((language) => (
                  <div
                    key={language.name}
                    className="rounded-[18px] border border-border bg-muted px-4 py-3"
                  >
                    <p className="text-[0.98rem] font-medium tracking-[-0.02em] text-foreground">
                      {language.name}
                    </p>
                    <p className="mt-1 text-[0.92rem] leading-6 text-foreground/68">
                      {language.level}
                    </p>
                  </div>
                ))}
              </div>

              <p className="mt-5 text-[0.98rem] leading-7 tracking-[-0.01em] text-foreground/62">
                {ui.resume.languagesNote}
              </p>
            </article>
          </div>

        </section>
      </PageShell>
    </div>
  );
}
