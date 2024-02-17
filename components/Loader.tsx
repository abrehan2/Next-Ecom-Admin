// IMPORTS -
import { MoonLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <MoonLoader color={"black"} size={50} />
    </div>
  );
};

export default Loader;
