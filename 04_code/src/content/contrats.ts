import type { Contrat } from "./types";

/**
 * Contrats de maintenance — ORALEC CARE.
 *
 * Décision commerciale assumée : pas de prix affiché.
 * Un tarif de contrat dépend du nombre d'équipements, de leur type, de leur âge,
 * de l'intensité d'usage et du délai d'intervention attendu. Un prix affiché
 * serait faux dans neuf cas sur dix, et ferait perdre les gros contrats.
 */

export const contrats: Contrat[] = [
  {
    tier: "Essentiel",
    pitch: "L'entretien planifié, pour ne plus y penser.",
    cible: "Villas, petits bureaux, commerces de proximité — jusqu'à ~10 équipements.",
    inclus: [
      "2 visites de maintenance préventive par an",
      "Nettoyage complet et contrôle de fonctionnement",
      "Relevé des pressions, intensités et températures",
      "Rapport écrit après chaque passage",
      "Tarif préférentiel sur les dépannages",
      "Conseil à distance par WhatsApp",
    ],
    exclus: ["Déplacement de dépannage", "Pièces de rechange"],
  },
  {
    tier: "Business",
    pitch: "L'entretien, plus le dépannage quand ça arrive quand même.",
    cible:
      "Restaurants, hôtels de taille moyenne, plateaux de bureaux, supérettes.",
    featured: true,
    inclus: [
      "3 à 4 visites préventives par an, selon l'usage",
      "Tout le contenu du palier Essentiel",
      "Déplacements de dépannage inclus",
      "Délai d'intervention garanti sous 24 h ouvrées",
      "Inventaire et historique des équipements tenus à jour",
      "Multi-technique : climatisation, froid et électricité sur le même contrat",
      "Synthèse budgétaire semestrielle",
    ],
    exclus: ["Pièces de rechange (tarif remisé)"],
  },
  {
    tier: "Premium",
    pitch: "Pour les sites qui ne peuvent pas s'arrêter.",
    cible:
      "Hôtels, cliniques, sites industriels, entrepôts frigorifiques, data rooms.",
    inclus: [
      "Planning de maintenance sur mesure",
      "Tout le contenu du palier Business",
      "Priorité absolue d'intervention",
      "Délai garanti sous 4 h sur les équipements critiques",
      "Astreinte 7j/7, y compris jours fériés",
      "Pièces d'usure courantes incluses",
      "Audit annuel du parc et plan d'investissement chiffré",
      "Interlocuteur technique dédié",
    ],
  },
];

/** Cycle de la maintenance préventive — schéma « Oralec Care ». */
export const cycleCare = [
  {
    step: "Inventaire",
    detail: "Chaque équipement identifié, localisé, fiché.",
  },
  {
    step: "Planification",
    detail: "Un calendrier de passages, arrêté avec vous.",
  },
  {
    step: "Inspection",
    detail: "Contrôle mesuré, pas visuel.",
  },
  {
    step: "Entretien",
    detail: "Nettoyage, réglage, remplacement des pièces d'usure.",
  },
  {
    step: "Détection",
    detail: "Les dérives relevées avant qu'elles ne deviennent des pannes.",
  },
  {
    step: "Rapport",
    detail: "Écrit, daté, archivé. Votre historique vous appartient.",
  },
  {
    step: "Recommandations",
    detail: "Ce qu'il faut budgéter, et quand.",
  },
];
