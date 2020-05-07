describe("JourneyHistory", function () {
  let journeyHistory;
  let journey;

  beforeEach(function () {
    journeyHistory = new JourneyHistory();
  });

  describe("start", function () {
    it("logs the start of the current journey", function () {
      journeyHistory.start("Kings Cross");
      expect(journeyHistory.currentJourney.entryStation).toEqual("Kings Cross");
    });
  });

  describe("end", function () {
    it("logs the end of the current journey", function () {
      journeyHistory.end("Waterloo");
      expect(journeyHistory.history[0].exitStation).toEqual("Waterloo");
    });
  });

  describe("resetCurrentJourney", function () {
    it("resets the current journey once complete", function () {
      journeyHistory.start("Kings Cross");
      journeyHistory.end("Waterloo");
      expect(journeyHistory.currentJourney.entryStation).toEqual("");
      expect(journeyHistory.currentJourney.exitStation).toEqual("");
    });

    it("stores the completed journey", function () {
      journeyHistory.start("Kings Cross");
      journeyHistory.end("Waterloo");
      expect(journeyHistory.history.length).toEqual(1);
    });
  });
});
