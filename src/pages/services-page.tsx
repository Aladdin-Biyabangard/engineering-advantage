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

export function ServicesPage() {
  const { t } = useI18n();
  const services = getServices(t);

  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow mb-6">{t.servicesPage.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
            {t.servicesPage.title}{" "}
            <span className="text-primary">{t.servicesPage.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t.servicesPage.subtitle}</p>
        </div>
      </section>

      <section className="section-muted">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-12">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.slug}
                className="brand-card rounded-md p-8 md:p-10 grid gap-10 md:grid-cols-12"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-primary tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div className="icon-badge">
                      <Icon />
                    </div>
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight text-primary">
                    {s.title}
                  </h2>
                </div>
                <div className="md:col-span-8">
                  <p className="text-muted-foreground text-lg leading-relaxed">{s.summary}</p>
                  <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                    {s.details.map((d) => (
                      <li key={d} className="flex gap-3 text-sm">
                        <Check className="h-4 w-4 text-accent shrink-0 mt-1" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-cta">
        <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
            {t.servicesPage.ctaTitle}
          </h2>
          <LocalizedLink
            to="/contact"
            className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-lg hover:bg-accent/90 transition-colors"
          >
            {t.common.bookConsultation} <ArrowRight className="h-4 w-4" />
          </LocalizedLink>
        </div>
      </section>
    </div>
  );
}
