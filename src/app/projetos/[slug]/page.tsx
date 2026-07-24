"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ExternalLink, GitBranch } from "lucide-react";
import { useParams } from "next/navigation";

import { useLocale } from "@/components/locale-provider";
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

	return (
		<div className="min-h-screen bg-background text-foreground">
			<SiteHeader activePath={`/projetos/${slug}`} />
			<PageShell className="pt-8 sm:pt-10 lg:pt-12">
				<Link
					href={href("/#projects")}
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
							{project.name}
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
						<div className="grid aspect-[3/2] grid-cols-2 overflow-hidden rounded-[24px] border border-border bg-muted/45 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
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
						</div>
					) : project.image ? (
						<div className="relative aspect-[3/2] overflow-hidden rounded-[24px] border border-border bg-muted/45 shadow-[0_20px_60px_rgba(0,0,0,0.12)]">
							<Image
								src={project.image}
								alt={project.imageAlt ?? project.name}
								fill
								sizes="(min-width: 1024px) 600px, 100vw"
								className="object-contain"
							/>
						</div>
					) : null}
				</section>
			</PageShell>
		</div>
	);
}
