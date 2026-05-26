import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Check } from "lucide-react";

export const Route = createFileRoute("/about")({
  component: AboutPage,
});

const principles = [
  {
    title: "Senior by default",
    body: "Every engagement is led and delivered by senior engineers — not handed off to juniors after the sales call.",
  },
  {
    title: "Architecture-first thinking",
    body: "We design systems for the next three years, not the next sprint. Choices we make today should still make sense at scale.",
  },
  {
    title: "Security-conscious by default",
    body: "Security and reliability are part of the design, not a checklist bolted on before launch.",
  },
  {
    title: "Business-focused engineering",
    body: "Technical decisions exist to serve the business. We optimize for outcomes, not novelty.",
  },
];

function AboutPage() {
  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">About</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
            A software consultancy built on training, engineering, and real-world delivery.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            We are a small team of senior engineers and consultants. Our company is built on the
            expertise behind Ingress Academy and on years of engineering experience with local and
            global companies — including Apple.
          </p>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">
              Background
            </p>
            <h2 className="text-3xl font-semibold tracking-tight">Where we come from.</h2>
          </div>
          <div className="md:col-span-8 space-y-6 text-muted-foreground leading-relaxed">
            <p>
              Our team grew out of <span className="text-foreground">Ingress Academy</span>, an
              engineering training program known for raising the technical bar for hundreds of
              software engineers. The same expertise that built the academy now powers our
              consulting practice.
            </p>
            <p>
              Over the years, our engineers have shipped systems for startups, enterprises, and
              global technology companies — including <span className="text-foreground">Apple</span>.
              We've seen what works at scale, and what quietly fails as a company grows.
            </p>
            <p>
              We bring that perspective to every engagement: pragmatic, security-conscious,
              architecture-first, and focused on outcomes that matter to the business.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-3">How we work</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl">
            Principles that shape every engagement.
          </h2>
          <div className="mt-14 grid gap-px bg-border/60 md:grid-cols-2 border border-border/60">
            {principles.map((p) => (
              <div key={p.title} className="bg-background p-8">
                <Check className="h-5 w-5 text-accent" />
                <h3 className="mt-5 font-medium">{p.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight max-w-xl">
            Looking for an engineering partner you can trust?
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