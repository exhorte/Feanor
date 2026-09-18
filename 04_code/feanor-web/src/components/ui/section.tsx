import { cn } from "@/lib/utils";
import { Container } from "./container";

export function Section({
  id,
  className,
  children,
  surface = false,
  size = "default",
}: {
  id?: string;
  className?: string;
  children: React.ReactNode;
  surface?: boolean;
  size?: "default" | "narrow" | "wide";
}) {
  return (
    <section
      id={id}
      className={cn(
        "border-t border-line py-16 sm:py-24",
        surface && "bg-surface",
        className,
      )}
    >
      <Container size={size}>{children}</Container>
    </section>
  );
}

/** Surtitre technique — petites capitales espacées, marque l'entrée de section. */
export function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "mb-4 font-display text-[0.7rem] font-medium uppercase tracking-[0.18em] text-accent",
        className,
      )}
    >
      {children}
    </p>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  intro,
  align = "left",
  className,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="text-3xl sm:text-4xl">{title}</h2>
      {intro && <p className="mt-5 text-lg text-muted">{intro}</p>}
    </div>
  );
}
