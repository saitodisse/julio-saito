import Image from "next/image";
import Link from "next/link";
import {
    ArrowRight,
    BriefcaseBusiness,
    ExternalLink,
    Handshake,
    Leaf,
    Music4,
    Sparkles,
    Terminal,
} from "lucide-react";

import { SiteHeader } from "@/components/site-header";
import { PageShell } from "@/components/page-shell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
    credentials,
    featuredProjects,
    publicName,
    professionalSummary,
} from "@/resources/site-content";

const projectIcons = {
    leaf: Leaf,
    music: Music4,
    handshake: Handshake,
    terminal: Terminal,
} as const;

const tagTone = [
    "border-border bg-secondary/20 text-secondary-foreground",
    "border-border bg-primary/12 text-foreground",
    "border-border bg-accent/20 text-accent-foreground",
    "border-border bg-muted/80 text-foreground/80",
];

export default function Home() {
    return (
        <div className="min-h-screen bg-background text-foreground">
            <SiteHeader activePath="/" />

            <PageShell className="pt-8 sm:pt-10 lg:pt-12">
                <section className="grid items-center gap-10 pb-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20 lg:pb-24">
                    <div className="max-w-2xl">
                        <div className="inline-flex items-center rounded-full border border-border bg-card px-3.5 py-2 text-sm text-foreground/70 shadow-[0_1px_0_rgba(0,0,0,0.03)] sm:px-4">
                            <Sparkles className="mr-2 size-4" />
                            {publicName}
                        </div>

                        <h1 className="mt-6 max-w-3xl text-balance text-[clamp(3.2rem,10vw,5rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-foreground sm:mt-8 sm:text-[clamp(3.6rem,6.8vw,5.4rem)]">
                            Engenharia de software para produtos úteis,
                            simples e escaláveis.
                        </h1>

                        <p className="mt-5 max-w-2xl text-pretty text-[1rem] leading-7 tracking-[-0.01em] text-foreground/62 sm:mt-8 sm:text-[1.08rem] sm:leading-8">
                            {professionalSummary}
                        </p>

                        <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
                            <Link
                                href="#projects"
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "h-14 w-full justify-center rounded-xl px-6 text-[1rem] font-medium shadow-[0_12px_32px_rgba(232,200,74,0.22)] transition-transform hover:-translate-y-0.5 sm:w-auto",
                                )}
                            >
                                <ArrowRight className="mr-3 size-5" />
                                Ver projetos
                            </Link>
                            <Link
                                href="/curriculo"
                                className={cn(
                                    buttonVariants({
                                        variant: "outline",
                                        size: "lg",
                                    }),
                                    "h-14 w-full justify-center rounded-xl border-border bg-card px-6 text-[1rem] font-medium text-foreground/90 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-0.5 hover:bg-muted sm:w-auto",
                                )}
                            >
                                <BriefcaseBusiness className="mr-3 size-5" />
                                Ver currículo
                            </Link>
                        </div>

                        <div className="mt-8 grid gap-3 sm:mt-10 sm:grid-cols-2 xl:grid-cols-4">
                            {credentials.map((item) => (
                                <div
                                    key={item.label}
                                    className="rounded-[18px] border border-border bg-card px-4 py-4 shadow-[0_1px_0_rgba(0,0,0,0.02)]"
                                >
                                    <p className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-foreground/42">
                                        {item.label}
                                    </p>
                                    <p className="mt-2 text-[0.98rem] font-medium tracking-[-0.02em] text-foreground">
                                        {item.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-4 rounded-[36px] bg-[radial-gradient(circle_at_50%_35%,rgba(232,200,74,0.12),transparent_55%)] blur-2xl" />
                        <div className="relative overflow-hidden rounded-[30px] border border-white/8 bg-card shadow-[0_24px_80px_rgba(0,0,0,0.45),inset_0_1px_0_rgba(255,255,255,0.04)]">
                            <div className="relative aspect-[0.92/1] w-full sm:aspect-[1.02/1] lg:min-h-[420px]">
                                <Image
                                    src="/perfil2.png"
                                    alt="Retrato de Julio Saito"
                                    fill
                                    priority
                                    sizes="(min-width: 1024px) 560px, 100vw"
                                    className="object-cover object-[50%_18%] brightness-[0.96] contrast-[1.04] grayscale-[0.18] saturate-[0.9]"
                                />
                                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.1))] dark:bg-[linear-gradient(180deg,rgba(0,0,0,0.02),rgba(0,0,0,0.1))]" />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="projects" className="pb-16">
                    <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
                        <div className="flex items-center gap-4">
                            <div>
                                <h2 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.85rem]">
                                    Projetos em destaque
                                </h2>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                        {featuredProjects.map((project, index) => {
                            const Icon = projectIcons[project.icon];

                            return (
                                <article
                                    key={project.name}
                                    className="flex min-h-[320px] flex-col rounded-[24px] border border-border bg-card/90 p-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm sm:p-6"
                                >
                                    <div
                                        className={cn(
                                            "flex size-14 items-center justify-center rounded-2xl",
                                            index % 4 === 0
                                                ? "bg-primary text-primary-foreground"
                                                : index % 4 === 1
                                                  ? "bg-secondary text-secondary-foreground"
                                                  : index % 4 === 2
                                                    ? "bg-accent text-accent-foreground"
                                                    : "bg-muted text-foreground",
                                        )}
                                    >
                                        <Icon className="size-6" />
                                    </div>

                                    <h3 className="mt-7 text-[1.25rem] font-semibold tracking-[-0.04em] text-foreground sm:mt-8 sm:text-[1.35rem]">
                                        {project.name}
                                    </h3>

                                    <p className="mt-3 text-[0.98rem] leading-[1.65] tracking-[-0.01em] text-foreground/64">
                                        {project.description}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {project.tags.map((tag, tagIndex) => (
                                            <span
                                                key={tag}
                                                className={cn(
                                                    "rounded-full border px-3 py-1 text-[0.85rem] font-medium tracking-[-0.01em]",
                                                    tagTone[
                                                        (index + tagIndex) %
                                                            tagTone.length
                                                    ],
                                                )}
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="mt-auto flex items-center justify-between pt-7">
                                        <a
                                            href={project.href}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 text-[0.96rem] font-medium tracking-[-0.01em] text-foreground/84 transition-colors hover:text-foreground"
                                        >
                                            <ExternalLink className="size-4" />
                                            Abrir projeto
                                        </a>
                                        <ArrowRight className="size-5 text-foreground" />
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </section>

                <section className="pt-6">
                    <div className="flex flex-col gap-5 rounded-[24px] border border-border bg-card px-5 py-5 shadow-[0_1px_0_rgba(0,0,0,0.02)] md:flex-row md:items-center md:justify-between md:px-7">
                        <div className="flex items-start gap-4">
                            <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl border border-border bg-primary text-primary-foreground">
                                <BriefcaseBusiness className="size-6" />
                            </span>
                            <div>
                                <h2 className="text-[1.2rem] font-semibold tracking-[-0.03em] text-foreground">
                                    Quer ver a trajet&oacute;ria completa?
                                </h2>
                                <p className="mt-1 max-w-2xl text-[0.98rem] leading-7 tracking-[-0.01em] text-foreground/62">
                                    A p&aacute;gina de work concentra o
                                    hist&oacute;rico profissional, e o
                                    curr&iacute;culo traz os contatos e o PDF
                                    para download.
                                </p>
                            </div>
                        </div>

                        <div className="flex flex-col gap-3 sm:flex-row">
                            <Link
                                href="/work"
                                className={cn(
                                    buttonVariants({
                                        variant: "outline",
                                        size: "lg",
                                    }),
                                    "h-12 w-full justify-center rounded-xl border-border bg-card px-5 text-[0.98rem] font-medium text-foreground shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-0.5 hover:bg-muted sm:w-auto",
                                )}
                            >
                                Ver work
                            </Link>
                            <Link
                                href="/curriculo"
                                className={cn(
                                    buttonVariants({ size: "lg" }),
                                    "h-12 w-full justify-center rounded-xl px-5 text-[0.98rem] font-medium shadow-[0_12px_30px_rgba(175,144,11,0.18)] transition-transform hover:-translate-y-0.5 sm:w-auto",
                                )}
                            >
                                Ver curr&iacute;culo
                            </Link>
                        </div>
                    </div>
                </section>
            </PageShell>
        </div>
    );
}
