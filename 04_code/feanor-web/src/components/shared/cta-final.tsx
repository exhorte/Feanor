import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ButtonLink } from "@/components/ui/button";
import { site } from "@/content/site";
import { whatsappUrl, telUrl } from "@/lib/whatsapp";

/**
 * Bloc d'action de fin de page.
 * Règle du site : aucune page ne se termine sans une action possible.
 */
export function CtaFinal({
  titre = "Un problème à régler ? Un projet à chiffrer ?",
  intro = "Décrivez-nous la situation en trois questions, ou écrivez-nous directement sur WhatsApp. Le devis est gratuit.",
  message,
}: {
  titre?: string;
  intro?: string;
  /** Message WhatsApp pré-rempli, contextualisé à la page. */
  message?: string;
}) {
  return (
    <section className="relative overflow-hidden border-t border-line bg-surface">
      <div className="absolute inset-0 grid-technical opacity-40" aria-hidden />
      <div
        className="absolute -bottom-32 right-1/4 size-[28rem] rounded-full bg-accent-fill/25 blur-[110px]"
        aria-hidden
      />

      <Container className="relative">
        <div className="py-16 sm:py-20">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl">{titre}</h2>
            <p className="mt-5 text-lg text-muted">{intro}</p>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <ButtonLink href="/contact" size="lg">
              Décrire mon problème
              <ArrowRight className="size-4" aria-hidden />
            </ButtonLink>
            <ButtonLink
              href={whatsappUrl(message)}
              variant="whatsapp"
              size="lg"
              external
            >
              <MessageCircle className="size-4" aria-hidden />
              WhatsApp
            </ButtonLink>
            <ButtonLink href={telUrl()} variant="outline" size="lg">
              <Phone className="size-4" aria-hidden />
              <span className="tnum">{site.phoneDisplay}</span>
            </ButtonLink>
          </div>
        </div>
      </Container>
    </section>
  );
}
