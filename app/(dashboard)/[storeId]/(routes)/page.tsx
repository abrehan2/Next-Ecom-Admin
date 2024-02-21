// IMPORTS -
import { dashboardProps } from "@/app/partials/types";
import prismadb from "@/lib/prismaDB";

const DashboardPage: React.FC<dashboardProps> = async ({ params }) => {
  const store = await prismadb.store.findFirst({
    where: {
      id: params.storeId,
    },
  });

  return <div>Active Store: {store?.name}</div>;
};

export default DashboardPage;
