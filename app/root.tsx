import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useMatches,
} from "react-router";
import { ThemeProvider } from "next-themes";
import { I18nextProvider } from "react-i18next";

import type { Route } from "./+types/root";
import {
  initI18n,
  defaultLanguage,
  isValidLanguage,
  type SupportedLanguage,
} from "./lib/i18n";
import "./app.css";

// Initialize i18next
const i18n = initI18n();

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96",
    media: "(prefers-color-scheme: light)",
  },
  {
    rel: "icon",
    type: "image/png",
    href: "/favicon-96x96.png",
    sizes: "96x96",
    media: "(prefers-color-scheme: dark)",
  },
  {
    rel: "icon",
    type: "image/svg+xml",
    href: "/favicon.svg",
  },
  {
    rel: "shortcut icon",
    href: "/favicon.ico",
  },

  {
    rel: "apple-touch-icon",
    href: "/apple-touch-icon.png",
    sizes: "180x180",
  },
  {
    rel: "manifest",
    href: "/site.webmanifest",
  },
];

function useLocaleFromUrl(): SupportedLanguage {
  const matches = useMatches();
  // Find the route match that has a locale param
  for (const match of matches) {
    const locale = (match.params as { locale?: string }).locale;
    if (locale && isValidLanguage(locale)) {
      return locale;
    }
  }
  return defaultLanguage;
}

export function Layout({ children }: { children: React.ReactNode }) {
  const locale = useLocaleFromUrl();

  // Update i18n language when locale changes
  if (i18n.language !== locale) {
    i18n.changeLanguage(locale);
  }

  return (
    <html lang={locale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="apple-mobile-web-app-title" content="PanPlans" />
        <Meta />
        <Links />
      </head>
      <body>
        <I18nextProvider i18n={i18n}>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            {children}
          </ThemeProvider>
        </I18nextProvider>
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
