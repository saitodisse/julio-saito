"use client";

import type { ReactNode } from "react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";
import { parseAsStringLiteral, useQueryState } from "nuqs";

import {
	LOCALE_STORAGE_KEY,
	SITE_PREFERENCES_RESET_EVENT,
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
	const [queryLocale, setQueryLocale] = useQueryState(
		"locale",
		parseAsStringLiteral(["pt", "en"]).withOptions({
			history: "replace",
			shallow: true,
		}),
	);
	const [locale, setLocaleState] = useState<Locale>(queryLocale ?? "pt");
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		const frame = window.requestAnimationFrame(() => {
			const storedLocale = readStoredLocale();
			const initialLocale = queryLocale ?? storedLocale ?? detectBrowserLocale();

			setLocaleState(initialLocale);

			if (queryLocale !== initialLocale) {
				setQueryLocale(initialLocale);
			}

			setMounted(true);
		});

		const handleReset = () => {
			const nextLocale = detectBrowserLocale();

			setLocaleState(nextLocale);
			setQueryLocale(nextLocale);
		};

		window.addEventListener(SITE_PREFERENCES_RESET_EVENT, handleReset);

		return () => {
			window.cancelAnimationFrame(frame);
			window.removeEventListener(SITE_PREFERENCES_RESET_EVENT, handleReset);
		};
	}, [queryLocale, setQueryLocale]);

	useEffect(() => {
		if (!mounted) {
			return;
		}

		document.documentElement.lang = locale === "en" ? "en" : "pt-BR";
		window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
	}, [locale, mounted]);

	const setLocale = useCallback(
		(nextLocale: Locale) => {
			setLocaleState(nextLocale);
			setQueryLocale(nextLocale);
		},
		[setQueryLocale],
	);

	const value = useMemo<LocaleContextValue>(
		() => ({
			locale,
			mounted,
			setLocale,
			content: getSiteContent(locale),
			ui: getUi(locale),
		}),
		[locale, mounted, setLocale],
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
