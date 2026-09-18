import { Hero } from "@/components/home/hero";
import { Engagements } from "@/components/home/engagements";
import { ServicesGrid } from "@/components/home/services-grid";
import { Segments } from "@/components/home/segments";
import { Care } from "@/components/home/care";
import { Pourquoi } from "@/components/home/pourquoi";
import { Zones } from "@/components/home/zones";
import { FaqSection } from "@/components/shared/faq-section";
import { CtaFinal } from "@/components/shared/cta-final";
import { JsonLd } from "@/components/ui/json-ld";
import { faqFlat } from "@/content/faq";
import { faqJsonLd } from "@/lib/seo";

/* Sélection des questions qui lèvent le plus d'objections à l'achat.
   La page /faq porte l'intégralité. */
const faqAccueil = faqFlat.filter((q) =>
  [
    "Le devis est-il payant ?",
    "Sous quel délai intervenez-vous ?",
    "Vos interventions sont-elles garanties ?",
    "Le prix annoncé peut-il changer en cours d'intervention ?",
    "Quelles zones couvrez-vous ?",
  ].includes(q.q),
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Engagements />
      <ServicesGrid />
      <Segments />
      <Care />
      <Pourquoi />
      <Zones />
      <FaqSection items={faqAccueil} lienToutes surface />
      <CtaFinal />

      <JsonLd data={faqJsonLd(faqAccueil)} />
    </>
  );
}
