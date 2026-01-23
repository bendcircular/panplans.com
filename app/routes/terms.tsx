import { useTranslation } from "react-i18next";
import type { Route } from "./+types/terms";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import { Mail, AlertTriangle } from "lucide-react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Terms of Service - PanPlans" },
    {
      name: "description",
      content: "Read the terms and conditions for using PanPlans.",
    },
  ];
}

export default function Terms() {
  const { t } = useTranslation("terms");

  return (
    <Main>
      <article className="pt-32 pb-20 px-6 md:px-12 max-w-4xl mx-auto">
        <header className="mb-12">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-primary-foreground/60 font-medium">
            {t("lastUpdated")}
          </p>
        </header>

        <div className="prose prose-lg max-w-none">
          <p className="text-lg text-primary-foreground/80 mb-8">{t("intro")}</p>

          {/* Acceptance of Terms */}
          <Section title={t("sections.acceptance.title")}>
            <p>{t("sections.acceptance.content")}</p>
          </Section>

          {/* Service Description */}
          <Section title={t("sections.description.title")}>
            <p>{t("sections.description.content")}</p>
          </Section>

          {/* User Accounts */}
          <Section title={t("sections.accounts.title")}>
            <p>{t("sections.accounts.content")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              {(t("sections.accounts.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </Section>

          {/* Acceptable Use */}
          <Section title={t("sections.acceptableUse.title")}>
            <p>{t("sections.acceptableUse.content")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              {(t("sections.acceptableUse.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </Section>

          {/* Health Disclaimer */}
          <Section title={t("sections.healthDisclaimer.title")}>
            <div className="bg-amber-50 dark:bg-amber-950/30 border-l-4 border-amber-500 p-4 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                <p className="font-medium text-amber-800 dark:text-amber-200">
                  {t("sections.healthDisclaimer.content")}
                </p>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {(t("sections.healthDisclaimer.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </Section>

          {/* Allergen Disclaimer */}
          <Section title={t("sections.allergenDisclaimer.title")}>
            <div className="bg-red-50 dark:bg-red-950/30 border-l-4 border-red-500 p-4 mb-4">
              <div className="flex items-start gap-3">
                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0 mt-0.5" />
                <p className="font-medium text-red-800 dark:text-red-200">
                  {t("sections.allergenDisclaimer.content")}
                </p>
              </div>
            </div>
            <ul className="list-disc pl-6 space-y-2">
              {(t("sections.allergenDisclaimer.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </Section>

          {/* Intellectual Property */}
          <Section title={t("sections.intellectualProperty.title")}>
            <p>{t("sections.intellectualProperty.content")}</p>
          </Section>

          {/* User Content */}
          <Section title={t("sections.userContent.title")}>
            <p>{t("sections.userContent.content")}</p>
          </Section>

          {/* Account Termination */}
          <Section title={t("sections.termination.title")}>
            <p>{t("sections.termination.content")}</p>
          </Section>

          {/* Limitation of Liability */}
          <Section title={t("sections.liability.title")}>
            <p>{t("sections.liability.content")}</p>
          </Section>

          {/* Disclaimer of Warranties */}
          <Section title={t("sections.warranty.title")}>
            <p>{t("sections.warranty.content")}</p>
          </Section>

          {/* Changes to Terms */}
          <Section title={t("sections.changes.title")}>
            <p>{t("sections.changes.content")}</p>
          </Section>

          {/* Governing Law */}
          <Section title={t("sections.governing.title")}>
            <p>{t("sections.governing.content")}</p>
          </Section>

          {/* Contact Us */}
          <Section title={t("sections.contact.title")}>
            <p>{t("sections.contact.content")}</p>
            <a
              href={`mailto:${t("sections.contact.email")}`}
              className="inline-flex items-center gap-2 mt-4 px-6 py-3 bg-accent-solid text-white font-bold hover:bg-accent-solid-bright transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t("sections.contact.email")}
            </a>
          </Section>
        </div>
      </article>
      <Footer />
    </Main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mb-10">
      <h2 className="text-2xl font-bold mb-4 text-primary-foreground-bright">{title}</h2>
      <div className="text-primary-foreground/80 space-y-4">{children}</div>
    </section>
  );
}
