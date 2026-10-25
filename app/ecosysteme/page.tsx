import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: { absolute: "Écosystème — Axis Holding, OctoPub, Black Version Parfums" },
  description:
    "L'architecture du portefeuille d'Amine Kbidi : Axis Holding comme structure de gouvernance, OctoPub pour le B2B industriel, Black Version Parfums pour le retail. Trois entités, une logique commune.",
  alternates: { canonical: "https://www.aminekbidi.com/ecosysteme" },
  openGraph: {
    siteName: "Amine Kbidi",
    locale: "fr_MA",
    title: "Écosystème — Axis, OctoPub, Black Version Parfums",
    description: "Trois entités sous une seule structure de gouvernance.",
    url: "https://www.aminekbidi.com/ecosysteme",
    type: "article",
  },
  twitter: {
    card: "summary",
    title: "Écosystème — Axis, OctoPub, Black Version Parfums",
    description: "Trois entités sous une seule structure de gouvernance.",
    creator: "@aminekbidi",
  },
};

const orgsSchema = [
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Axis Holding",
    alternateName: ["Axis", "Axis Maroc", "Axis Meknès"],
    url: "https://www.aminekbidi.com",
    founder: { "@type": "Person", name: "Mohamed Amine El Kbidi" },
    foundingDate: "2025",
    description: "Holding de gouvernance et de management des entités opérationnelles au Maroc",
    address: { "@type": "PostalAddress", addressLocality: "Meknès", addressCountry: "MA" },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "OctoPub",
    alternateName: ["OctoPub Meknès", "OctoPub impression", "OctoPub Maroc"],
    description: "Impression numérique grand format, vinyles et signalétique B2B — Meknès, Maroc",
    address: { "@type": "PostalAddress", addressLocality: "Meknès", addressCountry: "MA" },
    parentOrganization: { "@type": "Organization", name: "Axis Holding" },
  },
  {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Black Version Parfums",
    alternateName: ["Black Version", "Black Version Maroc", "Black Version Meknès"],
    description: "Marque de parfums — boutique à Meknès et vente COD nationale, Maroc",
    address: { "@type": "PostalAddress", addressLocality: "Meknès", addressCountry: "MA" },
    parentOrganization: { "@type": "Organization", name: "Axis Holding" },
  },
];

