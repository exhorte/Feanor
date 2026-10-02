import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF d'abord : c'est le format le plus léger, et la cible paie la
    // donnée mobile. WebP en repli pour les navigateurs qui ne lisent pas l'AVIF.
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],

    /* Photos libres de droits servies depuis les CDN Unsplash et Pexels
       (licences et crédits : src/content/images.ts). La requête est figée
       pour que l'optimiseur ne récupère qu'une version 2 400 px, et jamais
       l'original de 4 000 à 6 000 px. Toute autre URL est refusée (400). */
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
        search: "?w=2400&q=80",
      },
      {
        protocol: "https",
        hostname: "images.pexels.com",
        pathname: "/photos/**",
        search: "?auto=compress&cs=tinysrgb&w=2400",
      },
    ],
  },
};

export default nextConfig;
