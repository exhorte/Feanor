import Link from "next/link";
import { Check, Minus, ArrowRight, ClipboardList, Clock, FileText } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { CtaFinal } from "@/components/shared/cta-final";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";

import { contrats, cycleCare } from "@/content/contrats";
import { secteurs } from "@/content/secteurs";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Feanor Business — Maintenance technique pour entreprises",
  description:
    "Contrats de maintenance multi-techniques à Dakar : froid, climatisation, électricité, plomberie. Hôtels, restaurants, bureaux, commerces, industrie. Un seul interlocuteur, des délais écrits au contrat.",
  path: "/professionnels",
});

const MESSAGE = "Bonjour Feanor, je souhaite discuter d'un contrat de maintenance pour mon établissement.";

export default function ProfessionnelsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Feanor Business"
        title="La maintenance technique de vos bâtiments, sans interruption."
        intro="Le froid, l'électricité et la plomberie sur un seul contrat, avec un interlocuteur unique et des délais d'intervention écrits. Plus de renvoi de responsabilité entre trois prestataires quand une panne se situe à la frontière de deux métiers."
        breadcrumb={[{ label: "Professionnels", href: "/professionnels" }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Demander une étude
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href={whatsappUrl(MESSAGE)} variant="whatsapp" size="lg" external>
            En parler sur WhatsApp
          </ButtonLink>
        </div>
      </PageHeader>

      {/* ------------------------------------------------ Le problème */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Le constat"
              title="Le budget technique est presque toujours subi."
              intro="Sur la plupart des sites que nous reprenons, on paie des urgences, jamais des visites. C'est le mode le plus cher qui existe."
            />
          </div>

          <div className="lg:col-span-7">
            <ul className="grid gap-px border border-line bg-line sm:grid-cols-2">
              {[
                {
                  icon: ClipboardList,
                  t: "Aucun inventaire",
                  d: "Personne ne sait exactement combien d'équipements techniques compte le site, ni leur âge.",
                },
                {
                  icon: Clock,
                  t: "Tout est urgent",
                  d: "Les interventions sont déclenchées par la panne, jamais planifiées.",
                },
                {
                  icon: FileText,
                  t: "Aucune trace",
                  d: "Ce qui a été réparé l'an dernier n'est écrit nulle part. Les mêmes pannes reviennent.",
                },
                {
                  icon: Minus,
                  t: "Responsabilité diluée",
                  d: "Trois prestataires, et chacun renvoie le problème sur le métier voisin.",
                },
              ].map((item) => (
                <li key={item.t} className="bg-canvas p-6">
                  <item.icon
                    className="size-5 text-urgence-text"
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <h3 className="mt-3 font-display font-medium">{item.t}</h3>
                  <p className="mt-2 text-sm text-muted">{item.d}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Secteurs */}
      <Section>
        <SectionHeader
          eyebrow="Secteurs"
          title="Chaque activité a son point de rupture."
          intro="Nous ne vendons pas la même chose à un hôtel et à un entrepôt. Ce qui change, ce n'est pas la prestation : c'est ce qui se casse en premier, et ce que ça coûte."
        />

        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {secteurs.map((s, i) => (
            <Reveal key={s.slug} delay={i * 40} className="h-full">
              <article className="flex h-full flex-col bg-canvas p-7">
                <h3 className="font-display text-lg">{s.nom}</h3>
                <p className="mt-3 border-l-2 border-accent pl-4 text-sm text-muted">
                  {s.enjeu}
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted">
                  {s.interventions.map((item) => (
                    <li key={item} className="flex gap-3">
                      <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Contrats */}
      <Section id="contrats" surface>
        <SectionHeader
          eyebrow="Contrats de maintenance"
          title="Trois niveaux, un seul principe."
          intro="Plus le coût d'un arrêt est élevé, plus le délai d'intervention garanti doit être court. C'est le seul critère qui détermine vraiment le palier."
        />

        <div className="mt-12 grid gap-px border border-line bg-line lg:grid-cols-3">
          {contrats.map((c) => (
            <div
              key={c.tier}
              className={cn(
                "flex flex-col bg-canvas p-7 sm:p-8",
                c.featured && "ring-2 ring-inset ring-accent",
              )}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-display text-xl">{c.tier}</h3>
                {c.featured && (
                  <span className="border border-accent px-2 py-0.5 font-display text-[0.65rem] uppercase tracking-[0.14em] text-accent">
                    Le plus choisi
                  </span>
                )}
              </div>

              <p className="mt-2 text-sm text-accent">{c.pitch}</p>
              <p className="mt-4 text-sm text-muted">{c.cible}</p>

              <ul className="mt-6 flex-1 space-y-2.5">
                {c.inclus.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Check
                      className="mt-1 size-3.5 shrink-0 text-accent"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-muted">{item}</span>
                  </li>
                ))}
                {c.exclus?.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <Minus
                      className="mt-1 size-3.5 shrink-0 text-faint"
                      strokeWidth={2.5}
                      aria-hidden
                    />
                    <span className="text-faint">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <ButtonLink
                  href="/contact"
                  variant={c.featured ? "primary" : "outline"}
                  className="w-full"
                >
                  Demander un devis
                </ButtonLink>
              </div>
            </div>
          ))}
        </div>

        {/* Pourquoi pas de prix — l'objection arrive ici, on la traite ici. */}
        <div className="mt-8 border border-line bg-canvas p-6">
          <h3 className="font-display font-medium">
            Pourquoi aucun prix n&apos;est affiché
          </h3>
          <p className="mt-2 max-w-3xl text-sm text-muted">
            Parce qu&apos;il serait faux. Un contrat se calcule sur le nombre
            d&apos;équipements, leur type, leur âge, l&apos;intensité d&apos;usage
            et le délai d&apos;intervention attendu — dix climatiseurs de bureau
            et dix climatiseurs d&apos;hôtel en bord de mer n&apos;ont pas le même
            coût d&apos;entretien. Nous chiffrons après la visite
            d&apos;évaluation, qui est gratuite et sans engagement.
          </p>
        </div>
      </Section>

      {/* ------------------------------------------------ Cycle Care */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Feanor Care"
              title="Ce qui se passe, concrètement, pendant un contrat."
              intro="Un contrat de maintenance qui se résume à « on passe de temps en temps » n'en est pas un. Voici la séquence, à chaque site, à chaque passage."
            />
          </div>

          <div className="lg:col-span-7">
            <ol className="divide-y divide-line border-y border-line">
              {cycleCare.map((etape, i) => (
                <li key={etape.step} className="flex gap-5 py-4">
                  <span className="tnum font-display text-sm text-accent">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>
                    <span className="block font-display font-medium">
                      {etape.step}
                    </span>
                    <span className="mt-0.5 block text-sm text-muted">
                      {etape.detail}
                    </span>
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Audit */}
      <Section surface>
        <div className="border-l-2 border-accent bg-canvas p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl">
            Commencez par un audit, pas par un contrat.
          </h2>
          <p className="mt-5 max-w-3xl text-muted">
            Nous venons voir le site, inventorier les équipements et relever leur
            état réel. Vous en ressortez avec un document : ce que vous possédez,
            ce qui est en fin de vie, ce qui présente un risque, et ce qu&apos;il
            faut budgéter sur les douze prochains mois. Ce document vous
            appartient, que vous signiez un contrat avec nous ou non.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/contact" size="lg">
              Demander une visite d&apos;évaluation
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <Link
              href="/services/maintenance-depannage"
              className="inline-flex items-center gap-2 px-2 py-3 font-display text-sm text-accent transition-colors hover:text-accent-deep"
            >
              En savoir plus sur la maintenance
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      <CtaFinal
        titre="Parlons de votre site."
        intro="Décrivez-nous votre parc en deux lignes. Nous vous dirons franchement si un contrat se justifie — et si ce n'est pas le cas, nous vous le dirons aussi."
        message={MESSAGE}
      />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Professionnels", path: "/professionnels" },
        ])}
      />
    </>
  );
}
