import type { Locale } from "./types";

/** Internal app paths without locale prefix. */
export type AppPath = "/" | "/services" | "/about" | "/case-studies" | "/contact";

export const APP_PATHS: AppPath[] = [
  "/",
  "/services",
  "/about",
  "/case-studies",
  "/contact",
];

export function localeFromPathname(pathname: string): Locale {
  return pathname === "/az" || pathname.startsWith("/az/") ? "az" : "en";
}

export function stripLocalePrefix(pathname: string): AppPath {
  if (pathname === "/az") return "/";
  if (pathname.startsWith("/az/")) {
    const stripped = pathname.slice(3) as AppPath;
    return APP_PATHS.includes(stripped) ? stripped : "/";
  }
  return APP_PATHS.includes(pathname as AppPath) ? (pathname as AppPath) : "/";
}

export function localizedPath(locale: Locale, path: AppPath): string {
  if (locale === "en") return path;
  return path === "/" ? "/az" : `/az${path}`;
}
