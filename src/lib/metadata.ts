import type { Metadata } from "next";
import { site } from "@/config/site";
import { seo } from "@/config/seo";

type BuildMetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
  type?: "website" | "article";
  noindex?: boolean;
  draft?: boolean;
};

function absoluteUrl(path: string): string {
  const base = site.domain.replace(/\/$/, "");
  const normalized = path.startsWith("/") ? path : `/${path}`;
  const withSlash =
    normalized.endsWith("/") || normalized.includes(".") ? normalized : `${normalized}/`;
  return `${base}${withSlash === "//" ? "/" : withSlash}`;
}

export function buildMetadata({
  title,
  description,
  path,
  image,
  type = "website",
  noindex,
  draft,
}: BuildMetadataInput): Metadata {
  const shouldNoIndex = Boolean(noindex || draft);
  const url = absoluteUrl(path);
  const ogImage = image ?? `${site.domain}/opengraph-image`;

  return {
    title,
    description,
    metadataBase: new URL(site.domain),
    alternates: {
      canonical: url,
      languages: {
        en: url,
        "x-default": url,
      },
    },
    robots: shouldNoIndex
      ? { index: false, follow: true }
      : { index: true, follow: true },
    openGraph: {
      title,
      description,
      url,
      siteName: seo.siteName,
      locale: seo.locale,
      type,
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export { absoluteUrl };
