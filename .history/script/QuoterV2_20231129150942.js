async function main() {
   const Counter = await ethers.getContractFactory("TokenValidator");
   const counter = await Counter.deploy(
    '0x6777b71FC96Dd07E0562b7668320E2597e4ECfe2',
    '');
   await counter.deployed();
  console.log("Counter address:", counter.address);
}

main();