// IMPORTS -
import prismadb from "@/lib/prismaDB";
import ColorForm from "./components/Color-Form";

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const colors =
    params.colorId === "new"
      ? null
      : await prismadb.color.findUnique({
          where: {
            id: params.colorId,
          },
        });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={colors} />
      </div>
    </div>
  );
};

export default ColorPage;
