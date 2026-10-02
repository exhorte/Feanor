import Image from "next/image";
import { photos } from "@/content/images";
import type { PhotoKey } from "@/content/types";
import { cn } from "@/lib/utils";

/**
 * Photo de la photothèque (`src/content/images.ts`), en mode `fill` :
 * le parent fixe le cadre (position relative + dimensions ou ratio), la photo
 * le remplit en gardant son point focal.
 *
 * `sizes` est obligatoire : c'est lui qui évite de servir une image de bureau
 * à un téléphone — sur un forfait mobile, c'est la ligne qui compte.
 */
export function Photo({
  name,
  sizes,
  className,
  alt,
  mirrored = false,
  prioritaire = false,
  quality,
}: {
  name: PhotoKey;
  sizes: string;
  className?: string;
  /** Remplace le texte alternatif par défaut ; "" pour une image décorative. */
  alt?: string;
  /** Retourne la photo horizontalement, pour orienter le sujet vers le texte. */
  mirrored?: boolean;
  /** Image principale au-dessus de la ligne de flottaison (LCP). */
  prioritaire?: boolean;
  quality?: 75 | 85;
}) {
  const photo = photos[name];
  return (
    <Image
      src={photo.src}
      alt={alt ?? photo.alt}
      fill
      sizes={sizes}
      quality={quality}
      className={cn("object-cover", mirrored && "-scale-x-100", className)}
      style={{ objectPosition: photo.focus }}
      {...(prioritaire ? { loading: "eager" as const, fetchPriority: "high" as const } : {})}
    />
  );
}
