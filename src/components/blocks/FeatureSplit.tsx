import Image from "next/image";
import { Button, Container, Heading, Section } from "@/components/ui";
import type { ImageRef } from "@/content/types";
import { cn } from "@/lib/cn";

type FeatureSplitProps = {
  imageSide?: "left" | "right";
  heading: string;
  prose: string;
  bullets?: string[];
  href?: string;
  linkLabel?: string;
  image: ImageRef;
  className?: string;
};

export function FeatureSplit({
  imageSide = "right",
  heading,
  prose,
  bullets,
  href,
  linkLabel = "Learn more",
  image,
  className,
}: FeatureSplitProps) {
  const imageBlock = (
    <div className="relative aspect-[4/3] w-full bg-paper">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        className="h-full w-full object-cover"
      />
      {image.caption ? (
        <p className="mt-2 font-spec text-xs text-zinc">{image.caption}</p>
      ) : null}
    </div>
  );

  const textBlock = (
    <div>
      <Heading as="h2" className="text-2xl md:text-3xl">
        {heading}
      </Heading>
      <p className="prose-body mt-4 text-base text-steel">{prose}</p>
      {bullets && bullets.length > 0 ? (
        <ul className="mt-5 space-y-2">
          {bullets.map((bullet) => (
            <li
              key={bullet}
              className="flex gap-2 text-sm text-steel before:mt-2 before:h-1 before:w-1 before:shrink-0 before:rounded-full before:bg-ember before:content-['']"
            >
              {bullet}
            </li>
          ))}
        </ul>
      ) : null}
      {href ? (
        <div className="mt-6">
          <Button href={href} variant="secondary" size="md">
            {linkLabel}
          </Button>
        </div>
      ) : null}
    </div>
  );

  return (
    <Section background="white" className={className}>
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className={cn(imageSide === "left" && "lg:order-2")}>{textBlock}</div>
          <div className={cn(imageSide === "left" && "lg:order-1")}>{imageBlock}</div>
        </div>
      </Container>
    </Section>
  );
}
