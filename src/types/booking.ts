export type VehicleCategory = "economy" | "standard" | "business";

export interface BookingData {
  customerName: string;
  phone: string;
  email: string;

  pickup: string;
  drop: string;

  serviceType: string;

  // NEW
  category: VehicleCategory;

  vehicle: string;

  // NEW
  extras: string[];

  travelDate: string;
  travelTime: string;

  passengers: number;

  payment: "PAY_NOW" | "ADVANCE" | "PAY_AFTER_TRIP";

  specialNote: string;
}