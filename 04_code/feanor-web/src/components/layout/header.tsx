"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { ButtonLink } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { realisationsVisibles } from "@/content/realisations";
import { telUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const nav = [
  { href: "/services", label: "Services" },
  { href: "/professionnels", label: "Professionnels" },
  { href: "/particuliers", label: "Particuliers" },
  // La page Réalisations n'entre dans la navigation qu'une fois documentée.
  ...(realisationsVisibles
    ? [{ href: "/realisations", label: "Réalisations" }]
    : []),
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Le menu se ferme au clic sur un lien (voir `fermer` plus bas), pas via un
  // effet sur `pathname` : un setState dans un effet déclenche un rendu en
  // cascade pour un résultat identique.
  const fermer = () => setOpen(false);

  // Bloquer le défilement de la page quand le menu est ouvert
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      {/* Bandeau technique — desktop uniquement */}
      <div className="hidden border-b border-line bg-surface md:block">
        <Container>
          <div className="flex h-9 items-center justify-between text-xs text-faint">
            <p>{site.hours.semaine}</p>
            <div className="flex items-center gap-5">
              <span>{site.hours.urgence}</span>
              <a
                href={telUrl()}
                className="inline-flex items-center gap-1.5 text-muted transition-colors hover:text-accent"
              >
                <Phone className="size-3.5" aria-hidden />
                <span className="tnum">{site.phoneDisplay}</span>
              </a>
            </div>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 z-50 border-b border-line bg-canvas/90 backdrop-blur-md">
        <Container>
          <div className="flex h-16 items-center justify-between gap-6">
            <Link href="/" aria-label={`${site.name} — accueil`}>
              <Logo withDescriptor />
            </Link>

            <nav className="hidden items-center gap-7 md:flex">
              {nav.map((item) => {
                const active =
                  pathname === item.href || pathname.startsWith(`${item.href}/`);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "text-[0.95rem] transition-colors",
                      active ? "text-accent" : "text-muted hover:text-text",
                    )}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="hidden md:block">
              <ButtonLink href="/contact" size="sm">
                Demander un devis
              </ButtonLink>
            </div>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="-mr-2 p-2 text-text md:hidden"
              aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={open}
              aria-controls="menu-mobile"
            >
              <Menu className="size-6" />
            </button>
          </div>
        </Container>
      </header>

      {/* Panneau mobile */}
      {open && (
        <div
          id="menu-mobile"
          className="fixed inset-0 z-[60] bg-canvas md:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Menu de navigation"
        >
          <Container>
            <div className="flex h-16 items-center justify-between">
              <Logo />
              <button
                type="button"
                onClick={fermer}
                className="-mr-2 p-2 text-text"
                aria-label="Fermer le menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="mt-6 flex flex-col divide-y divide-line border-y border-line">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={fermer}
                  className="py-4 font-display text-xl text-text"
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="/faq"
                onClick={fermer}
                className="py-4 font-display text-xl text-muted"
              >
                FAQ
              </Link>
              <Link
                href="/a-propos"
                onClick={fermer}
                className="py-4 font-display text-xl text-muted"
              >
                À propos
              </Link>
            </nav>

            <div className="mt-8">
              <ButtonLink
                href="/contact"
                size="lg"
                className="w-full"
                onClick={fermer}
              >
                Demander un devis
              </ButtonLink>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
