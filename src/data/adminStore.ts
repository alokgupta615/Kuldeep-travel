// ============================================================================
// Kuldeep Travels - Master Admin Store & Data Manager
// Handles Vehicles (Fleet), Destinations, Tour Packages, Fare Pricing,
// Customer Bookings/Leads CRM, and Company Settings.
// ============================================================================

export interface AdminVehicle {
  id: string;
  name: string;
  categoryName: string;
  image: string;
  seats: string;
  luggage: string;
  ac: string;
  price: string;
  ratePerKm: number;
  tag: string;
  tagColor: string;
  vehicleClass: string;
  fuelType: string;
  bestFor: string;
  seatingDetails: string;
  luggageDetails: string;
  amenities: string[];
  idealFor: string[];
  highlights: string[];
  isActive: boolean;
}

export interface AdminDestination {
  id: string;
  name: string;
  distance: string;
  distanceKm: number;
  desc: string;
  startingRate: string;
  popularSpots: string[];
  tag?: string;
  isFeatured?: boolean;
}

export interface AdminTourPackage {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  distance: string;
  badge?: string;
  highlights: string[];
  prices: {
    sedan: { original: number; discount: number };
    ertiga: { original: number; discount: number };
    innovaCrysta: { original: number; discount: number };
    tempoTraveller?: { original: number; discount: number };
  };
  isActive?: boolean;
}

export interface AdminPricingSettings {
  vehicleRates: Record<string, number>;
  extraPrices: Record<string, number>;
  advancePercentage: number;
  gstPercentage: number;
  driverAllowancePerDay: number;
  nightAllowance: number;
}

export interface AdminBooking {
  id: string;
  bookingId: string;
  customerName: string;
  phone: string;
  email: string;
  pickup: string;
  drop: string;
  travelDate: string;
  travelTime: string;
  passengers: number;
  serviceType: string;
  vehicle: string;
  paymentMethod: string;
  paymentStatus: "PENDING" | "PAID" | "ADVANCE_PAID" | "PAY_AFTER_TRIP";
  bookingStatus: "PENDING" | "CONFIRMED" | "ASSIGNED" | "COMPLETED" | "CANCELLED";
  distance: number;
  rate: number;
  baseFare: number;
  totalFare: number;
  paidAmount: number;
  remainingAmount: number;
  specialNote?: string;
  driverName?: string;
  driverPhone?: string;
  vehicleNumber?: string;
  createdAt: string;
}

export interface AdminCompanySettings {
  companyName: string;
  tagline: string;
  phone1: string;
  phone2: string;
  whatsapp: string;
  email: string;
  addressHeadOffice: string;
  addressAirport: string;
  operatingHours: string;
  emergencyHelpline: string;
  upiId: string;
  adminPasscode: string;
}

// ============================================================================
// DEFAULT DATA INITIALIZERS
// ============================================================================

