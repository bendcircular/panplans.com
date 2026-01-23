import { Github } from "lucide-react";
import { useTranslation } from "react-i18next";

export function Footer() {
  const { t } = useTranslation("common");

  return (
    <footer className="bg-primary-solid text-primary-background relative overflow-hidden py-16 px-6 md:px-12">
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-background-bright opacity-10 -rotate-45 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          <div>
            <h3 className="font-black text-3xl md:text-4xl uppercase tracking-tight">
              {t("footer.title")}
            </h3>
            <p className="text-primary-background/70 font-medium mt-2">
              {t("footer.description")}
            </p>
          </div>

          <a
            href="https://github.com/remix-run/react-router"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-6 py-3 font-black uppercase text-sm tracking-widest border-2 border-primary-background/30 hover:border-primary-background hover:scale-105 transition-all duration-300"
          >
            <Github className="w-5 h-5" />
            {t("footer.github")}
          </a>
        </div>

        <div className="mb-8 flex items-center gap-4">
          <div className="flex-1 h-0.5 bg-primary-background/20" />
          <div className="w-6 h-6 border-2 border-primary-background/20 transform rotate-45" />
          <div className="flex-1 h-0.5 bg-primary-background/20" />
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-bold text-sm text-primary-background/60">
          <p>{t("footer.copyright")}</p>
          <p>{t("footer.builtWith")}</p>
        </div>
      </div>
    </footer>
  );
}
