import { ReactNode } from "react";
import { createPortal } from "react-dom";

import Button from "@/ui/Button";
import { useDispatch, useSelector } from "react-redux";
import { closeWindow, getOpenWindow, openWindow } from "./slice";
import {
  IContent,
  ISelection,
} from "@/types/components/window/window.interface";

function Window({ children }: { children: ReactNode }): React.JSX.Element {
  return <>{children}</>;
}

function Selection({ id, children, type }: ISelection): React.JSX.Element {
  const dispath = useDispatch();
  const { openId } = useSelector(getOpenWindow);
  function handleClick() {
    if (openId === "" || openId !== id) {
      dispath(openWindow(id));
    } else {
      dispath(closeWindow());
    }
  }
  return (
    <Button onClick={handleClick} type={type}>
      {children}
    </Button>
  );
}

function Content({ id, children, direction }: IContent): React.JSX.Element {
  const { isOpen, openId } = useSelector(getOpenWindow);
  const dispatch = useDispatch();
  return createPortal(
    <div
      className={
        "absolute  w-full h-full top-[0%] transition-all  z-10 " +
        (isOpen && id === openId ? "  visible bg-shadow-100" : "invisible  ")
      }
      onClick={() => dispatch(closeWindow())}
      onKeyDown={() => null}
      tabIndex={0}
      role="button"
    >
      <div
        className={
          "transform w-full h-full relative transition-all duration-300   cursor-default  " +
          (isOpen && id === openId
            ? `${
                direction === "left"
                  ? " translate-x-[0%] "
                  : " translate-x-[0%] "
              }`
            : `${
                direction === "left"
                  ? " translate-x-[100%] "
                  : " translate-x-[-100%] "
              }`)
        }
      >
        {children}
      </div>
    </div>,
    document.body
  );
}

Window.Selection = Selection;
Window.Content = Content;
export default Window;
