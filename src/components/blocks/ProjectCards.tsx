import Image from "next/image";
import { Card, Container, Heading, Link, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type Project = {
  slug: string;
  name: string;
  summary: string;
  href: string;
  location?: string;
  image?: { src: string; alt: string; width: number; height: number };
};

type ProjectCardsProps = {
  projects: Project[];
  heading?: string;
  className?: string;
};

export function ProjectCards({ projects, heading, className }: ProjectCardsProps) {
  if (projects.length === 0) return null;

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
            "grid gap-6 md:grid-cols-2 lg:grid-cols-3",
            heading && "mt-8",
          )}
        >
          {projects.map((project) => (
            <li key={project.slug}>
              <Card className="flex h-full flex-col overflow-hidden p-0">
                {project.image ? (
                  <div className="relative aspect-[16/10] w-full bg-paper">
                    <Image
                      src={project.image.src}
                      alt={project.image.alt}
                      width={project.image.width}
                      height={project.image.height}
                      className="h-full w-full object-cover"
                    />
                  </div>
                ) : null}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="text-lg font-semibold text-ink">{project.name}</h3>
                  {project.location ? (
                    <p className="mt-1 text-xs text-zinc">{project.location}</p>
                  ) : null}
                  <p className="mt-3 flex-1 text-sm text-steel">{project.summary}</p>
                  <Link href={project.href} className="mt-4 text-sm">
                    View project
                  </Link>
                </div>
              </Card>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
