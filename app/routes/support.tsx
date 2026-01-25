import { useTranslation } from "react-i18next";
import type { Route } from "./+types/support";
import { cn } from "~/lib/utils";
import { Main } from "~/components/main";
import { Footer } from "~/components/footer";
import { Button } from "~/components/ui/button";
import { Card, CardContent } from "~/components/ui/card";
import { Mail, MessageSquare, HelpCircle, Book, Video, Lightbulb, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

/**
 * Support Page - FlowFork Design System
 * Help center with FAQ accordion and resource cards
 */

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

        {/* Contact Section */}
        <section className="max-w-2xl mx-auto mb-16">
          <Card>
            <CardContent className="pt-6">
              <div className="flex items-start gap-4 mb-6">
                <div
                  className={cn(
                    "w-12 h-12 flex-shrink-0",
                    "border border-[var(--color-border)]",
                    "rounded-xl flex items-center justify-center"
                  )}
                >
                  <MessageSquare className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-xl font-normal mb-1">{t("contact.title")}</h2>
                  <p className="text-[var(--color-text-muted)] font-light">
                    {t("contact.description")}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[var(--color-divider)] rounded-[1rem]">
                <div className="flex items-center gap-2 mb-1">
                  <Mail className="w-4 h-4 text-[var(--color-text-muted)]" strokeWidth={1.5} />
                  <span className="text-sm font-normal">{t("contact.email.label")}</span>
                </div>
                <a
                  href={`mailto:${t("contact.email.address")}`}
                  className="text-base font-light hover:underline transition-colors"
                >
                  {t("contact.email.address")}
                </a>
                <p className="text-sm text-[var(--color-text-muted)] font-light mt-2">
                  {t("contact.email.description")}
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* FAQ Section */}
        <section className="max-w-2xl mx-auto mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={cn(
                "w-10 h-10",
                "border border-[var(--color-border)]",
                "rounded-lg flex items-center justify-center"
              )}
            >
              <HelpCircle className="w-5 h-5" strokeWidth={1.5} />
            </div>
            <h2 className="text-2xl font-normal">{t("faq.title")}</h2>
          </div>

          <div className="space-y-2">
            {(t("faq.items", { returnObjects: true }) as { question: string; answer: string }[]).map(
              (item, index) => (
                <FAQItem key={index} question={item.question} answer={item.answer} />
              )
            )}
          </div>
        </section>

        {/* Resources Section */}
        <section className="max-w-3xl mx-auto mb-16">
          <h2 className="text-2xl font-normal mb-6">{t("resources.title")}</h2>

          <div className="grid md:grid-cols-3 gap-4">
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
        <section className="max-w-2xl mx-auto">
          <div className="p-8 bg-[var(--color-divider)] rounded-[1rem] text-center">
            <h2 className="text-xl font-normal mb-3">{t("feedback.title")}</h2>
            <p className="text-[var(--color-text-muted)] font-light mb-6 max-w-md mx-auto">
              {t("feedback.description")}
            </p>
            <Button asChild>
              <a href={`mailto:${t("feedback.email")}`} className="gap-2">
                <Mail className="w-4 h-4" strokeWidth={1.5} />
                {t("feedback.email")}
              </a>
            </Button>
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
    <div
      className={cn(
        "border border-[var(--color-border-light)]",
        "bg-[var(--color-background)]",
        "rounded-[1rem] overflow-hidden"
      )}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "w-full flex items-center justify-between",
          "p-4 text-left",
          "hover:bg-[var(--color-hover-bg)]",
          "transition-button"
        )}
        aria-expanded={isOpen}
      >
        <span className="font-normal pr-4">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 flex-shrink-0 text-[var(--color-text-muted)]" strokeWidth={1.5} />
        ) : (
          <ChevronDown className="w-5 h-5 flex-shrink-0 text-[var(--color-text-muted)]" strokeWidth={1.5} />
        )}
      </button>
      {isOpen && (
        <div className="px-4 pb-4 text-[var(--color-text-muted)] font-light leading-relaxed">
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
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
  title: string;
  description: string;
}) {
  return (
    <Card interactive className="group">
      <CardContent className="pt-6">
        <div
          className={cn(
            "w-10 h-10 mb-4",
            "border border-[var(--color-border)]",
            "rounded-lg flex items-center justify-center",
            "group-hover:border-[var(--color-black)] transition-calm"
          )}
        >
          <Icon className="w-5 h-5" strokeWidth={1.5} />
        </div>
        <h3 className="font-normal text-base mb-1">{title}</h3>
        <p className="text-[var(--color-text-muted)] font-light text-sm">{description}</p>
      </CardContent>
    </Card>
  );
}
