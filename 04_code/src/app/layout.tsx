import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { MobileActionBar } from "@/components/layout/mobile-action-bar";
import { WhatsAppFab } from "@/components/layout/whatsapp-fab";
import { JsonLd } from "@/components/ui/json-ld";
import { site } from "@/content/site";
import { localBusinessJsonLd } from "@/lib/seo";

/* Polices auto-hébergées, sous-ensemble latin, fichiers variables.
   Volontairement `next/font/local` et non `next/font/google` : un build qui
   dépend de fonts.gstatic.com échoue dès que le réseau est capricieux — on
   l'a constaté sur cette machine. Inter pour le texte, Plus Jakarta Sans
   (licence OFL) pour les titres : environ 75 Ko pour les deux familles. */
const inter = localFont({
  src: "../fonts/inter-variable.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const jakarta = localFont({
  src: "../fonts/plus-jakarta-sans-variable.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.descriptor} à Dakar`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.legalName }],
  keywords: [
    "électricien Dakar",
    "climatisation Dakar",
    "installation climatiseur Dakar",
    "dépannage climatisation Dakar",
    "mise aux normes électrique Sénégal",
    "frigoriste Dakar",
    "chambre froide Sénégal",
    "maintenance climatisation Dakar",
  ],
  openGraph: {
    type: "website",
    locale: "fr_SN",
    siteName: site.name,
    title: `${site.name} — ${site.descriptor}`,
    description: site.description,
    url: site.url,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#ffffff",
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="fr"
      data-scroll-behavior="smooth"
      className={`${inter.variable} ${jakarta.variable}`}
    >
      <body className="antialiased">
        <a
          href="#contenu"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
        >
          Aller au contenu
        </a>

        <Header />
        <main id="contenu">{children}</main>
        <Footer />

        <MobileActionBar />
        <WhatsAppFab />

        <JsonLd data={localBusinessJsonLd()} />
      </body>
    </html>
  );
}
