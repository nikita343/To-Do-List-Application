export interface Task {
  id: number;
  title: string;
  status: boolean;
}
export type FilterType = "total" | "active" | "completed";
