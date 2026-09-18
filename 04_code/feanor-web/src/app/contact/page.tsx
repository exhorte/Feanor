import { Phone, MessageCircle, Mail, MapPin, Clock, Siren } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { DiagnosticFlow } from "@/components/diagnostic/diagnostic-flow";
import { Section, SectionHeader } from "@/components/ui/section";
import { JsonLd } from "@/components/ui/json-ld";

import { site } from "@/content/site";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { whatsappUrl, telUrl } from "@/lib/whatsapp";

export const metadata = buildMetadata({
  title: "Contact — Demander une intervention ou un devis",
  description:
    "Décrivez votre problème en trois questions et ouvrez la conversation sur WhatsApp, ou appelez-nous directement. Devis gratuit. Feanor, Dakar.",
  path: "/contact",
});

export default function ContactPage() {
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
          <div className="lg:col-span-5">
            <h2 className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
              Ou directement
            </h2>

            <div className="mt-5 divide-y divide-line border-y border-line">
              <a
                href={telUrl()}
                className="flex items-start gap-4 py-5 transition-colors hover:text-accent"
              >
                <Phone className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                <span>
                  <span className="block font-display font-medium">Téléphone</span>
                  <span className="tnum mt-0.5 block text-muted">
                    {site.phoneDisplay}
                  </span>
                </span>
              </a>

              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 py-5 transition-colors hover:text-accent"
              >
                <MessageCircle
                  className="mt-0.5 size-5 shrink-0 text-whatsapp-text"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span>
                  <span className="block font-display font-medium">WhatsApp</span>
                  <span className="mt-0.5 block text-muted">
                    Le plus rapide, photos comprises
                  </span>
                </span>
              </a>

              <a
                href={telUrl(true)}
                className="flex items-start gap-4 py-5 transition-colors hover:text-urgence-text"
              >
                <Siren
                  className="mt-0.5 size-5 shrink-0 text-urgence-text"
                  strokeWidth={1.75}
                  aria-hidden
                />
                <span>
                  <span className="block font-display font-medium">Urgence</span>
                  <span className="tnum mt-0.5 block text-muted">
                    {site.phoneUrgenceDisplay} · 7j/7
                  </span>
                </span>
              </a>

              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-4 py-5 transition-colors hover:text-accent"
              >
                <Mail className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                <span>
                  <span className="block font-display font-medium">E-mail</span>
                  <span className="mt-0.5 block text-muted">{site.email}</span>
                </span>
              </a>

              <div className="flex items-start gap-4 py-5">
                <MapPin className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                <span>
                  <span className="block font-display font-medium">Adresse</span>
                  <span className="mt-0.5 block text-muted">
                    {site.address.street}
                    <br />
                    {site.address.city}, {site.address.countryName}
                  </span>
                </span>
              </div>

              <div className="flex items-start gap-4 py-5">
                <Clock className="mt-0.5 size-5 shrink-0 text-accent" strokeWidth={1.75} aria-hidden />
                <span>
                  <span className="block font-display font-medium">Horaires</span>
                  <span className="mt-0.5 block text-muted">
                    {site.hours.semaine}
                    <br />
                    {site.hours.samedi}
                    <br />
                    <span className="text-urgence-text">{site.hours.urgence}</span>
                  </span>
                </span>
              </div>
            </div>

            <div className="mt-8 border-l-2 border-accent bg-surface p-5">
              <h3 className="font-display font-medium">Ce qui nous aide le plus</h3>
              <ul className="mt-3 space-y-2 text-sm text-muted">
                <li className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden />
                  Une photo de l&apos;équipement et de sa plaque signalétique
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden />
                  Depuis quand le problème est apparu
                </li>
                <li className="flex gap-3">
                  <span className="mt-2 size-1 shrink-0 bg-accent" aria-hidden />
                  Ce qui a déjà été tenté, ou par qui
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>

      <Section surface>
        <SectionHeader
          eyebrow="Entreprises"
          title="Vous représentez un établissement ?"
          intro="Pour un contrat de maintenance ou un audit de parc, la visite d'évaluation est gratuite et sans engagement. Décrivez votre site en deux lignes : nombre d'équipements, type d'activité, contraintes horaires."
        />
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
