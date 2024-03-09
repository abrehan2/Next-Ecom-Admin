// IMPORTS -
import prismadb from "@/lib/prismaDB";
import CategoryClient from "../categories/components/CategoryClient"
import { CategoryColumnProps } from "./components/Columns";
import { format } from "date-fns";

const CategoriesPage = async ({ params }: { params: { storeId: string } }) => {
  const categories = await prismadb.category.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      billBoard: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedCategories: CategoryColumnProps[] = categories.map((c) => ({
    id: c.id,
    name: c.name,
    billboardLabel: c.billBoard.label,
    createdAt: format(c.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryClient data={formattedCategories} />
      </div>
    </div>
  );
};

export default CategoriesPage;
