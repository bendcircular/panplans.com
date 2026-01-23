import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { useLocale, useAlternateLocale } from "~/lib/useLocale";

/**
 * Language switcher component that preserves the current path when switching languages
 */
export function LanguageSwitcher() {
  const { t } = useTranslation("common");
  const location = useLocation();
  const currentLocale = useLocale();
  const alternateLocale = useAlternateLocale();

  // Get the current path without the locale prefix
  const pathWithoutLocale = location.pathname.replace(/^\/(en|de)/, "") || "/";

  // Build the alternate language URL
  const alternateUrl = `/${alternateLocale}${pathWithoutLocale}${location.search}${location.hash}`;

  return (
    <Link
      to={alternateUrl}
      className="inline-flex items-center gap-2 px-3 py-1.5 text-sm font-bold uppercase tracking-wider border-2 border-primary-border hover:border-accent-border-bright hover:text-accent-foreground transition-all duration-200"
      title={t("language.switchTo")}
    >
      <span className={currentLocale === "en" ? "opacity-50" : ""}>DE</span>
      <span className="text-primary-foreground/30">/</span>
      <span className={currentLocale === "de" ? "opacity-50" : ""}>EN</span>
    </Link>
  );
}
