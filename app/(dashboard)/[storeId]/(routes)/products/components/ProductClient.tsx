"use client";

// IMPORTS -
import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ProductColumnProps, Columns } from "./Columns";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { DataTable } from "@/components/data-table";
import { ApiList } from "@/components/ui/api-list";

interface ProductClientProps {
  data: ProductColumnProps[];
}

const ProuctClient: React.FC<ProductClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Products (${data?.length})`}
          description="Manage products for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/products/new`)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={Columns} data={data} searchKey={"label"} />
      <Heading title="API" description="API calls for Products" />
      <Separator />
      <ApiList entityName="products" entityIdName="productId" />
    </>
  );
};

export default ProuctClient;
