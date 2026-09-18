import type { ZoneLocale } from "./types";

/**
 * Pages SEO locales.
 *
 * Règle non négociable : chaque page a un contenu qui lui est propre.
 * Dupliquer un gabarit en changeant le nom de la ville est détecté et pénalisé.
 * Le champ `contexte` doit dire quelque chose de vrai sur la zone — sans quoi
 * la page ne mérite pas d'exister.
 */

export const zonesLocales: ZoneLocale[] = [
  {
    slug: "climatisation-dakar",
    service: "Climatisation",
    serviceSlug: "froid-climatisation",
    ville: "Dakar",
    region: "Dakar",
    quartiers: [
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
    ],
    contexte:
      "Dakar est une presqu'île : presque tous les quartiers sont exposés à l'air marin, et les unités extérieures installées côté océan — Ngor, Almadies, Yoff, la Corniche — s'oxydent nettement plus vite qu'ailleurs. À cela s'ajoutent la poussière de saison sèche, qui colmate les condenseurs, et l'instabilité du réseau, qui fatigue les compresseurs. Concrètement : un climatiseur à Dakar demande un entretien plus fréquent qu'un appareil identique installé à l'intérieur des terres, et le choix du matériel devrait tenir compte de la distance à la mer.",
    delai: "Intervention le jour même sur urgence, selon disponibilité.",
    seo: {
      title: "Climatisation à Dakar — Installation, entretien, dépannage | Feanor",
      description:
        "Installation, entretien et dépannage de climatiseurs à Dakar : Plateau, Almadies, Mermoz, Ouakam, Point E, Yoff, Parcelles. Diagnostic avant devis. Intervention rapide.",
    },
  },
  {
    slug: "plomberie-dakar",
    service: "Plomberie",
    serviceSlug: "plomberie",
    ville: "Dakar",
    region: "Dakar",
    quartiers: [
      "Plateau",
      "Médina",
      "Fann",
      "Point E",
      "Mermoz",
      "Sacré-Cœur",
      "Liberté",
      "HLM",
      "Grand Yoff",
      "Parcelles Assainies",
      "Pikine",
      "Guédiawaye",
    ],
    contexte:
      "Deux réalités coexistent à Dakar. Dans les quartiers anciens — Médina, Plateau, HLM — les réseaux ont plusieurs décennies : canalisations entartrées, fuites sur raccords, évacuations sous-dimensionnées pour l'usage actuel. Dans les constructions récentes, le problème est plutôt la pression : variations de distribution, surpresseurs mal réglés, citernes mal automatisées. Dans les deux cas, la fuite la plus coûteuse est celle qu'on ne voit pas — elle se lit d'abord sur la facture d'eau.",
    delai: "Urgence fuite : intervention prioritaire dans la journée.",
    seo: {
      title: "Plombier à Dakar — Fuite, sanitaire, débouchage, chauffe-eau | Feanor",
      description:
        "Plombier à Dakar : recherche de fuite, débouchage, installation sanitaire, chauffe-eau, surpresseurs. Localisation avant démolition, devis détaillé.",
    },
  },
  {
    slug: "electricite-dakar",
    service: "Électricité",
    serviceSlug: "electricite",
    ville: "Dakar",
    region: "Dakar",
    quartiers: [
      "Plateau",
      "Almadies",
      "Point E",
      "Fann",
      "Mermoz",
      "Médina",
      "Liberté",
      "Grand Yoff",
      "Yoff",
      "Rufisque",
    ],
    contexte:
      "Le défaut le plus répandu sur les installations dakaroises n'est pas la panne : c'est l'absence de protection. Beaucoup de tableaux, y compris récents, n'ont pas d'interrupteur différentiel 30 mA, et beaucoup de bâtiments n'ont pas de prise de terre effective. S'ajoute une contrainte locale : la multiplication des climatiseurs sur des installations conçues avant eux. Des circuits prévus pour l'éclairage et quelques prises alimentent aujourd'hui plusieurs compresseurs — d'où les disjonctions au démarrage et les échauffements d'appareillage.",
    delai: "Panne électrique : intervention le jour même à Dakar.",
    seo: {
      title: "Électricien à Dakar — Tableau, mise en sécurité, dépannage | Feanor",
      description:
        "Électricien à Dakar : installation, tableau électrique, différentiel 30 mA, mise à la terre, circuits dédiés climatisation, dépannage et recherche de panne.",
    },
  },
  {
    slug: "froid-commercial-dakar",
    service: "Froid commercial",
    serviceSlug: "froid-climatisation",
    ville: "Dakar",
    region: "Dakar",
    quartiers: [
      "Plateau",
      "Almadies",
      "Ngor",
      "Point E",
      "Médina",
      "Sandaga",
      "Colobane",
      "Pikine",
    ],
    contexte:
      "Restaurants, supérettes, boucheries, poissonneries et pharmacies partagent le même risque : un groupe froid qui s'arrête détruit un stock en quelques heures, souvent la nuit, sans que personne ne le voie. Deux mesures changent tout, et elles coûtent peu : une alarme de température qui alerte réellement quelqu'un, et un entretien du condenseur — encrassé, il fait grimper la consommation et finit par déclencher le pressostat haute pression en pleine chaleur d'après-midi.",
    delai: "Chambre froide à l'arrêt : traitée en priorité absolue.",
    seo: {
      title: "Froid commercial à Dakar — Chambres froides, vitrines | Feanor",
      description:
        "Installation et dépannage de chambres froides, vitrines et meubles réfrigérés à Dakar. Restaurants, supérettes, boucheries, pharmacies. Intervention prioritaire.",
    },
  },
  {
    slug: "maintenance-technique-dakar",
    service: "Maintenance technique",
    serviceSlug: "maintenance-depannage",
    ville: "Dakar",
    region: "Dakar",
    quartiers: ["Plateau", "Almadies", "Point E", "Mermoz", "Yoff", "Diamniadio"],
    contexte:
      "Sur les sites tertiaires dakarois, le coût technique est presque toujours subi plutôt que piloté : on paie des urgences, jamais des visites. La bascule vers le préventif tient à trois choses simples — savoir ce qu'on possède, passer à date fixe, et garder une trace écrite. La plupart des sites que nous reprenons n'ont aucun inventaire de leurs équipements techniques ; c'est toujours par là que nous commençons.",
    delai: "Visite d'évaluation sous 72 h, sans engagement.",
    seo: {
      title: "Maintenance technique à Dakar — Contrats multi-techniques | Feanor",
      description:
        "Contrats de maintenance préventive et corrective à Dakar : froid, climatisation, électricité, plomberie. Hôtels, restaurants, bureaux, commerces. Un seul interlocuteur.",
    },
  },
  {
    slug: "climatisation-thies",
    service: "Climatisation",
    serviceSlug: "froid-climatisation",
    ville: "Thiès",
    region: "Thiès",
    quartiers: ["Centre-ville", "Grand Standing", "Randoulène", "Mbour 1", "Cité Malick Sy"],
    contexte:
      "À Thiès, à l'intérieur des terres, la corrosion saline n'est pas le sujet — la poussière l'est. En saison sèche, les condenseurs se colmatent vite, et un appareil encrassé consomme davantage tout en refroidissant moins. Les écarts de température entre le jour et la nuit y sont aussi plus marqués que sur la côte, ce qui joue sur le dimensionnement : une machine calculée pour Dakar n'est pas forcément la bonne à Thiès.",
    delai: "Interventions planifiées, et urgences selon disponibilité d'équipe.",
    seo: {
      title: "Climatisation à Thiès — Installation, entretien, dépannage | Feanor",
      description:
        "Installation, entretien et dépannage de climatisation à Thiès. Particuliers, commerces et entreprises. Diagnostic avant devis, rapport après intervention.",
    },
  },
  {
    slug: "climatisation-saly-mbour",
    service: "Climatisation & froid",
    serviceSlug: "froid-climatisation",
    ville: "Saly & Mbour",
    region: "Thiès",
    quartiers: ["Saly Portudal", "Saly Niakh Niakhal", "Mbour centre", "Somone", "Ngaparou"],
    contexte:
      "La Petite Côte cumule les deux contraintes les plus dures pour du matériel frigorifique : une exposition maritime permanente, qui attaque les ailettes et les carrosseries, et une saisonnalité touristique qui fait passer les équipements de l'arrêt prolongé au fonctionnement continu. Ce qui tue le matériel ici, ce n'est pas l'usage : c'est le redémarrage après plusieurs mois sans rien faire. La maintenance doit y être calée sur le calendrier de saison, pas sur le calendrier civil.",
    delai: "Contrats hôteliers avec passages calés sur la saison.",
    seo: {
      title: "Climatisation à Saly et Mbour — Hôtels, résidences, commerces | Feanor",
      description:
        "Climatisation et froid commercial à Saly, Mbour, Somone et Ngaparou. Hôtels, résidences et restaurants : maintenance adaptée à l'exposition maritime.",
    },
  },
];

export const zoneSlugs = zonesLocales.map((z) => z.slug);

export function getZone(slug: string): ZoneLocale | undefined {
  return zonesLocales.find((z) => z.slug === slug);
}
