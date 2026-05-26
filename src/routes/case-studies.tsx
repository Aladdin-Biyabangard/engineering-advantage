import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
});

const experience = [
  {
    company: "Apple",
    role: "Engineering experience",
    body: "Our engineers have contributed to systems and tooling at one of the most demanding software organizations in the world.",
  },
  {
    company: "Ingress Academy",
    role: "Training & curriculum",
    body: "Designed and delivered engineering training programs that have raised the technical bar for hundreds of professional engineers.",
  },
  {
    company: "Enterprise platforms",
    role: "Architecture & DevOps",
    body: "Led architecture and infrastructure work for large enterprise platforms, including cloud migrations, Kubernetes adoption, and reliability programs.",
  },
  {
    company: "Startups & scale-ups",
    role: "Custom development & AI",
    body: "Built backend systems, APIs, and AI-powered features for startups going from prototype to production at scale.",
  },
  {
    company: "Security engagements",
    role: "Pentesting & audits",
    body: "Performed security audits, penetration tests, and secure-architecture reviews for products handling sensitive data.",
  },
];

function CaseStudiesPage() {
  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Experience</p>
          <h1 className="text-4xl md:text-5xl font-semibold tracking-tight max-w-3xl leading-[1.1]">
            Real systems, real companies, real outcomes.
          </h1>
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl">
            A snapshot of where our engineers have delivered work — from global technology
            companies to fast-moving startups.
          </p>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="border-t border-border/60">
            {experience.map((e) => (
              <div
                key={e.company}
                className="grid gap-6 md:grid-cols-12 py-10 border-b border-border/60"
              >
                <div className="md:col-span-3">
                  <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
                    {e.role}
                  </div>
                  <div className="mt-2 text-xl font-medium">{e.company}</div>
                </div>
                <p className="md:col-span-9 text-muted-foreground leading-relaxed text-base">
                  {e.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight max-w-2xl mx-auto">
            Want to discuss a specific project or challenge?
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