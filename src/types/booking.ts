export type VehicleCategory = "economy" | "standard" | "business";

export type PaymentType =
  | "PAY_NOW"
  | "ADVANCE"
  | "PAY_AFTER_TRIP";

export interface BookingData {
  customerName: string;
  phone: string;
  email: string;

  pickup: string;
  drop: string;

  serviceType: string;

  category: VehicleCategory;

  vehicle: string;

  extras: string[];

  travelDate: string;
  travelTime: string;

  passengers: number;

  payment: PaymentType;

  specialNote: string;
}