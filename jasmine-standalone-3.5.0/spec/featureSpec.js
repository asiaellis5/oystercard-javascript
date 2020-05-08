describe("feature", function () {
  let oysterCard;
  let stationOne;
  let stationTwo;
  let stationThree;

  beforeEach(function () {
    oysterCard = new OysterCard();
    stationOne = new Station("Kings Cross", 1);
    stationTwo = new Station("Old Street", 3);
    stationThree = new Station("Clapham", 6);
  });

  it("touches in and out correctly and deducts the correct fare", function () {
    oysterCard.topUpCard(10);
    oysterCard.touchIn(stationOne);
    oysterCard.touchOut(stationTwo);
    expect(oysterCard.journeyHistory.history[0].entryStation.name).toEqual(
      "Kings Cross"
    );
    expect(oysterCard.journeyHistory.history[0].exitStation.name).toEqual(
      "Old Street"
    );
    expect(oysterCard.balance).toEqual(5);
  });
});
