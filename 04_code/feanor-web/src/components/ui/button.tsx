import Link from "next/link";
import { cn } from "@/lib/utils";

type Variant = "primary" | "outline" | "ghost" | "whatsapp" | "urgence" | "light";
type Size = "sm" | "md" | "lg";

/* Boutons pilule — coins entièrement arrondis, à l'image de la référence.
   La V1 utilisait des angles vifs (rounded-xs) ; ce changement est demandé
   explicitement et cascade depuis les jetons de rayon dans globals.css. */
const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-display font-medium " +
  "tracking-tight transition-all duration-150 " +
  "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
  "disabled:pointer-events-none disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary:
    "bg-accent text-on-fill shadow-[0_8px_20px_-6px_rgb(220_47_29/0.45)] hover:bg-accent-deep hover:shadow-[0_10px_24px_-6px_rgb(220_47_29/0.5)]",
  outline:
    "border border-line-strong bg-transparent text-text hover:border-accent hover:text-accent",
  light: "bg-canvas text-text shadow-float hover:text-accent",
  ghost: "bg-transparent text-muted hover:text-text",
  whatsapp: "bg-whatsapp text-on-fill hover:brightness-110",
  urgence: "bg-urgence text-on-fill hover:brightness-110",
};

const sizes: Record<Size, string> = {
  sm: "h-10 px-4 text-sm",
  md: "h-12 px-6 text-[0.95rem]",
  lg: "h-14 px-8 text-base",
};

type CommonProps = {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
};

export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: CommonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(base, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className,
  children,
  external,
  ...props
}: CommonProps & {
  href: string;
  external?: boolean;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">) {
  const classes = cn(base, variants[variant], sizes[size], className);

  // Liens externes, tel: et wa.me — ancre native, pas de préchargement inutile
  if (external || href.startsWith("http") || href.startsWith("tel:")) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith("http")
          ? { target: "_blank", rel: "noopener noreferrer" }
          : {})}
        {...props}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes} {...props}>
      {children}
    </Link>
  );
}
