"use strict";

describe("OysterCard", function () {
  let oysterCard;
  let stationOne;
  let stationTwo;

  beforeEach(function () {
    oysterCard = new OysterCard();
    stationOne = {
      name: "Kings Cross",
      zone: 2,
    };
    stationTwo = {
      name: "Waterloo",
      zone: 1,
    };
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

  describe("_deductFare", function () {
    it("deducts the standard fare", function () {
      oysterCard.topUpCard(10);
      oysterCard._deductFare();
      expect(oysterCard.balance).toEqual(7);
    });
  });

  describe("touchIn", function () {
    it("changes isInJourney to be true", function () {
      oysterCard.topUpCard(10);
      oysterCard.touchIn("station");
      expect(oysterCard.isInJourney).toBe(true);
    });

    it("returns the touch in station", function () {
      oysterCard.topUpCard(10);
      console.log(stationOne);
      expect(oysterCard.touchIn(stationOne)).toEqual(
        "Journey started, you touched in at Kings Cross"
      );
    });

    it("doesnt allow a journey to start if the card has no money on", function () {
      expect(function () {
        oysterCard.touchIn(stationOne);
      }).toThrowError("Insufficient funds, please top up");
    });

    it("deducts a penalty fare if the card hasnt been touched out", function () {
      oysterCard.topUpCard(10);
      oysterCard.touchIn(stationOne);
      oysterCard.touchIn(stationTwo);
      expect(oysterCard.balance).toEqual(5);
    });
  });

  describe("touchOut", function () {
    it("changes isInJourney to be false", function () {
      oysterCard.topUpCard(10);
      oysterCard.touchIn(stationOne);
      oysterCard.touchOut(stationTwo);
      expect(oysterCard.isInJourney).toBe(false);
    });
    it("returns the touch out station", function () {
      oysterCard.topUpCard(10);
      oysterCard.touchIn(stationOne);
      expect(oysterCard.touchOut(stationTwo)).toEqual(
        "Journey ended, you touched out at Waterloo, current balance: £7"
      );
    });

    it("deducts a fare on touch out", function () {
      oysterCard.topUpCard(10);
      oysterCard.touchIn(stationOne);
      oysterCard.touchOut(stationTwo);
      expect(oysterCard.balance).toEqual(7);
    });

    it("takes off a penalty fare if try and touch out with out touching in", function () {
      oysterCard.topUpCard(10);
      oysterCard.touchOut(stationTwo);
      expect(oysterCard.balance).toEqual(5);
    });
  });
});
