"use client";

// IMPORTS -
import { Heading } from "@/components/Heading";
import { Separator } from "@/components/ui/separator";
import { OrderColumnProps, columns } from "./Columns";

import { DataTable } from "@/components/data-table";

interface OrderClientProps {
  data: OrderColumnProps[];
}

const OrderClient: React.FC<OrderClientProps> = ({ data }) => {
  return (
    <>
      <Heading
        title={`Orders (${data?.length})`}
        description="Manage orders for your store"
      />

      <Separator />
      <DataTable columns={columns} data={data} searchKey={"products"} />
    </>
  );
};

export default OrderClient;
