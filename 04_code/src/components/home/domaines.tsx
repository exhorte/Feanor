import Link from "next/link";
import { ArrowRightIcon, ArrowUpRightIcon } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardTitle } from "@/components/ui/card";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { domaines } from "@/content/accueil";

/**
 * Domaines d'intervention — reprend la grille « Nos réalisations » de la
 * maquette (titre à gauche, bouton à droite, quatre photos légendées).
 *
 * Volontairement présentée comme des domaines et non comme des chantiers :
 * ce sont des photos d'illustration. Les vrais chantiers documentés auront
 * leur page dès le troisième (voir src/content/realisations.ts).
 */
export function Domaines() {
  return (
    <Section tone="doux">
      <SectionHeader
        eyebrow="Domaines d'intervention"
        title="Du salon au site industriel, à Dakar et en région."
        action={
          <div className="flex flex-col gap-3 sm:items-end">
            <ButtonLink href="/professionnels" variant="outline" size="lg">
              Espace professionnels
              <ArrowRightIcon weight="bold" data-icon="inline-end" aria-hidden />
            </ButtonLink>
          </div>
        }
      />

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {domaines.map((d, i) => (
          <Reveal key={d.titre} delay={i * 60} className="h-full">
            <Card className="group relative h-full gap-0 py-0 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Photo
                  name={d.photo}
                  sizes="(min-width: 1024px) 22vw, (min-width: 640px) 45vw, 92vw"
                  className="transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute top-3 right-3 flex size-9 items-center justify-center rounded-full bg-white/90 text-primary opacity-0 shadow-sm transition-opacity group-hover:opacity-100">
                  <ArrowUpRightIcon weight="bold" className="size-4" aria-hidden />
                </span>
              </div>
              <CardContent className="px-5 py-4">
                <CardTitle className="text-base font-bold">
                  <Link href={d.href} className="after:absolute after:inset-0 after:rounded-xl">
                    {d.titre}
                  </Link>
                </CardTitle>
                <CardDescription className="mt-0.5">{d.detail}</CardDescription>
              </CardContent>
            </Card>
          </Reveal>
        ))}
      </div>

      <p className="mt-8 text-sm text-subtil">
        Particulier&nbsp;?{" "}
        <Link href="/particuliers" className="prose-link">
          Découvrez comment se passe une intervention chez vous
        </Link>
        .
      </p>
    </Section>
  );
}
