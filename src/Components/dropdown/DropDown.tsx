import { ReactNode } from "react";
import Button from "../../ui/Button";
import { IButton } from "@/types/ui/Button.interface";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu, getOpen, showMenu } from "./slice";
import { IContent } from "@/types/components/dropdown/dropdown.interface";

function Dropdown({ children }: { children: React.JSX.Element }) {
  return <>{children}</>;
}
function Icon({ type, text, children, id }: IButton) {
  const dispatch = useDispatch();
  const { openId } = useSelector(getOpen);

  function handleClick(id: string | number | undefined) {
    if (openId === "" || openId !== id) {
      dispatch(showMenu(id));
    } else {
      dispatch(closeMenu());
    }
  }
  return (
    <>
      <Button onClick={() => handleClick(id)} type={type} text={text}>
        {children}
      </Button>
    </>
  );
}
function Count({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
function Content({ children, id }: IContent) {
  const { isOpen, openId } = useSelector(getOpen);
  return <>{isOpen && openId === id ? children : null}</>;
}

Dropdown.Icons = Icon;
Dropdown.Content = Content;
Dropdown.Count = Count;
export default Dropdown;
