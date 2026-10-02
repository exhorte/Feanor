import type { QuestionReponse } from "./types";

/**
 * FAQ transverse — traite les objections réelles, pas les questions de façade.
 * Chaque réponse doit pouvoir être tenue par un technicien devant un client.
 */

export const faqGenerale: { categorie: string; questions: QuestionReponse[] }[] = [
  {
    categorie: "Devis, prix et facturation",
    questions: [
      {
        q: "Le devis est-il payant ?",
        a: "Le devis est gratuit. Le déplacement de diagnostic peut être facturé lorsqu'il demande du temps et de l'appareillage — recherche de fuite frigorifique, panne électrique intermittente, audit de parc. Dans ce cas, le montant vous est annoncé avant que nous partions, jamais découvert sur la facture. Et si vous validez les travaux, il est déduit.",
      },
      {
        q: "Le prix annoncé peut-il changer en cours d'intervention ?",
        a: "Pas sans votre accord. Si nous découvrons en ouvrant un élément que le devis initial ne couvrait pas, nous nous arrêtons, nous vous expliquons, et vous décidez. Un devis validé qui gonfle de 40 % à la facture, c'est exactement ce que nous avons construit l'entreprise pour ne pas faire.",
      },
      {
        q: "Pourquoi vos tarifs de contrat ne sont-ils pas affichés ?",
        a: "Parce qu'ils seraient faux. Un contrat dépend du nombre d'équipements, de leur type, de leur âge, de l'usage et du délai d'intervention attendu. Dix climatiseurs de bureau et dix climatiseurs d'hôtel en bord de mer n'ont pas le même coût d'entretien. Nous chiffrons après la visite d'évaluation, qui est gratuite.",
      },
      {
        q: "Comment peut-on payer ?",
        a: "Espèces, virement, Wave et Orange Money. Une facture en bonne et due forme est émise systématiquement, avec nos références légales. Pour les entreprises, les conditions de règlement sont définies dans le contrat.",
      },
    ],
  },
  {
    categorie: "Délais et interventions",
    questions: [
      {
        q: "Sous quel délai intervenez-vous ?",
        a: "Sur une urgence à Dakar, nous visons la journée. Pour une intervention planifiée, sous 48 à 72 h selon la charge. Les clients sous contrat ont un délai garanti, écrit au contrat : 24 h ouvrées en Business, 4 h sur équipement critique en Premium. Nous préférons annoncer un créneau que nous tiendrons plutôt que de promettre l'immédiat.",
      },
      {
        q: "Intervenez-vous le week-end et les jours fériés ?",
        a: "Oui sur urgence, avec une majoration annoncée avant le déplacement. Les contrats Premium incluent l'astreinte 7j/7 sans majoration.",
      },
      {
        q: "Quelles zones couvrez-vous ?",
        a: "Tout Dakar et la banlieue : Plateau, Almadies, Ngor, Ouakam, Mermoz, Point E, Fann, Médina, Yoff, Parcelles, Grand Yoff, Pikine, Guédiawaye, Rufisque, Diamniadio. Nous intervenons aussi à Thiès, Mbour, Saly et Somone, ainsi qu'ailleurs au Sénégal pour les chantiers et les contrats.",
      },
    ],
  },
  {
    categorie: "Garantie et qualité",
    questions: [
      {
        q: "Vos interventions sont-elles garanties ?",
        a: "La main-d'œuvre est garantie : si la panne revient sur ce que nous avons traité, nous revenons sans facturer le déplacement ni le travail. Les pièces sont couvertes par la garantie constructeur, dont la durée vous est indiquée sur le devis. La garantie ne couvre pas un défaut ailleurs sur l'installation, et nous vous le disons clairement si c'est le cas.",
      },
      {
        q: "Reprenez-vous une installation faite par quelqu'un d'autre ?",
        a: "Oui, c'est même le cas le plus courant. Nous commençons par un état des lieux, parce que ce que nous pouvons garantir dépend de ce que nous reprenons. Si nous trouvons un défaut que nous n'avons pas créé, nous le signalons et le chiffrons à part — nous ne le faisons pas passer pour de l'entretien.",
      },
      {
        q: "Recevrai-je un document après l'intervention ?",
        a: "Oui, systématiquement : un rapport indiquant ce qui a été constaté, ce qui a été fait, les pièces remplacées et les points à surveiller. Pour les clients sous contrat, ces rapports constituent l'historique du parc, et cet historique vous appartient.",
      },
    ],
  },
  {
    categorie: "L'entreprise",
    questions: [
      {
        q: "Oralec est-elle une entreprise déclarée ?",
        a: "Oui. NINEA et registre du commerce figurent en pied de page de ce site et sur chaque facture. C'est une information que vous devriez exiger de tout prestataire technique, et que trop peu affichent.",
      },
      {
        q: "Vos techniciens sont-ils à la fois électriciens et frigoristes ?",
        a: "Non, et c'est volontaire. Chaque technicien a son métier principal — climatisation et froid, ou électricité. Ce qui est commun, c'est la méthode : diagnostic mesuré, devis avant intervention, rapport après. L'intérêt d'avoir les deux métiers dans la même équipe, c'est qu'un problème à la frontière — un climatiseur qui fait disjoncter, un circuit sous-dimensionné pour un groupe froid — est traité par une seule entreprise.",
      },
      {
        q: "Travaillez-vous avec les particuliers, ou uniquement avec les entreprises ?",
        a: "Les deux. Les particuliers représentent l'essentiel des dépannages, les entreprises l'essentiel des contrats. Un client particulier n'est pas une intervention de second rang : c'est souvent lui qui nous recommande ensuite dans son entreprise.",
      },
    ],
  },
];

/** Version aplatie, pour le balisage JSON-LD FAQPage. */
export const faqFlat: QuestionReponse[] = faqGenerale.flatMap((c) => c.questions);
