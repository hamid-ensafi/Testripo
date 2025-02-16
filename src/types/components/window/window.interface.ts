import { ReactNode } from "react";
import { styles } from "@/ui/Button";

export interface IContent {
  id: string;
  children: ReactNode;
  direction: "right" | "left";
}

export interface ISelection {
  id: string;
  children: ReactNode;
  type: keyof typeof styles;
}
