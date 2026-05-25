import { useCallback } from "react";

import { useLocale } from "@/components/locale-provider";
import { useTheme } from "@/components/theme-provider";
import type { Locale } from "@/lib/site-preferences";

function appendSiteQuery(
	pathname: string,
	locale: Locale,
	theme: "light" | "dark",
) {
	const [pathWithQuery, hash = ""] = pathname.split("#", 2);
	const [basePath, existingQuery = ""] = pathWithQuery.split("?", 2);
	const query = new URLSearchParams(existingQuery);

	query.set("locale", locale);
	query.set("theme", theme);

	const search = query.toString();

	return `${basePath}${search ? `?${search}` : ""}${hash ? `#${hash}` : ""}`;
}

export function useSiteHref() {
	const { locale } = useLocale();
	const { mounted, resolvedTheme } = useTheme();
	const theme = mounted ? resolvedTheme : "light";

	return useCallback(
		(pathname: string) => appendSiteQuery(pathname, locale, theme),
		[locale, theme],
	);
}
