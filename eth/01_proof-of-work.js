const SHA256 = require("crypto-js/sha256");
const TARGET_DIFFICULTY =
  BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
  mempool.push(transaction);
}

function mine() {
  const transactions = mempool.splice(-MAX_TRANSACTIONS);
  const block = {
    id: blocks.length,
    transactions: transactions,
    nonce: 0,
  };
  let hashedBlock = SHA256(JSON.stringify(block));
  while (BigInt(`0x${hashedBlock}`) > TARGET_DIFFICULTY) {
    block.nonce += 1;
    hashedBlock = SHA256(JSON.stringify(block));
  }

  block.hash = hashedBlock;
  blocks.push(block);
}
