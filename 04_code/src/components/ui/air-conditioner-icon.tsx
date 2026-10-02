import type { IconProps } from "@phosphor-icons/react";

/**
 * Climatiseur split mural — absent de Phosphor, dessiné dans sa grammaire :
 * grille 256, trait de 16 en « regular », aplat à 20 % en « duotone ».
 */
export function AirConditionerIcon({
  size = "1em",
  weight = "regular",
  color = "currentColor",
  alt,
  mirrored = false,
  ...props
}: IconProps) {
  const trait =
    weight === "thin" ? 8 : weight === "light" ? 12 : weight === "bold" ? 24 : 16;
  // En « fill », le corps est plein : le trait intérieur et le voyant passent en réserve blanche.
  const plein = weight === "fill";

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 256 256"
      fill={color}
      transform={mirrored ? "scale(-1, 1)" : undefined}
      {...props}
    >
      {alt && <title>{alt}</title>}

      {/* Unité intérieure */}
      {(weight === "duotone" || plein) && (
        <rect x="24" y="44" width="208" height="104" rx="18" opacity={plein ? 1 : 0.2} />
      )}
      <g fill="none" strokeWidth={trait} strokeLinecap="round" strokeLinejoin="round">
        {!plein && <rect x="24" y="44" width="208" height="104" rx="18" stroke={color} />}
        <path d="M60 116h136" stroke={plein ? "white" : color} />
      </g>
      <circle cx="194" cy="80" r={weight === "bold" ? 12 : 10} fill={plein ? "white" : color} />

      {/* Flux d'air soufflé */}
      <g fill="none" stroke={color} strokeWidth={trait} strokeLinecap="round">
        <path d="M96 180c0 16-12 22-12 40" />
        <path d="M128 180v40" />
        <path d="M160 180c0 16 12 22 12 40" />
      </g>
    </svg>
  );
}
