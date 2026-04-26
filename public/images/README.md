# Images — Guide de remplacement

Toutes les images du site sont actuellement des placeholders. Remplacer chaque fichier par l'image réelle en conservant le même nom de fichier.

## Liste des placeholders

| Emplacement | Fichier recommandé | Dimensions | Description |
|---|---|---|---|
| Hero accueil (fond) | `hero-amine.jpg` | 1920×1080 px | Photo d'Amine en contexte professionnel — showroom OctoPub, boutique Black Version, ou portrait professionnel |
| Écosystème / OctoPub | `octopub-showroom.jpg` | 1600×900 px | Showroom OctoPub ou atelier d'impression en action |
| Écosystème / Black Version | `black-version-boutique.jpg` | 1600×900 px | Boutique Black Version Parfums ou produit signature en mise en scène |
| Open Graph (partage social) | `og-image.jpg` | 1200×630 px | Visuel de marque AK sur fond sombre, utilisé pour les aperçus Twitter/LinkedIn/WhatsApp |

## Comment remplacer une image

1. Placer le fichier dans ce dossier `/public/images/`
2. Dans le composant correspondant, remplacer le div placeholder par :

```tsx
import Image from "next/image";

<Image
  src="/images/nom-du-fichier.jpg"
  alt="Description précise de l'image"
  width={1600}
  height={900}
  className="w-full h-full object-cover"
  priority // ajouter uniquement pour les images above the fold
/>
```

## Formats recommandés

- Photos : `.jpg` ou `.webp` (Next.js optimise automatiquement)
- Logos / icônes : `.svg`
- Qualité export : 85% (bon compromis poids/qualité)
