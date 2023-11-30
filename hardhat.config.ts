import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-watcher'
import 'dotenv/config'
const PRIVATE_KEY2 = "ed63a785a13c43d5bbf8e1cc2014e3ccf841a528389d59d28a320e7dca2fdda3";
const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

export default {
  networks: {  goerli: {
    url: "https://ethereum-goerli.publicnode.com",
    accounts: [PRIVATE_KEY2],
    chainId: 5,
  },
  },
  etherscan: {
    apiKey: 'E9QCDCIAW79ARXTJT2U7XGUS5IJ97RGTR7',
  },
  solidity: {
    compilers: [DEFAULT_COMPILER_SETTINGS],
  },
  watcher: {
    test: {
      tasks: [{ command: 'test', params: { testFiles: ['{path}'] } }],
      files: ['./test/**/*'],
      verbose: true,
    },
  },
}