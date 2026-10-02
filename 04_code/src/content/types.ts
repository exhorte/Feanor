/**
 * Modèle de contenu.
 *
 * Tout le contenu éditorial est typé ici et vit dans `src/content/`.
 * C'est ce qui permettra de brancher un CMS sans réécrire une page :
 * seule la couche de lecture change, les composants restent identiques.
 */

/**
 * Icônes disponibles pour le contenu, résolues en composants dans
 * `src/components/ui/icon.tsx`. Le contenu nomme une icône par sa clé, il
 * ne dépend jamais directement d'une librairie d'icônes.
 */
export type IconName =
  | "climatiseur"
  | "flocon"
  | "ventilateur"
  | "thermometre"
  | "vent"
  | "nettoyage"
  | "eclair"
  | "tableau"
  | "prise"
  | "ampoule"
  | "batterie"
  | "jauge"
  | "boite-outils"
  | "cle"
  | "casque"
  | "bouclier"
  | "sceau"
  | "chrono"
  | "horloge"
  | "recu"
  | "document"
  | "inventaire"
  | "liste"
  | "loupe"
  | "accord"
  | "sirene"
  | "calendrier"
  | "equipe"
  | "localisation"
  | "telephone"
  | "whatsapp"
  | "email"
  | "maison"
  | "immeuble"
  | "bureaux"
  | "boutique"
  | "usine"
  | "lit"
  | "couverts"
  | "sante"
  | "lune"
  | "feuille"
  | "littoral"
  | "alerte";

export type Prestation = {
  title: string;
  description: string;
  icon: IconName;
};

export type EtapeProcess = {
  step: string;
  detail: string;
};

export type QuestionReponse = {
  q: string;
  a: string;
};

export type Service = {
  slug: string;
  /** Nom court, pour la navigation et les cartes. */
  name: string;
  /** Nom complet, pour les titres de page. */
  longName: string;
  tagline: string;
  icon: IconName;
  /** Clé de la photo d'illustration, voir `src/content/images.ts`. */
  photo: PhotoKey;
  /** Mise en page de l'en-tête de page : photo pleine largeur ou en vignette. */
  enTete: "couverture" | "vignette";
  intro: string;
  prestations: Prestation[];
  pourQui: {
    particuliers: string[];
    professionnels: string[];
  };
  /** Signaux qui doivent déclencher un appel — contenu à forte valeur d'usage. */
  signesDAlerte: string[];
  process: EtapeProcess[];
  faq: QuestionReponse[];
  seo: {
    title: string;
    description: string;
  };
};

export type Contrat = {
  tier: "Essentiel" | "Business" | "Premium";
  pitch: string;
  cible: string;
  inclus: string[];
  /** Ce que le palier n'inclut pas — l'omettre rend la grille illisible. */
  exclus?: string[];
  featured?: boolean;
};

export type Secteur = {
  slug: string;
  nom: string;
  icon: IconName;
  enjeu: string;
  interventions: string[];
};

export type Realisation = {
  slug: string;
  titre: string;
  client: string;
  typeClient: string;
  lieu: string;
  service: string;
  solution: string;
  duree: string;
  resultat: string;
  /** Tant qu'il n'y a pas de photo réelle, la réalisation ne doit pas être publiée. */
  photos: { src: string; alt: string; legende: string }[];
};

export type Temoignage = {
  /** Prénom et initiale, ou nom complet si le client l'a accepté par écrit. */
  auteur: string;
  /** Fonction ou type de client : « Gérant de restaurant », « Particulier, Mermoz »… */
  role: string;
  texte: string;
  /** Note sur 5, telle que donnée par le client (avis Google, par exemple). */
  note: 1 | 2 | 3 | 4 | 5;
  /** Où l'avis a été recueilli — il doit pouvoir être retrouvé. */
  source: string;
};

export type ZoneLocale = {
  slug: string;
  /** Métier couvert par la page locale. */
  service: string;
  serviceSlug: string;
  ville: string;
  region: string;
  quartiers: string[];
  /** Contexte propre à la zone — évite le contenu dupliqué, pénalisé par Google. */
  contexte: string;
  delai: string;
  seo: {
    title: string;
    description: string;
  };
};

/** Clés des photos déclarées dans `src/content/images.ts`. */
export type PhotoKey =
  | "electricienCablage"
  | "electricienCoffret"
  | "electricienPortrait"
  | "electricienInstallation"
  | "techniciennesEquipe"
  | "techniciennePerceuse"
  | "technicienneArmoire"
  | "technicienUniforme"
  | "climatiseurConfort"
  | "climatiseurMural"
  | "groupesExterieurs"
  | "uniteExterieure"
  | "climatisationToiture"
  | "froidCommercial";

export type Photo = {
  src: string;
  width: number;
  height: number;
  alt: string;
  /** Recadrage : valeur CSS `object-position`, pour garder le sujet dans le cadre. */
  focus?: string;
  credit: {
    auteur: string;
    source: "Unsplash" | "Pexels" | "Fournie par Oralec";
    url?: string;
  };
  licence: string;
};
