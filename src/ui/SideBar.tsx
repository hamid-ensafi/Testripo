import React from "react";
import SideBarContent from "@/ui/SideBarContent";

function SideBar(): React.JSX.Element {
  return (
    <>
      <aside className="row-span-full px-4 py-3 hidden md:block">
        <div className="bg-grayprime-100 h-full py-6  flex flex-col gap-11">
          <h1 className="text-3xl font-iranbold px-8 text-primery-default">
            تیکتینگ
          </h1>
          <SideBarContent />
        </div>
      </aside>
    </>
  );
}

export default SideBar;
