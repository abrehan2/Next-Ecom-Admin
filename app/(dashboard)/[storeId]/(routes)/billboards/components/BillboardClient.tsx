"use client";

// IMPORTS -
import { Heading } from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {BillboardColumnProps, Columns} from "./Columns";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { DataTable } from "@/components/data-table";


interface BillboardClientProps {
  data: BillboardColumnProps[];
}

const BillboardClient:React.FC<BillboardClientProps> = ({data}) => {
  const router = useRouter();
  const params = useParams();


  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Billboards (${data?.length})`}
          description="Manage billboards for your store"
        />
        <Button
          onClick={() => router.push(`/${params.storeId}/billboards/new`)}
        >
          <Plus className="h-4 w-4 mr-2" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable columns={Columns} data={data}/>
    </>
  );
};

export default BillboardClient;
