import { Home, Building2, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { Reveal } from "@/components/ui/reveal";

/**
 * Bifurcation B2C / B2B.
 *
 * Deux acheteurs, deux urgences, deux cycles de décision. Un particulier a une
 * fuite maintenant ; un directeur technique budgétise un contrat pour l'exercice
 * suivant. Les faire cohabiter sur le même parcours, c'est perdre les deux.
 */
export function Segments() {
  return (
    <Section>
      <div className="grid gap-5 md:grid-cols-2">
        <Reveal>
          <div className="tile flex h-full flex-col p-8 sm:p-10">
            <Home className="size-6 text-accent" strokeWidth={1.75} aria-hidden />
            <h2 className="mt-5 text-2xl">Vous êtes un particulier</h2>
            <p className="mt-3 text-muted">
              Un problème chez vous, on s&apos;en occupe. Diagnostic, devis clair,
              intervention propre — et on vous explique ce qui s&apos;est passé.
            </p>

            <ul className="mt-6 flex-1 space-y-2.5 text-sm text-muted">
              {[
                "Dépannage climatisation, électricité, plomberie",
                "Installation et remplacement d'équipement",
                "Entretien périodique",
                "Devis gratuit",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink href="/particuliers" variant="outline">
                Espace particuliers
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="tile flex h-full flex-col p-8 sm:p-10">
            <Building2 className="size-6 text-accent" strokeWidth={1.75} aria-hidden />
            <h2 className="mt-5 text-2xl">Vous êtes une entreprise</h2>
            <p className="mt-3 text-muted">
              Gardez vos installations opérationnelles. Un seul interlocuteur pour
              le froid, l&apos;électricité et la plomberie, avec des délais écrits
              au contrat.
            </p>

            <ul className="mt-6 flex-1 space-y-2.5 text-sm text-muted">
              {[
                "Contrats de maintenance multi-techniques",
                "Audit et inventaire de parc",
                "Intervention prioritaire et astreinte",
                "Rapports et suivi budgétaire",
              ].map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <ButtonLink href="/professionnels">
                Feanor Business
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
