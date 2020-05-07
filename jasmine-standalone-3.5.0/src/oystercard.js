"use strict";

class OysterCard {
  constructor() {
    this.balance = 0;
    this.maximumBalance = 90;
    this.minimumFare = 3;
    this.isInJourney = false;
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
    if (this.balance > this.minimumFare) {
      this.isInJourney = true;
      return `Journey started, you touched in at ${station}`;
    } else {
      throw new Error("Insufficient funds, please top up");
    }
  };

  touchOut = (station) => {
    this.isInJourney = false;
    this._deductFare();
    return `Journey ended, you touched out at ${station}, current balance: £${this.balance}`;
  };

  _exceedMaxBalance = (topUpAmount) => {
    return this.balance + topUpAmount < this.maximumBalance;
  };

  _addMoney = (amount) => {
    this.balance += amount;
  };

  _deductFare = () => {
    this.balance -= this.minimumFare;
  };
}
