import { PageHeader } from "@/components/shared/page-header";
import { CtaBand } from "@/components/shared/cta-band";
import { ServiceCard } from "@/components/shared/service-card";
import { Card, CardContent } from "@/components/ui/card";
import { IconTile } from "@/components/ui/icon-tile";
import { Reveal } from "@/components/ui/reveal";
import { Section, SectionHeader } from "@/components/ui/section";
import { JsonLd } from "@/components/ui/json-ld";
import { services } from "@/content/services";
import type { IconName } from "@/content/types";
import { buildMetadata, breadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Nos services — Électricité, climatisation, maintenance",
  description:
    "Les métiers d'Oralec à Dakar : climatisation et froid, électricité générale, maintenance et dépannage. Installation, entretien et intervention, pour les particuliers et les professionnels.",
  path: "/services",
});

/* Les problèmes « à la frontière » — la raison d'être d'une seule équipe. */
const frontieres: { icon: IconName; titre: string; detail: string }[] = [
  {
    icon: "eclair",
    titre: "Le climatiseur qui fait disjoncter",
    detail:
      "Circuit partagé, disjoncteur sous-calibré ou défaut dans l'appareil : c'est à la fois un problème électrique et frigorifique.",
  },
  {
    icon: "flocon",
    titre: "La chambre froide qui décroche la nuit",
    detail:
      "Groupe froid, alimentation, protection contre les retours de tension : le diagnostic se fait des deux côtés.",
  },
  {
    icon: "batterie",
    titre: "Les coupures qui fatiguent le compresseur",
    detail:
      "Parafoudre, onduleur, inverseur de source : la réponse est électrique, le bénéfice est sur la climatisation.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Nos services"
        title="Électricité et climatisation, une seule équipe."
        intro="L'électricité et le froid se croisent en permanence sur un bâtiment. Les traiter séparément, c'est faire circuler le client entre deux prestataires qui se renvoient la responsabilité. Chez Oralec, chaque métier a ses spécialistes — et une seule entreprise répond de l'ensemble."
        breadcrumb={[{ label: "Services", href: "/services" }]}
        photo="electricienInstallation"
      />

      <Section>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 70} className="h-full">
              <ServiceCard service={s} points={s.prestations.slice(0, 5).map((p) => p.title)} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section tone="doux">
        <SectionHeader
          eyebrow="Pourquoi un seul prestataire"
          title="Les pannes les plus coûteuses sont à la frontière de deux métiers."
          intro="Ce sont aussi celles où chaque prestataire renvoie sur l'autre. Avec électriciens et frigoristes dans la même équipe, il n'y a personne sur qui renvoyer."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {frontieres.map((f, i) => (
            <Reveal key={f.titre} delay={i * 60} className="h-full">
              <Card className="h-full gap-0 px-6 py-7 shadow-card">
                <IconTile name={f.icon} />
                <CardContent className="mt-5 px-0">
                  <h3 className="text-lg font-bold">{f.titre}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted-foreground">{f.detail}</p>
                </CardContent>
              </Card>
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBand />

      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Accueil", path: "/" },
          { name: "Services", path: "/services" },
        ])}
      />
    </>
  );
}
