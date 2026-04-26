# aminekbidi.com

Site personnel d'Amine Kbidi — personal branding pour Axis Holding, écosystème d'entreprises marocaines.

**Stack :** Next.js 14 (App Router) · TypeScript · Tailwind CSS · Lucide React

---

## Lancer en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

---

## Structure des pages

| Route | Fichier | Contenu |
|---|---|---|
| `/` | `app/page.tsx` | Accueil — hero, 3 piliers, updates, CTA |
| `/vision` | `app/vision/page.tsx` | Thèse, convictions, horizon 2035 |
| `/ecosysteme` | `app/ecosysteme/page.tsx` | Schéma Axis + fiches entités |
| `/parcours` | `app/parcours/page.tsx` | Timeline 2021–2025 |
| `/cas` | `app/cas/page.tsx` | Liste études de cas |
| `/cas/[slug]` | `app/cas/[slug]/page.tsx` | Étude de cas individuelle |
| `/contact` | `app/contact/page.tsx` | Blocs contact + newsletter |

---

## Remplacer les images

Toutes les images sont des placeholders `<div>` en attendant les photos réelles.

1. Déposer les fichiers dans `/public/images/`
2. Consulter `/public/images/README.md` pour la liste complète et les dimensions recommandées
3. Dans le composant correspondant, remplacer le div placeholder par `<Image>` de `next/image`

---

## Éditer le contenu

Le contenu texte est directement dans les fichiers de pages. Pour une mise à jour rapide :

- **Textes accueil** → `app/page.tsx` (constantes `pillars` et `updates`)
- **Texte vision** → `app/vision/page.tsx`
- **Fiches entités** → `app/ecosysteme/page.tsx`
- **Timeline parcours** → `app/parcours/page.tsx` (constante `timeline`)
- **Études de cas** → `app/cas/[slug]/page.tsx` (constante `casesData`)
- **Email / liens** → `components/Footer.tsx` et `app/contact/page.tsx`

---

## Design system

| Variable | Valeur | Usage |
|---|---|---|
| `--background` | `#FAFAF7` | Fond global |
| `--foreground` | `#0A0A0A` | Texte principal |
| `--accent` | `#1E3A8A` | CTA, liens clés |
| `--muted` | `#6B7280` | Texte secondaire |
| `--border` | `#E5E5E0` | Lignes fines |

Fonts : **Playfair Display** (titres) + **Inter** (corps), chargées via `next/font/google`.

---

## Déployer sur Vercel

```bash
# Option 1 — Interface Vercel
# Connecter le repo GitHub sur vercel.com, déploiement automatique

# Option 2 — CLI Vercel
npx vercel
```

Variables d'environnement : aucune requise pour la v1.

Analytics : Plausible est déjà configuré dans le layout (`data-domain="aminekbidi.com"`). Activer dans le dashboard Plausible après déploiement.

---

## SEO

- `generateMetadata` défini sur chaque page
- `sitemap.xml` généré automatiquement via `app/sitemap.ts`
- `robots.txt` généré via `app/robots.ts`
- Open Graph configuré dans `app/layout.tsx`
