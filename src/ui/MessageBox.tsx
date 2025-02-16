import React from "react";
import Button from "./Button";
import { EssetionalAddOutline } from "react-icons-sax";
import MessageBoxContent from "./MessageBoxContent";
import { useDispatch } from "react-redux";
import { closeWindow } from "@/Components/window/slice";

function MessageBox(): React.JSX.Element {
  const dispath = useDispatch();

  return (
    <div className="flex justify-end h-full  ">
      <div onClick={(e:React.MouseEvent<HTMLDivElement>)=>e.stopPropagation()} className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 bg-slate-50  flex flex-col gap-5">
        <div className="flex  justify-center  bg-tint-200 rounded-[0px_0px_50%_50%] p-12">
          <h4 className="font-irandemibold text-xl text-center w-11/12">
            پیام ها
          </h4>
          <Button onClick={() => dispath(closeWindow())} type="close">
            <EssetionalAddOutline size={32} />
          </Button>
        </div>
        <MessageBoxContent />
      </div>
    </div>
  );
}

export default MessageBox;
