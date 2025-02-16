import { ReactNode } from "react";

export default function ColumnContentMangeTickets({children,}: {children: ReactNode;}): React.JSX.Element {
  return (
    <div className="text-center flex justify-center border-b py-6 hover:bg-tint-100">
      {children}
    </div>
  );
}
