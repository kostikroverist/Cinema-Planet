import Logo from "../Logo/Logo";
import { NavLink } from "react-router-dom";

const Header= () => {
  return (
    <div className="bg-white dark:bg-gray-800 flex  items-center w-screen  p-5  ">
      <Logo />
      <div className="p-3 w-1/3  flex justify-evenly">
        <NavLink to={"/genre"} className="text-3xl text-white">
          Genre
        </NavLink>
        <NavLink to={"/movies"} className="text-3xl text-white">
          Movie
        </NavLink>
        <NavLink to={"/tvshow"} className="text-3xl text-white">
          TV Show
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
