import "mocha";
import { expect } from "chai";

import { getHotel } from "../src";

describe("Hotel", () => {
  describe("Domain", () => {
    it("should handle example 1", () => {
      expect(
        getHotel("Regular: 16Mar2020(mon), 17Mar2020(tues), 18Mar2020(wed)")
      ).to.equal("Parque das flores");
    });

    it("should handle example 2", () => {
      expect(
        getHotel("Regular: 20Mar2020(fri), 21Mar2020(sat), 22Mar2020(sun)")
      ).to.equal("Jardim Botânico");
    });

    it("should handle example 3", () => {
      expect(
        getHotel("Fidelidade: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)")
      ).to.equal("Mar Atlântico");
    });
  });

  describe("Validations", () => {
    describe("String", () => {
      it("should handle invalid input", () => {
        expect(() => getHotel(undefined)).to.throw("Invalid input");
      });

      it("should handle invalid input size", () => {
        expect(() => getHotel("Fidelidade: ")).to.throw("Invalid input size");
      });
    });

    describe("Reference", () => {
      it("should handle invalid input reference", () => {
        expect(() =>
          getHotel(
            ": 26Mar2020(mon), 27Mar2020(fri), 28Mar2020(sat), 28Mar2020(sat)"
          )
        ).to.throw("Invalid input reference");
      });

      it("should handle invalid input reference type", () => {
        expect(() =>
          getHotel("Regu: 26Mar2020(thur), 27Mar2020(fri), 28Mar2020(sat)")
        ).to.throw("Invalid input reference type");
      });
    });

    describe("Dates", () => {
      it("should handle invalid date format", () => {
        expect(() =>
          getHotel("Fidelidade: , 27Mar2020(fri), 28Mar2020(sat)")
        ).to.throw("Invalid input dates format");
      });

      it("should handle valid date format", () => {
        expect(() =>
          getHotel(
            "Fidelidade: 26Mar2020(tr), 26Mar2020(tr), 27Mar2020(fri), 28Mar2020(sat)"
          )
        ).to.not.throw("Invalid input dates format");
      });
    });
  });
});
