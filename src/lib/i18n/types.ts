export type Locale = "en" | "az";

export const LOCALES: Locale[] = ["en", "az"];
export const DEFAULT_LOCALE: Locale = "en";
export const LOCALE_STORAGE_KEY = "ingress-locale";

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

export type SeoPageKey = "home" | "services" | "about" | "experience" | "contact";

export type TranslationDict = {
  locale: Locale;
  lang: {
    switchTo: string;
    en: string;
    az: string;
  };
  nav: {
    home: string;
    services: string;
    about: string;
    experience: string;
    contact: string;
  };
  common: {
    bookConsultation: string;
    viewServices: string;
    allServices: string;
    toggleMenu: string;
    navigate: string;
    contact: string;
    rightsReserved: string;
    goHome: string;
    tryAgain: string;
    footerTagline: string;
    footerAcademy: string;
  };
  notFound: {
    title: string;
    body: string;
  };
  error: {
    title: string;
    body: string;
  };
  seo: Record<SeoPageKey, { title: string; description: string }>;
  home: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    servicesEyebrow: string;
    servicesTitle: string;
    whyEyebrow: string;
    whyTitle: string;
    whyBody: string;
    whyItems: string[];
    ctaTitle: string;
    ctaBody: string;
  };
  servicesPage: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    ctaTitle: string;
  };
  about: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    intro: string;
    backgroundEyebrow: string;
    backgroundTitle: string;
    backgroundP1: string;
    backgroundP1Academy: string;
    backgroundP1Rest: string;
    backgroundP2: string;
    backgroundP2Apple: string;
    backgroundP2Rest: string;
    backgroundP3: string;
    howEyebrow: string;
    howTitle: string;
    principles: { title: string; body: string }[];
    ctaTitle: string;
  };
  experience: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    subtitle: string;
    items: { company: string; role: string; body: string }[];
    ctaTitle: string;
  };
  contact: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    intro: string;
    servicesNote: string;
    thanksTitle: string;
    thanksBody: string;
    form: {
      name: string;
      company: string;
      email: string;
      role: string;
      interest: string;
      message: string;
      placeholder: string;
      send: string;
      interests: {
        architecture: string;
        ai: string;
        devops: string;
        custom: string;
        security: string;
        penetrationTesting: string;
        secureCodeReview: string;
        cloudSecurity: string;
        devsecops: string;
        other: string;
      };
    };
  };
  services: Record<
    ServiceSlug,
    { title: string; summary: string; details: string[] }
  >;
};
