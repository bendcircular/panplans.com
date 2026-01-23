import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { LocalizedLink } from "~/lib/localizedLink";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const { t } = useTranslation("common");
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        "fixed top-0 w-full z-50 transition-all duration-300 bg-primary-background/95",
        isScrolled && "border-b-4 border-primary-border-bright"
      )}
    >
      <nav className="max-w-full px-6 md:px-12 py-6 flex justify-between items-center">
        <LocalizedLink
          to="/"
          className="font-black text-3xl md:text-4xl hover:text-accent-foreground transition-all duration-200 transform hover:scale-110"
        >
          {t("brand")}
        </LocalizedLink>
        <div className="flex items-center gap-8">
          <LanguageSwitcher />
        </div>
      </nav>
    </header>
  );
}