export const DEFAULT_VEHICLES: AdminVehicle[] = [
  {
    id: "Swift Dzire",
    name: "Swift Dzire (CNG/Petrol)",
    categoryName: "Sedan Class",
    image: "/images/fleet/sedan.png",
    seats: "4 Seats",
    luggage: "2 Bags",
    ac: "Chilled AC",
    price: "₹12/km",
    ratePerKm: 12,
    tag: "Economical",
    tagColor: "bg-emerald-700",
    vehicleClass: "Prime Compact Sedan",
    fuelType: "CNG / Petrol",
    bestFor: "Couples, Solo Travelers & Small Families (Up to 4 Pax)",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Plush ergonomic seats with ample legroom for city and highway rides.",
    luggageDetails: "2 Large Suitcases + 2 Handbags in dedicated boot space (378L).",
    amenities: [
      "Chilled Air Conditioning (AC)",
      "USB Fast Mobile Charging",
      "Clean & Sanitized Interiors",
      "Bluetooth / AUX Music System",
      "Commercial GPS Safety Tracking",
    ],
    idealFor: [
      "Airport Pick & Drop (Lucknow CCSI)",
      "City Sightseeing & Daily Travel",
      "Outstation Trips (Kanpur, Ayodhya, Sitapur)",
    ],
    highlights: [
      "Most economical outstation taxi rate",
      "Smooth suspension for comfortable long drives",
      "Dedicated spacious boot space",
    ],
    isActive: true,
  },
  {
    id: "Toyota Etios",
    name: "Toyota Etios",
    categoryName: "Sedan Class",
    image: "/images/fleet/etios.jpg",
    seats: "4 Seats",
    luggage: "3 Bags",
    ac: "Chilled AC",
    price: "₹12/km",
    ratePerKm: 12,
    tag: "Comfortable Sedan",
    tagColor: "bg-teal-700",
    vehicleClass: "Spacious Sedan Class",
    fuelType: "Diesel / Petrol",
    bestFor: "Budget-conscious family road trips with luggage",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Extra wide rear seat comfort and flat rear floor.",
    luggageDetails: "Extra-large 592L boot space accommodating 3 large suitcases easily.",
    amenities: [
      "Chilled Air Conditioning",
      "Massive 592L Boot Capacity",
      "Clean Sanitized Cabin",
      "Smooth Highway Suspension",
      "USB Charging",
    ],
    idealFor: [
      "Outstation Taxi Trips",
      "Airport Transfers with Heavy Bags",
      "Corporate Travel",
    ],
    highlights: [
      "Largest boot space in sedan segment (592L)",
      "Extra legroom and flat rear floor",
      "High reliability on highways",
    ],
    isActive: true,
  },
  {
    id: "Honda Amaze",
    name: "Honda Amaze",
    categoryName: "Sedan Class",
    image: "/images/fleet/amaze.jpg",
    seats: "4 Seats",
    luggage: "2-3 Bags",
    ac: "Chilled AC",
    price: "₹12/km",
    ratePerKm: 12,
    tag: "Smooth Ride",
    tagColor: "bg-sky-700",
    vehicleClass: "Premium Compact Sedan",
    fuelType: "Petrol / Diesel",
    bestFor: "Smooth highway & local city commuting",
    seatingDetails:
      "4 Passengers + 1 Chauffeur. Elegant cabin with premium fabric upholstery.",
    luggageDetails: "420L boot storage fitting 2-3 travel suitcases.",
    amenities: [
      "Chilled Automatic AC",
      "Premium Audio System",
      "USB Power Ports",
      "Silent Cabin Insulation",
    ],
    idealFor: [
      "Corporate City Rides",
      "Family Weekend Getaways",
      "Day Tours from Lucknow",
    ],
    highlights: [
      "Premium smooth Japanese engineering ride",
      "Quiet and well-insulated cabin",
      "Generous 420L luggage boot",
    ],
    isActive: true,
  },
  {
    id: "Ertiga",
    name: "Maruti Ertiga (SUV/MUV)",
    categoryName: "Family MUV",
    image: "/images/fleet/ertiga.png",
    seats: "6 Seats",
    luggage: "3-4 Bags",
    ac: "Dual AC Blowers",
    price: "₹15/km",
    ratePerKm: 15,
    tag: "Most Popular",
    tagColor: "bg-blue-700",
    vehicleClass: "Spacious 6-Seater MPV",
    fuelType: "Petrol / Hybrid / CNG",
    bestFor: "Medium Families (5-6 Pax) with moderate luggage",
    seatingDetails:
      "6 Passengers + 1 Chauffeur. 3-row flexible seating with reclining 2nd row.",
    luggageDetails:
      "3-4 Bags in boot + Rooftop luggage carrier available for extra baggage.",
    amenities: [
      "Dual AC with 2nd Row Roof Blowers",
      "Foldable 3rd Row for Extra Boot",
      "USB Charging Ports in All Rows",
      "Child-Friendly & Senior-Friendly Ingress",
    ],
    idealFor: [
      "Family Pilgrimage (Ayodhya, Varanasi, Naimisharanya)",
      "Outstation Weekend Getaways",
      "Family Airport Drops",
    ],
    highlights: [
      "Top choice for 5-6 member families",
      "Roof AC blowers ensure quick cabin cooling",
      "Versatile seating and luggage flexibility",
    ],
    isActive: true,
  },
  {
    id: "Kia Carens",
    name: "Kia Carens",
    categoryName: "Modern MPV",
    image: "/images/fleet/carens.jpg",
    seats: "6 Seats",
    luggage: "4 Bags",
    ac: "Multi-Zone AC",
    price: "₹16/km",
    ratePerKm: 16,
    tag: "Modern MPV",
    tagColor: "bg-indigo-700",
    vehicleClass: "Premium 6-Seater RV",
    fuelType: "Turbo Petrol / Diesel",
    bestFor: "Modern family road trips desiring executive comfort",
    seatingDetails:
      "6 Passengers + 1 Chauffeur. One-touch electric tumble 2nd row seats.",
    luggageDetails: "4 Bags + Rooftop carrier option on demand.",
    amenities: [
      "Individual AC Vents for All 3 Rows",
      "Type-C Fast Charging in All Rows",
      "Silent Premium Cabin",
      "Air Purifier & Ambient Lighting",
    ],
    idealFor: [
      "Long Distance Highway Trips",
      "Executive Family Travel",
      "Ayodhya & Varanasi VIP Tours",
    ],
    highlights: [
      "Next-generation luxury cabin with ambient lighting",
      "Ultra-quiet highway cruising experience",
      "Dedicated air vents for every passenger row",
    ],
    isActive: true,
  },
  {
    id: "Innova",
    name: "Toyota Innova (Classic MPV)",
    categoryName: "Comfort MPV",
    image: "/images/fleet/innova.png",
    seats: "7 Seats",
    luggage: "4-5 Bags",
    ac: "Chilled AC",
    price: "₹18/km",
    ratePerKm: 18,
    tag: "Comfortable",
    tagColor: "bg-violet-700",
    vehicleClass: "Heavy-Duty Highway MPV",
    fuelType: "Powerful Diesel",
    bestFor: "Long Highway Road Trips & Joint Families (Up to 7 Pax)",
    seatingDetails:
      "7 Passengers + 1 Chauffeur. Generous shoulder room and cushioned bench/bucket seats across all 3 rows.",
    luggageDetails:
      "4-5 Suitcases in boot area + Heavy-Duty Rooftop Carrier included for excess family luggage.",
    amenities: [
      "High-Powered Triple-Zone Air Conditioning",
      "Heavy-Duty Suspension for Maximum Ride Comfort",
      "Silent Acoustic Cabin Insulation",
      "Reclining Seats in All 3 Rows",
      "Wide Door Openings for Comfortable Ingress",
      "Rugged Reliability on Rough Highway Sections",
    ],
    idealFor: [
      "Long Distance Outstation Trips (Delhi, Varanasi, Prayagraj)",
      "Hill Station Tours (Nainital, Mussoorie, Nepal)",
      "Family Vacations & Wedding Transport",
      "Multi-Day Round Trips",
    ],
    highlights: [
      "Legendary Toyota reliability and comfort",
      "High road stability for senior citizens",
      "Sturdy heavy-duty luggage carrier",
    ],
    isActive: true,
  },
  {
    id: "Innova Crysta",
    name: "Toyota Innova Crysta",
    categoryName: "Executive Class",
    image: "/images/fleet/innova.png",
    seats: "6-7 Seats",
    luggage: "5 Bags",
    ac: "Climate Control AC",
    price: "₹20/km",
    ratePerKm: 20,
    tag: "Executive Class",
    tagColor: "bg-slate-900",
    vehicleClass: "Executive Luxury MPV",
    fuelType: "Refined Turbo Diesel",
    bestFor: "VIPs, Corporate Executives & Luxury Family Travel",
    seatingDetails:
      "6-7 Passengers + 1 Chauffeur. Ultra-plush reclining captain chairs with armrests.",
    luggageDetails:
      "5 Large Suitcases + 3 Cabin Trolleys + Rooftop Carrier on request.",
    amenities: [
      "Multi-Zone Automatic Climate AC",
      "Leatherette Captain Seats with Armrests",
      "Acoustic Silent Insulated Cabin",
      "Advanced 7-Airbag Safety Suite",
    ],
    idealFor: [
      "Corporate Delegations & Business Travel",
      "VIP Pilgrimage (Kashi Vishwanath, Ayodhya)",
      "Interstate Tours (Lucknow to Nepal, Delhi)",
    ],
    highlights: [
      "First-class airline style captain chairs",
      "Top-tier highway safety & ultra-smooth ride",
      "Unrivaled executive comfort for long hours",
    ],
    isActive: true,
  },
  {
    id: "Tempo Traveller",
    name: "Tempo Traveller (17 & 26 Seater)",
    categoryName: "Group Van",
    image: "/images/fleet/tempo.png",
    seats: "17 & 26 Seats",
    luggage: "15+ Bags",
    ac: "Luxury AC",
    price: "₹26/km",
    ratePerKm: 26,
    tag: "Big Families",
    tagColor: "bg-amber-700",
    vehicleClass: "Luxury Force Tempo Traveller",
    fuelType: "Commercial Turbo Diesel",
    bestFor: "Joint Families, Pilgrimage Groups & Wedding Baraat (12-26 Pax)",
    seatingDetails:
      "12 / 17 / 20 / 26 Pushback Maharaja Reclining Seats + 1 Driver + 1 Helper.",
    luggageDetails:
      "Massive dedicated rear boot + Heavy-duty full roof luggage carrier.",
    amenities: [
      "Maharaja 2x1 Pushback Reclining Seats",
      "6ft+ Standing Headroom (Walk Freely Inside)",
      "LED TV Screen & High-Output Music System",
      "Individual AC Vents & Reading Lights for Each Row",
    ],
    idealFor: [
      "Group Pilgrimage Tours (Ayodhya, Varanasi, Prayagraj, Gaya)",
      "Wedding Baraat & Guest Transport",
      "Corporate Team Outings",
    ],
    highlights: [
      "Entire family travels together without splitting cars",
      "Pushback Maharaja chairs for maximum sleeping comfort",
      "Huge luggage holding capacity",
    ],
    isActive: true,
  },
  {
    id: "Force Urbania",
    name: "Force Urbania",
    categoryName: "Ultra Luxury Van",
    image: "/images/fleet/urbania.png",
    seats: "13-17 Seats",
    luggage: "12+ Bags",
    ac: "Individual AC",
    price: "₹30/km",
    ratePerKm: 30,
    tag: "Ultra Luxury",
    tagColor: "bg-purple-900",
    vehicleClass: "Next-Gen European Luxury Van",
    fuelType: "Euro-6 Clean Diesel",
    bestFor: "International Tourists, VIP Delegations & Luxury Groups",
    seatingDetails:
      "13 to 17 Ergonomic Ultra-Luxury Reclining Seats with Armrests.",
    luggageDetails:
      "Deep integrated rear luggage hold + Airplane-style overhead racks.",
    amenities: [
      "Aircraft-Style Individual Air Vents & Reading Lights",
      "Panoramic Extra-Large View Windows",
      "Air Suspension for Zero Highway Jerks",
      "Individual USB Fast Charging Port at Every Seat",
    ],
    idealFor: [
      "Foreign Tourist Delegations",
      "Heritage Circuits & Golden Triangle Road Trips",
      "High-Profile Corporate Retreats",
    ],
    highlights: [
      "World-class European luxury van experience",
      "Ultra-panoramic glass windows for scenic routes",
      "Whisper-quiet air suspension for seamless comfort",
    ],
    isActive: true,
  },
  {
    id: "Mini Bus",
    name: "Luxury Bus / Coach",
    categoryName: "Luxury Coach",
    image: "/images/fleet/bus.png",
    seats: "35 & 50 Seats",
    luggage: "Large Storage",
    ac: "Luxury High-Power AC",
    price: "₹35/km",
    ratePerKm: 35,
    tag: "Group Events",
    tagColor: "bg-teal-800",
    vehicleClass: "Commercial Luxury Coach",
    fuelType: "Heavy Commercial Diesel",
    bestFor: "Large Groups, Destination Weddings & Corporate Tours",
    seatingDetails:
      "35 to 50 High-Back Reclining Pushback Seats with Padded Headrests.",
    luggageDetails:
      "Massive underbody belly luggage lockers + Rear trunk space.",
    amenities: [
      "High-Capacity Centralized Roof AC",
      "PA System with Mic for Tour Guides",
      "High-End Audio/Video Entertainment",
      "Tinted UV-Protection Windows with Curtains",
    ],
    idealFor: [
      "Destination Wedding Guest Transport & Baraat",
      "School & College Educational Excursions",
      "Multi-Day North India Tourist Circuits",
    ],
    highlights: [
      "Lowest cost per passenger for large groups",
      "PA audio system for guide announcements",
      "Huge underbody luggage storage lockers",
    ],
    isActive: true,
  },
];

