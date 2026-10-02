import { cn } from "@/lib/utils";
import { site } from "@/content/site";

/**
 * Marque Oralec.
 *
 * Le monogramme : un « O » — l'initiale — traversé d'un éclair, dans une
 * tuile marine. Le cercle évoque aussi le flux d'air d'un ventilateur, d'où
 * la double lecture électricité / climatisation sans multiplier les signes.
 * SVG inline : rien à télécharger, net à toutes les résolutions.
 */
export function LogoMark({
  className,
  tone = "marine",
}: {
  className?: string;
  /** `marine` sur fond clair, `blanc` sur fond marine. */
  tone?: "marine" | "blanc";
}) {
  const fond = tone === "marine" ? "#001969" : "#ffffff";
  const trait = tone === "marine" ? "#ffffff" : "#001969";
  return (
    <svg viewBox="0 0 40 40" aria-hidden className={cn("shrink-0", className)}>
      <rect width="40" height="40" rx="10" fill={fond} />
      <circle cx="20" cy="20" r="11.2" fill="none" stroke={trait} strokeWidth="2.6" />
      <path
        d="M21.3 13.2 15.6 21.1h3.9l-.8 5.7 5.7-7.9h-3.9l.8-5.7Z"
        fill={trait}
      />
    </svg>
  );
}

export function Logo({
  className,
  withDescriptor = false,
  tone = "marine",
}: {
  className?: string;
  withDescriptor?: boolean;
  tone?: "marine" | "blanc";
}) {
  return (
    <span className={cn("inline-flex items-center gap-2.5", className)}>
      <LogoMark tone={tone} className="size-9" />
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "font-heading text-[1.4rem] font-extrabold tracking-tight",
            tone === "marine" ? "text-foreground" : "text-white",
          )}
        >
          {site.name}
        </span>
        {withDescriptor && (
          <span
            className={cn(
              "mt-1 text-[0.58rem] font-semibold uppercase tracking-[0.2em]",
              tone === "marine" ? "text-subtil" : "text-white/60",
            )}
          >
            {site.descriptor}
          </span>
        )}
      </span>
    </span>
  );
}
