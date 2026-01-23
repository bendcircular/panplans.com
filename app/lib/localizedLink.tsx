import { Link, type LinkProps } from "react-router";
import { useLocale, localizedPath } from "./useLocale";

type LocalizedLinkProps = Omit<LinkProps, "to"> & {
  to: string;
};

/**
 * A Link component that automatically prefixes the href with the current locale
 */
export function LocalizedLink({ to, children, ...props }: LocalizedLinkProps) {
  const locale = useLocale();

  // Don't localize external links or mailto/tel links
  if (
    to.startsWith("http") ||
    to.startsWith("mailto:") ||
    to.startsWith("tel:")
  ) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }

  // Don't double-localize if path already starts with a locale
  if (
    to.startsWith("/en/") ||
    to.startsWith("/de/") ||
    to === "/en" ||
    to === "/de"
  ) {
    return (
      <Link to={to} {...props}>
        {children}
      </Link>
    );
  }

  const localizedTo = localizedPath(locale, to);

  return (
    <Link to={localizedTo} {...props}>
      {children}
    </Link>
  );
}
