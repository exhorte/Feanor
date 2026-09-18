"use client";

import { useState } from "react";
import {
  Snowflake,
  Zap,
  Droplets,
  Box,
  Wrench,
  ArrowLeft,
  ArrowRight,
  MessageCircle,
  Mail,
  type LucideIcon,
} from "lucide-react";

import { site, zonesIntervention } from "@/content/site";
import { whatsappUrl, whatsappDiagnosticMessage } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

/**
 * Parcours « J'ai un problème ».
 *
 * Trois étapes, pas six écrans. Décisions volontaires :
 * — pas d'upload photo (friction + données mobiles facturées ; la photo se
 *   demande dans WhatsApp, où elle coûte un tap) ;
 * — pas de description libre obligatoire (elle fait abandonner) ;
 * — pas de géolocalisation (une liste de zones suffit et n'ouvre pas de
 *   fenêtre de permission navigateur) ;
 * — aucun état serveur : tout tient en local, rien n'est envoyé avant
 *   l'action finale de l'utilisateur.
 */

type Option = { value: string; label: string; icon?: LucideIcon; hint?: string };

const domaines: Option[] = [
  { value: "Climatisation", label: "Climatisation", icon: Snowflake },
  { value: "Électricité", label: "Électricité", icon: Zap },
  { value: "Plomberie", label: "Plomberie", icon: Droplets },
  { value: "Froid commercial", label: "Froid commercial", icon: Box, hint: "Chambre froide, vitrine" },
  { value: "Autre / je ne sais pas", label: "Autre", icon: Wrench, hint: "Je ne sais pas" },
];

const besoins: Option[] = [
  { value: "Dépannage urgent", label: "Dépannage urgent", hint: "C'est en panne maintenant" },
  { value: "Réparation", label: "Réparation", hint: "Ça fonctionne mal" },
  { value: "Installation", label: "Installation", hint: "Nouvel équipement" },
  { value: "Entretien", label: "Entretien", hint: "Nettoyage, contrôle" },
  { value: "Diagnostic", label: "Diagnostic", hint: "Je ne sais pas d'où ça vient" },
  { value: "Devis / contrat", label: "Devis ou contrat", hint: "Projet, maintenance" },
];

/** Numéro sénégalais : 9 chiffres commençant par 7, avec ou sans +221. */
function telephoneValide(valeur: string): boolean {
  const chiffres = valeur.replace(/[\s.\-()]/g, "").replace(/^\+?221/, "");
  return /^7[0-8]\d{7}$/.test(chiffres);
}

