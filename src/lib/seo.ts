import { getDictionary } from "@/lib/i18n";
import type { Locale, SeoPageKey } from "@/lib/i18n";
import { LOCALES } from "@/lib/i18n";
import { localizedPath, type AppPath } from "@/lib/i18n/routing";
import { servicesEn } from "@/lib/services";

/** Canonical production URL — override with VITE_SITE_URL in deployment env. */
export const SITE_URL = (import.meta.env.VITE_SITE_URL as string | undefined)?.replace(/\/$/, "") ?? "https://ingress.engineering";

export const SITE_NAME = "Ingress Group";

export const CONTACT_EMAIL = "info@ingress.az";

export const DEFAULT_OG_IMAGE = `${SITE_URL}/og.png`;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export const OG_LOCALE = { en: "en_US", az: "az_AZ" } as const;

export const SEO_PAGE_PATHS: Record<SeoPageKey, AppPath> = {
  home: "/",
  services: "/services",
  about: "/about",
  experience: "/case-studies",
  contact: "/contact",
};

export function pageUrl(path: string): string {
  return path === "/" ? SITE_URL : `${SITE_URL}${path}`;
}

const DEFAULT_DESCRIPTION =
  "Senior software engineering consultancy — architecture, AI, DevOps, custom development, and security.";

export type PageSeo = {
  locale: Locale;
  /** Short page title (≤ ~40 chars); rendered as `{title} | Ingress Group`. */
  title: string;
  description?: string;
  /** Path without locale prefix (e.g. `/about`). */
  path: AppPath;
};

function hreflangLinks(basePath: AppPath) {
  return [
    ...LOCALES.map((locale) => ({
      rel: "alternate" as const,
      hrefLang: locale,
      href: pageUrl(localizedPath(locale, basePath)),
    })),
    {
      rel: "alternate" as const,
      hrefLang: "x-default",
      href: pageUrl(localizedPath("en", basePath)),
    },
  ];
}

export function pageHead({ locale, title, description = DEFAULT_DESCRIPTION, path }: PageSeo) {
  const documentTitle = `${title} | ${SITE_NAME}`;
  const canonicalPath = localizedPath(locale, path);
  const url = pageUrl(canonicalPath);
  const ogLocale = OG_LOCALE[locale];
  const ogLocaleAlternate = locale === "en" ? OG_LOCALE.az : OG_LOCALE.en;

  return {
    meta: [
      { title: documentTitle },
      { name: "description", content: description },
      { property: "og:title", content: documentTitle },
      { property: "og:description", content: description },
      { property: "og:url", content: url },
      { property: "og:image", content: DEFAULT_OG_IMAGE },
      { property: "og:image:width", content: String(OG_IMAGE_WIDTH) },
      { property: "og:image:height", content: String(OG_IMAGE_HEIGHT) },
      { property: "og:image:alt", content: `${SITE_NAME} — Software Engineering Consultancy` },
      { property: "og:site_name", content: SITE_NAME },
      { property: "og:locale", content: ogLocale },
      { property: "og:locale:alternate", content: ogLocaleAlternate },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: documentTitle },
      { name: "twitter:description", content: description },
      { name: "twitter:image", content: DEFAULT_OG_IMAGE },
      { name: "twitter:image:alt", content: `${SITE_NAME} — Software Engineering Consultancy` },
    ],
    links: [{ rel: "canonical", href: url }, ...hreflangLinks(path)],
  };
}

export function createPageHead(page: SeoPageKey, locale: Locale) {
  const seo = getDictionary(locale).seo[page];
  return pageHead({
    locale,
    title: seo.title,
    description: seo.description,
    path: SEO_PAGE_PATHS[page],
  });
}

const googleSiteVerification = import.meta.env.VITE_GOOGLE_SITE_VERIFICATION as string | undefined;

export function rootHeadExtras() {
  const meta: Array<Record<string, string>> = [];

  if (googleSiteVerification) {
    meta.push({ name: "google-site-verification", content: googleSiteVerification });
  }

  return { meta };
}

export function businessStructuredDataScript() {
  const organizationId = `${SITE_URL}/#organization`;

  const graph = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": organizationId,
        name: SITE_NAME,
        url: SITE_URL,
        email: CONTACT_EMAIL,
        description: DEFAULT_DESCRIPTION,
        areaServed: {
          "@type": "Place",
          name: "Worldwide",
        },
        knowsAbout: [
          "Software architecture",
          "Artificial intelligence consulting",
          "DevOps and cloud infrastructure",
          "Custom software development",
          "Application security and penetration testing",
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Engineering services",
          itemListElement: servicesEn.map((service, index) => ({
            "@type": "Offer",
            position: index + 1,
            itemOffered: {
              "@type": "Service",
              name: service.title,
              description: service.summary,
              provider: { "@id": organizationId },
            },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        inLanguage: ["en", "az"],
        publisher: { "@id": organizationId },
      },
    ],
  };

  return {
    type: "application/ld+json",
    children: JSON.stringify(graph),
  };
}
