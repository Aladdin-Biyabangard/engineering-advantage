import { Link, Outlet } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { BrandLogo } from "@/components/brand-logo";
import { LanguageSwitcher } from "@/components/language-switcher";
import { LocalizedLink } from "@/components/localized-link";
import { useI18n } from "@/lib/i18n/context";
import { localizedPath, type AppPath } from "@/lib/i18n/routing";
import { CONTACT_EMAIL, SITE_NAME } from "@/lib/seo";
import { cn } from "@/lib/utils";

const NAV_PATHS: { path: AppPath; labelKey: "home" | "services" | "about" | "experience" | "contact" }[] = [
  { path: "/", labelKey: "home" },
  { path: "/services", labelKey: "services" },
  { path: "/about", labelKey: "about" },
  { path: "/case-studies", labelKey: "experience" },
  { path: "/contact", labelKey: "contact" },
];

export function SiteLayout() {
  const { locale, t } = useI18n();
  const [open, setOpen] = useState(false);
  const homePath = localizedPath(locale, "/");

  const nav = NAV_PATHS.map(({ path, labelKey }) => ({
    to: localizedPath(locale, path),
    label: t.nav[labelKey],
  }));

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-primary/20 bg-chat-bubble/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5">
          <Link
            to={homePath}
            className="flex items-center gap-2.5 font-semibold tracking-tight text-primary"
          >
            <BrandLogo size="md" />
            {SITE_NAME}
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                activeProps={{ className: "text-primary font-medium" }}
                className="hover:text-primary transition-colors"
              >
                {n.label}
              </Link>
            ))}
          </nav>
          <div className="hidden md:flex items-center gap-3">
            <LanguageSwitcher />
            <LocalizedLink
              to="/contact"
              className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground shadow-sm hover:bg-accent/90 transition-colors"
            >
              {t.common.bookConsultation}
            </LocalizedLink>
          </div>
          <div className="flex md:hidden items-center gap-2">
            <LanguageSwitcher />
            <button
              onClick={() => setOpen(!open)}
              className="p-2 text-primary"
              aria-label={t.common.toggleMenu}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
        <div className={cn("md:hidden border-t border-primary/15", open ? "block" : "hidden")}>
          <div className="mx-auto max-w-6xl px-6 py-4 flex flex-col gap-4 text-sm bg-chat-bubble">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-primary"
              >
                {n.label}
              </Link>
            ))}
            <LocalizedLink
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-accent-foreground"
            >
              {t.common.bookConsultation}
            </LocalizedLink>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-background">
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="mx-auto max-w-6xl px-6 py-12 grid gap-8 md:grid-cols-3 text-sm">
          <div>
            <div className="flex items-center gap-2.5 font-semibold tracking-tight text-primary">
              <BrandLogo size="md" />
              {SITE_NAME}
            </div>
            <p className="mt-3 text-muted-foreground max-w-xs leading-relaxed">
              {t.common.footerTagline}
            </p>
          </div>
          <div>
            <div className="font-medium text-foreground mb-3">{t.common.navigate}</div>
            <ul className="space-y-2 text-muted-foreground">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="hover:text-primary transition-colors">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="font-medium text-foreground mb-3">{t.common.contact}</div>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </li>
              <li>{t.common.footerAcademy}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-primary/10">
          <div className="mx-auto max-w-6xl px-6 py-6 text-xs text-muted-foreground">
            © {new Date().getFullYear()} {SITE_NAME}. {t.common.rightsReserved}
          </div>
        </div>
      </footer>
    </>
  );
}
