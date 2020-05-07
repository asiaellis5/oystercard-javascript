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
    this.resetCurrentJourney();
  };

  resetCurrentJourney = () => {
    this.history.push(this.immuteJourney());
    this.currentJourney = new Journey();
  };

  immuteJourney = () => {
    return Object.freeze(this.currentJourney);
  };
}
