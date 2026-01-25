import { useTranslation } from "react-i18next";
import type { Route } from "./+types/privacy";
import { cn } from "~/lib/utils";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Mail } from "lucide-react";

/**
 * Privacy Page - FlowFork Design System
 * Content page with readable typography and proper hierarchy
 */

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Privacy Policy - PanPlans" },
    {
      name: "description",
      content: "Learn how PanPlans collects, uses, and protects your personal data.",
    },
  ];
}

export default function Privacy() {
  const { t } = useTranslation("privacy");

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

          {/* Information We Collect */}
          <Section title={t("sections.collection.title")}>
            <p>{t("sections.collection.content")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              {(t("sections.collection.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </Section>

          {/* How We Use Your Information */}
          <Section title={t("sections.usage.title")}>
            <p>{t("sections.usage.content")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              {(t("sections.usage.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </Section>

          {/* Third-Party Services */}
          <Section title={t("sections.thirdParty.title")}>
            <p>{t("sections.thirdParty.content")}</p>
            <div className="mt-4 space-y-3">
              <InfoCard title={t("sections.thirdParty.services.clerk.name")}>
                {t("sections.thirdParty.services.clerk.description")}
              </InfoCard>
              <InfoCard title={t("sections.thirdParty.services.supabase.name")}>
                {t("sections.thirdParty.services.supabase.description")}
              </InfoCard>
            </div>
            <p className="mt-4 text-[var(--color-text-muted)] italic text-sm">
              {t("sections.thirdParty.note")}
            </p>
          </Section>

          {/* Data Sharing */}
          <Section title={t("sections.sharing.title")}>
            <p>{t("sections.sharing.content")}</p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              {(t("sections.sharing.items", { returnObjects: true }) as string[]).map(
                (item, index) => (
                  <li key={index}>{item}</li>
                )
              )}
            </ul>
          </Section>

          {/* Data Security */}
          <Section title={t("sections.security.title")}>
            <p>{t("sections.security.content")}</p>
          </Section>

          {/* Data Retention */}
          <Section title={t("sections.retention.title")}>
            <p>{t("sections.retention.content")}</p>
          </Section>

          {/* Your Rights */}
          <Section title={t("sections.rights.title")}>
            <p>{t("sections.rights.content")}</p>

            <div className="mt-6 space-y-4">
              {/* GDPR */}
              <InfoCard title={t("sections.rights.gdpr.title")}>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  {(t("sections.rights.gdpr.items", { returnObjects: true }) as string[]).map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </InfoCard>

              {/* CCPA */}
              <InfoCard title={t("sections.rights.ccpa.title")}>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  {(t("sections.rights.ccpa.items", { returnObjects: true }) as string[]).map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </InfoCard>
            </div>
          </Section>

          {/* Children's Privacy */}
          <Section title={t("sections.children.title")}>
            <p>{t("sections.children.content")}</p>
          </Section>

          {/* Changes to This Policy */}
          <Section title={t("sections.changes.title")}>
            <p>{t("sections.changes.content")}</p>
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

function InfoCard({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "p-4 rounded-[1rem]",
        "bg-[var(--color-divider)]",
        "border border-[var(--color-border-light)]"
      )}
    >
      <h4 className="font-normal text-base mb-1">{title}</h4>
      <div className="text-[var(--color-text-muted)] font-light text-sm">
        {children}
      </div>
    </div>
  );
}