export const DEFAULT_DESTINATIONS: AdminDestination[] = [
  {
    id: "lucknow-local",
    name: "Lucknow City",
    distance: "Local City & Sightseeing",
    distanceKm: 80,
    desc: "Bara Imambara, Chhota Imambara, Rumi Darwaza, Clock Tower & Hazratganj heritage tours.",
    startingRate: "Starting ₹2,000 / Day",
    popularSpots: ["Bara Imambara", "Rumi Darwaza", "Clock Tower", "Hazratganj", "Ambedkar Park"],
    tag: "Local Heritage",
    isFeatured: true,
  },
  {
    id: "ayodhya",
    name: "Ayodhya Ram Janmabhoomi",
    distance: "135 KM from Lucknow",
    distanceKm: 135,
    desc: "Shri Ram Janmabhoomi Mandir, Hanuman Garhi, Saryu Ghat Aarti & Kanak Bhawan.",
    startingRate: "Starting ₹3,240 One-Way",
    popularSpots: ["Ram Janmabhoomi", "Hanuman Garhi", "Saryu Ghat", "Kanak Bhawan", "Surya Stambh"],
    tag: "Spiritual Top",
    isFeatured: true,
  },
  {
    id: "kanpur",
    name: "Kanpur",
    distance: "85 KM from Lucknow",
    distanceKm: 85,
    desc: "Industrial, corporate, shopping, JK Temple and Bithoor religious travel.",
    startingRate: "Starting ₹2,040 One-Way",
    popularSpots: ["JK Temple", "Bithoor Ghat", "Z Square Mall", "Allen Forest Zoo"],
    tag: "Business & Hub",
    isFeatured: true,
  },
  {
    id: "prayagraj",
    name: "Prayagraj (Allahabad)",
    distance: "205 KM from Lucknow",
    distanceKm: 205,
    desc: "Triveni Sangam holy dip, Anand Bhavan, Alopi Devi Temple & Bade Hanuman Ji.",
    startingRate: "Starting ₹4,920 One-Way",
    popularSpots: ["Triveni Sangam", "Anand Bhavan", "Alopi Devi", "Bade Hanuman Ji"],
    tag: "Triveni Sangam",
    isFeatured: true,
  },
  {
    id: "varanasi",
    name: "Varanasi (Kashi / Banaras)",
    distance: "320 KM from Lucknow",
    distanceKm: 320,
    desc: "Kashi Vishwanath Jyotirlinga, Dashashwamedh Ghat Aarti, Assi Ghat & Sarnath.",
    startingRate: "Starting ₹7,680 One-Way",
    popularSpots: ["Kashi Vishwanath", "Ganga Aarti", "Assi Ghat", "Sarnath", "BHU"],
    tag: "Holy City",
    isFeatured: true,
  },
  {
    id: "gorakhpur",
    name: "Gorakhpur & Kushinagar",
    distance: "270 KM from Lucknow",
    distanceKm: 270,
    desc: "Gorakhnath Temple, Gita Press, and gateway to Kushinagar & Nepal.",
    startingRate: "Starting ₹6,480 One-Way",
    popularSpots: ["Gorakhnath Temple", "Gita Press", "Ramgarh Taal", "Kushinagar Stupa"],
    tag: "Direct Highway",
    isFeatured: false,
  },
  {
    id: "chitrakoot",
    name: "Chitrakoot",
    distance: "230 KM from Lucknow",
    distanceKm: 230,
    desc: "Kamadgiri Parikrama, Ramghat, Gupt Godavari, Sphatik Shila & Bharat Milap.",
    startingRate: "Starting ₹5,520 One-Way",
    popularSpots: ["Kamadgiri", "Ramghat", "Gupt Godavari", "Hanuman Dhara"],
    tag: "Ramayana Circuit",
    isFeatured: false,
  },
  {
    id: "naimisharanya",
    name: "Naimisharanya (Neemsar)",
    distance: "90 KM from Lucknow",
    distanceKm: 90,
    desc: "Chakra Tirtha, Lalita Devi Temple, Vyas Gaddi & holy 84 Kosi Parikrama.",
    startingRate: "Starting ₹2,160 One-Way",
    popularSpots: ["Chakra Tirtha", "Lalita Devi Temple", "Vyas Gaddi", "Hanuman Garhi"],
    tag: "Vedic Sanctity",
    isFeatured: true,
  },
  {
    id: "agra",
    name: "Agra (Taj Mahal & Fort)",
    distance: "335 KM from Lucknow",
    distanceKm: 335,
    desc: "World wonder Taj Mahal, Agra Fort, Fatehpur Sikri via Lucknow-Agra Expressway.",
    startingRate: "Starting ₹8,040 One-Way",
    popularSpots: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Mehtab Bagh"],
    tag: "Agra Expressway",
    isFeatured: true,
  },
  {
    id: "nainital",
    name: "Nainital & Kumaon Hills",
    distance: "420 KM from Lucknow",
    distanceKm: 420,
    desc: "Lake district of Kumaon, boating, cable car, high altitude zoo & Himalayan views.",
    startingRate: "Starting ₹10,080 One-Way",
    popularSpots: ["Naini Lake", "Mall Road", "Naina Devi Temple", "Bhimtal", "Snow View"],
    tag: "Hill Station",
    isFeatured: true,
  },
  {
    id: "nepal",
    name: "Nepal (Kathmandu / Pokhara / Lumbini)",
    distance: "450 KM from Lucknow",
    distanceKm: 450,
    desc: "Cross-border authorized tourist cab with Bhansar permit. Kathmandu, Pokhara, Lumbini.",
    startingRate: "Custom Cross-Border Quote",
    popularSpots: ["Pashupatinath", "Phewa Lake", "Lumbini Birthplace", "Swayambhunath"],
    tag: "International Tour",
    isFeatured: true,
  },
];

