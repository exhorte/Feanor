import { PageHeader } from "@/components/shared/page-header";
import { Section } from "@/components/ui/section";
import { creditsPhotos } from "@/content/images";
import { site } from "@/content/site";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Mentions légales",
  description: `Mentions légales de ${site.legalName} — éditeur, hébergement, propriété intellectuelle, crédits photos et traitement des données.`,
  path: "/mentions-legales",
  noIndex: true,
});

const blocs = [
  {
    titre: "Éditeur du site",
    contenu: [
      `${site.legalName} — ${site.legal.forme}`,
      `NINEA : ${site.legal.ninea}`,
      `Registre du commerce : ${site.legal.rc}`,
      `${site.address.street}, ${site.address.city}, ${site.address.countryName}`,
      `Téléphone : ${site.phoneDisplay}`,
      `E-mail : ${site.email}`,
    ],
  },
  {
    titre: "Hébergement",
    contenu: [
      "Le site est hébergé sur une infrastructure de diffusion de contenu internationale.",
      "Les coordonnées complètes de l'hébergeur seront précisées à la mise en ligne.",
    ],
  },
  {
    titre: "Propriété intellectuelle",
    contenu: [
      `L'ensemble des contenus de ce site — textes, marque et identité — est la propriété de ${site.legalName}, sauf mention contraire.`,
      "Toute reproduction ou représentation, totale ou partielle, sans autorisation écrite préalable est interdite.",
    ],
  },
  {
    titre: "Crédits photos",
    contenu: [
      "Les photographies d'illustration proviennent des banques d'images libres Unsplash et Pexels, utilisées conformément à leurs licences. Les personnes représentées ne sont pas des membres de l'équipe.",
      creditsPhotos.map((c) => `${c.auteur} (${c.source})`).join(" · "),
    ],
  },
  {
    titre: "Données personnelles",
    contenu: [
      "Ce site ne dépose aucun cookie de mesure d'audience ni de publicité.",
      "Les informations que vous saisissez dans les formulaires de demande ne sont pas enregistrées sur nos serveurs : elles servent uniquement à composer le message que vous envoyez vous-même, par WhatsApp ou par e-mail.",
      "Les données que vous nous transmettez ensuite (nom, téléphone, adresse, description du besoin) sont utilisées dans le seul but de traiter votre demande et d'assurer le suivi de votre intervention.",
      `Vous pouvez demander leur consultation, leur rectification ou leur suppression à l'adresse ${site.email}.`,
    ],
  },
  {
    titre: "Devis et interventions",
    contenu: [
      "Les descriptions de prestations présentées sur ce site sont fournies à titre informatif et ne constituent pas une offre commerciale ferme.",
      "Seul un devis écrit, daté et accepté engage l'entreprise.",
      "Les délais d'intervention annoncés sont indicatifs, sauf lorsqu'ils sont contractualisés dans un contrat de maintenance.",
    ],
  },
];

export default function MentionsLegalesPage() {
  return (
    <>
      <PageHeader title="Mentions légales" breadcrumb={[{ label: "Mentions légales", href: "/mentions-legales" }]} />

      <Section size="narrow">
        <div className="space-y-12">
          {blocs.map((bloc) => (
            <section key={bloc.titre}>
              <h2 className="text-xl">{bloc.titre}</h2>
              <div className="mt-4 space-y-2 text-muted-foreground">
                {bloc.contenu.map((ligne) => (
                  <p key={ligne}>{ligne}</p>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Section>
    </>
  );
}
