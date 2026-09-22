import { Camera, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * Emplacement réservé à une photo réelle.
 *
 * Tant que Feanor n'a pas ses propres visuels de chantier, chaque zone image
 * du site doit se lire comme une composition volontaire — pas comme un bug.
 * Ce composant prépare exactement le cadre (ratio, coins, ombre) que la
 * future photo occupera : il suffit de remplacer son contenu par
 * `<Image fill className="object-cover" ... />` le jour venu.
 *
 * `numero` reproduit le repère « 01 / 02 / 03 » d'une rangée de photos de
 * chantier (avant / pendant / après, ou les 3 étapes d'une intervention).
 */
export function PhotoFrame({
  ratio = "4/5",
  icon: Icon = Camera,
  label,
  numero,
  dark = false,
  className,
}: {
  ratio?: string;
  icon?: LucideIcon;
  label?: string;
  numero?: string;
  dark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "relative flex items-end overflow-hidden rounded-lg",
        dark ? "photo-slot-dark" : "photo-slot",
        className,
      )}
      style={{ aspectRatio: ratio }}
    >
      {/* Grille technique très discrète — signale « emplacement technique »,
          pas une absence de contenu */}
      <div
        className={cn(
          "absolute inset-0 grid-technical",
          dark ? "opacity-[0.08]" : "opacity-50",
        )}
        aria-hidden
      />

      {numero && (
        <span
          className={cn(
            "absolute left-4 top-4 flex h-8 min-w-8 items-center justify-center rounded-full px-2 font-display text-xs font-medium tnum",
            dark
              ? "bg-canvas/10 text-on-ink backdrop-blur"
              : "bg-canvas text-text shadow-card",
          )}
        >
          {numero}
        </span>
      )}

      <div className="relative flex w-full flex-col items-center gap-2 p-6 text-center">
        <span
          className={cn(
            "inline-flex size-11 items-center justify-center rounded-full border",
            dark
              ? "border-white/15 bg-white/5 text-on-ink-muted"
              : "border-line-strong bg-canvas/70 text-faint",
          )}
        >
          <Icon className="size-5" strokeWidth={1.5} aria-hidden />
        </span>
        {label && (
          <span
            className={cn(
              "font-display text-xs uppercase tracking-[0.12em]",
              dark ? "text-on-ink-muted" : "text-faint",
            )}
          >
            {label}
          </span>
        )}
      </div>
    </div>
  );
}
