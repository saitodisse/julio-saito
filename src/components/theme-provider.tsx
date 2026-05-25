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
	readStoredTheme,
	SITE_PREFERENCES_RESET_EVENT,
	THEME_STORAGE_KEY,
	type ThemeMode,
} from "@/lib/site-preferences";

type ResolvedTheme = "light" | "dark";

type ThemeContextValue = {
  theme: ThemeMode;
  resolvedTheme: ResolvedTheme;
  mounted: boolean;
  setTheme: (theme: ThemeMode) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextValue | undefined>(undefined);

function resolveTheme(
  theme: ThemeMode,
  systemTheme: ResolvedTheme,
): ResolvedTheme {
  return theme === "system" ? systemTheme : theme;
}

export function ThemeProvider({ children }: { children: ReactNode }) {
	const [queryTheme, setQueryTheme] = useQueryState(
		"theme",
		parseAsStringLiteral(["light", "dark"]).withOptions({
			history: "replace",
			shallow: true,
		}),
	);
	const [theme, setThemeState] = useState<ThemeMode>(queryTheme ?? "system");
	const [systemTheme, setSystemTheme] = useState<ResolvedTheme>("light");
	const [mounted, setMounted] = useState(false);
	const resolvedTheme = useMemo(
		() => resolveTheme(theme, systemTheme),
		[systemTheme, theme],
	);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
		const frame = window.requestAnimationFrame(() => {
			const params = new URLSearchParams(window.location.search);
			const urlTheme = params.get("theme");
			const storedTheme = readStoredTheme();
			const initialSystemTheme = mediaQuery.matches ? "dark" : "light";
			const initialTheme: ThemeMode =
				(urlTheme === "light" || urlTheme === "dark" ? urlTheme : null) ??
				storedTheme ??
				theme;

			setSystemTheme(initialSystemTheme);
			setThemeState(initialTheme);

			const initialResolvedTheme =
				initialTheme === "system" ? initialSystemTheme : initialTheme;

			if (queryTheme !== initialResolvedTheme) {
				setQueryTheme(initialResolvedTheme);
			}

			setMounted(true);
		});

		const handleChange = (event: MediaQueryListEvent) => {
			setSystemTheme(event.matches ? "dark" : "light");
		};

		const handleReset = () => {
			const nextSystemTheme = mediaQuery.matches ? "dark" : "light";

			setSystemTheme(nextSystemTheme);
			setThemeState("system");
		};

		mediaQuery.addEventListener("change", handleChange);
		window.addEventListener(SITE_PREFERENCES_RESET_EVENT, handleReset);

		return () => {
			window.cancelAnimationFrame(frame);
			mediaQuery.removeEventListener("change", handleChange);
			window.removeEventListener(SITE_PREFERENCES_RESET_EVENT, handleReset);
		};
	}, [queryTheme, setQueryTheme, theme]);

	useEffect(() => {
		const root = document.documentElement;

		root.classList.toggle("dark", resolvedTheme === "dark");
		root.style.colorScheme = resolvedTheme;

		if (!mounted) {
			return;
		}

		window.localStorage.setItem(THEME_STORAGE_KEY, theme);
		if (queryTheme !== resolvedTheme) {
			setQueryTheme(resolvedTheme);
		}
	}, [mounted, queryTheme, resolvedTheme, setQueryTheme, theme]);

	const setTheme = useCallback(
		(nextTheme: ThemeMode) => {
			setThemeState(nextTheme);
			if (nextTheme !== "system") {
				setQueryTheme(nextTheme);
			}
		},
		[setQueryTheme],
	);

	const value = useMemo<ThemeContextValue>(
		() => ({
			theme,
			resolvedTheme,
			mounted,
			setTheme,
			toggleTheme: () => {
				setThemeState(resolvedTheme === "dark" ? "light" : "dark");
			},
		}),
		[mounted, resolvedTheme, setTheme, theme],
	);

	return (
		<ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
	);
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useTheme must be used within ThemeProvider");
  }

  return context;
}
