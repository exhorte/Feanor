import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { Accordion } from "@/components/ui/accordion";
import { JsonLd } from "@/components/ui/json-ld";
import { Section } from "@/components/ui/section";

import { faqGenerale, faqFlat } from "@/content/faq";
import { services } from "@/content/services";
import { buildMetadata, faqJsonLd, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Questions fréquentes — Devis, délais, garantie, zones",
  description:
    "Devis, tarifs, délais d'intervention, garantie, zones couvertes, moyens de paiement : les réponses aux questions que se posent nos clients avant de nous appeler.",
  path: "/faq",
});

/* Les FAQ métier sont ajoutées ici pour que la page porte l'intégralité,
   et pour que le balisage FAQPage couvre tout le contenu. */
const categoriesMetier = services.map((s) => ({
  categorie: s.longName,
  questions: s.faq,
}));

const toutes = [...faqGenerale, ...categoriesMetier];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Les questions qu'on nous pose avant de nous appeler."
        intro="Les réponses sont écrites telles qu'un technicien les donnerait sur place. Si la vôtre n'y est pas, posez-la sur WhatsApp — on répond aussi aux questions qui ne débouchent pas sur une intervention."
        breadcrumb={[{ label: "FAQ", href: "/faq" }]}
      >
        {/* Sommaire : sur une longue page, on saute à sa catégorie */}
        <nav aria-label="Catégories de questions" className="flex flex-wrap gap-2">
          {toutes.map((cat, i) => (
            <a
              key={cat.categorie}
              href={`#faq-${i}`}
              className="rounded-full bg-white px-3.5 py-1.5 text-sm font-medium text-primary shadow-card ring-1 ring-foreground/8 transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              {cat.categorie}
            </a>
          ))}
        </nav>
      </PageHeader>

      {toutes.map((cat, i) => (
        <Section key={cat.categorie} id={`faq-${i}`} tone={i % 2 === 1 ? "doux" : "blanc"}>
          <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-4">
              <p className="tnum text-sm font-semibold text-primary">{String(i + 1).padStart(2, "0")}</p>
              <h2 className="mt-2 text-2xl sm:text-3xl">{cat.categorie}</h2>
            </div>
            <div className="lg:col-span-8">
              <Accordion items={cat.questions} />
            </div>
          </div>
        </Section>
      ))}

      <CtaBand
        titre="Votre question n'y est pas ?"
        intro="Posez-la directement. Une réponse honnête à une question technique ne coûte rien, et c'est souvent comme ça que commence une relation de confiance."
      />

      <JsonLd
        data={[
          faqJsonLd([...faqFlat, ...services.flatMap((s) => s.faq)]),
          breadcrumbJsonLd([
            { name: "Accueil", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />
    </>
  );
}
