import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background placeholder */}
      <div className="absolute inset-0 bg-neutral-800 z-0">
        <div className="absolute inset-0 flex items-center justify-center text-neutral-500 text-sm font-inter">
          [Image de fond : Amine en contexte professionnel — showroom OctoPub ou boutique Black Version]
        </div>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50 z-10" />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 md:px-12 w-full pt-24 pb-16">
        <div className="max-w-2xl">
          <h1 className="font-playfair text-[40px] md:text-[64px] font-medium leading-[1.1] tracking-tight text-white">
            Je construis Axis — un écosystème d&apos;entreprises marocaines bâti pour durer.
          </h1>
          <p className="mt-6 font-inter text-lg text-white/80 leading-[1.7] max-w-lg">
            Fondateur &amp; CEO. Meknès, Maroc. J&apos;opère à l&apos;intersection du retail, du B2B industriel et de la stratégie de marque.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 sm:gap-6 items-start">
            <Link
              href="/ecosysteme"
              className="inline-block font-inter text-sm font-medium bg-white text-[#0A0A0A] px-6 py-3 hover:bg-white/90 transition-colors"
            >
              Découvrir l&apos;écosystème
            </Link>
            <Link
              href="/vision"
              className="inline-block font-inter text-sm text-white/80 hover:text-white transition-colors py-3"
            >
              Lire ma vision →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
