export type Locale = "pt" | "en";
export type ThemeMode = "light" | "dark" | "system";

export const THEME_STORAGE_KEY = "theme";
export const LOCALE_STORAGE_KEY = "locale";
export const PREFERENCES_CONFIGURED_KEY = "site-preferences-configured";
export const SITE_PREFERENCES_RESET_EVENT = "site-preferences-reset";

export function readStoredTheme(): ThemeMode | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(THEME_STORAGE_KEY);

  if (value === "light" || value === "dark" || value === "system") {
    return value;
  }

  return null;
}

export function readStoredLocale(): Locale | null {
  if (typeof window === "undefined") {
    return null;
  }

  const value = window.localStorage.getItem(LOCALE_STORAGE_KEY);

  if (value === "pt" || value === "en") {
    return value;
  }

  return null;
}

export function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") {
    return "pt";
  }

  const browserLocale =
    window.navigator.languages?.[0] ?? window.navigator.language;

  return browserLocale?.toLowerCase() === "pt-br" ? "pt" : "en";
}

export function hasConfiguredPreferences(): boolean {
  if (typeof window === "undefined") {
    return false;
  }

  return window.localStorage.getItem(PREFERENCES_CONFIGURED_KEY) === "true";
}

export function saveSitePreferences({
  theme,
  locale,
}: {
  theme: ThemeMode;
  locale: Locale;
}) {
  window.localStorage.setItem(THEME_STORAGE_KEY, theme);
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  window.localStorage.setItem(PREFERENCES_CONFIGURED_KEY, "true");
}

export function saveLocalePreference(locale: Locale) {
  window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  window.localStorage.setItem(PREFERENCES_CONFIGURED_KEY, "true");
}

export function clearSitePreferences() {
  window.localStorage.removeItem(THEME_STORAGE_KEY);
  window.localStorage.removeItem(LOCALE_STORAGE_KEY);
  window.localStorage.removeItem(PREFERENCES_CONFIGURED_KEY);
}
