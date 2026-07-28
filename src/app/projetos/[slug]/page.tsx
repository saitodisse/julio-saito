"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch, Maximize2 } from "lucide-react";
import { useParams } from "next/navigation";

import { useLocale } from "@/components/locale-provider";
import { CodeBlock } from "@/components/code-block";
import { PageShell } from "@/components/page-shell";
import { SiteHeader } from "@/components/site-header";
import { buttonVariants } from "@/components/ui/button";
import { useSiteHref } from "@/lib/site-routing";
import { getSkillTagTone, orderProjectTags } from "@/lib/tag-tones";
import { cn } from "@/lib/utils";

export default function ProjectPage() {
	const { slug } = useParams<{ slug: string }>();
	const { content, ui } = useLocale();
	const href = useSiteHref();
	const project = content.projectDetails.find(
		(item) => item.detailPath === `/projetos/${slug}`,
	);

	if (!project) {
		return null;
	}

	const backPath = project.name.startsWith("@achorde/")
		? "/achorde#pacotes"
		: "/#projects";
	const displayName = project.name.replace(/^@achorde\//, "");

	return (
		<div className="min-h-screen bg-background text-foreground">
			<SiteHeader activePath={`/projetos/${slug}`} />
			<PageShell className="pt-8 sm:pt-10 lg:pt-12">
				<Link
					href={href(backPath)}
					className={cn(
						buttonVariants({ variant: "ghost" }),
						"-ml-3 h-10 gap-2 px-3 text-foreground/70 hover:text-foreground",
					)}
				>
					<ArrowLeft className="size-4" />
					{ui.project.backLabel}
				</Link>

				<section className="grid gap-10 pb-16 pt-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16 lg:pt-14">
					<div>
						<h1 className="text-balance text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.96] tracking-[-0.06em] text-foreground">
							{displayName}
						</h1>
						<p className="mt-6 max-w-xl text-pretty text-[1.05rem] leading-8 tracking-[-0.01em] text-foreground/62">
							{project.description}
						</p>
						<div className="mt-7 flex flex-wrap gap-2">
							{orderProjectTags(project.tags).map((tag, index) => (
								<span
									key={tag}
									className={cn(
										"rounded-full border px-3 py-1 text-[0.85rem] font-medium tracking-[-0.01em]",
										getSkillTagTone(tag, index),
									)}
								>
									{tag}
								</span>
							))}
						</div>
						<div className="mt-9 flex flex-wrap gap-3">
							{project.github ? (
								<a
									href={project.github}
									target="_blank"
									rel="noreferrer"
									className={cn(
										buttonVariants({ variant: "outline", size: "lg" }),
										"gap-2",
									)}
								>
									<GitBranch className="size-4" />
									{ui.project.repositoryLinkLabel}
								</a>
							) : null}
							{project.site ? (
								project.internalSite ? (
									<Link
										href={href(project.site)}
										className={cn(buttonVariants({ size: "lg" }), "gap-2")}
									>
										<ExternalLink className="size-4" />
										{project.siteLabel ?? ui.project.projectLinkLabel}
									</Link>
								) : (
									<a
										href={project.site}
										target="_blank"
										rel="noreferrer"
										className={cn(buttonVariants({ size: "lg" }), "gap-2")}
									>
										<ExternalLink className="size-4" />
										{project.siteLabel ?? ui.project.projectLinkLabel}
									</a>
								)
							) : null}
						</div>
					</div>

					{project.gallery ? (
						<button
							type="button"
							onClick={(event) => void event.currentTarget.requestFullscreen()}
							aria-label={ui.project.fullscreenImage}
							className="group relative grid aspect-[3/2] grid-cols-2 overflow-hidden rounded-[24px] border border-border bg-muted/45 text-left shadow-[0_20px_60px_rgba(0,0,0,0.12)] outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary fullscreen:rounded-none fullscreen:bg-black"
						>
							{project.gallery.map((image) => (
								<Image
									key={image.src}
									src={image.src}
									alt={image.alt}
									width={768}
									height={512}
									sizes="(min-width: 1024px) 600px, 100vw"
									className="h-full w-full object-cover"
								/>
							))}
							<span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-background/88 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
								<Maximize2 className="size-4" />
							</span>
						</button>
					) : project.image ? (
						<button
							type="button"
							onClick={(event) => void event.currentTarget.requestFullscreen()}
							aria-label={ui.project.fullscreenImage}
							className="group relative aspect-[3/2] overflow-hidden rounded-[24px] border border-border bg-muted/45 text-left shadow-[0_20px_60px_rgba(0,0,0,0.12)] outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary fullscreen:rounded-none fullscreen:bg-black"
						>
							<Image
								src={project.image}
								alt={project.imageAlt ?? project.name}
								fill
								sizes="(min-width: 1024px) 600px, 100vw"
								className="object-contain"
							/>
							<span className="absolute right-4 top-4 flex size-10 items-center justify-center rounded-full bg-background/88 text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
								<Maximize2 className="size-4" />
							</span>
						</button>
					) : null}
				</section>

				{project.details ? (
					<section className="border-t border-border py-14 sm:py-20">
						<h2 className="text-balance text-[clamp(2rem,4vw,3.25rem)] font-semibold leading-[0.98] tracking-[-0.055em] text-foreground">
							{ui.project.featuresTitle}
						</h2>
						<ul className="mt-8 grid border-t border-border md:grid-cols-2">
							{project.details.features.map((feature, index) => (
								<li
									key={feature.title}
									className={cn(
										"border-b border-border px-0 py-7 md:px-8 md:py-9",
										index % 2 === 0 ? "md:pr-10" : "md:border-l md:pl-10",
									)}
								>
									<h3 className="text-[1.2rem] font-semibold leading-tight tracking-[-0.035em] text-foreground sm:text-[1.35rem]">
										{feature.title}
									</h3>
									<p className="mt-3 max-w-xl text-[1rem] leading-7 tracking-[-0.01em] text-foreground/64">
										{feature.description}
									</p>
								</li>
							))}
						</ul>

						{project.details.installation && project.details.usage ? (
							<div className="mt-12 grid gap-10 border-t border-border pt-10">
								<section>
									<h2 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.55rem]">
										{project.details.installation.title ??
											ui.project.installationTitle}
									</h2>
									<div className="mt-5">
										<CodeBlock
											code={project.details.installation.code}
											language={project.details.installation.language}
										/>
									</div>
								</section>
								<section>
									<h2 className="text-[1.35rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.55rem]">
										{project.details.usage.title ?? ui.project.usageTitle}
									</h2>
									<div className="mt-5">
										<CodeBlock
											code={project.details.usage.code}
											language={project.details.usage.language}
										/>
									</div>
								</section>
							</div>
						) : null}
					</section>
				) : null}
			</PageShell>
		</div>
	);
}
