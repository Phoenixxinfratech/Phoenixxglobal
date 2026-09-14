import { notFound } from "next/navigation";
import { buildMetadata } from "@/lib/metadata";
import { routes } from "@/lib/links";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [];
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  return buildMetadata({
    title: `Guide — ${slug}`,
    description: "Technical guide not yet published.",
    path: routes.guide(slug),
    draft: true,
  });
}

export default async function GuidePage({ params }: PageProps) {
  await params;
  notFound();
}
