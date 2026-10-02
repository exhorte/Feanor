import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

import { Section, SectionHeader } from "@/components/ui/section";
import { Accordion } from "@/components/ui/accordion";
import { Photo } from "@/components/ui/photo";
import type { PhotoKey, QuestionReponse } from "@/content/types";

/**
 * Bloc FAQ — en-tête et photo à gauche, questions en cartes à droite,
 * comme la colonne « Vos questions les plus fréquentes » de la maquette.
 */
export function FaqSection({
  items,
  eyebrow = "FAQ",
  title = "Vos questions les plus fréquentes.",
  intro,
  lienToutes = false,
  tone = "blanc",
  photo,
}: {
  items: QuestionReponse[];
  eyebrow?: string;
  title?: string;
  intro?: string;
  lienToutes?: boolean;
  tone?: "blanc" | "doux";
  photo?: PhotoKey;
}) {
  return (
    <Section tone={tone}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader eyebrow={eyebrow} title={title} intro={intro} />
          {lienToutes && (
            <Link
              href="/faq"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:underline-offset-4"
            >
              Toutes les questions
              <ArrowRightIcon weight="bold" className="size-4" aria-hidden />
            </Link>
          )}

          {photo && (
            <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden rounded-2xl shadow-float lg:block">
              <Photo name={photo} sizes="(min-width: 1024px) 36vw, 1px" />
            </div>
          )}
        </div>

        <div className="lg:col-span-7">
          <Accordion items={items} premierOuvert />
        </div>
      </div>
    </Section>
  );
}
