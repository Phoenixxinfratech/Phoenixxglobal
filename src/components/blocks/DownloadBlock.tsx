import { Container, Heading, Link, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type DownloadFile = {
  name: string;
  href: string;
  exists: boolean;
};

type DownloadBlockProps = {
  files: DownloadFile[];
  heading?: string;
  className?: string;
};

export function DownloadBlock({ files, heading, className }: DownloadBlockProps) {
  const available = files.filter((file) => file.exists);
  if (available.length === 0) return null;

  return (
    <Section background="paper" className={className}>
      <Container>
        {heading ? (
          <Heading as="h2" className="text-2xl md:text-3xl">
            {heading}
          </Heading>
        ) : null}
        <ul className={cn("divide-y divide-line border-y border-line", heading && "mt-8")}>
          {available.map((file) => (
            <li key={file.href}>
              <Link
                href={file.href}
                external
                className="flex items-center justify-between py-4 no-underline hover:text-ember"
              >
                <span className="font-medium text-ink">{file.name}</span>
                <span className="text-sm text-zinc">Download</span>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
