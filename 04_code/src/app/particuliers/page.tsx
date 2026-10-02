import { ArrowRightIcon, ShieldWarningIcon, SirenIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";

import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqSection } from "@/components/shared/faq-section";
import { ServiceCard } from "@/components/shared/service-card";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

import { services } from "@/content/services";
import { faqFlat } from "@/content/faq";
import { site } from "@/content/site";
import { parcoursClient } from "@/content/parcours";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Particuliers — Dépannage, installation et entretien à Dakar",
  description:
    "Un problème de climatisation ou d'électricité chez vous à Dakar ? Diagnostic avant devis, prix annoncé = prix facturé, garantie sur la main-d'œuvre. Oralec.",
  path: "/particuliers",
});

const MESSAGE = `Bonjour ${site.name}, j'ai un problème chez moi et j'aimerais une intervention.`;

/* Gestes d'urgence — contenu utile avant même que nous arrivions.
   C'est le genre de contenu qui fait qu'on se souvient d'une entreprise. */
const gestesUrgence = [
  {
    situation: "Odeur de brûlé ou prise qui chauffe",
    gestes: [
      "Coupez immédiatement le disjoncteur du circuit concerné, ou le général.",
      "Débranchez les appareils de ce circuit.",
      "Ne rallumez pas « pour voir » : c'est là que les départs de feu se produisent.",
    ],
  },
  {
    situation: "Disjoncteur qui saute en boucle",
    gestes: [
      "Ne le réarmez pas plus de deux fois de suite.",
      "Débranchez les appareils du circuit, puis réarmez : s'il tient, rebranchez-les un par un.",
      "Notez ce qui était allumé au moment de la coupure — c'est le premier indice du diagnostic.",
    ],
  },
  {
    situation: "Climatiseur qui fuit à l'intérieur",
    gestes: [
      "Arrêtez l'appareil et coupez son alimentation.",
      "Placez un récipient et essuyez — l'eau de condensats abîme les murs et les sols.",
      "N'ouvrez pas l'unité : le bac est généralement simplement bouché.",
    ],
  },
  {
    situation: "Congélateur ou chambre froide à l'arrêt",
    gestes: [
      "N'ouvrez plus la porte : le froid tient plusieurs heures si l'enceinte reste fermée.",
      "Vérifiez le disjoncteur avant tout — c'est souvent la cause.",
      "Appelez-nous immédiatement : ces interventions passent en priorité.",
    ],
  },
];

const faqParticuliers = faqFlat.filter((q) =>
  [
    "Le devis est-il payant ?",
    "Le prix annoncé peut-il changer en cours d'intervention ?",
    "Comment peut-on payer ?",
    "Sous quel délai intervenez-vous ?",
    "Vos interventions sont-elles garanties ?",
    "Quelles zones couvrez-vous ?",
  ].includes(q.q),
);

export default function ParticuliersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Particuliers"
        title="Un problème chez vous ? Nous nous en occupons."
        intro="Climatisation et électricité. Un diagnostic avant le devis, un prix qui ne bouge pas, et quelqu'un qui vous explique ce qui s'est passé plutôt que de vous tendre une facture."
        breadcrumb={[{ label: "Particuliers", href: "/particuliers" }]}
        photo="climatiseurMural"
        layout="couverture"
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="xl">
            Décrire mon problème
            <ArrowRightIcon weight="bold" data-icon="inline-end" aria-hidden />
          </ButtonLink>
          <ButtonLink href={whatsappUrl(MESSAGE)} variant="outline" size="xl" external>
            <WhatsappLogoIcon weight="fill" className="text-whatsapp" data-icon="inline-start" aria-hidden />
            WhatsApp
          </ButtonLink>
        </div>
      </PageHeader>

      {/* ------------------------------------------------ Déroulé */}
      <Section tone="doux">
        <SectionHeader eyebrow="Comment ça se passe" title="Quatre étapes, aucune surprise." />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {parcoursClient.map((e, i) => (
            <li key={e.titre}>
              <Reveal delay={i * 60} className="h-full">
                <Card className="h-full gap-0 px-6 py-6 shadow-card">
                  <span className="tnum flex size-11 items-center justify-center rounded-xl bg-primary font-heading text-base font-extrabold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <CardContent className="mt-5 px-0">
                    <CardTitle className="text-base font-bold">{e.titre}</CardTitle>
                    <CardDescription className="mt-2 text-[0.92rem]">{e.detail}</CardDescription>
                  </CardContent>
                </Card>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------ Services */}
      <Section>
        <SectionHeader
          eyebrow="Chez vous"
          title="Ce sur quoi nous intervenons."
          intro="Maison, appartement, villa ou résidence. Une intervention ponctuelle, ou un entretien régulier si vous avez plusieurs équipements."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 60} className="h-full">
              <ServiceCard service={s} points={s.pourQui.particuliers} />
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Gestes d'urgence */}
      <Section tone="doux">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="En attendant notre arrivée"
              title="Les bons gestes, tout de suite."
              intro="Ces quelques réflexes limitent l'essentiel des dégâts. Ils ne coûtent rien et ne demandent aucune compétence technique."
            />
            <Card className="mt-8 flex-row items-center gap-4 bg-primary px-5 py-5 text-primary-foreground ring-0">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                <SirenIcon weight="duotone" className="size-6" aria-hidden />
              </span>
              <span>
                <span className="block text-sm text-white/70">Urgence en cours&nbsp;?</span>
                <a href={telUrl(true)} className="tnum text-lg font-bold underline-offset-4 hover:underline">
                  {site.phoneUrgenceDisplay}
                </a>
              </span>
            </Card>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {gestesUrgence.map((g) => (
                <Card key={g.situation} className="gap-0 px-6 py-6 shadow-card">
                  <div className="flex items-start gap-3">
                    <ShieldWarningIcon weight="duotone" className="mt-0.5 size-5 shrink-0 text-primary" aria-hidden />
                    <h3 className="text-base font-bold">{g.situation}</h3>
                  </div>
                  <ol className="mt-4 space-y-2.5 text-sm text-muted-foreground">
                    {g.gestes.map((geste, i) => (
                      <li key={geste} className="flex gap-3">
                        <span className="tnum flex size-5 shrink-0 items-center justify-center rounded-full bg-secondary text-[0.7rem] font-bold text-primary">
                          {i + 1}
                        </span>
                        {geste}
                      </li>
                    ))}
                  </ol>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <FaqSection
        items={faqParticuliers}
        eyebrow="Vos questions"
        title="Ce que les particuliers nous demandent."
        lienToutes
        photo="techniciennePerceuse"
      />

      <CtaBand
        titre="Décrivez-nous le problème."
        intro="Trois questions, et nous ouvrons la conversation sur WhatsApp avec votre demande déjà rédigée. Le devis est gratuit."
        message={MESSAGE}
        photo="climatiseurMural"
      />

      <JsonLd
        data={[
          faqJsonLd(faqParticuliers),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Particuliers", path: "/particuliers" },
          ]),
        ]}
      />
    </>
  );
}
