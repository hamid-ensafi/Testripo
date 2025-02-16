import { IButton } from "@/types/ui/Button.interface";

export const styles = {
  dropdown: "flex items-center gap-1",
  iconmob: "bg-white w-10 h-10  rounded-full",
  icondesk: "bg-white w-12 h-12  rounded-full",
  simple: "",
  close: "rotate-45 text-grayprime-600",
  sort:'flex flex-col text-grayprime-700'
};

function Button({ children, type, text, onClick = () => null }: IButton) {
  if (text) {
    return (
      <button onClick={onClick} className={styles[type]}>
        <span>{text}</span>
        {children}
      </button>
    );
  }
  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}
export default Button;
