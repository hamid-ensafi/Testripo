import image from "@/assets/img/message.png";
import { TextShorten } from "@/utils/helper";
import { ITest } from "./MessageBoxContent";

function MessageBoxItems({ item }:{item:ITest}): React.JSX.Element {
 
  return (
    <li className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <figure className="w-[50px] h-[50px] ">
            <img className="w-full h-full rounded-full" src={image} alt="" />
          </figure>
          <h4 className="font-iranbold">لورم ایپسوم</h4>
        </div>
        <p className="ss01">12.45</p>
      </div>
      <p className="text-sm"> {TextShorten(item.message)}</p>
    </li>
  );
}

export default MessageBoxItems;
