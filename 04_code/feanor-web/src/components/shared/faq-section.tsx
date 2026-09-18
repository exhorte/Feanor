import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import type { QuestionReponse } from "@/content/types";

export function FaqSection({
  items,
  eyebrow = "Questions fréquentes",
  title = "Ce qu'on nous demande le plus souvent.",
  intro,
  lienToutes = false,
  surface = false,
}: {
  items: QuestionReponse[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  lienToutes?: boolean;
  surface?: boolean;
}) {
  return (
    <Section surface={surface}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
          {lienToutes && (
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm text-accent transition-colors hover:text-accent-deep"
            >
              Toutes les questions
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          )}
        </div>

        <div className="lg:col-span-8">
          <Accordion items={items} />
        </div>
      </div>
    </Section>
  );
}
