import Dropdown from "@/Components/dropdown/DropDown";
import UserDropdownContent from "./UserDropdownContent";
import UserName from "@/feature/GetUserName/UserName";

function Avatar({ direction }: { direction?: string }): React.JSX.Element {
  return (
    <div className="relative">
      <Dropdown>
        <>
          <Dropdown.Icons id="1" type="dropdown">
            <UserName direction={direction} />
          </Dropdown.Icons>
          <Dropdown.Content id="1">
            <UserDropdownContent />
          </Dropdown.Content>
        </>
      </Dropdown>
    </div>
  );
}

export default Avatar;
