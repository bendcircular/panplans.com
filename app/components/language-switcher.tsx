import { Link, useLocation } from "react-router";
import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";
import { useLocale, useAlternateLocale } from "~/lib/useLocale";

/**
 * Language Switcher - FlowFork Design System
 *
 * Design principles:
 * - No bold/uppercase (using size and spacing)
 * - Subtle border, monochrome
 * - 44px min touch target
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
      className={cn(
        "inline-flex items-center gap-2",
        "px-4 py-2 min-h-[2.75rem]",
        "text-sm font-light",
        "border border-[var(--color-border)]",
        "rounded-full",
        "hover:border-[var(--color-foreground)]",
        "transition-button"
      )}
      title={t("language.switchTo")}
    >
      <span className={currentLocale === "en" ? "text-[var(--color-inactive)]" : ""}>
        DE
      </span>
      <span className="text-[var(--color-inactive)]">/</span>
      <span className={currentLocale === "de" ? "text-[var(--color-inactive)]" : ""}>
        EN
      </span>
    </Link>
  );
}
