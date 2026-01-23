import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import translation files directly for SSR compatibility
import enCommon from "~/locales/en/common.json";
import enHome from "~/locales/en/home.json";
import enPrivacy from "~/locales/en/privacy.json";
import enTerms from "~/locales/en/terms.json";
import enSupport from "~/locales/en/support.json";
import enAccount from "~/locales/en/account.json";

import deCommon from "~/locales/de/common.json";
import deHome from "~/locales/de/home.json";
import dePrivacy from "~/locales/de/privacy.json";
import deTerms from "~/locales/de/terms.json";
import deSupport from "~/locales/de/support.json";
import deAccount from "~/locales/de/account.json";

export const supportedLanguages = ["en", "de"] as const;
export type SupportedLanguage = (typeof supportedLanguages)[number];

export const defaultLanguage: SupportedLanguage = "en";

export const resources = {
  en: {
    common: enCommon,
    home: enHome,
    privacy: enPrivacy,
    terms: enTerms,
    support: enSupport,
    account: enAccount,
  },
  de: {
    common: deCommon,
    home: deHome,
    privacy: dePrivacy,
    terms: deTerms,
    support: deSupport,
    account: deAccount,
  },
} as const;

export function isValidLanguage(lang: string): lang is SupportedLanguage {
  return supportedLanguages.includes(lang as SupportedLanguage);
}

export function getPreferredLanguage(
  acceptLanguage: string | null
): SupportedLanguage {
  if (!acceptLanguage) return defaultLanguage;

  // Parse Accept-Language header
  const languages = acceptLanguage
    .split(",")
    .map((lang) => {
      const [code, q = "q=1"] = lang.trim().split(";");
      const quality = parseFloat(q.replace("q=", "")) || 1;
      return { code: code.split("-")[0].toLowerCase(), quality };
    })
    .sort((a, b) => b.quality - a.quality);

  // Find the first supported language
  for (const { code } of languages) {
    if (isValidLanguage(code)) {
      return code;
    }
  }

  return defaultLanguage;
}

// Initialize i18next (call this once at app startup)
export function initI18n(language: SupportedLanguage = defaultLanguage) {
  if (i18n.isInitialized) {
    // If already initialized, just change language
    i18n.changeLanguage(language);
    return i18n;
  }

  i18n.use(initReactI18next).init({
    resources,
    lng: language,
    fallbackLng: defaultLanguage,
    supportedLngs: supportedLanguages,
    ns: ["common", "home", "privacy", "terms", "support", "account"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false, // React already escapes
    },
    react: {
      useSuspense: false, // Disable suspense for SSR
    },
  });

  return i18n;
}

export default i18n;
