import { ArrowRightIcon, CameraIcon } from "@phosphor-icons/react/ssr";

import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JsonLd } from "@/components/ui/json-ld";
import { Section, SectionHeader } from "@/components/ui/section";

import { realisationsPubliables, realisationsVisibles, SEUIL_PUBLICATION } from "@/content/realisations";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Réalisations — Nos chantiers documentés",
  description:
    "Installations électriques, climatisation et interventions réalisées par Oralec à Dakar et au Sénégal : contexte, solution retenue, durée et résultat.",
  path: "/realisations",
  /* La page reste accessible par URL même quand elle n'est pas dans la
     navigation, mais elle n'est pas indexée tant qu'elle est vide : une page
     de réalisations sans réalisation nuit plus qu'elle ne sert. */
  noIndex: !realisationsVisibles,
});

const etapesCaptation = [
  { n: "01", t: "Avant", d: "Vue d'ensemble et détail du défaut, avant de toucher à quoi que ce soit." },
  { n: "02", t: "Pendant", d: "Le travail en cours, sans mise en scène." },
  { n: "03", t: "Après", d: "Même cadrage que la photo « avant » : c'est la comparaison qui convainc." },
];

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
              <Card key={r.slug} className="gap-0 py-0 shadow-card">
                <CardHeader className="px-7 pt-7">
                  <CardTitle className="text-xl font-bold">{r.titre}</CardTitle>
                </CardHeader>
                <CardContent className="px-7 pt-5 pb-7">
                  <dl className="divide-y divide-border border-y border-border text-sm">
                    {[
                      ["Client", r.client],
                      ["Type", r.typeClient],
                      ["Lieu", r.lieu],
                      ["Service", r.service],
                      ["Solution", r.solution],
                      ["Durée", r.duree],
                    ].map(([k, v]) => (
                      <div key={k} className="flex gap-3 py-2.5">
                        <dt className="w-24 shrink-0 text-subtil">{k}</dt>
                        <dd className="text-muted-foreground">{v}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-5 text-muted-foreground">{r.resultat}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      ) : (
        /* État d'attente honnête.
           Une galerie garnie d'images de banque ferait plus de dégâts
           qu'une page qui dit simplement où elle en est. */
        <Section>
          <Card className="mx-auto max-w-2xl items-center gap-0 px-8 py-12 text-center shadow-card sm:px-12">
            <span className="flex size-14 items-center justify-center rounded-2xl bg-secondary text-primary">
              <CameraIcon weight="duotone" className="size-7" aria-hidden />
            </span>
            <h2 className="mt-6 text-2xl">Cette page se remplit chantier après chantier.</h2>
            <p className="mt-4 text-muted-foreground">
              Nous ne publierons pas d&apos;images de banque ni de projets génériques. Chaque réalisation
              présentée ici sera un chantier réel, photographié avant et après, avec l&apos;accord du
              client. La page s&apos;ouvrira à partir de {SEUIL_PUBLICATION} chantiers documentés.
            </p>
            <p className="mt-4 text-sm text-subtil">
              En attendant, nous pouvons vous mettre en relation avec des clients qui acceptent d&apos;en
              parler. Demandez-le simplement.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Demander des références
                <ArrowRightIcon weight="bold" data-icon="inline-end" aria-hidden />
              </ButtonLink>
              <ButtonLink href="/services" variant="outline" size="lg">
                Voir nos services
              </ButtonLink>
            </div>
          </Card>
        </Section>
      )}

      <Section tone="doux">
        <SectionHeader
          eyebrow="Notre façon de documenter"
          title="Avant, pendant, après — au même cadrage."
          intro="Une photo « après » seule ne prouve rien. C'est la comparaison au même angle qui montre le travail."
        />
        <ol className="mt-10 grid gap-5 sm:grid-cols-3">
          {etapesCaptation.map((e) => (
            <li key={e.n}>
              <Card className="h-full gap-0 px-6 py-6 shadow-card">
                <span className="tnum font-heading text-3xl font-extrabold text-primary/25">{e.n}</span>
                <h3 className="mt-2 text-lg font-bold">{e.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{e.d}</p>
              </Card>
            </li>
          ))}
        </ol>
      </Section>

      <CtaBand />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Réalisations", path: "/realisations" },
        ])}
      />
    </>
  );
}
