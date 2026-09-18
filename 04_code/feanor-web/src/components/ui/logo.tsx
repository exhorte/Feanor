import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Marque typographique + marque frappée.
 * Le losange évoque l'enclume et la pièce forgée — le récit d'artisan derrière
 * le nom. Pur SVG inline : rien à télécharger, net à toutes les résolutions.
 */
export function Logo({
  className,
  withDescriptor = false,
}: {
  className?: string;
  withDescriptor?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden
        className="shrink-0"
      >
        <path
          d="M12 1.5 22.5 12 12 22.5 1.5 12 12 1.5Z"
          stroke="var(--color-accent)"
          strokeWidth="1.5"
        />
        <path d="M12 7.5 16.5 12 12 16.5 7.5 12 12 7.5Z" fill="var(--color-accent)" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="font-display text-lg font-bold tracking-[0.14em] text-text">
          {site.name}
        </span>
        {withDescriptor && (
          <span className="mt-1 font-display text-[0.6rem] uppercase tracking-[0.18em] text-faint">
            {site.descriptor}
          </span>
        )}
      </span>
    </span>
  );
}
