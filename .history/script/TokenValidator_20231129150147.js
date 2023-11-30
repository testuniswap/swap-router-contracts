async function main() {
   const Counter = await ethers.getContractFactory("TokenValidator");
   const counter = await Counter.deploy(
    '0x1F98431c8aD98523631AE4a59f267346ea31F984',
    '0x6777b71FC96Dd07E0562b7668320E2597e4ECfe2',
    '0xB4FBF271143F4FBf7B91A5ded31805e42b2208d6');
   await counter.deployed();
  console.log("Counter address:", counter.address);
}

main();