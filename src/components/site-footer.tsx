"use client";

import { useLocale } from "@/components/locale-provider";
import { useSitePreferences } from "@/components/site-preferences-provider";

export function SiteFooter() {
  const { ui } = useLocale();
  const { resetPreferences } = useSitePreferences();

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex w-full max-w-[1280px] justify-center px-4 py-6 sm:px-6 lg:px-12">
        <button
          type="button"
          onClick={resetPreferences}
          className="text-[0.72rem] font-medium tracking-[-0.01em] text-foreground/35 underline-offset-2 transition-colors hover:text-foreground/55 hover:underline"
          aria-label={ui.footer.resetPreferencesLabel}
        >
          {ui.footer.resetPreferences}
        </button>
      </div>
    </footer>
  );
}
