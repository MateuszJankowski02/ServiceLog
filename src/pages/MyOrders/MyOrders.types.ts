export type MyOrdersProps = Record<string, never>;

export type OrderStatus = "active" | "completed";

export type OrderReport = {
  mileage: number;
  partsReplaced: string[];
  workPerformed: string;
  cost: number;
};

export type Order = {
  id: string;
  vehicle: string;
  mechanic: string;
  date: string;
  status: OrderStatus;
  report?: OrderReport;
};
