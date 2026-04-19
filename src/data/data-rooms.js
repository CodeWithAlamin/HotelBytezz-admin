import { supabaseUrl } from "../services/supabase";

const imageUrl = `${supabaseUrl}/storage/v1/object/public/room-images/`;

export const rooms = [
  {
    name: "001",
    maxCapacity: 2,
    regularPrice: 250,
    discount: 0,
    image: imageUrl + "room-001.jpg",
    description:
      "A refined Deluxe King Room designed for couples who want a calm, polished hotel stay. Enjoy a plush king-size bed, soft lighting, premium linens, a compact lounge area, and a spa-style bathroom with a rainfall shower.",
  },
  {
    name: "002",
    maxCapacity: 2,
    regularPrice: 350,
    discount: 25,
    image: imageUrl + "room-002.jpg",
    description:
      "A Premium King Room with extra space for a relaxed city-hotel experience. The room includes a comfortable seating corner, minibar, work desk, king-size bed, and an elegant bathroom finished for slow mornings and restful evenings.",
  },
  {
    name: "003",
    maxCapacity: 4,
    regularPrice: 300,
    discount: 0,
    image: imageUrl + "room-003.jpg",
    description:
      "A Family Room made for up to four guests, with generous sleeping space, a cozy lounge zone, practical storage, and a modern bathroom. It is ideal for families who want comfort without losing the feel of a proper hotel retreat.",
  },
  {
    name: "004",
    maxCapacity: 4,
    regularPrice: 500,
    discount: 50,
    image: imageUrl + "room-004.jpg",
    description:
      "A Signature Family Suite with elevated finishes, separate sleeping and sitting areas, premium bedding, and a spacious en-suite bathroom. A strong choice for families who want a more luxurious stay.",
  },
  {
    name: "005",
    maxCapacity: 6,
    regularPrice: 350,
    discount: 0,
    image: imageUrl + "room-005.jpg",
    description:
      "A spacious Group Room for families or small teams, with flexible beds, a shared seating area, generous wardrobe space, and hotel-grade amenities for a comfortable multi-guest stay.",
  },
  {
    name: "006",
    maxCapacity: 6,
    regularPrice: 800,
    discount: 100,
    image: imageUrl + "room-006.jpg",
    description:
      "An Executive Group Suite built for comfort at a larger scale. Guests get a polished lounge area, multiple sleeping zones, premium linens, dedicated work surfaces, and refined bathroom finishes.",
  },
  {
    name: "007",
    maxCapacity: 8,
    regularPrice: 600,
    discount: 100,
    image: imageUrl + "room-007.jpg",
    description:
      "A Grand Family Suite for larger groups, combining multiple sleeping areas, a roomy shared lounge, plenty of storage, and a calm hotel atmosphere that keeps everyone close without feeling crowded.",
  },
  {
    name: "008",
    maxCapacity: 10,
    regularPrice: 1400,
    discount: 0,
    image: imageUrl + "room-008.jpg",
    description:
      "The Presidential Suite is the most spacious option, with grand sleeping areas, a formal lounge, premium hotel amenities, refined finishes, and room for larger families or VIP groups who want the full HotelBytezz experience.",
  },
];
