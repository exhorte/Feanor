/**
 * Configuration centrale de l'entreprise.
 *
 * ⚠️  VALEURS À REMPLACER AVANT MISE EN LIGNE
 * Les numéros, e-mail, adresse, NINEA et RC ci-dessous sont des placeholders.
 * Tout le site lit ce fichier : une seule modification suffit pour tout mettre à jour.
 */

export const site = {
  name: "Oralec",
  legalName: "Oralec SARL", // ⚠️ raison sociale exacte à confirmer
  tagline: "Vos installations, sous contrôle.",
  descriptor: "Électricité & Climatisation",
  metiers: "Électricité · Climatisation · Froid",

  url: "https://oralec.sn", // ⚠️ domaine à réserver

  description:
    "Oralec installe, entretient et dépanne vos installations électriques et vos climatiseurs à Dakar et dans tout le Sénégal. Diagnostic avant devis, prix annoncé = prix facturé, rapport écrit après chaque intervention.",

  /* -------------------------------------------------- Contact */
  // ⚠️ PLACEHOLDERS — remplacer par les vrais numéros Oralec
  phone: "+221770000000",
  phoneDisplay: "77 000 00 00",
  phoneUrgence: "+221780000000",
  phoneUrgenceDisplay: "78 000 00 00",
  whatsapp: "221770000000", // format international sans « + » pour wa.me
  email: "contact@oralec.sn",
  emailDevis: "devis@oralec.sn",

  /* -------------------------------------------------- Adresse */
  address: {
    street: "Rue à compléter", // ⚠️
    district: "Dakar",
    city: "Dakar",
    region: "Dakar",
    country: "SN",
    countryName: "Sénégal",
    // Coordonnées approximatives du centre de Dakar — à préciser
    lat: 14.7167,
    lng: -17.4677,
  },

  /* -------------------------------------------------- Légal */
  legal: {
    ninea: "À compléter", // ⚠️ identifiant fiscal sénégalais — élément de confiance majeur
    rc: "À compléter", // ⚠️ registre du commerce
    forme: "SARL",
  },

  /* -------------------------------------------------- Horaires */
  hours: {
    semaine: "Lundi – Vendredi · 8h00 – 18h30",
    samedi: "Samedi · 8h00 – 14h00",
    urgence: "Urgences · 7j/7",
  },

  /* -------------------------------------------------- Engagements
     Les 4 promesses procédurales. C'est la vraie différenciation :
     le marché a un déficit de confiance, pas un déficit de design. */
  engagements: [
    {
      title: "Diagnostic avant devis",
      detail:
        "On identifie la panne avant d'annoncer un prix. Jamais l'inverse.",
      icon: "loupe",
    },
    {
      title: "Prix annoncé = prix facturé",
      detail:
        "Le devis validé fait foi. Tout supplément est validé avec vous avant exécution.",
      icon: "recu",
    },
    {
      title: "Rapport écrit après intervention",
      detail:
        "Ce qui a été fait, ce qui a été remplacé, ce qu'il faudra surveiller.",
      icon: "document",
    },
    {
      title: "Garantie sur la main-d'œuvre",
      detail:
        "Si la panne revient sur ce que nous avons traité, nous revenons sans facturer.",
      icon: "sceau",
    },
  ],

  /* -------------------------------------------------- Zones d'intervention */
  zonesDakar: [
    "Plateau",
    "Almadies",
    "Ngor",
    "Ouakam",
    "Mermoz",
    "Sacré-Cœur",
    "Point E",
    "Fann",
    "Médina",
    "Yoff",
    "Parcelles Assainies",
    "Grand Yoff",
    "Liberté",
    "HLM",
    "Pikine",
    "Guédiawaye",
    "Rufisque",
    "Diamniadio",
  ],

  zonesRegions: ["Thiès", "Saly", "Mbour", "Somone", "Saint-Louis"],
} as const;

export type Site = typeof site;

/** Zones proposées dans les formulaires de demande. */
export const zonesIntervention: readonly string[] = [
  ...site.zonesDakar,
  ...site.zonesRegions,
  "Autre / à préciser",
];
