// This is an example of coding UTXO

// transaction output class
class TXO {
  constructor(owner, amount) {
    this.owner = owner;
    this.amount = amount;
    this.spent = false;
  }

  spend() {
    this.spend = true;
  }
}

// transaction class
class Transaction {
  constructor(inputUTXOs, outputUTXOs) {
    this.inputUTXOs = inputUTXOs;
    this.outputUTXOs = outputUTXOs;
  }

  execute() {
    this.inputUTXOs.forEach((inputUTXO) => {
      if (inputUTXO.spent === true)
        throw new Error("input includes a spent transaction");
    });
  }
}
