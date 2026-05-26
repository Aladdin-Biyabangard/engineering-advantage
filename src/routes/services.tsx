import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Cpu, ServerCog, Code2, ShieldCheck, Check } from "lucide-react";
import { services } from "@/lib/services";

export const Route = createFileRoute("/services")({
  component: ServicesPage,
});

const iconMap = { Boxes, Cpu, ServerCog, Code2, ShieldCheck };

function ServicesPage() {
  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Services</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
            Engineering services across the full software lifecycle.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We help companies design, build, secure, and scale modern software systems — from
            architecture to production.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20 space-y-20">
          {services.map((s, i) => {
            const Icon = iconMap[s.icon];
            return (
              <div
                key={s.slug}
                className="grid gap-10 md:grid-cols-12 border-b border-border/60 pb-20 last:border-0"
              >
                <div className="md:col-span-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <Icon className="h-5 w-5 text-accent" />
                  </div>
                  <h2 className="mt-4 text-2xl font-semibold tracking-tight">{s.title}</h2>
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

      <section className="border-t border-border/60 bg-card/30">
        <div className="mx-auto max-w-6xl px-6 py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
            Not sure where you fit? Let's talk through it.
          </h2>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Book a Consultation <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}