import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";
import { LocalizedLink } from "~/lib/localizedLink";
import { Mail } from "lucide-react";

/**
 * Footer Component - FlowFork Design System
 *
 * Design principles applied:
 * - Inverted monochrome (black background, white text)
 * - No uppercase headings (feels aggressive)
 * - No decorative elements or gradients
 * - Light font weights with size hierarchy
 * - Clean divider lines
 */
export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer
      className={cn(
        "bg-[var(--color-black)] text-[var(--color-white)]",
        "py-12 md:py-16 px-6 md:px-8"
      )}
    >
      <div className="max-w-5xl mx-auto">
        <div className="grid md:grid-cols-3 gap-10 md:gap-12 mb-10">
          {/* Brand */}
          <div>
            <h3 className="text-2xl md:text-3xl font-normal mb-4">
              {t("footer.title")}
            </h3>
            <p className="text-white/60 font-light text-base leading-relaxed">
              {t("footer.description")}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-lg font-normal mb-4">
              {t("footer.links.title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <LocalizedLink
                  to="/privacy"
                  className="text-white/60 font-light hover:text-white transition-button"
                >
                  {t("footer.links.privacy")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  to="/terms"
                  className="text-white/60 font-light hover:text-white transition-button"
                >
                  {t("footer.links.terms")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  to="/support"
                  className="text-white/60 font-light hover:text-white transition-button"
                >
                  {t("footer.links.support")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  to="/account"
                  className="text-white/60 font-light hover:text-white transition-button"
                >
                  {t("footer.links.account")}
                </LocalizedLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-normal mb-4">
              {t("footer.contact.title")}
            </h4>
            <a
              href={`mailto:${t("footer.contact.email")}`}
              className="inline-flex items-center gap-2 text-white/60 font-light hover:text-white transition-button"
            >
              <Mail className="w-5 h-5" strokeWidth={1.5} />
              {t("footer.contact.email")}
            </a>
          </div>
        </div>

        {/* Clean divider - 1px line, no decorative elements */}
        <div className="h-px bg-white/20 mb-8" />

        <div className="text-center text-sm text-white/40 font-light">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
