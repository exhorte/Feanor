import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { MetierIcon, accent } from "@/components/ui/metier";
import { services } from "@/content/services";
import { cn } from "@/lib/utils";

export function ServicesGrid() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Nos services"
        title="Quatre métiers, une seule équipe."
        intro="Le froid, l'électricité et la plomberie se croisent en permanence sur un bâtiment. Les traiter séparément, c'est faire circuler le client entre trois prestataires qui se renvoient la responsabilité."
      />

      <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2">
        {services.map((s, i) => (
          <Reveal key={s.slug} delay={i * 60}>
            <Link
              href={`/services/${s.slug}`}
              className={cn(
                "group flex h-full flex-col border-l-2 bg-canvas p-7 transition-colors hover:bg-surface sm:p-8",
                accent[s.accent].borderLeft,
              )}
            >
              <MetierIcon icon={s.icon} tone={s.accent} />

              <h3 className="mt-5 font-display text-xl">{s.name}</h3>
              <p className={cn("mt-1 text-sm", accent[s.accent].text)}>{s.tagline}</p>

              <p className="mt-4 flex-1 text-sm text-muted">
                {s.prestations
                  .slice(0, 4)
                  .map((p) => p.title)
                  .join(" · ")}
                {s.prestations.length > 4 && " · …"}
              </p>

              <span className="mt-6 inline-flex items-center gap-2 font-display text-sm text-text transition-colors group-hover:text-accent">
                Voir le détail
                <ArrowRight
                  className="size-4 transition-transform group-hover:translate-x-1"
                  aria-hidden
                />
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
