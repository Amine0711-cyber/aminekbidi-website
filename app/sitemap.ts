import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://aminekbidi.com";
  const routes = [
    "",
    "/vision",
    "/ecosysteme",
    "/parcours",
    "/cas",
    "/cas/octopub-hybride-v3",
    "/cas/black-version-recuperation",
    "/cas/axis-gouvernance",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: route === "" ? 1 : 0.8,
  }));
}
