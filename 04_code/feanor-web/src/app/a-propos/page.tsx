import { Check, Building, FileCheck, Users } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { CtaFinal } from "@/components/shared/cta-final";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { JsonLd } from "@/components/ui/json-ld";

import { site } from "@/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "À propos — Qui sommes-nous et comment nous travaillons",
  description:
    "Feanor, entreprise sénégalaise de solutions techniques du bâtiment : froid, climatisation, électricité, plomberie. Notre méthode, nos engagements, nos références légales.",
  path: "/a-propos",
});

export default function AProposPage() {
  return (
    <>
      <PageHeader
        eyebrow="À propos"
        title="Une entreprise technique, pas un intermédiaire."
        intro="Feanor réunit trois métiers du bâtiment — froid et climatisation, électricité, plomberie — dans une même équipe, avec une seule méthode de travail."
        breadcrumb={[{ label: "À propos", href: "/a-propos" }]}
      />

      {/* ------------------------------------------------ Le pourquoi */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Pourquoi Feanor existe"
              title="Le problème n'était pas technique."
            />
          </div>

          <div className="space-y-5 text-lg text-muted lg:col-span-7">
            <p>
              Trouver quelqu&apos;un qui sache réparer un climatiseur à Dakar
              n&apos;est pas difficile. Trouver quelqu&apos;un qui vienne au
              créneau annoncé, qui explique ce qu&apos;il a trouvé, qui facture
              ce qu&apos;il avait annoncé et qui laisse une trace écrite de son
              passage : c&apos;est une autre affaire.
            </p>
            <p>
              C&apos;est ce décalage que nous avons voulu combler. Pas en
              promettant d&apos;être les meilleurs — ça ne veut rien dire — mais
              en tenant quatre engagements simples, vérifiables, sur chaque
              intervention, du dépannage à 20 000 francs au contrat annuel.
            </p>
            <p className="text-text">
              Le travail fait correctement, expliqué, et suivi.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Engagements */}
      <Section surface>
        <SectionHeader
          eyebrow="Nos engagements"
          title="Quatre règles, sans exception."
          intro="Elles s'appliquent au particulier comme au groupe hôtelier. Si nous ne pouvons pas les tenir sur une intervention, nous le disons avant de commencer."
        />

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
          {site.engagements.map((e, i) => (
            <Reveal key={e.title} delay={i * 50} className="h-full">
              <div className="flex h-full gap-4 bg-canvas p-7">
                <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-xs border border-accent/40 bg-accent/10">
                  <Check className="size-4 text-accent" strokeWidth={2.5} aria-hidden />
                </span>
                <span>
                  <span className="block font-display text-lg">{e.title}</span>
                  <span className="mt-2 block text-muted">{e.detail}</span>
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Organisation */}
      <Section>
        <SectionHeader
          eyebrow="Comment nous sommes organisés"
          title="Trois métiers, une méthode."
          intro="Chaque technicien a son métier principal. Ce qui est commun à tous, c'est la séquence de travail — et c'est elle qui rend le résultat prévisible."
        />

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-3">
          {[
            {
              icon: Users,
              t: "Des spécialistes, pas des généralistes",
              d: "Un frigoriste est frigoriste, un électricien est électricien. Nous ne demandons pas à quelqu'un de bricoler un métier qui n'est pas le sien.",
            },
            {
              icon: Building,
              t: "Une seule entreprise responsable",
              d: "Quand un problème se situe à la frontière de deux métiers — un climatiseur qui fait disjoncter, une fuite près d'un tableau — il n'y a personne sur qui le renvoyer.",
            },
            {
              icon: FileCheck,
              t: "Tout est écrit",
              d: "Devis avant, rapport après. Sur les contrats, l'historique complet du parc, qui reste votre propriété.",
            },
          ].map((item) => (
            <div key={item.t} className="bg-canvas p-7">
              <item.icon className="size-5 text-accent" strokeWidth={1.75} aria-hidden />
              <h3 className="mt-4 font-display text-lg">{item.t}</h3>
              <p className="mt-2 text-muted">{item.d}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Légitimité
          Bloc de conversion : la première objection du marché est
          « est-ce que ces gens existent vraiment ». */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Nos références"
              title="Une entreprise déclarée, joignable, identifiable."
              intro="C'est une information que vous devriez exiger de tout prestataire technique — et que trop peu affichent."
            />
          </div>

          <div className="lg:col-span-7">
            <dl className="divide-y divide-line border-y border-line">
              {[
                ["Raison sociale", site.legalName],
                ["Forme juridique", site.legal.forme],
                ["NINEA", site.legal.ninea],
                ["Registre du commerce", site.legal.rc],
                ["Adresse", `${site.address.street}, ${site.address.city}`],
                ["Téléphone", site.phoneDisplay],
                ["E-mail", site.email],
              ].map(([label, valeur]) => (
                <div key={label} className="flex flex-wrap gap-2 py-4">
                  <dt className="w-48 shrink-0 text-sm text-faint">{label}</dt>
                  <dd className="tnum text-muted">{valeur}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <CtaFinal
        titre="Une question avant de nous confier quoi que ce soit ?"
        intro="C'est légitime. Posez-la — nous préférons une conversation honnête à un devis signé sur un malentendu."
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
