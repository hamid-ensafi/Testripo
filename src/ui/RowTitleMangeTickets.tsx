import { IResult } from "@/types/feature/ManageTickets/ManageTickets.interface";
import { flexRender, Header } from "@tanstack/react-table";
import Button from "./Button";
import { ArrowArrowDownBold, ArrowArrowUp1Bold } from "react-icons-sax";

export default function RowTitleMangeTickets({
  header,
  onSelect
}: {
  header: Header<IResult, unknown>;
  onSelect: () => void;
  }): React.JSX.Element {
  return (
    <div
      className="text-center"
      style={{ width: `${header.column.getSize()}px` }}
    >
      <div className="flex justify-center gap-1">
        <div className="flex items-center font-irandemibold ">
          {flexRender(header.column.columnDef.header, header.getContext())}
        </div>
        {header.column.getCanSort() && (
          <Button onClick={onSelect} type="sort">
            <ArrowArrowUp1Bold size={14} />
            <ArrowArrowDownBold size={14} />
          </Button>
        )}
      </div>
    </div>
  );
}
// header.column.getCanFilter()
