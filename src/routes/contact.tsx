import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Mail, Send } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div>
      <section className="border-b border-border/60">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mb-6">Contact</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              Book a consultation.
            </h1>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">
              Tell us about your project, system, or technical challenge. We'll get back to you to
              schedule an initial conversation with a senior engineer.
            </p>
            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-accent" />
                <span>hello@ingress.engineering</span>
              </div>
              <p className="text-xs text-muted-foreground/80 max-w-sm">
                Architecture, AI, DevOps, custom development, and security — end-to-end delivery
                by senior engineers.
              </p>
            </div>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="rounded-md border border-border bg-card/40 p-10">
                <h2 className="text-xl font-semibold">Thanks — we'll be in touch.</h2>
                <p className="mt-3 text-sm text-muted-foreground">
                  We've received your request and will reply within one business day.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="rounded-md border border-border bg-card/40 p-8 space-y-6"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Name" name="name" required />
                  <Field label="Company" name="company" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label="Work email" name="email" type="email" required />
                  <Field label="Role" name="role" />
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Area of interest
                  </label>
                  <select
                    name="interest"
                    className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent"
                    defaultValue="architecture"
                  >
                    <option value="architecture">Software architecture</option>
                    <option value="ai">AI consulting</option>
                    <option value="devops">DevOps & infrastructure</option>
                    <option value="custom">Custom software development</option>
                    <option value="security">Security & pentesting</option>
                    <option value="other">Something else</option>
                  </select>
                </div>
                <div>
                  <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Project details
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent resize-none"
                    placeholder="A few sentences about what you're building, where you're stuck, or what you'd like to discuss."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                >
                  Send request <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-border py-3 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}