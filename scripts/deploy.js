const hre = require("hardhat");

async function main() {
  // We get the contract to deploy
  const Zero = await hre.ethers.getContractFactory("Zero");
  const zero = await Zero.deploy();
  await zero.deployed();
  console.log("Zero deployed to:", zero.address);

  let txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#1");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#2");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#3");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#4");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#5");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#6");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#7");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#8");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#9");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#10");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#11");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#12");

  txn = await zero.mint();
  await txn.wait();
  console.log("Minted NFT#13");

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
});
