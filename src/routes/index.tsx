import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Boxes, Cpu, ServerCog, Code2, ShieldCheck, Check } from "lucide-react";
import { services } from "@/lib/services";

export const Route = createFileRoute("/")({
  component: Index,
});

const iconMap = { Boxes, Cpu, ServerCog, Code2, ShieldCheck };

const whyUs = [
  "Proven training and engineering background",
  "Experience with global companies, including Apple",
  "Senior-level technical expertise",
  "Practical, business-focused solutions",
];

function Index() {
  return (
    <div>
      {/* Hero */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-28 md:py-40">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">
            Software engineering, done properly
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight max-w-4xl leading-[1.05]">
            Engineering expertise for companies that need reliable software.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            Architecture, AI, DevOps, custom development, and security services delivered by
            experienced engineers.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 rounded-md border border-border px-5 py-3 text-sm font-medium hover:bg-secondary transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Services
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
                What we help with
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden md:inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground"
            >
              All services <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid gap-px bg-border/60 md:grid-cols-2 lg:grid-cols-3 border border-border/60">
            {services.map((s) => {
              const Icon = iconMap[s.icon as keyof typeof iconMap];
              return (
                <div key={s.title} className="bg-background p-8">
                  <Icon className="h-5 w-5 text-accent" />
                  <h3 className="mt-6 font-medium text-base">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.summary}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why us */}
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Why choose us
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
              A team that has shipped real systems at real scale.
            </h2>
            <p className="mt-6 text-muted-foreground">
              Built on the expertise behind Ingress Academy, with engineering experience across
              startups, enterprises, and global companies including Apple.
            </p>
          </div>
          <ul className="space-y-5">
            {whyUs.map((w) => (
              <li key={w} className="flex gap-3 border-b border-border/60 pb-5">
                <Check className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span className="text-base">{w}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            Let's design, build, secure, and scale your software systems.
          </h2>
          <div className="mt-10">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              Book a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
