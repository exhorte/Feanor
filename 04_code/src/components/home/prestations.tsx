import Link from "next/link";
import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/ui/button-link";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { prestationsPhares } from "@/content/accueil";

/** « Nos services » — quatre cartes shadcn, centrées, comme la maquette. */
export function Prestations() {
  return (
    <Section>
      <SectionHeader
        align="center"
        eyebrow="Nos services"
        title="Des solutions fiables, pour votre confort et votre sécurité."
        intro="Électricité et climatisation, de l'installation au dépannage : des interventions conformes aux normes, adaptées au climat dakarois."
      />

      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {prestationsPhares.map((p, i) => (
          <Reveal key={p.titre} delay={i * 60} className="h-full">
            <Card className="group relative h-full gap-0 py-0 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float hover:ring-primary/20">
              <CardHeader className="gap-0 px-6 pt-7">
                <IconTile name={p.icon} />
                <CardTitle className="mt-6 text-[1.08rem] leading-snug font-bold">
                  {/* Le lien couvre toute la carte (::after), le titre reste le texte du lien */}
                  <Link href={p.href} className="after:absolute after:inset-0 after:rounded-xl">
                    {p.titre}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1 px-6 pt-3">
                <CardDescription className="text-[0.92rem] leading-relaxed">
                  {p.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="px-6 pt-5 pb-7">
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
                  En savoir plus
                  <ArrowRightIcon
                    weight="bold"
                    className="size-3.5 transition-transform group-hover:translate-x-1"
                    aria-hidden
                  />
                </span>
              </CardFooter>
            </Card>
          </Reveal>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <ButtonLink href="/services" size="xl">
          Voir tous nos services
        </ButtonLink>
      </div>
    </Section>
  );
}
