// IMPORTS -
import prismadb from "@/lib/prismaDB";
import ProductForm from "./components/Product-Form";

const ProductPage = async ({
  params,
}: {
  params: { productId: string, storeId: string };
}) => {

  const product =
    params.productId === "new"
      ? null
      : await prismadb.product.findUnique({
          where: {
            id: params.productId,
          },
          include: {
            image: true
          }
        });


        const categories = await prismadb.category.findMany({
          where: {
            storeId: params.storeId
          }
        })


        const sizes = await prismadb.size.findMany({
          where: {
            storeId: params.storeId
          }
        })


        const color = await prismadb.color.findMany({
            where: {
              storeId: params.storeId
            }
          })
        




  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm initialData={product} 
        categories={categories}
        color={color}
        sizes={sizes}
        />
      </div>
    </div>
  );
};

export default ProductPage;
