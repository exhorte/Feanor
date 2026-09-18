# FEANOR — Site web

Site vitrine de Feanor, entreprise sénégalaise de solutions techniques du bâtiment
(froid & climatisation, électricité, plomberie, maintenance).

Plan produit et arbitrages : [`02_project_plan/PLAN_SITE_FEANOR.md`](../../02_project_plan/PLAN_SITE_FEANOR.md)

---

## Démarrer

```bash
npm install
npm run dev
```

| Commande | Effet |
|---|---|
| `npm run dev` | Serveur de développement |
| `npm run build` | Build de production (25 pages statiques) |
| `npm start` | Sert le build |
| `npm run lint` | ESLint |
| `npx tsc --noEmit` | Vérification de types |

---

## Ce qu'il faut remplacer avant la mise en ligne

Tout est centralisé dans **[`src/content/site.ts`](src/content/site.ts)** — un seul fichier à éditer.

- [ ] `phone`, `phoneDisplay` — numéro principal
- [ ] `phoneUrgence`, `phoneUrgenceDisplay` — ligne d'urgence
- [ ] `whatsapp` — numéro WhatsApp Business, format international **sans `+`**
- [ ] `email`, `emailDevis`
- [ ] `address.street` et coordonnées `lat` / `lng`
- [ ] `legal.ninea`, `legal.rc` — **éléments de confiance majeurs**, pas de simples mentions légales
- [ ] `legalName` — raison sociale exacte
- [ ] `url` — domaine définitif (sert au sitemap, aux URL canoniques et au JSON-LD)

---

## Organisation

```
src/
├── app/                    Routes (App Router, tout est statique)
│   ├── page.tsx            Accueil
│   ├── services/[slug]/    4 pages métier, générées depuis le contenu
│   ├── [zone]/             Pages SEO locales, générées depuis le contenu
│   ├── sitemap.ts          Sitemap généré
│   └── robots.ts
│
├── content/                ⚠️ TOUT le contenu éditorial vit ici
│   ├── site.ts             Coordonnées, engagements, zones
│   ├── services.ts         Les 4 métiers (prestations, FAQ, signes d'alerte)
│   ├── contrats.ts         Paliers de maintenance
│   ├── secteurs.ts         Secteurs professionnels
│   ├── zones.ts            Pages locales
│   ├── faq.ts              FAQ transverse
│   └── realisations.ts     Chantiers (vide — voir la règle de publication)
│
├── components/
│   ├── layout/             En-tête, pied de page, barre d'action mobile
│   ├── ui/                 Primitives (bouton, section, accordéon…)
│   ├── home/               Sections de la page d'accueil
│   ├── shared/             Blocs réutilisés entre pages
│   └── diagnostic/         Parcours « J'ai un problème »
│
├── lib/                    Utilitaires (WhatsApp, métadonnées, JSON-LD)
└── fonts/                  Polices auto-hébergées (woff2)
```

**Aucun contenu éditorial ne doit être écrit en dur dans le JSX.** C'est ce qui
permettra de brancher un CMS sans réécrire une page.

Ajouter un métier ou une ville = une entrée dans un tableau de `content/`.
Les pages correspondantes sont générées au build.

---

## Choix techniques notables

**Pas de base de données, pas d'authentification, pas de CMS.**
Le formulaire ne passe par aucun serveur : il compose un message que
l'utilisateur envoie lui-même par WhatsApp ou par e-mail. Rien n'est stocké.

**Aucune librairie d'animation.**
Les apparitions au scroll utilisent `animation-timeline: view()` — CSS pur,
0 Ko de JavaScript. Les navigateurs sans support affichent simplement le
contenu ; la dégradation est l'état normal, jamais un écran vide.

**Accordéons en `<details>`/`<summary>` natifs.**
Accessibles, indexables (le contenu replié reste dans le DOM), sans JavaScript.

**Polices en `next/font/local`, pas `next/font/google`.**
Un build qui dépend de `fonts.gstatic.com` échoue dès que le réseau est
capricieux — constaté sur la machine de développement. Les `.woff2` sont
versionnés dans `src/fonts/` (70 Ko pour les deux familles, sous-ensemble latin).

**Le site fonctionne sans JavaScript** pour ce qui compte : la barre d'action
mobile (appel, WhatsApp, urgence) est faite d'ancres natives. Le JS n'apporte
que le menu mobile et le parcours de qualification.

---

## Poids réel (build de production)

| | gzip |
|---|---|
| HTML de la page d'accueil | 23 Ko |
| CSS | 7 Ko |
| Polices (2 fichiers variables) | 70 Ko |
| **Chemin de rendu critique** | **~100 Ko** |
| JavaScript | 190 Ko, dont ~180 Ko de runtime React 19 + App Router |

Le JS ne conditionne aucune action de conversion : la page s'affiche et les
canaux de contact fonctionnent avant l'hydratation.

---

## Règle de publication des réalisations

Voir l'en-tête de [`src/content/realisations.ts`](src/content/realisations.ts).

Tant qu'il y a moins de 3 chantiers documentés avec photos réelles, la page
n'apparaît pas dans la navigation, n'est pas indexée, et affiche un état
d'attente honnête. **Ne pas contourner avec des images de banque** : une
galerie générique coûte plus de confiance qu'elle n'en rapporte.

Protocole de captation à transmettre aux techniciens : avant / pendant / après,
au même cadrage, avec l'accord du client.

---

## Environnement de développement — points constatés

- **SWC natif** — sur cette machine Windows, une stratégie *Application Control*
  bloquait `@next/swc-win32-x64-msvc`, ce qui rendait Turbopack indisponible et
  forçait un repli WASM (build 5× plus lent). Débloqué depuis. En cas de retour
  du problème : `next build --webpack`.
- **Google Fonts injoignable** — d'où le passage en polices locales (ci-dessus).
