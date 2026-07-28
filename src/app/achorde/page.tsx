"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { PageShell } from "@/components/page-shell";
import { ProjectCard } from "@/components/project-card";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { useSiteHref } from "@/lib/site-routing";
import { getSkillTagTone, orderProjectTags } from "@/lib/tag-tones";
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
								viewAllProjectsLabel={ui.home.viewAllProjects}
								imageActionLabel={ui.home.imageActionLabel}
								expandImageLabel={ui.home.expandImage}
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
					<div className="mt-8 border-t border-border">
						{packages.map((project, index) => (
							<article
								key={project.name}
								className="grid gap-6 border-b border-border py-12 sm:py-16 md:grid-cols-[minmax(0,1fr)_minmax(11rem,0.32fr)] md:gap-12"
							>
								<div>
									<h3 className="text-balance text-[clamp(1.8rem,4vw,3.1rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground">
										{project.name.replace(/^@achorde\//, "")}
									</h3>
									<p className="mt-4 max-w-2xl text-[0.98rem] leading-7 tracking-[-0.01em] text-foreground/62">
										{project.description}
									</p>
									<div className="mt-5 flex flex-wrap gap-2">
										{orderProjectTags(project.tags).map((tag, tagIndex) => (
											<span
												key={tag}
												className={cn(
													"rounded-full border px-3 py-1 text-[0.82rem] font-medium tracking-[-0.01em]",
													getSkillTagTone(tag, index + tagIndex + 2),
												)}
											>
												{tag}
											</span>
										))}
									</div>
								</div>
								<div className="flex flex-col items-start gap-3 md:pt-2">
									{project.detailPath ? (
										<Link
											href={href(project.detailPath)}
											className="inline-flex items-center gap-2 text-[0.98rem] font-medium text-foreground transition-colors hover:text-primary"
										>
											<ExternalLink className="size-4" />
											{ui.project.viewDetailsLabel}
										</Link>
									) : null}
									{project.github ? (
										<a
											href={project.github}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-2 text-[0.98rem] font-medium text-foreground transition-colors hover:text-primary"
										>
											<GitBranch className="size-4" />
											GitHub
										</a>
									) : null}
									{project.site ? (
										<a
											href={project.site}
											target="_blank"
											rel="noreferrer"
											className="inline-flex items-center gap-2 text-[0.98rem] font-medium text-foreground/70 transition-colors hover:text-foreground"
										>
											<ExternalLink className="size-4" />
											{ui.home.viewSite}
										</a>
									) : null}
								</div>
								{project.image && project.detailPath ? (
									<div className="relative col-span-full aspect-[16/8] w-full overflow-hidden rounded-[20px] border border-border bg-card">
										<Link
											href={href(project.detailPath)}
											aria-label={`${ui.project.viewDetailsLabel}: ${project.name}`}
											className="group block size-full outline-offset-[-4px] focus-visible:outline-2 focus-visible:outline-primary"
										>
											<Image
												src={project.image}
												alt={project.imageAlt}
												fill
												sizes="(min-width: 1280px) 1184px, (min-width: 1024px) calc(100vw - 96px), 100vw"
												className="object-cover transition-transform duration-300 group-hover:scale-[1.015]"
											/>
										</Link>
									</div>
								) : null}
							</article>
						))}
					</div>
				</section>
			</PageShell>
		</div>
	);
}
