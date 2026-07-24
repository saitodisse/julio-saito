"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BriefcaseBusiness, Link2 } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { useSiteHref } from "@/lib/site-routing";
import { cn } from "@/lib/utils";

export default function Home() {
	const { content, ui } = useLocale();
	const href = useSiteHref();
	const {
		achordeHomeProjects,
		credentials,
		featuredProjects,
		person,
		professionalSummary,
	} = content;
	const projects = [...achordeHomeProjects, ...featuredProjects];

	return (
		<div className="min-h-screen bg-background text-foreground">
			<SiteHeader activePath="/" />

			<PageShell className="pt-8 sm:pt-10 lg:pt-12">
				<section className="grid items-center gap-10 pb-14 lg:grid-cols-[1.04fr_0.96fr] lg:gap-20 lg:pb-24">
					<div className="max-w-2xl">
						<h1 className="mt-3 max-w-3xl text-balance text-[clamp(3.2rem,10vw,5rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-foreground sm:mt-4 sm:text-[clamp(3.6rem,6.8vw,5.4rem)]">
							{ui.home.heroTitle}
						</h1>
						<p className="mt-5 max-w-2xl text-pretty text-[1rem] leading-7 tracking-[-0.01em] text-foreground/62 sm:mt-8 sm:text-[1.08rem] sm:leading-8">
							{professionalSummary}
						</p>
						<div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:gap-4">
							<Link
								href={href("/#projects")}
								className={cn(
									buttonVariants({ size: "lg" }),
									"h-14 w-full justify-center rounded-xl px-6 text-[1rem] font-medium shadow-[0_12px_32px_rgba(232,200,74,0.22)] transition-transform hover:-translate-y-0.5 sm:w-auto",
								)}
							>
								<ArrowRight className="mr-3 size-5" />
								{ui.home.viewProjects}
							</Link>
							<Link
								href={href("/curriculo")}
								className={cn(
									buttonVariants({ variant: "outline", size: "lg" }),
									"h-14 w-full justify-center rounded-xl border-border bg-card px-6 text-[1rem] font-medium text-foreground/90 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-0.5 hover:bg-muted sm:w-auto",
								)}
							>
								<BriefcaseBusiness className="mr-3 size-5" />
								{ui.home.viewResume}
							</Link>
							<a
								href={person.linkedin}
								target="_blank"
								rel="noreferrer"
								className={cn(
									buttonVariants({ variant: "outline", size: "lg" }),
									"h-14 w-full justify-center rounded-xl border-border bg-card px-6 text-[1rem] font-medium text-foreground/90 shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-0.5 hover:bg-muted sm:w-auto",
								)}
							>
								<Link2 className="mr-3 size-5" />
								LinkedIn
							</a>
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
									src="/images/perfil2.png"
									alt={ui.home.profileAlt}
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
					<h2 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.85rem]">
						{ui.home.featuredProjects}
					</h2>
					<div className="mt-10">
						<div className="mb-5 flex justify-end">
							<span className="rounded-full border border-border bg-muted/40 px-3 py-1 text-[0.78rem] font-medium uppercase tracking-[0.14em] text-foreground/60">
								{projects.length} {ui.home.projectsLabel}
							</span>
						</div>
						<div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
							{projects.map((project, index) => (
								<ProjectCard
									key={project.name}
									project={project}
									index={index}
									viewSiteLabel={ui.home.viewSite}
									expandImageLabel={ui.home.expandImage}
									closePreviewLabel={ui.home.closePreview}
								/>
							))}
						</div>
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
									{ui.home.ctaTitle}
								</h2>
								<p className="mt-1 max-w-2xl text-[0.98rem] leading-7 tracking-[-0.01em] text-foreground/62">
									{ui.home.ctaBody}
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-3 sm:flex-row">
							<Link
								href={href("/work")}
								className={cn(
									buttonVariants({ variant: "outline", size: "lg" }),
									"h-12 w-full justify-center rounded-xl border-border bg-card px-5 text-[0.98rem] font-medium text-foreground shadow-[0_1px_0_rgba(0,0,0,0.03)] transition-transform hover:-translate-y-0.5 hover:bg-muted sm:w-auto",
								)}
							>
								{ui.home.viewWork}
							</Link>
							<Link
								href={href("/curriculo")}
								className={cn(
									buttonVariants({ size: "lg" }),
									"h-12 w-full justify-center rounded-xl px-5 text-[0.98rem] font-medium shadow-[0_12px_30px_rgba(175,144,11,0.18)] transition-transform hover:-translate-y-0.5 sm:w-auto",
								)}
							>
								{ui.home.viewResume}
							</Link>
						</div>
					</div>
				</section>
			</PageShell>
		</div>
	);
}
