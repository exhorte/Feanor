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
    icon: "lit",
    enjeu:
      "Une chambre sans climatisation est une chambre invendable, et un avis négatif en ligne qui dure des années.",
    interventions: [
      "Parc de climatisation chambres et parties communes",
      "Maintenance planifiée hors périodes de forte occupation",
      "Astreinte et intervention prioritaire",
      "Réseau électrique, éclairage et secours",
    ],
  },
  {
    slug: "restaurants",
    nom: "Restaurants & cuisines",
    icon: "couverts",
    enjeu:
      "Une chambre froide à l'arrêt, c'est un stock perdu en quelques heures et un service annulé le soir même.",
    interventions: [
      "Chambres froides positives et négatives",
      "Vitrines, armoires et meubles réfrigérés",
      "Climatisation de salle",
      "Alimentation électrique des équipements de cuisson et de froid",
    ],
  },
  {
    slug: "commerces",
    nom: "Commerces & supérettes",
    icon: "boutique",
    enjeu:
      "Le confort en surface de vente fait entrer les clients ; la chaîne du froid protège la marchandise.",
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
    icon: "bureaux",
    enjeu:
      "Une panne technique met un plateau entier à l'arrêt, et le coût réel se compte en heures de travail perdues.",
    interventions: [
      "Climatisation gainable, cassette et VRV",
      "Tableaux, circuits dédiés, onduleurs",
      "Éclairage et éclairage de sécurité",
      "Maintenance planifiée hors heures ouvrées",
    ],
  },
  {
    slug: "immeubles",
    nom: "Immeubles & copropriétés",
    icon: "immeuble",
    enjeu:
      "Les équipements communs n'ont pas de propriétaire identifié — ils se dégradent jusqu'à la panne coûteuse.",
    interventions: [
      "Éclairage et tableaux des parties communes",
      "Climatisation des espaces partagés",
      "Mise en sécurité électrique des colonnes et gaines",
      "Contrat unique pour le syndic",
    ],
  },
  {
    slug: "sante-education",
    nom: "Cliniques, laboratoires & écoles",
    icon: "sante",
    enjeu:
      "Certaines températures et certaines continuités d'alimentation ne sont pas négociables.",
    interventions: [
      "Froid médical et laboratoire, alarmes de température",
      "Climatisation de salles techniques et de soins",
      "Continuité d'alimentation, secours et onduleurs",
    ],
  },
  {
    slug: "industrie",
    nom: "Industrie & entrepôts",
    icon: "usine",
    enjeu:
      "Un arrêt de production ou une rupture de chaîne du froid coûte, à l'heure, plusieurs fois le prix du contrat annuel.",
    interventions: [
      "Entrepôts frigorifiques et groupes de production",
      "Armoires, TGBT, départs moteurs",
      "Maintenance préventive lourde et suivi de parc",
    ],
  },
];
