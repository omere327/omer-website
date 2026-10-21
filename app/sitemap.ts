import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/content";

// One page for now; inner pages (Work, Insights, About) join this list when they exist.
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: SITE_URL, lastModified: new Date("2026-10-21"), changeFrequency: "monthly", priority: 1 }];
}
