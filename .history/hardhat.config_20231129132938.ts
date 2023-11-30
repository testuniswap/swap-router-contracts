import '@nomiclabs/hardhat-ethers'
import '@nomiclabs/hardhat-etherscan'
import '@nomiclabs/hardhat-waffle'
import 'hardhat-typechain'
import 'hardhat-watcher'
import 'dotenv/config'

const DEFAULT_COMPILER_SETTINGS = {
  version: '0.7.6',
  settings: {
    evmVersion: 'istanbul',
    optimizer: {
      enabled: true,
      runs: 1_000_000,
    },
    metadata: {
      bytecodeHash: 'none',
    },
  },
}

export default {
  networks: {
    hardhat: {
      allowUnlimitedContractSize: false,
    },
  goerli: {
    url: "https://goerli.blockpi.network/v1/rpc/public",
    accounts: [PRIVATE_KEY2],
    chainId: 5,
  },
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY,
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

networks: {
  goerli: {
    url: "https://goerli.blockpi.network/v1/rpc/public",
    accounts: [PRIVATE_KEY2],
    chainId: 5,
  },
},
etherscan: {
  apiKey: "E9QCDCIAW79ARXTJT2U7XGUS5IJ97RGTR7"
}