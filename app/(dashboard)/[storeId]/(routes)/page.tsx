// IMPORTS -
import { dashboardProps } from "@/app/partials/types";
import prismadb from "@/lib/prismaDB";

const DashboardPage: React.FC<dashboardProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return (
    <div className="flex flex-col items-center justify-center h-full w-full overflow-hidden">
      <p className="text-neutral-600 text-center dark:text-neutral-200 lg:text-3xl sm:text-base">
        Active Store: {store?.name}
      </p>
    </div>
  );
};

export default DashboardPage;
