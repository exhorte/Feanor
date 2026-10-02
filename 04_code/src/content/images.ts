import type { Photo, PhotoKey } from "./types";

/**
 * Photothèque du site.
 *
 * Une seule source pour toutes les images : remplacer une photo de banque par
 * une vraie photo de chantier Oralec se fait ici, sans toucher aux pages.
 *
 * LICENCES
 * — Unsplash (https://unsplash.com/license) et Pexels (https://www.pexels.com/license/) :
 *   usage commercial gratuit, sans attribution obligatoire. Les crédits sont
 *   tout de même cités en mentions légales, par correction envers les auteurs.
 * — « Fournie par Oralec » : images déposées dans 05_screenshot. Leurs droits
 *   d'utilisation sont à confirmer avant la mise en ligne (voir README).
 *
 * HÉBERGEMENT
 * Les photos Unsplash et Pexels sont servies par leur CDN, à travers
 * l'optimiseur d'images de Next.js (redimensionnement + AVIF/WebP) : le
 * visiteur ne télécharge jamais l'original. La requête de chaque URL est
 * figée et autorisée dans `next.config.ts` — ne pas la modifier ici sans
 * mettre à jour `remotePatterns`.
 *
 * Les personnes photographiées sont des modèles de banque d'images : aucune
 * légende ne doit les présenter comme des membres de l'équipe Oralec.
 */

const unsplash = (id: string) => `https://images.unsplash.com/${id}?w=2400&q=80`;

