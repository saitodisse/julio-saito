"use client";

import { useLocale } from "@/components/locale-provider";
import { useSitePreferences } from "@/components/site-preferences-provider";
import { saveLocalePreference, type Locale } from "@/lib/site-preferences";

export function SiteFooter() {
  const { locale, setLocale, ui } = useLocale();
  const { resetPreferences } = useSitePreferences();

  function handleLocaleChange(nextLocale: Locale) {
    saveLocalePreference(nextLocale);
    setLocale(nextLocale);
  }

  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-center gap-4 px-4 py-6 sm:px-6 lg:px-12">
        <a
          href="https://github.com/saitodisse/julio-saito"
          target="_blank"
          rel="noreferrer"
          className="text-[0.72rem] font-medium tracking-[-0.01em] text-foreground/35 underline-offset-2 transition-colors hover:text-foreground/55 hover:underline"
        >
          {ui.footer.projectRepository}
        </a>

        <button
          type="button"
          onClick={resetPreferences}
          className="text-[0.72rem] font-medium tracking-[-0.01em] text-foreground/35 underline-offset-2 transition-colors hover:text-foreground/55 hover:underline"
          aria-label={ui.footer.resetPreferencesLabel}
        >
          {ui.footer.resetPreferences}
        </button>

        <div
          className="flex items-center rounded-full border border-border/60 p-0.5"
          aria-label={ui.footer.languageSwitchLabel}
          role="group"
        >
          <LocaleButton
            active={locale === "pt"}
            ariaLabel={ui.footer.switchToPortuguese}
            label="PT"
            onClick={() => handleLocaleChange("pt")}
          />
          <LocaleButton
            active={locale === "en"}
            ariaLabel={ui.footer.switchToEnglish}
            label="EN"
            onClick={() => handleLocaleChange("en")}
          />
        </div>
      </div>
    </footer>
  );
}

function LocaleButton({
  active,
  ariaLabel,
  label,
  onClick,
}: {
  active: boolean;
  ariaLabel: string;
  label: string;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-label={ariaLabel}
      aria-pressed={active}
      onClick={onClick}
      className="min-w-8 rounded-full px-2 py-1 text-[0.68rem] font-semibold tracking-[0.04em] text-foreground/40 transition-colors hover:text-foreground/70 aria-pressed:bg-foreground aria-pressed:text-background"
    >
      {label}
    </button>
  );
}
