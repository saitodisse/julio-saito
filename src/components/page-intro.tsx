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

      <div className="mt-7 flex flex-col gap-4 sm:flex-row sm:items-center">
        <span className="flex size-12 items-center justify-center rounded-2xl border border-border bg-primary text-primary-foreground shadow-[0_1px_0_rgba(0,0,0,0.03)] sm:size-14">
          <Icon className="size-5 sm:size-6" />
        </span>
        <div>
          <p className="text-[0.78rem] font-medium uppercase tracking-[0.2em] text-foreground/45 sm:text-sm">
            {eyebrow}
          </p>
          <h1 className="mt-2 text-[clamp(2.2rem,9vw,4.5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-foreground">
            {title}
          </h1>
        </div>
      </div>

      <p
        className={cn(
          "mt-6 max-w-3xl text-[1rem] leading-7 tracking-[-0.01em] text-foreground/62 sm:text-[1.08rem] sm:leading-8",
          summaryClassName,
        )}
      >
        {summary}
      </p>
    </div>
  );
}
