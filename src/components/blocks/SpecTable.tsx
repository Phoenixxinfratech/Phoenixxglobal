import type { SpecRow } from "@/content/types";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "@/components/ui";

type SpecTableProps = {
  specs: SpecRow[];
  caption?: string;
  className?: string;
};

export function SpecTable({ specs, caption, className }: SpecTableProps) {
  if (specs.length === 0) return null;

  const hasUnverified = specs.some((row) => !row.verified);

  return (
    <div className={className}>
      {caption ? (
        <p className="mb-4 text-sm font-medium text-ink">{caption}</p>
      ) : null}
      <Table>
        <TableHead>
          <TableRow>
            <TableHeadCell>Specification</TableHeadCell>
            <TableHeadCell>Value</TableHeadCell>
            <TableHeadCell>Status</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {specs.map((row) => (
            <TableRow key={row.label}>
              <TableCell className="font-medium text-ink">{row.label}</TableCell>
              <TableCell>
                {row.value}
                {row.unit ? ` ${row.unit}` : ""}
                {row.note ? (
                  <span className="mt-1 block text-xs text-zinc">{row.note}</span>
                ) : null}
              </TableCell>
              <TableCell>
                {row.verified ? (
                  <span className="text-sm text-ink">Verified</span>
                ) : (
                  <span className="text-sm text-zinc">Confirmed before dispatch</span>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      {hasUnverified ? (
        <p className="mt-3 text-xs text-zinc">
          Values marked as confirmed before dispatch are verified against approved project
          documentation prior to manufacturing.
        </p>
      ) : null}
    </div>
  );
}
