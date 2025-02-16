import { Link } from "react-router-dom";

function UserDropdownContent(): React.JSX.Element {
  return (
    <div className="w-[110%] z-[1000] h-max absolute top-[90%] bg-slate-50 drop-shadow-[0_8px_8px_#4C6EF526] rounded text-gray-900">
      <ul className="py-2 px-4 font-iranmedium">
        <li className="border-b border-grayprime-300">
          <Link className=" block p-2" to={"/"}>
            پنل ادمین
          </Link>
        </li>
        <li className="border-b border-grayprime-300">
          <Link className=" block p-2" to={"/"}>
            پنل کارمندان
          </Link>
        </li>
        <li className="border-b border-grayprime-300">
          <Link className=" block p-2" to={"/"}>
            پنل کاربری
          </Link>
        </li>
        <li className="border-b border-grayprime-300">
          <Link className=" block p-2" to={"/"}>
            تغییر رمز{" "}
          </Link>
        </li>
        <li className="border-b border-grayprime-300">
          <Link className=" block p-2" to={"/"}>
            پروفایل
          </Link>
        </li>
        <li>
          <Link className=" block p-2" to={"/"}>
            خروج
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default UserDropdownContent;
