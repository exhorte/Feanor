/**
 * Modèle de contenu.
 *
 * Tout le contenu éditorial est typé ici et vit dans `src/content/`.
 * C'est ce qui permettra de brancher un CMS au lot 2 sans réécrire une page :
 * seule la couche de lecture change, les composants restent identiques.
 */

export type Accent = "froid" | "elec" | "plomberie" | "maintenance";

export type Prestation = {
  title: string;
  description: string;
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
  accent: Accent;
  /** Icône lucide, résolue dans `src/components/ui/metier-icon.tsx`. */
  icon: "snowflake" | "zap" | "droplets" | "wrench";
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
