const SAME_AS_URLS: string[] = [
  "https://www.linkedin.com/in/aminekbidi/",
  "https://twitter.com/aminekbidi",
  "https://octopub.ma",
  "https://blackversion.ma",
];

export default function StructuredData() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Mohamed Amine El Kbidi",
    alternateName: ["Amine Kbidi", "Amine El Kbidi", "Kbidi Amine", "El Kbidi Amine"],
    url: "https://aminekbidi.com",
    image: "https://aminekbidi.com/og-image.png",
    birthDate: "2003-10-03",
    birthPlace: { "@type": "Place", name: "Meknès, Maroc" },
    nationality: "Marocaine",
    gender: "Male",
    jobTitle: "Fondateur & CEO",
    worksFor: { "@type": "Organization", name: "Axis Holding" },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Faculté des Sciences Juridiques, Économiques et Sociales Moulay Ismail",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Meknès",
        addressCountry: "MA",
      },
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Meknès",
      addressRegion: "Fès-Meknès",
      addressCountry: "MA",
    },
    knowsAbout: [
      "Entrepreneuriat",
      "Holding",
      "Stratégie d'entreprise",
      "Marketing digital",
      "B2B",
      "Retail",
      "Branding",
      "E-commerce",
    ],
    sameAs: SAME_AS_URLS,
  };

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Axis Holding",
    alternateName: "Axis",
    url: "https://aminekbidi.com",
    logo: "https://aminekbidi.com/og-image.png",
    founder: { "@type": "Person", name: "Mohamed Amine El Kbidi" },
    foundingDate: "2025",
    foundingLocation: { "@type": "Place", name: "Meknès, Maroc" },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Meknès",
      addressRegion: "Fès-Meknès",
      addressCountry: "MA",
    },
    subOrganization: [
      {
        "@type": "Organization",
        name: "OctoPub",
        description: "Impression numérique grand format et signalétique B2B",
      },
      {
        "@type": "Organization",
        name: "Black Version Parfums",
        description: "Marque de parfums et retail au Maroc",
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
    </>
  );
}
