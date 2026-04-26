import type { Metadata } from "next";
import { Mail, ExternalLink } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Entrer en contact avec Amine Kbidi. Partenariats stratégiques, projets OctoPub, collaborations Black Version Parfums.",
};

const contactBlocks = [
  {
    title: "Partenariats stratégiques",
    description:
      "Investissement, co-création d'entreprise, alliance stratégique long terme.",
    action: { label: "contact@aminekbidi.com", href: "mailto:contact@aminekbidi.com", external: false },
    icon: Mail,
  },
  {
    title: "Projets OctoPub",
    description: "Impression grand format, signalétique, production B2B.",
    action: { label: "octopub.ma →", href: "https://octopub.ma", external: true },
    icon: ExternalLink,
  },
  {
    title: "Black Version Parfums",
    description: "Collaborations retail, partenariats marque, distribution.",
    action: { label: "blackversion.ma →", href: "https://blackversion.ma", external: true },
    icon: ExternalLink,
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-36 pb-16 px-6 md:px-12 border-b border-[#E5E5E0]">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-playfair text-[40px] md:text-[60px] font-medium leading-[1.1] tracking-tight text-foreground">
            Entrer en contact
          </h1>
          <p className="mt-6 font-inter text-lg text-[#6B7280] leading-[1.7]">
            Je réponds aux demandes sérieuses. Merci de choisir la bonne porte.
          </p>
        </div>
      </section>

      {/* Blocs de contact */}
      <section className="py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          {contactBlocks.map((block) => {
            const Icon = block.icon;
            return (
              <div
                key={block.title}
                className="border border-[#E5E5E0] p-6 md:p-8 flex flex-col gap-4"
              >
                <Icon size={18} className="text-[#6B7280]" />
                <h2 className="font-playfair text-xl font-medium text-foreground">
                  {block.title}
                </h2>
                <p className="font-inter text-sm text-[#6B7280] leading-relaxed flex-1">
                  {block.description}
                </p>
                <a
                  href={block.action.href}
                  target={block.action.external ? "_blank" : undefined}
                  rel={block.action.external ? "noopener noreferrer" : undefined}
                  className="font-inter text-sm font-medium text-[#1E3A8A] hover:opacity-70 transition-opacity"
                >
                  {block.action.label}
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 px-6 md:px-12 bg-neutral-100">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-4">
            Mes analyses mensuelles
          </h2>
          <p className="font-inter text-base text-[#6B7280] leading-[1.7] mb-8">
            Une fois par mois, j&apos;envoie une analyse courte sur ce que j&apos;apprends en construisant une holding au Maroc. Pas de fluff. Pas de vente.
          </p>
          <NewsletterForm />
        </div>
      </section>
    </>
  );
}
