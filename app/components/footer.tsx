import { useTranslation } from "react-i18next";
import { LocalizedLink } from "~/lib/localizedLink";
import { Mail } from "lucide-react";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-primary-solid text-primary-background relative overflow-hidden py-16 px-6 md:px-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-background-bright opacity-10 -rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tight mb-4">
              {t("footer.title")}
            </h3>
            <p className="text-primary-background/70 font-medium">
              {t("footer.description")}
            </p>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">
              {t("footer.links.title")}
            </h4>
            <ul className="space-y-3">
              <li>
                <LocalizedLink
                  to="/privacy"
                  className="text-primary-background/70 hover:text-primary-background transition-colors"
                >
                  {t("footer.links.privacy")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  to="/terms"
                  className="text-primary-background/70 hover:text-primary-background transition-colors"
                >
                  {t("footer.links.terms")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  to="/support"
                  className="text-primary-background/70 hover:text-primary-background transition-colors"
                >
                  {t("footer.links.support")}
                </LocalizedLink>
              </li>
              <li>
                <LocalizedLink
                  to="/account"
                  className="text-primary-background/70 hover:text-primary-background transition-colors"
                >
                  {t("footer.links.account")}
                </LocalizedLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4 uppercase tracking-wide">
              {t("footer.contact.title")}
            </h4>
            <a
              href={`mailto:${t("footer.contact.email")}`}
              className="inline-flex items-center gap-2 text-primary-background/70 hover:text-primary-background transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t("footer.contact.email")}
            </a>
          </div>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-primary-background/20" />
          <div className="w-6 h-6 border-2 border-primary-background/20 transform rotate-45" />
          <div className="flex-1 h-0.5 bg-primary-background/20" />
        </div>

        <div className="text-center font-bold text-sm text-primary-background/60">
          <p>{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
}
