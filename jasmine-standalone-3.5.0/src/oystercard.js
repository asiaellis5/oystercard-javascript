"use strict";

class OysterCard {
  constructor() {
    this.balance = 0;
    this.maximumBalance = 90;
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

  deductFare = () => {
    this._deductMoney();
    return `£3 deducted, current balance: £${this.balance}`;
  };

  touchIn = (station) => {
    this.isInJourney = true;
    return `Journey started you touched in at ${station}`;
  };

  _exceedMaxBalance = (topUpAmount) => {
    return this.balance + topUpAmount < this.maximumBalance;
  };

  _addMoney = (amount) => {
    this.balance += amount;
  };

  _deductMoney = () => {
    this.balance -= 3;
  };
}
