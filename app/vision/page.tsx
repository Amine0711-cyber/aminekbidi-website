import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Vision — Amine Kbidi | Construire une holding au Maroc" },
  description:
    "La thèse d'Amine Kbidi sur la construction d'entreprise au Maroc : pourquoi une holding, pourquoi Meknès, pourquoi maintenant. Trois convictions qui structurent chaque décision.",
  alternates: { canonical: "https://www.aminekbidi.com/vision" },
  openGraph: {
    siteName: "Amine Kbidi",
    locale: "fr_MA",
    title: "Vision — Amine Kbidi | Construire une holding au Maroc",
    description:
      "La thèse d'Amine Kbidi sur la construction d'entreprise au Maroc.",
    url: "https://www.aminekbidi.com/vision",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Vision — Amine Kbidi | Construire une holding au Maroc",
    description: "La thèse d'Amine Kbidi sur la construction d'entreprise au Maroc.",
    creator: "@aminekbidi",
  },
};

const convictions = [
  {
    numeral: "I",
    title: "La séparation financière entre entités est non négociable.",
    body: "Chaque entité du portefeuille a sa trésorerie, sa comptabilité, ses flux. Aucune n'en finance une autre sans contrat formalisé. Cette règle, Amine Kbidi l'a apprise dans la douleur — Black Version Parfums et Babmansour Store l'ont enseignée tour à tour.",
  },
  {
    numeral: "II",
    title: "Le contenu pendant les downturns est un actif, pas une dépense.",
    body: "Couper la communication quand les ventes ralentissent, c'est signer son oubli. Maintenir le signal dans les périodes faibles est la discipline qui sépare les opérateurs des survivants.",
  },
  {
    numeral: "III",
    title: "Dominer localement avant de s'étendre.",
    body: "La profondeur bat la largeur. Mieux vaut être numéro un à Meknès que numéro douze à l'échelle nationale. La domination locale crée la légitimité qui rend l'expansion régionale crédible.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "La thèse de l'opérateur — construire une holding au Maroc",
  author: {
    "@type": "Person",
    name: "Mohamed Amine El Kbidi",
    url: "https://www.aminekbidi.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Axis Holding",
    url: "https://www.aminekbidi.com",
  },
  url: "https://www.aminekbidi.com/vision",
  about: "Entrepreneuriat, holding, Maroc, Meknès",
};

export default function VisionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      {/* Hero */}
      <section className="pt-20 md:pt-36 pb-8 md:pb-16 px-6 md:px-12 border-b border-[#E5E5E0]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-[40px] md:text-[60px] font-medium leading-[1.1] tracking-tight text-foreground">
            La thèse de l&apos;opérateur
          </h1>
          <p className="mt-6 font-inter text-lg text-[#6B7280] leading-[1.7]">
            Pourquoi construire une holding au Maroc en 2026. Pourquoi à
            Meknès. Pourquoi maintenant.
          </p>
        </div>
      </section>

      {/* Corps éditorial */}
      <section className="py-10 md:py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-20">

          {/* Bloc 1 — Pourquoi une holding */}
          <div>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-6">
              Pourquoi une holding et pas une entreprise.
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              La majorité des entrepreneurs marocains de sa génération
              raisonnent en business unique : un produit, un canal, une marque.
              Amine Kbidi a fait le choix inverse dès ses premiers échecs.{" "}
              <em>
                «&thinsp;Un business résout un problème à un instant donné. Une
                holding compose des avantages sur dix ans&thinsp;»
              </em>
              , explique-t-il. La logique est mécanique : plutôt que
              d&apos;optimiser un actif isolé, il construit un portefeuille
              d&apos;entités dont chacune renforce les autres — Black Version
              Parfums apporte la maîtrise de la marque et du retail, OctoPub
              apporte l&apos;infrastructure industrielle et la discipline B2B,
              Axis orchestre. La vraie richesse opérationnelle naît de
              l&apos;assemblage, pas de la spécialisation.
            </p>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          {/* Bloc 2 — Pourquoi au Maroc */}
          <div>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-6">
              Pourquoi au Maroc, et pourquoi pas Casablanca.
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              Meknès n&apos;est ni Casablanca ni Marrakech. C&apos;est
              précisément ce qui en fait un terrain stratégique sous-évalué. Le
              marché y est encore mal structuré, la demande réelle, l&apos;offre
              largement amateur. Pour un opérateur qui sait ce qu&apos;il fait,
              dominer localement crée un effet de levier que les marchés saturés
              ne permettent plus.{" "}
              <em>
                «&thinsp;Une fois la machine calibrée à Meknès, l&apos;extension
                régionale devient mécanique&thinsp;»
              </em>
              , résume-t-il. L&apos;horizon est marocain avant d&apos;être
              international, et c&apos;est une décision stratégique, pas une
              limitation.
            </p>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          {/* Bloc 3 — Pourquoi maintenant */}
          <div>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-6">
              Pourquoi maintenant, et pas dans cinq ans.
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              Le Maroc entre dans une décennie de structuration accélérée. Les
              infrastructures numériques rattrapent leur retard. Le consommateur
              local devient exigeant. Les canaux B2B se professionnalisent. La
              fenêtre pour construire des entités à fort moat local est ouverte
              aujourd&apos;hui ; elle se refermera.{" "}
              <em>
                «&thinsp;Construire ce que je construis aujourd&apos;hui coûtera
                trois fois plus cher dans cinq ans&thinsp;»
              </em>
              , affirme-t-il. La fenêtre est maintenant.
            </p>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          {/* Bloc 4 — Convictions */}
          <div>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-10">
              Les trois convictions qui structurent chaque décision.
            </h2>
            <div className="flex flex-col gap-10">
              {convictions.map((c) => (
                <div key={c.numeral} className="flex gap-6 md:gap-10">
                  <span className="font-playfair text-2xl text-[#6B7280] font-medium shrink-0 w-8">
                    {c.numeral}
                  </span>
                  <div>
                    <h3 className="font-playfair text-xl font-medium text-foreground mb-2">
                      {c.title}
                    </h3>
                    <p className="font-inter text-base text-[#6B7280] leading-[1.7] italic">
                      {c.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          {/* Horizon 2035 */}
          <div className="pb-8">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-6">
              L&apos;horizon 2035.
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              D&apos;ici dix ans, Axis sera une holding automatisée regroupant
              cinq à sept entités actives, dotée d&apos;une structure de
              gouvernance documentée et d&apos;un système de flux financiers
              transparent. Les décisions opérationnelles seront déléguées à des
              managers dédiés. La fonction d&apos;Amine Kbidi sera de capter les
              nouveaux leviers, pas d&apos;exécuter les anciens.{" "}
              <em>
                «&thinsp;Une holding qui dépend de la présence quotidienne de
                son fondateur n&apos;est pas une holding — c&apos;est un job
                déguisé&thinsp;»
              </em>
              , prévient-il.
            </p>
          </div>

          {/* Liens internes */}
          <div className="flex flex-col sm:flex-row gap-4 pb-8">
            <Link
              href="/ecosysteme"
              className="font-inter text-sm font-medium text-[#1E3A8A] hover:opacity-70 transition-opacity"
              aria-label="Découvrir l'architecture d'Axis Holding et ses entités"
            >
              Voir l&apos;architecture de l&apos;écosystème →
            </Link>
            <Link
              href="/parcours"
              className="font-inter text-sm font-medium text-[#1E3A8A] hover:opacity-70 transition-opacity"
              aria-label="Lire le parcours entrepreneurial d'Amine Kbidi"
            >
              Lire le parcours d&apos;Amine Kbidi →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
