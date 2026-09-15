import type { HTMLAttributes, ReactNode, TdHTMLAttributes, ThHTMLAttributes } from "react";
import { cn } from "@/lib/cn";

type TableProps = HTMLAttributes<HTMLTableElement> & {
  children: ReactNode;
};

export function Table({ className, children, ...rest }: TableProps) {
  return (
    <div
      className="w-full overflow-x-auto"
      tabIndex={0}
      role="region"
      aria-label="Scrollable data table"
    >
      <table
        className={cn("w-full border-collapse rounded-none text-left", className)}
        {...rest}
      >
        {children}
      </table>
    </div>
  );
}

type TableSectionProps = HTMLAttributes<HTMLTableSectionElement> & {
  children: ReactNode;
};

export function TableHead({ className, children, ...rest }: TableSectionProps) {
  return (
    <thead className={cn("border-b border-line", className)} {...rest}>
      {children}
    </thead>
  );
}

export function TableBody({ className, children, ...rest }: TableSectionProps) {
  return (
    <tbody className={cn("divide-y divide-line", className)} {...rest}>
      {children}
    </tbody>
  );
}

type TableRowProps = HTMLAttributes<HTMLTableRowElement> & {
  children: ReactNode;
};

export function TableRow({ className, children, ...rest }: TableRowProps) {
  return (
    <tr className={cn("transition-colors hover:bg-paper", className)} {...rest}>
      {children}
    </tr>
  );
}

type TableHeadCellProps = ThHTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode;
};

export function TableHeadCell({
  className,
  children,
  ...rest
}: TableHeadCellProps) {
  return (
    <th
      className={cn(
        "px-4 py-3 text-sm font-semibold text-ink",
        className,
      )}
      {...rest}
    >
      {children}
    </th>
  );
}

type TableCellProps = TdHTMLAttributes<HTMLTableCellElement> & {
  children: ReactNode;
  spec?: boolean;
};

export function TableCell({
  spec = true,
  className,
  children,
  ...rest
}: TableCellProps) {
  return (
    <td
      className={cn(
        "px-4 py-3 text-sm text-steel",
        spec && "font-spec",
        className,
      )}
      {...rest}
    >
      {children}
    </td>
  );
}
