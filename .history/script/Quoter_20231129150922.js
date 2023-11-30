async function main() {
   const Counter = await ethers.getContractFactory("TokenValidator");
   const counter = await Counter.deploy(
    '0x6777b71FC96Dd07E0562b7668320E2597e4ECfe2',
    '0xC36442b4a4522E871399CD717aBDD847Ab11FE88');
   await counter.deployed();
  console.log("Counter address:", counter.address);
}

main();