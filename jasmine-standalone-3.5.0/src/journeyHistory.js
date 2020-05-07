class JourneyHistory {
  constructor(journey = new Journey()) {
    this.history = [];
    this.currentJourney = journey;
  }

  start = (station) => {
    this.currentJourney.start(station);
  };

  end = (station) => {
    this.currentJourney.end(station);
  };
}
