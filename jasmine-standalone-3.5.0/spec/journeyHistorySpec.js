describe("JourneyHistory", function () {
  let journeyHistory;
  let journey;

  beforeEach(function () {
    journey = jasmine.createSpyObj("Journey", ["start", "finish"]);
    journeyHistory = new JourneyHistory(journey);
  });

  // describe("start", function () {
  //   it("logs the start of the current journey", function () {
  //     journeyHistory.start("Kings Cross");
  //     console.log(journeyHistory.start("Kings Cross"));
  //     expect(journey.start()).toHaveBeenCalled();
  //   });
  // });
});
