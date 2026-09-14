import Image from "next/image";
import { Container, Heading, Section } from "@/components/ui";
import type { ImageRef } from "@/content/types";
import { cn } from "@/lib/cn";

type ImageDetailGridProps = {
  images: ImageRef[];
  heading?: string;
  className?: string;
};

export function ImageDetailGrid({ images, heading, className }: ImageDetailGridProps) {
  if (images.length < 3) return null;

  return (
    <Section background="paper" className={className}>
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
          {images.slice(0, 6).map((image) => (
            <li key={image.src}>
              <figure>
                <div className="relative aspect-[4/3] w-full bg-paper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover"
                  />
                </div>
                {image.caption ? (
                  <figcaption className="mt-2 text-sm text-steel">{image.caption}</figcaption>
                ) : null}
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
