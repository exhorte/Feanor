import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type Etape = { titre: string; detail?: string };

/**
 * Chronologie verticale en carte — points reliés par une ligne, le dernier
 * point plein pour marquer l'aboutissement. Reprend la carte « processus »
 * de la référence, avec le bouton d'action circulaire en pied de carte.
 */
export function Stepper({
  etapes,
  cta,
  className,
}: {
  etapes: Etape[];
  cta?: { href: string; label: string };
  className?: string;
}) {
  return (
    <div className={cn("tile flex flex-col p-7 sm:p-8", className)}>
      <ol className="relative">
        {etapes.map((etape, i) => {
          const dernier = i === etapes.length - 1;
          return (
            <li key={etape.titre} className="relative flex gap-4 pb-7 last:pb-0">
              {!dernier && (
                <span
                  className="absolute left-[9px] top-6 h-full w-px bg-line-strong"
                  aria-hidden
                />
              )}
              <span
                className={cn(
                  "relative z-10 mt-1 flex size-[19px] shrink-0 items-center justify-center rounded-full border-2",
                  dernier
                    ? "border-accent bg-accent"
                    : "border-line-strong bg-canvas",
                )}
                aria-hidden
              >
                {dernier && <span className="size-1.5 rounded-full bg-on-fill" />}
              </span>
              <span className="pt-px">
                <span className="block font-display font-medium">
                  {etape.titre}
                </span>
                {etape.detail && (
                  <span className="mt-1 block text-sm text-muted">
                    {etape.detail}
                  </span>
                )}
              </span>
            </li>
          );
        })}
      </ol>

      {cta && (
        <div className="mt-2 flex justify-end">
          <Link
            href={cta.href}
            aria-label={cta.label}
            className="group inline-flex size-12 items-center justify-center rounded-full bg-accent text-on-fill shadow-[0_8px_20px_-6px_rgb(220_47_29/0.45)] transition-transform hover:scale-105"
          >
            <ArrowUpRight
              className="size-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden
            />
          </Link>
        </div>
      )}
    </div>
  );
}
