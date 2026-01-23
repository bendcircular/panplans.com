import { useTranslation } from "react-i18next";
import type { Route } from "./+types/account";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import {
  Trash2,
  Download,
  Shield,
  Settings,
  Mail,
  AlertTriangle,
} from "lucide-react";

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
      <div className="pt-32 pb-20 px-6 md:px-12">
        {/* Hero Section */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-primary-foreground/70">{t("subtitle")}</p>
        </header>

        <div className="max-w-4xl mx-auto space-y-12">
          {/* Account Deletion Section */}
          <section className="bg-primary-background-bright border-4 border-primary-border p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-red-600 rounded-lg">
                <Trash2 className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {t("sections.deletion.title")}
                </h2>
                <p className="text-primary-foreground/70">
                  {t("sections.deletion.description")}
                </p>
              </div>
            </div>

            {/* In-App Deletion */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4">
                {t("sections.deletion.inApp.title")}
              </h3>
              <ol className="list-decimal pl-6 space-y-2 text-primary-foreground/80">
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
            <div className="mb-8 bg-primary-background p-6 border border-primary-border">
              <h3 className="text-lg font-bold mb-2">
                {t("sections.deletion.contact.title")}
              </h3>
              <p className="text-primary-foreground/70 mb-4">
                {t("sections.deletion.contact.description")}
              </p>
              <a
                href={`mailto:${t("sections.deletion.contact.email")}`}
                className="inline-flex items-center gap-2 text-accent-foreground hover:text-accent-foreground-bright font-mono"
              >
                <Mail className="w-4 h-4" />
                {t("sections.deletion.contact.email")}
              </a>
              <p className="text-sm text-primary-foreground/60 mt-2">
                {t("sections.deletion.contact.note")}
              </p>
            </div>

            {/* Warning */}
            <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="text-red-800 dark:text-red-200 font-medium">
                  {t("sections.deletion.warning")}
                </p>
              </div>
            </div>
          </section>

          {/* Data Export Section */}
          <section className="bg-primary-background-bright border-4 border-primary-border p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent-solid rounded-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {t("sections.export.title")}
                </h2>
                <p className="text-primary-foreground/70">
                  {t("sections.export.description")}
                </p>
              </div>
            </div>

            <ol className="list-decimal pl-6 space-y-2 text-primary-foreground/80 mb-6">
              {(
                t("sections.export.steps", { returnObjects: true }) as string[]
              ).map((step, index) => (
                <li key={index}>{step}</li>
              ))}
            </ol>

            <div className="bg-primary-background p-6 border border-primary-border mb-4">
              <p className="text-primary-foreground/70 mb-2">
                {t("sections.export.contact.description")}
              </p>
              <a
                href={`mailto:${t("sections.export.contact.email")}`}
                className="inline-flex items-center gap-2 text-accent-foreground hover:text-accent-foreground-bright font-mono"
              >
                <Mail className="w-4 h-4" />
                {t("sections.export.contact.email")}
              </a>
            </div>

            <p className="text-sm text-primary-foreground/60 italic">
              {t("sections.export.format")}
            </p>
          </section>

          {/* Privacy Choices Section */}
          <section className="bg-primary-background-bright border-4 border-primary-border p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent-solid rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {t("sections.privacy.title")}
                </h2>
                <p className="text-primary-foreground/70">
                  {t("sections.privacy.description")}
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-6">
              {(
                t("sections.privacy.options", {
                  returnObjects: true,
                }) as { title: string; description: string }[]
              ).map((option, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 bg-primary-background border border-primary-border"
                >
                  <div className="w-12 h-6 bg-accent-solid rounded-full flex-shrink-0" />
                  <div>
                    <h4 className="font-bold">{option.title}</h4>
                    <p className="text-sm text-primary-foreground/70">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-primary-foreground/70 italic">
              {t("sections.privacy.manage")}
            </p>
          </section>

          {/* Update Information Section */}
          <section className="bg-primary-background-bright border-4 border-primary-border p-8 md:p-12">
            <div className="flex items-start gap-4 mb-8">
              <div className="p-3 bg-accent-solid rounded-lg">
                <Settings className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">
                  {t("sections.updateInfo.title")}
                </h2>
                <p className="text-primary-foreground/70">
                  {t("sections.updateInfo.description")}
                </p>
              </div>
            </div>

            <ul className="space-y-2 text-primary-foreground/80">
              {(
                t("sections.updateInfo.items", {
                  returnObjects: true,
                }) as string[]
              ).map((item, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent-solid rounded-full" />
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Contact Section */}
          <section className="bg-accent-background border-4 border-accent-border p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              {t("contact.title")}
            </h2>
            <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
              {t("contact.description")}
            </p>
            <a
              href={`mailto:${t("contact.email")}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-solid text-white font-bold uppercase tracking-wide hover:bg-accent-solid-bright transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t("contact.email")}
            </a>
          </section>
        </div>
      </div>
      <Footer />
    </Main>
  );
}
