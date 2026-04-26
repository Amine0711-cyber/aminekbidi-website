import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";

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
  metadataBase: new URL("https://aminekbidi.com"),
  title: {
    default: "Amine Kbidi — Entrepreneur, Fondateur d'Axis Holding",
    template: "%s | Amine Kbidi",
  },
  description:
    "Site officiel de Mohamed Amine El Kbidi, entrepreneur marocain, fondateur d'Axis Holding (OctoPub, Black Version Parfums). Meknès, Maroc.",
  applicationName: "Amine Kbidi",
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Amine Kbidi — Fondateur, Axis Holding",
    description:
      "Entrepreneur marocain, fondateur d'Axis Holding. OctoPub, Black Version Parfums. Meknès, Maroc.",
    url: "https://aminekbidi.com",
    siteName: "Amine Kbidi",
    locale: "fr_MA",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Amine Kbidi",
    description: "Fondateur d'Axis Holding. Meknès, Maroc.",
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="fr" className={`${playfair.variable} ${inter.variable}`}>
      <head>
        <StructuredData />
      </head>
      <body
        style={{
          fontFamily: "var(--font-inter), system-ui, sans-serif",
          background: "var(--background)",
          color: "var(--foreground)",
        }}
      >
        <Script
          strategy="afterInteractive"
          data-domain="aminekbidi.com"
          src="https://plausible.io/js/script.js"
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
