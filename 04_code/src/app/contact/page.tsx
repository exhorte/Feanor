import { ClockIcon } from "@phosphor-icons/react/ssr";

import { PageHeader } from "@/components/shared/page-header";
import { Horaires } from "@/components/shared/horaires";
import { DiagnosticFlow } from "@/components/diagnostic/diagnostic-flow";
import { Card, CardContent } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button-link";

import { site } from "@/content/site";
import type { IconName } from "@/content/types";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { whatsappUrl, telUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Contact — Demander une intervention ou un devis",
  description:
    "Décrivez votre problème en trois questions et ouvrez la conversation sur WhatsApp, ou appelez-nous directement. Devis gratuit. Oralec, électricité et climatisation à Dakar.",
  path: "/contact",
});

const MESSAGE_PRO =
  "Bonjour Oralec, je représente un établissement et je souhaite une visite d'évaluation pour un contrat de maintenance.";

export default function ContactPage() {
  const canaux: { icon: IconName; label: string; valeur: string; href?: string; externe?: boolean }[] = [
    { icon: "telephone", label: "Téléphone", valeur: site.phoneDisplay, href: telUrl() },
    { icon: "whatsapp", label: "WhatsApp", valeur: "Le plus rapide, photos comprises", href: whatsappUrl(), externe: true },
    { icon: "sirene", label: "Urgence 7j/7", valeur: site.phoneUrgenceDisplay, href: telUrl(true) },
    { icon: "email", label: "E-mail", valeur: site.email, href: `mailto:${site.email}` },
    { icon: "localisation", label: "Adresse", valeur: `${site.address.street}, ${site.address.city}, ${site.address.countryName}` },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Dites-nous ce qui se passe."
        intro="Trois questions, et nous ouvrons la conversation avec votre demande déjà rédigée. Si vous préférez parler, le téléphone reste le plus rapide."
        breadcrumb={[{ label: "Contact", href: "/contact" }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Parcours */}
          <div className="lg:col-span-7">
            <DiagnosticFlow />
          </div>

          {/* Canaux directs — toujours disponibles, même sans JavaScript */}
          <div className="space-y-6 lg:col-span-5">
            <Card className="gap-0 py-2 shadow-card">
              <CardContent className="px-0">
                <h2 className="px-6 pt-4 pb-2 text-sm font-semibold tracking-normal text-subtil">
                  Ou directement
                </h2>
                <ul className="divide-y divide-border">
                  {canaux.map((c) => {
                    const contenu = (
                      <>
                        <IconTile name={c.icon} size="sm" />
                        <span>
                          <span className="block font-semibold text-foreground">{c.label}</span>
                          <span className="tnum block text-sm text-muted-foreground">{c.valeur}</span>
                        </span>
                      </>
                    );
                    return (
                      <li key={c.label}>
                        {c.href ? (
                          <a
                            href={c.href}
                            {...(c.externe ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                            className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-muted"
                          >
                            {contenu}
                          </a>
                        ) : (
                          <div className="flex items-center gap-4 px-6 py-4">{contenu}</div>
                        )}
                      </li>
                    );
                  })}
                </ul>
              </CardContent>
            </Card>

            <Card className="gap-0 px-6 py-6 shadow-card">
              <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-foreground">
                <ClockIcon weight="duotone" className="size-4 text-primary" aria-hidden />
                Horaires
              </p>
              <Horaires />
            </Card>

            <Card className="gap-0 border-l-4 border-l-primary px-6 py-6 shadow-card">
              <h3 className="text-base font-bold">Ce qui nous aide le plus</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>• Une photo de l&apos;équipement et de sa plaque signalétique</li>
                <li>• Depuis quand le problème est apparu</li>
                <li>• Ce qui a déjà été tenté, ou par qui</li>
              </ul>
            </Card>
          </div>
        </div>
      </Section>

      <Section tone="doux">
        <div className="grid items-end gap-8 lg:grid-cols-12">
          <div className="lg:col-span-8">
            <SectionHeader
              eyebrow="Entreprises"
              title="Vous représentez un établissement ?"
              intro="Pour un contrat de maintenance ou un audit de parc, la visite d'évaluation est gratuite et sans engagement. Décrivez votre site en deux lignes : nombre d'équipements, type d'activité, contraintes horaires."
            />
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <ButtonLink href={whatsappUrl(MESSAGE_PRO)} size="xl" external>
              Demander une visite d&apos;évaluation
            </ButtonLink>
          </div>
        </div>
      </Section>

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Contact", path: "/contact" },
        ])}
      />
    </>
  );
}
