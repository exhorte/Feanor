import { PhoneIcon, SirenIcon, WhatsappLogoIcon } from "@phosphor-icons/react/ssr";
import { site } from "@/content/site";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";

const action =
  "flex flex-col items-center justify-center gap-1 py-3 text-foreground transition-colors active:bg-muted";
const libelle = "text-[0.68rem] font-semibold uppercase tracking-wider";

/**
 * Barre d'action mobile — l'élément le plus important du site.
 *
 * Trois canaux accessibles à tout moment, sur toutes les pages, sans scroll.
 * Ce sont des ancres natives : la barre fonctionne même si le JavaScript ne
 * se charge pas — le canal de secours ne doit jamais tomber.
 */
export function MobileActionBar() {
  return (
    <>
      {/* Réserve la place de la barre pour que rien ne passe dessous */}
      <div className="h-20 md:hidden" aria-hidden />

      <nav
        aria-label="Contact rapide"
        className="fixed inset-x-3 bottom-[calc(0.75rem+env(safe-area-inset-bottom))] z-40 md:hidden"
      >
        <div className="grid grid-cols-3 divide-x divide-border overflow-hidden rounded-2xl bg-white shadow-float ring-1 ring-foreground/8">
          <a href={telUrl()} className={action}>
            <PhoneIcon weight="duotone" className="size-5 text-primary" aria-hidden />
            <span className={libelle}>Appeler</span>
          </a>

          <a href={whatsappUrl()} target="_blank" rel="noopener noreferrer" className={action}>
            <WhatsappLogoIcon weight="fill" className="size-5 text-whatsapp" aria-hidden />
            <span className={libelle}>WhatsApp</span>
          </a>

          <a
            href={telUrl(true)}
            className={action}
            aria-label={`Appeler la ligne d'urgence ${site.phoneUrgenceDisplay}`}
          >
            <SirenIcon weight="duotone" className="size-5 text-primary" aria-hidden />
            <span className={libelle}>Urgence</span>
          </a>
        </div>
      </nav>
    </>
  );
}
