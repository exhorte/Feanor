import { Camera, ArrowRight } from "lucide-react";

import { PageHeader } from "@/components/shared/page-header";
import { CtaFinal } from "@/components/shared/cta-final";
import { Section, SectionHeader } from "@/components/ui/section";
import { ButtonLink } from "@/components/ui/button";
import { JsonLd } from "@/components/ui/json-ld";

import {
  realisationsPubliables,
  realisationsVisibles,
  SEUIL_PUBLICATION,
} from "@/content/realisations";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Réalisations — Nos chantiers documentés",
  description:
    "Installations, rénovations et interventions techniques réalisées par Feanor à Dakar et au Sénégal : contexte, solution retenue, durée et résultat.",
  path: "/realisations",
  /* La page reste accessible par URL même quand elle n'est pas dans la
     navigation, mais elle n'est pas indexée tant qu'elle est vide : une page
     de réalisations sans réalisation nuit plus qu'elle ne sert. */
  noIndex: !realisationsVisibles,
});

export default function RealisationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Réalisations"
        title="Nos chantiers, documentés."
        intro="Chaque chantier publié ici comporte le contexte, la solution retenue, la durée réelle et le résultat — avec les photos avant et après, prises au même cadrage."
        breadcrumb={[{ label: "Réalisations", href: "/realisations" }]}
      />

      {realisationsVisibles ? (
        <Section>
          <div className="grid gap-5 md:grid-cols-2">
            {realisationsPubliables.map((r) => (
              <article key={r.slug} className="tile p-7">
                <h2 className="font-display text-xl">{r.titre}</h2>
                <dl className="mt-5 divide-y divide-line border-y border-line text-sm">
                  {[
                    ["Client", r.client],
                    ["Type", r.typeClient],
                    ["Lieu", r.lieu],
                    ["Service", r.service],
                    ["Solution", r.solution],
                    ["Durée", r.duree],
                  ].map(([k, v]) => (
                    <div key={k} className="flex gap-3 py-2.5">
                      <dt className="w-24 shrink-0 text-faint">{k}</dt>
                      <dd className="text-muted">{v}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 text-muted">{r.resultat}</p>
              </article>
            ))}
          </div>
        </Section>
      ) : (
        /* État d'attente honnête.
           Une galerie garnie d'images de banque ferait plus de dégâts
           qu'une page qui dit simplement où elle en est. */
        <Section>
          <div className="tile mx-auto max-w-2xl p-8 text-center sm:p-12">
            <Camera
              className="mx-auto size-7 text-accent"
              strokeWidth={1.5}
              aria-hidden
            />
            <h2 className="mt-5 font-display text-2xl">
              Cette page se remplit chantier après chantier.
            </h2>
            <p className="mt-4 text-muted">
              Nous ne publierons pas d&apos;images de banque ni de projets
              génériques. Chaque réalisation présentée ici sera un chantier
              réel, photographié avant et après, avec l&apos;accord du client.
              La page s&apos;ouvrira à partir de {SEUIL_PUBLICATION} chantiers
              documentés.
            </p>
            <p className="mt-4 text-sm text-faint">
              En attendant, nous pouvons vous mettre en relation avec des
              clients qui acceptent d&apos;en parler. Demandez-le simplement.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact">
                Demander des références
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/services" variant="outline">
                Voir nos services
              </ButtonLink>
            </div>
          </div>
        </Section>
      )}

      <Section surface>
        <SectionHeader
          eyebrow="Notre façon de documenter"
          title="Avant, pendant, après — au même cadrage."
          intro="Une photo « après » seule ne prouve rien. C'est la comparaison au même angle qui montre le travail. Nos techniciens photographient l'installation avant d'y toucher, en cours d'intervention, puis à l'identique une fois terminé."
        />
      </Section>

      <CtaFinal />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/realisations" },
        ])}
      />
    </>
  );
}
