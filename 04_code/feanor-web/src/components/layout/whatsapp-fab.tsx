import { MessageCircle } from "lucide-react";
import { whatsappUrl } from "@/lib/whatsapp";

/**
 * Bouton WhatsApp flottant — desktop uniquement.
 * Sur mobile, la barre d'action fixe remplit déjà ce rôle : deux boutons
 * WhatsApp sur le même écran, c'est un bouton de trop.
 */
export function WhatsAppFab() {
  return (
    <a
      href={whatsappUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className="group fixed bottom-6 right-6 z-50 hidden items-center gap-3 rounded-full bg-whatsapp px-5 py-3.5 text-on-fill shadow-[0_10px_28px_-8px_rgb(37_211_102/0.55)] transition-transform hover:scale-105 md:inline-flex"
      aria-label="Nous écrire sur WhatsApp"
    >
      <MessageCircle className="size-5" aria-hidden />
      <span className="font-display text-sm font-medium">WhatsApp</span>
    </a>
  );
}
