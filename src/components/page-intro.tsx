import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowLeft } from "lucide-react";

import { cn } from "@/lib/utils";

type PageIntroProps = {
	backHref: string;
	backLabel: string;
	eyebrow: string;
	title: string;
	summary: string;
	icon: LucideIcon;
	summaryClassName?: string;
};

export function PageIntro({
	backHref,
	backLabel,
	eyebrow,
	title,
	summary,
	icon: Icon,
	summaryClassName,
}: PageIntroProps) {
	return (
		<div className="max-w-5xl">
			<Link
				href={backHref}
				className="inline-flex items-center gap-2 text-sm font-medium text-foreground/65 transition-colors hover:text-foreground"
			>
				<ArrowLeft className="size-4" />
				{backLabel}
			</Link>

			<div className="mt-8">
				<div className="flex items-center gap-3">
					<span className="flex size-9 items-center justify-center rounded-xl border border-primary/35 bg-primary text-primary-foreground shadow-[0_1px_0_rgba(0,0,0,0.03)]">
						<Icon className="size-4" />
					</span>
					<p className="text-[0.78rem] font-semibold uppercase tracking-[0.2em] text-foreground/48 sm:text-sm">
						{eyebrow}
					</p>
				</div>
				<h1 className="mt-4 max-w-5xl text-balance text-[clamp(2.7rem,8vw,5.25rem)] font-semibold leading-[0.94] tracking-[-0.055em] text-foreground">
					{title}
				</h1>
			</div>

			<p
				className={cn(
					"mt-7 max-w-3xl text-[1rem] leading-7 tracking-[-0.01em] text-foreground/68 sm:text-[1.08rem] sm:leading-8",
					summaryClassName,
				)}
			>
				{summary}
			</p>
		</div>
	);
}
