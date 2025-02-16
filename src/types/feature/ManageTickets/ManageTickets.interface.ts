export interface ITicket {
  count: number;
  next: string | null;
  previous: string | null;
  results: IResult[];
}
export interface IResult {
  id: number | string;
  user: number | string;
  source_group: number | null;
  source_group_data: number | null;
  title: string;
  group: number;
  group_data: number | null;
  priority: "LOW" | "MEDIUM" | "HIGH";
  is_open: boolean;
  tracking_code: string;
  is_group_ticket: boolean;
  updated_at: string;
  created_at: string;
  status: "OPEN" | "IN_PROGRESS" | "CLOSED";
}
