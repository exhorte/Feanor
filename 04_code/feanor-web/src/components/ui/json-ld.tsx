/**
 * Balisage structuré.
 * Le contenu vient exclusivement de nos propres fichiers de contenu :
 * aucune donnée utilisateur n'est injectée ici.
 */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
