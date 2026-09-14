import {
  Container,
  Heading,
  Section,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/components/ui";
import { cn } from "@/lib/cn";

type ComparisonRow = {
  label: string;
  values: string[];
};

type ComparisonTableProps = {
  columns: string[];
  rows: ComparisonRow[];
  heading?: string;
  className?: string;
};

export function ComparisonTable({
  columns,
  rows,
  heading,
  className,
}: ComparisonTableProps) {
  if (columns.length < 2 || rows.length === 0) return null;

  return (
    <Section background="paper" className={className}>
      <Container>
        {heading ? (
          <Heading as="h2" className="text-2xl md:text-3xl">
            {heading}
          </Heading>
        ) : null}
        <div className={cn(heading && "mt-8")}>
          <Table>
            <TableHead>
              <TableRow>
                <TableHeadCell>Specification</TableHeadCell>
                {columns.map((col) => (
                  <TableHeadCell key={col}>{col}</TableHeadCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.label}>
                  <TableCell className="font-medium text-ink">{row.label}</TableCell>
                  {row.values.map((value, index) => (
                    <TableCell key={`${row.label}-${index}`}>{value}</TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </Container>
    </Section>
  );
}
