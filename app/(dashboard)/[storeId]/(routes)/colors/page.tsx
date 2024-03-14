// IMPORTS -
import prismadb from "@/lib/prismaDB";
import { ColorColumnProps } from "./components/Columns";
import { format } from "date-fns";
import ColorClient from "./components/ColorClient";

const ColorsPage = async ({ params }: { params: { sizeId: string } }) => {
  const colors = await prismadb.color.findMany({
    where: {
      storeId: params.sizeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedColors: ColorColumnProps[] = colors.map((s) => ({
    id: s.id,
    name: s.name,
    value: s.value,
    createdAt: format(s.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorsPage;