export const DEFAULT_PACKAGES: AdminTourPackage[] = [
  {
    id: "lucknow-city-tour",
    name: "Lucknow City Tour",
    subtitle: "Full Day Heritage & City Sightseeing",
    duration: "8 Hours",
    distance: "80 KM Included",
    badge: "Most Popular Local",
    highlights: [
      "Bara Imambara & Bhool Bhulaiya",
      "Chhota Imambara & Rumi Darwaza",
      "Clock Tower & Picture Gallery",
      "Ambedkar Memorial Park",
      "Hazratganj Shopping & Street Food",
    ],
    prices: {
      sedan: { original: 2500, discount: 2000 },
      ertiga: { original: 3000, discount: 2500 },
      innovaCrysta: { original: 3500, discount: 3000 },
      tempoTraveller: { original: 6500, discount: 5500 },
    },
    isActive: true,
  },
  {
    id: "outstation-1day",
    name: "Outstation 1-Day Rental",
    subtitle: "Intercity Day Return Travel",
    duration: "1 Day",
    distance: "250 KM Included",
    badge: "Flexible Route",
    highlights: [
      "Customizable to Kanpur, Ayodhya, Sitapur or Unnao",
      "Verified highway chauffeur with luggage assistance",
      "Chilled AC and well-sanitized vehicle",
      "Doorstep pickup & drop anywhere in Lucknow",
    ],
    prices: {
      sedan: { original: 3500, discount: 3000 },
      ertiga: { original: 4500, discount: 3500 },
      innovaCrysta: { original: 5500, discount: 4500 },
      tempoTraveller: { original: 9500, discount: 8000 },
    },
    isActive: true,
  },
  {
    id: "lucknow-to-ayodhya",
    name: "Lucknow → Ayodhya Ram Mandir",
    subtitle: "Same-Day Sacred Pilgrimage Tour",
    duration: "12 Hours",
    distance: "360 KM Round Trip",
    badge: "Top Spiritual Tour",
    highlights: [
      "Shri Ram Janmabhoomi Mandir Darshan",
      "Hanuman Garhi & Kanak Bhawan",
      "Saryu Ghat Evening Aarti & Holy Dip",
      "Lata Mangeshkar Chowk & Surya Stambh",
      "Complete toll & driver allowance available",
    ],
    prices: {
      sedan: { original: 6500, discount: 4500 },
      ertiga: { original: 8500, discount: 5500 },
      innovaCrysta: { original: 10500, discount: 7500 },
      tempoTraveller: { original: 14500, discount: 12000 },
    },
    isActive: true,
  },
  {
    id: "lucknow-to-taj-mahal",
    name: "Lucknow → Taj Mahal / Agra",
    subtitle: "Same Day Return via Expressway",
    duration: "Same Day Return",
    distance: "670 KM Round Trip",
    badge: "Agra Expressway",
    highlights: [
      "Smooth travel via Agra-Lucknow Expressway",
      "Taj Mahal & Agra Fort Sightseeing",
      "Mehtab Bagh & Marble Handicraft market",
      "Experienced highway driver for non-stop comfort",
    ],
    prices: {
      sedan: { original: 17500, discount: 12500 },
      ertiga: { original: 23500, discount: 16500 },
      innovaCrysta: { original: 27500, discount: 19500 },
      tempoTraveller: { original: 38000, discount: 29000 },
    },
    isActive: true,
  },
  {
    id: "lucknow-to-nainital",
    name: "Lucknow → Nainital Tour",
    subtitle: "3-Day Scenic Hill Station Getaway",
    duration: "3 Days / 2 Nights",
    distance: "1000 KM Included",
    badge: "Himalayan Holiday",
    highlights: [
      "Naini Lake Boating & Mall Road Stroll",
      "Naina Devi Temple & Snow View Point",
      "Bhimtal, Sattal & Naukuchiatal Excursion",
      "Comfortable mountain-drive trained chauffeurs",
    ],
    prices: {
      sedan: { original: 25000, discount: 20000 },
      ertiga: { original: 28000, discount: 25000 },
      innovaCrysta: { original: 37500, discount: 30500 },
      tempoTraveller: { original: 55000, discount: 45000 },
    },
    isActive: true,
  },
  {
    id: "kashi-prayagraj-ayodhya",
    name: "Trilok Dham (Varanasi - Prayagraj - Ayodhya)",
    subtitle: "4-Day Sacred UP Spiritual Circuit",
    duration: "4 Days / 3 Nights",
    distance: "1200 KM Included",
    badge: "Most Revered Circuit",
    highlights: [
      "Kashi Vishwanath Corridor & Ganga Aarti",
      "Triveni Sangam Snan in Prayagraj",
      "Shri Ram Janmabhoomi & Saryu Aarti Ayodhya",
      "Dedicated senior citizen friendly chauffeur",
    ],
    prices: {
      sedan: { original: 28000, discount: 23000 },
      ertiga: { original: 35000, discount: 29000 },
      innovaCrysta: { original: 45000, discount: 38000 },
      tempoTraveller: { original: 65000, discount: 54000 },
    },
    isActive: true,
  },
];

