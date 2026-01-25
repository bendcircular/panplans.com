import { useTranslation } from "react-i18next";
import type { Route } from "./+types/terms";
import { cn } from "~/lib/utils";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Mail, AlertTriangle } from "lucide-react";

/**
 * Terms Page - FlowFork Design System
 * Content page with proper hierarchy and alert states
 */

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
      <article className="pt-28 pb-16 px-6 md:px-8 max-w-2xl mx-auto">
        <header className="mb-10">
          <h1 className="text-3xl md:text-4xl font-normal tracking-tight mb-3">
            {t("title")}
          </h1>
          <p className="text-[var(--color-text-muted)] font-light">
            {t("lastUpdated")}
          </p>
        </header>

        <div className="space-y-8">
          <p className="text-lg font-light text-[var(--color-text-muted)] leading-relaxed">
            {t("intro")}
          </p>

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
            <AlertBox variant="warning">
              {t("sections.healthDisclaimer.content")}
            </AlertBox>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              {(t("sections.healthDisclaimer.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </Section>

          {/* Allergen Disclaimer */}
          <Section title={t("sections.allergenDisclaimer.title")}>
            <AlertBox variant="error">
              {t("sections.allergenDisclaimer.content")}
            </AlertBox>
            <ul className="list-disc pl-6 space-y-2 mt-4">
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
            <Button asChild className="mt-4">
              <a href={`mailto:${t("sections.contact.email")}`} className="gap-2">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                {t("sections.contact.email")}
              </a>
            </Button>
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
    <section className="pb-6 border-b border-[var(--color-divider)] last:border-b-0">
      <h2 className="text-xl font-normal mb-4">{title}</h2>
      <div className="text-[var(--color-text-muted)] font-light space-y-3 leading-relaxed">
        {children}
      </div>
    </section>
  );
}

/**
 * Alert Box - Error states use the only red in the interface
 * Design system: Red accent #DC2626 (only for errors)
 */
function AlertBox({
  variant,
  children,
}: {
  variant: "warning" | "error";
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "p-4 rounded-[1rem] flex items-start gap-3",
        variant === "error" && "bg-[var(--color-error-bg)] border border-[var(--color-error)]/20",
        variant === "warning" && "bg-[var(--color-divider)] border border-[var(--color-border)]"
      )}
    >
      <AlertTriangle
        className={cn(
          "w-5 h-5 flex-shrink-0 mt-0.5",
          variant === "error" && "text-[var(--color-error)]",
          variant === "warning" && "text-[var(--color-text-muted)]"
        )}
        strokeWidth={1.5}
      />
      <p className="font-normal text-sm">{children}</p>
    </div>
  );
}
