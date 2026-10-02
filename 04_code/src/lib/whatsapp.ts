import { site } from "@/content/site";

/**
 * WhatsApp est le canal prioritaire du site.
 * Tous les liens passent par ici pour que le message soit toujours pré-rempli :
 * un message déjà rédigé transforme « je verrai plus tard » en conversation.
 */

const DEFAULT_MESSAGE = `Bonjour ${site.name}, j'ai besoin d'une intervention.`;

export function whatsappUrl(message: string = DEFAULT_MESSAGE): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
}

export function telUrl(urgence = false): string {
  return `tel:${urgence ? site.phoneUrgence : site.phone}`;
}

/** Message pour un service donné, depuis une page service ou une page locale. */
export function whatsappServiceMessage(service: string, lieu?: string): string {
  const base = `Bonjour ${site.name}, je vous contacte au sujet de : ${service}.`;
  return lieu ? `${base} Je suis à ${lieu}.` : base;
}

/** Message construit par le parcours « J'ai un problème ». */
export function whatsappDiagnosticMessage(input: {
  domaine: string;
  besoin: string;
  zone: string;
  telephone: string;
  precision?: string;
}): string {
  const lignes = [
    `Bonjour ${site.name},`,
    "",
    `• Domaine : ${input.domaine}`,
    `• Besoin : ${input.besoin}`,
    `• Zone : ${input.zone}`,
    `• Téléphone : ${input.telephone}`,
  ];

  if (input.precision?.trim()) {
    lignes.push(`• Précision : ${input.precision.trim()}`);
  }

  lignes.push("", "Merci de me rappeler.");
  return lignes.join("\n");
}

/** Message construit par le formulaire de contact de l'accueil. */
export function whatsappContactMessage(input: {
  nom: string;
  telephone: string;
  service: string;
  message?: string;
}): string {
  const lignes = [
    `Bonjour ${site.name}, je suis ${input.nom.trim()}.`,
    "",
    `• Demande : ${input.service}`,
    `• Téléphone : ${input.telephone.trim()}`,
  ];

  if (input.message?.trim()) {
    lignes.push(`• Message : ${input.message.trim()}`);
  }

  lignes.push("", "Merci de me recontacter.");
  return lignes.join("\n");
}
