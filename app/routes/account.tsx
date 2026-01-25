import { useTranslation } from "react-i18next";
import type { Route } from "./+types/account";
import { cn } from "~/lib/utils";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import {
  Trash2,
  Download,
  Shield,
  Settings,
  Mail,
  AlertTriangle,
} from "lucide-react";

/**
 * Account Page - FlowFork Design System
 * Account management with proper error states and monochrome icons
 */

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Account Management - PanPlans" },
    {
      name: "description",
      content: "Manage your PanPlans account, request data export, or delete your account.",
    },
  ];
}

export default function Account() {
  const { t } = useTranslation("account");

  return (
    <Main>
      <div className="pt-28 pb-16 px-6 md:px-8">
        {/* Hero Section */}
        <header className="text-center mb-12 max-w-2xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-3">
            {t("title")}
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] font-light">
            {t("subtitle")}
          </p>
        </header>

        <div className="max-w-2xl mx-auto space-y-8">
          {/* Account Deletion Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={cn(
                    "w-12 h-12 flex-shrink-0",
                    "bg-[var(--color-error-bg)]",
                    "border border-[var(--color-error)]/20",
                    "rounded-xl flex items-center justify-center"
                  )}
                >
                  <Trash2 className="w-5 h-5 text-[var(--color-error)]" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-xl font-normal mb-1">
                    {t("sections.deletion.title")}
                  </h2>
                  <p className="text-[var(--color-text-muted)] font-light">
                    {t("sections.deletion.description")}
                  </p>
                </div>
              </div>

              {/* In-App Deletion */}
              <div className="mb-6">
                <h3 className="text-base font-normal mb-3">
                  {t("sections.deletion.inApp.title")}
                </h3>
                <ol className="list-decimal pl-6 space-y-2 text-[var(--color-text-muted)] font-light">
                  {(
                    t("sections.deletion.inApp.steps", {
                      returnObjects: true,
                    }) as string[]
                  ).map((step, index) => (
                    <li key={index}>{step}</li>
                  ))}
                </ol>
              </div>

              {/* Email Deletion */}
              <div className="mb-6 p-4 bg-[var(--color-divider)] rounded-[1rem]">
                <h3 className="text-base font-normal mb-2">
                  {t("sections.deletion.contact.title")}
                </h3>
                <p className="text-[var(--color-text-muted)] font-light text-sm mb-3">
                  {t("sections.deletion.contact.description")}
                </p>
                <a
                  href={`mailto:${t("sections.deletion.contact.email")}`}
                  className="inline-flex items-center gap-2 text-sm hover:underline"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  {t("sections.deletion.contact.email")}
                </a>
                <p className="text-xs text-[var(--color-text-muted)] font-light mt-2">
                  {t("sections.deletion.contact.note")}
                </p>
              </div>

              {/* Warning */}
              <div
                className={cn(
                  "p-4 rounded-[1rem] flex items-start gap-3",
                  "bg-[var(--color-error-bg)]",
                  "border border-[var(--color-error)]/20"
                )}
              >
                <AlertTriangle
                  className="w-5 h-5 text-[var(--color-error)] flex-shrink-0 mt-0.5"
                  strokeWidth={1.5}
                />
                <p className="text-sm font-normal">
                  {t("sections.deletion.warning")}
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Data Export Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <IconBox icon={Download} />
                <div>
                  <h2 className="text-xl font-normal mb-1">
                    {t("sections.export.title")}
                  </h2>
                  <p className="text-[var(--color-text-muted)] font-light">
                    {t("sections.export.description")}
                  </p>
                </div>
              </div>

              <ol className="list-decimal pl-6 space-y-2 text-[var(--color-text-muted)] font-light mb-6">
                {(
                  t("sections.export.steps", { returnObjects: true }) as string[]
                ).map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>

              <div className="p-4 bg-[var(--color-divider)] rounded-[1rem] mb-4">
                <p className="text-[var(--color-text-muted)] font-light text-sm mb-2">
                  {t("sections.export.contact.description")}
                </p>
                <a
                  href={`mailto:${t("sections.export.contact.email")}`}
                  className="inline-flex items-center gap-2 text-sm hover:underline"
                >
                  <Mail className="w-4 h-4" strokeWidth={1.5} />
                  {t("sections.export.contact.email")}
                </a>
              </div>

              <p className="text-xs text-[var(--color-text-muted)] font-light italic">
                {t("sections.export.format")}
              </p>
            </CardContent>
          </Card>

          {/* Privacy Choices Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <IconBox icon={Shield} />
                <div>
                  <h2 className="text-xl font-normal mb-1">
                    {t("sections.privacy.title")}
                  </h2>
                  <p className="text-[var(--color-text-muted)] font-light">
                    {t("sections.privacy.description")}
                  </p>
                </div>
              </div>

              <div className="space-y-3 mb-4">
                {(
                  t("sections.privacy.options", {
                    returnObjects: true,
                  }) as { title: string; description: string }[]
                ).map((option, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-[var(--color-divider)] rounded-[1rem]"
                  >
                    {/* Toggle placeholder - monochrome */}
                    <div className="w-10 h-5 bg-[var(--color-black)] rounded-full flex-shrink-0" />
                    <div>
                      <h4 className="font-normal text-sm">{option.title}</h4>
                      <p className="text-xs text-[var(--color-text-muted)] font-light">
                        {option.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <p className="text-xs text-[var(--color-text-muted)] font-light italic">
                {t("sections.privacy.manage")}
              </p>
            </CardContent>
          </Card>

          {/* Update Information Section */}
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <IconBox icon={Settings} />
                <div>
                  <h2 className="text-xl font-normal mb-1">
                    {t("sections.updateInfo.title")}
                  </h2>
                  <p className="text-[var(--color-text-muted)] font-light">
                    {t("sections.updateInfo.description")}
                  </p>
                </div>
              </div>

              <ul className="space-y-2 text-[var(--color-text-muted)] font-light">
                {(
                  t("sections.updateInfo.items", {
                    returnObjects: true,
                  }) as string[]
                ).map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-1.5 h-1.5 bg-[var(--color-black)] rounded-full flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="p-8 bg-[var(--color-divider)] rounded-[1rem] text-center">
            <h2 className="text-xl font-normal mb-3">
              {t("contact.title")}
            </h2>
            <p className="text-[var(--color-text-muted)] font-light mb-6 max-w-md mx-auto">
              {t("contact.description")}
            </p>
            <Button asChild>
              <a href={`mailto:${t("contact.email")}`} className="gap-2">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                {t("contact.email")}
              </a>
            </Button>
          </div>
        </div>
      </div>
      <Footer />
    </Main>
  );
}

/**
 * Icon Box - Monochrome icon container
 */
function IconBox({
  icon: Icon,
}: {
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}) {
  return (
    <div
      className={cn(
        "w-12 h-12 flex-shrink-0",
        "border border-[var(--color-border)]",
        "rounded-xl flex items-center justify-center"
      )}
    >
      <Icon className="w-5 h-5" strokeWidth={1.5} />
    </div>
  );
}
