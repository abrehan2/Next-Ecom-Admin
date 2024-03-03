"use client";

// IMPORTS -
import { ColumnDef } from "@tanstack/react-table";

export type BillboardColumnProps = {
  id: string;
  label: string;
  createdAt: string;
};

export const Columns: ColumnDef<BillboardColumnProps>[] = [
  {
    accessorKey: "label",
    header: "Label",
  },
  {
    accessorKey: "createdAt",
    header: "Date",
  },
];

