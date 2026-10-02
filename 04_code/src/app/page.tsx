import { Hero } from "@/components/home/hero";
import { Prestations } from "@/components/home/prestations";
import { Confort } from "@/components/home/confort";
import { Domaines } from "@/components/home/domaines";
import { APropos } from "@/components/home/a-propos";
import { Qualite } from "@/components/home/qualite";
import { Reperes } from "@/components/home/reperes";
import { Methode } from "@/components/home/methode";
import { Temoignages } from "@/components/home/temoignages";
import { Zones } from "@/components/home/zones";
import { CtaBand } from "@/components/shared/cta-band";
import { FaqSection } from "@/components/shared/faq-section";
import { ContactSection } from "@/components/shared/contact-section";
import { JsonLd } from "@/components/ui/json-ld";
import { faqFlat } from "@/content/faq";
import { faqJsonLd } from "@/lib/seo";

/* Sélection des questions qui lèvent le plus d'objections à l'achat.
   La page /faq porte l'intégralité. */
const faqAccueil = faqFlat.filter((q) =>
  [
    "Sous quel délai intervenez-vous ?",
    "Le devis est-il payant ?",
    "Le prix annoncé peut-il changer en cours d'intervention ?",
    "Vos interventions sont-elles garanties ?",
    "Quelles zones couvrez-vous ?",
  ].includes(q.q),
);

export default function HomePage() {
  return (
    <>
      <Hero />
      <Prestations />
      <Confort />
      <Domaines />
      <CtaBand />
      <APropos />
      <Qualite />
      <Reperes />
      <Methode />
      <Temoignages />
      <Zones />
      <FaqSection items={faqAccueil} lienToutes photo="techniciennePerceuse" />
      <ContactSection tone="doux" />

      <JsonLd data={faqJsonLd(faqAccueil)} />
    </>
  );
}
