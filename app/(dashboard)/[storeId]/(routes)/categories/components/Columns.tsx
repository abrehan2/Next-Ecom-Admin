"use client";

// IMPORTS -
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";

export type CategoryColumnProps = {
  id: string;
  name: string;
  billboardLabel: string;
  createdAt: string;
};

export const Columns: ColumnDef<CategoryColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },
  {
    accessorKey: "billboard",
    header: "Billboard",
    cell: ({ row }) => row.original.billboardLabel,
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
