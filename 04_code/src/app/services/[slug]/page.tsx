import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRightIcon, CheckIcon, WarningIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";

import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqSection } from "@/components/shared/faq-section";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { JsonLd } from "@/components/ui/json-ld";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";

import { services, getService } from "@/content/services";
import { buildMetadata, serviceJsonLd, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";
import { whatsappUrl, whatsappServiceMessage } from "@/lib/whatsapp";

/* Pages générées au build depuis le modèle de contenu.
   Ajouter un métier = une entrée dans `services.ts`, pas une page à écrire. */
export async function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};

  return buildMetadata({
    title: service.seo.title,
    description: service.seo.description,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const autres = services.filter((s) => s.slug !== service.slug);
  const message = whatsappServiceMessage(service.longName);

  return (
    <>
      <PageHeader
        eyebrow={service.tagline}
        title={service.longName}
        intro={service.intro}
        photo={service.photo}
        layout={service.enTete}
        breadcrumb={[
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="/contact" size="xl">
            Demander un devis
            <ArrowRightIcon weight="bold" data-icon="inline-end" aria-hidden />
          </ButtonLink>
          <ButtonLink href={whatsappUrl(message)} variant="outline" size="xl" external>
            <WhatsappLogoIcon weight="fill" className="text-whatsapp" data-icon="inline-start" aria-hidden />
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

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {service.prestations.map((p, i) => (
            <Reveal key={p.title} delay={i * 40} className="h-full">
              <Card className="h-full gap-0 py-0 shadow-card transition-shadow hover:shadow-float">
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
      </Section>

      {/* ------------------------------------------------ Signes d'alerte
          Contenu à forte valeur d'usage : le visiteur reconnaît son symptôme,
          ce qui qualifie sa demande avant même qu'il nous écrive. */}
      <Section tone="doux">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="Quand nous appeler"
              title="Les signaux à ne pas laisser traîner."
              intro="Aucun de ces symptômes n'est une urgence absolue le jour où il apparaît. Tous le deviennent si on les laisse s'installer."
            />
            <p className="mt-6 text-sm text-subtil">
              Un doute sur l&apos;un de ces points&nbsp;?{" "}
              <a
                href={whatsappUrl(whatsappServiceMessage(`${service.longName} — j'ai un doute sur un symptôme`))}
                target="_blank"
                rel="noopener noreferrer"
                className="prose-link"
              >
                Décrivez-le nous sur WhatsApp
              </a>
              , le diagnostic à distance est gratuit.
            </p>
          </div>

          <div className="lg:col-span-7">
            <Card className="gap-0 py-2 shadow-card">
              <CardContent className="px-0">
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
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* ------------------------------------------------ Pour qui */}
      <Section>
        <SectionHeader eyebrow="Pour qui" title="Particuliers et professionnels." />

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {[
            { titre: "Particuliers", icon: "maison" as const, items: service.pourQui.particuliers, href: "/particuliers", lien: "Espace particuliers" },
            { titre: "Professionnels", icon: "bureaux" as const, items: service.pourQui.professionnels, href: "/professionnels", lien: "Contrats de maintenance" },
          ].map((bloc) => (
            <Card key={bloc.titre} className="gap-0 px-7 py-8 shadow-card sm:px-9">
              <div className="flex items-center gap-4">
                <IconTile name={bloc.icon} />
                <h3 className="text-xl font-bold">{bloc.titre}</h3>
              </div>
              <ul className="mt-6 space-y-2.5">
                {bloc.items.map((item) => (
                  <li key={item} className="flex gap-3 text-muted-foreground">
                    <CheckIcon weight="bold" className="mt-1 size-4 shrink-0 text-primary" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href={bloc.href}
                className="mt-7 inline-flex items-center gap-2 text-sm font-semibold text-primary hover:underline hover:underline-offset-4"
              >
                {bloc.lien}
                <ArrowRightIcon weight="bold" className="size-4" aria-hidden />
              </Link>
            </Card>
          ))}
        </div>
      </Section>

      {/* ------------------------------------------------ Méthode */}
      <Section tone="doux">
        <SectionHeader
          eyebrow="Notre méthode"
          title="Comment se déroule une intervention."
          intro="La même séquence à chaque fois, du dépannage de particulier au chantier d'entreprise. C'est ce qui rend le devis prévisible."
        />

        <ol className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {service.process.map((etape, i) => (
            <li key={etape.step}>
              <Reveal delay={i * 50} className="h-full">
                <Card className="h-full gap-0 px-5 py-6 shadow-card">
                  <span className="tnum flex size-10 items-center justify-center rounded-xl bg-primary font-heading text-sm font-extrabold text-primary-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-base font-bold">{etape.step}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{etape.detail}</p>
                </Card>
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
      <Section tone="doux">
        <SectionHeader eyebrow="Nos autres métiers" title="Un besoin ailleurs ?" />
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {autres.map((s) => (
            <Card key={s.slug} className="group relative flex-row items-center gap-5 px-6 py-6 shadow-card transition-shadow hover:shadow-float">
              <IconTile name={s.icon} size="lg" />
              <span className="flex-1">
                <Link
                  href={`/services/${s.slug}`}
                  className="block font-heading text-lg font-bold after:absolute after:inset-0 after:rounded-xl"
                >
                  {s.longName}
                </Link>
                <span className="mt-0.5 block text-sm text-muted-foreground">{s.tagline}</span>
              </span>
              <ArrowRightIcon
                weight="bold"
                className="size-5 text-primary transition-transform group-hover:translate-x-1"
                aria-hidden
              />
            </Card>
          ))}
        </div>
      </Section>

      <CtaBand titre={`Un besoin en ${service.name.toLowerCase()} ? Parlons-en.`} message={message} />

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
