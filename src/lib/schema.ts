import { site } from "@/config/site";
import type { Article, Author, Product, Solution } from "@/content/types";
import { confirmed, isConfirmed } from "@/lib/confirmed";
import { routes } from "@/lib/links";

type JsonLd = Record<string, unknown>;

export function organizationSchema(): JsonLd {
  const sameAs = [
    confirmed(site.social.linkedin),
    confirmed(site.social.youtube),
    confirmed(site.social.instagram),
    confirmed(site.social.facebook),
    confirmed(site.social.indiamart),
  ].filter(Boolean) as string[];

  const identifiers: JsonLd[] = [];
  if (isConfirmed(site.registrations.gstin)) {
    identifiers.push({
      "@type": "PropertyValue",
      name: "GSTIN",
      value: site.registrations.gstin,
    });
  }
  if (isConfirmed(site.registrations.iec)) {
    identifiers.push({
      "@type": "PropertyValue",
      name: "IEC",
      value: site.registrations.iec,
    });
  }

  const address: JsonLd = {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressRegion: site.address.state,
    addressCountry: site.address.countryCode,
  };
  if (isConfirmed(site.address.line1)) address.streetAddress = site.address.line1;
  if (isConfirmed(site.address.postalCode)) address.postalCode = site.address.postalCode;

  const contactPoints: JsonLd[] = [];
  if (isConfirmed(site.contact.phonePrimary) || (site.contact.publishEmail && isConfirmed(site.contact.salesEmail))) {
    contactPoints.push({
      "@type": "ContactPoint",
      contactType: "sales",
      ...(site.contact.publishEmail && isConfirmed(site.contact.salesEmail)
        ? { email: site.contact.salesEmail }
        : {}),
      ...(isConfirmed(site.contact.phonePrimary)
        ? { telephone: site.contact.phonePrimary }
        : {}),
      availableLanguage: ["English", "Hindi"],
      areaServed: "Worldwide",
    });
  }
  if (site.contact.publishEmail && isConfirmed(site.contact.exportEmail)) {
    contactPoints.push({
      "@type": "ContactPoint",
      contactType: "export sales",
      email: site.contact.exportEmail,
      availableLanguage: ["English"],
      areaServed: ["AF", "IN", "AE"],
    });
  }

  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: site.brand,
    legalName: site.legalName,
    url: site.domain,
    logo: `${site.domain}/images/icons/logo.svg`,
    description: site.canonicalDescription || site.tagline,
    address,
    areaServed: "Worldwide",
  };

  if (sameAs.length) schema.sameAs = sameAs;
  if (identifiers.length) schema.identifier = identifiers;
  if (contactPoints.length) schema.contactPoint = contactPoints;

  return schema;
}

export function websiteSchema(): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: site.brand,
    url: site.domain,
    publisher: {
      "@type": "Organization",
      name: site.legalName,
    },
  };
}

export function breadcrumbSchema(
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${site.domain}${item.path.startsWith("/") ? item.path : `/${item.path}`}`,
    })),
  };
}

export function faqPageSchema(
  faqs: Array<{ question: string; answer: string }>,
): JsonLd | null {
  if (!faqs.length) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function itemListSchema(
  name: string,
  items: Array<{ name: string; path: string }>,
): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      url: `${site.domain}${item.path}`,
    })),
  };
}

export function productSchema(product: Product): JsonLd {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    description: product.summary,
    url: `${site.domain}${routes.product(product.slug)}`,
    brand: {
      "@type": "Brand",
      name: site.brand,
    },
    manufacturer: {
      "@type": "Organization",
      name: site.legalName,
    },
  };

  const primaryImage = product.images[0];
  if (primaryImage) {
    schema.image = `${site.domain}${primaryImage.src}`;
  }

  return schema;
}

export function serviceSchema(solution: Solution): JsonLd {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.name,
    description: solution.summary,
    url: `${site.domain}${routes.solution(solution.slug)}`,
    provider: {
      "@type": "Organization",
      name: site.legalName,
      url: site.domain,
    },
    areaServed: "Worldwide",
  };

  const primaryImage = solution.images[0];
  if (primaryImage) {
    schema.image = `${site.domain}${primaryImage.src}`;
  }

  return schema;
}

export function personSchema(author: Author): JsonLd {
  const schema: JsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: author.name,
    jobTitle: author.role,
    description: author.bio,
    worksFor: {
      "@type": "Organization",
      name: site.legalName,
      url: site.domain,
    },
  };

  if (author.linkedin) {
    schema.sameAs = [author.linkedin];
  }

  return schema;
}

export function blogPostingSchema(article: Article, author: Author): JsonLd {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: article.title,
    description: article.excerpt,
    datePublished: article.datePublished,
    dateModified: article.dateModified,
    author: personSchema(author),
    publisher: {
      "@type": "Organization",
      name: site.legalName,
      url: site.domain,
      logo: {
        "@type": "ImageObject",
        url: `${site.domain}/images/icons/logo.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${site.domain}${routes.blogPost(article.slug)}`,
    },
    url: `${site.domain}${routes.blogPost(article.slug)}`,
  };
}
