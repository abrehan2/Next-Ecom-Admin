// IMPORTS -
import prismadb from "@/lib/prismaDB";
import ProductClient from "./components/ProductClient";
import { ProductColumnProps } from "./components/Columns";
import { format } from "date-fns";
import { formatter } from "@/lib/utils";

const ProductsPage = async ({ params }: { params: { storeId: string } }) => {
  const products = await prismadb.product.findMany({
    where: {
      storeId: params.storeId,
    },
    include: {
      category: true,
      size: true,
      color: true,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  const formattedProducts: ProductColumnProps[] = products.map((p) => ({
    id: p.id,
    name: p.name,
    isFeatured: String(p.isFeatured),
    isArchived: p.isArchived,
    price: formatter.format(p.price),
    category: p.category.name,
    size: p.size.name,
    color: p.color.value,
    createdAt: format(p.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductClient data={formattedProducts} />
      </div>
    </div>
  );
};

export default ProductsPage;
