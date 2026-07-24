"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	ExternalLink,
	GitBranch,
	Handshake,
	Leaf,
	Music4,
	Terminal,
} from "lucide-react";

import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogTitle,
} from "@/components/ui/dialog";
import { useSiteHref } from "@/lib/site-routing";
import { getSkillTagTone, orderProjectTags } from "@/lib/tag-tones";
import { cn } from "@/lib/utils";
import type { FeaturedProject } from "@/resources/site-content";

const projectIcons = {
	leaf: Leaf,
	music: Music4,
	handshake: Handshake,
	terminal: Terminal,
} as const;

const projectLinkClassName =
	"inline-flex items-center gap-2 text-[0.96rem] font-medium tracking-[-0.01em] text-foreground/84 transition-colors hover:text-foreground";

type ProjectCardProps = {
	project: FeaturedProject;
	index: number;
	viewSiteLabel: string;
	expandImageLabel: string;
	closePreviewLabel: string;
};

export function ProjectCard({
	project,
	index,
	viewSiteLabel,
	expandImageLabel,
	closePreviewLabel,
}: ProjectCardProps) {
	const [isPreviewOpen, setIsPreviewOpen] = useState(false);
	const href = useSiteHref();
	const Icon = projectIcons[project.icon];
	const siteHref =
		project.site && (project.internalSite ? href(project.site) : project.site);
	const detailHref = project.detailPath && href(project.detailPath);

	return (
		<article className="flex min-h-[320px] flex-col overflow-hidden rounded-b-[24px] rounded-t-none border border-border bg-card/90 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm">
			{project.gallery ? (
				<button
					type="button"
					onClick={() => setIsPreviewOpen(true)}
					aria-label={`${expandImageLabel}: ${project.name}`}
					className="group grid aspect-[3/2] w-full grid-cols-2 overflow-hidden bg-muted/45 text-left outline-offset-[-4px] focus-visible:outline-2 focus-visible:outline-primary"
				>
					{project.gallery.map((image) => (
						<Image
							key={image.src}
							src={image.src}
							alt={image.alt}
							width={768}
							height={512}
							sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
							className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.025]"
						/>
					))}
				</button>
			) : project.image ? (
				<button
					type="button"
					onClick={() => setIsPreviewOpen(true)}
					aria-label={`${expandImageLabel}: ${project.name}`}
					className="group relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-card text-left outline-offset-[-4px] focus-visible:outline-2 focus-visible:outline-primary"
				>
					<Image
						src={project.image}
						alt={project.imageAlt ?? project.name}
						fill
						sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
						className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
					/>
				</button>
			) : (
				<div className="flex h-28 w-full shrink-0 items-center justify-center bg-muted text-foreground">
					<Icon className="size-8" />
				</div>
			)}

			<div className="flex flex-1 flex-col p-5 sm:p-6">
				<h3 className="text-[1.25rem] font-semibold tracking-[-0.04em] text-foreground sm:text-[1.35rem]">
					{project.name}
				</h3>
				<p className="mt-3 text-[0.98rem] leading-[1.65] tracking-[-0.01em] text-foreground/64">
					{project.description}
				</p>
				<div className="mt-6 flex flex-wrap gap-2">
					{orderProjectTags(project.tags).map((tag, tagIndex) => (
						<span
							key={tag}
							className={cn(
								"rounded-full border px-3 py-1 text-[0.85rem] font-medium tracking-[-0.01em]",
								getSkillTagTone(tag, index + tagIndex),
							)}
						>
							{tag}
						</span>
					))}
				</div>
				<div className="mt-auto flex items-center justify-between gap-3 pt-7">
					{project.github ? (
						<a
							href={project.github}
							target="_blank"
							rel="noreferrer"
							className={projectLinkClassName}
						>
							<GitBranch className="size-4" />
							GitHub
						</a>
					) : (
						<span aria-hidden="true" />
					)}
					{siteHref ? (
						project.internalSite ? (
							<Link href={siteHref} className={projectLinkClassName}>
								<ExternalLink className="size-4" />
								{project.siteLabel ?? viewSiteLabel}
							</Link>
						) : (
							<a
								href={siteHref}
								target="_blank"
								rel="noreferrer"
								className={projectLinkClassName}
							>
								<ExternalLink className="size-4" />
								{project.siteLabel ?? viewSiteLabel}
							</a>
						)
					) : null}
				</div>
			</div>

			<Dialog open={isPreviewOpen} onOpenChange={setIsPreviewOpen}>
				<DialogContent
					showCloseButton={false}
					className="flex h-[calc(100dvh-2rem)] w-[calc(100vw-2rem)] max-w-[900px] flex-col gap-0 overflow-hidden rounded-[24px] border-border bg-card p-0 shadow-2xl sm:max-w-[900px]"
				>
					<div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
						<div className="min-w-0">
							<DialogTitle className="text-[3.3rem] tracking-[-0.03em]">
								{project.name}
							</DialogTitle>
							<p className="mt-3 max-w-3xl text-[1.35rem] leading-[1.2] text-foreground/62">
								{project.description}
							</p>
						</div>
						<DialogClose className="rounded-full border border-border px-3 py-1.5 text-[0.85rem] font-medium text-foreground/72 transition-colors hover:bg-muted hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary">
							{closePreviewLabel}
						</DialogClose>
					</div>
					{project.gallery ? (
						<div className="min-h-0 flex-1 p-4 sm:p-6">
							{detailHref ? (
								<Link
									href={detailHref}
									aria-label={`${project.name}: ${expandImageLabel}`}
									className="grid h-full grid-cols-2 grid-rows-2 overflow-hidden rounded-xl bg-muted/45 outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary"
								>
									{project.gallery.map((image) => (
										<Image
											key={image.src}
											src={image.src}
											alt={image.alt}
											width={1536}
											height={1024}
											sizes="50vw"
											className="h-full w-full object-contain"
										/>
									))}
								</Link>
							) : (
								<div className="grid h-full grid-cols-2 grid-rows-2 overflow-hidden rounded-xl bg-muted/45">
									{project.gallery.map((image) => (
										<Image
											key={image.src}
											src={image.src}
											alt={image.alt}
											width={1536}
											height={1024}
											sizes="50vw"
											className="h-full w-full object-contain"
										/>
									))}
								</div>
							)}
						</div>
					) : project.image ? (
						<div className="min-h-0 flex-1 p-4 sm:p-6">
							{detailHref ? (
								<Link
									href={detailHref}
									aria-label={`${project.name}: ${expandImageLabel}`}
									className="relative block h-full overflow-hidden rounded-xl bg-muted/45 outline-offset-4 focus-visible:outline-2 focus-visible:outline-primary"
								>
									<Image
										src={project.image}
										alt={project.imageAlt ?? project.name}
										fill
										sizes="900px"
										className="object-contain"
									/>
								</Link>
							) : (
								<div className="relative h-full overflow-hidden rounded-xl bg-muted/45">
									<Image
										src={project.image}
										alt={project.imageAlt ?? project.name}
										fill
										sizes="900px"
										className="object-contain"
									/>
								</div>
							)}
						</div>
					) : null}
				</DialogContent>
			</Dialog>
		</article>
	);
}