const pexels = (id: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=2400`;

const LICENCE_UNSPLASH = "Licence Unsplash — usage commercial libre";
const LICENCE_PEXELS = "Licence Pexels — usage commercial libre";
const LICENCE_A_CONFIRMER = "Droits d'utilisation à confirmer avant mise en ligne";

export const photos: Record<PhotoKey, Photo> = {
  /* ---------------------------------------------------------- Électricité */
  electricienCablage: {
    src: unsplash("photo-1621905251189-08b45d6a269e"),
    width: 2400,
    height: 1602,
    alt: "Électricien en casque de chantier raccordant les câbles d'un coffret électrique",
    focus: "38% 30%",
    credit: {
      auteur: "Emmanuel Ikwuegbu",
      source: "Unsplash",
      url: "https://unsplash.com/photos/_2AlIm-F6pw",
    },
    licence: LICENCE_UNSPLASH,
  },
  electricienCoffret: {
    src: unsplash("photo-1621905251918-48416bd8575a"),
    width: 2400,
    height: 1602,
    alt: "Électricien testant un compteur et son coffret de protection, pince à la main",
    focus: "45% 30%",
    credit: {
      auteur: "Emmanuel Ikwuegbu",
      source: "Unsplash",
      url: "https://unsplash.com/photos/-0-kl1BjvFc",
    },
    licence: LICENCE_UNSPLASH,
  },
  electricienPortrait: {
    src: unsplash("photo-1621905252507-b35492cc74b4"),
    width: 2400,
    height: 1602,
    alt: "Électricien en casque de chantier, bras croisés devant un coffret électrique",
    focus: "38% 25%",
    credit: {
      auteur: "Emmanuel Ikwuegbu",
      source: "Unsplash",
      url: "https://unsplash.com/photos/zWOgsj3j0wA",
    },
    licence: LICENCE_UNSPLASH,
  },
  electricienInstallation: {
    src: pexels(20500461),
    width: 2400,
    height: 1600,
    alt: "Électricien en combinaison de travail tirant des câbles sous un plafond",
    focus: "50% 35%",
    credit: {
      auteur: "Audy of Course",
      source: "Pexels",
      url: "https://www.pexels.com/photo/20500461/",
    },
    licence: LICENCE_PEXELS,
  },

  /* ---------------------------------------------------------- Équipe */
  techniciennesEquipe: {
    src: unsplash("photo-1773844389459-110d2b5e18e2"),
    width: 2400,
    height: 1600,
    alt: "Deux techniciennes en casque et tenue de travail, souriantes",
    focus: "50% 30%",
    credit: {
      auteur: "Sikwe Scarter",
      source: "Unsplash",
      url: "https://unsplash.com/photos/IH_9wWlo3UA",
    },
    licence: LICENCE_UNSPLASH,
  },
  techniciennePerceuse: {
    src: pexels(8487400),
    width: 2400,
    height: 1800,
    alt: "Technicienne souriante en casque jaune, perceuse à la main",
    focus: "60% 30%",
    credit: {
      auteur: "Kindel Media",
      source: "Pexels",
      url: "https://www.pexels.com/photo/8487400/",
    },
    licence: LICENCE_PEXELS,
  },
  technicienneArmoire: {
    src: pexels(34526423),
    width: 2400,
    height: 1600,
    alt: "Technicienne intervenant sur une armoire électrique industrielle",
    focus: "35% 40%",
    credit: {
      auteur: "Mickael Ange Konan",
      source: "Pexels",
      url: "https://www.pexels.com/photo/34526423/",
    },
    licence: LICENCE_PEXELS,
  },
  technicienUniforme: {
    src: unsplash("photo-1787672357797-f5fa35bb0d18"),
    width: 2400,
    height: 3308,
    alt: "Technicien en tenue de travail bleue, bras croisés",
    focus: "50% 25%",
    credit: {
      auteur: "Divaris Shirichena",
      source: "Unsplash",
      url: "https://unsplash.com/photos/63TPRKUxhmA",
    },
    licence: LICENCE_UNSPLASH,
  },

  /* ---------------------------------------------------------- Climatisation */
  climatiseurConfort: {
    src: unsplash("photo-1762341123870-d706f257a12e"),
    width: 2400,
    height: 1600,
    alt: "Unité intérieure de climatiseur affichant une consigne de 22 degrés",
    focus: "60% 50%",
    credit: {
      auteur: "Zulfugar Karimov",
      source: "Unsplash",
      url: "https://unsplash.com/photos/mM0vW68NY0g",
    },
    licence: LICENCE_UNSPLASH,
  },
  climatiseurMural: {
    src: unsplash("photo-1759772238012-9d5ad59ae637"),
    width: 2400,
    height: 1692,
    alt: "Climatiseur split mural dans une pièce claire",
    focus: "50% 40%",
    credit: {
      auteur: "Illia Horokhovsky",
      source: "Unsplash",
      url: "https://unsplash.com/photos/SJnak9YYFWU",
    },
    licence: LICENCE_UNSPLASH,
  },
  groupesExterieurs: {
    src: unsplash("photo-1667983453881-4992fe86ab1b"),
    width: 2400,
    height: 1600,
    alt: "Unités extérieures de climatisation fixées sur une façade",
    focus: "50% 45%",
    credit: {
      auteur: "Kien Nguyen",
      source: "Unsplash",
      url: "https://unsplash.com/photos/994AH40vmVs",
    },
    licence: LICENCE_UNSPLASH,
  },
  uniteExterieure: {
    src: pexels(27134985),
    width: 2400,
    height: 1600,
    alt: "Unité extérieure de climatisation posée sur un mur",
    focus: "45% 50%",
    credit: {
      auteur: "FOX",
      source: "Pexels",
      url: "https://www.pexels.com/photo/27134985/",
    },
    licence: LICENCE_PEXELS,
  },
  climatisationToiture: {
    src: "/images/climatisation-toiture.jpg",
    width: 447,
    height: 398,
    alt: "Technicien frigoriste contrôlant les pressions d'un groupe de climatisation en toiture, la ville en arrière-plan",
    focus: "55% 45%",
    credit: { auteur: "Image déposée dans 05_screenshot", source: "Fournie par Oralec" },
    licence: LICENCE_A_CONFIRMER,
  },
  froidCommercial: {
    src: "/images/froid-commercial.jpg",
    width: 461,
    height: 433,
    alt: "Technicien raccordant un manomètre sur un groupe de froid commercial",
    focus: "60% 50%",
    credit: { auteur: "Image déposée dans 05_screenshot", source: "Fournie par Oralec" },
    licence: LICENCE_A_CONFIRMER,
  },
};

/** Crédits regroupés par auteur, pour la page Mentions légales. */
export const creditsPhotos = Object.values(photos)
  .filter((p) => p.credit.source !== "Fournie par Oralec")
  .reduce<{ auteur: string; source: string; url?: string }[]>((acc, p) => {
    if (!acc.some((c) => c.auteur === p.credit.auteur)) {
      acc.push({ auteur: p.credit.auteur, source: p.credit.source, url: p.credit.url });
    }
    return acc;
  }, []);
