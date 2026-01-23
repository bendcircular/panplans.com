import { redirect } from "react-router";
import type { Route } from "./+types/language-redirect";
import { getPreferredLanguage } from "~/lib/i18n";

export function loader({ request }: Route.LoaderArgs) {
  const acceptLanguage = request.headers.get("Accept-Language");
  const preferredLanguage = getPreferredLanguage(acceptLanguage);

  return redirect(`/${preferredLanguage}/`);
}

export default function LanguageRedirect() {
  // This should never render as we always redirect
  return null;
}
