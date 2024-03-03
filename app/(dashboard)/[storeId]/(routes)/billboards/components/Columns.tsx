"use client";

// IMPORTS -
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";

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
  {
    accessorKey: "actions",
    header: "Actions",   
    cell: ({row}) => <CellAction data={row.original}/>
  },
];

