import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "~/lib/utils";
import { LocalizedLink } from "~/lib/localizedLink";
import { LanguageSwitcher } from "./language-switcher";
import { Menu, X } from "lucide-react";

/**
 * Header Component - FlowFork Design System
 *
 * Design principles applied:
 * - No bold text (use size for hierarchy)
 * - No shadows (clean, airy feel)
 * - Monochrome color scheme
 * - Subtle transitions (200ms ease)
 */
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
      className={cn(
        "fixed top-0 w-full z-50",
        "bg-[var(--color-background)]/95 backdrop-blur-sm",
        "transition-calm",
        // Scrolled state: subtle border, NO shadow
        isScrolled && "border-b border-[var(--color-border)]"
      )}
    >
      <nav className="max-w-5xl mx-auto px-6 md:px-8 py-4 flex justify-between items-center">
        {/* Brand - size for hierarchy, not weight */}
        <LocalizedLink
          to="/"
          className={cn(
            "text-xl md:text-2xl font-normal",
            "text-[var(--color-text-primary)]",
            "hover:text-[var(--color-text-muted)]",
            "transition-button"
          )}
        >
          {t("brand")}
        </LocalizedLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <LocalizedLink
              key={link.to}
              to={link.to}
              className={cn(
                "text-base font-light",
                "text-[var(--color-text-muted)]",
                "hover:text-[var(--color-text-primary)]",
                "transition-button"
              )}
            >
              {link.label}
            </LocalizedLink>
          ))}
          <LanguageSwitcher />
        </div>

        {/* Mobile Menu Button - 44px touch target */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden",
            "w-11 h-11 flex items-center justify-center",
            "hover:bg-[var(--color-hover-bg)]",
            "rounded-md transition-button"
          )}
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" strokeWidth={1.5} />
          ) : (
            <Menu className="w-5 h-5" strokeWidth={1.5} />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden border-t border-[var(--color-border)] bg-[var(--color-background)]">
          <div className="px-6 py-4 space-y-1">
            {navLinks.map((link) => (
              <LocalizedLink
                key={link.to}
                to={link.to}
                className={cn(
                  "block py-3 px-2",
                  "text-base font-light",
                  "text-[var(--color-text-muted)]",
                  "hover:text-[var(--color-text-primary)]",
                  "hover:bg-[var(--color-hover-bg)]",
                  "rounded-md transition-button"
                )}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </LocalizedLink>
            ))}
            <div className="pt-4 mt-4 border-t border-[var(--color-divider)]">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
