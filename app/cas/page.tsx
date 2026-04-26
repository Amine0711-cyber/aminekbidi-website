import type { Metadata } from "next";
import CaseStudyCard from "@/components/CaseStudyCard";

export const metadata: Metadata = {
  title: "Études de cas",
  description:
    "Les décisions stratégiques documentées. Contexte, exécution, résultat, leçon. OctoPub, Black Version Parfums, Axis.",
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

export default function CasPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-[#E5E5E0]">
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
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {cases.map((c) => (
            <CaseStudyCard key={c.slug} {...c} />
          ))}
        </div>
      </section>
    </>
  );
}