export function DiagnosticFlow() {
  const [etape, setEtape] = useState(0);
  const [domaine, setDomaine] = useState("");
  const [besoin, setBesoin] = useState("");
  const [zone, setZone] = useState("");
  const [telephone, setTelephone] = useState("");
  const [precision, setPrecision] = useState("");
  const [touche, setTouche] = useState(false);

  const telOk = telephoneValide(telephone);
  const etape3Ok = zone !== "" && telOk;

  const message = whatsappDiagnosticMessage({
    domaine,
    besoin,
    zone,
    telephone,
    precision,
  });

  /** Renvoie l'utilisateur vers le champ qui bloque l'envoi. */
  function signalerIncomplet() {
    setTouche(true);
    const cible = zone === "" ? "zone" : "telephone";
    document.getElementById(cible)?.focus();
  }

  const mailtoHref =
    `mailto:${site.emailDevis}` +
    `?subject=${encodeURIComponent(`Demande d'intervention — ${domaine}`)}` +
    `&body=${encodeURIComponent(message)}`;

  return (
    <div className="border border-line bg-canvas">
      {/* Progression */}
      <div className="flex items-center gap-4 border-b border-line px-5 py-4 sm:px-7">
        <div className="flex flex-1 gap-1.5" aria-hidden>
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={cn(
                "h-1 flex-1 transition-colors",
                i <= etape ? "bg-accent" : "bg-line",
              )}
            />
          ))}
        </div>
        <span className="tnum shrink-0 font-display text-xs text-faint">
          Étape {etape + 1} / 3
        </span>
      </div>

      <div className="p-5 sm:p-7">
        {/* ------------------------------------------------ Étape 1 */}
        {etape === 0 && (
          <fieldset>
            <legend className="font-display text-xl">
              Quel est votre problème ?
            </legend>
            <p className="mt-2 text-sm text-muted">
              Choisissez le domaine qui s&apos;en rapproche le plus. En cas de
              doute, « Autre » convient très bien.
            </p>

            <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
              {domaines.map((d) => (
                <button
                  key={d.value}
                  type="button"
                  onClick={() => {
                    setDomaine(d.value);
                    setEtape(1);
                  }}
                  className={cn(
                    "flex items-center gap-4 bg-canvas p-4 text-left transition-colors hover:bg-surface",
                    domaine === d.value && "bg-accent-soft",
                  )}
                >
                  {d.icon && (
                    <d.icon
                      className="size-5 shrink-0 text-accent"
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  )}
                  <span>
                    <span className="block font-display font-medium">
                      {d.label}
                    </span>
                    {d.hint && (
                      <span className="block text-sm text-faint">{d.hint}</span>
                    )}
                  </span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {/* ------------------------------------------------ Étape 2 */}
        {etape === 1 && (
          <fieldset>
            <legend className="font-display text-xl">
              De quoi avez-vous besoin ?
            </legend>
            <p className="mt-2 text-sm text-muted">
              Domaine sélectionné :{" "}
              <span className="text-accent">{domaine}</span>
            </p>

            <div className="mt-6 grid gap-px border border-line bg-line sm:grid-cols-2">
              {besoins.map((b) => (
                <button
                  key={b.value}
                  type="button"
                  onClick={() => {
                    setBesoin(b.value);
                    setEtape(2);
                  }}
                  className={cn(
                    "bg-canvas p-4 text-left transition-colors hover:bg-surface",
                    besoin === b.value && "bg-accent-soft",
                  )}
                >
                  <span className="block font-display font-medium">
                    {b.label}
                  </span>
                  <span className="block text-sm text-faint">{b.hint}</span>
                </button>
              ))}
            </div>
          </fieldset>
        )}

        {/* ------------------------------------------------ Étape 3 */}
        {etape === 2 && (
          <div>
            <h2 className="font-display text-xl">Où, et comment vous joindre ?</h2>
            <p className="mt-2 text-sm text-muted">
              <span className="text-accent">{domaine}</span> ·{" "}
              <span className="text-accent">{besoin}</span>
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <label
                  htmlFor="zone"
                  className="block font-display text-sm font-medium"
                >
                  Votre zone
                </label>
                <select
                  id="zone"
                  value={zone}
                  onChange={(e) => setZone(e.target.value)}
                  className="mt-2 h-12 w-full border border-line-strong bg-canvas px-3 text-text focus:border-accent focus:outline-none"
                >
                  <option value="">Sélectionnez…</option>
                  {zonesIntervention.map((z) => (
                    <option key={z} value={z}>
                      {z}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  htmlFor="telephone"
                  className="block font-display text-sm font-medium"
                >
                  Votre téléphone
                </label>
                <input
                  id="telephone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="77 123 45 67"
                  value={telephone}
                  onChange={(e) => setTelephone(e.target.value)}
                  onBlur={() => setTouche(true)}
                  aria-invalid={touche && !telOk}
                  aria-describedby="telephone-aide"
                  className={cn(
                    "tnum mt-2 h-12 w-full border bg-canvas px-3 text-text placeholder:text-faint focus:outline-none",
                    touche && !telOk
                      ? "border-urgence-text focus:border-urgence-text"
                      : "border-line-strong focus:border-accent",
                  )}
                />
                <p
                  id="telephone-aide"
                  className={cn(
                    "mt-2 text-xs",
                    touche && !telOk ? "text-urgence-text" : "text-faint",
                  )}
                >
                  {touche && !telOk
                    ? "Numéro sénégalais attendu : 9 chiffres commençant par 7."
                    : "Nous vous rappelons sur ce numéro."}
                </p>
              </div>

              <div>
                <label
                  htmlFor="precision"
                  className="block font-display text-sm font-medium"
                >
                  Précision{" "}
                  <span className="font-sans font-normal text-faint">
                    (facultatif)
                  </span>
                </label>
                <textarea
                  id="precision"
                  rows={3}
                  placeholder="Ex. : le climatiseur du salon ne refroidit plus depuis deux jours."
                  value={precision}
                  onChange={(e) => setPrecision(e.target.value)}
                  className="mt-2 w-full border border-line-strong bg-canvas px-3 py-2.5 text-text placeholder:text-faint focus:border-accent focus:outline-none"
                />
                <p className="mt-2 text-xs text-faint">
                  Une photo vaut souvent mieux qu&apos;un paragraphe — vous
                  pourrez l&apos;envoyer directement dans la conversation
                  WhatsApp.
                </p>
              </div>
            </div>

            {/* Actions finales.
                En état incomplet, on rend un vrai <button> plutôt qu'une ancre
                sans href : une ancre sans href sort du parcours clavier, et
                l'utilisateur au clavier ne pourrait jamais découvrir pourquoi
                l'action ne part pas. Le bouton reste focusable, annonce
                `aria-disabled` et renvoie vers le champ fautif. */}
            <div className="mt-7 flex flex-col gap-3">
              {etape3Ok ? (
                <a
                  href={whatsappUrl(message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-13 items-center justify-center gap-2 rounded-xs bg-whatsapp font-display font-medium text-on-fill transition-[filter] hover:brightness-110"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Ouvrir WhatsApp avec ma demande
                </a>
              ) : (
                <button
                  type="button"
                  aria-disabled="true"
                  onClick={signalerIncomplet}
                  className="inline-flex h-13 cursor-not-allowed items-center justify-center gap-2 rounded-xs bg-raised font-display font-medium text-faint"
                >
                  <MessageCircle className="size-4" aria-hidden />
                  Ouvrir WhatsApp avec ma demande
                </button>
              )}

              {etape3Ok ? (
                <a
                  href={mailtoHref}
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-xs border border-line-strong font-display text-[0.95rem] text-text transition-colors hover:border-accent hover:text-accent"
                >
                  <Mail className="size-4" aria-hidden />
                  Envoyer par e-mail
                </a>
              ) : (
                <button
                  type="button"
                  aria-disabled="true"
                  onClick={signalerIncomplet}
                  className="inline-flex h-11 cursor-not-allowed items-center justify-center gap-2 rounded-xs border border-line font-display text-[0.95rem] text-faint"
                >
                  <Mail className="size-4" aria-hidden />
                  Envoyer par e-mail
                </button>
              )}

              {!etape3Ok && (
                <p className="text-center text-xs text-faint" role="status">
                  Complétez la zone et le téléphone pour activer l&apos;envoi.
                </p>
              )}
            </div>

            {/* Aperçu — la transparence rassure : on montre ce qui part */}
            {etape3Ok && (
              <details className="accordion-item mt-6 border-t border-line pt-4">
                <summary className="font-display text-sm text-muted">
                  Voir le message qui sera envoyé
                </summary>
                <pre className="mt-3 overflow-x-auto whitespace-pre-wrap border-l-2 border-accent bg-surface p-4 font-sans text-sm text-muted">
                  {message}
                </pre>
              </details>
            )}
          </div>
        )}
      </div>

      {/* Navigation */}
      {etape > 0 && (
        <div className="flex items-center justify-between border-t border-line px-5 py-4 sm:px-7">
          <button
            type="button"
            onClick={() => setEtape((e) => e - 1)}
            className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-4" aria-hidden />
            Retour
          </button>

          {etape === 1 && besoin && (
            <button
              type="button"
              onClick={() => setEtape(2)}
              className="inline-flex items-center gap-2 font-display text-sm text-accent transition-colors hover:text-accent-deep"
            >
              Continuer
              <ArrowRight className="size-4" aria-hidden />
            </button>
          )}
        </div>
      )}
    </div>
  );
}
