import { Hotel, ReferenceType } from "./hotel.model";

export const REFERENCE: { [T in ReferenceType]: ReferenceType } = {
  Regular: "Regular",
  Fidelidade: "Fidelidade",
};

export const HOTELS: Hotel[] = [
  {
    name: "Parque das flores",
    rating: 3,
    references: [
      {
        type: REFERENCE.Fidelidade,
        weekTax: 80,
        weekendTax: 80,
      },
      {
        type: REFERENCE.Regular,
        weekTax: 110,
        weekendTax: 90,
      },
    ],
  },
  {
    name: "Jardim Botânico",
    rating: 4,
    references: [
      {
        type: REFERENCE.Fidelidade,
        weekTax: 110,
        weekendTax: 50,
      },
      {
        type: REFERENCE.Regular,
        weekTax: 160,
        weekendTax: 60,
      },
    ],
  },
  {
    name: "Mar Atlântico",
    rating: 5,
    references: [
      {
        type: REFERENCE.Fidelidade,
        weekTax: 100,
        weekendTax: 40,
      },
      {
        type: REFERENCE.Regular,
        weekTax: 220,
        weekendTax: 150,
      },
    ],
  },
];

export const WEEKEND = [0, 6];

export const MIN_CHAR = 23;
