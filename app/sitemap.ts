import type { MetadataRoute } from "next";
import DOMAINS from "@/lib/data/domains";
import { SITE_URL } from "@/lib/seo/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: `${SITE_URL}/`, changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/about-us`, changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/placement-statistics`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${SITE_URL}/enroll-now`, changeFrequency: "monthly", priority: 0.9 },
    { url: `${SITE_URL}/privacy-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terms-and-conditions`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/refund-and-cancellation-policy`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/code-of-conduct`, changeFrequency: "yearly", priority: 0.3 },
  ];

  const domainRoutes: MetadataRoute.Sitemap = DOMAINS.map((domain) => ({
    url: `${SITE_URL}/domains/${domain.id}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticRoutes, ...domainRoutes];
}
