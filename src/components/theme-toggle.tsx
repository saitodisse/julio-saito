"use client";

import { Moon, SunMedium } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "@/components/theme-provider";

export function ThemeToggle() {
  const { mounted, resolvedTheme, toggleTheme } = useTheme();
  const showDarkAction = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      aria-label="Alternar tema"
      className={cn(
        buttonVariants({ variant: "outline", size: "icon-sm" }),
        "rounded-full border-border bg-card text-foreground shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-transform hover:-translate-y-px"
      )}
      onClick={toggleTheme}
    >
      {showDarkAction ? (
        <SunMedium className="size-4" />
      ) : (
        <Moon className="size-4" />
      )}
      <span className="sr-only">Alternar tema</span>
    </button>
  );
}
