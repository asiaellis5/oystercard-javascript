"use strict";

describe("OysterCard", function () {
  let oysterCard;

  beforeEach(function () {
    oysterCard = new OysterCard();
  });

  describe("balance", function () {
    it("starts with a balance of 0", function () {
      expect(oysterCard.balance).toEqual(0);
    });

    it("has a maximum balance of £90", function () {
      expect(oysterCard.maximumBalance).toEqual(90);
    });
  });

  describe("topUpCard", function () {
    it("tops up the balance on card", function () {
      oysterCard.topUpCard(10);
      expect(oysterCard.balance).toEqual(10);
    });

    it("returns a statement that confirms the money has been topped up", function () {
      expect(oysterCard.topUpCard(10)).toEqual(
        "£10 Sucessfully added, Balance = £10"
      );
    });

    it("throws an error if maximum balance exceeded", function () {
      for (let i = 0; i < 8; i++) {
        oysterCard.topUpCard(10);
      }
      expect(function () {
        oysterCard.topUpCard(11);
      }).toThrowError("Maximum balance exceeded");
    });
  });

  describe("deductFare", function () {
    it("deducts the standard fare", function () {
      oysterCard.topUpCard(10);
      oysterCard.deductFare();
      expect(oysterCard.balance).toEqual(7);
    });

    it("returns a statement that money has been deducted", function () {
      oysterCard.topUpCard(10);
      expect(oysterCard.deductFare()).toEqual(
        "£3 deducted, current balance: £7"
      );
    });
  });

  describe("touchIn", function () {
    it("changes inJourney to be true", function () {
      oysterCard.touchIn("station");
      expect(oysterCard.isInJourney).toBe(true);
    });

    it("returns the touch in station", function () {
      expect(oysterCard.touchIn("kings cross")).toEqual(
        "Journey started you touched in at kings cross"
      );
    });
  });
});
