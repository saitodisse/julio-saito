"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, CheckCircle2 } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { SiteHeader } from "@/components/site-header";
import { PageIntro } from "@/components/page-intro";
import { PageShell } from "@/components/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { useSiteHref } from "@/lib/site-routing";
import { getSkillTagTone } from "@/lib/tag-tones";
import { cn } from "@/lib/utils";

export default function WorkPage() {
  const { content, ui } = useLocale();
  const href = useSiteHref();
  const { experiences } = content;

  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader activePath="/work" />

      <PageShell className="pt-8 sm:pt-10 lg:pt-12">
        <section className="max-w-5xl">
          <PageIntro
            backHref={href("/")}
            backLabel={ui.work.backLabel}
            eyebrow={ui.work.eyebrow}
            title={ui.work.title}
            summary={ui.work.summary}
            icon={BriefcaseBusiness}
          />

          <div className="mt-8 grid gap-4 sm:mt-10">
            {experiences.map((experience, index) => (
              <article
                key={`${experience.company}-${experience.period}`}
                className="grid gap-5 rounded-[24px] border border-border bg-card px-4 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:px-6 sm:py-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:px-7"
              >
                <div className="lg:border-r lg:border-border lg:pr-6">
                  <p className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-foreground/42">
                    {experience.period}
                  </p>
                  <h2 className="mt-3 text-[1.16rem] font-semibold tracking-[-0.03em] text-foreground sm:text-[1.25rem]">
                    {"companyLinkedin" in experience ? (
                      <a
                        href={experience.companyLinkedin}
                        target="_blank"
                        rel="noreferrer"
                        className="underline underline-offset-4 transition-colors hover:text-primary"
                      >
                        {experience.company}
                      </a>
                    ) : (
                      experience.company
                    )}
                  </h2>
                  <p className="mt-2 text-[0.96rem] font-medium tracking-[-0.02em] text-foreground/70 sm:text-[0.98rem]">
                    {experience.role}
                  </p>
                  <p className="mt-2 text-[0.9rem] leading-6 tracking-[-0.01em] text-foreground/54 sm:text-[0.92rem]">
                    {experience.location}
                  </p>
                </div>

                <div className="lg:pl-1">
                  <p className="text-[0.96rem] leading-7 tracking-[-0.01em] text-foreground/68 sm:text-[0.98rem]">
                    {experience.summary}
                  </p>

                  <ul className="mt-5 grid gap-3">
                    {experience.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />
                        <p className="text-[0.96rem] leading-7 tracking-[-0.01em] text-foreground/72 sm:text-[0.98rem]">
                          {bullet}
                        </p>
                      </li>
                    ))}
                  </ul>

                  {index === 0 || index === 1 ? (
                    <div
                      className={cn(
                        "mt-5 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[0.8rem] font-medium tracking-[-0.01em]",
                        getSkillTagTone(ui.work.highlight, index),
                      )}
                    >
                      {ui.work.highlight}
                    </div>
                  ) : null}
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-4 rounded-[24px] border border-border bg-card px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] sm:flex-row sm:items-center sm:justify-between sm:px-6 sm:py-6">
            <div>
              <h2 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground">
                {ui.work.ctaTitle}
              </h2>
              <p className="mt-1 text-[0.98rem] leading-7 tracking-[-0.01em] text-foreground/62">
                {ui.work.ctaBody}
              </p>
            </div>

            <Link
              href={href("/curriculo")}
              className={cn(
                buttonVariants({ size: "lg" }),
                "h-12 w-full justify-center rounded-xl px-5 text-[0.98rem] font-medium shadow-[0_12px_30px_rgba(175,144,11,0.18)] transition-transform hover:-translate-y-0.5 sm:w-auto",
              )}
            >
              {ui.work.viewResume}
              <ArrowRight className="ml-3 size-5" />
            </Link>
          </div>
        </section>
      </PageShell>
    </div>
  );
}
