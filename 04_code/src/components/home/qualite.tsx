import { Card, CardContent } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Photo } from "@/components/ui/photo";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { qualite } from "@/content/accueil";

/** « Nos engagements — la qualité au cœur de chaque intervention » (maquette). */
export function Qualite() {
  return (
    <Section tone="doux">
      <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="order-last lg:order-first lg:col-span-5">
          {/* Photo d'illustration (banque d'images) : pas de légende qui la
              ferait passer pour l'équipe Oralec. */}
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl shadow-float sm:aspect-[4/3] lg:aspect-[4/5]">
            <Photo name="technicienUniforme" sizes="(min-width: 1024px) 38vw, 94vw" />
          </div>
        </div>

        <div className="lg:col-span-7">
          <SectionHeader
            eyebrow="Nos engagements"
            title="La qualité au cœur de chaque intervention."
          />

          <div className="mt-10 space-y-4">
            {qualite.map((q, i) => (
              <Reveal key={q.titre} delay={i * 70}>
                <Card className="flex-row items-start gap-5 px-6 py-6 shadow-card">
                  <IconTile name={q.icon} size="lg" />
                  <CardContent className="px-0">
                    <h3 className="text-lg font-bold">{q.titre}</h3>
                    <p className="mt-1.5 text-[0.95rem] text-muted-foreground">{q.detail}</p>
                  </CardContent>
                </Card>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
