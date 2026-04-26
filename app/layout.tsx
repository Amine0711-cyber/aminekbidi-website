import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Amine Kbidi — Fondateur, Axis Holding",
    template: "%s · Amine Kbidi",
  },
  description:
    "Amine Kbidi, fondateur d'Axis Holding — opérateur sérieux qui construit un écosystème d'entreprises depuis Meknès, Maroc.",
  openGraph: {
    title: "Amine Kbidi — Fondateur, Axis Holding",
    description:
      "Opérateur sérieux qui construit un écosystème d'entreprises depuis Meknès, Maroc.",
    url: "https://aminekbidi.com",
    siteName: "Amine Kbidi",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amine Kbidi",
    description: "Fondateur d'Axis Holding. Meknès, Maroc.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <script
          defer
          data-domain="aminekbidi.com"
          src="https://plausible.io/js/script.js"
        />
      </head>
      <body
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
