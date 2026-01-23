import { useTranslation } from "react-i18next";
import type { Route } from "./+types/support";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import { Mail, MessageSquare, HelpCircle, Book, Video, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Support - PanPlans" },
    {
      name: "description",
      content: "Get help and support for PanPlans.",
    },
  ];
}

export default function Support() {
  const { t } = useTranslation("support");

  return (
    <Main>
      <div className="pt-32 pb-20 px-6 md:px-12">
        {/* Hero Section */}
        <header className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-primary-foreground/70">
            {t("subtitle")}
          </p>
        </header>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="bg-primary-background-bright border-4 border-primary-border p-8 md:p-12">
            <div className="flex items-start gap-4 mb-6">
              <div className="p-3 bg-accent-solid rounded-lg">
                <MessageSquare className="w-6 h-6 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-2">{t("contact.title")}</h2>
                <p className="text-primary-foreground/70">{t("contact.description")}</p>
              </div>
            </div>

            <div className="bg-primary-background p-6 border border-primary-border">
              <div className="flex items-center gap-3 mb-2">
                <Mail className="w-5 h-5 text-accent-foreground" />
                <span className="font-bold">{t("contact.email.label")}</span>
              </div>
              <a
                href={`mailto:${t("contact.email.address")}`}
                className="text-lg font-mono text-accent-foreground hover:text-accent-foreground-bright transition-colors"
              >
                {t("contact.email.address")}
              </a>
              <p className="text-sm text-primary-foreground/60 mt-2">
                {t("contact.email.description")}
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <div className="flex items-center gap-4 mb-8">
            <div className="p-3 bg-accent-solid rounded-lg">
              <HelpCircle className="w-6 h-6 text-white" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold">{t("faq.title")}</h2>
          </div>

          <div className="space-y-4">
            {(t("faq.items", { returnObjects: true }) as { question: string; answer: string }[]).map(
              (item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              )
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="max-w-4xl mx-auto mb-20">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">{t("resources.title")}</h2>

          <div className="grid md:grid-cols-3 gap-6">
            {(t("resources.items", { returnObjects: true }) as { title: string; description: string }[]).map(
              (item, index) => (
                <ResourceCard
                  key={index}
                  icon={[Book, Video, Lightbulb][index]}
                  title={item.title}
                  description={item.description}
                />
              )
            )}
          </div>
        </section>

        {/* Feedback Section */}
        <section className="max-w-4xl mx-auto">
          <div className="bg-accent-background border-4 border-accent-border p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">{t("feedback.title")}</h2>
            <p className="text-primary-foreground/70 mb-6 max-w-xl mx-auto">
              {t("feedback.description")}
            </p>
            <a
              href={`mailto:${t("feedback.email")}`}
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent-solid text-white font-bold uppercase tracking-wide hover:bg-accent-solid-bright transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t("feedback.email")}
            </a>
          </div>
        </section>
      </div>
      <Footer />
    </Main>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-primary-border bg-primary-background-bright">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-primary-interactive transition-colors"
      >
        <span className="font-bold pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0 text-accent-foreground" />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0 text-accent-foreground" />
        )}
      </button>
      {isOpen && (
        <div className="px-6 pb-6 text-primary-foreground/80">
          {answer}
        </div>
      )}
    </div>
  );
}

function ResourceCard({
  icon: Icon,
  title,
  description,
}: {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
}) {
  return (
    <div className="p-6 bg-primary-background-bright border border-primary-border hover:border-accent-border transition-colors group">
      <div className="p-3 bg-primary-interactive inline-block rounded-lg mb-4 group-hover:bg-accent-interactive transition-colors">
        <Icon className="w-6 h-6" />
      </div>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-primary-foreground/70 text-sm">{description}</p>
    </div>
  );
}
