import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { LocalizedLink } from "~/lib/localizedLink";
import { LanguageSwitcher } from "./language-switcher";
import { Menu, X } from "lucide-react";

export function Header() {
  const { t } = useTranslation("common");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { to: "/privacy", label: t("nav.privacy") },
    { to: "/terms", label: t("nav.terms") },
    { to: "/support", label: t("nav.support") },
    { to: "/account", label: t("nav.account") },
  ];

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-primary-background/95 backdrop-blur-sm",
        isScrolled && "border-b-4 border-primary-border-bright shadow-lg"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex justify-between items-center">
        <LocalizedLink
          to="/"
          className="font-black text-2xl md:text-3xl hover:text-accent-foreground transition-all duration-200"
        >
          {t("brand")}
        </LocalizedLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <LocalizedLink
              key={link.to}
              to={link.to}
              className="font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors"
            >
              {link.label}
            </LocalizedLink>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden p-2 hover:bg-primary-interactive rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-primary-border bg-primary-background">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <LocalizedLink
                key={link.to}
                to={link.to}
                className="block font-medium text-primary-foreground/70 hover:text-primary-foreground transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </LocalizedLink>
            ))}
            <div className="pt-4 border-t border-primary-border">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
