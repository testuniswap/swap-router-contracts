async function main() {
   const Counter = await ethers.getContractFactory("SwapRouter02");
   const counter = await Counter.deploy(
    '0x6777b71FC96Dd07E0562b7668320E2597e4ECfe2',
    '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    address _positionManager,
    address _WETH9);
   await counter.deployed();
  console.log("Counter address:", counter.address);
}

main();