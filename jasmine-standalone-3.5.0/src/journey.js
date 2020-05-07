class Journey {
  constructor() {
    this.entryStation = "";
    this.exitStation = "";
  }

  start = (station) => {
    this.entryStation = station;
  };

  end = (station) => {
    this.exitStation = station;
  };
}
