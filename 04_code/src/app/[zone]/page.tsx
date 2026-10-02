import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRightIcon, ClockIcon, MapPinIcon, WarningIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";

import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqSection } from "@/components/shared/faq-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

import { zonesLocales, getZone } from "@/content/zones";
import { getService } from "@/content/services";
import { site } from "@/content/site";
import { buildMetadata, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { whatsappUrl, whatsappServiceMessage } from "@/lib/whatsapp";

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

export async function generateMetadata({ params }: { params: Promise<{ zone: string }> }) {
  const { zone: slug } = await params;
  const zone = getZone(slug);
  if (!zone) return {};

  return buildMetadata({
    title: zone.seo.title,
    description: zone.seo.description,
    path: `/${zone.slug}`,
  });
}

export default async function ZonePage({ params }: { params: Promise<{ zone: string }> }) {
  const { zone: slug } = await params;
  const zone = getZone(slug);
  if (!zone) notFound();

  const service = getService(zone.serviceSlug);
  if (!service) notFound();

  const message = whatsappServiceMessage(zone.service, zone.ville);

  return (
    <>
      <PageHeader
        eyebrow={`${zone.ville} · ${zone.region}`}
        title={`${zone.service} à ${zone.ville}`}
        intro={`Installation, entretien et dépannage par ${site.name}. ${zone.delai}`}
        photo={service.photo}
        breadcrumb={[{ label: `${zone.service} ${zone.ville}`, href: `/${zone.slug}` }]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="xl">
            Demander une intervention
            <ArrowRightIcon weight="bold" data-icon="inline-end" aria-hidden />
          </ButtonLink>
          <ButtonLink href={whatsappUrl(message)} variant="outline" size="xl" external>
            <WhatsappLogoIcon weight="fill" className="text-whatsapp" data-icon="inline-start" aria-hidden />
            WhatsApp
          </ButtonLink>
        </div>
      </PageHeader>

      {/* ------------------------------------------------ Contexte local */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Le contexte local" title={`Ce qui est particulier à ${zone.ville}.`} />
          </div>
          <div className="lg:col-span-7">
            <p className="text-lg text-muted-foreground">{zone.contexte}</p>

            <Card className="mt-8 flex-row items-start gap-4 px-6 py-5 shadow-card">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <ClockIcon weight="duotone" className="size-5" aria-hidden />
              </span>
              <span>
                <span className="block font-semibold text-foreground">Délai d&apos;intervention</span>
                <span className="mt-0.5 block text-sm text-muted-foreground">{zone.delai}</span>
              </span>
            </Card>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Quartiers */}
      <Section tone="doux">
        <SectionHeader
          eyebrow="Zones couvertes"
          title={`Où nous intervenons à ${zone.ville}.`}
          intro="Cette liste n'est pas limitative — si votre quartier n'y figure pas, demandez-nous."
        />
        <ul className="mt-8 flex flex-wrap gap-2.5">
          {zone.quartiers.map((q) => (
            <li
              key={q}
              className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-medium text-foreground shadow-card ring-1 ring-foreground/8"
            >
              <MapPinIcon weight="fill" className="size-4 text-primary" aria-hidden />
              {q}
            </li>
          ))}
        </ul>
      </Section>

      {/* ------------------------------------------------ Prestations */}
      <Section>
        <SectionHeader eyebrow="Prestations" title={`${zone.service} — ce que nous faisons.`} />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.prestations.map((p, i) => (
            <Reveal key={p.title} delay={i * 40} className="h-full">
              <Card className="h-full gap-0 py-0 shadow-card">
                <CardHeader className="gap-0 px-6 pt-7">
                  <IconTile name={p.icon} />
                  <CardTitle className="mt-5 text-[1.05rem] font-bold">{p.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pt-2 pb-7">
                  <CardDescription className="text-[0.92rem] leading-relaxed">{p.description}</CardDescription>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>

        <Link
          href={`/services/${service.slug}`}
          className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:underline-offset-4"
        >
          Voir la page complète {service.longName.toLowerCase()}
          <ArrowRightIcon weight="bold" className="size-4" aria-hidden />
        </Link>
      </Section>

      {/* ------------------------------------------------ Signes d'alerte */}
      <Section tone="doux">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader eyebrow="Quand nous appeler" title="Les signaux à ne pas laisser traîner." />
          </div>
          <div className="lg:col-span-7">
            <Card className="gap-0 py-2 shadow-card">
              <ul className="divide-y divide-border">
                {service.signesDAlerte.map((signe) => (
                  <li key={signe} className="flex items-start gap-4 px-6 py-4">
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-primary">
                      <WarningIcon weight="duotone" className="size-4" aria-hidden />
                    </span>
                    <span className="pt-0.5 text-[0.95rem] text-muted-foreground">{signe}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <FaqSection items={service.faq} lienToutes />

      {/* ------------------------------------------------ Autres zones */}
      <Section tone="doux">
        <SectionHeader eyebrow="Autres zones" title="Nous intervenons aussi ici." />
        <ul className="mt-8 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {zonesLocales
            .filter((z) => z.slug !== zone.slug)
            .map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/${z.slug}`}
                  className="group flex items-center justify-between gap-3 rounded-xl bg-white px-5 py-4 text-sm font-semibold text-foreground shadow-card ring-1 ring-foreground/8 transition-colors hover:text-primary"
                >
                  <span className="inline-flex items-center gap-2.5">
                    <MapPinIcon weight="duotone" className="size-4 text-primary" aria-hidden />
                    {z.service} à {z.ville}
                  </span>
                  <ArrowRightIcon weight="bold" className="size-4 text-primary/60 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </Link>
              </li>
            ))}
        </ul>
      </Section>

      <CtaBand titre={`Besoin d'un technicien à ${zone.ville} ?`} message={message} />

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
