import type { Metadata } from "next";
import TimelineItem from "@/components/TimelineItem";

export const metadata: Metadata = {
  title: "Parcours",
  description:
    "Six ans. Six entreprises. Trois échecs. Trois leçons fondatrices. Le parcours d'Amine Kbidi, fondateur d'Axis Holding.",
};

const timeline = [
  {
    period: "2021–2022 · Cradly",
    title: "Cradly",
    body: "Dropshipping international. Ma première tentative sérieuse d'entrepreneuriat digital. Cradly a échoué. Modèle économique fragile, marges détruites par les coûts publicitaires, dépendance totale à des fournisseurs étrangers. J'ai tout fermé après 18 mois.",
    lesson: "Un business sans contrôle de la chaîne de valeur n'est pas un business — c'est une position vulnérable qu'on appelle business.",
  },
  {
    period: "2022–2024 · Babmansour Store",
    title: "Babmansour Store",
    body: "E-commerce COD. Produits importés de Chine, vendus au Maroc en paiement à la livraison. Babmansour a fonctionné deux ans. Modèle rentable mais plafonné. J'ai arrêté volontairement en 2024 pour concentrer mon capital et mon temps sur Black Version Parfums, qui offrait un horizon de marque bien plus profond.",
    lesson: "Tuer un business qui fonctionne pour nourrir un business qui peut dominer est une décision d'opérateur, pas un échec.",
  },
  {
    period: "Octobre 2024 · Black Version Parfums",
    title: "Black Version Parfums — relance",
    body: "Marque de parfums. Boutique Meknès + canal COD national. La marque avait été initialement fondée par Abdelkabir, puis fragilisée par des difficultés de vente et des problèmes structurels. J'ai proposé une relance avec un vrai capital — 25 000 DH engagés à 50/50 — et une refonte complète du modèle opérationnel. Lancement de la boutique en octobre 2024.",
    lesson: "Relancer une marque fragilisée avec un partenaire est plus intelligent que d'en créer une nouvelle — si et seulement si la gouvernance et le capital sont remis à plat dès le départ.",
  },
  {
    period: "2025 · Manta Express",
    title: "Manta Express — Trois mois, une leçon.",
    body: "En parallèle de la relance de Black Version Parfums, Amine Kbidi s'engage dans une nouvelle aventure entrepreneuriale aux côtés d'un autre partenaire : Manta Express. Le projet ne survivra pas au-delà de trois à quatre mois. La cause est nette et reconnue par l'intéressé : un manque de capital de combat suffisant pour soutenir l'investissement nécessaire à la phase de lancement. L'expérience est brève, mais structurante — elle confirme une règle qu'il invoquera ensuite à chaque tour de table : aucune entreprise ne tient sans capital adapté à son ambition.",
    lesson: "« On avait l'idée, on avait l'envie. On n'avait pas les moyens. Un business sans capital de combat ne tient pas, peu importe la qualité des fondateurs. »",
  },
  {
    period: "Décembre 2025 · OctoPub",
    title: "OctoPub",
    body: "Entité industrielle. Impression grand format et signalétique. Meknès. OctoPub est mon terrain d'apprentissage B2B. Infrastructure, production physique, cycles de vente longs, marges à protéger. Pivot en cours vers le modèle Hybride V3 : showroom + COD national.",
    lesson: "L'infrastructure physique est lente à construire mais crée un moat que le digital ne reproduit pas.",
  },
  {
    period: "2025 · Axis",
    title: "Axis",
    body: "Holding de gouvernance. Structure de management inter-entités. Axis formalise ce que je faisais déjà implicitement : gouverner mes entités comme un portefeuille, pas comme des projets séparés. Facturation interne, consolidation comptable, services partagés.",
    lesson: "Une holding n'est pas un luxe de grande entreprise — c'est l'outil qui empêche les petites entités de se cannibaliser.",
  },
];

export default function ParcoursPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-[#E5E5E0]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-[40px] md:text-[60px] font-medium leading-[1.1] tracking-tight text-foreground">
            Parcours
          </h1>
          <p className="mt-6 font-inter text-lg text-[#6B7280] leading-[1.7]">
            Six ans. Six entreprises. Trois échecs. Trois leçons fondatrices.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          {timeline.map((item, i) => (
            <TimelineItem
              key={item.period}
              {...item}
              isLast={i === timeline.length - 1}
            />
          ))}
        </div>
      </section>

      {/* Section Aujourd'hui */}
      <section className="py-16 px-6 md:px-12 bg-neutral-100">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-6">
            Aujourd&apos;hui
          </h2>
          <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
            Aujourd&apos;hui, je consolide. Le prochain chapitre n&apos;est pas une nouvelle entité — c&apos;est la maturation de celles qui existent et la construction de la couche d&apos;automatisation qui rendra la holding véritablement indépendante de ma présence quotidienne.
          </p>
        </div>
      </section>
    </>
  );
}
