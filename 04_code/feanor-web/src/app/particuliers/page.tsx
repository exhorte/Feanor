import Link from "next/link";
import { ArrowRight, ShieldAlert } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { CtaFinal } from "@/components/shared/cta-final";
import { FaqSection } from "@/components/shared/faq-section";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { MetierIcon, accent } from "@/components/ui/metier";
import { JsonLd } from "@/components/ui/json-ld";

import { services } from "@/content/services";
import { faqFlat } from "@/content/faq";
import { site } from "@/content/site";
import { parcoursClient } from "@/content/parcours";
import { buildMetadata, breadcrumbJsonLd, faqJsonLd } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Particuliers — Dépannage, installation et entretien à Dakar",
  description:
    "Un problème de climatisation, d'électricité ou de plomberie chez vous à Dakar ? Diagnostic avant devis, prix annoncé = prix facturé, garantie sur la main-d'œuvre. Feanor.",
  path: "/particuliers",
});

const MESSAGE = "Bonjour Feanor, j'ai un problème chez moi et j'aimerais une intervention.";

/* Gestes d'urgence — contenu utile avant même que nous arrivions.
   C'est le genre de contenu qui fait qu'on se souvient d'une entreprise. */
const gestesUrgence = [
  {
    situation: "Fuite d'eau importante",
    gestes: [
      "Fermez le robinet d'arrêt général (souvent près du compteur).",
      "Coupez l'électricité si l'eau approche d'une prise ou du tableau.",
      "Ne démontez rien : la photo de l'installation intacte nous aide à préparer l'intervention.",
    ],
  },
  {
    situation: "Odeur de brûlé ou prise qui chauffe",
    gestes: [
      "Coupez immédiatement le disjoncteur du circuit concerné, ou le général.",
      "Débranchez les appareils de ce circuit.",
      "Ne rallumez pas « pour voir » : c'est là que les départs de feu se produisent.",
    ],
  },
  {
    situation: "Climatiseur qui fuit à l'intérieur",
    gestes: [
      "Arrêtez l'appareil et coupez son alimentation.",
      "Placez un récipient et essuyez — l'eau de condensats abîme les murs et les sols.",
      "N'ouvrez pas l'unité : le bac est généralement simplement bouché.",
    ],
  },
  {
    situation: "Chambre froide ou congélateur à l'arrêt",
    gestes: [
      "N'ouvrez plus la porte : le froid tient plusieurs heures si l'enceinte reste fermée.",
      "Vérifiez le disjoncteur avant tout — c'est la cause une fois sur trois.",
      "Appelez-nous immédiatement : ces interventions passent en priorité.",
    ],
  },
];

const faqParticuliers = faqFlat.filter((q) =>
  [
    "Le devis est-il payant ?",
    "Le prix annoncé peut-il changer en cours d'intervention ?",
    "Comment peut-on payer ?",
    "Sous quel délai intervenez-vous ?",
    "Vos interventions sont-elles garanties ?",
    "Quelles zones couvrez-vous ?",
  ].includes(q.q),
);

export default function ParticuliersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Particuliers"
        title="Un problème chez vous ? Nous nous en occupons."
        intro="Climatisation, électricité, plomberie. Un diagnostic avant le devis, un prix qui ne bouge pas, et quelqu'un qui vous explique ce qui s'est passé plutôt que de vous tendre une facture."
        breadcrumb={[{ label: "Particuliers", href: "/particuliers" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Décrire mon problème
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href={whatsappUrl(MESSAGE)} variant="whatsapp" size="lg" external>
            WhatsApp
          </ButtonLink>
        </div>
      </PageHeader>

      {/* ------------------------------------------------ Déroulé */}
      <Section surface>
        <SectionHeader
          eyebrow="Comment ça se passe"
          title="Quatre étapes, aucune surprise."
        />

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {parcoursClient.map((e, i) => (
            <li key={e.titre}>
              <Reveal delay={i * 60} className="h-full">
                <div className="tile flex h-full flex-col p-7">
                  <span className="tnum font-display text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display font-medium">{e.titre}</h3>
                  <p className="mt-2 text-sm text-muted">{e.detail}</p>
                </div>
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50} className="h-full">
              <Link
                href={`/services/${s.slug}`}
                className="tile group flex h-full flex-col p-7 transition-shadow hover:shadow-float"
              >
                <MetierIcon icon={s.icon} tone={s.accent} />
                <h3 className="mt-5 font-display text-lg">{s.name}</h3>
                <ul className="mt-4 flex-1 space-y-2 text-sm text-muted">
                  {s.pourQui.particuliers.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span
                        className={cn("mt-2 size-1 shrink-0", accent[s.accent].solid)}
                        aria-hidden
                      />
                      {item}
                    </li>
                  ))}
                </ul>
                <span className="mt-5 inline-flex items-center gap-2 font-display text-sm transition-colors group-hover:text-accent">
                  Voir le détail
                  <ArrowRight className="size-4" aria-hidden />
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Gestes d'urgence */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="En attendant notre arrivée"
              title="Les bons gestes, tout de suite."
              intro="Ces quelques réflexes limitent l'essentiel des dégâts. Ils ne coûtent rien et ne demandent aucune compétence technique."
            />
            <div className="mt-6 border-l-2 border-urgence bg-canvas p-5">
              <p className="text-sm text-muted">
                Urgence en cours ?{" "}
                <a
                  href={`tel:${site.phoneUrgence}`}
                  className="tnum prose-link"
                >
                  {site.phoneUrgenceDisplay}
                </a>
              </p>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid gap-5 sm:grid-cols-2">
              {gestesUrgence.map((g) => (
                <div key={g.situation} className="tile p-6">
                  <div className="flex items-start gap-3">
                    <ShieldAlert
                      className="mt-0.5 size-4 shrink-0 text-urgence-text"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                    <h3 className="font-display font-medium">{g.situation}</h3>
                  </div>
                  <ol className="mt-4 space-y-2.5 text-sm text-muted">
                    {g.gestes.map((geste, i) => (
                      <li key={geste} className="flex gap-3">
                        <span className="tnum shrink-0 text-faint">{i + 1}.</span>
                        {geste}
                      </li>
                    ))}
                  </ol>
                </div>
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
      />

      <CtaFinal
        titre="Décrivez-nous le problème."
        intro="Trois questions, et nous ouvrons la conversation sur WhatsApp avec votre demande déjà rédigée. Le devis est gratuit."
        message={MESSAGE}
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
