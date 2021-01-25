import { HOTELS, WEEKEND } from "./constants";
import { ReferenceType } from "./hotel.model";

const WEEK = [
  "sunday",
  "monday",
  "tuesday",
  "wendnesday",
  "thursday",
  "friday",
  "saturday",
];

export const getHotel = (type: ReferenceType, dates: Date[]) => {
  const sums = HOTELS.sort((a, b) => b.rating - a.rating).map((hotel) => {
    let sum = 0;

    const reference = hotel.references.find(
      (reference) => reference.type === type
    );

    dates.map((date) => {
      if (WEEKEND.includes(date.getDay())) {
        sum += reference.weekendTax;
      } else {
        sum += reference.weekTax;
      }
    });

    return {
      name: hotel.name,
      rating: hotel.rating,
      sum,
    };
  });

  return sums.sort((a, b) => a.sum - b.sum)[0].name;
};
