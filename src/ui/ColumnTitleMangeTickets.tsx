import { ReactNode } from "react";

export default function ColumnTitleMangeTickets({children,}: {children: ReactNode;}): React.JSX.Element {
  return <div className="flex justify-center py-6">{children}</div>;
}