export const DEFAULT_PRICING: AdminPricingSettings = {
  vehicleRates: {
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
  },
  extraPrices: {
    "Child Seat": 200,
    "Extra Luggage": 300,
    "Meet & Greet": 400,
    "Pet Friendly": 250,
    Wheelchair: 0,
    "Roof Carrier": 350,
  },
  advancePercentage: 20,
  gstPercentage: 0,
  driverAllowancePerDay: 400,
  nightAllowance: 300,
};

export const DEFAULT_BOOKINGS: AdminBooking[] = [
  {
    id: "KT10928371",
    bookingId: "KT10928371",
    customerName: "Rahul Sharma",
    phone: "+91 98765 43210",
    email: "rahul.sharma@example.com",
    pickup: "Alambagh, Lucknow",
    drop: "Ayodhya Ram Mandir",
    travelDate: "2026-09-30",
    travelTime: "06:30 AM",
    passengers: 4,
    serviceType: "Round Trip",
    vehicle: "Swift Dzire",
    paymentMethod: "UPI / Online Advance",
    paymentStatus: "ADVANCE_PAID",
    bookingStatus: "CONFIRMED",
    distance: 270,
    rate: 12,
    baseFare: 3240,
    totalFare: 3240,
    paidAmount: 650,
    remainingAmount: 2590,
    specialNote: "Need morning pickup on time, family trip for temple darshan.",
    driverName: "Suresh Kumar",
    driverPhone: "+91 99364 08109",
    vehicleNumber: "UP 32 BK 4521",
    createdAt: "2026-09-27T10:15:00Z",
  },
  {
    id: "KT10928372",
    bookingId: "KT10928372",
    customerName: "Dr. Ananya Mishra",
    phone: "+91 94500 12345",
    email: "ananya.m@example.com",
    pickup: "Gomti Nagar, Lucknow",
    drop: "Varanasi Kashi Vishwanath",
    travelDate: "2026-10-02",
    travelTime: "05:00 AM",
    passengers: 6,
    serviceType: "Round Trip",
    vehicle: "Innova Crysta",
    paymentMethod: "Pay After Trip",
    paymentStatus: "PAY_AFTER_TRIP",
    bookingStatus: "PENDING",
    distance: 640,
    rate: 20,
    baseFare: 12800,
    totalFare: 12800,
    paidAmount: 0,
    remainingAmount: 12800,
    specialNote: "Senior citizen aboard, please ensure smooth driving and AC.",
    createdAt: "2026-09-27T14:30:00Z",
  },
  {
    id: "KT10928373",
    bookingId: "KT10928373",
    customerName: "Vikram Malhotra",
    phone: "+91 88001 99887",
    email: "vikram@malhotratech.com",
    pickup: "Lucknow Airport (CCSI)",
    drop: "Kanpur Civil Lines",
    travelDate: "2026-09-29",
    travelTime: "08:15 PM",
    passengers: 2,
    serviceType: "One Way",
    vehicle: "Ertiga",
    paymentMethod: "Card / Razorpay",
    paymentStatus: "PAID",
    bookingStatus: "ASSIGNED",
    distance: 85,
    rate: 15,
    baseFare: 1275,
    totalFare: 1675,
    paidAmount: 1675,
    remainingAmount: 0,
    specialNote: "Flight arriving terminal 3. Need Meet & Greet with name placard.",
    driverName: "Dinesh Yadav",
    driverPhone: "+91 88018 42859",
    vehicleNumber: "UP 32 ET 9901",
    createdAt: "2026-09-27T18:45:00Z",
  },
];

