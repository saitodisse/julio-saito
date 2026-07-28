"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
	ExternalLink,
	GitBranch,
	Handshake,
	Leaf,
	MousePointerClick,
	Music4,
	Terminal,
} from "lucide-react";

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
	viewAllProjectsLabel: string;
	imageActionLabel: string;
	expandImageLabel: string;
};

export function ProjectCard({
	project,
	index,
	viewSiteLabel,
	viewAllProjectsLabel,
	imageActionLabel,
	expandImageLabel,
}: ProjectCardProps) {
	const [galleryIndex, setGalleryIndex] = useState(0);
	const href = useSiteHref();
	const Icon = projectIcons[project.icon];
	const siteHref =
		project.site && (project.internalSite ? href(project.site) : project.site);
	const detailHref = project.detailPath && href(project.detailPath);
	const imageHref = detailHref ?? siteHref;
	const galleryImage = project.gallery?.[galleryIndex];
	const isCollection = Boolean(project.gallery?.length);

	useEffect(() => {
		const gallery = project.gallery;

		if (gallery?.length) {
			const timeout = window.setTimeout(() => {
				setGalleryIndex(Math.floor(Math.random() * gallery.length));
			}, 0);

			return () => window.clearTimeout(timeout);
		}
	}, [project.gallery]);

	const imageClassName =
		"group relative block aspect-[3/2] w-full shrink-0 overflow-hidden bg-card text-left outline-offset-[-4px] focus-visible:outline-2 focus-visible:outline-primary";
	const imageHint = (
		<span className="absolute inset-x-3 bottom-3 flex items-center justify-center gap-2 rounded-full bg-background/88 px-3 py-2 text-center text-[0.78rem] font-medium text-foreground opacity-0 shadow-sm backdrop-blur-sm transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
			<MousePointerClick className="size-3.5" />
			{imageActionLabel}
		</span>
	);

	return (
		<article className="flex min-h-[320px] flex-col overflow-hidden rounded-b-[24px] rounded-t-none border border-border bg-card/90 shadow-[0_1px_0_rgba(0,0,0,0.02)] backdrop-blur-sm">
			{galleryImage && detailHref ? (
				<Link
					href={detailHref}
					aria-label={`${expandImageLabel}: ${project.name}`}
					className={`${imageClassName} cursor-pointer`}
				>
					<Image
						src={galleryImage.src}
						alt={galleryImage.alt}
						fill
						sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
						className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
					/>
					{imageHint}
				</Link>
			) : project.image && imageHref ? (
				project.internalSite || detailHref ? (
					<Link
						href={imageHref}
						aria-label={`${expandImageLabel}: ${project.name}`}
						className={`${imageClassName} cursor-pointer`}
					>
						<Image
							src={project.image}
							alt={project.imageAlt ?? project.name}
							fill
							sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
							className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
						/>
						{imageHint}
					</Link>
				) : (
					<a
						href={imageHref}
						target="_blank"
						rel="noreferrer"
						aria-label={`${expandImageLabel}: ${project.name}`}
						className={`${imageClassName} cursor-pointer`}
					>
						<Image
							src={project.image}
							alt={project.imageAlt ?? project.name}
							fill
							sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
							className="object-cover transition-transform duration-300 group-hover:scale-[1.025]"
						/>
						{imageHint}
					</a>
				)
			) : project.image ? (
				<div className="relative aspect-[3/2] w-full shrink-0 overflow-hidden bg-card">
					<Image
						src={project.image}
						alt={project.imageAlt ?? project.name}
						fill
						sizes="(min-width: 1280px) 320px, (min-width: 640px) 50vw, 100vw"
						className="object-cover"
					/>
				</div>
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
					{isCollection && detailHref ? (
						<Link href={detailHref} className={projectLinkClassName}>
							<ExternalLink className="size-4" />
							{viewAllProjectsLabel}
						</Link>
					) : siteHref ? (
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
		</article>
	);
}
