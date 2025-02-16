import jalaali from "jalaali-js";
export function TextShorten(text: string): string {
  const newText = text.split(" ").slice(0, 6).join(" ") + "...";
  return newText;
}

export function formatDate(dateString: string) {
  const date = new Date(dateString);
  const jalaaliDate = jalaali.toJalaali(
    date.getFullYear(),
    date.getMonth() + 1,
    date.getDate()
  );
  return `${jalaaliDate.jy}/${jalaaliDate.jm}/${jalaaliDate.jd}`;
}