export default function EcosystemePage() {
  return (
    <>
      {orgsSchema.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}

      {/* Hero */}
      <section className="pt-20 md:pt-36 pb-8 md:pb-16 px-6 md:px-12 border-b border-[#E5E5E0]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-[40px] md:text-[60px] font-medium leading-[1.1] tracking-tight text-foreground">
            L&apos;architecture d&apos;Axis Holding
          </h1>
          <p className="mt-6 font-inter text-lg text-[#6B7280] leading-[1.7]">
            Trois entités actives. Une logique de gouvernance commune. Un système en construction.
          </p>
        </div>
      </section>

      {/* Schéma visuel SVG */}
      <section className="py-10 md:py-20 px-6 md:px-12 border-b border-[#E5E5E0]">
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <svg
            viewBox="0 0 600 320"
            className="w-full max-w-2xl mx-auto block min-w-[480px]"
            aria-label="Schéma Axis Holding"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Lignes de connexion */}
            {/* OctoPub → Axis */}
            <line x1="170" y1="160" x2="255" y2="160" stroke="#E5E5E0" strokeWidth="1.5" />
            {/* Axis → Black Version */}
            <line x1="345" y1="160" x2="430" y2="160" stroke="#E5E5E0" strokeWidth="1.5" />
            {/* Axis → À venir */}
            <line x1="300" y1="210" x2="300" y2="260" stroke="#E5E5E0" strokeWidth="1.5" strokeDasharray="4 3" />

            {/* Nœud OctoPub */}
            <rect x="40" y="130" width="130" height="60" rx="2" fill="#FAFAF7" stroke="#E5E5E0" strokeWidth="1.5" />
            <text x="105" y="155" textAnchor="middle" fontFamily="Georgia, serif" fontSize="13" fill="#0A0A0A" fontWeight="500">OctoPub</text>
            <text x="105" y="173" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill="#6B7280">Impression · B2B</text>

            {/* Nœud AXIS — Centre */}
            <rect x="255" y="120" width="90" height="80" rx="2" fill="#0A0A0A" />
            <text x="300" y="156" textAnchor="middle" fontFamily="Georgia, serif" fontSize="15" fill="#FAFAF7" fontWeight="500">AXIS</text>
            <text x="300" y="174" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="9" fill="#FAFAF7" opacity="0.7">Holding</text>

            {/* Nœud Black Version */}
            <rect x="430" y="130" width="130" height="60" rx="2" fill="#FAFAF7" stroke="#E5E5E0" strokeWidth="1.5" />
            <text x="495" y="152" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#0A0A0A" fontWeight="500">Black Version</text>
            <text x="495" y="170" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill="#6B7280">Parfums · Retail</text>

            {/* Nœud À venir — pointillés */}
            <rect x="240" y="260" width="120" height="48" rx="2" fill="#FAFAF7" stroke="#6B7280" strokeWidth="1.5" strokeDasharray="4 3" />
            <text x="300" y="280" textAnchor="middle" fontFamily="Georgia, serif" fontSize="12" fill="#6B7280" fontWeight="400">À venir</text>
            <text x="300" y="296" textAnchor="middle" fontFamily="system-ui, sans-serif" fontSize="10" fill="#6B7280" opacity="0.7">En évaluation</text>
          </svg>
          <p className="mt-4 text-center font-inter text-xs text-[#6B7280]">
            Axis gouverne — les entités opèrent.
          </p>
        </div>
      </section>

      {/* Blocs entités */}
      <section className="py-10 md:py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto flex flex-col gap-20">

          {/* Axis */}
          <div>
            <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-6">
              Axis — Structure de management
            </h2>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7]">
              Axis est la holding de gouvernance, de facturation interne et de consolidation comptable des entités. Elle ne vend rien directement. Elle structure, documente, et facture les services partagés (stratégie, contenu, systèmes). Chaque entité opérationnelle signe un contrat avec Axis. Aucun flux financier entre entités ne passe hors Axis.
            </p>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          {/* OctoPub */}
          <div>
            <div className="flex flex-col gap-3 mb-6">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground">
                OctoPub — Impression &amp; Production
              </h2>
              <div className="flex flex-wrap gap-2">
                {["B2B", "Showroom + COD national"].map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-xs text-[#6B7280] border border-[#E5E5E0] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7] mb-6">
              OctoPub est mon entité industrielle. Impression grand format, vinyles, signalétique, supports publicitaires. Modèle opérationnel en cours de pivot vers le Hybride V3 : showroom physique à Meknès combiné à une machine de vente COD à l&apos;échelle nationale. Objectif : devenir le numéro un de l&apos;impression à Meknès puis étendre l&apos;acquisition digitale au Maroc entier.
            </p>
            <div className="bg-neutral-200 aspect-[16/9] flex items-center justify-center text-neutral-500 text-sm font-inter">
              [Image : showroom OctoPub ou production en atelier]
            </div>
          </div>

          <div className="border-t border-[#E5E5E0]" />

          {/* Black Version */}
          <div>
            <div className="flex flex-col gap-3 mb-6">
              <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground">
                Black Version Parfums — Retail &amp; Branding
              </h2>
              <div className="flex flex-wrap gap-2">
                {["Retail + COD", "Boutique + National", "Relancée Oct. 2024"].map((tag) => (
                  <span
                    key={tag}
                    className="font-inter text-xs text-[#6B7280] border border-[#E5E5E0] px-2.5 py-1 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <p className="font-inter text-lg text-[#0A0A0A] leading-[1.7] mb-6">
              Black Version Parfums est mon entité retail. Marque de parfums avec double canal : boutique physique à Meknès et machine de vente COD à l&apos;échelle nationale. La marque avait été initialement fondée par Abdelkabir, puis traversé une période de difficulté structurelle. Je l&apos;ai relancée en octobre 2024 avec un capital engagé de 25 000 DH réparti à parité (50/50) entre Abdelkabir et moi. Objectif court terme : Plan de Domination Meknès (PDM). Objectif moyen terme : expansion nationale du canal COD.
            </p>
            <div className="bg-neutral-200 aspect-[16/9] flex items-center justify-center text-neutral-500 text-sm font-inter">
              [Image : boutique Black Version ou produit phare]
            </div>
          </div>

          <div className="border-t border-dashed border-[#6B7280]" />

          {/* À venir */}
          <div className="pb-8">
            <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-[#6B7280] mb-6">
              Ce qui vient
            </h2>
            <p className="font-inter text-lg text-[#6B7280] leading-[1.7]">
              L&apos;expansion d&apos;Axis suit une logique simple : chaque nouvelle entité doit pouvoir consommer l&apos;infrastructure existante ou la renforcer. Pas d&apos;entité isolée. Pas de business ajouté par opportunité. Les prochains verticaux sont en phase d&apos;évaluation — annoncés quand ils seront opérationnels, pas avant.
            </p>
          </div>

          {/* Liens internes */}
          <div className="flex flex-col sm:flex-row gap-4 pb-8">
            <Link
              href="/parcours"
              className="font-inter text-sm font-medium text-[#1E3A8A] hover:opacity-70 transition-opacity"
              aria-label="Lire le parcours entrepreneurial d'Amine Kbidi"
            >
              Lire le parcours d&apos;Amine Kbidi →
            </Link>
            <Link
              href="/cas"
              className="font-inter text-sm font-medium text-[#1E3A8A] hover:opacity-70 transition-opacity"
              aria-label="Consulter les études de cas stratégiques"
            >
              Études de cas stratégiques →
            </Link>
          </div>

        </div>
      </section>
    </>
  );
}
