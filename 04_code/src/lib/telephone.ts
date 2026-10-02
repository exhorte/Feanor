/**
 * Numéro mobile sénégalais : 9 chiffres commençant par 7 (70 à 78),
 * avec ou sans indicatif +221, espaces et ponctuation tolérés.
 * Partagé par le parcours « J'ai un problème » et le formulaire de contact.
 */
export function telephoneValide(valeur: string): boolean {
  const chiffres = valeur.replace(/[\s.\-()]/g, "").replace(/^(\+|00)?221/, "");
  return /^7[0-8]\d{7}$/.test(chiffres);
}
