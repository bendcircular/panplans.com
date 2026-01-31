import { useTranslation } from "react-i18next";
import type { Route } from "./+types/home";
import { cn } from "~/lib/utils";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
  UtensilsCrossed,
  Package,
  ShieldCheck,
  ShoppingCart,
  Activity,
  Plug,
  ChevronDown,
} from "lucide-react";

/**
 * Home Page - FlowFork Design System
 *
 * Key design principles applied:
 * - No uppercase headings (feels aggressive)
 * - No shadows (they feel heavy, we want air)
 * - No gradients except photo overlays
 * - No colorful accents (color = ingredients only)
 * - Size and spacing for hierarchy, never bold
 * - Container max-width: 640px for readable content
 * - 8px spacing system
 */

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
      {/* Hero Section - Clean, minimal, no decorations */}
      {/* Uses calc to account for header height since main has pt-[--header-height] */}
      <section className="min-h-[calc(100vh-var(--header-height))] flex flex-col items-center justify-center px-6 md:px-8">
        <div className="max-w-2xl mx-auto text-center pt-8 md:pt-0">
          {/* App icon - inverts in dark mode for proper contrast */}
          <div
            className={cn(
              "w-20 h-20 md:w-24 md:h-24 mx-auto mb-8 mt-4",
              "rounded-2xl",
              "flex items-center justify-center",
              // Light mode: black background, white icon
              "bg-[var(--color-black)]",
              // Dark mode: white background with subtle border
              "dark:bg-[var(--color-white)] dark:border dark:border-[var(--color-border)]"
            )}
          >
            <UtensilsCrossed
              className={cn(
                "w-10 h-10 md:w-12 md:h-12",
                // Light mode: white icon
                "text-white",
                // Dark mode: black icon
                "dark:text-[var(--color-black)]"
              )}
              strokeWidth={1.5}
            />
          </div>

          {/* Title - size for hierarchy, not weight or uppercase */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight mb-6">
            {t("hero.title")}{" "}
            <span className="text-[var(--color-text-muted)]">
              {t("hero.titleAccent")}
            </span>
          </h1>

          <p className="text-lg md:text-xl font-light text-[var(--color-text-muted)] max-w-xl mx-auto mb-10 leading-relaxed">
            {t("hero.subtitle")}
          </p>

          {/* CTAs using Button component */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild>
              <a href="#download" className="gap-3">
                <AppleIcon className="w-5 h-5" />
                {t("hero.cta.appStore")}
              </a>
            </Button>

            <Button variant="secondary" asChild>
              <a href="#features">{t("hero.cta.learnMore")}</a>
            </Button>
          </div>
        </div>

        {/* Scroll indicator - subtle */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-6 h-6 text-[var(--color-inactive)]"
            strokeWidth={1.5}
          />
        </div>
      </section>

      {/* Features Section - Clean grid, no heavy borders */}
      <section
        id="features"
        className="py-16 md:py-24 px-6 md:px-8 bg-[var(--color-divider)]"
      >
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight text-center mb-12">
            {t("features.title")}{" "}
            <span className="text-[var(--color-text-muted)]">
              {t("features.titleAccent")}
            </span>
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Row 1: Available features */}
            <FeatureCard
              icon={UtensilsCrossed}
              title={t("features.items.mealPlanning.title")}
              description={t("features.items.mealPlanning.description")}
            />
            <FeatureCard
              icon={ShoppingCart}
              title={t("features.items.shopping.title")}
              description={t("features.items.shopping.description")}
            />
            <FeatureCard
              icon={ShieldCheck}
              title={t("features.items.allergies.title")}
              description={t("features.items.allergies.description")}
            />
            {/* Row 2: Coming Soon features */}
            <FeatureCard
              icon={Package}
              title={t("features.items.pantry.title")}
              description={t("features.items.pantry.description")}
              comingSoon={t("features.comingSoon")}
            />
            <FeatureCard
              icon={Activity}
              title={t("features.items.nutrition.title")}
              description={t("features.items.nutrition.description")}
              comingSoon={t("features.comingSoon")}
            />
            <FeatureCard
              icon={Plug}
              title={t("features.items.mcpAccess.title")}
              description={t("features.items.mcpAccess.description")}
              comingSoon={t("features.comingSoon")}
            />
          </div>
        </div>
      </section>

      {/* App Preview Section - Clean, no background blurs */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
              {t("appPreview.title")}{" "}
              <span className="text-[var(--color-text-muted)]">
                {t("appPreview.titleAccent")}
              </span>
            </h2>
            <p className="text-lg font-light text-[var(--color-text-muted)] max-w-xl mx-auto">
              {t("appPreview.description")}
            </p>
          </div>

          {/* App Screenshots - Clean borders, no shadows */}
          <div className="flex justify-center items-center gap-4 md:gap-6">
            <div
              className={cn(
                "w-44 md:w-56 h-80 md:h-[440px]",
                "bg-[var(--color-background)] border border-[var(--color-border)]",
                "rounded-2xl transform -rotate-3 hidden md:flex",
                "items-center justify-center"
              )}
            >
              <span className="text-sm font-light text-[var(--color-inactive)]">
                App Screenshot
              </span>
            </div>
            <div
              className={cn(
                "w-52 md:w-64 h-96 md:h-[480px]",
                "bg-[var(--color-background)] border-2 border-[var(--color-black)]",
                "rounded-2xl z-10 flex items-center justify-center"
              )}
            >
              <span className="text-sm font-light text-[var(--color-inactive)]">
                App Screenshot
              </span>
            </div>
            <div
              className={cn(
                "w-44 md:w-56 h-80 md:h-[440px]",
                "bg-[var(--color-background)] border border-[var(--color-border)]",
                "rounded-2xl transform rotate-3 hidden md:flex",
                "items-center justify-center"
              )}
            >
              <span className="text-sm font-light text-[var(--color-inactive)]">
                App Screenshot
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA Section - Inverted monochrome */}
      <section
        id="download"
        className="py-16 md:py-24 px-6 md:px-8 bg-[var(--color-black)] text-white"
      >
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-normal tracking-tight mb-4">
            {t("download.title")}
          </h2>
          <p className="text-lg font-light text-white/60 mb-10 max-w-xl mx-auto">
            {t("download.subtitle")}
          </p>

          {/* App Store Badge - inverted colors */}
          <a
            href="#"
            className={cn(
              "inline-flex items-center gap-3",
              "px-8 py-4",
              "bg-white text-[var(--color-black)]",
              "font-light text-base",
              "rounded-full",
              "hover:bg-white/90 transition-button"
            )}
          >
            <AppleIcon className="w-6 h-6" />
            {t("download.appStore")}
          </a>
        </div>
      </section>

      <Footer />
    </Main>
  );
}