export const DEFAULT_COMPANY_SETTINGS: AdminCompanySettings = {
  companyName: "Kuldeep Travels",
  tagline: "Premier Car Rental & Tour Operator in Lucknow",
  phone1: "+91 99364 08109",
  phone2: "+91 88018 42859",
  whatsapp: "+91 99364 08109",
  email: "kuldeeptravels3651@gmail.com",
  addressHeadOffice:
    "Bagh No. 2, Transport Nagar Metro Station, Kanpur Road, Behsa, Lucknow – 226012",
  addressAirport:
    "Near CCSI International Airport, Transport Nagar, Lucknow – 226008",
  operatingHours: "24 Hours / 7 Days Open",
  emergencyHelpline: "+91 99364 08109",
  upiId: "9936408109@upi",
  adminPasscode: "Kuldeep@Travels#3651",
};


// ============================================================================
// LOCAL STORAGE KEYS & DATA ACCESS HELPERS
// ============================================================================

export const STORAGE_KEYS = {
  VEHICLES: "kt_admin_vehicles_v1",
  DESTINATIONS: "kt_admin_destinations_v1",
  PACKAGES: "kt_admin_packages_v1",
  PRICING: "kt_admin_pricing_v1",
  BOOKINGS: "kt_admin_bookings_v1",
  SETTINGS: "kt_admin_settings_v1",
  AUTH: "kt_admin_auth",
};

