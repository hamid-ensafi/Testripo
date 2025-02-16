// import Dropdown from "@/Components/dropdown/DropDown";
// import UserDropdownContent from "@/ui/UserDropdownContent";
import profile from "@/assets/img/profile.png";

import { ArrowArrowDown1Outline } from "react-icons-sax";

function UserName({ direction }: { direction?: string }): React.JSX.Element {
  return (
    <span
      className={
        "flex items-center gap-2 relative " +
        (direction === "reverse" && "flex-row-reverse")
      }
    >
      <span className="flex items-center gap-2 ">
        <span className="font-irandemibold">علی احمدی</span>
        <ArrowArrowDown1Outline size={15} />
      </span>
      <figure className="w-[50px]">
        <img className="block w-full h-full" src={profile} alt="" />
      </figure>
    </span>
  );
}

export default UserName;

