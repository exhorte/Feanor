import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import type { QuestionReponse } from "@/content/types";

/**
 * Accordéon bâti sur <details>/<summary>.
 * Accessible nativement, indexable par les moteurs (le contenu replié reste
 * dans le DOM), et fonctionnel sans JavaScript.
 */
export function Accordion({
  items,
  className,
}: {
  items: QuestionReponse[];
  className?: string;
}) {
  return (
    <div className={cn("divide-y divide-line border-y border-line", className)}>
      {items.map((item) => (
        <details key={item.q} className="accordion-item group">
          <summary className="flex items-start justify-between gap-6 py-5 text-left transition-colors hover:text-accent">
            <h3 className="font-display text-base font-medium sm:text-lg">
              {item.q}
            </h3>
            <ChevronDown
              className="accordion-chevron mt-1 size-4 shrink-0 text-muted"
              aria-hidden
            />
          </summary>
          <div className="pb-6 pr-10">
            <p className="text-muted">{item.a}</p>
          </div>
        </details>
      ))}
    </div>
  );
}
