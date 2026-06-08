import { Link, type LinkProps } from "@tanstack/react-router";
import { useI18n } from "@/lib/i18n/context";
import { localizedPath, type AppPath } from "@/lib/i18n/routing";

type LocalizedLinkProps = Omit<LinkProps, "to"> & {
  to: AppPath;
};

export function LocalizedLink({ to, ...props }: LocalizedLinkProps) {
  const { locale } = useI18n();
  return <Link to={localizedPath(locale, to)} {...props} />;
}
