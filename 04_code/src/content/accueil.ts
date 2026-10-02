import type { IconName, PhotoKey } from "./types";
import { site } from "./site";

/**
 * Contenu de la page d'accueil.
 *
 * Structure inspirée de la maquette « Voltéo » (05_screenshot/Site entreprise
 * électricité.jpg) : hero à deux colonnes et bandeau d'atouts, quatre
 * prestations, domaines illustrés, bandeau d'appel, à propos, engagements,
 * repères chiffrés, FAQ et contact. Le bandeau « confort thermique » reprend
 * le parti pris d'arktyk.fr : une photo pleine largeur, lumineuse, qui vend
 * le confort plutôt que la machine.
 *
 * Règle conservée : aucun chiffre inventé, aucun témoignage fictif.
 */

export const hero = {
  surtitre: "Électricité & climatisation · Dakar",
  titre: "Vos installations électriques et climatiques,",
  titreAccent: "sous contrôle.",
  intro:
    "Installation, maintenance et dépannage pour les particuliers comme pour les professionnels de Dakar et de sa région. Un diagnostic avant le devis, un prix qui ne bouge pas.",
  photo: "electricienCablage" as PhotoKey,
  badge: "Électriciens et frigoristes, une seule équipe",
};

/** Bandeau d'atouts sous le hero. */
export const atouts: { icon: IconName; titre: string; detail: string }[] = [
  { icon: "chrono", titre: "Intervention rapide", detail: "7j/7 sur urgence à Dakar" },
  { icon: "casque", titre: "Techniciens qualifiés", detail: "Électriciens & frigoristes" },
  { icon: "bouclier", titre: "Installations aux normes", detail: "NS 01-001 · NF C 15-100" },
  { icon: "recu", titre: "Devis gratuit", detail: "Et sans engagement" },
];

/** Les quatre prestations mises en avant. */
export const prestationsPhares: {
  icon: IconName;
  titre: string;
  description: string;
  href: string;
}[] = [
  {
    icon: "eclair",
    titre: "Installation électrique",
    description:
      "Neuf et rénovation : distribution, câblage, tableaux, éclairage. Une installation lisible, dimensionnée pour vos usages.",
    href: "/services/electricite",
  },
  {
    icon: "bouclier",
    titre: "Mise aux normes & sécurité",
    description:
      "Différentiel 30 mA, mise à la terre, circuits dédiés. Préparation au contrôle de conformité COSSUEL.",
    href: "/services/electricite",
  },
  {
    icon: "climatiseur",
    titre: "Installation de climatisation",
    description:
      "Split, multi-split, cassette, gainable ou VRV : puissance calculée, pose soignée, mise en service devant vous.",
    href: "/services/climatisation",
  },
  {
    icon: "cle",
    titre: "Entretien & dépannage",
    description:
      "Nettoyage, recherche de fuite, réparation et contrats de maintenance. Urgences traitées 7j/7.",
    href: "/services/maintenance-depannage",
  },
];

/** Bandeau « confort thermique » — inspiré d'arktyk.fr. */
export const confort = {
  surtitre: "Climatisation",
  titre: "Le confort thermique, toute l'année.",
  texte:
    "À Dakar, un climatiseur tourne presque douze mois sur douze. Bien dimensionné et bien entretenu, il rafraîchit mieux, consomme moins et dure plus longtemps — même face à l'air salin et à la poussière.",
  photo: "climatiseurConfort" as PhotoKey,
  points: [
    {
      icon: "lune" as IconName,
      titre: "Silencieux",
      detail: "Des nuits au calme et des bureaux sereins.",
    },
    {
      icon: "jauge" as IconName,
      titre: "Économe",
      detail: "Technologie Inverter et réglages justes : la facture Senelec suit.",
    },
    {
      icon: "littoral" as IconName,
      titre: "Durable",
      detail: "Un entretien adapté à l'air marin et à la poussière.",
    },
  ],
};

/** Domaines d'intervention illustrés — reprend la grille « Réalisations »
    de la maquette, sans prétendre montrer des chantiers Oralec. */
export const domaines: {
  titre: string;
  detail: string;
  photo: PhotoKey;
  href: string;
}[] = [
  {
    titre: "Villas & appartements",
    detail: "Splits, entretien, mise en sécurité",
    photo: "climatiseurMural",
    href: "/particuliers",
  },
  {
    titre: "Bureaux & immeubles",
    detail: "Climatisation tertiaire, toitures",
    photo: "climatisationToiture",
    href: "/professionnels",
  },
  {
    titre: "Restaurants & commerces",
    detail: "Froid commercial, chambres froides",
    photo: "froidCommercial",
    href: "/professionnels",
  },
  {
    titre: "Sites industriels",
    detail: "Armoires, TGBT, maintenance",
    photo: "technicienneArmoire",
    href: "/professionnels",
  },
];

export const aPropos = {
  surtitre: "À propos",
  titre: "Une entreprise d'électricité et de climatisation engagée.",
  texte:
    "Oralec réunit électriciens et frigoristes dans une même équipe, avec une seule méthode de travail. Notre priorité : des installations sûres, un confort durable, et des clients qui savent exactement ce qu'ils paient.",
  photo: "electricienPortrait" as PhotoKey,
  encart: { titre: "Rapport écrit", detail: "après chaque intervention" },
};

/** Les trois piliers qualité — section « Nos engagements » de la maquette. */
export const qualite: { icon: IconName; titre: string; detail: string }[] = [
  {
    icon: "bouclier",
    titre: "La sécurité avant tout",
    detail:
      "Protection différentielle, mise à la terre, sections de câble : la norme NS 01-001 appliquée sans raccourci.",
  },
  {
    icon: "littoral",
    titre: "Des solutions pensées pour Dakar",
    detail:
      "Air salin, poussière, coupures de courant : matériel, protections et fréquence d'entretien choisis en conséquence.",
  },
  {
    icon: "accord",
    titre: "La transparence à chaque étape",
    detail:
      "Diagnostic avant devis, prix annoncé = prix facturé, rapport écrit après chaque passage.",
  },
];

/**
 * Repères chiffrés.
 * Chaque valeur est dérivée du contenu réel ou d'un engagement déjà tenu
 * ailleurs sur le site — jamais d'« années d'expérience » ou de « projets
 * réalisés » tant qu'ils ne sont pas documentés.
 */
export const reperes: { icon: IconName; valeur: string; label: string }[] = [
  { icon: "sirene", valeur: "7j/7", label: "Urgences prises en charge" },
  {
    icon: "localisation",
    valeur: `${Math.floor((site.zonesDakar.length + site.zonesRegions.length) / 10) * 10}+`,
    label: "Quartiers et villes desservis",
  },
  { icon: "document", valeur: "100 %", label: "Devis avant intervention" },
  { icon: "recu", valeur: "0 F", label: "Devis et diagnostic à distance" },
];
