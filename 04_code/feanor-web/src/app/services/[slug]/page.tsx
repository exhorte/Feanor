import { notFound } from "next/navigation";
import Link from "next/link";
import { AlertTriangle, Home, Building2, ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { CtaFinal } from "@/components/shared/cta-final";
import { FaqSection } from "@/components/shared/faq-section";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ButtonLink } from "@/components/ui/button";
import { MetierIcon, accent } from "@/components/ui/metier";
import { JsonLd } from "@/components/ui/json-ld";

import { services, getService } from "@/content/services";
import {
  buildMetadata,
  serviceJsonLd,
  faqJsonLd,
  breadcrumbJsonLd,
} from "@/lib/seo";
import { whatsappUrl, whatsappServiceMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/* Pages générées au build depuis le modèle de contenu.
   Ajouter un métier = une entrée dans `services.ts`, pas une page à écrire. */
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const tone = accent[service.accent];
  const autres = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <PageHeader
        eyebrow={service.tagline}
        title={service.longName}
        intro={service.intro}
        accentClass={tone.text}
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="lg">
            Demander un devis
            <ArrowRight className="size-4" aria-hidden />
          </ButtonLink>
          <ButtonLink
            href={whatsappUrl(whatsappServiceMessage(service.longName))}
            variant="whatsapp"
            size="lg"
            external
          >
            En parler sur WhatsApp
          </ButtonLink>
        </div>
      </PageHeader>

      {/* ------------------------------------------------ Prestations */}
      <Section>
        <SectionHeader
          eyebrow="Prestations"
          title="Ce que nous faisons, concrètement."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {service.prestations.map((p, i) => (
            <Reveal key={p.title} delay={i * 40} className="h-full">
              <div className="tile flex h-full flex-col p-6">
                <div className="flex items-center gap-3">
                  <span
                    className={cn("size-1.5 shrink-0", tone.solid)}
                    aria-hidden
                  />
                  <h3 className="font-display font-medium">{p.title}</h3>
                </div>
                <p className="mt-3 text-sm text-muted">{p.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Signes d'alerte
          Contenu à forte valeur d'usage : le visiteur reconnaît son symptôme,
          ce qui qualifie sa demande avant même qu'il nous écrive. */}
      <Section surface>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Quand nous appeler"
              title="Les signaux à ne pas laisser traîner."
              intro="Aucun de ces symptômes n'est une urgence absolue le jour où il apparaît. Tous le deviennent si on les laisse s'installer."
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

            <p className="mt-6 text-sm text-faint">
              Un doute sur l&apos;un de ces points ?{" "}
              <a
                href={whatsappUrl(
                  whatsappServiceMessage(
                    `${service.longName} — j'ai un doute sur un symptôme`,
                  ),
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link"
              >
                Décrivez-le nous sur WhatsApp
              </a>
              , le diagnostic à distance est gratuit.
            </p>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Pour qui */}
      <Section>
        <SectionHeader eyebrow="Pour qui" title="Particuliers et professionnels." />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <div className="tile p-7 sm:p-9">
            <Home className="size-5 text-accent" strokeWidth={1.75} aria-hidden />
            <h3 className="mt-4 font-display text-xl">Particuliers</h3>
            <ul className="mt-5 space-y-2.5">
              {service.pourQui.particuliers.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-2.5 size-1 shrink-0 bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="tile p-7 sm:p-9">
            <Building2 className="size-5 text-accent" strokeWidth={1.75} aria-hidden />
            <h3 className="mt-4 font-display text-xl">Professionnels</h3>
            <ul className="mt-5 space-y-2.5">
              {service.pourQui.professionnels.map((item) => (
                <li key={item} className="flex gap-3 text-muted">
                  <span className="mt-2.5 size-1 shrink-0 bg-accent" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/professionnels"
              className="mt-6 inline-flex items-center gap-2 font-display text-sm text-accent transition-colors hover:text-accent-deep"
            >
              Contrats de maintenance
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Process */}
      <Section surface>
        <SectionHeader
          eyebrow="Notre méthode"
          title="Comment se déroule une intervention."
          intro="La même séquence à chaque fois, du dépannage de particulier au chantier d'entreprise. C'est ce qui rend le devis prévisible."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {service.process.map((etape, i) => (
            <li key={etape.step}>
              <Reveal delay={i * 50} className="h-full">
                <div className="tile flex h-full flex-col p-6">
                  <span className={cn("tnum font-display text-sm", tone.text)}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-3 font-display font-medium">{etape.step}</h3>
                  <p className="mt-2 text-sm text-muted">{etape.detail}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </Section>

      {/* ------------------------------------------------ FAQ */}
      <FaqSection
        items={service.faq}
        eyebrow="Questions fréquentes"
        title={`${service.name} — ce qu'on nous demande.`}
        lienToutes
      />

      {/* ------------------------------------------------ Autres métiers */}
      <Section surface>
        <SectionHeader eyebrow="Nos autres métiers" title="Un besoin ailleurs ?" />
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {autres.map((s) => (
            <Link
              key={s.slug}
              href={`/services/${s.slug}`}
              className="tile group flex items-center gap-4 p-6 transition-shadow hover:shadow-float"
            >
              <MetierIcon icon={s.icon} tone={s.accent} />
              <span>
                <span className="block font-display font-medium">{s.name}</span>
                <span className="mt-0.5 block text-sm text-faint">
                  {s.tagline}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </Section>

      <CtaFinal
        titre={`Un besoin en ${service.name.toLowerCase()} ?`}
        message={whatsappServiceMessage(service.longName)}
      />

      <JsonLd
        data={[
          serviceJsonLd({
            name: service.longName,
            description: service.seo.description,
            path: `/services/${service.slug}`,
          }),
          faqJsonLd(service.faq),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />
    </>
  );
}
