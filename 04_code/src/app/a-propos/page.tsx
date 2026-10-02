import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { Card, CardContent } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { JsonLd } from "@/components/ui/json-ld";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

import { site } from "@/content/site";
import type { IconName } from "@/content/types";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "À propos — Qui sommes-nous et comment nous travaillons",
  description:
    "Oralec, entreprise sénégalaise d'électricité et de climatisation : notre méthode, nos engagements, nos références légales.",
  path: "/a-propos",
});

const organisation: { icon: IconName; t: string; d: string }[] = [
  {
    icon: "casque",
    t: "Des spécialistes, pas des généralistes",
    d: "Un frigoriste est frigoriste, un électricien est électricien. Nous ne demandons pas à quelqu'un de bricoler un métier qui n'est pas le sien.",
  },
  {
    icon: "accord",
    t: "Une seule entreprise responsable",
    d: "Quand un problème se situe à la frontière des deux métiers — un climatiseur qui fait disjoncter, un circuit qui chauffe sous un groupe froid — il n'y a personne sur qui le renvoyer.",
  },
  {
    icon: "document",
    t: "Tout est écrit",
    d: "Devis avant, rapport après. Sur les contrats, l'historique complet du parc, qui reste votre propriété.",
  },
];

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Une entreprise technique, pas un intermédiaire."
        intro="Oralec réunit deux métiers du bâtiment — l'électricité et la climatisation — dans une même équipe, avec une seule méthode de travail."
        breadcrumb={[{ label: "À propos", href: "/a-propos" }]}
        photo="electricienPortrait"
      />

      {/* ------------------------------------------------ Le pourquoi */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow={`Pourquoi ${site.name} existe`} title="Le problème n'était pas technique." />
          </div>

          <div className="space-y-5 text-lg text-muted-foreground lg:col-span-7">
            <p>
              Trouver quelqu&apos;un qui sache réparer un climatiseur ou reprendre un tableau électrique à
              Dakar n&apos;est pas difficile. Trouver quelqu&apos;un qui vienne au créneau annoncé, qui
              explique ce qu&apos;il a trouvé, qui facture ce qu&apos;il avait annoncé et qui laisse une
              trace écrite de son passage&nbsp;: c&apos;est une autre affaire.
            </p>
            <p>
              C&apos;est ce décalage que nous avons voulu combler. Pas en promettant d&apos;être les
              meilleurs — ça ne veut rien dire — mais en tenant quatre engagements simples, vérifiables,
              sur chaque intervention, du dépannage à 20 000 francs au contrat annuel.
            </p>
            <p className="border-l-4 border-primary pl-5 font-heading text-xl font-bold text-foreground">
              Le travail fait correctement, expliqué, et suivi.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Engagements */}
      <Section tone="doux">
        <SectionHeader
          eyebrow="Nos engagements"
          title="Quatre règles, sans exception."
          intro="Elles s'appliquent au particulier comme au groupe hôtelier. Si nous ne pouvons pas les tenir sur une intervention, nous le disons avant de commencer."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {site.engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 50} className="h-full">
              <Card className="h-full flex-row items-start gap-5 px-7 py-7 shadow-card">
                <IconTile name={e.icon} size="lg" />
                <CardContent className="px-0">
                  <h3 className="text-lg font-bold">{e.title}</h3>
                  <p className="mt-2 text-muted-foreground">{e.detail}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Organisation */}
      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <SectionHeader
              eyebrow="Comment nous sommes organisés"
              title="Deux métiers, une méthode."
              intro="Chaque technicien a son métier principal. Ce qui est commun à tous, c'est la séquence de travail — et c'est elle qui rend le résultat prévisible."
            />
            <div className="mt-10 space-y-4">
              {organisation.map((item) => (
                <Card key={item.t} className="flex-row items-start gap-5 px-6 py-6 shadow-card">
                  <IconTile name={item.icon} />
                  <CardContent className="px-0">
                    <h3 className="text-base font-bold">{item.t}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-muted-foreground">{item.d}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl shadow-float">
              <Photo name="techniciennesEquipe" sizes="(min-width: 1024px) 38vw, 94vw" />
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Légitimité
          Bloc de conversion : la première objection du marché est
          « est-ce que ces gens existent vraiment ». */}
      <Section tone="doux">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Nos références"
              title="Une entreprise déclarée, joignable, identifiable."
              intro="C'est une information que vous devriez exiger de tout prestataire technique — et que trop peu affichent."
            />
          </div>

          <div className="lg:col-span-7">
            <Card className="gap-0 py-2 shadow-card">
              <dl className="divide-y divide-border">
                {[
                  ["Raison sociale", site.legalName],
                  ["Forme juridique", site.legal.forme],
                  ["NINEA", site.legal.ninea],
                  ["Registre du commerce", site.legal.rc],
                  ["Adresse", `${site.address.street}, ${site.address.city}`],
                  ["Téléphone", site.phoneDisplay],
                  ["E-mail", site.email],
                ].map(([label, valeur]) => (
                  <div key={label} className="flex flex-wrap gap-x-6 gap-y-1 px-6 py-4">
                    <dt className="w-44 shrink-0 text-sm text-subtil">{label}</dt>
                    <dd className="tnum font-medium text-foreground">{valeur}</dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>
        </div>
      </Section>

      <CtaBand
        titre="Une question avant de nous confier quoi que ce soit ?"
        intro="C'est légitime. Posez-la — nous préférons une conversation honnête à un devis signé sur un malentendu."
        photo="technicienUniforme"
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "À propos", path: "/a-propos" },
        ])}
      />
    </>
  );
}
