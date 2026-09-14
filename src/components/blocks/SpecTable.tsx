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
  className?: string;
};

export function SpecTable({ specs, className }: SpecTableProps) {
  if (specs.length === 0) return null;

  return (
    <div className={className}>
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
    </div>
  );
}
