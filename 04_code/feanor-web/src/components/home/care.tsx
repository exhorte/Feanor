import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";
import { cycleCare } from "@/content/contrats";

/**
 * Feanor Care — la maintenance préventive.
 *
 * C'est le seul revenu récurrent du métier, et donc la section qui compte le
 * plus commercialement. Le glissement à opérer dans l'esprit du visiteur :
 * on ne vend pas la réparation de la panne, on vend son absence.
 */
export function Care() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Feanor Care"
            title="Éviter la panne coûte moins cher que la réparer."
            intro="Un climatiseur qui lâche en pleine saison chaude coûte la réparation, l'inconfort, et parfois l'exploitation. Le même appareil suivi deux fois par an coûte une fraction de cela — et dure plusieurs années de plus."
          />

          <div className="mt-8 border-l-2 border-accent bg-surface p-6">
            <p className="text-sm text-muted">
              Sur un parc d&apos;équipements, le vrai calcul n&apos;est pas
              « entretien contre rien ». C&apos;est{" "}
              <span className="text-text">
                entretien contre le coût réel des pannes
              </span>{" "}
              : la réparation, l&apos;arrêt d&apos;activité, et le
              raccourcissement de la durée de vie du matériel.
            </p>
          </div>

          <div className="mt-8">
            <ButtonLink href="/professionnels#contrats">
              Voir les contrats
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>

        {/* Cycle — liste ordonnée, lisible sans image ni schéma lourd */}
        <div className="lg:col-span-7">
          <ol className="grid gap-px border border-line bg-line sm:grid-cols-2">
            {cycleCare.map((etape, i) => (
              <li key={etape.step} className="bg-canvas">
                <Reveal delay={i * 50} className="h-full">
                  <div className="flex h-full gap-4 p-6">
                    <span className="tnum font-display text-sm font-medium text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>
                      <span className="block font-display font-medium">
                        {etape.step}
                      </span>
                      <span className="mt-1 block text-sm text-muted">
                        {etape.detail}
                      </span>
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  );
}
