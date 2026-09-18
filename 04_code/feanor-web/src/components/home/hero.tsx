import Link from "next/link";
import { ArrowRight, MessageCircle, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { MetierIcon, accent } from "@/components/ui/metier";
import { services } from "@/content/services";
import { site } from "@/content/site";
import { whatsappUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Hero.
 *
 * Pas de photo, et c'est délibéré à ce stade : tant que Feanor n'a pas ses
 * propres visuels de chantier, une image de banque ferait plus de mal qu'une
 * composition typographique honnête. Le fond est une grille CSS — 0 Ko.
 * Quand les photos réelles arriveront, elles se placent ici, en <Image priority>.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      {/* Grille technique + halo d'accent — entièrement en CSS */}
      <div className="absolute inset-0 grid-technical mask-fade-edges opacity-60" aria-hidden />
      <div
        className="absolute -top-40 left-1/4 size-[36rem] rounded-full bg-accent-fill/25 blur-[120px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="grid items-center gap-12 py-20 sm:py-28 lg:grid-cols-12 lg:gap-16">
          {/* Colonne texte */}
          <div className="lg:col-span-7">
            <p className="mb-6 inline-flex items-center gap-2 border border-line bg-surface/70 px-3 py-1.5 font-display text-[0.7rem] uppercase tracking-[0.16em] text-muted backdrop-blur">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              Dakar · Sénégal
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem]">
              Vos installations,
              <br />
              <span className="text-accent">sous contrôle.</span>
            </h1>

            <p className="mt-6 max-w-xl text-lg text-muted">
              Froid, climatisation, électricité et plomberie. Installation,
              maintenance et dépannage pour les particuliers comme pour les
              professionnels.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="/contact" size="lg">
                Décrire mon problème
                <ArrowRight className="size-4" aria-hidden />
              </ButtonLink>
              <ButtonLink href={whatsappUrl()} variant="whatsapp" size="lg" external>
                <MessageCircle className="size-4" aria-hidden />
                WhatsApp
              </ButtonLink>
            </div>

            <p className="mt-6 text-sm text-faint">
              Ou appelez directement le{" "}
              <a
                href={`tel:${site.phone}`}
                className="tnum text-muted underline underline-offset-4 transition-colors hover:text-accent"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </div>

          {/* Colonne métiers — remplace utilement l'image manquante */}
          <div className="lg:col-span-5">
            <div className="border border-line bg-surface/80 backdrop-blur">
              <p className="border-b border-line px-5 py-3 font-display text-[0.7rem] uppercase tracking-[0.16em] text-faint">
                Nos quatre métiers
              </p>
              <ul className="divide-y divide-line">
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link
                      href={`/services/${s.slug}`}
                      className="group flex items-center gap-4 px-5 py-4 transition-colors hover:bg-raised"
                    >
                      <MetierIcon icon={s.icon} tone={s.accent} />
                      <span className="min-w-0 flex-1">
                        <span className="block font-display font-medium">
                          {s.name}
                        </span>
                        <span className="block text-sm text-faint">
                          {s.tagline}
                        </span>
                      </span>
                      <ArrowUpRight
                        className={cn(
                          "size-4 shrink-0 text-faint transition-colors",
                          accent[s.accent].groupHoverText,
                        )}
                        aria-hidden
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
