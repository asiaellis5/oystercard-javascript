describe("Journey", function () {
  let journey;

  beforeEach(function () {
    journey = new Journey();
  });

  describe("start", function () {
    it("logs the starting station", function () {
      journey.start("Waterloo");
      expect(journey.entryStation).toEqual("Waterloo");
    });
  });

  describe("end", function () {
    it("logs the end station", function () {
      journey.start("Waterloo");
      journey.end("Kings Cross");
      expect(journey.exitStation).toEqual("Kings Cross");
    });
  });
});
