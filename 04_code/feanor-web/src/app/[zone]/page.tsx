import { notFound } from "next/navigation";
import Link from "next/link";
import { MapPin, Clock, AlertTriangle, ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { CtaFinal } from "@/components/shared/cta-final";
import { FaqSection } from "@/components/shared/faq-section";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { accent } from "@/components/ui/metier";
import { JsonLd } from "@/components/ui/json-ld";

import { zonesLocales, getZone } from "@/content/zones";
import { getService } from "@/content/services";
import {
  buildMetadata,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { whatsappUrl, whatsappServiceMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Pages locales, générées depuis `zones.ts`.
 *
 * Route dynamique de premier niveau : les routes statiques (/services,
 * /contact…) restent prioritaires dans le routage Next, et `dynamicParams`
 * à false garantit un vrai 404 sur tout slug inconnu.
 *
 * Règle éditoriale : chaque page porte un contenu qui lui est propre
 * (le champ `contexte`). Un gabarit dupliqué en changeant le nom de la ville
 * est pénalisé par Google, pas récompensé.
 */
export async function generateStaticParams() {
  return zonesLocales.map((z) => ({ zone: z.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ zone: string }>;
}) {
  const { zone: slug } = await params;
  const zone = getZone(slug);
  if (!zone) return {};

  return buildMetadata({
    title: zone.seo.title,
    description: zone.seo.description,
    path: `/${zone.slug}`,
  });
}

export default async function ZonePage({
  params,
}: {
  params: Promise<{ zone: string }>;
}) {
  const { zone: slug } = await params;
  const zone = getZone(slug);
  if (!zone) notFound();

  const service = getService(zone.serviceSlug);
  if (!service) notFound();

  const tone = accent[service.accent];
  const message = whatsappServiceMessage(zone.service, zone.ville);

  return (
    <>
      <PageHeader
        eyebrow={`${zone.ville} · ${zone.region}`}
        title={`${zone.service} à ${zone.ville}`}
        intro={`Installation, entretien et dépannage par Feanor. ${zone.delai}`}
        accentClass={tone.text}
        breadcrumb={[{ label: `${zone.service} ${zone.ville}`, href: `/${zone.slug}` }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Demander une intervention
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink href={whatsappUrl(message)} variant="whatsapp" size="lg" external>
            WhatsApp
          </ButtonLink>
        </div>
      </PageHeader>

      {/* ------------------------------------------------ Contexte local */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Le contexte local"
              title={`Ce qui est particulier à ${zone.ville}.`}
            />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-muted">{zone.contexte}</p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div className="flex flex-1 items-start gap-3 border-l-2 border-accent bg-surface p-5">
                <Clock className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>
                  <span className="block font-display text-sm font-medium">
                    Délai d&apos;intervention
                  </span>
                  <span className="mt-1 block text-sm text-muted">
                    {zone.delai}
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Quartiers */}
      <Section surface>
        <SectionHeader
          eyebrow="Zones couvertes"
          title={`Où nous intervenons à ${zone.ville}.`}
          intro="Cette liste n'est pas limitative — si votre quartier n'y figure pas, demandez-nous."
        />
        <ul className="mt-8 flex flex-wrap gap-2">
          {zone.quartiers.map((q) => (
            <li
              key={q}
              className="inline-flex items-center gap-2 border border-line bg-canvas px-3 py-1.5 text-sm text-muted"
            >
              <MapPin className="size-3.5 text-accent" aria-hidden />
              {q}
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------ Prestations */}
      <Section>
        <SectionHeader
          eyebrow="Prestations"
          title={`${zone.service} — ce que nous faisons.`}
        />

        <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {service.prestations.map((p, i) => (
            <Reveal key={p.title} delay={i * 40} className="h-full">
              <div className="flex h-full flex-col bg-canvas p-6">
                <div className="flex items-center gap-3">
                  <span className={cn("size-1.5 shrink-0", tone.solid)} aria-hidden />
                  <h3 className="font-display font-medium">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="mt-8 inline-flex items-center gap-2 font-display text-sm text-accent transition-colors hover:text-accent-deep"
        >
          Voir la page complète {service.name}
          <ArrowRight className="size-4" aria-hidden />
        </Link>
      </Section>

      {/* ------------------------------------------------ Signes d'alerte */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Quand nous appeler"
              title="Les signaux à ne pas laisser traîner."
            />
          </div>
          <div className="lg:col-span-7">
            <ul className="divide-y divide-line border-y border-line">
              {service.signesDAlerte.map((signe) => (
                <li key={signe} className="flex items-start gap-4 py-4">
                  <AlertTriangle
                    className={cn("mt-0.5 size-4 shrink-0", tone.text)}
                    strokeWidth={1.75}
                    aria-hidden
                  />
                  <span className="text-muted">{signe}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <FaqSection items={service.faq} lienToutes />

      {/* ------------------------------------------------ Autres zones */}
      <Section surface>
        <SectionHeader eyebrow="Autres zones" title="Nous intervenons aussi ici." />
        <ul className="mt-8 grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {zonesLocales
            .filter((z) => z.slug !== zone.slug)
            .map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/${z.slug}`}
                  className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                >
                  <MapPin className="size-3.5 shrink-0" aria-hidden />
                  {z.service} à {z.ville}
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <CtaFinal
        titre={`Besoin d'un technicien à ${zone.ville} ?`}
        message={message}
      />

      <JsonLd
        data={[
          serviceJsonLd({
            name: `${zone.service} à ${zone.ville}`,
            description: zone.seo.description,
            path: `/${zone.slug}`,
          }),
          faqJsonLd(service.faq),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: `${zone.service} ${zone.ville}`, path: `/${zone.slug}` },
          ]),
        ]}
      />
    </>
  );
}
