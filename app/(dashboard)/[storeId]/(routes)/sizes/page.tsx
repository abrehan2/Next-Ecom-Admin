// IMPORTS -
import prismadb from "@/lib/prismaDB";
import SizeClient from "./components/SizeClient";
import { SizeColumnProps } from "./components/Columns";
import { format } from "date-fns";

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const sizes = await prismadb.size.findMany({
    where: {
      storeId: params.sizeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedSizes: SizeColumnProps[] = sizes.map((s) => ({
    id: s.id,
    name: s.name,
    value: s.value,
    createdAt: format(s.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeClient data={formattedSizes} />
      </div>
    </div>
  );
};

export default SizePage;
