"use strict";

class OysterCard {
  constructor() {
    this.balance = 0;
    this.maximumBalance = 90;
  }

  topUpCard = (topUpAmount) => {
    if (this.balance + topUpAmount < this.maximumBalance) {
      this.balance += topUpAmount;
      return `£${topUpAmount} Sucessfully added, Balance = £${this.balance}`;
    } else {
      throw new Error("Maximum balance exceeded");
    }
  };

  deductFare = () => {
    this.balance -= 3;
    return `£3 deducted, current balance: £${this.balance}`;
  };
}
