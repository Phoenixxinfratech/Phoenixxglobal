import Image from "next/image";
import { Card, Container, Heading, Link, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type ProductGridItem = {
  slug: string;
  name: string;
  shortName: string;
  summary?: string;
  keySpec?: string;
  href: string;
  image?: { src: string; alt: string; width: number; height: number };
};

type ProductGridProps = {
  products: ProductGridItem[];
  heading?: string;
  className?: string;
};

function getKeyLine(product: ProductGridItem): string | undefined {
  return product.keySpec ?? product.summary;
}

export function ProductGrid({ products, heading, className }: ProductGridProps) {
  if (products.length === 0) return null;

  return (
    <Section background="white" className={className}>
      <Container>
        {heading ? (
          <Heading as="h2" className="text-2xl md:text-3xl">
            {heading}
          </Heading>
        ) : null}
        <ul
          className={cn(
            "grid gap-6 sm:grid-cols-2 lg:grid-cols-3",
            heading && "mt-8",
          )}
        >
          {products.map((product) => {
            const keyLine = getKeyLine(product);
            return (
              <li key={product.slug}>
                <Card className="flex h-full flex-col overflow-hidden p-0">
                  {product.image ? (
                    <div className="relative aspect-[16/10] w-full bg-paper">
                      <Image
                        src={product.image.src}
                        alt={product.image.alt}
                        width={product.image.width}
                        height={product.image.height}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ) : null}
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg font-semibold text-ink">
                      <Link href={product.href} className="no-underline hover:text-ember">
                        {product.shortName}
                      </Link>
                    </h3>
                    {keyLine ? (
                      <p className="mt-2 font-spec text-sm text-steel">{keyLine}</p>
                    ) : null}
                    <p className="mt-3 flex-1 text-sm text-zinc">{product.name}</p>
                    <Link href={product.href} className="mt-4 text-sm">
                      View {product.shortName.toLowerCase()}
                    </Link>
                  </div>
                </Card>
              </li>
            );
          })}
        </ul>
      </Container>
    </Section>
  );
}
