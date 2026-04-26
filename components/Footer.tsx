import Link from "next/link";
import {
  IconLinkedin,
  IconInstagram,
  IconYoutube,
  IconFacebook,
} from "@/components/SocialIcons";

const navLinks = [
  { href: "/",           label: "Accueil" },
  { href: "/vision",     label: "Vision" },
  { href: "/ecosysteme", label: "Écosystème" },
  { href: "/parcours",   label: "Parcours" },
  { href: "/contact",    label: "Contact" },
];

const entityLinks = [
  { href: "/ecosysteme", label: "Axis Holding" },
  { href: "/ecosysteme", label: "OctoPub" },
  { href: "/ecosysteme", label: "Black Version Parfums" },
];

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://ma.linkedin.com/in/amine-kbidi-484006219",
    Icon: IconLinkedin,
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/amine_kbidi/",
    Icon: IconInstagram,
  },
  {
    name: "YouTube",
    href: "https://www.youtube.com/@Aminekbidi",
    Icon: IconYoutube,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61586359412752",
    Icon: IconFacebook,
  },
];

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "96px 0 64px",
      }}
    >
      {/* Main grid */}
      <div
        className="footer-inner"
        style={{
          maxWidth: "var(--max-w-content)",
          margin: "0 auto",
          padding: "0 var(--padding-x-md)",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 64,
        }}
      >
        {/* Brand */}
        <div className="footer-brand">
          <Link
            href="/"
            style={{
              display: "inline-block",
              marginBottom: 16,
              fontFamily: "var(--font-playfair), Georgia, serif",
              fontSize: 28,
              fontWeight: 500,
              letterSpacing: "-0.04em",
              color: "var(--foreground)",
              textDecoration: "none",
            }}
          >
            AK
          </Link>
          <p
            style={{
              fontSize: 14,
              color: "var(--muted)",
              maxWidth: 280,
              lineHeight: 1.6,
              marginBottom: 24,
            }}
          >
            Amine Kbidi — Fondateur d&apos;Axis Holding.
            <br />
            Meknès, Maroc.
          </p>
          <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name} d'Amine Kbidi`}
                className="footer-social-icon"
                style={{
                  color: "var(--muted)",
                  display: "flex",
                  alignItems: "center",
                  transition: "color 200ms ease",
                }}
              >
                <Icon size={20} />
              </a>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <FooterCol title="Navigation" links={navLinks} />

        {/* Entités */}
        <FooterCol title="Entités" links={entityLinks} />
      </div>

      {/* Bottom bar */}
      <div
        className="footer-bottom-bar"
        style={{
          maxWidth: "var(--max-w-content)",
          margin: "64px auto 0",
          padding: "0 var(--padding-x-md)",
          display: "flex",
          alignItems: "center",
          gap: 24,
        }}
      >
        <div
          style={{
            width: 40,
            height: 1,
            background: "var(--accent)",
            flexShrink: 0,
          }}
        />
        <p style={{ fontSize: 12, color: "var(--muted-light)", lineHeight: 1.5 }}>
          © 2025 Amine Kbidi · Tous droits réservés
        </p>
      </div>

      {/* Responsive overrides */}
      <style>{`
        .footer-social-icon:hover { color: var(--accent) !important; }
        @media (max-width: 1023px) {
          .footer-inner { grid-template-columns: 1fr 1fr !important; }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 767px) {
          footer { padding: 48px 0 40px !important; }
          .footer-inner {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            padding: 0 var(--padding-x) !important;
          }
          .footer-brand { grid-column: auto !important; }
          .footer-bottom-bar {
            margin-top: 40px !important;
            padding: 0 var(--padding-x) !important;
          }
        }
      `}</style>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: { href: string; label: string }[];
}) {
  return (
    <div>
      <h4
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: 12,
          fontWeight: 500,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "var(--muted)",
          marginBottom: 20,
        }}
      >
        {title}
      </h4>
      <ul style={{ listStyle: "none" }}>
        {links.map(({ href, label }) => (
          <li key={label} style={{ marginBottom: 12 }}>
            <Link href={href} className="footer-link">
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
