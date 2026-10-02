# État de la refonte — Feanor devient Oralec

Date : 1er octobre 2026
Code : `04_code` · Plan : `02_project_plan/PLAN_SITE_ORALEC.md`
Historique du lot 1 (sous le nom Feanor) : `ETAT_LOT_1.md`

---

## Statut : refonte livrée et vérifiée — non publiable en l'état

Build de production : **23 pages, toutes prérendues statiquement**.
`tsc --noEmit` et `eslint` passent sans erreur.
Reste à fournir côté Oralec : coordonnées réelles et confirmation des droits de
deux images (voir plus bas).

---

## Ce qui a changé

| Domaine | Détail |
|---|---|
| Nom | Feanor → **Oralec** partout : textes, métadonnées, JSON-LD, messages WhatsApp pré-remplis, mentions légales. Offres renommées « Oralec Business » et « Oralec Care ». |
| Offre | **Plomberie retirée** : page métier, page locale `/plomberie-dakar`, FAQ, secteurs, gestes d'urgence, parcours « J'ai un problème ». Restent climatisation & froid, électricité, maintenance & dépannage. Les anciennes URL de plomberie renvoient une 404. |
| Charte | Quatre couleurs : `#001969` marine, `#393f4b` ardoise, `#000000`, `#ffffff` dominant. Teintes dérivées uniquement ; exceptions : vert WhatsApp (logo du canal) et rouge d'erreur de formulaire. |
| Composants | **shadcn/ui** installé (style radix-vega) : cartes, boutons, badge, champs, menu mobile en panneau latéral, avatar. |
| Icônes | **Phosphor duotone**, rendues côté serveur, dans des tuiles en relief ; icône climatiseur dessinée sur mesure. |
| Typographie | Plus Jakarta Sans (titres) + Inter (texte), auto-hébergées ; espaces insécables de la typographie française. |
| Accueil | Recomposé d'après la maquette « Voltéo » : hero à photo fondue + bandeau d'atouts, 4 prestations, bandeau « confort thermique » (inspiré d'arktyk.fr), domaines d'intervention illustrés, bandeau d'appel, à propos, engagements, repères chiffrés, méthode, zones, FAQ, contact avec formulaire WhatsApp. |
| Pages intérieures | En-têtes avec photo (en vignette, ou en couverture pleine largeur façon arktyk pour Climatisation et Particuliers), cartes shadcn partout. |
| Images | 12 photos libres de droits (Unsplash, Pexels) de techniciennes et techniciens noirs ou d'équipements, + 2 images de `05_screenshot`. Photothèque centralisée dans `src/content/images.ts`. |
| Contenu Sénégal | Norme **NS 01-001**, conformité **COSSUEL** avant raccordement **Senelec**, air salin, poussière, coupures, Wave / Orange Money, quartiers de Dakar. |

---

## Vérifications effectuées

- [x] Build de production : 23/23 pages générées
- [x] Types et lint : aucune erreur
- [x] Rendu desktop (1440 px) et mobile (390 px) de toutes les pages : aucun débordement horizontal, aucune image en échec, aucune erreur console
- [x] Parcours « J'ai un problème » : envoi bloqué tant que zone et téléphone sont incomplets, message WhatsApp correctement composé et signé Oralec, validation du numéro sénégalais
- [x] Formulaire de contact de l'accueil : refus à vide, message WhatsApp pré-rempli complet
- [x] Menu mobile : ouverture, navigation, fermeture
- [x] FAQ : accordéon et sommaire par catégorie
- [x] Routes : pages métier et locales en 200, anciennes URL de plomberie en 404, sitemap (16 URL) sans plomberie
- [x] Poids mesuré sur le build (voir README)

---

## En attente côté Oralec — bloquants pour la mise en ligne

| # | Élément | Où | Criticité |
|---|---|---|---|
| 1 | Téléphone principal, WhatsApp Business, ligne d'urgence | `src/content/site.ts` | **Bloquant** |
| 2 | Adresse physique exacte | `src/content/site.ts` | **Bloquant** |
| 3 | NINEA, registre du commerce, raison sociale exacte | `src/content/site.ts` | **Bloquant** |
| 4 | Nom de domaine et adresses e-mail | `src/content/site.ts` | **Bloquant** |
| 5 | Droits d'utilisation des deux images issues de `05_screenshot` (toiture et froid commercial) | `src/content/images.ts` | **Bloquant** si non confirmés — sinon les retirer |
| 6 | Validation des textes par le dirigeant | `src/content/*` | Important |
| 7 | Avis clients réels (3 minimum, sourcés) pour afficher la section témoignages | `src/content/temoignages.ts` | Non bloquant |
| 8 | Photos de vrais chantiers Oralec pour remplacer peu à peu les photos de banque | `src/content/images.ts` | Non bloquant |

**Images non utilisées** : les aperçus Depositphotos et iStock de `05_screenshot`
n'ont pas de licence et sont en basse définition (≈ 600 px). Ils pourront être
intégrés après achat de la licence et récupération de la version HD.

---

## Décisions ouvertes

- **Écriture du nom** : affiché « Oralec » (capitale initiale). Si la marque
  doit s'écrire en minuscules (« oralec ») ou en capitales, c'est une valeur
  dans `src/content/site.ts`.
- **Froid commercial** (chambres froides, vitrines) : conservé, rattaché à la
  climatisation. À retirer aussi s'il ne fait plus partie de l'offre.
- **Dépôt Git** : le dépôt local pointe encore sur `github.com/exhorte/Feanor.git`
  et le déplacement de `04_code/feanor-web` vers `04_code` n'est pas commité.
  Le nouveau dépôt `github.com/exhorte/oralec.git` reste à brancher.
