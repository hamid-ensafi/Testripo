import { useGetTickets } from "@/hooks/feature/ManageTickets/useGetTickets";
import { IResult } from "@/types/feature/ManageTickets/ManageTickets.interface";
import { IPriorityMap } from "@/types/ui/Priority.interface";
import { IType } from "@/types/ui/Status.interface";
import ColumnContentMangeTickets from "@/ui/ColumnContentMangeTickets";
import ColumnTitleMangeTickets from "@/ui/ColumnTitleMangeTickets";
import Priority from "@/ui/Priority";
import RowContentMangeTickets from "@/ui/RowContentMangeTickets";
import RowTitleMangeTickets from "@/ui/RowTitleMangeTickets";
import Status from "@/ui/Status";
import { formatDate } from "@/utils/helper";
import {
  getCoreRowModel,
  useReactTable,
  ColumnDef,
  getFilteredRowModel,
  SortingState,
  Header,
} from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { SearchSearchNormalOutline } from "react-icons-sax";
import { useSearchParams } from "react-router-dom";

const columns: ColumnDef<IResult>[] = [
  {
    accessorKey: "id",
    header: "شماره",
    cell: (props) => <p>{props.getValue<string>()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "title",
    header: "عنوان",
    cell: (props) => <p>{props.getValue<string>()}</p>,
    enableSorting: false,
  },
  {
    accessorKey: "priority",
    header: "اولویت",
    cell: (props) => (
      <Priority priorityLevel={props.getValue<keyof IPriorityMap>()} />
    ),
    enableSorting: true,
  },
  {
    accessorKey: "tracking_code",
    header: "دپارتمان",
    cell: (props) => <p>{props.getValue<string>()}</p>,
    enableSorting: true,
  },
  {
    accessorKey: "status",
    header: "وضعیت",
    cell: (props) => (
      <Status StatusCode={props.getValue<keyof IType>()}></Status>
    ),
    enableSorting: true,
  },
  {
    accessorKey: "created_at",
    header: "تاریخ ایجاد",
    cell: (props) => <p>{formatDate(props.getValue<string>())}</p>,
    enableSorting: true,
  },
  {
    accessorKey: "updated_at",
    header: "تاریخ بروزرسانی",
    cell: (props) => <p>{formatDate(props.getValue<string>())}</p>,
    enableSorting: false,
  },
];

function ManageTickets(): JSX.Element {
  const [sorting, setSorting] = useState<SortingState>([
    { id: "priority", desc: true },
  ]);
  const [, setSearch] = useSearchParams();
  const { Tickets, isLoading } = useGetTickets();
  const data: IResult[] = Tickets?.results ?? [];
  console.log(isLoading);

  useEffect(() => {
    setSearch({
      ordering: `${sorting[0].desc ? `-${sorting[0].id}` : `${sorting[0].id}`}`,
    });
  }, [sorting]);

  function handleSort(header: Header<IResult, unknown>) {
    setSorting((current) => {
      const isExit = current.some((item) => item.id === header.id);
      if (isExit) {
        return current.map((item) =>
          header.id === item.id ? { ...item, desc: !item.desc } : item
        );
      }
      return [{ ...current, id: header.id, desc: true }];
    });
  }

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
    },
    manualSorting: true,
    onSortingChange: setSorting,
  });

  return (
    <div className="bg-white flex flex-col  justify-center rounded-lg ss01 overflow-x-auto scrollbar w-full h-full">
      <div className=" w-2/3 lg:w-[35%] p-6">
        <div className=" flex  items-center  relative border border-grayprime-300 rounded-xl">
          <div className="text-primery-default px-2.5">
            <SearchSearchNormalOutline size={18} />
          </div>
          <input
            className="px-2.5 w-full  py-3"
            type="text"
            placeholder="جستجو ...."
          />
        </div>
      </div>
      <div style={{ width: `${table.getTotalSize()}px` }}>
        <div>
          {table.getHeaderGroups().map((headerGroup) => (
            <ColumnTitleMangeTickets key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <RowTitleMangeTickets
                  onSelect={() => handleSort(header)}
                  key={header.id}
                  header={header}
                />
              ))}
            </ColumnTitleMangeTickets>
          ))}
        </div>
        <div>
          {table.getRowModel().rows.map((row) => (
            <ColumnContentMangeTickets key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <RowContentMangeTickets key={cell.id} cell={cell} />
              ))}
            </ColumnContentMangeTickets>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ManageTickets;
