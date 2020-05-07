describe("OysterCard", function () {
  let oysterCard;

  beforeEach(function () {
    oysterCard = new OysterCard();
  });

  describe("balance", function () {
    it("starts with a balance of 0", function () {
      expect(oysterCard.balance).toEqual(0);
    });
  });

  describe("topUpCard", function () {
    it("tops up the balance on card", function () {
      oysterCard.topUpCard(10);
      expect(oysterCard.balance).toEqual(10);
    });
  });
});
