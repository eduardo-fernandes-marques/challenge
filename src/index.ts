import { getParsedInput } from "./utils/validate";
import { getHotel as getHotelDomain } from "./hotel.domain";

export const getHotel = (input: string) => {
  const { reference, dates } = getParsedInput(input);

  return getHotelDomain(reference, dates);
};