// Safe localStorage accessor
function isBrowser(): boolean {
  return typeof window !== "undefined";
}

// ----------------------------------------------------------------------------
// Vehicles / Fleet
// ----------------------------------------------------------------------------
export function getStoredVehicles(): AdminVehicle[] {
  if (!isBrowser()) return DEFAULT_VEHICLES;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.VEHICLES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(DEFAULT_VEHICLES));
      return DEFAULT_VEHICLES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_VEHICLES;
  } catch (e) {
    console.error("Error reading vehicles from storage:", e);
    return DEFAULT_VEHICLES;
  }
}

export function saveStoredVehicles(vehicles: AdminVehicle[]): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(vehicles));
    // Trigger window event so other components update live
    window.dispatchEvent(new Event("kt_admin_vehicles_updated"));
  } catch (e) {
    console.error("Error saving vehicles to storage:", e);
  }
}

// ----------------------------------------------------------------------------
// Destinations
// ----------------------------------------------------------------------------
export function getStoredDestinations(): AdminDestination[] {
  if (!isBrowser()) return DEFAULT_DESTINATIONS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.DESTINATIONS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(DEFAULT_DESTINATIONS));
      return DEFAULT_DESTINATIONS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_DESTINATIONS;
  } catch (e) {
    console.error("Error reading destinations from storage:", e);
    return DEFAULT_DESTINATIONS;
  }
}

export function saveStoredDestinations(destinations: AdminDestination[]): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(destinations));
    window.dispatchEvent(new Event("kt_admin_destinations_updated"));
  } catch (e) {
    console.error("Error saving destinations to storage:", e);
  }
}

// ----------------------------------------------------------------------------
// Tour Packages
// ----------------------------------------------------------------------------
export function getStoredPackages(): AdminTourPackage[] {
  if (!isBrowser()) return DEFAULT_PACKAGES;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PACKAGES);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(DEFAULT_PACKAGES));
      return DEFAULT_PACKAGES;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : DEFAULT_PACKAGES;
  } catch (e) {
    console.error("Error reading packages from storage:", e);
    return DEFAULT_PACKAGES;
  }
}

export function saveStoredPackages(packages: AdminTourPackage[]): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(packages));
    window.dispatchEvent(new Event("kt_admin_packages_updated"));
  } catch (e) {
    console.error("Error saving packages to storage:", e);
  }
}

