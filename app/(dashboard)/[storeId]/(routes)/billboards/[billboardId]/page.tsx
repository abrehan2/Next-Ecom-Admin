// IMPORTS -
import prismadb from "@/lib/prismaDB";
import BillboardsForm from "./components/Billboard-Form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  console.log(params);

  const billboard =
    params.billboardId === "new"
      ? null
      : await prismadb.billboard.findUnique({
          where: {
            id: params.billboardId,
          },
        });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardsForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
