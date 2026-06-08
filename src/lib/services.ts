import { en } from "@/lib/i18n/locales/en";
import type { TranslationDict } from "@/lib/i18n/types";

export type ServiceIcon =
  | "Boxes"
  | "Cpu"
  | "ServerCog"
  | "Code2"
  | "ShieldCheck"
  | "Target"
  | "FileSearch"
  | "Cloud"
  | "GitBranch";

export type ServiceSlug =
  | "architecture"
  | "ai"
  | "devops"
  | "custom-software"
  | "security"
  | "penetration-testing"
  | "secure-code-review"
  | "cloud-security"
  | "devsecops";

export type Service = {
  slug: ServiceSlug;
  title: string;
  icon: ServiceIcon;
  summary: string;
  details: string[];
};

export const serviceCatalog: { slug: ServiceSlug; icon: ServiceIcon }[] = [
  { slug: "architecture", icon: "Boxes" },
  { slug: "ai", icon: "Cpu" },
  { slug: "devops", icon: "ServerCog" },
  { slug: "custom-software", icon: "Code2" },
  { slug: "security", icon: "ShieldCheck" },
  { slug: "penetration-testing", icon: "Target" },
  { slug: "secure-code-review", icon: "FileSearch" },
  { slug: "cloud-security", icon: "Cloud" },
  { slug: "devsecops", icon: "GitBranch" },
];

export function getServices(t: TranslationDict): Service[] {
  return serviceCatalog.map(({ slug, icon }) => {
    const copy = t.services[slug];
    return { slug, icon, title: copy.title, summary: copy.summary, details: copy.details };
  });
}

/** English defaults for SSR structured data and static head tags. */
export const servicesEn = getServices(en);
