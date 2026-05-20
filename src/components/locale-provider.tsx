"use client";

import type { ReactNode } from "react";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

import {
  LOCALE_STORAGE_KEY,
  detectBrowserLocale,
  type Locale,
  readStoredLocale,
} from "@/lib/site-preferences";
import { getSiteContent, type SiteContent } from "@/resources/get-site-content";
import { getUi, type UiCopy } from "@/resources/i18n/ui";

type LocaleContextValue = {
  locale: Locale;
  mounted: boolean;
  setLocale: (locale: Locale) => void;
  content: SiteContent;
  ui: UiCopy;
};

const LocaleContext = createContext<LocaleContextValue | undefined>(undefined);

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("pt");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      const storedLocale = readStoredLocale();

      setLocaleState(storedLocale ?? detectBrowserLocale());

      setMounted(true);
    });

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!mounted) {
      return;
    }

    document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  }, [locale, mounted]);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      mounted,
      setLocale: setLocaleState,
      content: getSiteContent(locale),
      ui: getUi(locale),
    }),
    [locale, mounted],
  );

  return (
    <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>
  );
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider");
  }

  return context;
}
