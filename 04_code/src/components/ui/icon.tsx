import type { ComponentType } from "react";
import type { IconProps } from "@phosphor-icons/react";
import {
  BatteryChargingIcon,
  BedIcon,
  BuildingOfficeIcon,
  BuildingsIcon,
  CalendarCheckIcon,
  CircuitryIcon,
  ClipboardTextIcon,
  ClockCountdownIcon,
  ClockIcon,
  EnvelopeSimpleIcon,
  FactoryIcon,
  FanIcon,
  FileTextIcon,
  ForkKnifeIcon,
  GaugeIcon,
  HandshakeIcon,
  HardHatIcon,
  HospitalIcon,
  HouseLineIcon,
  LeafIcon,
  LightbulbIcon,
  LightningIcon,
  ListChecksIcon,
  MagnifyingGlassIcon,
  MapPinIcon,
  MoonStarsIcon,
  PhoneIcon,
  PlugChargingIcon,
  ReceiptIcon,
  SealCheckIcon,
  ShieldCheckIcon,
  SirenIcon,
  SnowflakeIcon,
  SprayBottleIcon,
  StorefrontIcon,
  ThermometerColdIcon,
  ToolboxIcon,
  UsersThreeIcon,
  WarningIcon,
  WavesIcon,
  WhatsappLogoIcon,
  WindIcon,
  WrenchIcon,
} from "@phosphor-icons/react/ssr";

import type { IconName } from "@/content/types";
import { AirConditionerIcon } from "./air-conditioner-icon";

/**
 * Icônes du site — Phosphor, graisse « duotone » par défaut.
 *
 * Phosphor a été retenu (et déclaré comme bibliothèque d'icônes de shadcn/ui
 * dans components.json) pour sa graisse duotone : un aplat translucide sous
 * le trait donne du volume à l'icône, plus « réel » qu'un simple contour.
 *
 * Import depuis `@phosphor-icons/react/ssr` : ces composants n'utilisent pas
 * de contexte React, ils sont donc rendus côté serveur sans envoyer un octet
 * de JavaScript au navigateur. Les composants client importent, eux,
 * directement depuis `@phosphor-icons/react`.
 */

const icones: Record<IconName, ComponentType<IconProps>> = {
  climatiseur: AirConditionerIcon,
  flocon: SnowflakeIcon,
  ventilateur: FanIcon,
  thermometre: ThermometerColdIcon,
  vent: WindIcon,
  nettoyage: SprayBottleIcon,
  eclair: LightningIcon,
  tableau: CircuitryIcon,
  prise: PlugChargingIcon,
  ampoule: LightbulbIcon,
  batterie: BatteryChargingIcon,
  jauge: GaugeIcon,
  "boite-outils": ToolboxIcon,
  cle: WrenchIcon,
  casque: HardHatIcon,
  bouclier: ShieldCheckIcon,
  sceau: SealCheckIcon,
  chrono: ClockCountdownIcon,
  horloge: ClockIcon,
  recu: ReceiptIcon,
  document: FileTextIcon,
  inventaire: ClipboardTextIcon,
  liste: ListChecksIcon,
  loupe: MagnifyingGlassIcon,
  accord: HandshakeIcon,
  sirene: SirenIcon,
  calendrier: CalendarCheckIcon,
  equipe: UsersThreeIcon,
  localisation: MapPinIcon,
  telephone: PhoneIcon,
  whatsapp: WhatsappLogoIcon,
  email: EnvelopeSimpleIcon,
  maison: HouseLineIcon,
  immeuble: BuildingsIcon,
  bureaux: BuildingOfficeIcon,
  boutique: StorefrontIcon,
  usine: FactoryIcon,
  lit: BedIcon,
  couverts: ForkKnifeIcon,
  sante: HospitalIcon,
  lune: MoonStarsIcon,
  feuille: LeafIcon,
  littoral: WavesIcon,
  alerte: WarningIcon,
};

export function Icon({
  name,
  weight = "duotone",
  ...props
}: IconProps & { name: IconName }) {
  const Composant = icones[name];
  return <Composant weight={weight} aria-hidden {...props} />;
}
