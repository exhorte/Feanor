"use client";

import { useSyncExternalStore } from "react";
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
   avant), et le client corrige au premier rendu. Le jour ne change pas
   pendant qu'un onglet reste ouvert : pas d'abonnement à maintenir. */
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
 * Horaires, avec le jour courant repéré.
 *
 * On s'arrête au jour de la semaine, jamais à l'heure précise : affirmer
 * « ouvert maintenant » à la minute près serait fragile, et faux en cas de
 * fermeture exceptionnelle. Le jour suffit à être utile sans sur-promettre.
 */
export function Horaires({ className }: { className?: string }) {
  const jour = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const lignes = [
    { label: "Lundi – Vendredi", valeur: heureSeule(site.hours.semaine), actif: jour >= 1 && jour <= 5 },
    { label: "Samedi", valeur: heureSeule(site.hours.samedi), actif: jour === 6 },
    { label: "Dimanche", valeur: "Fermé", actif: jour === 0 },
  ];

  return (
    <div className={className}>
      <ul className="space-y-2 text-sm">
        {lignes.map((l) => (
          <li
            key={l.label}
            className={cn(
              "flex items-center justify-between gap-4",
              l.actif ? "font-semibold text-foreground" : "text-muted-foreground",
            )}
          >
            <span className="flex items-center gap-2">
              {l.actif && <span className="size-1.5 shrink-0 rounded-full bg-primary" aria-hidden />}
              {l.label}
              {l.actif && <span className="sr-only">(aujourd&apos;hui)</span>}
            </span>
            <span className="tnum">{l.valeur}</span>
          </li>
        ))}
      </ul>
      <p className="mt-3 border-t border-border pt-3 text-sm font-semibold text-primary">
        {site.hours.urgence}
      </p>
    </div>
  );
}
