"use client";

import Link from "next/link";
import { Download } from "lucide-react";

import { useLocale } from "@/components/locale-provider";
import { buttonVariants } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { useSiteHref } from "@/lib/site-routing";
import { cn } from "@/lib/utils";

type SiteHeaderProps = {
  activePath: "/" | "/work" | "/curriculo";
};

export function SiteHeader({ activePath }: SiteHeaderProps) {
  const { content, ui } = useLocale();
  const href = useSiteHref();

  const navItems = [
    { label: ui.nav.home, path: "/" as const },
    { label: ui.nav.work, path: "/work" as const },
    { label: ui.nav.resume, path: "/curriculo" as const },
  ];

  return (
    <header className="sticky top-0 z-20 border-b border-border/70 bg-background/72 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-[1280px] flex-col gap-3 px-4 py-3 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between gap-3">
          <Link href={href("/")} className="flex items-center">
            <span className="text-[0.98rem] font-medium tracking-[-0.03em] text-foreground sm:text-[1.05rem]">
              {content.publicName}
            </span>
          </Link>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Link
              href="/curriculo.pdf"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "h-10 rounded-full border-border bg-card px-4 text-[0.9rem] font-medium text-foreground/90 shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-px hover:bg-muted sm:h-11 sm:px-5 sm:text-[0.95rem]",
              )}
            >
              <Download className="mr-2 size-4" />
              {ui.nav.downloadPdf}
            </Link>
          </div>
        </div>

        <nav
          aria-label="Main"
          className="flex items-center gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {navItems.map((item) => {
            const isActive = activePath === item.path;

            return (
              <Link
                key={item.path}
                href={href(item.path)}
                className={cn(
                  "shrink-0 rounded-full border px-4 py-2 text-sm font-medium tracking-[-0.01em] transition-colors",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground/72 hover:border-primary/40 hover:text-foreground",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </header>
  );
}
