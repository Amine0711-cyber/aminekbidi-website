import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";

type CaseData = {
  title: string;
  entity: string;
  year: string;
  duration: string;
  context: string;
  decision: string;
  execution: string;
  result: string;
  lesson: string;
};

const casesData: Record<string, CaseData> = {
  "octopub-hybride-v3": {
    title: "Pivot OctoPub vers le modèle Hybride V3",
    entity: "OctoPub",
    year: "2026",
    duration: "En cours",
    context:
      "OctoPub opère depuis plusieurs années en mode B2B local : clients professionnels, showroom à Meknès, cycles de vente longs. Le plafond de croissance était prévisible : marché local limité, dépendance aux recommandations, absence d'acquisition digitale structurée.",
    decision:
      "Plutôt que d'ouvrir un second showroom — coûteux et risqué — j'ai décidé de construire un canal COD national en parallèle du showroom existant. L'objectif : faire fonctionner les deux canaux sans qu'ils se cannibalisent, en ciblant des segments clients distincts.",
    execution:
      "Mise en place d'un tunnel d'acquisition digital (Meta Ads + landing pages dédiées). Segmentation claire : le showroom sert les clients B2B locaux avec des projets complexes ; le COD national cible les TPE et particuliers avec des commandes standardisées. Infrastructure logistique adaptée en conséquence.",
    result:
      "Modèle en cours de validation. Les premiers tests COD montrent un coût d'acquisition maîtrisé. Le showroom maintient son flux B2B habituel. Premiers indicateurs positifs sur la coexistence des deux canaux.",
    lesson:
      "Le pivot n'est pas la destruction de l'existant — c'est l'ajout d'une couche qui exploite la même infrastructure.",
  },
  "black-version-recuperation": {
    title: "Récupération de Black Version Parfums",
    entity: "Black Version Parfums",
    year: "2025–2026",
    duration: "18 mois",
    context:
      "Black Version Parfums traversait une double crise en début 2025 : trésorerie tendue après une saisonnalité Ramadan difficile, et un modèle opérationnel non documenté qui rendait chaque décision opaque. La marque avait de l'actif (notoriété locale, produits existants) mais aucune infrastructure.",
    decision:
      "Refuser de couper le budget marketing — contre-intuitif en période de stress financier — et reconstruire l'infrastructure opérationnelle en parallèle. Redocumenter chaque flux, chaque SKU, chaque canal. Maintenir la présence digitale pour ne pas perdre le signal marque.",
    execution:
      "Audit complet des flux financiers. Séparation stricte des comptes. Mise en place d'un reporting hebdomadaire. Maintien des dépenses Meta Ads à un niveau minimal mais continu. Refonte des fiches produits et du positionnement.",
    result:
      "Stabilisation de la trésorerie à Q3 2025. Reprise de la croissance COD en Q4 2025. Boutique physique en fonctionnement normal. Plan de Domination Meknès lancé en Q1 2026.",
    lesson:
      "Une marque qui disparaît pendant une crise paie deux fois : la crise et la reconquête de l'attention.",
  },
  "axis-gouvernance": {
    title: "Création d'Axis comme structure de gouvernance",
    entity: "Axis",
    year: "2025",
    duration: "6 mois de formalisation",
    context:
      "En 2024, je gérais deux entités (OctoPub et Black Version) sans structure commune. Les décisions financières entre entités étaient informelles, les flux non documentés, et ma vision de holding restait implicite. L'absence de structure créait des risques réels : confusion comptable, financement croisé non tracé, absence de gouvernance claire.",
    decision:
      "Créer Axis comme entité juridique de gouvernance. Lui donner un rôle précis : facturation interne des services partagés (stratégie, contenu, systèmes), consolidation comptable, et point de passage obligatoire pour tout flux inter-entités.",
    execution:
      "Constitution juridique d'Axis. Rédaction des contrats de services entre Axis et chaque entité opérationnelle. Mise en place d'un reporting mensuel consolidé. Séparation stricte des trésoreries. Documentation des règles de flux dans un manuel interne.",
    result:
      "Visibilité financière complète sur le portefeuille. Élimination des flux informels. Décisions stratégiques désormais prises avec une vue consolidée. Infrastructure prête à accueillir de nouvelles entités.",
    lesson:
      "Formaliser ce qu'on fait déjà implicitement n'est pas de la bureaucratie — c'est la condition pour passer à l'échelle suivante.",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  if (!Object.prototype.hasOwnProperty.call(casesData, params.slug)) notFound();
  const data = casesData[params.slug];
  const description = `${data.entity} · ${data.year} — Étude de cas stratégique documentée par Amine Kbidi.`;
  return {
    title: data.title,
    description,
    alternates: { canonical: `https://www.aminekbidi.com/cas/${params.slug}` },
    openGraph: {
      title: data.title,
      description,
      url: `https://www.aminekbidi.com/cas/${params.slug}`,
      siteName: "Amine Kbidi",
      locale: "fr_MA",
      type: "article",
    },
    twitter: {
      card: "summary",
      title: data.title,
      description,
      creator: "@aminekbidi",
    },
  };
}

export async function generateStaticParams() {
  return Object.keys(casesData).map((slug) => ({ slug }));
}

export default function CaseStudyPage({
  params,
}: {
  params: { slug: string };
}) {
  if (!Object.prototype.hasOwnProperty.call(casesData, params.slug)) notFound();
  const data = casesData[params.slug];

  return (
    <>
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-[#E5E5E0]">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/cas"
            className="inline-flex items-center gap-2 font-inter text-sm text-[#6B7280] hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft size={14} />
            Retour aux cas
          </Link>
          <div className="flex flex-wrap gap-3 mb-4">
            <span className="font-inter text-xs text-[#6B7280] border border-[#E5E5E0] px-2.5 py-1 rounded-full">
              {data.entity}
            </span>
            <span className="font-inter text-xs text-[#6B7280] border border-[#E5E5E0] px-2.5 py-1 rounded-full">
              {data.year}
            </span>
            <span className="font-inter text-xs text-[#6B7280] border border-[#E5E5E0] px-2.5 py-1 rounded-full">
              {data.duration}
            </span>
          </div>
          <h1 className="font-playfair text-[36px] md:text-[52px] font-medium leading-[1.1] tracking-tight text-foreground">
            {data.title}
          </h1>
        </div>
      </section>

      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-16">
          <div>
            <h2 className="font-playfair text-[24px] md:text-[28px] font-medium text-foreground mb-5">
              Contexte
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              {data.context}
            </p>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          <div>
            <h2 className="font-playfair text-[24px] md:text-[28px] font-medium text-foreground mb-5">
              Décision stratégique
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              {data.decision}
            </p>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          <div>
            <h2 className="font-playfair text-[24px] md:text-[28px] font-medium text-foreground mb-5">
              Exécution
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              {data.execution}
            </p>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          <div>
            <h2 className="font-playfair text-[24px] md:text-[28px] font-medium text-foreground mb-5">
              Résultat
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              {data.result}
            </p>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          <div className="pb-8">
            <h2 className="font-playfair text-[24px] md:text-[28px] font-medium text-foreground mb-5">
              Leçon extraite
            </h2>
            <p className="font-playfair text-[22px] md:text-[28px] text-[#0A0A0A] leading-[1.5] italic">
              &ldquo;{data.lesson}&rdquo;
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
