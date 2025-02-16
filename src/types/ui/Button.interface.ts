import { ReactNode } from "react";
import { styles } from "@/ui/Button";
export interface IButton {
  children?: ReactNode;
  disabled?: boolean;
  to?: string;
  type: keyof typeof styles;
  onClick?: () => void;
  text?: string;
  id?: string | number;
  kind?: "reset" | "button" | "submit" ;
}