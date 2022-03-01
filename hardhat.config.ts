import * as dotenv from "dotenv";
dotenv.config()

import { HardhatUserConfig, task } from "hardhat/config";
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-web3";
import { assert } from "console";
import "./task/index";
import "solidity-coverage";

const accounts: string[] = (process.env.PRIVATE_KEY && process.env.PRIVATE_KEY2) ? [process.env.PRIVATE_KEY, process.env.PRIVATE_KEY2] : [];
const kas_auth = "Basic " +
    Buffer.from(
        process.env.KAS_ACCESS_ID + ":" + process.env.KAS_ACCESS_SECRET
    ).toString("base64");

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      accounts: { count: 30, accountsBalance: "100000000000000000000000" },
    },
    mainnet: {
      url: 'https://node-api.klaytnapi.com/v1/klaytn',
      httpHeaders: {
        'x-chain-id': '8217',
        Authorization: kas_auth,
      },
      chainId: 8217,
      gas: 20000000,
      gasPrice: 25000000000,
      accounts: accounts,
      live: true,
      saveDeployments: true,
    },
    baobab: {
      url: 'https://api.baobab.klaytn.net:8651',
      chainId: 1001,
      gas: 20000000,
      gasPrice: 25000000000,
      accounts: accounts,
      live: true,
      saveDeployments: true,
    },
  },
  namedAccounts: {
    deployer: 0,
    player: 1,
  },
  mocha: {
    timeout: 300000
  },
  solidity: {
    version: '0.5.6',
    settings: {
      evmVersion: "constantinople",
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

};

export default config