import { Snowflake, Zap, Droplets, Wrench, type LucideIcon } from "lucide-react";
import type { Accent, Service } from "@/content/types";
import { cn } from "@/lib/utils";

const icons: Record<Service["icon"], LucideIcon> = {
  snowflake: Snowflake,
  zap: Zap,
  droplets: Droplets,
  wrench: Wrench,
};

/**
 * Classes écrites en toutes lettres : Tailwind analyse le source statiquement,
 * une classe construite par concaténation ne serait pas générée.
 */
export const accent: Record<
  Accent,
  {
    text: string;
    border: string;
    borderLeft: string;
    bg: string;
    solid: string;
    groupHoverText: string;
  }
> = {
  froid: {
    text: "text-metier-froid",
    border: "border-metier-froid",
    borderLeft: "border-l-metier-froid",
    bg: "bg-metier-froid/10",
    solid: "bg-metier-froid",
    groupHoverText: "group-hover:text-metier-froid",
  },
  elec: {
    text: "text-metier-elec",
    border: "border-metier-elec",
    borderLeft: "border-l-metier-elec",
    bg: "bg-metier-elec/10",
    solid: "bg-metier-elec",
    groupHoverText: "group-hover:text-metier-elec",
  },
  plomberie: {
    text: "text-metier-plomberie",
    border: "border-metier-plomberie",
    borderLeft: "border-l-metier-plomberie",
    bg: "bg-metier-plomberie/10",
    solid: "bg-metier-plomberie",
    groupHoverText: "group-hover:text-metier-plomberie",
  },
  maintenance: {
    text: "text-metier-maintenance",
    border: "border-metier-maintenance",
    borderLeft: "border-l-metier-maintenance",
    bg: "bg-metier-maintenance/10",
    solid: "bg-metier-maintenance",
    groupHoverText: "group-hover:text-metier-maintenance",
  },
};

export function MetierIcon({
  icon,
  tone,
  className,
}: {
  icon: Service["icon"];
  tone: Accent;
  className?: string;
}) {
  const Icon = icons[icon];
  return (
    <span
      className={cn(
        "inline-flex size-11 shrink-0 items-center justify-center rounded-xs border",
        accent[tone].bg,
        accent[tone].border,
        className,
      )}
    >
      <Icon className={cn("size-5", accent[tone].text)} strokeWidth={1.75} aria-hidden />
    </span>
  );
}
