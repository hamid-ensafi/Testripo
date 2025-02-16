import { IRoutes } from "@/types/data/Routes/Route.interface";
import { NavLink } from "react-router-dom";

function Sidebaritems({ item }: { item: IRoutes }): React.JSX.Element {
  const { id, icon, name } = item;
  return (
    <li className="text-grayprime-600 font-iranbold text-md">
      <NavLink
        className="[&.active>span]:bg-primery-default  [&.active>span]:block [&.active]:text-primery-default flex relative p-3 gap-3 px-8 items-center overflow-hidden"
        to={id}
      >
        {icon}
        {name}
        <span className=" w-4 h-full hidden  absolute right-0 transform translate-x-[50%] rounded-full"></span>
      </NavLink>
    </li>
  );
}

export default Sidebaritems;