// ----------------------------------------------------------------------------
// Pricing & Fare Rules
// ----------------------------------------------------------------------------
export function getStoredPricing(): AdminPricingSettings {
  if (!isBrowser()) return DEFAULT_PRICING;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.PRICING);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.PRICING, JSON.stringify(DEFAULT_PRICING));
      return DEFAULT_PRICING;
    }
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? { ...DEFAULT_PRICING, ...parsed } : DEFAULT_PRICING;
  } catch (e) {
    console.error("Error reading pricing from storage:", e);
    return DEFAULT_PRICING;
  }
}

export function saveStoredPricing(pricing: AdminPricingSettings): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.PRICING, JSON.stringify(pricing));
    window.dispatchEvent(new Event("kt_admin_pricing_updated"));
  } catch (e) {
    console.error("Error saving pricing to storage:", e);
  }
}

// ----------------------------------------------------------------------------
// Bookings & Leads CRM
// ----------------------------------------------------------------------------
export function getStoredBookings(): AdminBooking[] {
  if (!isBrowser()) return DEFAULT_BOOKINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.BOOKINGS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(DEFAULT_BOOKINGS));
      return DEFAULT_BOOKINGS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : DEFAULT_BOOKINGS;
  } catch (e) {
    console.error("Error reading bookings from storage:", e);
    return DEFAULT_BOOKINGS;
  }
}

export function saveStoredBookings(bookings: AdminBooking[]): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(bookings));
    window.dispatchEvent(new Event("kt_admin_bookings_updated"));
  } catch (e) {
    console.error("Error saving bookings to storage:", e);
  }
}

export function addStoredBooking(newBooking: Omit<AdminBooking, "id" | "createdAt"> & { id?: string; createdAt?: string }): AdminBooking {
  const current = getStoredBookings();
  const created: AdminBooking = {
    ...newBooking,
    id: newBooking.id || newBooking.bookingId || `KT${Date.now().toString().slice(-8)}`,
    createdAt: newBooking.createdAt || new Date().toISOString(),
  };
  const updated = [created, ...current];
  saveStoredBookings(updated);
  return created;
}

export function updateStoredBooking(id: string, updates: Partial<AdminBooking>): boolean {
  const current = getStoredBookings();
  const index = current.findIndex((b) => b.id === id || b.bookingId === id);
  if (index === -1) return false;
  current[index] = { ...current[index], ...updates };
  saveStoredBookings(current);
  return true;
}

export function deleteStoredBooking(id: string): boolean {
  const current = getStoredBookings();
  const filtered = current.filter((b) => b.id !== id && b.bookingId !== id);
  if (filtered.length === current.length) return false;
  saveStoredBookings(filtered);
  return true;
}

// ----------------------------------------------------------------------------
// Company Settings
// ----------------------------------------------------------------------------
export function getStoredCompanySettings(): AdminCompanySettings {
  if (!isBrowser()) return DEFAULT_COMPANY_SETTINGS;
  try {
    const raw = localStorage.getItem(STORAGE_KEYS.SETTINGS);
    if (!raw) {
      localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_COMPANY_SETTINGS));
      return DEFAULT_COMPANY_SETTINGS;
    }
    const parsed = JSON.parse(raw);
    return parsed && typeof parsed === "object" ? { ...DEFAULT_COMPANY_SETTINGS, ...parsed } : DEFAULT_COMPANY_SETTINGS;
  } catch (e) {
    console.error("Error reading settings from storage:", e);
    return DEFAULT_COMPANY_SETTINGS;
  }
}

export function saveStoredCompanySettings(settings: AdminCompanySettings): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
    window.dispatchEvent(new Event("kt_admin_settings_updated"));
  } catch (e) {
    console.error("Error saving settings to storage:", e);
  }
}

// ----------------------------------------------------------------------------
// Reset All Data
// ----------------------------------------------------------------------------
export function resetAllDataToDefaults(): void {
  if (!isBrowser()) return;
  try {
    localStorage.setItem(STORAGE_KEYS.VEHICLES, JSON.stringify(DEFAULT_VEHICLES));
    localStorage.setItem(STORAGE_KEYS.DESTINATIONS, JSON.stringify(DEFAULT_DESTINATIONS));
    localStorage.setItem(STORAGE_KEYS.PACKAGES, JSON.stringify(DEFAULT_PACKAGES));
    localStorage.setItem(STORAGE_KEYS.PRICING, JSON.stringify(DEFAULT_PRICING));
    localStorage.setItem(STORAGE_KEYS.BOOKINGS, JSON.stringify(DEFAULT_BOOKINGS));
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(DEFAULT_COMPANY_SETTINGS));

    window.dispatchEvent(new Event("kt_admin_vehicles_updated"));
    window.dispatchEvent(new Event("kt_admin_destinations_updated"));
    window.dispatchEvent(new Event("kt_admin_packages_updated"));
    window.dispatchEvent(new Event("kt_admin_pricing_updated"));
    window.dispatchEvent(new Event("kt_admin_bookings_updated"));
    window.dispatchEvent(new Event("kt_admin_settings_updated"));
  } catch (e) {
    console.error("Error resetting data:", e);
  }
}
