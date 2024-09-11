import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/features/shadcn/components/ui/table';
import { DataTablePagination } from '@/features/ui/components/DataTablePagination';
import {
  type ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
} from '@tanstack/react-table';

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  pagination: {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
  };
  setPagination: (pagination: { page: number; per_page: number }) => void; // Add setPagination prop
}

export function DataTable<TData, TValue>({
  columns,
  data,
  pagination,
  setPagination, // Destructure setPagination
}: DataTableProps<TData, TValue>) {
  const table = useReactTable({
    data,
    columns,
    pageCount: pagination.total_pages,
    manualPagination: true,
    getCoreRowModel: getCoreRowModel(),
    state: {
      pagination: {
        pageIndex: pagination.page - 1,
        pageSize: pagination.per_page,
      },
    },
    onPaginationChange: (updater) => {
      const newState =
        typeof updater === 'function'
          ? updater(table.getState().pagination)
          : updater;
      setPagination({
        page: newState.pageIndex + 1,
        per_page: newState.pageSize,
      });
    },
  });

  return (
    <>
      <Table>
        <TableHeader>
          {table.getHeaderGroups().map((headerGroup) => (
            <TableRow key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <TableHead key={header.id} colSpan={header.colSpan}>
                  {header.isPlaceholder ? null : (
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  )}
                </TableHead>
              ))}
            </TableRow>
          ))}
        </TableHeader>
        <TableBody>
          {table.getRowModel().rows.map((row) => (
            <TableRow key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <TableCell key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="flex flex-col gap-2.5">
        <DataTablePagination
          table={table}
          pageSizeOptions={[10, 20, 30, 40, 50]}
        />
      </div>
    </>
  );
}
