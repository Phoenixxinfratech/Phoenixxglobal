import type { Metadata } from "next";
import { Archivo, IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import { TopBar, Header, Footer } from "@/components/layout";
import { JsonLd } from "@/components/seo/JsonLd";
import { WhatsAppButton, StickyCtaBar } from "@/components/conversion";
import { AnalyticsRoot } from "@/components/analytics/AnalyticsRoot";
import { organizationSchema, websiteSchema } from "@/lib/schema";
import { site } from "@/config/site";
import { seo } from "@/config/seo";
import "@/styles/globals.css";

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["600", "700"],
});

const ibmPlexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  variable: "--font-ibm-plex-sans",
  display: "swap",
  weight: ["400", "500", "600"],
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.domain),
  title: {
    default: seo.defaultTitle,
    template: seo.titleTemplate,
  },
  description: seo.defaultDescription,
  openGraph: {
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${archivo.variable} ${ibmPlexSans.variable} ${ibmPlexMono.variable}`}
    >
      <body className="min-h-screen bg-white font-sans text-ink antialiased">
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        <TopBar />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <WhatsAppButton />
        <StickyCtaBar />
        <AnalyticsRoot />
      </body>
    </html>
  );
}
