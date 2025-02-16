import Window from "@/Components/window/Window";
import SideBarContent from "@/ui/SideBarContent";
import { closeWindow } from "@/Components/window/slice";
import { EssetionalAddOutline, EssetionalMenuOutline } from "react-icons-sax";
import Button from "./Button";
import { useDispatch } from "react-redux";
import Avatar from "./Avatar";

function SideBarMobile(): React.JSX.Element {
  const dispath = useDispatch();

  return (
    <Window>
      <>
        <Window.Selection id="1" type="simple">
          <EssetionalMenuOutline />
        </Window.Selection>
        <Window.Content direction="left" id="1">
          <div className="h-full p-4 md:hidden  bg-white">
            <div className="flex flex-col gap-4 bg-grayprime-100   h-full px-4">
              <div className="flex border-b border-grayprime-300  justify-between py-6 ">
                <Avatar direction="reverse" />
                <Button onClick={() => dispath(closeWindow())} type="close">
                  <EssetionalAddOutline size={32} />
                </Button>
              </div>
              <SideBarContent />
            </div>
          </div>
        </Window.Content>
      </>
    </Window>
  );
}

export default SideBarMobile;
