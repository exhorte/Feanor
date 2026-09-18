import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";

/**
 * Les quatre engagements.
 *
 * Placés immédiatement sous le hero, et pas dans une page « À propos ».
 * C'est la vraie différenciation sur ce marché : le déficit n'est pas
 * esthétique, il est procédural. Le visiteur doit lire ça avant tout le reste.
 */
export function Engagements() {
  return (
    <section className="border-b border-line bg-line">
      <Container className="px-0 sm:px-0">
        <div className="grid gap-px sm:grid-cols-2 lg:grid-cols-4">
          {site.engagements.map((e) => (
            <div key={e.title} className="bg-surface px-5 py-8 sm:px-8 lg:py-10">
              <span className="inline-flex size-7 items-center justify-center rounded-xs border border-accent/40 bg-accent/10">
                <Check className="size-4 text-accent" strokeWidth={2.5} aria-hidden />
              </span>
              <h3 className="mt-4 font-display text-base font-medium">{e.title}</h3>
              <p className="mt-2 text-sm text-muted">{e.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
