import { useTranslation } from "react-i18next";
import type { Route } from "./+types/home";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import {
  UtensilsCrossed,
  Package,
  ShieldCheck,
  ShoppingCart,
  Activity,
  RefreshCw,
  ChevronDown,
} from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PanPlans - Smart Meal Planning Made Simple" },
    {
      name: "description",
      content:
        "PanPlans helps you plan nutritious meals, manage your pantry, and reduce food waste - all while respecting your dietary needs and allergies.",
    },
    { name: "generator", content: "React Router" },
  ];
}

export default function Home() {
  const { t } = useTranslation("home");

  return (
    <Main>
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6 md:px-12 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-accent-background-bright rounded-full opacity-50 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-interactive rounded-full opacity-50 blur-3xl" />
        </div>

        <div className="max-w-5xl mx-auto text-center relative z-10">
          {/* App icon placeholder */}
          <div className="w-24 h-24 md:w-32 md:h-32 mx-auto mb-8 bg-accent-solid rounded-3xl flex items-center justify-center shadow-2xl">
            <UtensilsCrossed className="w-12 h-12 md:w-16 md:h-16 text-white" />
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black uppercase tracking-tight mb-6">
            {t("hero.title")}{" "}
            <span className="text-accent-foreground">{t("hero.titleAccent")}</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/70 max-w-2xl mx-auto mb-10">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            {/* App Store Badge */}
            <a
              href="#download"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-solid text-primary-background font-black uppercase tracking-wide text-sm hover:bg-primary-solid-bright transition-all transform hover:scale-105"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              {t("hero.cta.appStore")}
            </a>

            <a
              href="#features"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-primary-border font-bold uppercase tracking-wide text-sm hover:border-primary-foreground transition-colors"
            >
              {t("hero.cta.learnMore")}
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary-foreground/40" />
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 md:py-32 px-6 md:px-12 bg-primary-background-bright">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight text-center mb-16">
            {t("features.title")}{" "}
            <span className="text-accent-foreground">{t("features.titleAccent")}</span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={UtensilsCrossed}
              title={t("features.items.mealPlanning.title")}
              description={t("features.items.mealPlanning.description")}
            />
            <FeatureCard
              icon={Package}
              title={t("features.items.pantry.title")}
              description={t("features.items.pantry.description")}
            />
            <FeatureCard
              icon={ShieldCheck}
              title={t("features.items.allergies.title")}
              description={t("features.items.allergies.description")}
            />
            <FeatureCard
              icon={ShoppingCart}
              title={t("features.items.shopping.title")}
              description={t("features.items.shopping.description")}
            />
            <FeatureCard
              icon={Activity}
              title={t("features.items.nutrition.title")}
              description={t("features.items.nutrition.description")}
            />
            <FeatureCard
              icon={RefreshCw}
              title={t("features.items.sync.title")}
              description={t("features.items.sync.description")}
            />
          </div>
        </div>
      </section>

      {/* App Preview Section */}
      <section className="py-20 md:py-32 px-6 md:px-12 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent-background rounded-full opacity-30 blur-3xl" />
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
              {t("appPreview.title")}{" "}
              <span className="text-accent-foreground">{t("appPreview.titleAccent")}</span>
            </h2>
            <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto">
              {t("appPreview.description")}
            </p>
          </div>

          {/* App Screenshots Placeholder */}
          <div className="flex justify-center items-center gap-4 md:gap-8">
            <div className="w-48 md:w-64 h-96 md:h-[500px] bg-primary-background-bright border-4 border-primary-border rounded-3xl shadow-2xl transform -rotate-6 hidden md:block">
              <div className="w-full h-full flex items-center justify-center text-primary-foreground/30">
                <span className="text-sm font-medium">App Screenshot</span>
              </div>
            </div>
            <div className="w-56 md:w-72 h-[420px] md:h-[540px] bg-primary-background-bright border-4 border-accent-border rounded-3xl shadow-2xl z-10">
              <div className="w-full h-full flex items-center justify-center text-primary-foreground/30">
                <span className="text-sm font-medium">App Screenshot</span>
              </div>
            </div>
            <div className="w-48 md:w-64 h-96 md:h-[500px] bg-primary-background-bright border-4 border-primary-border rounded-3xl shadow-2xl transform rotate-6 hidden md:block">
              <div className="w-full h-full flex items-center justify-center text-primary-foreground/30">
                <span className="text-sm font-medium">App Screenshot</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section
        id="download"
        className="py-20 md:py-32 px-6 md:px-12 bg-primary-solid text-primary-background"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tight mb-6">
            {t("download.title")}
          </h2>
          <p className="text-lg text-primary-background/70 mb-10 max-w-2xl mx-auto">
            {t("download.subtitle")}
          </p>

          {/* App Store Badge */}
          <a
            href="#"
            className="inline-flex items-center gap-3 px-10 py-5 bg-primary-background text-primary-solid font-black uppercase tracking-wide hover:bg-primary-background-bright transition-all transform hover:scale-105"
          >
            <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
            {t("download.appStore")}
          </a>
        </div>
      </section>

      <Footer />
    </Main>
  );
}

function FeatureCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="p-8 bg-primary-background border-4 border-primary-border hover:border-accent-border transition-colors group">
      <div className="w-14 h-14 bg-accent-solid rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
        <Icon className="w-7 h-7 text-white" />
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-primary-foreground/70">{description}</p>
    </div>
  );
}
