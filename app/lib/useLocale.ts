import { useParams } from "react-router";
import {
  isValidLanguage,
  defaultLanguage,
  type SupportedLanguage,
} from "./i18n";

/**
 * Hook to get the current locale from URL params
 * Falls back to default language if locale is invalid
 */
export function useLocale(): SupportedLanguage {
  const params = useParams<{ locale: string }>();
  const locale = params.locale;

  if (locale && isValidLanguage(locale)) {
    return locale;
  }

  return defaultLanguage;
}

/**
 * Hook to get the alternate language for language switching
 */
export function useAlternateLocale(): SupportedLanguage {
  const currentLocale = useLocale();
  return currentLocale === "en" ? "de" : "en";
}

/**
 * Utility to prefix a path with the current locale
 */
export function localizedPath(locale: SupportedLanguage, path: string): string {
  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Handle hash links (e.g., #about)
  if (cleanPath.startsWith("#")) {
    return `/${locale}/${cleanPath}`;
  }

  // Handle empty path (home)
  if (!cleanPath) {
    return `/${locale}/`;
  }

  return `/${locale}/${cleanPath}`;
}
