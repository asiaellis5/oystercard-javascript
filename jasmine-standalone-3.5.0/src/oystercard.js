class OysterCard {
  constructor() {
    this.balance = 0;
  }

  topUpCard = (topUpAmount) => {
    return (this.balance += topUpAmount);
  };
}
