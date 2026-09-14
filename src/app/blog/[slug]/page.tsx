import { notFound } from "next/navigation";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return [];
}

export default async function BlogPostPage({ params }: PageProps) {
  await params;
  notFound();
}
