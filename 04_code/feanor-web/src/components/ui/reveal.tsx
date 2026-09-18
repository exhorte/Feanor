import { cn } from "@/lib/utils";

/**
 * Apparition au scroll.
 * Composant serveur : aucun JavaScript n'est envoyé au client.
 * Toute la mécanique tient dans l'utilitaire CSS `reveal` (voir globals.css).
 */
export function Reveal({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className?: string;
  /** Décalage en ms, pour animer une grille en cascade. */
  delay?: number;
}) {
  return (
    <div
      className={cn("reveal", className)}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
}
