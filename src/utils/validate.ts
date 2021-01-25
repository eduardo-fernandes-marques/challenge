import { ReferenceType } from "../hotel.model";
import { MIN_CHAR, REFERENCE } from "../constants";

export const getParsedInput = (input: string) => {
  validateInputString(input);

  return {
    reference: validateInputReference(input.split(":", 1)),
    dates: validateInputDates(input.split(":").pop().split(",")),
  };
};

const validateInputString = (input: string) => {
  if (!input) {
    throw new Error("Invalid input");
  } else if (input.length < MIN_CHAR) {
    throw new Error("Invalid input size");
  }
};

const validateInputReference = (input: string[]) => {
  const reference = String(input);

  if (!reference) {
    throw new Error("Invalid input reference");
  } else if (
    reference !== REFERENCE.Fidelidade &&
    reference !== REFERENCE.Regular
  ) {
    throw new Error("Invalid input reference type");
  }

  return reference as ReferenceType;
};

const validateInputDates = (input: string[]) => {
  return input.map((date) => {
    if (isNaN(Date.parse(date))) {
      throw new Error("Invalid input dates format");
    }

    return new Date(date);
  });
};
