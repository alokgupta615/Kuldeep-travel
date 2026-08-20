export interface VehiclePrice {
  original: number;
  discount: number;
}

export interface PackageRate {
  id: string;
  name: string;
  subtitle: string;
  duration: string;
  distance: string;
  badge?: string;
  highlights: string[];
  prices: {
    sedan: VehiclePrice;
    ertiga: VehiclePrice;
    innovaCrysta: VehiclePrice;
  };
}

export const packageRates: PackageRate[] = [
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
    },
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
    },
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
    },
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
    },
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
    },
  },
];

export const coveredDestinations = [
  {
    name: "Lucknow",
    distance: "Local City & Sightseeing",
    desc: "Bara Imambara, Chhota Imambara, Rumi Darwaza & Hazratganj heritage tours.",
  },
  {
    name: "Ayodhya",
    distance: "135 KM from Lucknow",
    desc: "Shri Ram Janmabhoomi Mandir, Hanuman Garhi, Saryu Ghat & Kanak Bhawan.",
  },
  {
    name: "Kanpur",
    distance: "85 KM from Lucknow",
    desc: "Industrial, corporate, shopping, and Bithoor religious travel.",
  },
  {
    name: "Prayagraj",
    distance: "205 KM from Lucknow",
    desc: "Triveni Sangam holy dip, Anand Bhavan, Alopi Devi Temple & Kumbh Mela.",
  },
  {
    name: "Varanasi",
    distance: "320 KM from Lucknow",
    desc: "Kashi Vishwanath Jyotirlinga, Dashashwamedh Ghat Aarti, Assi Ghat & Sarnath.",
  },
  {
    name: "Gorakhpur",
    distance: "270 KM from Lucknow",
    desc: "Gorakhnath Temple, Gita Press, and gateway to Kushinagar & Nepal.",
  },
  {
    name: "Chitrakoot",
    distance: "230 KM from Lucknow",
    desc: "Kamadgiri Parikrama, Ramghat, Gupt Godavari, Sphatik Shila & Bharat Milap.",
  },
  {
    name: "Naimisharanya",
    distance: "90 KM from Lucknow",
    desc: "Chakra Tirtha, Lalita Devi Temple, Vyas Gaddi & holy 84 Kosi Parikrama.",
  },
  {
    name: "Taj Mahal / Agra",
    distance: "335 KM from Lucknow",
    desc: "World wonder Taj Mahal, Agra Fort, Fatehpur Sikri via Lucknow-Agra Expressway.",
  },
  {
    name: "Nainital",
    distance: "420 KM from Lucknow",
    desc: "Lake district of Kumaon, boating, cable car, high altitude zoo & Himalayan views.",
  },
];

export const companyLocations = [
  {
    branch: "Head Office",
    address: "Bagh No. 2, Transport Nagar Metro Station, Kanpur Road, Behsa, Lucknow – 226012",
    tag: "Metro Station Branch",
  },
  {
    branch: "Airport Branch",
    address: "Near Airport, Transport Nagar, Lucknow – 226008",
    tag: "Airport Express Hub",
  },
];
