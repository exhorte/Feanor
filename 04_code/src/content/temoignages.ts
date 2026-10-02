import type { Temoignage } from "./types";

/**
 * Avis clients.
 *
 * ⚠️  RÈGLE DE PUBLICATION — même logique que les réalisations.
 * Un témoignage inventé est une publicité trompeuse, et il se repère : prénoms
 * génériques, phrases interchangeables, aucune source. Tant que ce tableau
 * contient moins de SEUIL_TEMOIGNAGES avis réels, la section « Ils nous font
 * confiance » ne s'affiche pas.
 *
 * Où les recueillir : avis Google (fiche Google Business Profile), messages
 * WhatsApp de clients — toujours avec leur accord écrit pour la publication.
 *
 * Exemple de structure :
 * {
 *   auteur: "Aminata D.",
 *   role: "Particulier, Mermoz",
 *   texte: "…",
 *   note: 5,
 *   source: "Avis Google, mars 2027",
 * },
 */

export const SEUIL_TEMOIGNAGES = 3;

export const temoignages: Temoignage[] = [];

export const temoignagesVisibles = temoignages.length >= SEUIL_TEMOIGNAGES;
