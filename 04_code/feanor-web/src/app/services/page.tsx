import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { CtaFinal } from "@/components/shared/cta-final";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MetierIcon, accent } from "@/components/ui/metier";
import { JsonLd } from "@/components/ui/json-ld";
import { services } from "@/content/services";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";
import { cn } from "@/lib/utils";

export const metadata = buildMetadata({
  title: "Nos services — Froid, climatisation, électricité, plomberie",
  description:
    "Les quatre métiers techniques de Feanor à Dakar : froid et climatisation, électricité, plomberie, maintenance et dépannage. Installation, entretien et intervention.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        title="Quatre métiers, une seule équipe."
        intro="Le froid, l'électricité et la plomberie se croisent en permanence sur un bâtiment. Un climatiseur qui fait disjoncter est un problème électrique autant que frigorifique. Les traiter séparément, c'est faire circuler le client entre trois prestataires qui se renvoient la responsabilité."
        breadcrumb={[{ label: "Services", href: "/services" }]}
      />

      <Section>
        <div className="space-y-px bg-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 50}>
              <article
                className={cn(
                  "border-l-2 bg-canvas p-7 sm:p-9",
                  accent[s.accent].borderLeft,
                )}
              >
                <div className="grid gap-8 lg:grid-cols-12 lg:gap-12">
                  <div className="lg:col-span-5">
                    <MetierIcon icon={s.icon} tone={s.accent} />
                    <h2 className="mt-5 text-2xl">{s.longName}</h2>
                    <p className={cn("mt-1.5 text-sm", accent[s.accent].text)}>
                      {s.tagline}
                    </p>
                    <p className="mt-5 text-muted">{s.intro}</p>

                    <Link
                      href={`/services/${s.slug}`}
                      className="mt-6 inline-flex items-center gap-2 font-display text-sm text-text transition-colors hover:text-accent"
                    >
                      Voir la page complète
                      <ArrowRight className="size-4" aria-hidden />
                    </Link>
                  </div>

                  <div className="lg:col-span-7">
                    <h3 className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
                      Prestations
                    </h3>
                    <ul className="mt-4 grid gap-x-8 gap-y-2.5 sm:grid-cols-2">
                      {s.prestations.map((p) => (
                        <li key={p.title} className="flex gap-3 text-sm text-muted">
                          <span
                            className={cn(
                              "mt-2 size-1 shrink-0",
                              accent[s.accent].solid,
                            )}
                            aria-hidden
                          />
                          {p.title}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaFinal />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
