describe("JourneyHistory", function () {
  let journeyHistory;
  let stationOne;
  let stationTwo;

  beforeEach(function () {
    journeyHistory = new JourneyHistory();
    stationOne = {
      name: "Kings Cross",
      zone: 2,
    };
    stationTwo = {
      name: "Waterloo",
      zone: 1,
    };
  });

  describe("start", function () {
    it("logs the start of the current journey", function () {
      journeyHistory.start(stationOne);
      expect(journeyHistory.currentJourney.entryStation.name).toEqual(
        "Kings Cross"
      );
    });
  });

  describe("end", function () {
    it("logs the end of the current journey", function () {
      journeyHistory.end(stationTwo);
      expect(journeyHistory.history[0].exitStation.name).toEqual("Waterloo");
    });
  });

  describe("resetCurrentJourney", function () {
    it("resets the current journey once complete", function () {
      journeyHistory.start(stationOne);
      journeyHistory.end(stationTwo);
      expect(journeyHistory.currentJourney.entryStation).toEqual("");
      expect(journeyHistory.currentJourney.exitStation).toEqual("");
    });

    it("stores the completed journey", function () {
      journeyHistory.start(stationOne);
      journeyHistory.end(stationTwo);
      expect(journeyHistory.history.length).toEqual(1);
    });
  });

  describe("immuteJourney", function () {
    it("immutes the journey when passed into the array", function () {
      journeyHistory.start(stationOne);
      journeyHistory.end(stationTwo);
      journeyHistory.history[0].entryStation = "Algate East";
      expect(journeyHistory.history[0].entryStation.name).toEqual(
        "Kings Cross"
      );
    });
  });
});
