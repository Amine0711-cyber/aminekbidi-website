import type { Metadata } from "next";
import Link from "next/link";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Études de cas — Amine Kbidi | Décisions stratégiques documentées",
  description:
    "Études de cas opérationnelles : pivot OctoPub vers le modèle Hybride V3, relance de Black Version Parfums, création d'Axis Holding. Méthode, exécution, résultats.",
  alternates: { canonical: "https://aminekbidi.com/cas" },
  openGraph: {
    title: "Études de cas — Amine Kbidi",
    description: "Décisions stratégiques documentées.",
    url: "https://aminekbidi.com/cas",
    type: "article",
  },
};

const cases = [
  {
    title: "Pivot OctoPub vers le modèle Hybride V3",
    tag: "OctoPub",
    year: "2026",
    summary:
      "Comment combiner un showroom physique à Meknès et une machine d'acquisition COD nationale sans cannibaliser les deux canaux.",
    slug: "octopub-hybride-v3",
  },
  {
    title: "Récupération de Black Version Parfums",
    tag: "Black Version",
    year: "2025–2026",
    summary:
      "Sortir une marque d'une double crise (cashflow interne + saisonnalité Ramadan) sans couper l'investissement marketing.",
    slug: "black-version-recuperation",
  },
  {
    title: "Création d'Axis comme structure de gouvernance",
    tag: "Axis",
    year: "2025",
    summary:
      "Pourquoi j'ai formalisé une holding au lieu de continuer à gérer mes entités séparément — et les règles de flux que j'ai établies.",
    slug: "axis-gouvernance",
  },
];

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Études de cas — Amine Kbidi",
  url: "https://aminekbidi.com/cas",
  author: { "@type": "Person", name: "Mohamed Amine El Kbidi", url: "https://aminekbidi.com" },
  hasPart: [
    {
      "@type": "Article",
      name: "Pivot OctoPub vers le modèle Hybride V3",
      url: "https://aminekbidi.com/cas/octopub-hybride-v3",
      about: "OctoPub, impression B2B, Meknès, Maroc",
    },
    {
      "@type": "Article",
      name: "Récupération de Black Version Parfums",
      url: "https://aminekbidi.com/cas/black-version-recuperation",
      about: "Black Version Parfums, retail, parfums, Meknès",
    },
    {
      "@type": "Article",
      name: "Création d'Axis comme structure de gouvernance",
      url: "https://aminekbidi.com/cas/axis-gouvernance",
      about: "Axis Holding, gouvernance, holding, Maroc",
    },
  ],
};

export default function CasPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 md:pt-36 pb-8 md:pb-16 px-6 md:px-12 border-b border-[#E5E5E0]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-[40px] md:text-[60px] font-medium leading-[1.1] tracking-tight text-foreground">
            Études de cas
          </h1>
          <p className="mt-6 font-inter text-lg text-[#6B7280] leading-[1.7]">
            Les décisions stratégiques documentées. Contexte, exécution, résultat, leçon.
          </p>
        </div>
      </section>

      {/* Grille */}
      <section className="py-10 md:py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <CaseStudyCard key={c.slug} {...c} />
          ))}
        </div>
      </section>

      {/* Liens internes */}
      <section className="pb-8 md:pb-16 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col sm:flex-row gap-4">
          <Link
            href="/ecosysteme"
            className="font-inter text-sm font-medium text-[#1E3A8A] hover:opacity-70 transition-opacity"
            aria-label="Voir l'architecture d'Axis Holding et ses entités"
          >
            Voir l&apos;écosystème Axis →
          </Link>
          <Link
            href="/parcours"
            className="font-inter text-sm font-medium text-[#1E3A8A] hover:opacity-70 transition-opacity"
            aria-label="Lire le parcours complet d'Amine Kbidi"
          >
            Lire le parcours complet →
          </Link>
        </div>
      </section>
    </>
  );
}
