import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Link from "next/link";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import {
  IconLinkedin,
  IconInstagram,
  IconYoutube,
  IconFacebook,
} from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Amine Kbidi — Fondateur d'Axis Holding | Entrepreneur Meknès, Maroc",
  description:
    "Mohamed Amine El Kbidi, fondateur d'Axis Holding à Meknès. Trois entreprises actives : OctoPub, Black Version Parfums et Axis. Parcours, vision et études de cas d'un opérateur marocain de la nouvelle génération.",
  keywords: [
    "Amine Kbidi",
    "Mohamed Amine El Kbidi",
    "Amine El Kbidi",
    "Kbidi Amine",
    "entrepreneur Meknès",
    "Axis Holding",
    "OctoPub",
    "Black Version Parfums",
    "fondateur Maroc",
    "holding Maroc",
  ],
  authors: [{ name: "Amine Kbidi", url: "https://aminekbidi.com" }],
  creator: "Amine Kbidi",
  publisher: "Axis Holding",
  alternates: { canonical: "https://aminekbidi.com" },
  openGraph: {
    title: "Amine Kbidi — Fondateur d'Axis Holding | Entrepreneur Meknès",
    description:
      "Mohamed Amine El Kbidi, fondateur d'Axis Holding à Meknès. Trois entreprises actives, une thèse claire sur l'entrepreneuriat marocain.",
    url: "https://aminekbidi.com",
    siteName: "Amine Kbidi",
    images: [
      {
        url: "https://aminekbidi.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Amine Kbidi — Fondateur Axis Holding",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amine Kbidi — Fondateur Axis Holding",
    description: "Mohamed Amine El Kbidi, entrepreneur marocain. Meknès.",
    images: ["https://aminekbidi.com/og-image.png"],
    creator: "@aminekbidi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const pillars = [
  {
    num: "I.",
    name: "Vision long terme",
    desc: "Construire une holding marocaine bâtie pour durer dix ans avant d'en durer trente. Dominer localement avant de penser au régional.",
    descShort: "Dominer localement avant d'élargir au régional.",
    href: "/vision",
    linkLabel: "Lire la thèse",
  },
  {
    num: "II.",
    name: "Écosystème opérationnel",
    desc: "Trois entités actives sous une seule structure de gouvernance. Black Version Parfums, OctoPub, et Axis comme architecture de holding.",
    descShort: "Trois entités sous une seule structure de gouvernance.",
    href: "/ecosysteme",
    linkLabel: "Voir l'architecture",
  },
  {
    num: "III.",
    name: "Méthode documentée",
    desc: "Chaque décision stratégique majeure laisse une trace écrite. Les leçons des échecs passés sont publiques. La transparence comme actif de crédibilité.",
    descShort: "Décisions documentées. Échecs publics. Transparence comme actif.",
    href: "/cas",
    linkLabel: "Étudier les cas",
  },
];

const todayItems = [
  {
    label: "Avril 2026",
    labelShort: "Avr. 2026",
    title: "OctoPub — Scaling B2B",
    text: "OctoPub entre dans sa phase de scaling B2B après son lancement officiel de décembre 2025. L'infrastructure est en place ; la priorité est l'acquisition.",
    textShort: "OctoPub : phase de scaling B2B.",
  },
  {
    label: "Avril 2026",
    labelShort: "Avr. 2026",
    title: "Black Version Parfums",
    text: "Black Version Parfums prépare l'offensive Plan de Domination Meknès, après une première année qui a porté la valorisation de la marque au-delà du million de dirhams.",
    textShort: "Black Version : offensive Plan de Domination Meknès.",
  },
  {
    label: "T3 2026",
    labelShort: "T3 2026",
    title: "Formalisation d'Axis",
    text: "Formalisation d'Axis comme structure de gouvernance et de facturation interne entre les entités du portefeuille.",
    textShort: "Axis : formalisation de la structure de gouvernance.",
  },
];

const socialCards = [
  {
    name: "LinkedIn",
    sub: "Analyses pro",
    href: "https://ma.linkedin.com/in/amine-kbidi-484006219",
    Icon: IconLinkedin,
    hoverClass: "social-card-linkedin",
  },
  {
    name: "Instagram",
    sub: "Quotidien",
    href: "https://www.instagram.com/amine_kbidi/",
    Icon: IconInstagram,
    hoverClass: "social-card-instagram",
  },
  {
    name: "YouTube",
    sub: "Shorts & vidéos",
    href: "https://www.youtube.com/@Aminekbidi",
    Icon: IconYoutube,
    hoverClass: "social-card-youtube",
  },
  {
    name: "Facebook",
    sub: "Communauté",
    href: "https://www.facebook.com/profile.php?id=61586359412752",
    Icon: IconFacebook,
    hoverClass: "social-card-facebook",
  },
];

export default function Home() {
  return (
    <>
      <style>{`
        /* ── Layout grids ── */
        .intro-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 120px;
          align-items: center;
        }
        .ecosystem-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--border);
          margin-top: 64px;
        }
        .today-grid {
          display: grid;
          grid-template-columns: 1fr 2fr;
          gap: 80px;
          align-items: start;
        }
        .photo-section {
          display: grid;
          grid-template-columns: 1fr 1fr;
          height: 600px;
        }
        .today-item {
          display: grid;
          grid-template-columns: 180px 1fr;
          gap: 40px;
          border-top: 1px solid var(--border);
          padding: 32px 0;
        }
        .today-item:last-child { border-bottom: 1px solid var(--border); }

        /* ── Tablet ── */
        @media (max-width: 1023px) {
          .intro-grid  { grid-template-columns: 1fr; gap: 64px; }
          .ecosystem-grid { grid-template-columns: 1fr 1fr; }
          .today-grid  { grid-template-columns: 1fr; gap: 40px; }
          .today-label-col { position: static !important; }
          .photo-section { height: 400px; }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .hero-section  { height: 75vh !important; min-height: 480px !important; }
          .hero-content  { padding: 0 24px 48px !important; }
          .hero-title    { font-size: 30px !important; line-height: 1.1 !important; }
          .hero-ctas     { flex-direction: column; align-items: flex-start; }
          .ecosystem-grid { grid-template-columns: 1fr; }
          .eco-card      { padding: 20px !important; }
          .today-item    { grid-template-columns: 1fr; gap: 6px; padding: 20px 0 !important; }
          .photo-section { grid-template-columns: 1fr; height: auto; }
          .photo-block   { height: 260px; }
          .stat-number   { font-size: 40px !important; }
          .intro-grid    { gap: 40px; }
          .today-label-col h2 { font-size: 26px !important; }
          .section-finale h2  { font-size: 26px !important; }

          /* Mobile text variants */
          .desktop-only { display: none !important; }
          .mobile-only  { display: block !important; }
        }
        @media (min-width: 768px) {
          .mobile-only { display: none !important; }
        }

        /* ── Social cards ── */
        .social-card {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 28px 16px;
          background: var(--background);
          border: 1px solid var(--border);
          transition: border-color 300ms ease, box-shadow 300ms ease;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .social-card:hover { box-shadow: 0 4px 24px rgba(0,0,0,0.10); }
        .social-card-icon {
          color: var(--muted);
          transition: color 300ms ease;
          margin-bottom: 10px;
        }
        .social-card-name {
          font-weight: 500;
          font-size: 15px;
          color: var(--foreground);
          margin-bottom: 4px;
        }
        .social-card-sub {
          font-size: 12px;
          color: var(--muted);
        }

        /* LinkedIn */
        .social-card-linkedin:hover { border-color: #0A66C2; }
        .social-card-linkedin:hover .social-card-icon { color: #0A66C2; }

        /* YouTube */
        .social-card-youtube:hover { border-color: #FF0000; }
        .social-card-youtube:hover .social-card-icon { color: #FF0000; }

        /* Facebook */
        .social-card-facebook:hover { border-color: #1877F2; }
        .social-card-facebook:hover .social-card-icon { color: #1877F2; }

        /* Instagram — gradient overlay */
        .social-card-instagram .ig-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #F58529, #DD2A7B, #8134AF, #515BD4);
          opacity: 0;
          transition: opacity 300ms ease;
        }
        .social-card-instagram:hover .ig-overlay { opacity: 1; }
        .social-card-instagram .ig-content {
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .social-card-instagram:hover .social-card-icon,
        .social-card-instagram:hover .social-card-name,
        .social-card-instagram:hover .social-card-sub {
          color: #fff !important;
        }
      `}</style>

      {/* ── HERO ── */}
      <section
        className="hero-section"
        style={{
          position: "relative",
          height: "85vh",
          minHeight: 560,
          display: "flex",
          alignItems: "flex-end",
          overflow: "hidden",
          padding: 0,
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "url('/uploads/hero-amine.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center 20%",
            filter: "grayscale(25%) saturate(0.75) brightness(0.85)",
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.72) 100%)",
          }}
        />
        <div
          className="hero-content"
          style={{
            position: "relative",
            zIndex: 2,
            maxWidth: "var(--max-w-hero)",
            margin: "0 auto",
            padding: "0 80px 80px",
            width: "100%",
          }}
        >
          <span
            style={{
              display: "inline-block",
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "rgba(229,229,224,0.7)",
              marginBottom: 24,
            }}
          >
            Meknès · Maroc · 2026
          </span>

          <h1
            className="hero-title"
            style={{
              fontFamily: "var(--font-playfair), Georgia, serif",
              color: "#FAFAF7",
              fontSize: 72,
              lineHeight: 1.05,
              fontWeight: 500,
              letterSpacing: "-0.025em",
              maxWidth: 720,
              marginBottom: 24,
            }}
          >
            Construire une holding
            <br />
            au Maroc, entité par entité.
          </h1>

          {/* Sous-titre desktop */}
          <p
            className="desktop-only"
            style={{
              color: "#E5E5E0",
              fontSize: 20,
              lineHeight: 1.6,
              maxWidth: 600,
              opacity: 0.9,
              marginBottom: 40,
            }}
          >
            Amine Kbidi, fondateur d&apos;Axis. Né en 2003 à Meknès. Trois
            entreprises actives, deux échecs assumés, une thèse claire sur ce
            que doit être un opérateur de la prochaine génération marocaine.
          </p>

          {/* Sous-titre mobile — version courte */}
          <p
            className="mobile-only"
            style={{
              color: "#E5E5E0",
              fontSize: 16,
              lineHeight: 1.6,
              maxWidth: 480,
              opacity: 0.9,
              marginBottom: 32,
            }}
          >
            Fondateur d&apos;Axis Holding. Trois entreprises actives, deux
            échecs assumés. Meknès, 2026.
          </p>

          <div
            className="hero-ctas"
            style={{ display: "flex", gap: 24, alignItems: "center", flexWrap: "wrap" }}
          >
            <Link href="/parcours" style={btnPrimary}>
              Lire le parcours
            </Link>
            <Link href="/ecosysteme" style={btnSecondary}>
              Voir l&apos;écosystème
            </Link>
          </div>
        </div>
      </section>

      {/* ── INTRO ── */}
      <section style={{ padding: "var(--space-section-y) 0" }}>
        <div style={container}>
          <div className="intro-grid">
            <FadeIn>
              <span style={labelStyle}>À propos</span>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: 40,
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  marginBottom: 24,
                }}
              >
                Un opérateur.
                <br />
                Une structure.
              </h2>
              <p
                style={{
                  fontSize: 20,
                  lineHeight: 1.7,
                  marginBottom: 24,
                  color: "var(--foreground)",
                }}
              >
                Mohamed Amine El Kbidi, né en 2003 à Meknès, construit depuis
                2021 un portefeuille d&apos;entités opérationnelles au Maroc
                sous l&apos;architecture Axis Holding. Impression grand format,
                parfumerie sélective — des secteurs tangibles, mal servis, à
                fort potentiel de professionnalisation.
              </p>
              <p
                className="desktop-only"
                style={{ color: "var(--muted)", marginBottom: 16, fontSize: 18, lineHeight: 1.7 }}
              >
                Ce site n&apos;est pas un portfolio. C&apos;est le registre public de ce
                qu&apos;il construit, pourquoi, et comment. Les décisions sont
                documentées. Les leçons des échecs aussi.
              </p>
              <p
                className="desktop-only"
                style={{ color: "var(--muted)", fontSize: 18, lineHeight: 1.7 }}
              >
                Axis Holding est la structure qui fédère ces entités. Chacune
                opère de manière autonome. Ensemble, elles forment une thèse.
              </p>
              <Link href="/parcours" style={{ ...btnOutline, marginTop: 32 }}>
                Lire le parcours
              </Link>
            </FadeIn>

            <FadeIn delay={150}>
              <div style={{ display: "flex", flexDirection: "column", gap: 48 }}>
                {[
                  {
                    num: "III",
                    accent: ".",
                    desc: "Entités actives dans le portefeuille Axis",
                  },
                  {
                    num: "2021",
                    accent: "—",
                    desc: "Première entreprise fondée, à 17 ans",
                  },
                  {
                    num: "01",
                    accent: "×",
                    desc: "Base d'opération principale — Meknès",
                  },
                ].map(({ num, accent, desc }) => (
                  <div
                    key={num}
                    style={{ borderTop: "1px solid var(--border)", paddingTop: 24 }}
                  >
                    <div
                      className="stat-number"
                      style={{
                        fontFamily: "var(--font-playfair), Georgia, serif",
                        fontSize: 56,
                        fontWeight: 500,
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                        marginBottom: 8,
                      }}
                    >
                      {num}
                      <span style={{ color: "var(--accent)" }}>{accent}</span>
                    </div>
                    <div style={{ fontSize: 15, color: "var(--muted)" }}>{desc}</div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── PHOTO SECTION ── */}
      <div className="photo-section">
        {[
          {
            src: "/uploads/octopub-showroom.jpg",
            alt: "Showroom OctoPub à Meknès — impression grand format",
            caption: "OctoPub · Impression grand format, Meknès",
          },
          {
            src: "/uploads/black-version-parfums.jpg",
            alt: "Boutique Black Version Parfums à Meknès",
            caption: "Black Version Parfums · Boutique, Meknès",
          },
        ].map(({ src, alt, caption }) => (
          <div
            key={src}
            className="photo-block entity-photo"
            style={{ position: "relative", overflow: "hidden" }}
          >
            <Image
              src={src}
              alt={alt}
              fill
              sizes="(max-width: 767px) 100vw, 50vw"
              style={{
                objectFit: "cover",
                filter: "grayscale(15%) saturate(0.9)",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background:
                  "linear-gradient(180deg, transparent 50%, rgba(0,0,0,0.5) 100%)",
              }}
            />
            <p
              style={{
                position: "absolute",
                bottom: 24,
                left: 24,
                right: 24,
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: 13,
                fontStyle: "italic",
                color: "rgba(250,250,247,0.85)",
              }}
            >
              {caption}
            </p>
          </div>
        ))}
      </div>

      {/* ── TROIS PILIERS ── */}
      <section style={{ padding: "var(--space-section-y) 0" }}>
        <div style={container}>
          <FadeIn>
            <span style={labelStyle}>Trois piliers</span>
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: 40,
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                maxWidth: 480,
              }}
            >
              Trois piliers.
              <br />
              Une seule logique.
            </h2>
          </FadeIn>

          <FadeIn delay={150}>
            <div className="ecosystem-grid">
              {pillars.map(({ num, name, desc, descShort, href, linkLabel }) => (
                <div
                  key={name}
                  className="eco-card"
                  style={{ padding: "40px 32px" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: 14,
                      color: "var(--accent)",
                      marginBottom: 24,
                    }}
                  >
                    {num}
                  </div>
                  <h3
                    style={{
                      fontFamily: "var(--font-playfair), Georgia, serif",
                      fontSize: 24,
                      fontWeight: 500,
                      letterSpacing: "-0.025em",
                      marginBottom: 12,
                      color: "var(--foreground)",
                    }}
                  >
                    {name}
                  </h3>
                  <p className="desktop-only" style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.6 }}>
                    {desc}
                  </p>
                  <p className="mobile-only" style={{ fontSize: 14, color: "var(--muted)", lineHeight: 1.6 }}>
                    {descShort}
                  </p>
                  <Link href={href} className="card-link" style={cardLink}>
                    {linkLabel}
                  </Link>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn style={{ textAlign: "center", marginTop: 64 }}>
            <Link href="/ecosysteme" style={btnOutline}>
              Voir l&apos;écosystème complet
            </Link>
          </FadeIn>
        </div>
      </section>

      {/* ── SUR LES RÉSEAUX ── */}
      <section
        style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          borderBottom: "1px solid var(--border)",
          padding: "var(--space-section-y) 0",
        }}
      >
        <div
          style={{
            maxWidth: "var(--max-w-content)",
            margin: "0 auto",
            padding: "0 var(--padding-x-md)",
          }}
        >
          <FadeIn>
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <p
                style={{
                  fontFamily: "var(--font-inter), sans-serif",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: "var(--muted)",
                  marginBottom: 12,
                }}
              >
                Suivre le quotidien
              </p>
              <h2
                style={{
                  fontFamily: "var(--font-playfair), Georgia, serif",
                  fontSize: 40,
                  fontWeight: 500,
                  letterSpacing: "-0.025em",
                  lineHeight: 1.2,
                  marginBottom: 16,
                }}
              >
                Sur les réseaux
              </h2>
              <p
                style={{
                  fontSize: 17,
                  color: "var(--muted)",
                  maxWidth: 480,
                  margin: "0 auto",
                  lineHeight: 1.7,
                }}
              >
                Analyses, coulisses des entités, réflexions opérationnelles.
                Choisissez votre canal.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={100}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 16,
              }}
              className="social-grid"
            >
              {socialCards.map(({ name, sub, href, Icon, hoverClass }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${name} d'Amine Kbidi`}
                  className={`social-card ${hoverClass}`}
                >
                  {hoverClass === "social-card-instagram" && (
                    <div className="ig-overlay" aria-hidden="true" />
                  )}
                  <div className={hoverClass === "social-card-instagram" ? "ig-content" : undefined}>
                    <Icon size={32} className="social-card-icon" />
                    <span className="social-card-name">{name}</span>
                    <span className="social-card-sub">{sub}</span>
                  </div>
                </a>
              ))}
            </div>
          </FadeIn>
        </div>

        <style>{`
          @media (max-width: 767px) {
            .social-grid { grid-template-columns: 1fr 1fr !important; }
            .social-card { padding: 24px 12px !important; }
          }
        `}</style>
      </section>

      {/* ── AUJOURD'HUI (surface) ── */}
      <section style={{ background: "var(--surface)", padding: "var(--space-section-y) 0" }}>
        <div style={container}>
          <div className="today-grid">
            <FadeIn>
              <div
                className="today-label-col"
                style={{ position: "sticky", top: 120 }}
              >
                <span style={labelStyle}>Aujourd&apos;hui</span>
                <h2
                  style={{
                    fontFamily: "var(--font-playfair), Georgia, serif",
                    fontSize: 40,
                    fontWeight: 500,
                    letterSpacing: "-0.025em",
                    lineHeight: 1.2,
                    marginBottom: 16,
                  }}
                >
                  Sur quoi il
                  <br />
                  travaille en ce moment.
                </h2>
                <p style={{ color: "var(--muted)", fontSize: 16 }}>
                  L&apos;état des opérations, sans filtre.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={100}>
              <div>
                {todayItems.map(({ label, labelShort, title, text, textShort }) => (
                  <div key={title} className="today-item">
                    <div
                      style={{
                        fontSize: 13,
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "var(--muted-light)",
                        paddingTop: 4,
                      }}
                    >
                      <span className="desktop-only">{label}</span>
                      <span className="mobile-only">{labelShort}</span>
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-playfair), Georgia, serif",
                          fontSize: 22,
                          fontWeight: 500,
                          letterSpacing: "-0.025em",
                          marginBottom: 8,
                        }}
                      >
                        {title}
                      </h3>
                      <p className="desktop-only" style={{ fontSize: 16, color: "var(--muted)" }}>
                        {text}
                      </p>
                      <p className="mobile-only" style={{ fontSize: 14, color: "var(--muted)" }}>
                        {textShort}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SECTION FINALE ── */}
      <section className="section-finale" style={{ padding: "var(--space-section-y) 0" }}>
        <div style={container}>
          <FadeIn
            style={{
              textAlign: "center",
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            <h2
              style={{
                fontFamily: "var(--font-playfair), Georgia, serif",
                fontSize: 40,
                fontWeight: 500,
                letterSpacing: "-0.025em",
                lineHeight: 1.2,
                marginBottom: 24,
              }}
            >
              Vous voulez collaborer ?
            </h2>
            <p
              style={{
                fontSize: 18,
                color: "var(--muted)",
                lineHeight: 1.7,
                marginBottom: 40,
              }}
            >
              Amine Kbidi répond aux propositions sérieuses : partenariats
              stratégiques, projets B2B sur OctoPub, alliances retail sur Black
              Version Parfums. Les sollicitations génériques sont filtrées en
              amont.
            </p>
            <Link href="/contact" style={btnPrimary}>
              Entrer en contact
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}

/* ─── Shared style objects ─── */
const container: CSSProperties = {
  maxWidth: "var(--max-w-content)",
  margin: "0 auto",
  padding: "0 var(--padding-x-md)",
};

const labelStyle: CSSProperties = {
  display: "inline-block",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 12,
  fontWeight: 500,
  letterSpacing: "0.1em",
  textTransform: "uppercase",
  color: "var(--muted)",
  marginBottom: 32,
};

const btnPrimary: CSSProperties = {
  display: "inline-block",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 15,
  fontWeight: 500,
  letterSpacing: "0.02em",
  padding: "16px 36px",
  background: "var(--accent)",
  color: "#FAFAF8",
  textDecoration: "none",
  borderRadius: 2,
  transition: "background 200ms ease",
};

const btnSecondary: CSSProperties = {
  display: "inline-block",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 15,
  fontWeight: 500,
  letterSpacing: "0.02em",
  color: "#FAFAF7",
  textDecoration: "underline",
  textUnderlineOffset: 4,
};

const btnOutline: CSSProperties = {
  display: "inline-block",
  fontFamily: "var(--font-inter), sans-serif",
  fontSize: 15,
  fontWeight: 500,
  letterSpacing: "0.02em",
  padding: "16px 36px",
  background: "transparent",
  color: "var(--foreground)",
  border: "1px solid var(--border)",
  borderRadius: 2,
  textDecoration: "none",
};

const cardLink: CSSProperties = {
  display: "inline-block",
  marginTop: 20,
  color: "var(--accent)",
  fontSize: 15,
  fontWeight: 500,
  textDecoration: "none",
  transition: "letter-spacing 200ms ease",
};
