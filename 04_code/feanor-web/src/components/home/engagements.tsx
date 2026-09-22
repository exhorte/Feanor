import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { site } from "@/content/site";

/**
 * Les quatre engagements.
 *
 * C'est la vraie différenciation sur ce marché : le déficit n'est pas
 * esthétique, il est procédural. Cette section porte à la fois l'ancienne
 * liste « Nos engagements » et l'ancienne section « Pourquoi Feanor » — les
 * deux racontaient la même confiance avec des mots différents (l'une de
 * façon concrète, l'autre en qualités abstraites) ; on garde la version
 * concrète et on ne la répète pas deux fois sur la même page.
 */
export function Engagements() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Pourquoi Feanor"
        title="Le travail fait correctement, expliqué, et suivi."
        intro="Pas le moins cher de Dakar, et nous ne le prétendons pas. Celui chez qui le prix annoncé est le prix facturé."
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {site.engagements.map((e, i) => (
          <Reveal key={e.title} delay={i * 60} className="h-full">
            <div className="tile flex h-full flex-col p-6">
              <span className="inline-flex size-9 items-center justify-center rounded-full bg-accent-soft">
                <Check className="size-4 text-accent" strokeWidth={2.5} aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-base font-medium">{e.title}</h3>
              <p className="mt-2 text-sm text-muted">{e.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
