export type EtapeParcours = {
  titre: string;
  detail: string;
};

/**
 * Le parcours client canonique, en 4 étapes.
 *
 * Contenu partagé entre la page Particuliers et la section « Notre méthode »
 * de l'accueil — une seule source, pour que le texte ne diverge jamais entre
 * les deux endroits où il apparaît.
 */
export const parcoursClient: EtapeParcours[] = [
  {
    titre: "Vous nous décrivez le problème",
    detail:
      "Par WhatsApp, une photo et deux phrases suffisent souvent. Nous posons trois ou quatre questions pour cadrer et vous dire si un déplacement s'impose.",
  },
  {
    titre: "Nous venons diagnostiquer",
    detail:
      "Sur un créneau convenu. On identifie la cause avant d'annoncer un prix — jamais l'inverse.",
  },
  {
    titre: "Vous validez le devis",
    detail:
      "Pièces et main-d'œuvre détaillées. Rien ne commence avant votre accord, et rien ne s'y ajoute sans un nouvel accord.",
  },
  {
    titre: "Nous intervenons et nous expliquons",
    detail:
      "Essais devant vous, zone remise en état, et un rapport écrit de ce qui a été fait.",
  },
];
