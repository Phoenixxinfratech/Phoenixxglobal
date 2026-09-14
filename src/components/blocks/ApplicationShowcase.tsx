import Image from "next/image";
import { Container, Heading, Section } from "@/components/ui";
import type { ImageRef } from "@/content/types";
import { cn } from "@/lib/cn";

type ApplicationShowcaseProps = {
  images: ImageRef[];
  heading?: string;
  className?: string;
};

export function ApplicationShowcase({
  images,
  heading,
  className,
}: ApplicationShowcaseProps) {
  if (images.length === 0) return null;

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
            "grid gap-8 sm:grid-cols-2",
            heading && "mt-8",
            images.length === 1 && "sm:grid-cols-1",
          )}
        >
          {images.map((image) => (
            <li key={image.src}>
              <figure>
                <div className="relative aspect-[16/10] w-full bg-paper">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="h-full w-full object-cover"
                  />
                </div>
                {image.caption ? (
                  <figcaption className="mt-2 font-spec text-xs text-zinc">
                    {image.caption}
                  </figcaption>
                ) : null}
              </figure>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
