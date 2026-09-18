import type { Secteur } from "./types";

/**
 * Secteurs professionnels.
 * Chaque entrée nomme l'enjeu métier réel — pas la prestation.
 * Un directeur d'hôtel n'achète pas « de la climatisation », il achète
 * des chambres qui restent louables.
 */

export const secteurs: Secteur[] = [
  {
    slug: "hotels",
    nom: "Hôtels & résidences",
    enjeu:
      "Une chambre sans climatisation est une chambre invendable, et un avis négatif en ligne qui dure des années.",
    interventions: [
      "Parc de climatisation chambres et parties communes",
      "Production d'eau chaude sanitaire",
      "Maintenance planifiée hors périodes de forte occupation",
      "Astreinte et intervention prioritaire",
      "Réseau électrique et éclairage",
    ],
  },
  {
    slug: "restaurants",
    nom: "Restaurants & cuisines",
    enjeu:
      "Une chambre froide à l'arrêt, c'est un stock perdu en quelques heures et un service annulé le soir même.",
    interventions: [
      "Chambres froides positives et négatives",
      "Vitrines, armoires et meubles réfrigérés",
      "Climatisation de salle",
      "Alimentation électrique des équipements de cuisson et de froid",
      "Évacuations, bacs à graisse, réseaux d'eau",
    ],
  },
  {
    slug: "commerces",
    nom: "Commerces & supérettes",
    enjeu:
      "Le confort en surface de vente fait entrer les clients ; la chaîne du froid protège la marchandise.",
    interventions: [
      "Climatisation de surface de vente",
      "Meubles frigorifiques et centrales de froid",
      "Éclairage et mise en valeur",
      "Tableaux et circuits de distribution",
    ],
  },
  {
    slug: "bureaux",
    nom: "Bureaux & tertiaire",
    enjeu:
      "Une panne technique met un plateau entier à l'arrêt, et le coût réel se compte en heures de travail perdues.",
    interventions: [
      "Climatisation gainable, cassette et VRV",
      "Tableaux, circuits dédiés, onduleurs",
      "Éclairage et éclairage de sécurité",
      "Sanitaires et réseaux d'eau",
      "Maintenance planifiée hors heures ouvrées",
    ],
  },
  {
    slug: "immeubles",
    nom: "Immeubles & copropriétés",
    enjeu:
      "Les équipements communs n'ont pas de propriétaire identifié — ils se dégradent jusqu'à la panne coûteuse.",
    interventions: [
      "Surpression et distribution d'eau",
      "Pompes de relevage",
      "Éclairage et tableaux des parties communes",
      "Climatisation des espaces partagés",
      "Contrat unique pour le syndic",
    ],
  },
  {
    slug: "sante-education",
    nom: "Cliniques, laboratoires & écoles",
    enjeu:
      "Certaines températures et certaines continuités d'alimentation ne sont pas négociables.",
    interventions: [
      "Froid médical et laboratoire, alarmes de température",
      "Climatisation de salles techniques et de soins",
      "Continuité d'alimentation, secours et onduleurs",
      "Réseaux sanitaires et eau chaude",
    ],
  },
  {
    slug: "industrie",
    nom: "Industrie & entrepôts",
    enjeu:
      "Un arrêt de production ou une rupture de chaîne du froid coûte, à l'heure, plusieurs fois le prix du contrat annuel.",
    interventions: [
      "Entrepôts frigorifiques et groupes de production",
      "Armoires, TGBT, départs moteurs",
      "Réseaux d'eau industriels et pompes",
      "Maintenance préventive lourde et suivi de parc",
    ],
  },
];
