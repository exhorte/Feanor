import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { services } from "@/content/services";
import { whatsappUrl } from "@/lib/whatsapp";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 grid-technical mask-fade-edges opacity-50" aria-hidden />

      <Container className="relative">
        <div className="py-24 sm:py-32">
          <p className="tnum font-display text-sm uppercase tracking-[0.18em] text-accent">
            Erreur 404
          </p>
          <h1 className="mt-4 text-4xl sm:text-5xl">Cette page n&apos;existe pas.</h1>
          <p className="mt-5 max-w-xl text-lg text-muted">
            Le lien est peut-être ancien, ou comporte une faute de frappe. Voici
            par où reprendre.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href="/" size="lg">
              Retour à l&apos;accueil
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink href={whatsappUrl()} variant="whatsapp" size="lg" external>
              Nous écrire sur WhatsApp
            </ButtonLink>
          </div>

          <div className="mt-14 border-t border-line pt-8">
            <h2 className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
              Nos services
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="inline-flex items-center gap-2 text-muted transition-colors hover:text-accent"
                  >
                    {s.name}
                    <ArrowRight className="size-3.5" aria-hidden />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
