import type { Service } from "./types";

/**
 * Les métiers d'Oralec.
 *
 * Périmètre au 1er octobre 2026 : climatisation (et froid), électricité, et
 * la maintenance qui les couvre toutes les deux. La plomberie a été retirée
 * de l'offre ; son contenu complet reste récupérable dans l'historique git
 * (commit 586b074, fichier 04_code/feanor-web/src/content/services.ts) si
 * le métier revient. Ajouter un métier = une entrée dans ce tableau : sa page
 * est générée au build.
 */
export const services: Service[] = [
  /* ====================================================================== */
  {
    slug: "climatisation",
    name: "Climatisation",
    longName: "Climatisation & froid",
    tagline: "Installer juste, entretenir tôt, dépanner vite.",
    icon: "climatiseur",
    photo: "groupesExterieurs",
    enTete: "couverture",
    intro:
      "Sous le climat de Dakar, un climatiseur travaille presque toute l'année. Ce qui l'use, ce n'est pas la chaleur : c'est la poussière, l'air salin sur la côte et l'absence d'entretien. Nous installons, entretenons et réparons les équipements de climatisation et de froid — du split de chambre à la chambre froide de restaurant.",
    prestations: [
      {
        title: "Installation de climatiseurs",
        description:
          "Split, multi-split, cassette, gainable, VRV/VRF. Puissance calculée sur le volume, l'exposition et l'isolation — pas au jugé. Percement, liaisons frigorifiques, évacuation des condensats, tirage au vide et mise en service.",
        icon: "climatiseur",
      },
      {
        title: "Entretien et nettoyage",
        description:
          "Filtres, batterie d'évaporateur, condenseur, bac et conduite de condensats, contrôle des pressions et de l'intensité absorbée. C'est l'opération qui rend la moitié des dépannages inutiles.",
        icon: "nettoyage",
      },
      {
        title: "Recherche de fuite et recharge",
        description:
          "Détection du point de fuite avant toute recharge. Recharger un circuit percé, c'est payer deux fois. Fluides R32 et R410A, pesée systématique de la charge.",
        icon: "jauge",
      },
      {
        title: "Réparation et diagnostic",
        description:
          "Compresseur, ventilateur, carte électronique, sonde, condensateur, pressostat. Diagnostic mesuré avant remplacement de pièce.",
        icon: "boite-outils",
      },
      {
        title: "Chambres froides",
        description:
          "Positif et négatif. Panneaux, groupe, évaporateur, régulation, dégivrage, alarme de température. Installation, mise en service et suivi.",
        icon: "flocon",
      },
      {
        title: "Réfrigération commerciale",
        description:
          "Vitrines, armoires, meubles réfrigérés, centrales de production de froid pour restaurants, boucheries, supérettes et pharmacies.",
        icon: "boutique",
      },
      {
        title: "Maintenance préventive",
        description:
          "Passages planifiés, relevés consignés, pièces d'usure remplacées avant la panne. Sur un parc, c'est ce qui divise le budget froid.",
        icon: "calendrier",
      },
    ],
    pourQui: {
      particuliers: [
        "Villas et appartements",
        "Chambres et pièces de vie",
        "Résidences et immeubles",
      ],
      professionnels: [
        "Hôtels et résidences meublées",
        "Restaurants et cuisines professionnelles",
        "Supérettes, boucheries, pharmacies",
        "Bureaux et open spaces",
        "Entrepôts et locaux techniques",
      ],
    },
    signesDAlerte: [
      "L'appareil souffle moins froid qu'avant, à réglage identique",
      "Du givre apparaît sur les tuyauteries ou sur l'unité intérieure",
      "De l'eau coule de l'unité intérieure — le bac à condensats est bouché",
      "L'unité extérieure tourne en permanence sans jamais s'arrêter",
      "Un bruit ou une vibration nouvelle au démarrage",
      "Une odeur désagréable à la mise en route",
      "Le disjoncteur saute quand la climatisation démarre",
      "La facture Senelec grimpe sans changement d'usage",
    ],
    process: [
      {
        step: "Prise de contact",
        detail:
          "Vous décrivez le symptôme par WhatsApp ou par téléphone. Nous posons trois ou quatre questions pour cadrer.",
      },
      {
        step: "Diagnostic sur site",
        detail:
          "Mesures de pression, d'intensité et de température. On identifie la cause, pas seulement le symptôme.",
      },
      {
        step: "Devis",
        detail:
          "Détaillé, pièces et main-d'œuvre séparées. Vous validez avant toute intervention.",
      },
      {
        step: "Intervention",
        detail: "Réalisation, essais en fonctionnement, remise en service devant vous.",
      },
      {
        step: "Rapport et suivi",
        detail:
          "Ce qui a été fait, ce qui a été remplacé, et la date du prochain entretien recommandé.",
      },
    ],
    faq: [
      {
        q: "À quelle fréquence faut-il entretenir un climatiseur à Dakar ?",
        a: "Deux fois par an en usage domestique. Trois à quatre fois en bord de mer ou en usage intensif — l'air salin et la poussière encrassent le condenseur beaucoup plus vite qu'en climat sec. Un appareil de restaurant ou de bureau ouvert toute la journée relève d'un contrat, pas d'un entretien ponctuel.",
      },
      {
        q: "Mon climatiseur ne refroidit plus. Faut-il forcément une recharge de gaz ?",
        a: "Non, et c'est le réflexe le plus coûteux du marché. Un circuit frigorifique est étanche : s'il manque du fluide, c'est qu'il fuit quelque part. Recharger sans chercher la fuite, c'est repayer la même chose quelques mois plus tard. Dans beaucoup de cas, la perte de froid vient simplement d'un filtre ou d'un condenseur encrassé.",
      },
      {
        q: "Quelle puissance choisir pour ma pièce ?",
        a: "Le volume seul ne suffit pas. Nous tenons compte de l'exposition, de la surface vitrée, de l'isolation, du nombre d'occupants et des appareils présents. Un appareil sous-dimensionné tourne en continu et s'use ; surdimensionné, il fait des cycles courts, déshumidifie mal et coûte plus cher à l'achat comme à l'usage.",
      },
      {
        q: "Un climatiseur Inverter vaut-il vraiment son surcoût ?",
        a: "Sur un appareil qui tourne plusieurs heures par jour, oui dans la plupart des cas : il module sa puissance au lieu de s'arrêter et de redémarrer, ce qui réduit la consommation et l'usure du compresseur. Pour une pièce utilisée quelques heures par semaine, l'écart se justifie moins. Nous vous donnons le calcul, pas un slogan.",
      },
      {
        q: "Intervenez-vous sur des chambres froides en urgence ?",
        a: "Oui. Une chambre froide à l'arrêt, c'est un stock qui se perd en quelques heures. Ces interventions sont traitées en priorité, et les clients sous contrat Premium passent devant.",
      },
    ],
    seo: {
      title: "Climatisation à Dakar — Installation, entretien, dépannage",
      description:
        "Installation, entretien et dépannage de climatisation, chambres froides et réfrigération commerciale à Dakar. Diagnostic avant devis, recherche de fuite, maintenance préventive. Oralec.",
    },
  },

  /* ====================================================================== */
  {
    slug: "electricite",
    name: "Électricité",
    longName: "Électricité générale",
    tagline: "Une installation saine, dimensionnée, protégée.",
    icon: "eclair",
    photo: "electricienCoffret",
    enTete: "vignette",
    intro:
      "L'électricité ne prévient pas. Elle fonctionne jusqu'au jour où elle ne fonctionne plus — ou où elle brûle. Nous réalisons les installations neuves, les rénovations et les mises en sécurité selon la norme sénégalaise NS 01-001, avec une attention particulière à ce qui fait défaut le plus souvent : la protection différentielle, la mise à la terre et le dimensionnement des circuits.",
    prestations: [
      {
        title: "Installation électrique complète",
        description:
          "Neuf et rénovation. Passage de gaines, câblage, appareillage, repérage des circuits. Une installation lisible est une installation dépannable.",
        icon: "eclair",
      },
      {
        title: "Tableaux électriques",
        description:
          "Création, remise à niveau, réorganisation. Protection différentielle 30 mA, calibrage des disjoncteurs, séparation des circuits, étiquetage complet.",
        icon: "tableau",
      },
      {
        title: "Mise à la terre et mise en sécurité",
        description:
          "Prise de terre, liaison équipotentielle, suppression des points dangereux. C'est le poste le plus souvent absent des installations existantes, et le plus critique.",
        icon: "bouclier",
      },
      {
        title: "Conformité avant contrôle COSSUEL",
        description:
          "Vérification de l'installation intérieure et levée des réserves avant le contrôle de conformité exigé pour la mise sous tension et le raccordement Senelec.",
        icon: "sceau",
      },
      {
        title: "Éclairage",
        description:
          "Intérieur, extérieur, éclairage de sécurité, commandes et détection. Conversion LED avec calcul du gain réel sur la facture.",
        icon: "ampoule",
      },
      {
        title: "Alimentation des équipements techniques",
        description:
          "Circuits dédiés pour climatisation, groupes froids, pompes et chauffe-eau. Un climatiseur mal alimenté tombe en panne côté électrique, pas côté froid.",
        icon: "prise",
      },
      {
        title: "Coupures et secours",
        description:
          "Inverseur de source, raccordement de groupe électrogène, onduleurs. Sur les sites qui ne peuvent pas s'arrêter, le basculement doit être pensé, pas improvisé.",
        icon: "batterie",
      },
      {
        title: "Dépannage et recherche de panne",
        description:
          "Court-circuit, défaut d'isolement, disjonction répétée, perte de phase. Recherche méthodique à l'appareil de mesure.",
        icon: "loupe",
      },
      {
        title: "Tertiaire et industriel",
        description:
          "Armoires, TGBT, départs moteurs, réseaux de distribution pour bureaux, commerces et ateliers.",
        icon: "usine",
      },
    ],
    pourQui: {
      particuliers: [
        "Maisons et villas",
        "Appartements",
        "Rénovations et extensions",
      ],
      professionnels: [
        "Bureaux et plateaux tertiaires",
        "Commerces et supérettes",
        "Hôtels et résidences",
        "Ateliers et entrepôts",
        "Cliniques et écoles",
      ],
    },
    signesDAlerte: [
      "Le disjoncteur saute régulièrement, sans cause évidente",
      "Une prise ou un interrupteur est tiède, voire chaud",
      "Une odeur de brûlé, une trace noire autour d'un appareillage",
      "Les lumières faiblissent quand la climatisation ou la pompe démarre",
      "Le tableau ne comporte aucun interrupteur différentiel 30 mA",
      "L'installation n'a pas de prise de terre",
      "Des fils sont apparents, ou raccordés par des dominos hors boîte",
      "Le tableau est saturé, sans repérage des circuits",
    ],
    process: [
      {
        step: "Relevé de l'existant",
        detail:
          "État du tableau, des protections, de la terre, des sections de câble. Photos et relevé écrit.",
      },
      {
        step: "Diagnostic",
        detail:
          "Mesures d'isolement et de continuité. On distingue ce qui est dangereux de ce qui est simplement à améliorer.",
      },
      {
        step: "Devis priorisé",
        detail:
          "Ce qui relève de la sécurité immédiate, ce qui peut être planifié, ce qui est du confort. Vous arbitrez.",
      },
      {
        step: "Réalisation",
        detail: "Travaux, essais sous tension, vérification des protections.",
      },
      {
        step: "Remise et repérage",
        detail:
          "Schéma du tableau, circuits étiquetés, rapport d'intervention. Le prochain intervenant comprendra l'installation.",
      },
    ],
    faq: [
      {
        q: "Mon disjoncteur saute dès que j'allume la climatisation. D'où cela vient-il ?",
        a: "Trois causes dominent : un circuit non dédié et partagé avec d'autres usages, un disjoncteur sous-calibré par rapport à l'appel de courant au démarrage, ou un défaut d'isolement dans le climatiseur lui-même. Le diagnostic électrique et le diagnostic froid se rejoignent ici — c'est justement l'intérêt d'avoir les deux métiers dans la même équipe.",
      },
      {
        q: "Qu'est-ce qu'un différentiel 30 mA et pourquoi est-ce indispensable ?",
        a: "C'est le dispositif qui coupe le courant lorsqu'une partie de celui-ci fuit vers la terre — typiquement à travers une personne. Un disjoncteur classique protège les câbles contre la surcharge ; il ne protège pas les personnes. Beaucoup d'installations en place n'en ont aucun. C'est le premier point que nous vérifions.",
      },
      {
        q: "Les coupures Senelec abîment-elles mes équipements ?",
        a: "Ce ne sont pas les coupures qui abîment, ce sont les retours de tension et les micro-coupures répétées, particulièrement pour les compresseurs et l'électronique. Selon la criticité du site, la réponse va du simple parafoudre à l'onduleur dédié ou à l'inverseur de source avec groupe.",
      },
      {
        q: "Pouvez-vous préparer mon installation au contrôle COSSUEL ?",
        a: "Oui. Avant une première mise sous tension, l'installation intérieure doit être déclarée conforme par un organisme agréé. Nous vérifions les points qui font échouer le contrôle le plus souvent — protection différentielle, terre, sections, repérage du tableau — et nous corrigeons avant le passage du contrôleur.",
      },
      {
        q: "Faites-vous les installations neuves en construction ?",
        a: "Oui, du plan de distribution jusqu'à la mise en service, en coordination avec les autres lots. Nous intervenons aussi en reprise de chantier lorsqu'une installation a été mal engagée.",
      },
    ],
    seo: {
      title: "Électricien à Dakar — Installation, tableau, mise aux normes",
      description:
        "Installation électrique, tableaux, mise à la terre, éclairage et dépannage à Dakar. Mise en sécurité selon la norme NS 01-001, conformité COSSUEL, circuits dédiés climatisation, secours et onduleurs. Oralec.",
    },
  },

  /* ====================================================================== */
  {
    slug: "maintenance-depannage",
    name: "Maintenance & dépannage",
    longName: "Maintenance & dépannage",
    tagline: "Éviter la panne coûte moins cher que la réparer.",
    icon: "cle",
    photo: "technicienneArmoire",
    enTete: "vignette",
    intro:
      "Le dépannage est un service. La maintenance est une stratégie. Un climatiseur qui lâche en pleine saison chaude coûte la réparation, l'inconfort et parfois l'exploitation. Le même appareil suivi deux fois par an coûte une fraction de cela, et dure plusieurs années de plus. Nous faisons les deux, sur la climatisation comme sur l'électricité — mais nous poussons le second.",
    prestations: [
      {
        title: "Maintenance préventive",
        description:
          "Visites planifiées, opérations définies par type d'équipement, relevés consignés à chaque passage. On remplace les pièces d'usure avant qu'elles ne cassent.",
        icon: "calendrier",
      },
      {
        title: "Maintenance corrective",
        description:
          "Intervention sur panne, avec priorité d'accès pour les clients sous contrat.",
        icon: "cle",
      },
      {
        title: "Contrats multi-techniques",
        description:
          "Un seul interlocuteur pour la climatisation, le froid et l'électricité. Plus de renvoi de responsabilité entre prestataires.",
        icon: "accord",
      },
      {
        title: "Audit et diagnostic d'installation",
        description:
          "État réel du parc, points de risque, estimation de durée de vie résiduelle, plan de remise à niveau chiffré et priorisé.",
        icon: "liste",
      },
      {
        title: "Inventaire et suivi d'équipements",
        description:
          "Chaque équipement identifié, localisé et historisé. Vous savez ce que vous possédez, où, depuis quand, et ce qui a été fait dessus.",
        icon: "inventaire",
      },
      {
        title: "Intervention d'urgence",
        description:
          "Ligne dédiée, délai d'intervention contractuel selon le niveau de contrat.",
        icon: "sirene",
      },
      {
        title: "Rapports et recommandations",
        description:
          "Un rapport écrit après chaque passage, et une synthèse périodique : ce qui a coûté, ce qui va coûter, ce qu'il faut anticiper.",
        icon: "document",
      },
    ],
    pourQui: {
      particuliers: [
        "Villas avec plusieurs climatiseurs",
        "Résidences et copropriétés",
        "Biens en location ou en gestion",
      ],
      professionnels: [
        "Hôtels et résidences",
        "Restaurants et cuisines professionnelles",
        "Bureaux et plateaux tertiaires",
        "Commerces et supérettes",
        "Cliniques, écoles, administrations",
        "Entrepôts et sites industriels",
      ],
    },
    signesDAlerte: [
      "Vous ne savez pas combien d'équipements techniques votre site compte exactement",
      "Les interventions sont toujours des urgences, jamais des visites planifiées",
      "Le budget technique est imprévisible d'un mois sur l'autre",
      "Plusieurs prestataires interviennent, et chacun renvoie sur l'autre",
      "Aucun historique écrit n'existe sur ce qui a été réparé ou remplacé",
      "Les mêmes pannes reviennent sur les mêmes équipements",
    ],
    process: [
      {
        step: "Visite d'évaluation",
        detail:
          "Nous venons voir le site et inventorier les équipements. Cette visite est sans engagement.",
      },
      {
        step: "Plan de maintenance",
        detail:
          "Opérations, fréquences et périmètre définis équipement par équipement — pas un forfait générique.",
      },
      {
        step: "Contrat",
        detail:
          "Niveau de service, délais d'intervention, périmètre inclus et exclu, écrits noir sur blanc.",
      },
      {
        step: "Exécution planifiée",
        detail: "Passages programmés à l'avance, aux heures qui vous arrangent.",
      },
      {
        step: "Reporting",
        detail:
          "Rapport à chaque passage, synthèse périodique, alertes sur les équipements en fin de vie.",
      },
    ],
    faq: [
      {
        q: "Un contrat de maintenance, est-ce rentable pour une petite structure ?",
        a: "À partir de trois ou quatre équipements, généralement oui. Le calcul honnête n'est pas « entretien contre rien » mais « entretien contre le coût réel des pannes » : la réparation, l'arrêt d'exploitation, et surtout le raccourcissement de la durée de vie du matériel. Sous ce seuil, un entretien ponctuel deux fois par an suffit, et nous le disons.",
      },
      {
        q: "Que se passe-t-il si une panne survient entre deux visites ?",
        a: "Elle est traitée en correctif. Selon le niveau de contrat, le déplacement est inclus et vous passez en priorité dans le planning. Le délai d'intervention garanti est écrit dans le contrat — ce n'est pas une promesse commerciale.",
      },
      {
        q: "Reprenez-vous des installations posées par quelqu'un d'autre ?",
        a: "Oui, c'est le cas le plus fréquent. Nous commençons alors par un audit : l'état réel conditionne ce que nous pouvons garantir. Si une installation présente un défaut que nous n'avons pas créé, nous le signalons et le chiffrons séparément, sans le faire passer pour de l'entretien.",
      },
      {
        q: "Affichez-vous vos tarifs de contrat ?",
        a: "Non, parce qu'un tarif affiché serait faux. Un contrat se calcule sur le nombre d'équipements, leur type, leur âge, l'intensité d'usage et le délai d'intervention attendu. Nous établissons une proposition chiffrée après la visite d'évaluation, qui est gratuite.",
      },
    ],
    seo: {
      title: "Maintenance & dépannage à Dakar — Contrats climatisation et électricité",
      description:
        "Contrats de maintenance préventive et corrective pour hôtels, restaurants, bureaux et commerces à Dakar. Climatisation, froid et électricité : un seul interlocuteur. Oralec.",
    },
  },
];

export const serviceSlugs = services.map((s) => s.slug);

export function getService(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
