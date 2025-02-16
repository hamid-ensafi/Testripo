import { IType } from "@/types/ui/Status.interface";

export default function Status({StatusCode}:{StatusCode:keyof  IType}): JSX.Element {
    const base = "py-1.5 px-2 w-full rounded-md block max-w-[90px] ";

  const type:IType = {
    IN_PROGRESS: {
      name: "در حال برسی ",
      class: base + "bg-orange-100 text-orange-200",
    },
    OPEN: {
      name: "باز ",
      class: base + "bg-success-100 text-success-200",
    },
    CLOSED: {
      name: "بسته شده  ",
      class: base + "bg-close-100 text-close-200",
    },
  };
  return <span className={type[StatusCode].class}>{type[StatusCode].name}</span>;
}
