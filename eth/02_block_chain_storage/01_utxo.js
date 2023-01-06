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

    const totalInput = this.inputUTXOs.reduce((x, y) => x + y.amount, 0);
    const totalOutput = this.outputUTXOs.reduce((x, y) => x + y.amount, 0);

    console.log(totalInput);
    console.log(totalOutput);

    if (totalOutput > totalInput) throw new Error();

    // transaction is successful at this point - mark input UTXOs as spent
    this.inputUTXOs.forEach((inputUTXO) => inputUTXO.spend());

    // use the remainder after output UTXOS as mining fee
    this.fee = totalInput - totalOutput;
  }
}
