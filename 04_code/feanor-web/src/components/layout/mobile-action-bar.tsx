import { Phone, MessageCircle, Siren } from "lucide-react";
import { site } from "@/content/site";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";

/**
 * Barre d'action mobile — l'élément le plus important du site.
 *
 * Trois canaux accessibles à tout moment, sur toutes les pages, sans scroll.
 * Ce sont des ancres natives : la barre fonctionne même si le JavaScript ne
 * se charge pas — le canal de secours ne doit jamais tomber. Détachée des
 * bords en carte flottante (au lieu d'une bande plein-écran) pour suivre le
 * langage visuel du reste du site.
 */
export function MobileActionBar() {
  return (
    <>
      {/* Réserve la place de la barre pour que rien ne passe dessous */}
      <div className="h-20 md:hidden" aria-hidden />

      <div className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-50 md:hidden">
        <div className="tile-float grid grid-cols-3 divide-x divide-line overflow-hidden rounded-lg">
          <a
            href={telUrl()}
            className="flex flex-col items-center justify-center gap-1 py-3.5 text-text active:bg-raised"
          >
            <Phone className="size-5 text-accent" aria-hidden />
            <span className="font-display text-[0.7rem] uppercase tracking-wider">
              Appeler
            </span>
          </a>

          <a
            href={whatsappUrl()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center gap-1 py-3.5 text-text active:bg-raised"
          >
            <MessageCircle className="size-5 text-whatsapp-text" aria-hidden />
            <span className="font-display text-[0.7rem] uppercase tracking-wider">
              WhatsApp
            </span>
          </a>

          <a
            href={telUrl(true)}
            className="flex flex-col items-center justify-center gap-1 py-3.5 text-text active:bg-raised"
            aria-label={`Appeler la ligne d'urgence ${site.phoneUrgenceDisplay}`}
          >
            <Siren className="size-5 text-urgence-text" aria-hidden />
            <span className="font-display text-[0.7rem] uppercase tracking-wider">
              Urgence
            </span>
          </a>
        </div>
      </div>
    </>
  );
}
