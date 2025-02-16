import { Route } from "@/date/Routes/route";
import Sidebaritems from "./Sidebaritems";
import { IRoutes } from "@/types/data/Routes/Route.interface";

export default function SideBarContent(): React.JSX.Element {
  return (
    <ul className="flex flex-col gap-4">
      {Route.map((item: IRoutes) => (
        <Sidebaritems item={item} key={item.id} />
      ))}
    </ul>
  );
}
