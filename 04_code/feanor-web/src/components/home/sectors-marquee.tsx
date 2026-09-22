import {
  BedDouble,
  UtensilsCrossed,
  Store,
  Briefcase,
  Building,
  Stethoscope,
  Factory,
  type LucideIcon,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { secteurs } from "@/content/secteurs";

const icones: Record<string, LucideIcon> = {
  hotels: BedDouble,
  restaurants: UtensilsCrossed,
  commerces: Store,
  bureaux: Briefcase,
  immeubles: Building,
  "sante-education": Stethoscope,
  industrie: Factory,
};

/**
 * Bande défilante des secteurs desservis.
 *
 * Remplace le carrousel de logos partenaires de la référence : Feanor n'a
 * pas encore de logos clients à afficher honnêtement (aucun accord de
 * publication obtenu), donc la bande porte les secteurs plutôt que des
 * marques. Le motif visuel — défilement horizontal continu — reste le même
 * et pourra accueillir de vrais logos clients au lot 2, sans changer le
 * composant : il suffira d'échanger le contenu de `items`.
 *
 * Défilement en CSS pur (`marquee-track`, voir globals.css) : deux copies de
 * la liste, translation de -50 %, boucle invisible. 0 Ko de JavaScript.
 */
export function SectorsMarquee() {
  const items = [...secteurs, ...secteurs];

  return (
    <section className="border-y border-line bg-surface py-8">
      <Container>
        <p className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
          Nous intervenons pour
        </p>
      </Container>

      <div className="marquee-pause mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
        <div className="marquee-track">
          {items.map((s, i) => {
            const Icon = icones[s.slug] ?? Building;
            return (
              <div
                key={`${s.slug}-${i}`}
                className="flex shrink-0 items-center gap-3 px-8"
              >
                <Icon className="size-5 text-faint" strokeWidth={1.5} aria-hidden />
                <span className="whitespace-nowrap font-display text-sm text-muted">
                  {s.nom}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
