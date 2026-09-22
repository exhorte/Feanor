import { Wrench, MapPin, Siren, FileCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { services } from "@/content/services";
import { site } from "@/content/site";

/**
 * Bande de repères chiffrés.
 *
 * Chaque valeur est dérivée du contenu réel (nombre de métiers, nombre de
 * zones listées) ou d'un engagement déjà assumé ailleurs sur le site
 * (« devis avant intervention », « urgences 7j/7 ») — aucun chiffre inventé,
 * contrairement à un « 20+ ans » qui ne serait pas défendable pour une
 * entreprise qui se positionne comme une offre neuve et moderne.
 */
export function StatsBar() {
  const zones = site.zonesDakar.length + site.zonesRegions.length;

  const stats = [
    { icon: Wrench, valeur: `${services.length}`, label: "Corps de métier réunis" },
    { icon: MapPin, valeur: `${zones}+`, label: "Zones desservies" },
    { icon: Siren, valeur: "7j/7", label: "Urgences" },
    { icon: FileCheck, valeur: "100 %", label: "Devis avant intervention" },
  ];

  return (
    <section className="bg-ink py-12 sm:py-14">
      <Container>
        <div className="grid grid-cols-2 gap-y-8 sm:grid-cols-4 sm:gap-y-0">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-3.5 sm:border-l sm:border-white/10 sm:pl-6 sm:first:border-l-0 sm:first:pl-0"
            >
              <s.icon className="size-6 shrink-0 text-accent" strokeWidth={1.5} aria-hidden />
              <span>
                <span className="tnum block font-display text-2xl font-semibold text-on-ink">
                  {s.valeur}
                </span>
                <span className="block text-sm text-on-ink-muted">{s.label}</span>
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
