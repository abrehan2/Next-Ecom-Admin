"use client";

// IMPORTS -
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";

export type ColorColumnProps = {
  id: string;
  name: string;
  value: string;
  createdAt: string;
};

export const Columns: ColumnDef<ColorColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "value",
    header: "Value",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.value}
        <div
          className="h-6 w-6 rounded border"
          style={{ backgroundColor: row.original.value }}
        />
      </div>
    ),
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
  {
    accessorKey: "actions",
    header: "Actions",
    cell: ({ row }) => <CellAction data={row.original} />,
  },
];
