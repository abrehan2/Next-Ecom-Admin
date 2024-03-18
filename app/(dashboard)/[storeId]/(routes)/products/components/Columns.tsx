"use client";

// IMPORTS -
import { ColumnDef } from "@tanstack/react-table";
import { CellAction } from "./CellAction";

export type ProductColumnProps = {
  id: string;
  name: string;
  price: string;
  size: string;
  category: string;
  color: string;
  isFeatured: string;
  isArchived: boolean;
  createdAt: string;
};

export const Columns: ColumnDef<ProductColumnProps>[] = [
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "isArchived",
    header: "Archived",
  },

  {
    accessorKey: "isFeatured",
    header: "Featured",
  },

  {
    accessorKey: "price",
    header: "Price",
  },

  {
    accessorKey: "category",
    header: "Category",
  },

  {
    accessorKey: "size",
    header: "Size",
  },

  {
    accessorKey: "color",
    header: "Color",
    cell: ({ row }) => (
      <div className="flex items-center gap-x-2">
        {row.original.color}

        <div
          className="h-6 w-6 rounded-full border"
          style={{ backgroundColor: row.original.color }}
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