/**
 * Feature Card - Uses design system Card with monochrome icon
 */
function FeatureCard({
  icon: Icon,
  title,
  description,
  comingSoon,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
  comingSoon?: string;
}) {
  return (
    <Card interactive className="group relative">
      {/* Coming Soon badge - top right corner */}
      {comingSoon && (
        <span className="absolute top-4 right-4 text-xs font-light text-[var(--color-text-muted)] border border-[var(--color-border)] rounded-full px-2 py-0.5">
          {comingSoon}
        </span>
      )}
      <CardContent className="pt-6">
        {/* Icon - monochrome, no colorful backgrounds */}
        <div
          className={cn(
            "w-12 h-12 mb-5",
            "border border-[var(--color-border)]",
            "rounded-xl",
            "flex items-center justify-center",
            "group-hover:border-[var(--color-black)] transition-calm"
          )}
        >
          <Icon
            className="w-6 h-6 text-[var(--color-text-primary)]"
            strokeWidth={1.5}
          />
        </div>
        {/* Title - size for hierarchy, not weight */}
        <h3 className="text-lg font-normal mb-2">{title}</h3>
        <p className="text-base font-light text-[var(--color-text-muted)] leading-relaxed">
          {description}
        </p>
      </CardContent>
    </Card>
  );
}

/**
 * Apple Icon - Simple outline style matching design system
 */
function AppleIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  );
}
