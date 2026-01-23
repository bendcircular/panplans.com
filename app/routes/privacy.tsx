import { useTranslation } from "react-i18next";
import type { Route } from "./+types/privacy";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import { Mail } from "lucide-react";

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
            <div className="mt-4 space-y-4">
              <div className="bg-primary-background-bright p-4 border-l-4 border-accent-solid">
                <h4 className="font-bold">{t("sections.thirdParty.services.clerk.name")}</h4>
                <p className="text-primary-foreground/70">
                  {t("sections.thirdParty.services.clerk.description")}
                </p>
              </div>
              <div className="bg-primary-background-bright p-4 border-l-4 border-accent-solid">
                <h4 className="font-bold">{t("sections.thirdParty.services.supabase.name")}</h4>
                <p className="text-primary-foreground/70">
                  {t("sections.thirdParty.services.supabase.description")}
                </p>
              </div>
            </div>
            <p className="mt-4 text-primary-foreground/70 italic">{t("sections.thirdParty.note")}</p>
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

            <div className="mt-6 space-y-6">
              {/* GDPR */}
              <div className="bg-primary-background-bright p-6 border border-primary-border">
                <h4 className="font-bold text-lg mb-4">{t("sections.rights.gdpr.title")}</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {(t("sections.rights.gdpr.items", { returnObjects: true }) as string[]).map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>

              {/* CCPA */}
              <div className="bg-primary-background-bright p-6 border border-primary-border">
                <h4 className="font-bold text-lg mb-4">{t("sections.rights.ccpa.title")}</h4>
                <ul className="list-disc pl-6 space-y-2">
                  {(t("sections.rights.ccpa.items", { returnObjects: true }) as string[]).map(
                    (item, index) => (
                      <li key={index}>{item}</li>
                    )
                  )}
                </ul>
              </div>
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
