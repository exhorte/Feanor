import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function PageHeader({
  eyebrow,
  title,
  intro,
  breadcrumb,
  children,
  accentClass = "text-accent",
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  breadcrumb?: { label: string; href: string }[];
  children?: React.ReactNode;
  accentClass?: string;
}) {
  return (
    <section className="relative overflow-hidden border-b border-line">
      <div className="absolute inset-0 grid-technical opacity-40" aria-hidden />
      <div
        className="absolute -top-32 left-1/3 size-[30rem] rounded-full bg-accent-fill/20 blur-[110px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="py-14 sm:py-20">
          {breadcrumb && (
            <nav aria-label="Fil d'Ariane" className="mb-7">
              <ol className="flex flex-wrap items-center gap-1.5 text-xs text-faint">
                <li>
                  <Link href="/" className="transition-colors hover:text-muted">
                    Accueil
                  </Link>
                </li>
                {breadcrumb.map((b, i) => (
                  <li key={b.href} className="flex items-center gap-1.5">
                    <ChevronRight className="size-3" aria-hidden />
                    {i === breadcrumb.length - 1 ? (
                      <span className="text-muted">{b.label}</span>
                    ) : (
                      <Link
                        href={b.href}
                        className="transition-colors hover:text-muted"
                      >
                        {b.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ol>
            </nav>
          )}

          {eyebrow && (
            <p
              className={cn(
                "mb-4 font-display text-[0.7rem] font-medium uppercase tracking-[0.18em]",
                accentClass,
              )}
            >
              {eyebrow}
            </p>
          )}

          <h1 className="max-w-3xl text-4xl sm:text-5xl">{title}</h1>

          {intro && (
            <p className="mt-6 max-w-2xl text-lg text-muted">{intro}</p>
          )}

          {children && <div className="mt-9">{children}</div>}
        </div>
      </Container>
    </section>
  );
}
