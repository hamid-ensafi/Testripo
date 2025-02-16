import { IResult } from "@/types/feature/ManageTickets/ManageTickets.interface";
import { Cell, flexRender } from "@tanstack/react-table";

 export default function RowContentMangeTickets({cell,}: {
  cell: Cell<IResult, unknown>;}): React.JSX.Element {
  return (
    <div
      className="flex items-center justify-center text-sm"
      key={cell.id}
      style={{ width: `${cell.column.getSize()}px` }}
    >
      {flexRender(cell.column.columnDef.cell, cell.getContext())}
    </div>
  );
}
