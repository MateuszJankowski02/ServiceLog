export type VehicleHistoryProps = Record<string, never>;

export type ServiceCategory = "inspection" | "parts" | "repair" | "maintenance";

export type ServiceEntry = {
  id: string;
  category: ServiceCategory;
  name: string;
  date: string;
  mileage: number;
  provider: string;
  verifiedMechanic: boolean;
  cost: number;
};

export type CategoryFilter = "all" | ServiceCategory;
