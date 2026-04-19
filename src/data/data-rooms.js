import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/room-images/`;

export const rooms = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 4500,
    discount: 0,
    image: imageUrl + "room-001.jpg",
    description:
      "A calm Deluxe King Room for couples or solo business travelers in Dhaka. Expect a plush king bed, rainfall shower, writing desk, fast Wi-Fi, and a quiet corner for tea after a long day in the city.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 6200,
    discount: 500,
    image: imageUrl + "room-002.jpg",
    description:
      "A Premium King Room with a little more breathing space, ideal for guests arriving through Hazrat Shahjalal International Airport. The room includes a minibar, lounge chair, prayer mat on request, and a polished bathroom.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 7000,
    discount: 0,
    image: imageUrl + "room-003.jpg",
    description:
      "A practical Family Room for parents and children visiting Dhaka, Sylhet, or nearby relatives. It offers flexible bedding, generous storage, a cozy seating area, and a bathroom designed for busy family mornings.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 9500,
    discount: 900,
    image: imageUrl + "room-004.jpg",
    description:
      "A Signature Family Suite with separate sleeping and sitting areas, premium bedding, warm lighting, and a spacious en-suite bathroom. A comfortable pick for Eid holidays, weddings, and family city breaks.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 11000,
    discount: 0,
    image: imageUrl + "room-005.jpg",
    description:
      "A spacious Group Room for friends, colleagues, or extended families traveling together. It includes flexible beds, a shared lounge zone, reliable Wi-Fi, and plenty of luggage space for longer Bangladesh trips.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 15000,
    discount: 1500,
    image: imageUrl + "room-006.jpg",
    description:
      "An Executive Group Suite for guests who want extra comfort during business trips, wedding events, or transit stays. Enjoy multiple sleeping zones, a refined lounge, work surfaces, and premium amenities.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 18000,
    discount: 2000,
    image: imageUrl + "room-007.jpg",
    description:
      "A Grand Family Suite for larger families and groups, with multiple sleeping areas, a roomy lounge, and a peaceful hotel atmosphere. It works beautifully for guests gathering before trips to Cox's Bazar or Sylhet.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 28000,
    discount: 0,
    image: imageUrl + "room-008.jpg",
    description:
      "The Presidential Suite is HotelBytezz's most spacious stay, designed for VIP families, wedding parties, and executives. It features grand sleeping areas, a formal lounge, premium service touches, and room for a full group.",
  },
];
