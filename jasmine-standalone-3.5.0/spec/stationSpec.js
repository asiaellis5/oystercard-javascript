describe("Station", function () {
  let station;

  beforeEach(function () {
    station = new Station("Old Street", 1);
  });

  it("knows its name", function () {
    expect(station.name).toEqual("Old Street");
  });

  it("knows its zone", function () {
    expect(station.zone).toEqual(1);
  });
});
