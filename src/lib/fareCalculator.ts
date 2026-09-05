export interface FareCalculationInput {
  pickup?: string;
  drop?: string;
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
  "Toyota Etios": 12,
  "Honda Amaze": 12,
  Sedan: 12,
  Ertiga: 15,
  "Maruti Ertiga": 15,
  "Kia Carens": 16,
  Carens: 16,
  SUV: 15,
  Innova: 18,
  "Toyota Innova": 18,
  "Innova Crysta": 20,
  "Toyota Innova Crysta": 20,
  "Tempo Traveller": 26,
  "Force Urbania": 30,
  Urbania: 30,
  "Mini Bus": 35,
  "Luxury Bus": 35,
};

export const categoryRates: Record<string, number> = {
  economy: 0,
  standard: 0,
  business: 0,
};

export const extraPrices: Record<string, number> = {
  "Child Seat": 200,
  "Extra Luggage": 300,
  "Meet & Greet": 400,
  "Pet Friendly": 250,
  Wheelchair: 0,
  "Roof Carrier": 350,
};

const knownDistances: { pattern: RegExp; distance: number }[] = [
  { pattern: /ayodhya/i, distance: 135 },
  { pattern: /kanpur/i, distance: 95 },
  { pattern: /prayagraj|allahabad/i, distance: 200 },
  { pattern: /varanasi|banaras|kashi/i, distance: 320 },
  { pattern: /gorakhpur/i, distance: 270 },
  { pattern: /agra/i, distance: 335 },
  { pattern: /delhi|noida|gurgaon|gurugram/i, distance: 550 },
  { pattern: /bareilly/i, distance: 250 },
  { pattern: /jhansi/i, distance: 315 },
  { pattern: /aligarh/i, distance: 360 },
  { pattern: /mathura|vrindavan/i, distance: 390 },
  { pattern: /nainital/i, distance: 380 },
  { pattern: /nepal|pokhara|kathmandu/i, distance: 450 },
  { pattern: /airport/i, distance: 25 },
  { pattern: /charbagh|railway/i, distance: 15 },
];

export function getEstimatedDistance(
  pickup?: string,
  drop?: string,
  serviceType?: string
): number {
  if (!pickup?.trim() || !drop?.trim()) {
    return 0;
  }

  const combined = `${pickup} ${drop}`;
  let dist = 120; // default for intercity one-way if cities not recognized

  for (const item of knownDistances) {
    if (item.pattern.test(combined)) {
      dist = item.distance;
      break;
    }
  }

  if (serviceType === "Round Trip") {
    dist = dist * 2;
  } else if (serviceType === "Local Rental") {
    dist = 80;
  } else if (serviceType === "Airport Transfer") {
    dist = Math.min(dist, 40);
    if (dist < 15) dist = 25;
  }

  return dist;
}

export function calculateFare(input: FareCalculationInput): FareCalculationResult {
  const pickup = input.pickup ?? "";
  const drop = input.drop ?? "";
  const vehicle = input.vehicle ?? "Swift Dzire";
  const category = input.category ?? "standard";
  const extras = input.extras ?? [];
  const serviceType = input.serviceType ?? "One Way";

  const hasLocations = Boolean(pickup.trim() && drop.trim());
  const distance =
    input.distance !== undefined
      ? input.distance
      : hasLocations
      ? getEstimatedDistance(pickup, drop, serviceType)
      : 0;

  const ratePerKm = vehicleRates[vehicle] ?? 12;
  const baseFare = distance > 0 ? distance * ratePerKm : 0;
  const categoryFare = 0;

  const extrasFare =
    distance > 0
      ? extras.reduce((total, item) => total + (extraPrices[item] || 0), 0)
      : 0;

  const serviceCharge = 0;
  const driverAllowance = 0;
  const toll = 0;
  const gst = 0;

  const total = baseFare + extrasFare;

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
