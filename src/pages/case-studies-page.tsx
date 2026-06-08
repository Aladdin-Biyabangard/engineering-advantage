import { ArrowRight } from "lucide-react";
import { LocalizedLink } from "@/components/localized-link";
import { useI18n } from "@/lib/i18n/context";

export function CaseStudiesPage() {
  const { t } = useI18n();

  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow mb-6">{t.experience.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
            {t.experience.title}{" "}
            <span className="text-primary">{t.experience.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t.experience.subtitle}</p>
        </div>
      </section>

      <section className="section-tint">
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-4">
          {t.experience.items.map((e) => (
            <div
              key={e.company}
              className="brand-card rounded-md p-8 grid gap-6 md:grid-cols-12"
            >
              <div className="md:col-span-3">
                <div className="eyebrow text-[0.65rem]">{e.role}</div>
                <div className="mt-2 text-xl font-semibold text-primary">{e.company}</div>
              </div>
              <p className="md:col-span-9 text-muted-foreground leading-relaxed text-base">
                {e.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section-cta">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            {t.experience.ctaTitle}
          </h2>
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
