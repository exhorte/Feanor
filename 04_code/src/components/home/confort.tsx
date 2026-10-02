import { ArrowRightIcon } from "@phosphor-icons/react/ssr";

import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { Eyebrow } from "@/components/ui/section";
import { IconTile } from "@/components/ui/icon-tile";
import { Photo } from "@/components/ui/photo";
import { confort } from "@/content/accueil";

/**
 * Bandeau « confort thermique » — le parti pris d'arktyk.fr : une photo
 * pleine largeur, claire et calme, voilée de blanc côté texte. On n'y vend
 * pas un appareil mais une pièce où l'on est bien.
 */
export function Confort() {
  return (
    <section className="relative overflow-hidden bg-white">
      <Container className="relative z-10">
        <div className="py-16 sm:py-20 lg:max-w-xl lg:py-28">
          <Eyebrow>{confort.surtitre}</Eyebrow>
          <h2 className="text-[1.9rem] leading-[1.12] sm:text-4xl lg:text-[2.6rem]">{confort.titre}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{confort.texte}</p>

          <ul className="mt-9 space-y-5">
            {confort.points.map((p) => (
              <li key={p.titre} className="flex items-start gap-4">
                <IconTile name={p.icon} size="sm" />
                <span>
                  <span className="block font-semibold text-foreground">{p.titre}</span>
                  <span className="block text-[0.95rem] text-muted-foreground">{p.detail}</span>
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-10">
            <ButtonLink href="/services/climatisation" size="xl">
              Découvrir la climatisation
              <ArrowRightIcon weight="bold" data-icon="inline-end" aria-hidden />
            </ButtonLink>
          </div>
        </div>
      </Container>

      {/* Photo : dans le flux sur mobile, en fond voilé sur desktop */}
      <div className="relative mx-4 mb-16 aspect-[16/10] overflow-hidden rounded-2xl sm:mx-6 lg:absolute lg:inset-0 lg:m-0 lg:aspect-auto lg:rounded-none">
        {/* Sur mobile, zoom vers la droite : la marque imprimée sur l'appareil sort du cadre */}
        <Photo
          name={confort.photo}
          sizes="(min-width: 1024px) 100vw, 94vw"
          className="max-lg:origin-[96%_50%] max-lg:scale-[1.8]"
        />
        <div
          className="absolute inset-0 hidden bg-linear-to-r from-white from-35% via-white/85 via-55% to-white/0 lg:block"
          aria-hidden
        />
      </div>
    </section>
  );
}
