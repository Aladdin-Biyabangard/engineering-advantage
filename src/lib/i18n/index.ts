import { az } from "./locales/az";
import { en } from "./locales/en";
import type { Locale, SeoPageKey, ServiceSlug, TranslationDict } from "./types";
import { DEFAULT_LOCALE, LOCALE_STORAGE_KEY } from "./types";

export type { Locale, SeoPageKey, ServiceSlug, TranslationDict };
export { DEFAULT_LOCALE, LOCALES, LOCALE_STORAGE_KEY } from "./types";

const dictionaries: Record<Locale, TranslationDict> = { en, az };

export function getDictionary(locale: Locale): TranslationDict {
  return dictionaries[locale];
}

export function isLocale(value: string | null | undefined): value is Locale {
  return value === "en" || value === "az";
}

export function detectBrowserLocale(): Locale {
  if (typeof navigator === "undefined") return DEFAULT_LOCALE;
  const lang = navigator.language.toLowerCase();
  if (lang.startsWith("az")) return "az";
  return DEFAULT_LOCALE;
}

export function readStoredLocale(): Locale | null {
  if (typeof localStorage === "undefined") return null;
  const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
  return isLocale(stored) ? stored : null;
}
