import Image from "next/image";
import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type Logo = {
  name: string;
  src: string;
  width: number;
  height: number;
};

type LogoWallProps = {
  logos: Logo[];
  heading?: string;
  className?: string;
};

export function LogoWall({ logos, heading, className }: LogoWallProps) {
  if (logos.length === 0) return null;

  return (
    <Section background="paper" className={cn("py-10 md:py-12", className)}>
      <Container>
        {heading ? (
          <p className="text-center text-sm text-zinc">{heading}</p>
        ) : null}
        <ul
          className={cn(
            "flex flex-wrap items-center justify-center gap-x-10 gap-y-6",
            heading && "mt-6",
          )}
        >
          {logos.map((logo) => (
            <li key={logo.name}>
              <Image
                src={logo.src}
                alt={logo.name}
                width={logo.width}
                height={logo.height}
                className="h-8 w-auto object-contain opacity-70 grayscale md:h-10"
              />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
