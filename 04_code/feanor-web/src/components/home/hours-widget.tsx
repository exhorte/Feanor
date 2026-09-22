"use client";

import { useSyncExternalStore } from "react";
import { Clock } from "lucide-react";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

/** Isole la partie horaire d'une chaîne « Jour(s) · horaire ». */
function heureSeule(valeur: string): string {
  return valeur.split("· ")[1] ?? valeur;
}

/* `useSyncExternalStore` plutôt qu'un `useEffect` + `setState` : c'est le
   mécanisme prévu par React pour une valeur qui diffère entre le rendu
   serveur et le client (ici, le jour de la semaine). Le serveur n'a pas de
   « aujourd'hui » à lui — `getServerSnapshot` renvoie -1 (aucun jour mis en
   avant), et le client corrige au premier rendu, sans les rendus en cascade
   qu'un `useEffect(() => setState(...), [])` provoquerait. Le jour ne change
   pas pendant qu'un onglet reste ouvert : pas d'abonnement à maintenir. */
function subscribe() {
  return () => {};
}
function getSnapshot() {
  return new Date().getDay();
}
function getServerSnapshot() {
  return -1;
}

/**
 * Carte horaires, avec le jour courant repéré.
 *
 * Le site est statique (SSG) : « aujourd'hui » ne peut pas être calculé au
 * build sans devenir faux dès le lendemain, d'où ce composant client minimal.
 *
 * On s'arrête au jour de la semaine, jamais à l'heure précise : parser
 * « 8h00 – 18h30 » pour affirmer « ouvert maintenant » à la minute près
 * serait fragile et pourrait afficher un statut faux en cas de fermeture
 * exceptionnelle. Le jour suffit à être utile sans sur-promettre.
 */
export function HoursWidget() {
  const jour = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const rows = [
    {
      label: "Lundi – Vendredi",
      value: heureSeule(site.hours.semaine),
      active: jour >= 1 && jour <= 5,
    },
    {
      label: "Samedi",
      value: heureSeule(site.hours.samedi),
      active: jour === 6,
    },
    { label: "Dimanche", value: "Fermé", active: jour === 0 },
  ];

  return (
    <div className="tile-float p-6 sm:p-7">
      <div className="flex items-center gap-2.5">
        <Clock className="size-4 text-accent" strokeWidth={1.75} aria-hidden />
        <span className="font-display text-xs font-medium uppercase tracking-[0.14em] text-faint">
          Horaires
        </span>
      </div>

      <ul className="mt-5 space-y-3">
        {rows.map((r) => (
          <li
            key={r.label}
            className={cn(
              "flex items-center justify-between gap-4 text-sm",
              r.active ? "text-text" : "text-muted",
            )}
          >
            <span className="flex items-center gap-2 font-display">
              {r.active && (
                <span className="size-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
              )}
              {r.label}
            </span>
            <span className="tnum">{r.value}</span>
          </li>
        ))}
      </ul>

      <div className="mt-5 border-t border-line pt-4">
        <p className="text-xs text-urgence-text">{site.hours.urgence}</p>
      </div>
    </div>
  );
}
