"use strict";

class OysterCard {
  constructor(journeyHistory = new JourneyHistory()) {
    this.balance = 0;
    this.maximumBalance = 90;
    this.minimumFare = 3;
    this.isInJourney = false;
    this.journeyHistory = journeyHistory;
    this.penaltyFare = 5;
  }

  topUpCard = (topUpAmount) => {
    if (this._exceedMaxBalance(topUpAmount)) {
      this._addMoney(topUpAmount);
      return `£${topUpAmount} Sucessfully added, Balance = £${this.balance}`;
    } else {
      throw new Error("Maximum balance exceeded");
    }
  };

  touchIn = (station) => {
    if (this.isInJourney) {
      this._deductPenaltyFare();
      this.journeyHistory.resetCurrentJourney();
      this.isInJourney = false;
    }
    if (this.balance > this.minimumFare) {
      this.isInJourney = true;
      this.journeyHistory.start(station);
      return `Journey started, you touched in at ${station.name}`;
    } else {
      throw new Error("Insufficient funds, please top up");
    }
  };

  touchOut = (station) => {
    this.journeyHistory.end(station);
    this.isInJourney ? this._deductFare() : this._deductPenaltyFare();
    this.journeyHistory.resetCurrentJourney();
    this.isInJourney = false;
    return `Journey ended, you touched out at ${station.name}, current balance: £${this.balance}`;
  };

  _exceedMaxBalance = (topUpAmount) => {
    return this.balance + topUpAmount < this.maximumBalance;
  };

  _addMoney = (amount) => {
    this.balance += amount;
  };

  _deductFare = () => {
    let fare =
      this.journeyHistory.currentJourney.entryStation.zone -
      this.journeyHistory.currentJourney.exitStation.zone;
    this.balance -= this.minimumFare + Math.abs(fare);
  };

  _deductPenaltyFare = () => {
    this.balance -= this.penaltyFare;
  };
}
