import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

import { Card, CardContent } from "@/components/ui/card";
import { Section, SectionHeader } from "@/components/ui/section";
import { site } from "@/content/site";
import { zonesLocales } from "@/content/zones";

/** Zones d'intervention — Dakar quartier par quartier, puis les régions. */
export function Zones() {
  return (
    <Section tone="doux">
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Zones d'intervention"
            title="Dakar, la banlieue et les régions."
            intro="Nous couvrons toute la région de Dakar au quotidien, et intervenons à Thiès, Mbour, Saly et Somone pour les chantiers et les contrats."
          />

          <ul className="mt-8 space-y-2.5">
            {zonesLocales.map((z) => (
              <li key={z.slug}>
                <Link
                  href={`/${z.slug}`}
                  className="group inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
                >
                  <ArrowRightIcon weight="bold" className="size-3.5 text-primary/50 transition-transform group-hover:translate-x-0.5" aria-hidden />
                  {z.service} à {z.ville}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7">
          <Card className="gap-0 py-0 shadow-card">
            <CardContent className="px-6 py-7 sm:px-8">
              <h3 className="text-sm font-semibold tracking-normal text-foreground">
                Région de Dakar
              </h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {site.zonesDakar.map((z) => (
                  <li
                    key={z}
                    className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-sm text-primary"
                  >
                    <span className="size-1.5 rounded-full bg-primary/50" aria-hidden />
                    {z}
                  </li>
                ))}
              </ul>

              <h3 className="mt-8 text-sm font-semibold tracking-normal text-foreground">Régions</h3>
              <ul className="mt-4 flex flex-wrap gap-2">
                {site.zonesRegions.map((z) => (
                  <li
                    key={z}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground"
                  >
                    <span className="size-1.5 rounded-full bg-subtil/50" aria-hidden />
                    {z}
                  </li>
                ))}
              </ul>

              <p className="mt-8 border-t border-border pt-5 text-sm text-subtil">
                Votre quartier n&apos;apparaît pas&nbsp;? Demandez-nous&nbsp;: la liste n&apos;est pas limitative.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </Section>
  );
}
