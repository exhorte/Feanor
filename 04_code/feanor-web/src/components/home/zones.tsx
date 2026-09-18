import Link from "next/link";
import { MapPin } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { site } from "@/content/site";
import { zonesLocales } from "@/content/zones";

export function Zones() {
  return (
    <Section>
      <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <SectionHeader
            eyebrow="Zones d'intervention"
            title="Dakar, la banlieue, et les régions."
            intro="Nous couvrons l'ensemble de la région de Dakar au quotidien, et intervenons à Thiès, Mbour, Saly et Somone pour les chantiers et les contrats."
          />
        </div>

        <div className="lg:col-span-7">
          <div className="border border-line bg-surface p-7 sm:p-8">
            <h3 className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
              Région de Dakar
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.zonesDakar.map((z) => (
                <li
                  key={z}
                  className="border border-line px-2.5 py-1 text-sm text-muted"
                >
                  {z}
                </li>
              ))}
            </ul>

            <h3 className="mt-8 font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
              Régions
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {site.zonesRegions.map((z) => (
                <li
                  key={z}
                  className="border border-line px-2.5 py-1 text-sm text-muted"
                >
                  {z}
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-6">
              <h3 className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
                Pages par zone
              </h3>
              <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                {zonesLocales.map((z) => (
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
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
