import { Outlet, redirect } from "react-router";
import { isValidLanguage, getPreferredLanguage } from "~/lib/i18n";
import type { Route } from "./+types/locale";

/**
 * Locale validation layout - validates the locale param and redirects if invalid.
 * This layout wraps all locale-prefixed routes.
 */
export function loader({ params, request }: Route.LoaderArgs) {
  const { locale } = params;

  if (!locale || !isValidLanguage(locale)) {
    // Invalid locale, redirect to preferred language
    const acceptLanguage = request.headers.get("Accept-Language");
    const preferredLanguage = getPreferredLanguage(acceptLanguage);
    return redirect(`/${preferredLanguage}/`);
  }

  return { locale };
}

export default function LocaleLayout() {
  return <Outlet />;
}
