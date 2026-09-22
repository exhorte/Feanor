import { Section, SectionHeader } from "@/components/ui/section";
import { PhotoFrame } from "@/components/ui/photo-frame";
import { Stepper } from "@/components/ui/stepper";
import { Camera, Wrench, CheckCircle2 } from "lucide-react";
import { parcoursClient } from "@/content/parcours";

/**
 * Notre méthode — trio de photos numérotées + chronologie du parcours.
 *
 * Les trois cadres reprennent le protocole de captation déjà défini pour
 * la page Réalisations (voir src/content/realisations.ts) : avant, pendant,
 * après, au même cadrage. Ce sont donc les futures vraies photos de chantier
 * qui viendront occuper ces emplacements — pas des visuels à inventer.
 */
export function ProcessSection() {
  return (
    <Section>
      <SectionHeader
        eyebrow="Notre méthode"
        title="Documenté à chaque étape."
        intro="Chaque intervention suit la même séquence, et chaque chantier sera photographié avant, pendant et après — au même cadrage. C'est ce qui rend le résultat vérifiable, pas seulement promis."
      />

      <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-7">
          <div className="grid grid-cols-3 gap-4">
            <PhotoFrame ratio="3/4" numero="01" icon={Camera} label="Avant" />
            <PhotoFrame ratio="3/4" numero="02" icon={Wrench} label="Pendant" />
            <PhotoFrame ratio="3/4" numero="03" icon={CheckCircle2} label="Après" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <Stepper
            etapes={parcoursClient.map((e) => ({
              titre: e.titre,
              detail: e.detail,
            }))}
            cta={{ href: "/contact", label: "Démarrer une demande" }}
          />
        </div>
      </div>
    </Section>
  );
}
