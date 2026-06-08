import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  type ReactNode,
} from "react";
import { useNavigate, useRouterState } from "@tanstack/react-router";
import {
  LOCALE_STORAGE_KEY,
  getDictionary,
  readStoredLocale,
  type Locale,
  type TranslationDict,
} from "./index";
import { localeFromPathname, localizedPath, stripLocalePrefix } from "./routing";

type I18nContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: TranslationDict;
};

const I18nContext = createContext<I18nContextValue | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const navigate = useNavigate();
  const locale = localeFromPathname(pathname);
  const t = useMemo(() => getDictionary(locale), [locale]);

  const setLocale = useCallback(
    (next: Locale) => {
      localStorage.setItem(LOCALE_STORAGE_KEY, next);
      const basePath = stripLocalePrefix(pathname);
      void navigate({ to: localizedPath(next, basePath) });
    },
    [navigate, pathname],
  );

  useEffect(() => {
    document.documentElement.lang = locale === "az" ? "az" : "en";
  }, [locale]);

  useEffect(() => {
    if (pathname !== "/") return;
    const stored = readStoredLocale();
    if (stored === "az") {
      void navigate({ to: "/az", replace: true });
    }
  }, [navigate, pathname]);

  const value = useMemo(
    () => ({ locale, setLocale, t }),
    [locale, setLocale, t],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error("useI18n must be used within I18nProvider");
  }
  return ctx;
}

export function useLocalePath() {
  const { locale } = useI18n();
  return useCallback(
    (path: Parameters<typeof localizedPath>[1]) => localizedPath(locale, path),
    [locale],
  );
}
