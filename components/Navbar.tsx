// IMPORTS -
import { UserButton, auth } from "@clerk/nextjs";
import MainNav from "./Main-Nav";
import Switcher from "./Switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismaDB";

const Navbar = async () => {
  const { userId } = auth();

  if (!userId) {
    redirect("/sign-in");
  }

  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Switcher items={stores} />
        <MainNav className="px-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
