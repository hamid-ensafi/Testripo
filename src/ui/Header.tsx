import {
  NotificationsNotificationBingOutline,
  SearchSearchNormalOutline,
} from "react-icons-sax";

import Button from "./Button";

import SideBarMobile from "./SideBarMobile";
import Avatar from "./Avatar";
import Window from "@/Components/window/Window";
import MessageBox from "./MessageBox";
import { useDispatch } from "react-redux";
import { openWindow } from "@/Components/window/slice";
function Header(): React.JSX.Element {
  const dispath = useDispatch();
  return (
    <header>
      <div className=" px-4 py-3 w-full">
        <div className="bg-grayprime-100 w-full p-4 rounded ">
          <div className="flex justify-between items-center ">
            <div className="md:hidden">
              <SideBarMobile />
            </div>
            <h1 className="md:hidden text-xl font-iranbold text-primery-default">
              تیکتینگ
            </h1>
            <div className="md:hidden flex gap-4  text-grayprime-900">
              <Button type="iconmob">
                <SearchSearchNormalOutline size={24} />
              </Button>
              <Window>
                <Window.Selection id="2" type="iconmob">
                  <NotificationsNotificationBingOutline size={24} />
                </Window.Selection>
                <Window.Content id="2" direction="right">
                  <MessageBox />
                </Window.Content>
              </Window>
            </div>
            <div className="hidden md:w-1/2 lg:w-1/3 md:flex md:items-center  relative border border-grayprime-300 rounded-xl">
              <div className="text-primery-default px-2.5">
                <SearchSearchNormalOutline size={18} />
              </div>
              <input
                className="px-2.5  py-3"
                type="text"
                placeholder="جستجو ...."
              />
            </div>
            <div className="hidden md:flex md:items-center gap-4">
              <Button onClick={() => dispath(openWindow("2"))} type="icondesk">
                <NotificationsNotificationBingOutline fill="#000" size={22} />
              </Button>
              <Avatar />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
