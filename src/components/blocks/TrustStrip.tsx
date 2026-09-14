import { Container, Section } from "@/components/ui";
import { cn } from "@/lib/cn";

type TrustItem = { label: string };

type TrustStripProps = {
  items: TrustItem[];
  className?: string;
};

export function TrustStrip({ items, className }: TrustStripProps) {
  if (items.length < 3) return null;

  return (
    <Section background="white" className={cn("py-8 md:py-10", className)}>
      <Container>
        <ul className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 md:justify-between">
          {items.map((item) => (
            <li
              key={item.label}
              className="text-sm text-steel before:mr-2 before:inline-block before:h-1 before:w-1 before:rounded-full before:bg-ember before:align-middle before:content-['']"
            >
              {item.label}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
