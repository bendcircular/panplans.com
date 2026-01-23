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
  // Handle pure hash links (e.g., #about) - these stay as-is for same-page navigation
  if (path.startsWith("#")) {
    return path;
  }

  // Remove leading slash if present
  const cleanPath = path.startsWith("/") ? path.slice(1) : path;

  // Handle empty path (home)
  if (!cleanPath) {
    return `/${locale}/`;
  }

  // Handle paths with hash (e.g., /page#section)
  const hashIndex = cleanPath.indexOf("#");
  if (hashIndex !== -1) {
    const pathPart = cleanPath.slice(0, hashIndex);
    const hashPart = cleanPath.slice(hashIndex);
    return pathPart ? `/${locale}/${pathPart}${hashPart}` : `/${locale}/${hashPart}`;
  }

  return `/${locale}/${cleanPath}`;
}
