import { useI18n } from "@/lib/i18n/context";
import type { Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const options: { locale: Locale; label: string }[] = [
  { locale: "en", label: "EN" },
  { locale: "az", label: "AZ" },
];

export function LanguageSwitcher({ className }: { className?: string }) {
  const { locale, setLocale, t } = useI18n();

  return (
    <div
      className={cn("inline-flex items-center rounded-md border border-primary/20 p-0.5", className)}
      role="group"
      aria-label={t.lang.switchTo}
    >
      {options.map(({ locale: code, label }) => (
        <button
          key={code}
          type="button"
          onClick={() => setLocale(code)}
          aria-pressed={locale === code}
          className={cn(
            "rounded px-2.5 py-1 text-xs font-medium transition-colors",
            locale === code
              ? "bg-primary text-primary-foreground"
              : "text-muted-foreground hover:text-primary",
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
