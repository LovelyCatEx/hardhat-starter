# Sample Hardhat Project

Features: typescript, ethers, auto-deploy, contract verification, gas reporter

## Quick Start

1 Initialize the project

`npm install`

2 Edit the .env file, create it if not exists

```
SEPOLIA_RPC_URL=
PRIVATE_KEY=
ETHER_SCAN_API_KEY=
COIN_MARKET_CAP_API_KEY=
```

3 Deploy contracts

`npm run node`

`npm run dev`

If you want to deploy the contract to sepolia, run

`npm run sepolia`

## Original Commands

```
npm install dotenv

npm install --save-dev hardhat

npm install --save-dev "hardhat@^2.22.2" "@nomicfoundation/hardhat-toolbox@^5.0.0"

npm install --save-dev hardhat-gas-reporter

npm install --save-dev @nomicfoundation/hardhat-verify --legacy-peer-deps

npm install --save-dev hardhat-deploy --legacy-peer-deps

npm install --save-dev @nomiclabs/hardhat-ethers hardhat-deploy-ethers ethers --force
```
