export interface FareCalculationInput {
  vehicle?: string;
  category?: "economy" | "standard" | "business";
  extras?: string[];
  serviceType?: string;
  distance?: number;
}

export interface FareCalculationResult {
  distance: number;
  ratePerKm: number;
  baseFare: number;
  categoryFare: number;
  extrasFare: number;
  serviceCharge: number;
  driverAllowance: number;
  toll: number;
  gst: number;
  total: number;
  advanceAmount: number; // 20%
  remainingAmount: number; // 80%
}

export const vehicleRates: Record<string, number> = {
  "Swift Dzire": 12,
  Sedan: 12,
  Ertiga: 15,
  SUV: 15,
  Innova: 18,
  "Innova Crysta": 20,
  "Tempo Traveller": 26,
  "Force Urbania": 30,
  Urbania: 30,
  "Mini Bus": 35,
};

export const categoryRates: Record<string, number> = {
  economy: 0,
  standard: 200,
  business: 600,
};

export const extraPrices: Record<string, number> = {
  "Child Seat": 200,
  "Extra Luggage": 300,
  "Meet & Greet": 400,
  "Pet Friendly": 250,
  Wheelchair: 0,
  "Roof Carrier": 350,
};

export function calculateFare(input: FareCalculationInput): FareCalculationResult {
  const distance = input.distance ?? 120;
  const vehicle = input.vehicle ?? "Swift Dzire";
  const category = input.category ?? "standard";
  const extras = input.extras ?? [];
  const serviceType = input.serviceType ?? "One Way";

  const ratePerKm = vehicleRates[vehicle] ?? 12;
  const baseFare = distance * ratePerKm;
  const categoryFare = categoryRates[category] ?? 0;

  const extrasFare = extras.reduce(
    (total, item) => total + (extraPrices[item] || 0),
    0
  );

  let serviceCharge = 0;
  if (serviceType === "Airport Transfer") serviceCharge = 200;
  else if (serviceType === "Round Trip") serviceCharge = 400;

  const driverAllowance = distance > 150 ? 400 : 0;
  const toll = 150;

  const subtotal = baseFare + categoryFare + extrasFare + serviceCharge + driverAllowance + toll;
  const gst = Math.round(subtotal * 0.05);
  const total = subtotal + gst;

  const advanceAmount = Math.round(total * 0.2);
  const remainingAmount = total - advanceAmount;

  return {
    distance,
    ratePerKm,
    baseFare,
    categoryFare,
    extrasFare,
    serviceCharge,
    driverAllowance,
    toll,
    gst,
    total,
    advanceAmount,
    remainingAmount,
  };
}
