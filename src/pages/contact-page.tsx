import { useId, useState } from "react";
import { Mail, Send } from "lucide-react";
import { useI18n } from "@/lib/i18n/context";
import { CONTACT_EMAIL } from "@/lib/seo";

export function ContactPage() {
  const { t } = useI18n();
  const [submitted, setSubmitted] = useState(false);
  const f = t.contact.form;

  return (
    <div>
      <section className="page-hero">
        <div className="mx-auto max-w-6xl px-6 py-24 md:py-32 grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">{t.contact.eyebrow}</p>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
              {t.contact.title}{" "}
              <span className="text-primary">{t.contact.titleHighlight}</span>
            </h1>
            <p className="mt-6 text-muted-foreground max-w-md leading-relaxed">{t.contact.intro}</p>
            <div className="mt-10 space-y-4 text-sm">
              <div className="flex items-center gap-3 rounded-md border border-primary/20 bg-primary/5 px-4 py-3 text-foreground">
                <Mail className="h-4 w-4 text-accent shrink-0" />
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="hover:text-primary transition-colors"
                >
                  {CONTACT_EMAIL}
                </a>
              </div>
              <p className="text-xs text-muted-foreground max-w-sm">{t.contact.servicesNote}</p>
            </div>
          </div>

          <div className="md:col-span-7">
            {submitted ? (
              <div className="brand-card rounded-md p-10 border-primary/25">
                <h2 className="text-xl font-semibold text-primary">{t.contact.thanksTitle}</h2>
                <p className="mt-3 text-sm text-muted-foreground">{t.contact.thanksBody}</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="brand-card rounded-md p-8 space-y-6 bg-card"
              >
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={f.name} name="name" required />
                  <Field label={f.company} name="company" />
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <Field label={f.email} name="email" type="email" required />
                  <Field label={f.role} name="role" />
                </div>
                <div>
                  <label htmlFor="interest" className="eyebrow text-[0.65rem]">
                    {f.interest}
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    className="mt-2 w-full bg-transparent border-b border-primary/25 py-3 text-sm focus:outline-none focus:border-accent"
                    defaultValue="architecture"
                  >
                    <option value="architecture">{f.interests.architecture}</option>
                    <option value="ai">{f.interests.ai}</option>
                    <option value="devops">{f.interests.devops}</option>
                    <option value="custom">{f.interests.custom}</option>
                    <option value="security">{f.interests.security}</option>
                    <option value="penetration-testing">{f.interests.penetrationTesting}</option>
                    <option value="secure-code-review">{f.interests.secureCodeReview}</option>
                    <option value="cloud-security">{f.interests.cloudSecurity}</option>
                    <option value="devsecops">{f.interests.devsecops}</option>
                    <option value="other">{f.interests.other}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="eyebrow text-[0.65rem]">
                    {f.message}
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="mt-2 w-full bg-transparent border-b border-primary/25 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                    placeholder={f.placeholder}
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 rounded-md bg-accent px-5 py-3 text-sm font-medium text-accent-foreground shadow-md hover:bg-accent/90 transition-colors"
                >
                  {f.send} <Send className="h-4 w-4" />
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
  const id = useId();

  return (
    <div>
      <label htmlFor={id} className="eyebrow text-[0.65rem]">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        className="mt-2 w-full bg-transparent border-b border-primary/25 py-3 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}
