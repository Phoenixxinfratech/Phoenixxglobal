import type { MetadataRoute } from "next";

/** No live blog posts yet — returns an empty sitemap until content is published. */
export default function sitemap(): MetadataRoute.Sitemap {
  return [];
}
