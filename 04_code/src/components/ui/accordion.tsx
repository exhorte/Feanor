import { PlusIcon } from "@phosphor-icons/react/ssr";
import type { QuestionReponse } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Accordéon de FAQ — une carte par question, comme sur la maquette.
 *
 * Bâti sur <details>/<summary> plutôt que sur l'Accordion Radix de shadcn :
 * accessible nativement, fonctionnel sans JavaScript, et surtout indexable —
 * Radix démonte le contenu replié, que Google ne verrait alors plus.
 */
export function Accordion({
  items,
  className,
  premierOuvert = false,
}: {
  items: QuestionReponse[];
  className?: string;
  /** Ouvre la première question, pour montrer que la liste se déplie. */
  premierOuvert?: boolean;
}) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item, i) => (
        <details
          key={item.q}
          open={premierOuvert && i === 0}
          className="accordion-item group rounded-xl bg-card shadow-card ring-1 ring-foreground/8 transition-shadow open:ring-primary/20"
        >
          <summary className="flex items-start justify-between gap-5 px-5 py-4 sm:px-6 sm:py-5">
            <h3 className="text-[0.95rem] font-semibold tracking-normal text-foreground sm:text-base">
              {item.q}
            </h3>
            <span className="accordion-icon mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-full bg-secondary text-primary transition-colors group-open:bg-primary group-open:text-primary-foreground">
              <PlusIcon weight="bold" className="size-3.5" aria-hidden />
            </span>
          </summary>
          <div className="-mt-1 px-5 pb-5 sm:px-6">
            <p className="max-w-prose text-[0.95rem] text-muted-foreground">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
