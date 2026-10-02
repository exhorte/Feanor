import type { MetadataRoute } from "next";
import { site } from "@/content/site";
import { services } from "@/content/services";
import { zonesLocales } from "@/content/zones";
import { realisationsVisibles } from "@/content/realisations";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const statiques: MetadataRoute.Sitemap = [
    { url: site.url, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/services`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/professionnels`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/particuliers`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/contact`, changeFrequency: "yearly", priority: 0.8 },
    { url: `${site.url}/faq`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${site.url}/a-propos`, changeFrequency: "yearly", priority: 0.5 },
  ];

  // La page Réalisations n'entre dans le sitemap qu'une fois documentée.
  if (realisationsVisibles) {
    statiques.push({
      url: `${site.url}/realisations`,
      changeFrequency: "monthly",
      priority: 0.7,
    });
  }

  const pagesServices: MetadataRoute.Sitemap = services.map((s) => ({
    url: `${site.url}/services/${s.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const pagesLocales: MetadataRoute.Sitemap = zonesLocales.map((z) => ({
    url: `${site.url}/${z.slug}`,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [...statiques, ...pagesServices, ...pagesLocales].map((entree) => ({
    ...entree,
    lastModified: now,
  }));
}
