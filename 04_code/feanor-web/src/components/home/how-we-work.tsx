import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { MetierIcon, accent } from "@/components/ui/metier";
import { Reveal } from "@/components/ui/reveal";
import { HoursWidget } from "./hours-widget";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

/* Points forts transverses, tirés de prestations réellement au catalogue
   (voir src/content/services.ts) — un intitulé court par pastille plutôt
   que la phrase complète de la fiche service. */
const complements = [
  "Recherche de fuite",
  "Tableaux électriques",
  "Chambres froides",
  "Chauffe-eau",
  "Contrats multi-techniques",
  "Audit de parc",
];

export function HowWeWork() {
  return (
    <Section surface>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Comment nous travaillons"
            title="Quatre métiers, une équipe organisée."
            intro="Chaque technicien a son métier principal. Ce qui est commun à tous, c'est la méthode — et un planning qui tient."
          />
          <div className="mt-8">
            <ButtonLink href="/contact">
              Demander un devis
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
          </div>
        </div>

        <div className="lg:col-span-5">
          <HoursWidget />
        </div>
      </div>

      {/* Grille des 4 métiers — version condensée ; le détail complet vit
          sur /services et les fiches de chaque métier. */}
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-4">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 50} className="h-full">
            <Link
              href={`/services/${s.slug}`}
              className={cn(
                "group tile flex h-full flex-col p-6 transition-shadow hover:shadow-float",
              )}
            >
              <MetierIcon icon={s.icon} tone={s.accent} />
              <h3 className="mt-4 font-display text-lg">{s.name}</h3>
              <p className="mt-1.5 flex-1 text-sm text-muted">{s.tagline}</p>
              <span
                className={cn(
                  "mt-4 inline-flex items-center gap-1.5 font-display text-sm text-faint transition-colors",
                  accent[s.accent].groupHoverText,
                )}
              >
                Découvrir
                <ArrowRight
                  className="size-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>

      {/* Points forts transverses, en pastilles */}
      <div className="mt-8 flex flex-wrap items-center gap-3">
        <span className="font-display text-xs font-medium uppercase tracking-[0.14em] text-faint">
          Aussi au catalogue
        </span>
        {complements.map((c) => (
          <span
            key={c}
            className="rounded-full border border-line bg-surface px-3.5 py-1.5 text-sm text-muted"
          >
            {c}
          </span>
        ))}
      </div>
    </Section>
  );
}
