import type { Metadata } from "next";
import { site } from "@/content/site";

/** Fabrique de métadonnées — titres uniques, descriptions rédigées à la main. */
export function buildMetadata({
  title,
  description,
  path = "/",
  noIndex = false,
}: {
  title: string;
  description: string;
  path?: string;
  /** Page accessible par URL mais volontairement hors index. */
  noIndex?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  return {
    title,
    description,
    alternates: { canonical: url },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
    openGraph: {
      title,
      description,
      url,
      siteName: site.name,
      locale: "fr_SN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

/* ------------------------------------------------------------------ JSON-LD */

export function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "HVACBusiness",
    "@id": `${site.url}#business`,
    name: site.name,
    legalName: site.legalName,
    description: site.description,
    url: site.url,
    telephone: site.phone,
    email: site.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      addressCountry: site.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: site.address.lat,
      longitude: site.address.lng,
    },
    areaServed: [...site.zonesDakar, ...site.zonesRegions].map((z) => ({
      "@type": "Place",
      name: z,
    })),
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:30",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Saturday"],
        opens: "08:00",
        closes: "14:00",
      },
    ],
    knowsAbout: [
      "Climatisation",
      "Réfrigération commerciale",
      "Chambre froide",
      "Électricité du bâtiment",
      "Plomberie",
      "Maintenance technique",
    ],
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    url: `${site.url}${input.path}`,
    provider: { "@id": `${site.url}#business` },
    areaServed: { "@type": "City", name: "Dakar" },
    serviceType: input.name,
  };
}

export function faqJsonLd(questions: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: questions.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${site.url}${item.path}`,
    })),
  };
}
