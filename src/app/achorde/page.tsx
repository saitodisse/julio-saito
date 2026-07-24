"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { useSiteHref } from "@/lib/site-routing";
import { cn } from "@/lib/utils";

export default function AchordePage() {
	const { content, ui } = useLocale();
	const href = useSiteHref();
	const [ac15, artistPortal, ...packages] = content.achordeProjects;

	return (
		<div className="min-h-screen bg-background text-foreground">
			<SiteHeader activePath="/achorde" />
			<PageShell className="pt-8 sm:pt-10 lg:pt-12">
				<Link
					href={href("/#projects")}
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"-ml-3 h-10 gap-2 px-3 text-foreground/70 hover:text-foreground",
					)}
				>
					<ArrowLeft className="size-4" />
					{ui.achorde.backLabel}
				</Link>

				<section className="pb-14 pt-8 sm:pb-20 sm:pt-12">
					<p className="text-[0.78rem] font-medium uppercase tracking-[0.18em] text-primary">
						{ui.achorde.eyebrow}
					</p>
					<h1 className="mt-4 text-balance text-[clamp(3rem,8vw,5rem)] font-semibold leading-[0.98] tracking-[-0.06em] text-foreground">
						{ui.achorde.title}
					</h1>
					<p className="mt-6 max-w-2xl text-pretty text-[1.05rem] leading-8 tracking-[-0.01em] text-foreground/62">
						{ui.achorde.summary}
					</p>
				</section>

				<section className="pb-16">
					<h2 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.85rem]">
						{ui.achorde.productsTitle}
					</h2>
					<div className="mt-8 grid gap-5 md:grid-cols-2">
						{[ac15, artistPortal].map((project, index) => (
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
				</section>

				<section
					id="pacotes"
					className="scroll-mt-8 border-t border-border pb-16 pt-12"
				>
					<h2 className="text-[1.45rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.85rem]">
						{ui.achorde.packagesTitle}
					</h2>
					<p className="mt-2 max-w-2xl text-[0.98rem] leading-7 text-foreground/62">
						{ui.achorde.packagesSummary}
					</p>
					<div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
						{packages.map((project, index) => (
							<ProjectCard
								key={project.name}
								project={project}
								index={index + 2}
								viewSiteLabel={ui.home.viewSite}
								expandImageLabel={ui.home.expandImage}
								closePreviewLabel={ui.home.closePreview}
							/>
						))}
					</div>
				</section>
			</PageShell>
		</div>
	);
}
