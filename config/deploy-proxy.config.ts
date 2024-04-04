import {HardhatRuntimeEnvironment} from "hardhat/types";
import deployMock from "./deployments/deploy-mock";
import deployContract from "./deployments/deploy-contract";

declare type DeployProxyFunction = (hre: HardhatRuntimeEnvironment) => Promise<any>
declare type DeployProxyAspectFunction = (index: number, hre: HardhatRuntimeEnvironment) => void | Promise<any>

declare type DeployProxyRecord = {[order: number]: DeployProxyFunction}
declare type DeployProxyAspectRecord = {[type: string | "pre" | "post" | "after"]: DeployProxyAspectFunction}

// Add your async functions here, smaller numbers have higher priority
export const deployments: DeployProxyRecord = {
  0: deployMock,
  1: deployContract
}

// You could do something before, post and after a deployment
export const aspects: DeployProxyAspectRecord = {
  "pre": (index, hre) => {
    console.log(`\n==================== ${index} ====================`)
    console.log(`Current chainId: ${hre.network.config.chainId}`)
  },
  "post": (index) => {
    console.log("Deploying...")
  },
  "after": (index) => {
    console.log(`==================== ${index} ====================\n`)
  }
}