// IMPORTS -
import { UserButton } from "@clerk/nextjs";
import MainNav from "./Main-Nav";
import Switcher from "./Switcher";

const Navbar = () => {
  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4">
        <Switcher />
        <MainNav className="px-6" />
        <div className="ml-auto flex items-center space-x-4">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
