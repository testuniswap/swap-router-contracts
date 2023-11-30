async function main() {
   const Counter = await ethers.getContractFactory("UniswapV2Factory");
   const counter = await Counter.deploy('0x417b72DEEf701Ce7Eb9aC9ac32c2Aa5f275aEB8b');
   await counter.deployed();
  console.log("Counter address:", counter.address);
}

main();