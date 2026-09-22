import { ArrowRight, MessageCircle, Phone, MapPin, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { site } from "@/content/site";
import { whatsappUrl, telUrl } from "@/lib/whatsapp";

/**
 * Hero — refonte inspirée de 05_screenshot/model.jpg (référence secteur
 * logistique/3PL « Logamax »).
 *
 * Ce qui est repris presque à l'identique : la disposition en deux colonnes
 * asymétriques (texte ~5/12, photo ~7/12 — l'image domine, pas le texte),
 * le mot-clé coloré dans le titre, la carte d'information flottante posée
 * sur la photo, le bouton de contact circulaire flottant, et la rangée de
 * trois cartes de réassurance sous le bloc principal (carte sombre + carte
 * « normes » + carte « parcours »).
 *
 * Ce qui est délibérément différent : la photo elle-même. Tant que Feanor
 * n'a pas ses propres visuels de chantier, la zone image est un `PhotoFrame`
 * — un cadre prêt à recevoir la vraie photo, pas une image de banque.
 * Remplacer par une image réelle : voir le commentaire dans `photo-frame.tsx`.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <Container className="relative pt-12 sm:pt-16">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Colonne texte */}
          <div className="lg:col-span-5">
            <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3.5 py-1.5 font-display text-[0.7rem] font-medium uppercase tracking-[0.14em] text-muted">
              <span className="size-1.5 rounded-full bg-accent" aria-hidden />
              Dakar · Sénégal
            </p>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem]">
              Vos installations,{" "}
              <span className="text-accent">sous contrôle.</span>
            </h1>

            <p className="mt-6 max-w-md text-lg text-muted">
              Froid, climatisation, électricité et plomberie. Installation,
              maintenance et dépannage pour les particuliers comme pour les
              professionnels.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
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
                href={telUrl()}
                className="tnum text-muted underline underline-offset-4 transition-colors hover:text-accent"
              >
                {site.phoneDisplay}
              </a>
            </p>
          </div>

          {/* Colonne photo — emplacement réservé, voir photo-frame.tsx */}
          <div className="lg:col-span-7">
            <div className="relative">
              <PhotoFrame
                ratio="16/11"
                dark
                icon={ShieldCheck}
                label="Photo d'intervention Feanor"
              />

              {/* Carte flottante — info rapide */}
              <div className="tile-float absolute right-4 top-4 flex items-center gap-3 px-4 py-3 sm:right-6 sm:top-6">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-accent-soft text-accent">
                  <MapPin className="size-4" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block font-display text-sm font-medium">
                    {site.zonesDakar.length + site.zonesRegions.length}+ zones
                  </span>
                  <span className="block text-xs text-faint">Dakar & régions</span>
                </span>
              </div>

              {/* Bouton de contact flottant */}
              <a
                href={telUrl()}
                className="group absolute -bottom-5 left-4 flex items-center gap-3 sm:left-6"
              >
                <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-accent text-on-fill shadow-[0_10px_28px_-6px_rgb(220_47_29/0.5)] transition-transform group-hover:scale-105">
                  <Phone className="size-5" aria-hidden />
                </span>
                <span className="tile-float hidden items-center px-4 py-2.5 font-display text-sm font-medium text-text sm:flex">
                  Nous appeler
                </span>
              </a>
            </div>
          </div>
        </div>

        {/* Rangée de réassurance — sous les deux colonnes, pleine largeur */}
        <div className="mt-16 grid gap-4 pb-14 sm:mt-20 sm:grid-cols-3 sm:pb-16">
          <div className="rounded-md bg-ink p-6 text-on-ink">
            <p className="font-display text-xl font-semibold">
              Diagnostic avant devis
            </p>
            <p className="mt-2 text-sm text-on-ink-muted">
              On identifie la panne avant d&apos;annoncer un prix — jamais
              l&apos;inverse.
            </p>
          </div>

          <div className="tile p-6">
            <p className="font-display text-xs font-medium uppercase tracking-[0.12em] text-faint">
              Nos engagements
            </p>
            <p className="mt-3 font-display text-[0.95rem]">
              Diagnostic{" "}
              <span className="text-line-strong">·</span> Devis clair{" "}
              <span className="text-line-strong">·</span> Rapport écrit{" "}
              <span className="text-line-strong">·</span> Garantie
            </p>
          </div>

          <div className="tile p-6">
            <p className="font-display text-xs font-medium uppercase tracking-[0.12em] text-faint">
              Suivi de bout en bout
            </p>
            <div className="mt-3 flex items-center gap-2 font-display text-sm">
              <span>Diagnostic</span>
              <ArrowRight className="size-3.5 text-faint" aria-hidden />
              <span>Devis</span>
              <ArrowRight className="size-3.5 text-faint" aria-hidden />
              <span>Intervention</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
