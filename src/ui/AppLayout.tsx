import { Outlet } from "react-router-dom";
import Header from "./Header";
import SideBar from "./SideBar";

function AppLayout(): React.JSX.Element {
  return (
    <main className="flex justify-center overflow-hidden ">
      <div className="2xl:container w-full">
        <div className="grid grid-cols-[1fr] w-full  md:grid-cols-[320px_3fr]  grid-rows-[auto_1fr]  h-screen">
          <SideBar />
          <Header />
          <section className="overflow-y-scroll  px-4 py-3 scrollbar-none">
            <Outlet />
          </section>
        </div>
      </div>
    </main>
  );
}

export default AppLayout;
