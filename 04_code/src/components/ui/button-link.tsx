import Link from "next/link";
import type { VariantProps } from "class-variance-authority";
import { Button, buttonVariants } from "./button";

/**
 * Lien habillé en bouton shadcn.
 *
 * Liens internes → `next/link` (préchargement). Liens `http`, `tel:` et
 * `mailto:` → ancre native : un appel ou un WhatsApp doit partir même si le
 * JavaScript n'a pas encore été chargé.
 */
export function ButtonLink({
  href,
  children,
  external,
  className,
  variant,
  size,
  ...props
}: {
  href: string;
  children: React.ReactNode;
  /** Force l'ouverture dans un nouvel onglet. */
  external?: boolean;
  className?: string;
} & VariantProps<typeof buttonVariants> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const natif = external || /^(https?:|tel:|mailto:)/.test(href);
  const nouvelOnglet = external || href.startsWith("http");

  return (
    <Button asChild variant={variant} size={size} className={className}>
      {natif ? (
        <a
          href={href}
          {...(nouvelOnglet ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          {...props}
        >
          {children}
        </a>
      ) : (
        <Link href={href} {...props}>
          {children}
        </Link>
      )}
    </Button>
  );
}
