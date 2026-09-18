import type { Realisation } from "./types";

/**
 * Chantiers documentés.
 *
 * ⚠️  RÈGLE DE PUBLICATION — ne pas contourner.
 * Une page « Réalisations » vide, ou garnie d'images de banque, fait plus de
 * dégâts à la confiance que pas de page du tout. Tant que ce tableau contient
 * moins de SEUIL_PUBLICATION entrées avec photos réelles, la page n'apparaît
 * pas dans la navigation et affiche un état d'attente honnête.
 *
 * PROTOCOLE DE CAPTATION (à transmettre aux techniciens) :
 *   1. AVANT   — vue d'ensemble + détail du défaut, avant de toucher à quoi que ce soit
 *   2. PENDANT — une photo du travail en cours, pas posée
 *   3. APRÈS   — même cadrage que la photo « avant ». C'est la comparaison qui convainc.
 *   4. Noter : type de client, lieu, matériel posé, durée réelle
 *   5. Demander l'accord du client pour la publication, et le noter
 */

export const SEUIL_PUBLICATION = 3;

export const realisations: Realisation[] = [
  // Aucune réalisation documentée pour l'instant.
  // Exemple de structure à remplir :
  //
  // {
  //   slug: "climatisation-bureaux-plateau",
  //   titre: "Équipement climatisation — plateau de bureaux",
  //   client: "Nom ou « Groupe X » si confidentiel",
  //   typeClient: "Bureaux",
  //   lieu: "Plateau, Dakar",
  //   service: "Froid & Climatisation + Électricité",
  //   solution: "8 splits muraux, circuits dédiés, tableau divisionnaire",
  //   duree: "3 jours",
  //   resultat: "Plateau de 220 m² équipé, consommation maîtrisée",
  //   photos: [
  //     { src: "/realisations/xxx-avant.avif", alt: "...", legende: "Avant" },
  //   ],
  // },
];

export const realisationsPubliables = realisations.filter(
  (r) => r.photos.length > 0,
);

/** La page n'entre dans la navigation qu'une fois le seuil atteint. */
export const realisationsVisibles =
  realisationsPubliables.length >= SEUIL_PUBLICATION;
