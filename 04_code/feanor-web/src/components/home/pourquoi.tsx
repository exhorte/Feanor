import { Gauge, Wrench, Eye, RefreshCw } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

const raisons = [
  {
    icon: Gauge,
    title: "Réactivité",
    detail:
      "Une urgence à Dakar est traitée dans la journée. Nous préférons annoncer un créneau que nous tiendrons plutôt que de promettre l'immédiat.",
  },
  {
    icon: Wrench,
    title: "Expertise",
    detail:
      "Trois métiers dans la même équipe. Un climatiseur qui fait disjoncter, une fuite près d'un tableau : un seul interlocuteur, pas trois devis.",
  },
  {
    icon: Eye,
    title: "Transparence",
    detail:
      "Diagnostic mesuré avant le devis, pièces et main-d'œuvre détaillées, aucun supplément sans votre accord écrit.",
  },
  {
    icon: RefreshCw,
    title: "Suivi",
    detail:
      "Un rapport après chaque passage, un historique qui vous appartient, et la date du prochain entretien recommandé.",
  },
];

export function Pourquoi() {
  return (
    <Section surface>
      <SectionHeader
        eyebrow="Pourquoi Feanor"
        title="Le travail fait correctement, expliqué, et suivi."
        intro="Pas le moins cher de Dakar, et nous ne le prétendons pas. Celui chez qui le prix annoncé est le prix facturé, et chez qui vous savez ce qui a été fait sur votre installation."
      />

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {raisons.map((r, i) => (
          <Reveal key={r.title} delay={i * 60}>
            <div className="rule-accent border-l-accent">
              <r.icon className="size-5 text-accent" strokeWidth={1.75} aria-hidden />
              <h3 className="mt-4 font-display text-lg">{r.title}</h3>
              <p className="mt-2 text-sm text-muted">{r.detail}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
