import { ArrowRight, Check } from "lucide-react";
import { LocalizedLink } from "@/components/localized-link";
import { useI18n } from "@/lib/i18n/context";

export function AboutPage() {
  const { t } = useI18n();

  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="eyebrow mb-6">{t.about.eyebrow}</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
            {t.about.title}{" "}
            <span className="text-primary">{t.about.titleHighlight}</span>
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">{t.about.intro}</p>
        </div>
      </section>

      <section className="border-b border-primary/10">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="eyebrow mb-3">{t.about.backgroundEyebrow}</p>
            <h2 className="text-3xl font-semibold tracking-tight">{t.about.backgroundTitle}</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              {t.about.backgroundP1}{" "}
              <span className="text-primary font-medium">{t.about.backgroundP1Academy}</span>
              {t.about.backgroundP1Rest}
            </p>
            <p>
              {t.about.backgroundP2}{" "}
              <span className="text-primary font-medium">{t.about.backgroundP2Apple}</span>
              {t.about.backgroundP2Rest}
            </p>
            <p>{t.about.backgroundP3}</p>
          </div>
        </div>
      </section>

      <section className="section-tint">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="eyebrow mb-3">{t.about.howEyebrow}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            {t.about.howTitle}
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-2">
            {t.about.principles.map((p) => (
              <div key={p.title} className="brand-card rounded-md p-8">
                <Check className="h-5 w-5 text-accent" />
                <h3 className="mt-5 font-medium text-primary">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-cta">
        <div className="mx-auto max-w-6xl px-6 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
            {t.about.ctaTitle}
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
