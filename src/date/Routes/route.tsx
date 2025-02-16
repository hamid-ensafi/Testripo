import { IRoutes } from "@/types/data/Routes/Route.interface";
import {
  ArrowLogout1Outline,
  BuildingBuildingOutline,
  EmailsMessagesDirectboxReceiveOutline,
  GridGrid2Outline,
  UsersPeopleOutline,
} from "react-icons-sax";

export const Route: IRoutes[] = [
  {
    id: "dashboard",
    icon: <GridGrid2Outline size={24} />,
    name: "داشبورد",
  },
  {
    id: "tickets",
    icon: <EmailsMessagesDirectboxReceiveOutline size={24} />,
    name: "تیکت ها ",
  },
  {
    id: "Department",
    icon: <BuildingBuildingOutline size={24}/>,
    name: "مدیریت دپارتمان ها",
  },
  {
    id: "manageEmployees",
    icon: <UsersPeopleOutline size={24}/>,
    name: "مدیریت کاربران",
  },
  {
    id: "SignOut",
    icon: <ArrowLogout1Outline size={24}/>,
    name: "خروج",
  },
];
