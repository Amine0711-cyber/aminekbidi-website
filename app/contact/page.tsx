import type { Metadata } from "next";
import { Mail, ExternalLink } from "lucide-react";
import NewsletterForm from "@/components/NewsletterForm";
import {
  IconLinkedin,
  IconInstagram,
  IconYoutube,
  IconFacebook,
} from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: { absolute: "Contact — Amine Kbidi | Partenariats stratégiques" },
  description:
    "Entrer en contact avec Amine Kbidi pour partenariats stratégiques, projets B2B OctoPub, ou collaborations avec Black Version Parfums.",
  alternates: { canonical: "https://www.aminekbidi.com/contact" },
  openGraph: {
    siteName: "Amine Kbidi",
    locale: "fr_MA",
    title: "Contact — Amine Kbidi",
    description: "Partenariats, projets B2B, collaborations.",
    url: "https://www.aminekbidi.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Contact — Amine Kbidi",
    description: "Partenariats, projets B2B, collaborations.",
    creator: "@aminekbidi",
  },
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

const socialCards = [
  {
    name: "LinkedIn",
    sub: "Analyses pro",
    href: "https://ma.linkedin.com/in/amine-kbidi-484006219",
    Icon: IconLinkedin,
    hoverClass: "contact-social-linkedin",
  },
  {
    name: "Instagram",
    sub: "Quotidien",
    href: "https://www.instagram.com/amine_kbidi/",
    Icon: IconInstagram,
    hoverClass: "contact-social-instagram",
  },
  {
    name: "YouTube",
    sub: "Shorts & vidéos",
    href: "https://www.youtube.com/@Aminekbidi",
    Icon: IconYoutube,
    hoverClass: "contact-social-youtube",
  },
  {
    name: "Facebook",
    sub: "Communauté",
    href: "https://www.facebook.com/profile.php?id=61586359412752",
    Icon: IconFacebook,
    hoverClass: "contact-social-facebook",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-20 md:pt-36 pb-8 md:pb-16 px-6 md:px-12 border-b border-[#E5E5E0]">
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
      <section className="py-10 md:py-20 px-6 md:px-12">
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

      {/* Réseaux sociaux — design coloré */}
      <section className="py-10 md:py-20 px-6 md:px-12 border-t border-[#E5E5E0]" style={{ background: "var(--surface)" }}>
        <div className="max-w-6xl mx-auto">
          <p className="font-inter text-xs uppercase tracking-[0.15em] text-[#7A818C] mb-3">
            Suivre le quotidien
          </p>
          <h2 className="font-playfair text-[28px] md:text-[36px] font-medium text-foreground mb-4">
            Suivre Amine Kbidi
          </h2>
          <p className="font-inter text-base text-[#6B7280] leading-[1.7] mb-8 max-w-xl">
            Pour suivre l&apos;actualité d&apos;Axis et le quotidien des entités du portefeuille.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {socialCards.map(({ name, sub, href, Icon, hoverClass }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} d'Amine Kbidi`}
                className={`contact-social-card ${hoverClass} flex flex-col items-center justify-center p-6 border border-[#E5E5E0] transition-all duration-300 relative overflow-hidden`}
              >
                {hoverClass === "contact-social-instagram" && (
                  <div className="ig-overlay absolute inset-0" aria-hidden="true" />
                )}
                <div className={hoverClass === "contact-social-instagram" ? "relative z-10 flex flex-col items-center" : "flex flex-col items-center"}>
                  <Icon size={28} className="contact-social-icon text-[#7A818C] transition-colors duration-300 mb-3" />
                  <span className="font-inter font-medium text-sm text-foreground contact-social-name transition-colors">{name}</span>
                  <span className="font-inter text-xs text-[#7A818C] mt-1 contact-social-sub transition-colors">{sub}</span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-10 md:py-20 px-6 md:px-12 bg-neutral-100">
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

      <style>{`
        .contact-social-card { box-shadow: none; }
        .contact-social-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.09); }

        .contact-social-linkedin:hover  { border-color: #0A66C2; }
        .contact-social-linkedin:hover .contact-social-icon { color: #0A66C2; }

        .contact-social-youtube:hover  { border-color: #FF0000; }
        .contact-social-youtube:hover .contact-social-icon { color: #FF0000; }

        .contact-social-facebook:hover  { border-color: #1877F2; }
        .contact-social-facebook:hover .contact-social-icon { color: #1877F2; }

        .contact-social-instagram .ig-overlay {
          background: linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4);
          opacity: 0;
          transition: opacity 300ms ease;
        }
        .contact-social-instagram:hover .ig-overlay { opacity: 1; }
        .contact-social-instagram:hover .contact-social-icon,
        .contact-social-instagram:hover .contact-social-name,
        .contact-social-instagram:hover .contact-social-sub { color: #fff !important; }
      `}</style>
    </>
  );
}
