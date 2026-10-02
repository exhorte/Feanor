import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@phosphor-icons/react/ssr";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Photo } from "@/components/ui/photo";
import type { Service } from "@/content/types";

/**
 * Carte de métier : photo, icône posée à cheval sur la photo, titre, accroche
 * et liste courte. Toute la carte est cliquable (lien étendu sur le titre).
 */
export function ServiceCard({
  service,
  points,
  sizes = "(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 92vw",
}: {
  service: Service;
  /** Liste affichée sous l'accroche : prestations, ou publics servis. */
  points: string[];
  sizes?: string;
}) {
  return (
    <Card className="group relative h-full gap-0 py-0 shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-float">
      <div className="relative aspect-[16/10] overflow-hidden">
        <Photo name={service.photo} sizes={sizes} className="transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-linear-to-t from-primary/50 via-transparent to-transparent" aria-hidden />
      </div>

      <CardHeader className="relative -mt-7 gap-0 px-6">
        <IconTile name={service.icon} size="lg" tone="plein" className="ring-4 ring-white" />
        <CardTitle className="mt-4 text-xl font-bold">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0 after:rounded-xl">
            {service.longName}
          </Link>
        </CardTitle>
        <CardDescription className="mt-1 font-medium text-primary">{service.tagline}</CardDescription>
      </CardHeader>

      <CardContent className="flex-1 px-6 pt-5">
        <ul className="space-y-2">
          {points.map((p) => (
            <li key={p} className="flex gap-2.5 text-[0.92rem] text-muted-foreground">
              <CheckIcon weight="bold" className="mt-1 size-3.5 shrink-0 text-primary" aria-hidden />
              {p}
            </li>
          ))}
        </ul>
      </CardContent>

      <CardFooter className="px-6 pt-6 pb-7">
        <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
          Voir le détail
          <ArrowRightIcon weight="bold" className="size-3.5 transition-transform group-hover:translate-x-1" aria-hidden />
        </span>
      </CardFooter>
    </Card>
  );
}
