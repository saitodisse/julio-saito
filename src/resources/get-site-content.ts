import type { Locale } from "@/lib/site-preferences";
import * as en from "@/resources/site-content-en";
import * as pt from "@/resources/site-content";

export type SiteContent = typeof pt;

export function getSiteContent(locale: Locale): SiteContent {
  return (locale === "en" ? en : pt) as SiteContent;
}
