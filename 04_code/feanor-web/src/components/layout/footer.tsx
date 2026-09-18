import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Container } from "@/components/ui/container";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { zonesLocales } from "@/content/zones";
import { realisationsVisibles } from "@/content/realisations";
import { telUrl, whatsappUrl } from "@/lib/whatsapp";

export function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <Container>
        <div className="grid gap-12 py-16 md:grid-cols-12 md:gap-8">
          {/* Marque */}
          <div className="md:col-span-4">
            <Logo withDescriptor />
            <p className="mt-5 max-w-xs text-sm text-muted">
              {site.tagline} Installation, maintenance et dépannage en froid,
              climatisation, électricité et plomberie au Sénégal.
            </p>

            <div className="mt-6 flex flex-col gap-3 text-sm">
              <a
                href={telUrl()}
                className="inline-flex items-center gap-2.5 text-text transition-colors hover:text-accent"
              >
                <Phone className="size-4 text-accent" aria-hidden />
                <span className="tnum">{site.phoneDisplay}</span>
              </a>
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-text transition-colors hover:text-accent"
              >
                <MessageCircle className="size-4 text-whatsapp-text" aria-hidden />
                WhatsApp
              </a>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2.5 text-text transition-colors hover:text-accent"
              >
                <Mail className="size-4 text-accent" aria-hidden />
                {site.email}
              </a>
              <p className="inline-flex items-start gap-2.5 text-muted">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent" aria-hidden />
                <span>
                  {site.address.street}
                  <br />
                  {site.address.city}, {site.address.countryName}
                </span>
              </p>
            </div>
          </div>

          {/* Services */}
          <div className="md:col-span-2">
            <h2 className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
              Services
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Entreprise */}
          <div className="md:col-span-2">
            <h2 className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
              Entreprise
            </h2>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <Link href="/professionnels" className="text-muted transition-colors hover:text-accent">
                  Feanor Business
                </Link>
              </li>
              <li>
                <Link href="/particuliers" className="text-muted transition-colors hover:text-accent">
                  Particuliers
                </Link>
              </li>
              {realisationsVisibles && (
                <li>
                  <Link href="/realisations" className="text-muted transition-colors hover:text-accent">
                    Réalisations
                  </Link>
                </li>
              )}
              <li>
                <Link href="/a-propos" className="text-muted transition-colors hover:text-accent">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-muted transition-colors hover:text-accent">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-muted transition-colors hover:text-accent">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Zones */}
          <div className="md:col-span-4">
            <h2 className="font-display text-xs font-medium uppercase tracking-[0.16em] text-faint">
              Zones d&apos;intervention
            </h2>
            <ul className="mt-5 flex flex-wrap gap-x-4 gap-y-3 text-sm">
              {zonesLocales.map((z) => (
                <li key={z.slug}>
                  <Link
                    href={`/${z.slug}`}
                    className="text-muted transition-colors hover:text-accent"
                  >
                    {z.service} {z.ville}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-8 border-t border-line pt-6 text-sm text-muted">
              <p>{site.hours.semaine}</p>
              <p>{site.hours.samedi}</p>
              <p className="mt-1 text-urgence-text">{site.hours.urgence}</p>
            </div>
          </div>
        </div>

        {/* Bloc de légitimité — élément de conversion, pas mention légale.
            Un prestataire technique qui affiche son NINEA et son RC lève
            la première objection du marché. */}
        <div className="flex flex-col gap-4 border-t border-line py-7 text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-x-5 gap-y-1">
            <span>
              © {new Date().getFullYear()} {site.legalName}
            </span>
            <span className="tnum">NINEA {site.legal.ninea}</span>
            <span className="tnum">RC {site.legal.rc}</span>
          </div>
          <Link
            href="/mentions-legales"
            className="transition-colors hover:text-muted"
          >
            Mentions légales
          </Link>
        </div>
      </Container>
    </footer>
  );
}
