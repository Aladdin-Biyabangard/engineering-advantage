import {
  ArrowRight,
  Boxes,
  Cpu,
  ServerCog,
  Code2,
  ShieldCheck,
  Target,
  FileSearch,
  Cloud,
  GitBranch,
  Check,
} from "lucide-react";
import { LocalizedLink } from "@/components/localized-link";
import { useI18n } from "@/lib/i18n/context";
import { getServices } from "@/lib/services";

const iconMap = {
  Boxes,
  Cpu,
  ServerCog,
  Code2,
  ShieldCheck,
  Target,
  FileSearch,
  Cloud,
  GitBranch,
};

export function HomePage() {
  const { t } = useI18n();
  const services = getServices(t);

  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="eyebrow mb-6">{t.home.eyebrow}</p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
            {t.home.title}{" "}
            <span className="text-primary">{t.home.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t.home.subtitle}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <LocalizedLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-md hover:bg-accent/90 transition-colors"
            >
              {t.common.bookConsultation} <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
            <LocalizedLink
              to="/services"
              className="btn-outline-brand inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium"
            >
              {t.common.viewServices}
            </LocalizedLink>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="eyebrow mb-3">{t.home.servicesEyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                {t.home.servicesTitle}
              </h2>
            </div>
            <LocalizedLink
              to="/services"
              className="hidden md:inline-flex items-center gap-1 text-sm font-medium text-primary hover:text-accent transition-colors"
            >
              {t.common.allServices} <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => {
              const Icon = iconMap[s.icon];
              return (
                <div key={s.slug} className="brand-card rounded-md p-8">
                  <div className="icon-badge">
                    <Icon />
                  </div>
                  <h3 className="mt-6 font-medium text-base text-primary">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-muted">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-16 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">{t.home.whyEyebrow}</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">{t.home.whyTitle}</h2>
            <p className="mt-6 text-muted-foreground">{t.home.whyBody}</p>
          </div>
          <ul className="space-y-5">
            {t.home.whyItems.map((w) => (
              <li
                key={w}
                className="flex gap-3 border-b border-primary/15 pb-5 bg-card/60 rounded-md px-4 py-3"
              >
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-base">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-cta">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            {t.home.ctaTitle}
          </h2>
          <p className="mt-4 text-primary-foreground/80 max-w-xl mx-auto">{t.home.ctaBody}</p>
          <div className="mt-10">
            <LocalizedLink
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors"
            >
              {t.common.bookConsultation} <ArrowRight className="h-4 w-4" />
            </LocalizedLink>
          </div>
        </div>
      </section>
    </div>
  );
}
